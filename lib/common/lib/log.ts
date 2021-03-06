/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import log4js = require("log4js");

/**
 * An interface defines the logger related APIs.
 */
export interface Logger {
  level: string;

  debug(message?: any, ...optionalParams: any[]): void;
  info(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
  trace(message?: any, ...optionalParams: any[]): void;
}

export class DefaultLogger implements Logger {
  private logger: log4js.Logger;

  public constructor() {
    this.logger = log4js.getLogger();
    this.level = "debug";
  }
  public get level(): string {
    return this.logger.level;
  }

  public set level(level: string) {
    this.logger.level = level;
  }

  public debug(message?: any, ...optionalParams: any[]): void {
    this.logger.debug(message, optionalParams);
  }

  public info(message?: any, ...optionalParams: any[]): void {
    this.logger.info(message, optionalParams);
  }

  public warn(message?: any, ...optionalParams: any[]): void {
    this.logger.warn(message, optionalParams);
  }

  public error(message?: any, ...optionalParams: any[]): void {
    this.logger.error(message, optionalParams);
  }

  public trace(message?: any, ...optionalParams: any[]): void {
    this.logger.trace(message, optionalParams);
  }
}
