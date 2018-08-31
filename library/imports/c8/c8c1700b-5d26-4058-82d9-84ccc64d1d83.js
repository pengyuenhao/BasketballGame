"use strict";
cc._RF.push(module, 'c8c17ALXSZAWILZhMzGTR2D', 'Signal');
// Script/Signal/Signal.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Singleton = require("../Lib/Singleton");

var _Singleton2 = _interopRequireDefault(_Singleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = new _Singleton2.default();

var Signal = function Signal(root) {
    _classCallCheck(this, Signal);

    //回调函数
    var callback = [];
    //维护一个命令字典
    var sets = new Set();
    // 维护当前requestAnimationFrame的id
    this.to = function (cmd) {
        if (sets.has(cmd)) {
            //已经添加指令
            console.log("is exist " + cmd.constructor().name);
        } else {
            console.log("no exist " + cmd.constructor().name);
            sets.add(cmd);
        }
    };
    this.listen = function (call) {
        callback.push(call);
    };
    //信号被发布事，执行所有和信号关联的指令
    this.dispose = function (args) {
        sets.forEach(function (element) {
            var cmd = singleton.getSingleton(element, root);
            console.info("[root is 3]" + root + "[cmd]" + cmd);
            cmd.execute.apply(this, args);
        });
        callback.forEach(function (element) {
            //执行
            element.apply(this, args);
        });
    };
    this.getCmds = function () {
        var cmds = [];
        sets.forEach(function (element) {
            cmds.push(singleton.getSingleton(element, root));
        });
        return cmds;
    };
};

exports.default = Signal;
module.exports = exports["default"];

cc._RF.pop();