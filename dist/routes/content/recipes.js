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
const Error_1 = __importDefault(require("../../types/Error"));
const tokenchecker_1 = __importDefault(require("../../utils/auth/tokenchecker"));
const fetchmetadata_1 = __importDefault(require("../../utils/metadata/fetchmetadata"));
const router = express.Router();
/* POST Recipe Data */
router.post("/", tokenchecker_1.default, (req, res, next) => {
    const url = req.body.url;
    fetchmetadata_1.default(url).then((data) => {
        if (data) {
            res.setHeader("Content-Type", "text/plain");
            res.send(data);
        }
        else {
            const err = new Error_1.default(401, "Unauthorized");
            next(err);
        }
    });
});
/* PATCH /content/recipes?id=<uuid> */
router.patch("/:id", (req, res, next) => {
    res.send("recipes patch");
});
/* GET /content/recipes?id=<uuid> */
router.get("/", (req, res, next) => {
    res.send("recipes get");
});
/* DELETE /content/recipes?id=<uuid> */
router.delete("/", (req, res, next) => {
    res.send("recipes delete");
});
const recipesRouter = router;
exports.default = recipesRouter;
//# sourceMappingURL=recipes.js.map