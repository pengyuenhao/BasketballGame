"use strict";
cc._RF.push(module, 'e779562ZElFYaaX36h1C7oi', 'ScoreView');
// Script/Ui/ScoreView.js

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
        score: 0,
        label: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var that = this;
        this.label = that.node.getComponent(cc.Label);
        signals.bind("getScore").listen(function (num) {
            that.score += num;
            console.info("[Current score]" + that.score + "[Label]" + that.label);
            that.label.string = that.score;
        });
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();