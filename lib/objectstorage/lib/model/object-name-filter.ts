/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A filter that compares object names to a set of prefixes or patterns to determine if a rule applies to a
 * given object. The filter can contain include glob patterns, exclude glob patterns and inclusion prefixes.
 * The inclusion prefixes property is kept for backward compatibility. It is recommended to use inclusion patterns
 * instead of prefixes. Exclusions take precedence over inclusions.
 *
 */
export interface ObjectNameFilter {
  /**
   * An array of object name prefixes that the rule will apply to. An empty array means to include all objects.
   *
   */
  "inclusionPrefixes"?: Array<string>;
  /**
    * An array of glob patterns to match the object names to include. An empty array includes all objects in the
* bucket. Exclusion patterns take precedence over inclusion patterns.
* A Glob pattern is a sequence of characters to match text. Any character that appears in the pattern, other
* than the special pattern characters described below, matches itself.
*     Glob patterns must be between 1 and 1024 characters.
* <p>
    The special pattern characters have the following meanings:
* <p>
    \\           Escapes the following character
*     *           Matches any string of characters.
*     ?           Matches any single character .
*     [...]       Matches a group of characters. A group of characters can be:
*                     A set of characters, for example: [Zafg9@]. This matches any character in the brackets.
*                     A range of characters, for example: [a-z]. This matches any character in the range.
*                         [a-f] is equivalent to [abcdef].
*                         For character ranges only the CHARACTER-CHARACTER pattern is supported.
*                             [ab-yz] is not valid
*                             [a-mn-z] is not valid
*                         Character ranges can not start with ^ or :
*                         To include a '-' in the range, make it the first or last character.
* 
    */
  "inclusionPatterns"?: Array<string>;
  /**
    * An array of glob patterns to match the object names to exclude. An empty array is ignored. Exclusion
* patterns take precedence over inclusion patterns.
* A Glob pattern is a sequence of characters to match text. Any character that appears in the pattern, other
* than the special pattern characters described below, matches itself.
*     Glob patterns must be between 1 and 1024 characters.
* <p>
    The special pattern characters have the following meanings:
* <p>
    \\           Escapes the following character
*     *           Matches any string of characters.
*     ?           Matches any single character .
*     [...]       Matches a group of characters. A group of characters can be:
*                     A set of characters, for example: [Zafg9@]. This matches any character in the brackets.
*                     A range of characters, for example: [a-z]. This matches any character in the range.
*                         [a-f] is equivalent to [abcdef].
*                         For character ranges only the CHARACTER-CHARACTER pattern is supported.
*                             [ab-yz] is not valid
*                             [a-mn-z] is not valid
*                         Character ranges can not start with ^ or :
*                         To include a '-' in the range, make it the first or last character.
* 
    */
  "exclusionPatterns"?: Array<string>;
}

export namespace ObjectNameFilter {
  export function getJsonObj(obj: ObjectNameFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
