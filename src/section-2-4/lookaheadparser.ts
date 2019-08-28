import Parser from "./parser";
import ListLexer from "../section-2-2/listlexer";

export default class LookaheadParser extends Parser {
    constructor(input: ListLexer, k: number) {
        super(input, k);
    }

    public list(): void {
        this.match(ListLexer.LBRACK);
        this.elements();
        this.match(ListLexer.RBRACK);
    }

    elements(): void {
        this.element();
        while (this.LT(1).type === ListLexer.COMMA) {
            this.match(ListLexer.COMMA);
            this.element();
        }
    }

    element(): void {
        if (this.LA(1) === ListLexer.NAME && this.LA(2) === ListLexer.EQUALS) {
            this.match(ListLexer.NAME);
            this.match(ListLexer.EQUALS);
            this.match(ListLexer.NAME);
        }
        else if (this.LA(1) === ListLexer.NAME) {
            this.match(ListLexer.NAME);
        }
        else if (this.LA(1) === ListLexer.LBRACK) {
            this.list();
        }
        else {
            throw new Error(`expecting name or list; found ${this.LT(1).toString()}`)
        }
    }
}