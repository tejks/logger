"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorType = exports.DEFAULT = exports.MONTHS = void 0;
exports.MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
exports.DEFAULT = {
    path: './logs',
};
var ErrorType;
(function (ErrorType) {
    ErrorType["ALERT"] = "ALERT";
    ErrorType["CRIT"] = "CRIT";
    ErrorType["ERROR"] = "ERROR";
    ErrorType["WARNING"] = "WARNING";
    ErrorType["NOTICE"] = "NOTICE";
    ErrorType["INFO"] = "INFO";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
