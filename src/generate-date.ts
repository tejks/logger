import moment from 'moment';

export class GenerateDate {
  static getUTCDate() {
    return moment.utc().format();
  }

  static getFullDate() {
    const date = new Date();

    return date.toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
      year: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  }

  static getTime() {
    return moment(new Date()).format('HH:MM:SS');
  }

  static getShortTime() {
    return moment(new Date()).format('HH:MM');
  }

  static getByPattern(pattern: string) {
    return moment(new Date()).format(pattern);
  }
}
