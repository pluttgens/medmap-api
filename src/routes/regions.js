import config from 'config';
import { Router } from 'express';
import { mongo, elasticsearch } from '../database';

const router = Router();
router
  .route('/')
  .get((req, res, next) => {
    (async () => {
      return res.json({
        data: await mongo.models.City.distinct('nom_reg')
      });
    })().catch(next);
  });

export default router;
