/**
 * The main module.
 * Contains the {@link Parjs} object and the most commonly used public interfaces.
 * @module parjs
 * @preferred
 */ /** iooi*/

import {ParjsParsers} from "./internal/static";
import {ParjsStatic} from "./parjs";

export {ParjsStatic};
export {UserState} from "./internal/implementation/state";
export {LoudParser} from "./loud";
export {QuietParser} from "./quiet";
export {ParjsParsingFailure} from "./errors"
export {AnyParser} from "./any";
export {ReplyKind, Reply, QuietReply} from "./reply";
export {ConvertibleLiteral, ImplicitAnyParser, ImplicitLoudParser} from "./convertible-literal"

/**
 * The central API of the parjs library. Contains building block parsers and static combinators.
 */
export const Parjs = new ParjsParsers() as ParjsStatic;


/**
 *
 */

