'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var staticFiles = require('./../lib/web/routes');
var threejs = require('./../lib/web/threejs/routes');
var juui = require('./../lib/web/juui/routes');

var routes = [].concat((0, _toConsumableArray3.default)(staticFiles), (0, _toConsumableArray3.default)(threejs), (0, _toConsumableArray3.default)(juui));

module.exports = routes;