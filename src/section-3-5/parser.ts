import Token from "../section-2-2/token";
import ListLexer from "../section-2-2/listlexer";

export default abstract class Parser {
    input: ListLexer;
    markers: number[];
    lookahend: Token[];
    p: number = 0;
    constructor(input: ListLexer) {
        this.input = input;
        this.lookahend = [];
        this.markers = [];
        this.sync(1);
    }

    public sync(i: number): void {
        if (this.p + i - 1 > this.lookahend.length - 1) {
            const n = this.p + i - 1 - (this.lookahend.length - 1);
            this.fill(n);
        }
    }

    public fill(n: number): void {
        for (let i = 1; i <= n; i++) {
            this.lookahend.push(this.input.nextToken());
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
        this.p++;
        if (this.p === this.lookahend.length && !this.isSpeculating()) {
            this.p = 0;
            this.lookahend = [];
        }
        this.sync(1);
    }

    public isSpeculating(): boolean {
        return this.markers.length > 0;
    }

    public LT(i: number): Token {
        this.sync(i);
        return this.lookahend[this.p + i - 1];
    }

    public LA(i: number): number {
        return this.LT(i).type;
    }

    public mark(): number {
        this.markers.push(this.p);
        return this.p;
    }

    public release(): void {
        const marker = this.markers.pop() as number;
        this.seek(marker);
    }

    public seek(index: number): void {
        this.p = index;
    }
}