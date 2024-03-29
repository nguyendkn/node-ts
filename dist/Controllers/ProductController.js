"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const LoggerService_1 = require("./../Services/LoggerService");
const RouterDecorator_1 = require("../Decorators/RouterDecorator");
require("../Extensions/StringExtensions");
const Product_1 = __importDefault(require("../Aggregates/ProductAggregate/Product"));
const controller = "product";
class ProductController {
    async get(req, res) {
        const { id } = req.query;
        if (id) {
            const product = await Product_1.default.findById(id);
            (0, LoggerService_1.loggerService)().log(`Product: ${product.id}`);
            res.send(`Product: ${id}`);
        }
        else {
            (0, LoggerService_1.loggerService)().log(`Products`);
            res.send(`Products`);
        }
    }
    async list(req, res) {
        const { pageIndex, pageSize } = req.query;
        const products = await Product_1.default.find({})
            .skip((pageIndex.parseInt() - 1) * pageSize.parseInt())
            .limit(pageSize.parseInt());
        res.send(products);
    }
    create(req, res) {
        res.send("Product created!");
    }
    update(req, res) {
        const productId = req.params.id;
        res.send(`Product with ID: ${productId} updated`);
    }
    delete(req, res) {
        const productId = req.params.id;
        res.send(`Product with ID: ${productId} deleted`);
    }
}
exports.ProductController = ProductController;
__decorate([
    (0, RouterDecorator_1.HttpGet)(controller, "get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get", null);
__decorate([
    (0, RouterDecorator_1.HttpGet)(controller, "list"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "list", null);
__decorate([
    (0, RouterDecorator_1.HttpPost)(controller, "create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, RouterDecorator_1.HttpPut)(controller, ":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, RouterDecorator_1.HttpDelete)(controller, "/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "delete", null);
//# sourceMappingURL=ProductController.js.map