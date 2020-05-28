/**
 *
 *
 * OpenAPI spec version: 20181116
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
export interface ListWorkRequestsRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the policy.
   */
  "waasPolicyId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment. This number is generated when the compartment is created.
   */
  "compartmentId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated call. If unspecified, defaults to `10`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * The value by which work requests are sorted in a paginated 'List' call. If unspecified, defaults to `timeAccepted`.
   */
  "sortBy"?: ListWorkRequestsRequest.SortBy;
  /**
   * The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to `DESC`.
   */
  "sortOrder"?: ListWorkRequestsRequest.SortOrder;
}

export namespace ListWorkRequestsRequest {
  export enum SortBy {
    Id = "id",
    Status = "status",
    TimeAccepted = "timeAccepted",
    TimeStarted = "timeStarted",
    TimeFinished = "timeFinished",
    OperationType = "operationType"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
