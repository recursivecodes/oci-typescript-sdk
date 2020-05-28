/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
 * 
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
import * as blockstorage_waiter from "./lib/blockstorage-waiter";
import * as compute_waiter from "./lib/compute-waiter";
import * as computemanagement_waiter from "./lib/computemanagement-waiter";
import * as virtualnetwork_waiter from "./lib/virtualnetwork-waiter";

export { models };
export { requests };
export { responses };
export import BlockstorageClient = client.BlockstorageClient;
export import BlockstorageWaiter = blockstorage_waiter.BlockstorageWaiter;
export import ComputeClient = client.ComputeClient;
export import ComputeWaiter = compute_waiter.ComputeWaiter;
export import ComputeManagementClient = client.ComputeManagementClient;
export import ComputeManagementWaiter = computemanagement_waiter.ComputeManagementWaiter;
export import VirtualNetworkClient = client.VirtualNetworkClient;
export import VirtualNetworkWaiter = virtualnetwork_waiter.VirtualNetworkWaiter;
