import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class FileContext extends ParserRuleContext {
    
}

export declare class CommandContext extends ParserRuleContext {
    
}

export declare class PointContext extends ParserRuleContext {
    
}


export declare class GraphicsParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    file(): FileContext;

    command(): CommandContext;

    point(): PointContext;

}
