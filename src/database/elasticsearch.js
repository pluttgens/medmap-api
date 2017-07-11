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
  }
});

export default elasticsearch;
