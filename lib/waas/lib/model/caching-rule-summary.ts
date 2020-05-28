/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
 *
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
 * The caching rule settings.
 */
export interface CachingRuleSummary {
  /**
   * The unique key for the caching rule.
   */
  "key"?: string;
  /**
   * The name of the caching rule.
   */
  "name": string;
  /**
    * The action to take when the criteria of a caching rule are met.
* - **CACHE:** Caches requested content when the criteria of the rule are met.
* <p>
- **BYPASS_CACHE:** Allows requests to bypass the cache and be directed to the origin when the criteria of the rule is met.
    */
  "action": CachingRuleSummary.Action;
  /**
   * The duration to cache content for the caching rule, specified in ISO 8601 extended format. Supported units: seconds, minutes, hours, days, weeks, months. The maximum value that can be set for any unit is `99`. Mixing of multiple units is not supported. Only applies when the `action` is set to `CACHE`.
   * Example: `PT1H`
   */
  "cachingDuration"?: string;
  /**
   * Enables or disables client caching.
   * Browsers use the `Cache-Control` header value for caching content locally in the browser. This setting overrides the addition of a `Cache-Control` header in responses.
   */
  "isClientCachingEnabled"?: boolean;
  /**
   * The duration to cache content in the user's browser, specified in ISO 8601 extended format. Supported units: seconds, minutes, hours, days, weeks, months. The maximum value that can be set for any unit is `99`. Mixing of multiple units is not supported. Only applies when the `action` is set to `CACHE`.
   * Example: `PT1H`
   */
  "clientCachingDuration"?: string;
  /**
   * The array of the rule criteria with condition and value. The caching rule would be applied for the requests that matched any of the listed conditions.
   */
  "criteria": Array<model.CachingRuleCriteria>;
}

export namespace CachingRuleSummary {
  export enum Action {
    CACHE = "CACHE",
    BYPASSCACHE = "BYPASS_CACHE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CachingRuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "criteria": obj.criteria
          ? obj.criteria.map(item => {
              return model.CachingRuleCriteria.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
