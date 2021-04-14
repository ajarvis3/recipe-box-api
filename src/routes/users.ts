import * as express from 'express';
import * as path from 'path';

const router = express.Router();

/* POST /users/signup */
router.post(['/signup'], (req, res, next) => {
    console.log('signup');
    res.status(200).send('signup');
});

/* GET User Data */
router.get(['/info'], (req, res, next) => {
    console.log('info');
    res.status(200).send('info');
});

const usersRouter = router;
export default usersRouter;
