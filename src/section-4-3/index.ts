import {InputStream, CommonTokenStream} from 'antlr4';
import {GraphicsParser} from './GraphicsParser';
import {GraphicsLexer} from './GraphicsLexer';
import fs from 'fs';
import path from 'path';

const text = fs.readFileSync(path.resolve(process.cwd() ,'src/section-4-3/box'), 'utf8');

const inputStream = new InputStream(text);
const lexer = new GraphicsLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new GraphicsParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
parser.file();
console.log('end');