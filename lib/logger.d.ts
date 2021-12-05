import { ErrorType } from './data';
export declare class Logger {
    private path;
    constructor({}: LoggerConstructor);
    log({ type, message }: Log): void;
    private saveToFile;
    private getFullPath;
    private getFileName;
    private getStyledMessage;
}
export declare type LoggerConstructor = {};
export declare type Log = {
    type: ErrorType;
    message: string;
};
