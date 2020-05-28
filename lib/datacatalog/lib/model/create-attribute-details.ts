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
 * Properties used in attribute create operations.
 */
export interface CreateAttributeDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Detailed description of the attribute.
   */
  "description"?: string;
  /**
   * Data type of the attribute as defined in the external system.
   */
  "externalDataType": string;
  /**
   * Property that identifies if this attribute can be used as a watermark to extract incremental data.
   */
  "isIncrementalData"?: boolean;
  /**
   * Property that identifies if this attribute can be assigned null values.
   */
  "isNullable"?: boolean;
  /**
   * Max allowed length of the attribute value.
   */
  "length"?: number;
  /**
   * Position of the attribute in the record definition.
   */
  "position"?: number;
  /**
   * Precision of the attribute value usually applies to float data type.
   */
  "precision"?: number;
  /**
   * Scale of the attribute value usually applies to float data type.
   */
  "scale"?: number;
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal": Date;
  /**
   * A map of maps that contains the properties which are specific to the attribute type. Each attribute type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * attributes have required properties within the \"default\" category. To determine the set of required and
   * optional properties for an attribute type, a query can be done on '/types?type=attribute' that returns a
   * collection of all attribute types. The appropriate attribute type, which will include definitions of all
   * of it's properties, can be identified from this collection.
   * Example: `{\"properties\": { \"default\": { \"key1\": \"value1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace CreateAttributeDetails {
  export function getJsonObj(obj: CreateAttributeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
