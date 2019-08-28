import ListLexer from "../section-2-2/listlexer";
import ListParser from "./listparser";


const lexer: ListLexer = new ListLexer('[a, ]');
const parser: ListParser = new ListParser(lexer);

parser.list();
