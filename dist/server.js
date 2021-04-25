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
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = __importDefault(require("./routes/index"));
const recipes_1 = __importDefault(require("./routes/recipes"));
const tags_1 = __importDefault(require("./routes/tags"));
const signup_1 = __importDefault(require("./routes/users/signup"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = process.env.PORT || 8080; // default port to listen
if (process.env.NODE_ENV !== "production") {
    app.use(cors_1.default());
    app.options("*", cors_1.default());
}
const consolidate_1 = __importDefault(require("consolidate"));
const signin_1 = __importDefault(require("./routes/auth/signin"));
const verify_1 = __importDefault(require("./routes/auth/verify"));
app.set("view engine", "html");
app.engine("html", consolidate_1.default.mustache);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path.join(__dirname, "..", "public")));
// routes
// app.use("/users", usersRouter);
app.use("/users/signup", signup_1.default); // doesn't work with post
app.use("/auth/signin", signin_1.default);
app.use("/auth/verify", verify_1.default);
app.use("/content/recipes", recipes_1.default);
app.use("/content/tags", tags_1.default);
app.use("/", index_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    // console.log(req, res, next);
    next(http_errors_1.default(404));
});
// error handler
app.use((err, req, res, next) => {
    // console.log(req, res, next);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send("error");
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map