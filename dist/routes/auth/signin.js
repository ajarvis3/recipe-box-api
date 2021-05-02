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
const UserData_1 = __importDefault(require("../../utils/db/User/UserData"));
const tokengenerator_1 = __importDefault(require("../../utils/auth/tokengenerator"));
const Error_1 = __importDefault(require("../../types/Error"));
const router = express.Router();
/* POST signin data */
router.post("/", (req, res, next) => {
    const failed = () => {
        const err = new Error_1.default(401, "Unauthorized");
        next(err);
    };
    if (!req.body.password || !req.body.email) {
        failed();
    }
    UserData_1.default.findUserByEmail(req.body.email).then((user) => {
        if (user.verifyUser(req.body.password)) {
            const token = tokengenerator_1.default(user);
            res.status(200).send({ auth: true, token });
        }
        else {
            failed();
        }
    }, failed);
});
const signinRouter = router;
exports.default = signinRouter;
//# sourceMappingURL=signin.js.map