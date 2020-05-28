/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as dbbackups_waiter from "./lib/dbbackups-waiter";
import * as dbsystem_waiter from "./lib/dbsystem-waiter";
import * as mysqlaas_waiter from "./lib/mysqlaas-waiter";
import * as workrequests_waiter from "./lib/workrequests-waiter";

export { models };
export { requests };
export { responses };
export import DbBackupsClient = client.DbBackupsClient;
export import DbBackupsWaiter = dbbackups_waiter.DbBackupsWaiter;
export import DbSystemClient = client.DbSystemClient;
export import DbSystemWaiter = dbsystem_waiter.DbSystemWaiter;
export import MysqlaasClient = client.MysqlaasClient;
export import MysqlaasWaiter = mysqlaas_waiter.MysqlaasWaiter;
export import WorkRequestsClient = client.WorkRequestsClient;
export import WorkRequestsWaiter = workrequests_waiter.WorkRequestsWaiter;
