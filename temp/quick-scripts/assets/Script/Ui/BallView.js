(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ui/BallView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'faa4dSoneVG4oAr0hZnuz0V', 'BallView', __filename);
// Script/Ui/BallView.js

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
        initPosition: 0,
        direction: 0,
        RigidBody: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var _this = this;

        this.initPosition = this.node.position;
        this.RigidBody = this.getComponent(cc.RigidBody);
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
            //let moveEnterAction = cc.moveTo(1, cc.v2(that.node.position.x, that.node.position.y - 200), 0);
            that.node.stopAllActions();
            //that.node.runAction(moveEnterAction);
            that.node.position = cc.v2(0, cc.view.getVisibleSize().height / 2); //初始化位置
            that.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            console.info("[on enter]");
        }

        /*         this.node.on("touchmove", (event) => {
                    //将世界坐标转化为本地坐标
                    let touchPoint = this.node.parent.convertToNodeSpaceAR(event.getLocation());
                    let delta = event.touch.getDelta();
                    console.info("[触摸位置]" + touchPoint + "[变化]"+delta);
                    this.node.x = touchPoint.x;
                    this.node.y = touchPoint.y;
                    this.RigidBody.linearVelocity = cc.v2(25 * delta.x,0);
                }); */

        this.node.on("touchstart", function (event) {
            var offset = 0;
            var rate = 1;
            _this.direction = signals.getRoot().direction;
            if (_this.RigidBody.linearVelocity.y < 0) {
                offset = 0;
                rate = 0.25;
            }
            if (_this.direction === 0) {
                _this.RigidBody.linearVelocity = cc.v2(_this.RigidBody.linearVelocity.x - 100, rate * _this.RigidBody.linearVelocity.y + 325 + offset);
            }
            if (_this.direction === 1) {
                _this.RigidBody.linearVelocity = cc.v2(_this.RigidBody.linearVelocity.x + 100, rate * _this.RigidBody.linearVelocity.y + 325 + offset);
            }

            cc.loader.loadRes(cc.url.raw("resources/Audio/00B9_0008.wav"), function (err, clip) {
                cc.audioEngine.playEffect(clip, false);
            });
        });
    },
    start: function start() {},
    onBeginContact: function onBeginContact(contact, self, other) {
        //console.info("[Contact]"+other.tag);
        //发布碰撞消息
        signals.dispose("contact", other.tag);
    },
    update: function update(dt) {
        if (this.node.x > 50 + cc.view.getVisibleSize().width / 2) {
            this.node.x = -25 - cc.view.getVisibleSize().width / 2;
            this.node.y = this.node.y / 4;
            this.RigidBody.linearVelocity = cc.v2(150, 350);
        }
        if (this.node.x < -50 - cc.view.getVisibleSize().width / 2) {
            this.node.x = 25 + cc.view.getVisibleSize().width / 2;
            this.node.y = this.node.y / 4;
            this.RigidBody.linearVelocity = cc.v2(-150, 350);
        }
        if (this.direction === 0 && this.RigidBody.linearVelocity.x > -50) {
            this.RigidBody.linearVelocity = cc.v2(this.RigidBody.linearVelocity.x - 0.1, this.RigidBody.linearVelocity.y);
        }
        if (this.direction === 1 && this.RigidBody.linearVelocity.x < 50) {
            this.RigidBody.linearVelocity = cc.v2(this.RigidBody.linearVelocity.x + 0.1, this.RigidBody.linearVelocity.y);
        }
        if (this.node.y < -100 - cc.view.getVisibleSize().height / 2) {
            this.node.x = 0;
            this.node.y = cc.view.getVisibleSize().height / 2;
        }
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
        //# sourceMappingURL=BallView.js.map
        