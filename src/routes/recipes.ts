import * as express from 'express';
import * as path from 'path';

const router = express.Router();

/* POST Recipe Data */
router.post('/', (req, res, next) => {
    console.log('post');
    res.setHeader('Content-Type', 'application/json');
    res.json({blerg: 'recipes post'});
});

/* PATCH /content/recipes?id=<uuid> */
router.patch('/', (req, res, next) => {
    console.log('patch');
    res.send('recipes patch');
});

/* GET /content/recipes?id=<uuid> */
router.get('/', (req, res, next) => {
    console.log('get');
    res.send('recipes get');
});

/* DELETE /content/recipes?id=<uuid> */
router.delete('/', (req, res, next) => {
    console.log('delete');
    res.send('recipes delete');
});

const recipesRouter = router;
export default recipesRouter;

