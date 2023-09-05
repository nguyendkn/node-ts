import express, { Express } from "express";
import { Routes } from "./decorators/RouterDecorator";
import Database from "./aggregates/database";

import "./controllers/ProductController";
import "./extensions/StringExtensions";

class Server {
  private app: Express;
  private readonly port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    Routes.forEach((route) => {
      this.app[route.method](route.path, route.handler);
    });
  }

  public start(): void {
    const MONGODB_URI = "mongodb://127.0.0.1:27017/node-ts";
    const database = new Database(MONGODB_URI);
    database.connect().then(() => {
      this.app.listen(this.port, () => {
        console.log(`Server running at http://localhost:${this.port}/`);
      });
    });
  }
}

const server = new Server(3000);
server.start();
