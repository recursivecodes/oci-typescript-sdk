/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
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

/**
 * Properties indicating how the user is allowed to authenticate.
 */
export interface UserCapabilities {
  /**
   * Indicates if the user can log in to the console.
   */
  "canUseConsolePassword"?: boolean;
  /**
   * Indicates if the user can use API keys.
   */
  "canUseApiKeys"?: boolean;
  /**
   * Indicates if the user can use SWIFT passwords / auth tokens.
   */
  "canUseAuthTokens"?: boolean;
  /**
   * Indicates if the user can use SMTP passwords.
   */
  "canUseSmtpCredentials"?: boolean;
  /**
   * Indicates if the user can use SigV4 symmetric keys.
   */
  "canUseCustomerSecretKeys"?: boolean;
  /**
   * Indicates if the user can use OAuth2 credentials and tokens.
   *
   */
  "canUseOAuth2ClientCredentials"?: boolean;
}

export namespace UserCapabilities {
  export function getJsonObj(obj: UserCapabilities): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
