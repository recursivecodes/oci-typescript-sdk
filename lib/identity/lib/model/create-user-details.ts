/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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

export interface CreateUserDetails {
  /**
   * The OCID of the tenancy containing the user.
   */
  "compartmentId": string;
  /**
   * The name you assign to the user during creation. This is the user's login for the Console.
   * The name must be unique across all users in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description you assign to the user during creation. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
   * The email you assign to the user. Has to be unique across the tenancy.
   */
  "email"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateUserDetails {
  export function getJsonObj(obj: CreateUserDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
