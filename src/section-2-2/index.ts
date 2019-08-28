import ListLexer from "./listlexer";
import Token from "./token";
import Lexer from "./lexer";

const lexer: ListLexer = new ListLexer('[a, b]');
let token: Token = lexer.nextToken();

while (token.type !== Lexer.EOF_TYPE) {
    console.log(token.toString());
    token = lexer.nextToken();
}

console.log(token.toString());
