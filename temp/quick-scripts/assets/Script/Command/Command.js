(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Command/Command.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd1097iMOfBAhYHbxMEwBEXe', 'Command', __filename);
// Script/Command/Command.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Singleton from ""
var Command = function Command(root, execute) {
  _classCallCheck(this, Command);

  //闭包
  this.getRoot = function () {
    var r = root;
    return r;
  };
  //console.log("##############");
  // 维护当前requestAnimationFrame的id
  this.execute = execute;
};

exports.default = Command;
module.exports = exports["default"];

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
        //# sourceMappingURL=Command.js.map
        