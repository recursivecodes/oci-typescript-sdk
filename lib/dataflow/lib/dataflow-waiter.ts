/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DataFlowClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataFlowWaiter {
  public constructor(
    private client: DataFlowClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forApplication till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetApplicationResponse | null (null in case of 404 response)
   */
  public async forApplication(
    request: serviceRequests.GetApplicationRequest,
    ...targetStates: models.ApplicationLifecycleState[]
  ): Promise<serviceResponses.GetApplicationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getApplication(request),
      response => targetStates.exists(response.application.lifecycleState),
      targetStates.includes(models.ApplicationLifecycleState.DELETED)
    );
  }

  /**
   * Waits forRun till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRunResponse
   */
  public async forRun(
    request: serviceRequests.GetRunRequest,
    ...targetStates: models.RunLifecycleState[]
  ): Promise<serviceResponses.GetRunResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getRun(request),
      response => targetStates.exists(response.run.lifecycleState)
    );
  }
}
