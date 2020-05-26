/**
 *
 *
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
export interface ListFoldersRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey": string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: string;
  /**
   * Unique folder key.
   */
  "parentFolderKey"?: string;
  /**
   * Full path of the resource for resources that support paths.
   */
  "path"?: string;
  /**
   * Unique external identifier of this resource in the external source system.
   */
  "externalKey"?: string;
  /**
   * Time that the resource was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time that the resource was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the resource.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated the resource.
   */
  "updatedById"?: string;
  /**
   * Harvest status of the harvestable resource as updated by the harvest process.
   */
  "harvestStatus"?: string;
  /**
   * Key of the last harvest process to update this resource.
   */
  "lastJobKey"?: string;
  /**
   * Specifies the fields to return in a folder summary response.
   *
   */
  "fields"?: Array<ListFoldersRequest.Fields>;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListFoldersRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListFoldersRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListFoldersRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    ParentFolderKey = "parentFolderKey",
    Path = "path",
    DataAssetKey = "dataAssetKey",
    ExternalKey = "externalKey",
    TimeExternal = "timeExternal",
    TimeCreated = "timeCreated",
    LifecycleState = "lifecycleState",
    Uri = "uri"
  }

  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    DISPLAYNAME = "DISPLAYNAME"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}