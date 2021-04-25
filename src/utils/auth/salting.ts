import crypto from "crypto";

const getSalt = () => crypto.randomBytes(32).toString("hex");

export default getSalt;
