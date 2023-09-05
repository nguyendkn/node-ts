import { loggerService } from "./../Services/LoggerService";
import { Request, Response } from "express";
import {
  HttpGet,
  HttpPost,
  HttpPut,
  HttpDelete,
} from "../Decorators/RouterDecorator";
import "../Extensions/StringExtensions";
import Product from "../Aggregates/ProductAggregate/Product";

const controller = "product";

export class ProductController {
  @HttpGet(controller, "get")
  public async get(req: Request, res: Response) {
    const { id } = req.query;
    if (id) {
      const product = await Product.findById(id);
      loggerService().log(`Product: ${product.id}`);
      res.send(`Product: ${id}`);
    } else {
      loggerService().log(`Products`);
      res.send(`Products`);
    }
  }

  @HttpGet(controller, "list")
  public async list(req: Request, res: Response) {
    const { pageIndex, pageSize } = req.query;
    const products = await Product.find({})
      .skip(
        ((pageIndex as string).parseInt() - 1) * (pageSize as string).parseInt()
      )
      .limit((pageSize as string).parseInt());
    res.send(products);
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
