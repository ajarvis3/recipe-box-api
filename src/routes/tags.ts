import * as express from 'express';
import * as path from 'path';

const router = express.Router();

/* POST User Data */
router.post('/', (req, res, next) => {
    console.log('tags post');
    res.send('tags post');
});

/* GET /content/recipes?id=<uuid> */
router.get('/', (req, res, next) => {
    console.log('tags get');
    res.send('tags get');
});

/* DELETE /content/recipes?id=<uuid> */
router.delete('/', (req, res, next) => {
    console.log('tags delete');
    res.send('tags delete');
});

const tagsRouter = router;
export default tagsRouter;
