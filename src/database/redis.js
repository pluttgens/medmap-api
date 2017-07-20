import config from 'config';
import redis from 'redis';
import Promise from 'bluebird';
import {redisLogger} from '../loggers';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const client  = redis.createClient({
  host: config.redis.host,
});

client.on('connect', () => {
  redisLogger.info('Successfully connected.');
});

client.on('error', redisLogger.error)

export default client;