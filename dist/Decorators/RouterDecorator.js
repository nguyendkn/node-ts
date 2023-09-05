"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpDelete = exports.HttpPut = exports.HttpPost = exports.HttpGet = exports.Routes = void 0;
exports.Routes = [];
function routeBinder(method) {
    return function (route, path) {
        return function (target, key, desc) {
            exports.Routes.push({
                method,
                path: "/" + route + "/" + path,
                handler: target[key],
                contructor: target.constructor,
            });
        };
    };
}
exports.HttpGet = routeBinder("get");
exports.HttpPost = routeBinder("post");
exports.HttpPut = routeBinder("put");
exports.HttpDelete = routeBinder("delete");
//# sourceMappingURL=RouterDecorator.js.map