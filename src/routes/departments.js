import config from 'config';
import Promise from 'bluebird';
import { Router } from 'express';
import { mongo, elasticsearch } from '../database';

const router = Router();
router
  .route('/')
  .get((req, res, next) => {
    (async () => {
      return res.json({
        data: await Promise
          .props({
            names: mongo.models.City.distinct('nom_dept'),
            codes: mongo.models.City.distinct('code_dept')
          })
          .then(results => results.names.map((name, i) => ({
            name: name,
            code: results.codes[i]
          })))
      });
    })().catch(next);
  });

router
  .route('/:code')

export default router;
