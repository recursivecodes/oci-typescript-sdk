/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * A description of work request status.
 */
export interface WorkRequest {
  /**
   * Type of the work request.
   */
  "operationType": WorkRequest.OperationType;
  /**
   * Status of current work request.
   */
  "status": WorkRequest.Status;
  /**
   * The id of the work request.
   */
  "id": string;
  /**
   * The ocid of the compartment that contains the work request. Work
   * requests should be scoped to the same compartment as the resource the
   * work request affects. If the work request affects multiple resources,
   * and those resources are not in the same compartment, it is up to the
   * service team to pick the primary resource whose compartment should be
   * used.
   *
   */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the request completed.
   */
  "percentComplete": number;
  /**
   * The date and time the request was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the request was started, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the object was finished, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export enum OperationType {
    CREATEINTEGRATIONINSTANCE = "CREATE_INTEGRATION_INSTANCE",
    UPDATEINTEGRATIONINSTANCE = "UPDATE_INTEGRATION_INSTANCE",
    STOPINTEGRATIONINSTANCE = "STOP_INTEGRATION_INSTANCE",
    STARTINTEGRATIONINSTANCE = "START_INTEGRATION_INSTANCE",
    DELETEINTEGRATIONINSTANCE = "DELETE_INTEGRATION_INSTANCE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum Status {
    ACCEPTED = "ACCEPTED",
    INPROGRESS = "IN_PROGRESS",
    FAILED = "FAILED",
    SUCCEEDED = "SUCCEEDED",
    CANCELING = "CANCELING",
    CANCELED = "CANCELED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
