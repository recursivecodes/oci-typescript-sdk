/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * List of software package names
 */
export interface AddPackagesToSoftwareSourceDetails {
  /**
   * the list of package names
   */
  "packageNames": Array<string>;
}

export namespace AddPackagesToSoftwareSourceDetails {
  export function getJsonObj(obj: AddPackagesToSoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
