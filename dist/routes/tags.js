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
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const router = express.Router();
/* POST User Data */
router.post('/', (req, res, next) => {
    console.log('tags post');
    res.send('tags post');
});
/* GET /content/recipes?id=<uuid> */
router.get('/', (req, res, next) => {
    console.log('tags get');
    res.send('tags get');
});
/* DELETE /content/recipes?id=<uuid> */
router.delete('/', (req, res, next) => {
    console.log('tags delete');
    res.send('tags delete');
});
const tagsRouter = router;
exports.default = tagsRouter;
//# sourceMappingURL=tags.js.map