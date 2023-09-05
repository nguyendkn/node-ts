import {
  container,
  InjectionToken,
  DependencyContainer as TsyringeDependencyContainer,
  Lifecycle,
} from "tsyringe";

export interface DependencyContainer {
  Resolve<T>(token: any): T;
  AddScoped<TService, TImplementation extends TService>(
    token: InjectionToken<TService>,
    implementation: new (...args: any[]) => TImplementation
  ): void;
  AddSingleton<TService, TImplementation extends TService>(
    token: InjectionToken<TService>,
    implementation: new (...args: any[]) => TImplementation
  ): void;
  AddTransient<TService, TImplementation extends TService>(
    token: InjectionToken<TService>,
    implementation: new (...args: any[]) => TImplementation
  ): void;
}

class DependencyInjection implements DependencyContainer {
  private _container: TsyringeDependencyContainer;

  constructor() {
    this._container = container;
  }

  Resolve<T>(token: any): T {
    return container.resolve(token);
  }

  AddScoped<TService, TImplementation extends TService>(
    token: InjectionToken<TService>,
    implementation: new (...args: any[]) => TImplementation
  ): void {
    // Scoped registrations are not natively supported in tsyringe as of the last update.
    // You might need to implement a custom solution or check for updates in the library.
    throw new Error("Method not implemented.");
  }

  AddSingleton<TService, TImplementation extends TService>(
    token: InjectionToken<TService>,
    implementation: new (...args: any[]) => TImplementation
  ): void {
    this._container.register(token, implementation, {
      lifecycle: Lifecycle.Singleton,
    });
  }

  AddTransient<TService, TImplementation extends TService>(
    token: InjectionToken<TService>,
    implementation: new (...args: any[]) => TImplementation
  ): void {
    this._container.register(token, implementation, {
      lifecycle: Lifecycle.Transient,
    });
  }
}

export const services = new DependencyInjection();
