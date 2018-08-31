(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ui/StartBtnView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1dc3d9/XcVAkK7FEHZNNH2y', 'StartBtnView', __filename);
// Script/Ui/StartBtnView.js

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
        //点击后的缩放比例
        pressedScale: 0.95,
        //转换持续时间
        transDuration: 0.1,
        //音效
        audio: 0,
        //初始缩放
        initScale: 0,
        //初始位置
        initPosition: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        console.log("click test");

        var that = this;
        this.initScale = this.node.scale;
        this.initPosition = this.node.position;

        console.log(this.initScale + "，" + this.initPosition);

        function onTouchDown(event) {
            var scaleDownAction = cc.scaleTo(that.transDuration, that.pressedScale);
            var btnScale = event.target.getComponent('ButtonScaler');
            this.stopAllActions();
            //这里可以添加音效
            this.runAction(scaleDownAction);
        }
        function onTouchUp(event) {
            var scaleUpAction = cc.scaleTo(that.transDuration, that.initScale);
            var moveLeaveAction = cc.moveTo(1, cc.v2(-cc.view.getVisibleSize().width, this.position.y), 0);
            this.stopAllActions();
            this.runAction(scaleUpAction);
            this.runAction(moveLeaveAction);

            signals.dispose("start");
        }
        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
    },
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=StartBtnView.js.map
        