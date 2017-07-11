import { Router } from 'express';

const router = Router();

router
  .route('/')
  .get((req, res, next) => res.json({
    data: [
      'omnipraticien',
      'infirmier',
      'dentiste',
      'pharmacien'
    ]
  }));

export default router;
