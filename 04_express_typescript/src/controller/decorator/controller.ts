import "reflect-metadata";
import express, {
  RequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetaDataKeys } from "./MetaDataKeys";

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`missing property ${key}`);
        return;
      }
    }

    next();
  };
}

//export const router = express.Router();
export function controller(routePrefix: string) {
  // special note:- If we didn't know which class will call this so function is working
  // same like target: typeof ClassName
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routerHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetaDataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.method,
        target.prototype,
        key
      );
      const middlwares: RequestHandler[] =
        Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) ||
        [];
      const requestBodyProps =
        Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) ||
        [];

      const validator: any = bodyValidators(requestBodyProps);
      if (path && method) {
        router[method](
          `${routePrefix}${path}`,
          ...middlwares,
          validator,
          routerHandler
        );
        //  router.get(`${routePrefix}${path}`, routerHandler);
        //   AppRouter.getInstance().get(`${routePrefix}${path}`, routerHandler);
      }
    }
  };
}
