/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * A set of file systems to export through one or more mount
 * targets. Composed of zero or more export resources.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface ExportSet {
  /**
    * The availability domain the export set is in. May be unset
* as a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The OCID of the compartment that contains the export set.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My export set`
* 
    */
  "displayName": string;
  /**
   * The OCID of the export set.
   */
  "id": string;
  /**
   * The current state of the export set.
   */
  "lifecycleState": ExportSet.LifecycleState;
  /**
   * Controls the maximum `tbytes`, `fbytes`, and `abytes`,
   * values reported by `NFS FSSTAT` calls through any associated
   * mount targets. This is an advanced feature. For most
   * applications, use the default value. The
   * `tbytes` value reported by `FSSTAT` will be
   * `maxFsStatBytes`. The value of `fbytes` and `abytes` will be
   * `maxFsStatBytes` minus the metered size of the file
   * system. If the metered size is larger than `maxFsStatBytes`,
   * then `fbytes` and `abytes` will both be '0'.
   *
   */
  "maxFsStatBytes"?: number;
  /**
   * Controls the maximum `tfiles`, `ffiles`, and `afiles`
   * values reported by `NFS FSSTAT` calls through any associated
   * mount targets. This is an advanced feature. For most
   * applications, use the default value. The
   * `tfiles` value reported by `FSSTAT` will be
   * `maxFsStatFiles`. The value of `ffiles` and `afiles` will be
   * `maxFsStatFiles` minus the metered size of the file
   * system. If the metered size is larger than `maxFsStatFiles`,
   * then `ffiles` and `afiles` will both be '0'.
   *
   */
  "maxFsStatFiles"?: number;
  /**
    * The date and time the export set was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The OCID of the virtual cloud network (VCN) the export set is in.
   */
  "vcnId": string;
}

export namespace ExportSet {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    DELETED = "DELETED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExportSet): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
