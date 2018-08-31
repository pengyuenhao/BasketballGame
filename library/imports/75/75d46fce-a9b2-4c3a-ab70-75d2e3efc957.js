"use strict";
cc._RF.push(module, '75d46/OqbJMOqtwddLj78lX', 'SurfaceView');
// Script/Ui/SurfaceView.js

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
        //初始位置
        initPosition: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.initPosition = this.node.position;
        var that = this;

        signals.bind("start").listen(function () {
            onEnter();
        });
        signals.bind("over").listen(function () {
            onLeave();
        });

        function onLeave() {
            var moveLeaveAction = cc.moveTo(1, that.initPosition, 0);
            that.node.stopAllActions();
            that.node.runAction(moveLeaveAction);
            console.info("[on leave]");
        }

        function onEnter() {
            var moveEnterAction = cc.moveTo(1, cc.v2(that.node.position.x, that.node.position.y + 100), 0);
            that.node.stopAllActions();
            that.node.runAction(moveEnterAction);
            console.info("[on enter]");
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();