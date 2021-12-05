import fs from 'fs';
import { MONTHS, DEFAULT, ErrorType } from './data';
import { GenerateDate } from './generate-date';

export class Logger {
  private path: string = DEFAULT.path;

  constructor({}: LoggerConstructor) {}

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

    return `${date.getUTCDate()}_${date.getUTCMonth() + 1}_${date.getFullYear()}.log`;
  }

  private getStyledMessage(message: string, type: ErrorType) {
    return `\n---- ${GenerateDate.getUTCDate()} ----\n${type}: ${message}`;
  }
}

export type LoggerConstructor = {};
export type Log = {
  type: ErrorType;
  message: string;
};
