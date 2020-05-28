/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Input payload to scale an Analytics instance up or down.
 *
 */
export interface ScaleAnalyticsInstanceDetails {
  "capacity": model.Capacity;
}

export namespace ScaleAnalyticsInstanceDetails {
  export function getJsonObj(obj: ScaleAnalyticsInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getJsonObj(obj.capacity) : undefined
      }
    };

    return jsonObj;
  }
}
