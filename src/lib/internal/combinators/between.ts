
/** @module parjs/combinators */ /** */
import {ImplicitParjser, ParjsCombinator} from "../../index";
import {defineCombinator} from "./combinator";
import {qthen, thenq} from "./then";
import {ScalarConverter} from "../scalar-converter";

/**
 * Applies `pre`, the source parser, and then `post`. Yields the result of
 * the source parser.
 * @param pre The parser to precede the source.
 * @param post The parser to proceed the source.
 */
export function between<T>(pre: ImplicitParjser<any>, post: ImplicitParjser<any>)
    : ParjsCombinator<T, T>;
/**
 * Applies the `surrounding` parser, followed by the source parser, and then
 * another instance of `surrounding`. Yields the result of the source parser.
 * @param surrounding The parser to apply before and after the source.
 */
export function between<T>(surrounding: ImplicitParjser<any>)
    : ParjsCombinator<T, T>;
export function between<T>(implPre: ImplicitParjser<any>, implPost?: ImplicitParjser<any>)
    : ParjsCombinator<T, T> {
    implPost = implPost || implPre;
    let pre = ScalarConverter.convert(implPre);
    let post = ScalarConverter.convert(implPost);
    return defineCombinator(source => {
        return pre.pipe(
            qthen(source),
            thenq(post)
        );
    });
}
