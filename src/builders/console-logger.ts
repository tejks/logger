import { LogType } from "../data";
import { Log, LoggerBuilder, LoggerParams } from "../logger";
import chalk from "chalk";

export class ConsoleLogger implements LoggerBuilder {
  params!: LoggerParams;
  constructor() {}

  public log({ type, message }: Log) {
    const { colorType, color } = this.getColorType(type);

    console.log(
      `${colorType} ${color("--")} ${this.params.getDate()} ${color(
        "--"
      )} ${message}`
    );
  }

  private getColorType(type: LogType) {
    switch (type) {
      case "WARNING":
        return {
          colorType: chalk.yellowBright.bold("WARNING"),
          color: chalk.yellowBright.bold,
        };
      case "ERROR":
        return {
          colorType: chalk.redBright.bold(" ERROR "),
          color: chalk.redBright.bold,
        };
      case "INFO":
        return {
          colorType: chalk.blueBright.bold(" INFO  "),
          color: chalk.blueBright.bold,
        };
      case "NOTICE":
        return {
          colorType: chalk.whiteBright.bold("NOTICE "),
          color: chalk.whiteBright.bold,
        };
      case "OK":
        return {
          colorType: chalk.greenBright.bold("  OK   "),
          color: chalk.greenBright.bold,
        };
      case "CRIT":
        return {
          colorType: chalk.hex("#FF0000").bold(" CRIT  "),
          color: chalk.hex("#FF0000").bold,
        };
    }
  }
}
