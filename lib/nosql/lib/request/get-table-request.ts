/**
 *
 *
 * OpenAPI spec version: 20190828
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
export interface GetTableRequest {
  /**
   * A table name within the compartment, or a table OCID.
   */
  "tableNameOrId": string;
  /**
   * The ID of a table's compartment. When a table is identified
   * by name, the compartmentId is often needed to provide
   * context for interpreting the name.
   *
   */
  "compartmentId"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}