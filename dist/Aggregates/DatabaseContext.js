"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DatabaseContext {
    URI;
    constructor(URI) {
        this.URI = URI;
    }
    async connect() {
        try {
            await mongoose_1.default.connect(this.URI);
            console.log("Connected to MongoDB");
        }
        catch (error) {
            console.error("Error connecting to MongoDB", error);
            process.exit(1);
        }
    }
}
exports.default = DatabaseContext;
//# sourceMappingURL=DatabaseContext.js.map