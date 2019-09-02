import ListLexer from "../section-2-2/listlexer";
import ListParser from "./backtrackparser";


const lexer: ListLexer = new ListLexer('[a, b]=[c, d]');
const parser: ListParser = new ListParser(lexer);

parser.stat();
console.log('end');
