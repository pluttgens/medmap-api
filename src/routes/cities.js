import config from 'config';
import { Router } from 'express';
import elasticsearch from 'elasticsearch';

const router = Router();

router
  .route('/')
  .get((res, req, next) => {
    (async () => {
      elasticsearch.search({
        index: config.elasticsearch.index,
        type: 'city',
        size: 1000
      });
      return res.json();
    })().catch(next);
  });

export default router;
