/**
 * Notifications API
 * Use the Notifications API to broadcast messages to distributed components by topic, using a publish-subscribe pattern.
For information about managing topics, subscriptions, and messages, see [Notifications Overview](/iaas/Content/Notification/Concepts/notificationoverview.htm).

 * OpenAPI spec version: 20181201
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
 * The configuration details for creating the subscription.
 *
 */
export interface CreateSubscriptionDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the topic for the subscription.
   *
   */
  "topicId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment for the subscription.
   *
   */
  "compartmentId": string;
  /**
    * The protocol used for the subscription.
* <p>
Allowed values:
*   * `CUSTOM_HTTPS`
*   * `EMAIL`
*   * `HTTPS` (deprecated; for PagerDuty endpoints, use `PAGERDUTY`)
*   * `PAGERDUTY`
*   * `SLACK`
*   * `ORACLE_FUNCTIONS`
* <p>
For information about subscription protocols, see
* [To create a subscription](https://docs.cloud.oracle.com/iaas/Content/Notification/Tasks/managingtopicsandsubscriptions.htm#createSub).
* 
    */
  "protocol": string;
  /**
    * A locator that corresponds to the subscription protocol.
* For example, an email address for a subscription that uses the `EMAIL` protocol, or a URL for a subscription that uses an HTTP-based protocol.
* HTTP-based protocols use URL endpoints that begin with \"http:\" or \"https:\".
* A URL cannot exceed 512 characters.
* Avoid entering confidential information.
* <p>
For protocol-specific endpoint formats and steps to get or create endpoints, see
* [To create a subscription](https://docs.cloud.oracle.com/iaas/Content/Notification/Tasks/managingtopicsandsubscriptions.htm#createSub).
* 
    */
  "endpoint": string;
  /**
   * Metadata for the subscription.
   */
  "metadata"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateSubscriptionDetails {
  export function getJsonObj(obj: CreateSubscriptionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
