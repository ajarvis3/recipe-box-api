"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const auth_1 = require("../../utils/auth");
const uuid_1 = require("uuid");
const user_1 = __importDefault(require("../../models/user"));
const connect_1 = __importDefault(require("../../utils/db/connect"));
const router = express.Router();
/* POST signup data */
router.post("/", (req, res, next) => {
    const body = req.body;
    if (!body.password) {
        res.status(401).send();
        return;
    }
    const uuid = uuid_1.v4();
    const timeCreated = Date.now();
    const salt = auth_1.getSalt();
    const hash = auth_1.hashPassword(req.body.password, salt);
    connect_1.default();
    const user = new user_1.default({
        uuid,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: hash,
        salt,
        timeCreated,
    });
    user.save((err, saveUser) => {
        if (err) {
            res.status(401).send(saveUser);
        }
        else {
            res.status(200).send();
        }
    });
});
const signupRouter = router;
exports.default = signupRouter;
//# sourceMappingURL=signup.js.map