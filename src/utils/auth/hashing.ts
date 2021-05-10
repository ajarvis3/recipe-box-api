import crypto from "crypto";

const hashPassword = (password: string, salt: string) => {
   return crypto.pbkdf2Sync(password, salt, 1000, 32, "sha512").toString("hex");
};
export default hashPassword;
