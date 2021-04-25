"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// VS Code reported that process was treated
// as a local variable
// so I'm just passing in the process now
function startMongo(process) {
    dotenv_1.default.config();
    const env = process.env.NODE_ENV || "development";
    console.log(env);
    let connString = "mongodb://" +
        process.env.DB_HOST +
        ":" +
        process.env.DB_PORT +
        "/" +
        process.env.DBNAME;
    let options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    if (env === "production") {
        options = Object.assign(Object.assign({}, options), { user: process.env.DB_USER, pass: process.env.DB_PASSWORD });
        connString += "?ssl=true&replicaSet=globaldb&retryWrites=false";
    }
    console.log(process.env.DB_HOST);
    mongoose_1.default
        .connect(connString, options)
        .then(() => console.log("Connection to Mongo successful"))
        .catch((err) => console.error(err));
}
const startDb = () => startMongo(process);
exports.default = startDb;
//# sourceMappingURL=connect.js.map