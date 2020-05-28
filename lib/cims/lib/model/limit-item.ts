/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details of Limit Item
 */
export interface LimitItem extends model.Item {
  /**
   * Current available limit of the resource
   */
  "currentLimit"?: number;
  /**
   * Current used limit of the resource
   */
  "currentUsage"?: number;
  /**
   * Requested limit for the resource
   */
  "requestedLimit"?: number;
  /**
   * Status of the Limit
   */
  "limitStatus"?: LimitItem.LimitStatus;

  "type": string;
}

export namespace LimitItem {
  export enum LimitStatus {
    APPROVED = "APPROVED",
    PARTIALLYAPPROVED = "PARTIALLY_APPROVED",
    NOTAPPROVED = "NOT_APPROVED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LimitItem, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Item.getJsonObj(obj) as LimitItem)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "limit";
}
