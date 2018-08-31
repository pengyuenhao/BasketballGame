(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Lib/Singleton.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b9e30d+vwpOp6gjZI63VP6T', 'Singleton', __filename);
// Script/Lib/Singleton.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __ = {
    /**
     * 定义对象池字典为唯一值
    */
    poolDic: Symbol('poolDic')
};

var Singleton = function () {
    /**
     * 构造函数
     */
    function Singleton() {
        _classCallCheck(this, Singleton);

        this[__.poolDic] = {};
    }
    //获取一个单例


    _createClass(Singleton, [{
        key: 'getSingleton',
        value: function getSingleton(className) {
            var args = [];
            for (var i = 1; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            if (!this[__.poolDic][className]) {
                if (args.length === 1) {
                    this[__.poolDic][className] = new className(args[0]);
                } else {
                    this[__.poolDic][className] = new className(args);
                }
                //console.info("[class]"+ className + "[obj]" + this[__.poolDic][className])
            }
            return this[__.poolDic][className];
        }
    }]);

    return Singleton;
}();

exports.default = Singleton;
module.exports = exports['default'];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Singleton.js.map
        