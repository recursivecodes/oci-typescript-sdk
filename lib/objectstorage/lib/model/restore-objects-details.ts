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

export interface RestoreObjectsDetails {
  /**
   * An object that is in an archive storage tier and needs to be restored.
   */
  "objectName": string;
  /**
   * The number of hours for which this object will be restored.
   * By default objects will be restored for 24 hours. You can instead configure the duration using the hours parameter.
   *
   */
  "hours"?: number;
  /**
   * The versionId of the object to restore. Current object version is used by default.
   *
   */
  "versionId"?: string;
}

export namespace RestoreObjectsDetails {
  export function getJsonObj(obj: RestoreObjectsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}