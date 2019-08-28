import Token from "../section-2-2/token";
import ListLexer from "../section-2-2/listlexer";

export default abstract class Parser {
    input: ListLexer;
    lookahend: Token;
    constructor(input: ListLexer) {
        this.input = input;
        this.lookahend = input.nextToken();
    }

    public match(lexerType: number): void {
        if (this.lookahend.type === lexerType) {
            this.consume();
        }
        else {
            throw new Error(`expecting ${this.input.getTokenName(lexerType)}; found ${this.lookahend.toString()}`);
        }
    }

    public consume(): void {
        this.lookahend = this.input.nextToken();
    }
}