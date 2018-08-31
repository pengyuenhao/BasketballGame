(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Root/LogicRoot.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c6dcEaTeBNZplNH4+hYnVH', 'LogicRoot', __filename);
// Script/Root/LogicRoot.js

"use strict";

var _SignalMgr = require("../Signal/SignalMgr");

var _SignalMgr2 = _interopRequireDefault(_SignalMgr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signals = new _SignalMgr2.default();
// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        contactTop: 0,
        contactCenter: 0,
        contactBottom: 0,
        lastContact: 0,
        timeCount: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var that = this;
        this.contactTop = false;
        this.contactBottom = false;
        this.contactCenter = false;
        signals.bind("getScore").listen(function (score) {
            if (signals.getRoot().direction === 0) {
                signals.getRoot().direction = 1;
            } else {
                signals.getRoot().direction = 0;
            }
            signals.dispose("switch");
        });
        signals.bind("contact").listen(function (tag) {
            //console.info("[Logic Contact]"+ tag);
            if (that.timeCount - that.lastContact > 10000) {
                that.contactTop = false;
                that.contactBottom = false;
                that.contactCenter = false;
                //console.info("[Contact Overtime]");
            }
            that.lastContact = that.timeCount;
            switch (tag) {
                case 2:
                    that.contactTop = false;
                    that.contactBottom = false;
                    that.contactCenter = false;
                    //console.info("[Contact Surface]");
                    break;
                case 4:
                    that.contactBottom = false;
                    that.contactCenter = false;
                    that.contactTop = true;
                    break;
                case 5:
                    if (that.contactBottom === true) {
                        that.contactTop = false;
                        that.contactCenter = false;
                        //console.info("[Contact Not Vaild]");
                    } else {
                        that.contactCenter = true;
                    }
                    break;
                case 6:
                    if (that.contactTop === false || that.contactCenter === false) {
                        that.contactBottom = false;
                    } else {
                        that.contactBottom = true;
                    }
                    break;
                default:
                    break;
            }
            if (that.contactTop === true && that.contactBottom === true && that.contactCenter === true) {
                console.info("[Logic Contact]" + "Get Score");
                that.contactTop = false;
                that.contactBottom = false;
                that.contactCenter = false;
                signals.dispose("getScore", 1);
            }
        });
    },
    start: function start() {},
    update: function update(dt) {
        this.timeCount = this.timeCount + 1;
    }
});

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
        //# sourceMappingURL=LogicRoot.js.map
        