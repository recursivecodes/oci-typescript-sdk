/**
 * Oracle Content and Experience API
 * Oracle Content and Experience is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * Details of OceInstance.
 */
export interface OceInstance {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Unique GUID identifier that is immutable on creation
   */
  "guid": string;
  /**
   * OceInstance description, can be updated
   */
  "description"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * OceInstance Name
   */
  "name": string;
  /**
   * Tenancy Identifier
   */
  "tenancyId": string;
  /**
   * IDCS Tenancy Identifier
   */
  "idcsTenancy": string;
  /**
   * Tenancy Name
   */
  "tenancyName": string;
  /**
   * Upgrade schedule type representing service to be upgraded immediately whenever latest version is released
   * or delay upgrade of the service to previous released version
   *
   */
  "upgradeSchedule"?: OceInstance.UpgradeSchedule;
  "identityStripe"?: model.IdentityStripeDetails;
  /**
   * Instance type based on its usage
   */
  "instanceUsageType"?: OceInstance.InstanceUsageType;
  /**
   * Object Storage Namespace of tenancy
   */
  "objectStorageNamespace": string;
  /**
   * Admin Email for Notification
   */
  "adminEmail": string;
  /**
   * Web Application Firewall(WAF) primary domain
   */
  "wafPrimaryDomain"?: string;
  /**
   * Flag indicating whether the instance access is private or public
   */
  "instanceAccessType"?: OceInstance.InstanceAccessType;
  /**
   * The time the the OceInstance was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the OceInstance was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the file system.
   */
  "lifecycleState"?: OceInstance.LifecycleState;
  /**
   * An message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * SERVICE data.
   * Example: `{\"service\": {\"IDCS\": \"value\"}}`
   *
   */
  "service"?: { [key: string]: any };
}

export namespace OceInstance {
  export enum UpgradeSchedule {
    UPGRADEIMMEDIATELY = "UPGRADE_IMMEDIATELY",
    DELAYEDUPGRADE = "DELAYED_UPGRADE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum InstanceUsageType {
    PRIMARY = "PRIMARY",
    NONPRIMARY = "NONPRIMARY",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum InstanceAccessType {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    CREATING = "CREATING",
    UPDATING = "UPDATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OceInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "identityStripe": obj.identityStripe
          ? model.IdentityStripeDetails.getJsonObj(obj.identityStripe)
          : undefined
      }
    };

    return jsonObj;
  }
}
