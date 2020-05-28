/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

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

export interface CreateSubnetDetails {
  /**
    * Controls whether the subnet is regional or specific to an availability domain. Oracle
* recommends creating regional subnets because they're more flexible and make it easier to
* implement failover across availability domains. Originally, AD-specific subnets were the
* only kind available to use.
* <p>
To create a regional subnet, omit this attribute. Then any resources later created in this
* subnet (such as a Compute instance) can be created in any availability domain in the region.
* <p>
To instead create an AD-specific subnet, set this attribute to the availability domain you
* want this subnet to be in. Then any resources later created in this subnet can only be
* created in that availability domain.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
    * The CIDR IP address range of the subnet.
* <p>
Example: `172.16.1.0/24`
* 
    */
  "cidrBlock": string;
  /**
   * The OCID of the compartment to contain the subnet.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The OCID of the set of DHCP options the subnet will use. If you don't
   * provide a value, the subnet uses the VCN's default set of DHCP options.
   *
   */
  "dhcpOptionsId"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
    * A DNS label for the subnet, used in conjunction with the VNIC's hostname and
* VCN's DNS label to form a fully qualified domain name (FQDN) for each VNIC
* within this subnet (for example, `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be an alphanumeric string that begins with a letter and is unique within the VCN.
* The value cannot be changed.
* <p>
This value must be set if you want to use the Internet and VCN Resolver to resolve the
* hostnames of instances in the subnet. It can only be set if the VCN itself
* was created with a DNS label.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm).
* <p>
Example: `subnet123`
* 
    */
  "dnsLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Use this to enable IPv6 addressing for this subnet. The VCN must be enabled for IPv6.
* You can't change this subnet characteristic later. All subnets are /64 in size. The subnet
* portion of the IPv6 address is the fourth hextet from the left (1111 in the following example).
* <p>
For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](https://docs.cloud.oracle.com/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `2001:0db8:0123:1111::/64`
* 
    */
  "ipv6CidrBlock"?: string;
  /**
    * Whether learning mode is enabled for this subnet. The default is `false`.
* <p>
**Note:** When a subnet has learning mode enabled, only certain types
* of resources can be launched in the subnet.
* <p>
Example: `true`
* 
    */
  "isLearningEnabled"?: boolean;
  /**
   * The VLAN tag to associate with every VNIC Attachment within this Subnet, available only
   * on BareMetal secondary VNICs within learning enabled Subnets.
   * <p>
   **Note:** If the Subnet is learning enabled, the vlanTag value has to be passed in and cannot be empty.
   *
   */
  "vlanTag"?: number;
  /**
    * Whether VNICs within this subnet can have public IP addresses.
* Defaults to false, which means VNICs created in this subnet will
* automatically be assigned public IP addresses unless specified
* otherwise during instance launch or VNIC creation (with the
* `assignPublicIp` flag in {@link CreateVnicDetails}).
* If `prohibitPublicIpOnVnic` is set to true, VNICs created in this
* subnet cannot have public IP addresses (that is, it's a private
* subnet).
* <p>
For IPv6, if `prohibitPublicIpOnVnic` is set to `true`, internet access is not allowed for any
* IPv6s assigned to VNICs in the subnet.
* <p>
Example: `true`
* 
    */
  "prohibitPublicIpOnVnic"?: boolean;
  /**
   * The OCID of the route table the subnet will use. If you don't provide a value,
   * the subnet uses the VCN's default route table.
   *
   */
  "routeTableId"?: string;
  /**
   * The OCIDs of the security list or lists the subnet will use. If you don't
   * provide a value, the subnet uses the VCN's default security list.
   * Remember that security lists are associated *with the subnet*, but the
   * rules are applied to the individual VNICs in the subnet.
   *
   */
  "securityListIds"?: Array<string>;
  /**
   * The OCID of the VCN to contain the subnet.
   */
  "vcnId": string;
}

export namespace CreateSubnetDetails {
  export function getJsonObj(obj: CreateSubnetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
