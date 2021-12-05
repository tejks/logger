"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var logger_1 = require("./logger");
var logger = new logger_1.Logger({});
logger.log({ message: 'Update failed', type: data_1.ErrorType.ERROR });
// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp}
//   ${level.toUpperCase()}: ${message}`;
// });
// const generateFilename = () => {
//   const date = new Date();
//   return `./src/logs/${date.getFullYear()}/${monthNames[date.getMonth()]}/${date.getUTCDate()}_${
//     date.getUTCMonth() + 1
//   }_${date.getFullYear()}.log`;
// };
// export const logger = winston.createLogger({
//   format: combine(timestamp(), myFormat),
//   transports: [new winston.transports.File({ filename: generateFilename() })],
// });
