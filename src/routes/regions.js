import Promise from 'bluebird';
import { Router } from 'express';
import { mongo } from '../database';

const router = Router();
router
  .route('/')
  .get((req, res, next) => {
    (async () => {
      return res.json({
        data: await Promise
          .props({
            names: mongo.models.City.distinct('nom_reg'),
            codes: mongo.models.City.distinct('reg')
          })
          .then(results => results.names.map((name, i) => ({
            name: name,
            code: results.codes[i]
          })))
      });
  })().catch(next);
})
;

export default router;
