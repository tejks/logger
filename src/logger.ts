import { LogType } from "./data";
import { DateType, DateManager } from "./date-manager";

export interface LoggerBuilder {
  params: LoggerParams;
  log: (d: Log) => void;
}

export interface LoggerParams {
  getDate: () => string;
}

type LoggerConstructor = {
  path?: string;
  dateType?: DateType;
  pattern?: string;
};

export type Log = {
  type: LogType;
  message: string;
};

export class Logger {
  private getDate: () => string;
  private loggers: LoggerBuilder[] = [];

  constructor({ dateType = "FullDate", pattern }: LoggerConstructor) {
    if (dateType == "Pattern" && !pattern)
      throw new Error("Pattern date type needs pattern param.");

    this.getDate = DateManager.build(dateType);
  }

  public constructLogger(builder: LoggerBuilder) {
    builder.params = {
      getDate: this.getDate,
    };
    this.loggers.push(builder);
  }

  public log(data: Log) {
    for (let logger of this.loggers) logger.log(data);
  }
}
