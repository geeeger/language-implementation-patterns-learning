import Lexer from "./lexer";
import Token, { IToken } from "./token";

export default class ListLexer extends Lexer {
    static NAME: number = 2;
    static COMMA: number = 3;
    static LBRACK: number = 4;
    static RBRACK: number = 5;
    static EQUALS: number = 6;
    static tokenNames: string[] = [
        'n/a',
        '<EOF>',
        'NAME',
        'COMMA',
        'LBRACK',
        'RBRACK',
        'EQUALS'
    ];

    constructor(input: string) {
        super(input);
    }

    getTokenName(tokenType: number): string {
        return ListLexer.tokenNames[tokenType];
    }

    isLETTER(): boolean {
        return this.char >= 'a' &&
            this.char <= 'z' ||
            this.char >= 'A' &&
            this.char <= 'Z';
    }

    WS(): void {
		while (
			this.char === ' ' ||
			this.char === '\t' ||
			this.char === '\n' ||
			this.char === '\r'
		) {
			this.consume();
		}
    }
    
    NAME(): IToken {
        let str = '';
        do {
            str += this.char;
            this.consume();
        } while (this.isLETTER());
        return new Token(ListLexer.NAME, str);
    }

    nextToken(): IToken {
        while (this.char != Lexer.EOF) {
            switch (this.char) {
                case ' ':
                case '\t':
                case '\n':
                case '\r':
                    this.WS();
                    continue;
                case ',':
                    this.consume();
                    return new Token(ListLexer.COMMA, ',');
                case '[':
                    this.consume();
                    return new Token(ListLexer.LBRACK, '[');
                case ']':
                    this.consume();
                    return new Token(ListLexer.RBRACK, ']');
                case '=':
                    this.consume();
                    return new Token(ListLexer.EQUALS, '=');
                default:
                    if (this.isLETTER()) {
                        return this.NAME();
                    }
                    throw new Error(`invalid character: ${this.char}`);
            }
        }
        return new Token(Lexer.EOF_TYPE, '<EOF>');
    }
}