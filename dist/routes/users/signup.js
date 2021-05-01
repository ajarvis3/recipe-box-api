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
const tokengenerator_1 = __importDefault(require("../../utils/auth/tokengenerator"));
const UserData_1 = __importDefault(require("../../utils/db/User/UserData"));
const router = express.Router();
/* POST signup data */
router.post("/", (req, res, next) => {
    const body = req.body;
    if (!body.password) {
        res.status(401).send();
        return;
    }
    UserData_1.default.createAndSaveUser(req.body.email, req.body.password, req.body.firstName, req.body.lastName).then((user) => {
        if (user) {
            const token = tokengenerator_1.default(user);
            res.status(200).send({ auth: true, token });
        }
    });
});
const signupRouter = router;
exports.default = signupRouter;
//# sourceMappingURL=signup.js.map