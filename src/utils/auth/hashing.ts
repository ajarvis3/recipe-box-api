import crypto from "crypto";

const hashPassword = (pw: string, salt: string) => {
   return crypto.pbkdf2Sync(pw, salt, 1000, 32, "sha512").toString("hex");
};
export default hashPassword;
