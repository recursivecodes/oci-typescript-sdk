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
 * Details of an entity attribute. An attribute of a data entity describing an item of data,
 * with a name and data type. Synonymous with 'column' in a database.
 *
 */
export interface Attribute {
  /**
   * Unique attribute key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the attribute.
   */
  "description"?: string;
  /**
   * The unique key of the parent entity.
   */
  "entityKey"?: string;
  /**
   * State of the attribute.
   */
  "lifecycleState"?: string;
  /**
   * The date and time the attribute was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the attribute. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created this attribute in the data catalog.
   */
  "createdById"?: string;
  /**
   * OCID of the user who modified this attribute in the data catalog.
   */
  "updatedById"?: string;
  /**
   * Data type of the attribute as defined in the external system. Type mapping across systems can be achieved
   * through term associations across domains in the ontology. The attribute can also be tagged to the datatype in
   * the domain ontology to resolve any ambiguity arising from type name similarity that can occur with user
   * defined types.
   *
   */
  "externalDataType"?: string;
  /**
   * Unique external key of this attribute in the external source system.
   */
  "externalKey"?: string;
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
  "timeExternal"?: Date;
  /**
   * URI to the attribute instance in the API.
   */
  "uri"?: string;
  /**
   * A map of maps that contains the properties which are specific to the attribute type. Each attribute type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * attributes have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"key1\": \"value1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace Attribute {
  export function getJsonObj(obj: Attribute): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
