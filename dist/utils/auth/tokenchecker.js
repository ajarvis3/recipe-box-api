"use strict";
/**
 * Based on https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Check to make sure header is not undefined, if so, return Forbidden (403)
const checkToken = (req, res, next) => {
    const header = req.headers.authentication;
    if (typeof header !== "undefined") {
        const bearer = header.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }
    else {
        // If header is undefined return Forbidden (403)
        res.sendStatus(403);
    }
};
exports.default = checkToken;
//# sourceMappingURL=tokenchecker.js.map