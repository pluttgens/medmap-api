'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elasticsearchLogger = exports.serverLogger = undefined;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverLogger = exports.serverLogger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    level: 'silly',
    colorize: true,
    timestamp: true,
    label: 'server',
    prettyPrint: true
  })]
});

var elasticsearchLogger = exports.elasticsearchLogger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    level: 'silly',
    colorize: true,
    prettyPrint: true,
    timestamp: true,
    label: 'elasticsearch'
  })]
});
//# sourceMappingURL=index.js.map