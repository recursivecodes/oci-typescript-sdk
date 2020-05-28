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
export interface SwitchoverDataGuardAssociationRequest {
  /**
   * The database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "databaseId": string;
  /**
   * The Data Guard association's [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "dataGuardAssociationId": string;
  /**
   * Request to swtichover a primary to a standby.
   */
  "switchoverDataGuardAssociationDetails": model.SwitchoverDataGuardAssociationDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous GET or POST response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
}
