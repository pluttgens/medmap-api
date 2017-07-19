import HttpError from 'http-errors';
import admin from './admin';
import cities from './cities';
import specialities from './specialities';


export default function (app) {
  app.use('/admin', admin);
  app.use('/cities', cities);
  app.use('/specialities', specialities);


  app.use('*', (req, res, next) => {
    return res.send(HttpError.NotFound());
  });
}
