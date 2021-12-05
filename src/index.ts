import { ErrorType } from './data';
import { Logger } from './logger';

const logger = new Logger({});

logger.log({ message: 'Update failed', type: ErrorType.ERROR });
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
