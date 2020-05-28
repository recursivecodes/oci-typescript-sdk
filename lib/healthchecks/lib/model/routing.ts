/**
 * Health Checks API
 * API for the Health Checks service. Use this API to manage endpoint probes and monitors.
For more information, see
[Overview of the Health Checks Service](/iaas/Content/HealthChecks/Concepts/healthchecks.htm).

 * OpenAPI spec version: 20180501
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
 * The routing information for a vantage point.
 */
export interface Routing {
  /**
   * The registry label for `asn`, usually the name of the organization that
   * owns the ASN. May be omitted or null.
   *
   */
  "asLabel"?: string;
  /**
   * The Autonomous System Number (ASN) identifying the organization
   * responsible for routing packets to `prefix`.
   *
   */
  "asn"?: number;
  /**
   * An IP prefix (CIDR syntax) that is less specific than
   * `address`, through which `address` is routed.
   *
   */
  "prefix"?: string;
  /**
   * An integer between 0 and 100 used to select between multiple
   * origin ASNs when routing to `prefix`. Most prefixes have
   * exactly one origin ASN, in which case `weight` will be 100.
   *
   */
  "weight"?: number;
}

export namespace Routing {
  export function getJsonObj(obj: Routing): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
