import * as express from "express";
import * as path from "path";
import User from "../../models/user";

const router = express.Router();

/* POST signin data */
router.post("/", (req, res, next) => {
  const failed = () => res.status(401).send();
  User.findOne({ email: req.body.email }).then((user) => {
    if (user.verifyUser(req.body.password)) {
      res.status(200).send(); // do things with jwt
    } else {
      failed();
    }
  }, failed);
});

const signInRouter = router;
export default signInRouter;
