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
const path = __importStar(require("path"));
const auth_1 = __importDefault(require("./auth"));
const index_1 = __importDefault(require("./content/index")); // this one doesn't work without index for some reason
const users_1 = __importDefault(require("./users"));
const router = express.Router();
router.use("/auth", auth_1.default);
router.use("/users", users_1.default);
router.use("/content", index_1.default);
/* GET home page. */
router.get(["/", "**"], (req, res, next) => {
    const pth = path.join(__dirname, "../../public", "index.html");
    res.sendFile(pth);
});
const indexRouter = router;
exports.default = indexRouter;
//# sourceMappingURL=index.js.map