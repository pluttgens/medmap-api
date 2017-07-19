import config from 'config';
import Snowflake from 'node-snowflake';

export default new Snowflake.Worker({
  datacenterId: config.datacenterId,
  workerId: config.workerId,
  retry: true
});
