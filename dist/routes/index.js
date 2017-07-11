'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use('/cities', _cities2.default);

  app.use('*', function (req, res, next) {
    return res.send(_httpErrors2.default.NotFound());
  });
};

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _cities = require('./cities');

var _cities2 = _interopRequireDefault(_cities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map