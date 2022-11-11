import { Log, LoggerBuilder, LoggerParams } from "../logger";
import fs from "fs";
import { DEFAULT, LogType, MONTHS } from "../data";

export interface FileParams {
  path?: string
}

export class FileLogger implements LoggerBuilder {
  params!: LoggerParams;
  private readonly path: string
  constructor({path = DEFAULT.path}: FileParams) {
    this.path = path
  }

  public log({ type, message }: Log) {
    const path = this.getFullPath();
    const fileName = this.getFileName();
    const styledMessage = this.getStyledMessage(message, type);

    this.saveToFile(path, fileName, styledMessage);
  }

  private saveToFile(path: string, filename: string, message: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    fs.appendFileSync(path + filename, message);
  }

  private getFullPath() {
    const date = new Date();

    return `${this.path}/${date.getFullYear()}/${MONTHS[date.getMonth()]}/`;
  }

  private getFileName() {
    const date = new Date();

    return `${date.getUTCDate()}_${
      date.getUTCMonth() + 1
    }_${date.getFullYear()}.log`;
  }

  private getStyledMessage(message: string, type: LogType) {
    return `\n${this.getFormedType(
      type
    )} -- ${this.params.getDate()} -- ${message}`;
  }

  private getFormedType(type: LogType) {
    switch (type) {
      case "WARNING":
        return "WARNING";
      case "ERROR":
        return "ERROR  ";
      case "INFO":
        return "INFO   ";
      case "NOTICE":
        return "NOTICE ";
      case "OK":
        return "OK     ";
      case "CRIT":
        return "CRIT   ";
    }
  }
}
