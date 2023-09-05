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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const LoggerService_1 = require("./../Services/LoggerService");
const RouterDecorator_1 = require("../Decorators/RouterDecorator");
const controller = "product";
class ProductController {
    get(req, res) {
        const { id } = req.query;
        if (id) {
            (0, LoggerService_1.loggerService)().log(`Product: ${id}`);
            res.send(`Product: ${id}`);
        }
        else {
            (0, LoggerService_1.loggerService)().log(`Products`);
            res.send(`Products`);
        }
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
    __metadata("design:returntype", void 0)
], ProductController.prototype, "get", null);
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