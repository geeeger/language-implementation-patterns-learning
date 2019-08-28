import Parser from "./parser";
import ListLexer from "../section-2-2/listlexer";

export default class ListParser extends Parser {
    constructor(input: ListLexer) {
        super(input);
    }

    public list(): void {
        this.match(ListLexer.LBRACK);
        this.elements();
        this.match(ListLexer.RBRACK);
    }

    elements(): void {
        this.element();
        while (this.lookahend.type === ListLexer.COMMA) {
            this.match(ListLexer.COMMA);
            this.element();
        }
    }

    element(): void {
        if (this.lookahend.type === ListLexer.NAME) {
            this.match(ListLexer.NAME);
        }
        else if (this.lookahend.type === ListLexer.LBRACK) {
            this.list();
        }
        else {
            throw new Error(`expecting name or list; found ${this.lookahend.toString()}`);
        }
    }
}