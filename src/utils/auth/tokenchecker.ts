/**
 * Based on https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e
 */

import { NextFunction, Response } from "express";
import IAuthRequest from "./types/authrequest";

// Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req: IAuthRequest, res: Response, next: NextFunction) => {
   const header = req.headers.authorization;

   if (typeof header !== "undefined") {
      const bearer = header.split(" ");
      const token = bearer[1];

      req.token = token;
      next();
   } else {
      // If header is undefined return Forbidden (403)
      res.sendStatus(403);
   }
};

export default checkToken;
