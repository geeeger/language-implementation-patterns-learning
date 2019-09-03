// Generated from Graphics.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "Graphics.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b\u0018\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005",
    "\u0002\u0004\u0006\u0002\u0002\u0002\u0015\u0002\t\u0003\u0002\u0002",
    "\u0002\u0004\r\u0003\u0002\u0002\u0002\u0006\u0013\u0003\u0002\u0002",
    "\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002\u0002\n\u000b",
    "\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003",
    "\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000e\u0007\u0003",
    "\u0002\u0002\u000e\u000f\u0007\u0004\u0002\u0002\u000f\u0010\u0005\u0006",
    "\u0004\u0002\u0010\u0011\u0007\u0005\u0002\u0002\u0011\u0012\u0005\u0006",
    "\u0004\u0002\u0012\u0005\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u0007",
    "\u0002\u0002\u0014\u0015\u0007\u0006\u0002\u0002\u0015\u0016\u0007\u0007",
    "\u0002\u0002\u0016\u0007\u0003\u0002\u0002\u0002\u0003\u000b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'line'", "'from'", "'to'", "','" ];

var symbolicNames = [ null, null, null, null, null, "INT", "WS" ];

var ruleNames =  [ "file", "command", "point" ];

function GraphicsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GraphicsParser.prototype = Object.create(antlr4.Parser.prototype);
GraphicsParser.prototype.constructor = GraphicsParser;

Object.defineProperty(GraphicsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GraphicsParser.EOF = antlr4.Token.EOF;
GraphicsParser.T__0 = 1;
GraphicsParser.T__1 = 2;
GraphicsParser.T__2 = 3;
GraphicsParser.T__3 = 4;
GraphicsParser.INT = 5;
GraphicsParser.WS = 6;

GraphicsParser.RULE_file = 0;
GraphicsParser.RULE_command = 1;
GraphicsParser.RULE_point = 2;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphicsParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.command = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandContext);
    } else {
        return this.getTypedRuleContext(CommandContext,i);
    }
};




GraphicsParser.FileContext = FileContext;

GraphicsParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GraphicsParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.command();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GraphicsParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphicsParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.point = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PointContext);
    } else {
        return this.getTypedRuleContext(PointContext,i);
    }
};




GraphicsParser.CommandContext = CommandContext;

GraphicsParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GraphicsParser.RULE_command);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this.match(GraphicsParser.T__0);
        this.state = 12;
        this.match(GraphicsParser.T__1);
        this.state = 13;
        this.point();
        this.state = 14;
        this.match(GraphicsParser.T__2);
        this.state = 15;
        this.point();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PointContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphicsParser.RULE_point;
    return this;
}

PointContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PointContext.prototype.constructor = PointContext;

PointContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GraphicsParser.INT);
    } else {
        return this.getToken(GraphicsParser.INT, i);
    }
};





GraphicsParser.PointContext = PointContext;

GraphicsParser.prototype.point = function() {

    var localctx = new PointContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GraphicsParser.RULE_point);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(GraphicsParser.INT);
        this.state = 18;
        this.match(GraphicsParser.T__3);
        this.state = 19;
        this.match(GraphicsParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.GraphicsParser = GraphicsParser;
exports.FileContext = FileContext;
GraphicsParser.FileContext = FileContext;
exports.CommandContext = CommandContext;
GraphicsParser.CommandContext = CommandContext;
exports.PointContext = PointContext;
GraphicsParser.PointContext = PointContext;
