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
        contactTop:0,
        contactCenter:0,
        contactBottom:0,
        lastContact:0,
        timeCount:0,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () 
     {
        var that = this;
        this.contactTop = false;
        this.contactBottom = false;
        this.contactCenter = false;
        signals.bind("getScore").listen(function(score){
            if(signals.getRoot().direction===0){
                signals.getRoot().direction = 1;
            }
            else{
                signals.getRoot().direction = 0;
            }
            signals.dispose("switch");
        });
        signals.bind("contact").listen(function(tag){
            //console.info("[Logic Contact]"+ tag);
            if(that.timeCount - that.lastContact > 10000){
                that.contactTop = false;
                that.contactBottom = false;
                that.contactCenter = false;
                //console.info("[Contact Overtime]");
            }
            that.lastContact = that.timeCount
            switch(tag){
                case 2:
                    that.contactTop = false;
                    that.contactBottom = false;
                    that.contactCenter = false;
                    //console.info("[Contact Surface]");
                    break;
                case 4:
                    that.contactBottom = false;
                    if(that.contactCenter === false){
                        that.contactTop = true;
                    }
                    else{
                        that.contactTop = false;
                        that.contactCenter = false;
                        //console.info("[Contact Not Vaild]");
                    }
                    break;
                case 5:
                    if(that.contactBottom === true){
                        that.contactTop = false;
                        that.contactCenter = false;
                        //console.info("[Contact Not Vaild]");
                    }
                    else{
                        that.contactCenter = true;
                    }
                    break;
                case 6:
                    that.contactBottom = true;
                    break;
                default:
                    break;
            }
            if(that.contactTop === true && that.contactBottom === true){
                console.info("[Logic Contact]"+ "Get Score");
                that.contactTop = false;
                that.contactBottom = false;
                that.contactCenter = false;
                signals.dispose("getScore",1);
            }
        });
     },

    start () {

    },

    update (dt) 
    {
        this.timeCount = this.timeCount + 1;
    },
});
