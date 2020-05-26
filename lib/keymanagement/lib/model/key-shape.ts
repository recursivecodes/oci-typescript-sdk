/**
 * Key Management Service API
 * API for managing and performing operations with keys and vaults.
 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The cryptographic properties of a key.
 */
export interface KeyShape {
  /**
   * The algorithm used by a key's key versions to encrypt or decrypt.
   */
  "algorithm": KeyShape.Algorithm;
  /**
   * The length of the key, expressed as an integer. Values of 16, 24, or 32 are supported.
   *
   */
  "length": number;
}

export namespace KeyShape {
  export enum Algorithm {
    AES = "AES",
    RSA = "RSA",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KeyShape): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}