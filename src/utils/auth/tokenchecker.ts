/**
 * Based on https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e
 */

import { NextFunction, Response } from "express";
import IAuthRequest from "./types/authrequest.js";
import MyError from "../../types/Error.js";

const checkToken = (req: IAuthRequest, res: Response, next: NextFunction) => {
   const header =
      req.get("authorization") ?? req.get("authentication") ?? undefined;

   if (!header) {
      next(new MyError(401, "Unauthorized"));
      return;
   }

   const [scheme, token] = header.split(" ");

   if (scheme.toLowerCase() !== "bearer" || !token) {
      next(new MyError(401, "Unauthorized"));
      return;
   }

   req.token = token;
   next();
};

export default checkToken;
