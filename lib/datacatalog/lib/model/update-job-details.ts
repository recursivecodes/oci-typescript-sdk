/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Job properties that can be updated.
 */
export interface UpdateJobDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the job.
   */
  "description"?: string;
  /**
   * Schedule specified in the cron expression format that has seven fields for second, minute, hour, day-of-month, month, day-of-week, year.
   * It can also include special characters like * for all and ? for any. There are also pre-defined schedules that can be specified using
   * special strings. For example, @hourly will run the job every hour.
   *
   */
  "scheduleCronExpression"?: string;
  /**
   * Date that the schedule should be operational. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeScheduleBegin"?: Date;
  /**
   * Date that the schedule should end from being operational. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeScheduleEnd"?: Date;
  /**
   * The key of the connection resource that is used for the harvest by this job.
   */
  "connectionKey"?: string;
}

export namespace UpdateJobDetails {
  export function getJsonObj(obj: UpdateJobDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
