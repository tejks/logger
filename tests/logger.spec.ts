import { Logger } from "../src";
import { ConsoleLogger } from "../src/builders/console-logger";
import { FileLogger } from "../src/builders/file-logger";

describe('logger tests', async () => {
    it('checking default options', async () => {
        const logger = new Logger({dateType: 'Time'})
        const fileLogger = new FileLogger()
        const consoleLogger = new ConsoleLogger()
        logger.constructLogger(fileLogger)
        logger.constructLogger(consoleLogger)

        logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'ERROR'})
        logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'WARNING'})
        logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'INFO'})
        logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'NOTICE'})
        logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'OK'})
        logger.log({message: 'Lorem Ipsum is simply dummy text', type: 'CRIT'})
    });
});