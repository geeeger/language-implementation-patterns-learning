import Parser from "./parser";
import ListLexer from "../section-2-2/listlexer";
import Lexer from "../section-2-2/lexer";

export default class BacktrackParser extends Parser {
    list_memo: Map<number, number> = new Map();
    constructor(input: ListLexer) {
        super(input);
    }

    public clearMemo(): void {
        this.list_memo.clear();
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
            console.log('predict alternative 2');
            this.assign();
            this.match(Lexer.EOF_TYPE);
        }
        // must be an error; neither matched; LT(1) is lookahead token 1
        else {
            throw new Error(`expecting stat found ${this.LT(1)}`);
        }
    }

    public speculate_stat_alt1(): boolean {
        console.log('attempt alternative 1');
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
        console.log('attempt alternative 2');
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
        let failed: boolean = false;
        const startTokenIndex = this.index();
        if (this.isSpeculating() && this.alreadyParsedRule(this.list_memo)) {
            return;
        }

        try {
            this._list();
        }
        catch (e) {
            failed = true;
            throw e;
        }
        finally {
            if (this.isSpeculating()) {
                this.memoize(this.list_memo, startTokenIndex, failed);
            }
        }
    }

    public _list(): void {
        console.log(`parse list rule at token index: ${this.index()}`);
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