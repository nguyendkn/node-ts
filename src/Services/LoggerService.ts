import { services } from "../Extensions/DependencyInjection";

export const LOGGER_SERVICE_TOKEN = Symbol("ILoggerService");

export interface ILoggerService {
  log(message: string): void;
}

export class LoggerService implements ILoggerService {
  log(message: string): void {
    console.log(message);
  }
}

export const loggerService = () =>
  services.Resolve<ILoggerService>(LOGGER_SERVICE_TOKEN);
