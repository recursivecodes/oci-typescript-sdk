/**
 * Data Science API
 * Use the Data Science APIs to organize your data science work, access data and computing resources, and build, train, deploy, and manage models on Oracle Cloud.

 * OpenAPI spec version: 20190101
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
 * Notebook sessions are interactive coding environments for data scientists.
 *
 */
export interface NotebookSession {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the notebook session.
   */
  "id": string;
  /**
   * The date and time the resource was created, in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: 2019-08-25T21:10:29.41Z
   *
   */
  "timeCreated": Date;
  /**
   * A user-friendly display name for the resource. Does not have to be unique, and can be modified. Avoid entering confidential information.
   * Example: `My NotebookSession`
   *
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the project associated with the notebook session.
   */
  "projectId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the user who created the notebook session.
   */
  "createdBy": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/identifiers.htm) of the notebook session's compartment.
   */
  "compartmentId": string;
  "notebookSessionConfigurationDetails"?: model.NotebookSessionConfigurationDetails;
  /**
   * The URL to interact with the notebook session.
   */
  "notebookSessionUrl"?: string;
  /**
   * The state of the notebook session.
   */
  "lifecycleState": model.NotebookSessionLifecycleState;
  /**
   * Details about the state of the notebook session.
   */
  "lifecycleDetails"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace NotebookSession {
  export function getJsonObj(obj: NotebookSession): object {
    const jsonObj = {
      ...obj,
      ...{
        "notebookSessionConfigurationDetails": obj.notebookSessionConfigurationDetails
          ? model.NotebookSessionConfigurationDetails.getJsonObj(
              obj.notebookSessionConfigurationDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
