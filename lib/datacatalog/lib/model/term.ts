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
 * Full term definition. A defined business term in a business glossary. As well as a term definition, simple format
 * rules for attributes mapping to the term (for example, the expected data type and length restrictions) may be
 * stated at the term level. Nesting of terms to support a hierarchy is supported by default.
 *
 */
export interface Term {
  /**
   * Unique term key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the term.
   */
  "description"?: string;
  /**
   * Unique id of the parent glossary.
   */
  "glossaryKey"?: string;
  /**
   * This terms parent term key. Will be null if the term has no parent term.
   */
  "parentTermKey"?: string;
  /**
   * Indicates whether a term may contain child terms.
   */
  "isAllowedToHaveChildTerms"?: boolean;
  /**
   * Absolute path of the term.
   */
  "path"?: string;
  /**
   * The current state of the term.
   */
  "lifecycleState"?: string;
  /**
   * The date and time the term was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the term. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the term.
   */
  "createdById"?: string;
  /**
   * OCID of the user who modified the term.
   */
  "updatedById"?: string;
  /**
   * OCID of the user who is the owner of this business terminology.
   */
  "owner"?: string;
  /**
   * Status of the approval process workflow for this business term in the glossary.
   */
  "workflowStatus"?: string;
  /**
   * URI to the term instance in the API.
   */
  "uri"?: string;
  /**
   * The number of objects tagged with this term
   */
  "associatedObjectCount"?: number;
  /**
   * Array of objects associated to a term.
   */
  "associatedObjects"?: Array<model.TermAssociatedObject>;
}

export namespace Term {
  export function getJsonObj(obj: Term): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedObjects": obj.associatedObjects
          ? obj.associatedObjects.map(item => {
              return model.TermAssociatedObject.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
