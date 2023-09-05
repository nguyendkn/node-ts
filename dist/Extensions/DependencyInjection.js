"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const tsyringe_1 = require("tsyringe");
class DependencyInjection {
    _container;
    constructor() {
        this._container = tsyringe_1.container;
    }
    Resolve(token) {
        return tsyringe_1.container.resolve(token);
    }
    AddScoped(token, implementation) {
        // Scoped registrations are not natively supported in tsyringe as of the last update.
        // You might need to implement a custom solution or check for updates in the library.
        throw new Error("Method not implemented.");
    }
    AddSingleton(token, implementation) {
        this._container.register(token, implementation, {
            lifecycle: tsyringe_1.Lifecycle.Singleton,
        });
    }
    AddTransient(token, implementation) {
        this._container.register(token, implementation, {
            lifecycle: tsyringe_1.Lifecycle.Transient,
        });
    }
}
exports.services = new DependencyInjection();
//# sourceMappingURL=DependencyInjection.js.map