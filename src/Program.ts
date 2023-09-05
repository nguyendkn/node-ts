import 'reflect-metadata';

import express, { Express } from "express";
import { services } from "./Extensions/DependencyInjection";
import { Routes } from "./Decorators/RouterDecorator";
import Database from "./Aggregates/DatabaseContext";
import { ILoggerService, LoggerService } from "./Services/LoggerService";
import { LOGGER_SERVICE_TOKEN } from "./Services/LoggerService";

import "./Controllers/ProductController";
import "./Extensions/StringExtensions";

class Server {
  private app: Express;
  private readonly port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.Routes();
    this.Services();
  }

  private Routes(): void {
    Routes.forEach((route) => {
      this.app[route.method](route.path, route.handler);
    });
  }

  private Services(): void {
    services.AddSingleton<ILoggerService, LoggerService>(
      LOGGER_SERVICE_TOKEN,
      LoggerService
    );
  }

  public Start(): void {
    const MONGODB_URI = "mongodb://127.0.0.1:27017/node-ts";
    const database = new Database(MONGODB_URI);
    database.connect().then(() => {
      this.app.listen(this.port, () => {
        console.log(`Server running at http://localhost:${this.port}/`);
      });
    });
  }
}

new Server(3000).Start();
