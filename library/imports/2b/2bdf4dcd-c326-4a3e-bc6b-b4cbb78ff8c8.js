"use strict";
cc._RF.push(module, '2bdf43NwyZKPrxrtMu3j/jI', 'SignalMgr');
// Script/Signal/SignalMgr.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Signal = require("./Signal");

var _Signal2 = _interopRequireDefault(_Signal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance;
//信号管理器

var MainSignalMgr = function MainSignalMgr() {
    _classCallCheck(this, MainSignalMgr);

    //维持一个单例
    if (instance) return instance;

    instance = this;

    //保持一个root节点
    var root = null;
    this.setRoot = function (node) {
        root = node;
    };
    this.getRoot = function () {
        return root;
    };
    //维护一个信号指令映射表
    var dic = new Map();
    // 绑定函数
    this.bind = function (signal) {
        if (dic.has(signal)) {
            return dic.get(signal);
        } else {
            console.info("[root is 2]" + this.getRoot());
            var s = new _Signal2.default(this.getRoot());
            dic.set(signal, s);
            return s;
        }
    };
    //查找是否存在对应的信号并执行绑定的指令
    this.dispose = function (signal) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        if (dic.has(signal)) {
            dic.get(signal).dispose(args);
        }
    };
};

exports.default = MainSignalMgr;
module.exports = exports["default"];

cc._RF.pop();