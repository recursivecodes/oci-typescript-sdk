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

/**
 * A group created in an identity provider that can be mapped to a group in OCI
 *
 */
export interface IdentityProviderGroupSummary {
  /**
   * The OCID of the `IdentityProviderGroup`.
   */
  "id"?: string;
  /**
   * The OCID of the `IdentityProvider` this group belongs to.
   */
  "identityProviderId"?: string;
  /**
   * Display name of the group
   */
  "displayName"?: string;
  /**
   * Identifier of the group in the identity provider
   */
  "externalIdentifier"?: string;
  /**
    * Date and time the `IdentityProviderGroup` was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * Date and time the `IdentityProviderGroup` was last modified, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeModified"?: Date;
}

export namespace IdentityProviderGroupSummary {
  export function getJsonObj(obj: IdentityProviderGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
