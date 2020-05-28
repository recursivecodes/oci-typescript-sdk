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

export interface RestoreKeyFromObjectStoreDetails {
  "backupLocation"?: model.BackupLocationBucket | model.BackupLocationURI;
}

export namespace RestoreKeyFromObjectStoreDetails {
  export function getJsonObj(obj: RestoreKeyFromObjectStoreDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupLocation": obj.backupLocation
          ? model.BackupLocation.getJsonObj(obj.backupLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
