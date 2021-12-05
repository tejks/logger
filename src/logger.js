"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var fs_1 = __importDefault(require("fs"));
var data_1 = require("./data");
var generate_date_1 = require("./generate-date");
var Logger = /** @class */ (function () {
    function Logger(_a) {
        this.path = data_1.DEFAULT.path;
    }
    Logger.prototype.log = function (_a) {
        var type = _a.type, message = _a.message;
        var path = this.getFullPath();
        var fileName = this.getFileName();
        var styledMessage = this.getStyledMessage(message, type);
        this.saveToFile(path, fileName, styledMessage);
    };
    Logger.prototype.saveToFile = function (path, filename, message) {
        if (!fs_1.default.existsSync(path)) {
            fs_1.default.mkdirSync(path, { recursive: true });
        }
        fs_1.default.appendFileSync(path + filename, message);
    };
    Logger.prototype.getFullPath = function () {
        var date = new Date();
        return "".concat(this.path, "/").concat(date.getFullYear(), "/").concat(data_1.MONTHS[date.getMonth()], "/");
    };
    Logger.prototype.getFileName = function () {
        var date = new Date();
        return "".concat(date.getUTCDate(), "_").concat(date.getUTCMonth() + 1, "_").concat(date.getFullYear(), ".log");
    };
    Logger.prototype.getStyledMessage = function (message, type) {
        return "\n---- ".concat(generate_date_1.GenerateDate.getUTCDate(), " ----\n").concat(type, ": ").concat(message);
    };
    return Logger;
}());
exports.Logger = Logger;
