"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateDate = void 0;
var moment_1 = __importDefault(require("moment"));
var GenerateDate = /** @class */ (function () {
    function GenerateDate() {
    }
    GenerateDate.getUTCDate = function () {
        return moment_1.default.utc().format();
    };
    GenerateDate.getFullDate = function () {
        var date = new Date();
        return date.toLocaleString('en-US', {
            weekday: 'short',
            day: 'numeric',
            year: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
    };
    GenerateDate.getTime = function () {
        return (0, moment_1.default)(new Date()).format('HH:MM:SS');
    };
    GenerateDate.getShortTime = function () {
        return (0, moment_1.default)(new Date()).format('HH:MM');
    };
    GenerateDate.getByPattern = function (pattern) {
        return (0, moment_1.default)(new Date()).format(pattern);
    };
    return GenerateDate;
}());
exports.GenerateDate = GenerateDate;
