'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _elasticsearch = require('elasticsearch');

var _elasticsearch2 = _interopRequireDefault(_elasticsearch);

var _loggers = require('../loggers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elasticsearch = _elasticsearch2.default.Client({
  host: _config2.default.elasticsearch.host,
  log: function log(config) {
    this.error = _loggers.elasticsearchLogger.error.bind(_loggers.elasticsearchLogger);
    this.warning = _loggers.elasticsearchLogger.warn.bind(_loggers.elasticsearchLogger);
    this.info = _loggers.elasticsearchLogger.info.bind(_loggers.elasticsearchLogger);
    this.debug = _loggers.elasticsearchLogger.debug.bind(_loggers.elasticsearchLogger);
    this.trace = function (method, requestUrl, body, responseBody, responseStatus) {
      _loggers.elasticsearchLogger.debug({
        method: method,
        requestUrl: requestUrl,
        body: body,
        responseBody: responseBody,
        responseStatus: responseStatus
      });
    };
    this.close = function () {};
  }
});

exports.default = elasticsearch;
//# sourceMappingURL=elasticsearch.js.map