/**
 *
 *
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
export interface ListBackupDestinationRequest {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only resources that match the given type of the Backup Destination.
   */
  "type"?: string;
}
