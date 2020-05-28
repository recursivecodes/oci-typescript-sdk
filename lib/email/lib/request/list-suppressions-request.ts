/**
 *
 *
 * OpenAPI spec version: 20170907
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
export interface ListSuppressionsRequest {
  /**
   * The OCID for the compartment.
   */
  "compartmentId": string;
  /**
   * The request ID for tracing from the system
   */
  "opcRequestId"?: string;
  /**
   * The email address of the suppression.
   */
  "emailAddress"?: string;
  /**
   * Search for suppressions that were created within a specific date range,
   * using this parameter to specify the earliest creation date for the
   * returned list (inclusive). Specifying this parameter without the
   * corresponding `timeCreatedLessThan` parameter will retrieve suppressions created from the
   * given `timeCreatedGreaterThanOrEqualTo` to the current time, in \"YYYY-MM-ddThh:mmZ\" format with a
   * Z offset, as defined by RFC 3339.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * Search for suppressions that were created within a specific date range,
   * using this parameter to specify the latest creation date for the returned
   * list (exclusive). Specifying this parameter without the corresponding
   * `timeCreatedGreaterThanOrEqualTo` parameter will retrieve all suppressions created before the
   * specified end date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as
   * defined by RFC 3339.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeCreatedLessThan"?: Date;
  /**
   * For list pagination. The value of the opc-next-page response header from the previous \"List\" call.
   * For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a
   * paginated \"List\" call. `1` is the minimum, `1000` is the maximum. For important details about
   * how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The field to sort by. The `TIMECREATED` value returns the list in in
   * descending order by default. The `EMAILADDRESS` value returns the list in
   * ascending order by default. Use the `SortOrderQueryParam` to change the
   * direction of the returned list of items.
   *
   */
  "sortBy"?: ListSuppressionsRequest.SortBy;
  /**
   * The sort order to use, either ascending or descending order.
   *
   */
  "sortOrder"?: ListSuppressionsRequest.SortOrder;
}

export namespace ListSuppressionsRequest {
  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    EMAILADDRESS = "EMAILADDRESS"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
