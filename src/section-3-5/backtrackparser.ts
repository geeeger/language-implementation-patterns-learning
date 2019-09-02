import Parser from "./parser";
import ListLexer from "../section-2-2/listlexer";
import Lexer from "../section-2-2/lexer";

export default class BacktrackParser extends Parser {
    constructor(input: ListLexer) {
        super(input);
    }

    /** stat : list EOF | assign EOF ; */
    public stat(): void {
        // attempt alternative 1: list EOF
        if (this.speculate_stat_alt1()) {
            this.list();
            this.match(Lexer.EOF_TYPE);
        }
        // attempt alternative 2: assign EOF
        else if (this.speculate_stat_alt2()) {
            this.assign();
            this.match(Lexer.EOF_TYPE);
        }
        // must be an error; neither matched; LT(1) is lookahead token 1
        else {
            throw new Error(`expecting stat found ${this.LT(1)}`);
        }
    }

    public speculate_stat_alt1(): boolean {
        let success: boolean = true;
        this.mark(); // mark this spot in input so we can rewind
        try {
            this.list();
            this.match(Lexer.EOF_TYPE);
        }
        catch (e) {
            success = false;
        }
        this.release(); // either way, rewind to where we were
        return success;
    }

    public speculate_stat_alt2(): boolean {
        let success = true;
        this.mark(); // mark this spot in input so we can rewind
        try {
            this.assign();
            this.match(Lexer.EOF_TYPE);
        }
        catch (e) {
            success = false;
        }
        this.release(); // either way, rewind to where we were
        return success;
    }

    /** assign : list '=' list ; // parallel assignment */
    public assign(): void {
        this.list();
        this.match(ListLexer.EQUALS);
        this.list();
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