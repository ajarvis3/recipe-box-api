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
const connect_1 = __importDefault(require("../../utils/db/connect"));
const user_1 = __importDefault(require("../../models/user"));
const router = express.Router();
/* POST signin data */
router.post("/", (req, res, next) => {
    if (!req.body.password || !req.body.email) {
        res.status(400).send();
    }
    connect_1.default();
    const failed = () => res.status(401).send();
    user_1.default.findOne({ email: req.body.email }).then((user) => {
        if (user.verifyUser(req.body.password)) {
            res.status(200).send(); // do things with jwt
        }
        else {
            failed();
        }
    }, failed);
});
const signInRouter = router;
exports.default = signInRouter;
//# sourceMappingURL=signin.js.map