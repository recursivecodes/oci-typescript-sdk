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
 * An object that represents the action of replacing or adding a header field.
 * All prior occurrences of the header with the given name are removed and then the header field with specified value is added.
 *
 */
export interface AddHttpResponseHeaderAction extends model.HeaderManipulationAction {
  /**
    * A header field name that conforms to RFC 7230.
* <p>
Example: `example_header_name`
* 
    */
  "header": string;
  /**
    * A header field value that conforms to RFC 7230.
* <p>
Example: `example_value`
* 
    */
  "value": string;

  "action": string;
}

export namespace AddHttpResponseHeaderAction {
  export function getJsonObj(obj: AddHttpResponseHeaderAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HeaderManipulationAction.getJsonObj(obj) as AddHttpResponseHeaderAction)),
      ...{}
    };

    return jsonObj;
  }
  export const action = "ADD_HTTP_RESPONSE_HEADER";
}
