'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _express = require('express');

var _elasticsearch = require('elasticsearch');

var _elasticsearch2 = _interopRequireDefault(_elasticsearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.route('/').get(function (res, req, next) {
  (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var cities;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _elasticsearch2.default.search({
              index: _config2.default.elasticsearch.index,
              type: 'city',
              size: 1000
            });

          case 2:
            cities = _context.sent;
            return _context.abrupt('return', res.json({
              cities: cities
            }));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }))().catch(next);
});

exports.default = router;
//# sourceMappingURL=cities.js.map