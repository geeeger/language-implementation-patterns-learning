import Token from "../section-2-2/token";
import ListLexer from "../section-2-2/listlexer";

export default abstract class Parser {
    input: ListLexer;
    lookahend: Token[];
    k: number;
    p: number = 0;
    constructor(input: ListLexer, k: number) {
        this.input = input;
        this.k = k;
        this.lookahend = new Array(k);
        for (let i = 1; i <= k; i++) {
            this.consume();
        }
    }

    public match(lexerType: number): void {
        if (this.LA(1) === lexerType) {
            this.consume();
        }
        else {
            throw new Error(`expecting ${this.input.getTokenName(lexerType)}; found ${this.LT(1).toString()}`);
        }
    }

    public consume(): void {
        this.lookahend[this.p] = this.input.nextToken();
        this.p = (this.p + 1) % this.k;
    }

    public LT(i: number): Token {
        return this.lookahend[(this.p + i - 1) % this.k];
    }

    public LA(i: number): number {
        return this.LT(i).type;
    }
}