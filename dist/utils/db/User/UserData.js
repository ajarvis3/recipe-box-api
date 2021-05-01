"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../../models/user"));
const uuid_1 = require("uuid");
const auth_1 = require("../../auth");
const auth_2 = require("../../auth");
class UserData {
    constructor() {
        this.createUser = (email, password, firstName, lastName) => {
            const uuid = uuid_1.v4();
            const timeCreated = Date.now();
            const salt = auth_1.getSalt();
            const hash = auth_2.hashPassword(password, salt);
            return new user_1.default({
                uuid,
                firstName,
                lastName,
                email,
                passwordHash: hash,
                salt,
                timeCreated,
            });
        };
        this.saveUser = (user) => {
            return user.save();
        };
        this.createAndSaveUser = (email, password, firstName, lastName) => {
            return this.saveUser(this.createUser(email, password, firstName, lastName));
        };
        this.findUserByEmail = (email) => {
            return user_1.default.findOne({ email });
        };
        this.findUserByUuid = (id) => {
            return user_1.default.findOne({ uuid: id });
        };
    }
}
exports.default = new UserData();
//# sourceMappingURL=UserData.js.map