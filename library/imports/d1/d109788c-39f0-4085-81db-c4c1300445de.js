"use strict";
cc._RF.push(module, 'd1097iMOfBAhYHbxMEwBEXe', 'Command');
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