"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const DependencyInjection_1 = require("./Extensions/DependencyInjection");
const RouterDecorator_1 = require("./Decorators/RouterDecorator");
const DatabaseContext_1 = __importDefault(require("./Aggregates/DatabaseContext"));
const LoggerService_1 = require("./Services/LoggerService");
const LoggerService_2 = require("./Services/LoggerService");
require("./Controllers/ProductController");
require("./Extensions/StringExtensions");
class Server {
    app;
    port;
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.Routes();
        this.Services();
    }
    Routes() {
        RouterDecorator_1.Routes.forEach((route) => {
            this.app[route.method](route.path, route.handler);
        });
    }
    Services() {
        DependencyInjection_1.services.AddSingleton(LoggerService_2.LOGGER_SERVICE_TOKEN, LoggerService_1.LoggerService);
    }
    Start() {
        const MONGODB_URI = "mongodb://127.0.0.1:27017/node-ts";
        const database = new DatabaseContext_1.default(MONGODB_URI);
        database.connect().then(() => {
            this.app.listen(this.port, () => {
                console.log(`Server running at http://localhost:${this.port}/`);
            });
        });
    }
}
new Server(3000).Start();
//# sourceMappingURL=Program.js.map