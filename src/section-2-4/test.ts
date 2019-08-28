import ListLexer from "../section-2-2/listlexer";
import ListParser from "./lookaheadparser";


const lexer: ListLexer = new ListLexer('[a,b=c,,[d,e]]');
const parser: ListParser = new ListParser(lexer, 2);

parser.list();
console.log('end');
