/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * A hostname resource associated with a load balancer for use by one or more listeners.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface Hostname {
  /**
    * A friendly name for the hostname resource. It must be unique and it cannot be changed. Avoid entering confidential
* information.
* <p>
Example: `example_hostname_001`
* 
    */
  "name": string;
  /**
    * A virtual hostname. For more information about virtual hostname string construction, see
* [Managing Request Routing](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrequest.htm#routing).
* <p>
Example: `app.example.com`
* 
    */
  "hostname": string;
}

export namespace Hostname {
  export function getJsonObj(obj: Hostname): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}