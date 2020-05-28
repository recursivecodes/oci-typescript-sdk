/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Details required to update a DB System.
 *
 */
export interface UpdateDbSystemDetails {
  /**
   * The user-friendly name for the DB System. It does not have to be unique.
   */
  "displayName"?: string;
  /**
   * User-provided data about the DB System.
   */
  "description"?: string;
  /**
   * The OCID of the subnet the DB System is associated with.
   *
   */
  "subnetId"?: string;
  /**
   * The Availability Domain where the primary instance should be located.
   *
   */
  "availabilityDomain"?: string;
  /**
   * The name of the Fault Domain the DB System is located in.
   *
   */
  "faultDomain"?: string;
  /**
    * The shape of the DB System. The shape determines resources
* allocated to the DB System - CPU cores and memory for VM
* shapes; CPU cores, memory and storage for non-VM (or bare metal)
* shapes. To get a list of shapes, use the
* {@link #listShapes(ListShapesRequest) listShapes}
* operation.
* <p>
Changes in Shape will result in a downtime as the MySQL DB System is
* migrated to the new Compute instance.
* 
    */
  "shapeName"?: string;
  /**
   * The specific MySQL version identifier.
   */
  "mysqlVersion"?: string;
  /**
   * The OCID of the Configuration to be used for Instances in this DB System.
   */
  "configurationId"?: string;
  /**
   * The username for the administrative user for the MySQL Instance.
   */
  "adminUsername"?: string;
  /**
   * The password for the administrative user. The password must be
   * between 8 and 32 characters long, and must contain at least 1
   * numeric character, 1 lowercase character, 1 uppercase character, and
   * 1 special (nonalphanumeric) character.
   *
   */
  "adminPassword"?: string;
  /**
    * New size of the data volume in GBs that will be created and attached.
* <p>
Increases in data storage size will happen asynchronously and will require DB System downtime.
* <p>
Decreases in data storage size are not supported.
* 
    */
  "dataStorageSizeInGBs"?: number;
  /**
   * The hostname for the primary endpoint of the DB System. Used for DNS.
   * The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN)
   * (for example, \"dbsystem-1\" in FQDN \"dbsystem-1.subnet123.vcn1.oraclevcn.com\").
   * Must be unique across all VNICs in the subnet and comply with RFC 952 and RFC 1123.
   *
   */
  "hostnameLabel"?: string;
  /**
   * The IP address the DB System should be configured to listen on the provided subnet.
   * It must be a free private IP address within the subnet's CIDR. If you don't specify a
   * value, Oracle automatically assigns a private IP address from the subnet. This should
   * be a \"dotted-quad\" style IPv4 address.
   *
   */
  "ipAddress"?: string;
  /**
   * The port for primary endpoint of the DB System to listen on.
   */
  "port"?: number;
  /**
   * The TCP network port on which X Plugin listens for connections. This is the X Plugin equivalent of port.
   *
   */
  "portX"?: number;
  "backupPolicy"?: model.UpdateBackupPolicyDetails;
  "maintenance"?: model.UpdateMaintenanceDetails;
  /**
   * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
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
}

export namespace UpdateDbSystemDetails {
  export function getJsonObj(obj: UpdateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupPolicy": obj.backupPolicy
          ? model.UpdateBackupPolicyDetails.getJsonObj(obj.backupPolicy)
          : undefined,
        "maintenance": obj.maintenance
          ? model.UpdateMaintenanceDetails.getJsonObj(obj.maintenance)
          : undefined
      }
    };

    return jsonObj;
  }
}
