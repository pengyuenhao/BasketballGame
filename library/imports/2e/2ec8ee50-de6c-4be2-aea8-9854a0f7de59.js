"use strict";
cc._RF.push(module, '2ec8e5Q3mxL4q6omFSg995Z', 'StartCmd');
// Script/Command/StartCmd.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Command2 = require("./Command");

var _Command3 = _interopRequireDefault(_Command2);

var _SignalMgr = require("../Signal/SignalMgr");

var _SignalMgr2 = _interopRequireDefault(_SignalMgr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var signals = new _SignalMgr2.default();
//开始指令

var StartCmd = function (_Command) {
    _inherits(StartCmd, _Command);

    function StartCmd(root) {
        _classCallCheck(this, StartCmd);

        return _possibleConstructorReturn(this, (StartCmd.__proto__ || Object.getPrototypeOf(StartCmd)).call(this, root, function () {
            root.pm.enabled = true;
            root.direction = Math.round(10 * Math.random()) % 2;
            console.info("[启动游戏]" + root.constructor.name + "[方向]" + root.direction);
            signals.dispose("switch");
        }));
    }

    return StartCmd;
}(_Command3.default);

exports.default = StartCmd;
module.exports = exports["default"];

cc._RF.pop();