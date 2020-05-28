/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Properties used in data asset create operations.
 */
export interface CreateDataAssetDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Detailed description of the data asset.
   */
  "description"?: string;
  /**
   * The key of the data asset type. This can be obtained via the '/types' endpoint.
   */
  "typeKey": string;
  /**
   * A map of maps that contains the properties which are specific to the data asset type. Each data asset type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * data assets have required properties within the \"default\" category. To determine the set of optional and
   * required properties for a data asset type, a query can be done on '/types?type=dataAsset' that returns a
   * collection of all data asset types. The appropriate data asset type, which includes definitions of all of
   * it's properties, can be identified from this collection.
   * Example: `{\"properties\": { \"default\": { \"host\": \"host1\", \"port\": \"1521\", \"database\": \"orcl\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace CreateDataAssetDetails {
  export function getJsonObj(obj: CreateDataAssetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
