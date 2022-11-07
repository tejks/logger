import { Logger, LogType } from "../src";
import { ConsoleLogger } from "../src/builders/console-logger";
import { FileLogger } from "../src/builders/file-logger";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

describe('logger tests', async () => {
    it('checking default options', async () => {
        const logger = new Logger({dateType: 'UTCDate'})
        const fileLogger = new FileLogger()
        const consoleLogger = new ConsoleLogger()
        logger.constructLogger(fileLogger)
        logger.constructLogger(consoleLogger)

        while(true){
            logger.log({message: 'Hello', type: 'ERROR'})
            logger.log({message: 'Hello', type: 'WARNING'})
            logger.log({message: 'Hello', type: 'INFO'})
            logger.log({message: 'Hello', type: 'NOTICE'})
            logger.log({message: 'Hello', type: 'OK'})
            logger.log({message: 'Hello', type: 'CRIT'})

            await delay(1000)
        }
    });
});
