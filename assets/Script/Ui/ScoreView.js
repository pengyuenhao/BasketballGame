import SignalMgr from "../Signal/SignalMgr";
var signals = new SignalMgr();
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
        score : 0,
        label: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var that = this;
        this.label = that.node.getComponent(cc.Label);
        signals.bind("getScore").listen(function (num) {
            that.score +=num;
            console.info("[Current score]" + that.score + "[Label]"+that.label);
            that.label.string = that.score;
            
        });
    },

    start () {

    },

    // update (dt) {},
});
