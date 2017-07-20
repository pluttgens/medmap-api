import HttpError from 'http-errors';
import admin from './admin';
import cities from './cities';
import departments from './departments';
import jobs from './jobs';
import regions from './regions';
import specialities from './specialities';


export default function (app) {
  app.use('/admin', admin);
  app.use('/cities', cities);
  app.use('/departments', departments);
  app.use('/jobs', jobs);
  app.use('/regions', regions);
  app.use('/specialities', specialities);


  app.use('*', (req, res, next) => {
    return res.send(HttpError.NotFound());
  });
}
