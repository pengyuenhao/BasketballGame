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
        //点击后的缩放比例
        pressedScale : 0.95,
        //转换持续时间
        transDuration : 0.1,
        //音效
        audio : 0,
        //初始缩放
        initScale : 0,
        //初始位置
        initPosition : 0,
    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        console.log("click test");

        var that = this;
        this.initScale = this.node.scale;
        this.initPosition = this.node.position;

        console.log(this.initScale + "，" + this.initPosition);

        function onTouchDown (event) {
            let scaleDownAction = cc.scaleTo(that.transDuration, that.pressedScale);
            let btnScale = event.target.getComponent('ButtonScaler');
            this.stopAllActions();
            //这里可以添加音效
            this.runAction(scaleDownAction);            
        }
        function onTouchUp (event) {
            let scaleUpAction = cc.scaleTo(that.transDuration, that.initScale);
            let moveLeaveAction = cc.moveTo(1, cc.v2(- cc.view.getVisibleSize().width, this.position.y),0);
            this.stopAllActions();
            this.runAction(scaleUpAction);
            this.runAction(moveLeaveAction);

            signals.dispose("start");
        }
        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
    },
    start () {
        
    },

    // update (dt) {},
});
