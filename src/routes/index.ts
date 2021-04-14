import * as express from 'express';
import * as path from 'path';

const router = express.Router();

/* GET home page. */
router.get(['/', '/*'], (req, res, next) => {
    const pth = path.join(__dirname, "../../public", "index.html");
    console.log(pth);
    res.sendFile(pth);
});

const indexRouter = router;
export default indexRouter;
