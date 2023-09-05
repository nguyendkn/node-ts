import { Request, Response } from "express";
import {
  HttpGet,
  HttpPost,
  HttpPut,
  HttpDelete,
} from "../decorators/RouterDecorator";

const prefix = "product";

export class ProductController {
  @HttpGet(prefix, "get")
  public get(req: Request, res: Response): void {
    const { id } = req.query;
    if (id) {
      res.send(`Product: ${id}`);
    } else {
      res.send(`Products`);
    }
  }

  @HttpPost(prefix, "create")
  public create(req: Request, res: Response): void {
    res.send("Product created!");
  }

  @HttpPut(prefix, ":id")
  public update(req: Request, res: Response): void {
    const productId = req.params.id;
    res.send(`Product with ID: ${productId} updated`);
  }

  @HttpDelete(prefix, "/:id")
  public delete(req: Request, res: Response): void {
    const productId = req.params.id;
    res.send(`Product with ID: ${productId} deleted`);
  }
}
