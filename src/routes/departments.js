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
            names: mongo.models.City.distinct('nom_dept'),
            codes: mongo.models.City.distinct('dep')
          })
          .then(results => results.names.map((name, i) => ({
            name: name,
            code: results.codes[i]
          })))
      });
    })().catch(next);
  });

router
  .route('/densities')
  .get((req, res, next) => {
    (async () => {
      return res.json({
        data: await mongo.models.City.aggregate()
          .group({
            _id: '$dep',
            'medical_density': {
              $avg: '$densité_médicale_bv'
            }
          })
          .exec()
      });
    })().catch(next);
  });

export default router;
