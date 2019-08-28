import ListLexer from "./listlexer";

export interface IToken {
    type: number;
    text: string;
    toString: () => string;
};

export default class Token implements IToken {
    type: number;
    text: string;
    constructor(type: number, text: string) {
        this.type = type;
        this.text = text;
    }
    toString(): string {
        return `<'${this.text}', ${ListLexer.tokenNames[this.type]}>`;
    }
}