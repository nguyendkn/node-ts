"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerService = exports.LoggerService = exports.LOGGER_SERVICE_TOKEN = void 0;
const DependencyInjection_1 = require("../Extensions/DependencyInjection");
exports.LOGGER_SERVICE_TOKEN = Symbol("ILoggerService");
class LoggerService {
    log(message) {
        console.log(message);
    }
}
exports.LoggerService = LoggerService;
const loggerService = () => DependencyInjection_1.services.Resolve(exports.LOGGER_SERVICE_TOKEN);
exports.loggerService = loggerService;
//# sourceMappingURL=LoggerService.js.map