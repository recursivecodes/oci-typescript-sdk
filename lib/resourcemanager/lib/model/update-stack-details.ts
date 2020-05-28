/**
 * Resource Manager API
 * API for the Resource Manager service. Use this API to install, configure, and manage resources via the "infrastructure-as-code" model. For more information, see [Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).
 * OpenAPI spec version: 20180917
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
 * Specifies which fields and the data for each to update on the specified stack.
 *
 */
export interface UpdateStackDetails {
  /**
   * The name of the stack.
   */
  "displayName"?: string;
  /**
   * Description of the stack.
   */
  "description"?: string;
  "configSource"?: model.UpdateZipUploadConfigSourceDetails;
  /**
   * Terraform variables associated with this resource.
   * The maximum number of variables supported is 100.
   * The maximum size of each variable, including both name and value, is 4096 bytes.
   * Example: `{\"CompartmentId\": \"compartment-id-value\"}`
   *
   */
  "variables"?: { [key: string]: string };
  /**
   * The version of Terraform to use with the stack. Example: `0.12.x`
   *
   */
  "terraformVersion"?: string;
  /**
   * Free-form tags associated with this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateStackDetails {
  export function getJsonObj(obj: UpdateStackDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configSource": obj.configSource
          ? model.UpdateConfigSourceDetails.getJsonObj(obj.configSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
