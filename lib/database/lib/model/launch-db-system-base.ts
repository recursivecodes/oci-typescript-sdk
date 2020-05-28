/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Parameters for provisioning a bare metal, virtual machine, or Exadata DB system.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface LaunchDbSystemBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment the DB system  belongs in.
   */
  "compartmentId": string;
  /**
    * A Fault Domain is a grouping of hardware and infrastructure within an availability domain.
* Fault Domains let you distribute your instances so that they are not on the same physical
* hardware within a single availability domain. A hardware failure or maintenance
* that affects one Fault Domain does not affect DB systems in other Fault Domains.
* <p>
If you do not specify the Fault Domain, the system selects one for you. To change the Fault
* Domain for a DB system, terminate it and launch a new DB system in the preferred Fault Domain.
* <p>
If the node count is greater than 1, you can specify which Fault Domains these nodes will be distributed into.
* The system assigns your nodes automatically to the Fault Domains you specify so that
* no Fault Domain contains more than one node.
* <p>
To get a list of Fault Domains, use the
* {@link #listFaultDomains(ListFaultDomainsRequest) listFaultDomains} operation in the
* Identity and Access Management Service API.
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomains"?: Array<string>;
  /**
   * The user-friendly name for the DB system. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The availability domain where the DB system is located.
   */
  "availabilityDomain": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the DB system is associated with.
* <p>
**Subnet Restrictions:**
* - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
* - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and the backup subnet.
* 
    */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems.
   * <p>
   **Subnet Restrictions:** See the subnet restrictions information for **subnetId**.
   *
   */
  "backupSubnetId"?: string;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that this resource belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - Autonomous Databases with private access require at least 1 Network Security Group (NSG). The nsgIds array cannot be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata DB systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
    * The shape of the DB system. The shape determines resources allocated to the DB system.
* - For virtual machine shapes, the number of CPU cores and memory
* - For bare metal and Exadata shapes, the number of CPU cores, memory, and storage
* <p>
To get a list of shapes, use the {@link #listDbSystemShapes(ListDbSystemShapesRequest) listDbSystemShapes} operation.
* 
    */
  "shape": string;
  /**
   * The time zone to use for the DB system. For details, see [DB System Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  "dbSystemOptions"?: model.DbSystemOptions;
  /**
   * If true, Sparse Diskgroup is configured for Exadata dbsystem. If False, Sparse diskgroup is not configured.
   *
   */
  "sparseDiskgroup"?: boolean;
  /**
   * The public key portion of the key pair to use for SSH access to the DB system. Multiple public keys can be provided. The length of the combined keys cannot exceed 40,000 characters.
   */
  "sshPublicKeys": Array<string>;
  /**
    * The hostname for the DB system. The hostname must begin with an alphabetic character, and
* can contain alphanumeric characters and hyphens (-). The maximum length of the hostname is 16 characters for bare metal and virtual machine DB systems, and 12 characters for Exadata DB systems.
* <p>
The maximum length of the combined hostname and domain is 63 characters.
* <p>
**Note:** The hostname must be unique within the subnet. If it is not unique,
* the DB system will fail to provision.
* 
    */
  "hostname": string;
  /**
   * A domain name used for the DB system. If the Oracle-provided Internet and VCN
   * Resolver is enabled for the specified subnet, the domain name for the subnet is used
   * (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
   *
   */
  "domain"?: string;
  /**
    * The number of CPU cores to enable for a bare metal or Exadata DB system. The valid values depend on the specified shape:
* <p>
- BM.DenseIO1.36 - Specify a multiple of 2, from 2 to 36.
* - BM.DenseIO2.52 - Specify a multiple of 2, from 2 to 52.
* - Exadata.Base.48 - Specify a multiple of 2, from 0 to 48.
* - Exadata.Quarter1.84 - Specify a multiple of 2, from 22 to 84.
* - Exadata.Half1.168 - Specify a multiple of 4, from 44 to 168.
* - Exadata.Full1.336 - Specify a multiple of 8, from 88 to 336.
* - Exadata.Quarter2.92 - Specify a multiple of 2, from 0 to 92.
* - Exadata.Half2.184 - Specify a multiple of 4, from 0 to 184.
* - Exadata.Full2.368 - Specify a multiple of 8, from 0 to 368.
* <p>
This parameter is not used for virtual machine DB systems because virtual machine DB systems have a set number of cores for each shape.
* For information about the number of cores for a virtual machine DB system shape, see [Virtual Machine DB Systems](https://docs.cloud.oracle.com/Content/Database/Concepts/overview.htm#virtualmachine)
* 
    */
  "cpuCoreCount": number;
  /**
   * The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
   *
   */
  "clusterName"?: string;
  /**
   * The percentage assigned to DATA storage (user data and database files).
   * The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups).
   * Specify 80 or 40. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems.
   *
   */
  "dataStoragePercentage"?: number;
  /**
   * Size (in GB) of the initial data volume that will be created and attached to a virtual machine DB system. You can scale up storage after provisioning, as needed. Note that the total storage size attached will be more than the amount you specify to allow for REDO/RECO space and software volume.
   *
   */
  "initialDataStorageSizeInGB"?: number;
  /**
   * The number of nodes to launch for a 2-node RAC virtual machine DB system. Specify either 1 or 2.
   *
   */
  "nodeCount"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "source": string;
}

export namespace LaunchDbSystemBase {
  export function getJsonObj(obj: LaunchDbSystemBase): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbSystemOptions": obj.dbSystemOptions
          ? model.DbSystemOptions.getJsonObj(obj.dbSystemOptions)
          : undefined
      }
    };

    if ("source" in obj && obj.source) {
      switch (obj.source) {
        case "NONE":
          return model.LaunchDbSystemDetails.getJsonObj(
            <model.LaunchDbSystemDetails>(<object>jsonObj),
            true
          );
        case "DB_BACKUP":
          return model.LaunchDbSystemFromBackupDetails.getJsonObj(
            <model.LaunchDbSystemFromBackupDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}
