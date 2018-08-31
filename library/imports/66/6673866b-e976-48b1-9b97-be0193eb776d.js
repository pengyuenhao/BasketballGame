"use strict";
cc._RF.push(module, '66738Zr6XZIsZuXvgGT63dt', 'MainRoot');
// Script/Root/MainRoot.js

"use strict";

var _SignalMgr = require("../Signal/SignalMgr");

var _SignalMgr2 = _interopRequireDefault(_SignalMgr);

var _StartCmd = require("../Command/StartCmd");

var _StartCmd2 = _interopRequireDefault(_StartCmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取信号管理器
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
        //节点映射
        nodeMap: new Map(),
        pm: null,
        direction: 0
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

    onLoad: function onLoad() {
        //cc.view.enableAutoFullScreen(true);
        //设定根节点
        signals.setRoot(this);
        //绑定启动信号
        signals.bind("start").to(_StartCmd2.default);
        //物理管理
        this.pm = cc.director.getPhysicsManager();
        this.pm.enabled = true;
        console.info("[物理]" + this.pm);
        this.pm.enabled = false;
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();