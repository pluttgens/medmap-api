import config from 'config';
import Elasticsearch from 'elasticsearch';
import { elasticsearchLogger } from '../loggers';

const elasticsearch = Elasticsearch.Client({
  host: config.elasticsearch.host,
  log: function (config) {
    this.error = elasticsearchLogger.error.bind(elasticsearchLogger);
    this.warning = elasticsearchLogger.warn.bind(elasticsearchLogger);
    this.info = elasticsearchLogger.info.bind(elasticsearchLogger);
    this.debug = elasticsearchLogger.debug.bind(elasticsearchLogger);
    this.trace = (method, requestUrl, body, responseBody, responseStatus) => {
      elasticsearchLogger.debug({
        method,
        requestUrl,
        body,
        responseBody,
        responseStatus
      });
    };
    this.close = function () {
    };
  },
  version: '5.x',
  connectionClass: require('http-aws-es')
});


(async () => {
  try {
    await elasticsearch.indices.create({
      index: config.elasticsearch.index
    })
  } catch (e) {

  }

  elasticsearch.indices.putMapping({
    index: config.elasticsearch.index,
    type: 'record',
    body: {
      properties: {
        geo_point: {
          type: 'geo_point'
        },
        geo_shape: {
          type: 'geo_shape'
        }
      }
    }
  });
})().catch(console.log.bind(console));

export default elasticsearch;
