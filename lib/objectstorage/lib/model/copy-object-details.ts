/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
* The parameters required by Object Storage to process a request to copy an object to another bucket.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
* talk to an administrator. If you are an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface CopyObjectDetails {
  /**
   * The name of the object to be copied.
   */
  "sourceObjectName": string;
  /**
   * The entity tag (ETag) to match against that of the source object. Used to confirm that the source object
   * with a given name is the version of that object storing a specified ETag.
   *
   */
  "sourceObjectIfMatchETag"?: string;
  /**
   * VersionId of the object to copy. If not provided then current version is copied by default.
   */
  "sourceVersionId"?: string;
  /**
   * The destination region the object will be copied to, for example \"us-ashburn-1\".
   */
  "destinationRegion": string;
  /**
   * The destination Object Storage namespace the object will be copied to.
   */
  "destinationNamespace": string;
  /**
   * The destination bucket the object will be copied to.
   */
  "destinationBucket": string;
  /**
   * The name of the destination object resulting from the copy operation.
   */
  "destinationObjectName": string;
  /**
   * The entity tag (ETag) to match against that of the destination object (an object intended to be overwritten).
   * Used to confirm that the destination object stored under a given name is the version of that object
   * storing a specified entity tag.
   *
   */
  "destinationObjectIfMatchETag"?: string;
  /**
   * The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail
   * if the object already exists in the destination bucket.
   *
   */
  "destinationObjectIfNoneMatchETag"?: string;
  /**
   * Arbitrary string keys and values for the user-defined metadata for the object. Keys must be in
   * \"opc-meta-*\" format. Avoid entering confidential information. Metadata key-value pairs entered
   * in this field are assigned to the destination object. If you enter no metadata values, the destination
   * object will inherit any existing metadata values associated with the source object.
   *
   */
  "destinationObjectMetadata"?: { [key: string]: string };
}

export namespace CopyObjectDetails {
  export function getJsonObj(obj: CopyObjectDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
