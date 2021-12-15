import "reflect-metadata";
import { RequestHandler } from "express";
import { Methods } from "./Methods";
import { MetaDataKeys } from "./MetaDataKeys";

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(methodName: string) {
  return function (path: string) {
    return function (target: any, key: string, des: RouterHandlerDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, methodName, target, key);
    };
  };
}
export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const patch = routeBinder(Methods.patch);

/********************************************************************************
 * This is define only one get method and the defineMetadata save only path
 * 1. we can save second defineMetadata for method as well
 * 2. Suppose we want to make post, delete, put then we repeat the same function again and again
 *
 ********************************************************************************/
// export function get(path: string) {
//   return function (target: any, key: string, des: PropertyDescriptor) {
//     Reflect.defineMetadata("path", path, target, key);
//     Reflect.defineMetadata("method", "get", target, key)
//   };
// }

// export function post(path: string) {
//   return function (target: any, key: string, des: PropertyDescriptor) {
//     Reflect.defineMetadata("path", path, target, key);
//     Reflect.defineMetadata("method", "post", target, key)
//   };
// }
