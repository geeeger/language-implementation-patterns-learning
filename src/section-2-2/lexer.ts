import { IToken } from "./token";

interface ILexer {
    input: string;
    position: number;
    char: string;
}

export default abstract class Lexer implements ILexer {
    static EOF: string = '\u0003';
    static EOF_TYPE: number = 1;
    input: string = '';
    position: number = 0;
    char: string = '';
    constructor(input: string) {
        this.input = input;
        this.char = input.charAt(this.position);
    }

    consume(): void {
        this.position++;
        if (this.position >= this.input.length) {
            this.char = Lexer.EOF;
        }
        else {
            this.char = this.input.charAt(this.position);
        }
    }

    match(char: string): void {
        if (this.char === char) {
            this.consume();
        }
        else {
            throw new Error(`expecting ${char}; found ${this.char}`);
        }
    }

    abstract nextToken(): IToken;
    abstract getTokenName(tokenType: number): string;
};
