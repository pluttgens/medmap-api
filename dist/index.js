'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _loggers = require('./loggers');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
(0, _routes2.default)(app);

var server = _http2.default.createServer(app);
server.on('listening', function () {
  return _loggers.serverLogger.info('Server listening on port ' + _config2.default.port);
});

server.listen(_config2.default.port);
//# sourceMappingURL=index.js.map