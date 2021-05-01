import * as express from 'express';

const router = express.Router();

/* POST Recipe Data */
router.post('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({blerg: 'recipes post'});
});

/* PATCH /content/recipes?id=<uuid> */
router.patch('/', (req, res, next) => {
    res.send('recipes patch');
});

/* GET /content/recipes?id=<uuid> */
router.get('/', (req, res, next) => {
    res.send('recipes get');
});

/* DELETE /content/recipes?id=<uuid> */
router.delete('/', (req, res, next) => {
    res.send('recipes delete');
});

const recipesRouter = router;
export default recipesRouter;

