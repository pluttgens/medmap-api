import config from 'config';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import { mongoLogger } from '../loggers';

mongoose.Promise = Promise;

mongoose.model('City', new mongoose.Schema({
  n_id: { type: String, unique: true, index: true, required: true }
}, { strict: false }));

process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    mongoLogger.info('Mongoose disconnected on app termination');
    process.exit(0);
  });
})


mongoose.connect(`mongodb://${config.mongodb.user}:${config.mongodb.password}@54.147.231.106:27017/admin`, {
  useMongoClient: true,
  server: {
    poolSize: 10,
    socketOptions: {
      keepAlive: 120000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 120000
    }
  }
}, (error) => {
  if (error) {
    mongoLogger.error(e);
    process.exit(1);
  }
  mongoLogger.info('Successfully connected.');
});

export default mongoose;

