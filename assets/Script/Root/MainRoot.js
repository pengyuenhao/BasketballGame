//获取信号管理器
import SignalMgr from "../Signal/SignalMgr";
import StartCmd from "../Command/StartCmd";

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
        //节点映射
        nodeMap : new Map(),
        pm : null,
        direction : 0,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //cc.view.enableAutoFullScreen(true);
        //设定根节点
        signals.setRoot(this);
        //绑定启动信号
        signals.bind("start").to(StartCmd);
        //物理管理
        this.pm = cc.director.getPhysicsManager();
        this.pm.enabled = true;
        console.info("[物理]"+this.pm);
        this.pm.enabled = false;
    },

    start () {

    },

    // update (dt) {},
});
