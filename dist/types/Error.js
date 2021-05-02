"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.default = MyError;
//# sourceMappingURL=Error.js.map