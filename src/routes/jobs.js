import { Router } from 'express';
import { redis } from '../database';
import { snowflake } from '../helpers';

const router = Router();

router
  .route('/')
  .post((req, res, next) => {
    (async () => {
      const jobId = await snowflake.getId();
      redis.set(jobId, true)
      res.status(201).json({
        job: jobId
      });
    })().catch(next);
  });

router
  .route('/:id')
  .get((req, res, next) => {
    const jobId = req.params.id;
    (async () => {
      const job = await redis.getAsync(jobId);
      res.json({
        job: job ? 'In progress.' : 'Done'
      });
    })().catch(next);
  })
  .delete((req, res, next) => {
    const jobId = req.params.id;
    (async () => {
      await redis.delAsync(jobId);
      return res.json({
        job: 'Removed job ' + jobId + '.'
      })
    })().catch(next);
  });

export default router;