"use strict";
cc._RF.push(module, '382f3OSCBtPA59NkHIrnRpU', 'BoardView');
// Script/Ui/BoardView.js

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
        direction: 0,
        isEnter: 0,
        //初始位置
        initPosition: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.initPosition = this.node.position;
        var that = this;

        /*         signals.bind("start").listen(function () {
                    onEnter();
                }); */
        signals.bind("over").listen(function () {
            onLeave();
        });
        signals.bind("switch").listen(function () {
            if (that.direction === signals.getRoot().direction) {
                onEnter();
            } else {
                onLeave();
            }
        });

        function onLeave() {
            if (that.isEnter) {
                that.isEnter = false;
            } else {
                return;
            }
            var offset = void 0;
            if (that.direction === 0) {
                offset = 200;
            } else {
                offset = -200;
            }
            var moveLeaveAction = cc.moveTo(0.5, that.node.position.x - offset, 0);
            that.node.stopAllActions();
            that.node.runAction(moveLeaveAction);
            console.info("[on leave]");
        }

        function onEnter() {
            if (!that.isEnter) {
                that.isEnter = true;
            } else {
                return;
            }
            var offset = void 0;
            if (that.direction === 0) {
                offset = 200;
            } else {
                offset = -200;
            }
            var height = 0.5 * cc.view.getVisibleSize().height * (-0.5 + Math.random());
            var moveEnterAction = cc.moveTo(0.5, cc.v2(that.node.position.x + offset, height));
            that.node.stopAllActions();
            that.node.runAction(moveEnterAction);
            console.info("[on enter]" + height);
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();