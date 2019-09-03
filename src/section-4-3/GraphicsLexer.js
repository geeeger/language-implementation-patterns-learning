// Generated from Graphics.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b*\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006 \n\u0006",
    "\r\u0006\u000e\u0006!\u0003\u0007\u0006\u0007%\n\u0007\r\u0007\u000e",
    "\u0007&\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0004\u0003\u00022",
    ";\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002+\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003\u0002",
    "\u0002\u0002\u0005\u0014\u0003\u0002\u0002\u0002\u0007\u0019\u0003\u0002",
    "\u0002\u0002\t\u001c\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002",
    "\u0002\u0002\r$\u0003\u0002\u0002\u0002\u000f\u0010\u0007n\u0002\u0002",
    "\u0010\u0011\u0007k\u0002\u0002\u0011\u0012\u0007p\u0002\u0002\u0012",
    "\u0013\u0007g\u0002\u0002\u0013\u0004\u0003\u0002\u0002\u0002\u0014",
    "\u0015\u0007h\u0002\u0002\u0015\u0016\u0007t\u0002\u0002\u0016\u0017",
    "\u0007q\u0002\u0002\u0017\u0018\u0007o\u0002\u0002\u0018\u0006\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007v\u0002\u0002\u001a\u001b\u0007",
    "q\u0002\u0002\u001b\b\u0003\u0002\u0002\u0002\u001c\u001d\u0007.\u0002",
    "\u0002\u001d\n\u0003\u0002\u0002\u0002\u001e \t\u0002\u0002\u0002\u001f",
    "\u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\u001f\u0003",
    "\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"\f\u0003\u0002\u0002",
    "\u0002#%\t\u0003\u0002\u0002$#\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    "(\u0003\u0002\u0002\u0002()\b\u0007\u0002\u0002)\u000e\u0003\u0002\u0002",
    "\u0002\u0005\u0002!&\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function GraphicsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

GraphicsLexer.prototype = Object.create(antlr4.Lexer.prototype);
GraphicsLexer.prototype.constructor = GraphicsLexer;

Object.defineProperty(GraphicsLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

GraphicsLexer.EOF = antlr4.Token.EOF;
GraphicsLexer.T__0 = 1;
GraphicsLexer.T__1 = 2;
GraphicsLexer.T__2 = 3;
GraphicsLexer.T__3 = 4;
GraphicsLexer.INT = 5;
GraphicsLexer.WS = 6;

GraphicsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

GraphicsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

GraphicsLexer.prototype.literalNames = [ null, "'line'", "'from'", "'to'", 
                                         "','" ];

GraphicsLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                          "INT", "WS" ];

GraphicsLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "INT", 
                                      "WS" ];

GraphicsLexer.prototype.grammarFileName = "Graphics.g4";



exports.GraphicsLexer = GraphicsLexer;

