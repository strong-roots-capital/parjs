import { ParjsAction } from "../../../base/action";
import { AnyParserAction } from "../../../abstract/basics/action";
import { ResultKind } from "../../../abstract/basics/result";
import { ParsingState } from "../../../abstract/basics/state";
/**
 * Created by User on 21-Nov-16.
 */
export declare class PrsMustCapture extends ParjsAction {
    private inner;
    private failType;
    displayName: string;
    isLoud: boolean;
    expecting: string;
    constructor(inner: AnyParserAction, failType: ResultKind);
    _apply(ps: ParsingState): void;
}