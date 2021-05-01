import crypto from "crypto";

const hashPassword = (password: string, salt: string) => {
   return crypto.pbkdf2Sync(password, salt, 1000, 32, "sha512").toString("hex");
};
export default hashPassword;

// rule of threes: use three times, make it a function
// avoid lots of params
// short functions
// encapsulating logic for some routes
// create a class that handles users in database
// consistency

// refactor existing code BEFORE building new things
// do some planning about dashboard
// fetch meta data for next week
//    information is standardized
//    identify popular websites, check to see that it works
