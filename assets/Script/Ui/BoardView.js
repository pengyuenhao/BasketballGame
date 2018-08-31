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
        direction: 0,
        isEnter:0,
        //初始位置
        initPosition: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initPosition = this.node.position;
        var that = this;

/*         signals.bind("start").listen(function () {
            onEnter();
        }); */
        signals.bind("over").listen(function () {
            onLeave();
        });
        signals.bind("switch").listen(function(){
            if(that.direction === signals.getRoot().direction){
                onEnter();
            }
            else{
                onLeave();
            }
        })

        function onLeave() {
            if(that.isEnter){
                that.isEnter = false
            }else{
                return;
            }
            let offset;
            if(that.direction === 0){
                offset = 200;
            }
            else{
                offset = -200;
            }
            let moveLeaveAction = cc.moveTo(0.5, that.node.position.x - offset,0);
            that.node.stopAllActions();
            that.node.runAction(moveLeaveAction);
            console.info("[on leave]");
        }

        function onEnter() {
            if(!that.isEnter){
                that.isEnter = true
            }else{
                return;
            }
            let offset;
            if(that.direction === 0){
                offset = 200;
            }
            else{
                offset = -200;
            }
            var height = 0.5 * cc.view.getVisibleSize().height * (-0.5+Math.random());
            let moveEnterAction = cc.moveTo(0.5, cc.v2(that.node.position.x + offset, height));
            that.node.stopAllActions();
            that.node.runAction(moveEnterAction);
            console.info("[on enter]" + height);
        }
    },

    start () {

    },

    // update (dt) {},
});
