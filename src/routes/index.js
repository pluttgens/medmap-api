import HttpError from 'http-errors';
import cities from './cities';

export default function (app) {
  app.use('/cities', cities);

  app.use('*', (req, res, next) => {
    return res.send(HttpError.NotFound());
  });
}
