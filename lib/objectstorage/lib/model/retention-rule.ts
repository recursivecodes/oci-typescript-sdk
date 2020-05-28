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

/**
 * The details of a retention rule.
 */
export interface RetentionRule {
  /**
   * Unique identifier for the retention rule.
   */
  "id": string;
  /**
   * User specified name for the retention rule.
   */
  "displayName": string;
  "duration"?: model.Duration;
  /**
   * The entity tag (ETag) for the retention rule.
   */
  "etag": string;
  /**
   * The date and time as per [RFC 3339](https://tools.ietf.org/html/rfc3339) after which this rule becomes locked.
   * and can only be deleted by deleting the bucket.
   *
   */
  "timeRuleLocked"?: Date;
  /**
   * The date and time that the retention rule was created as per [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time that the retention rule was modified as per [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeModified": Date;
}

export namespace RetentionRule {
  export function getJsonObj(obj: RetentionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "duration": obj.duration ? model.Duration.getJsonObj(obj.duration) : undefined
      }
    };

    return jsonObj;
  }
}
