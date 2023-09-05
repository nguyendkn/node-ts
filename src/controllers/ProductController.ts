import {
  loggerService,
} from "./../Services/LoggerService";
import { Request, Response } from "express";
import {
  HttpGet,
  HttpPost,
  HttpPut,
  HttpDelete,
} from "../Decorators/RouterDecorator";

const controller = "product";

export class ProductController {
  @HttpGet(controller, "get")
  public get(req: Request, res: Response): void {
    const { id } = req.query;
    if (id) {
      loggerService().log(`Product: ${id}`);
      res.send(`Product: ${id}`);
    } else {
      loggerService().log(`Products`);
      res.send(`Products`);
    }
  }

  @HttpPost(controller, "create")
  public create(req: Request, res: Response): void {
    res.send("Product created!");
  }

  @HttpPut(controller, ":id")
  public update(req: Request, res: Response): void {
    const productId = req.params.id;
    res.send(`Product with ID: ${productId} updated`);
  }

  @HttpDelete(controller, "/:id")
  public delete(req: Request, res: Response): void {
    const productId = req.params.id;
    res.send(`Product with ID: ${productId} deleted`);
  }
}
