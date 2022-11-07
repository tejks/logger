import moment from "moment";

export type DateType =
  | "UTCDate"
  | "FullDate"
  | "Time"
  | "ShortTime"
  | "Pattern";

export class DateManager {
  static build(type: DateType): () => string {
    switch (type) {
      case "UTCDate":
        return DateManager.getUTCDate;
      case "FullDate":
        return DateManager.getFullDate;
      case "Time":
        return DateManager.getTime;
      case "ShortTime":
        return DateManager.getShortTime;
      case "Pattern":
        return DateManager.getShortTime;
    }
  }

  static getUTCDate() {
    return moment.utc().format();
  }

  static getFullDate() {
    const date = new Date();

    return date.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }

  static getTime() {
    return moment(new Date()).format("HH:MM:SS");
  }

  static getShortTime() {
    return moment(new Date()).format("HH:MM");
  }

  static getByPattern(pattern: string) {
    return moment(new Date()).format(pattern);
  }
}
