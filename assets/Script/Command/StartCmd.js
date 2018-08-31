import Command from "./Command"
import SignalMgr from "../Signal/SignalMgr";
var signals = new SignalMgr();
//开始指令
export default class StartCmd extends Command{
    constructor(root){
        super(root,function(){
            root.pm.enabled  = true;
            root.direction = Math.round(10*Math.random())%2;
            console.info("[启动游戏]" + root.constructor.name + "[方向]"+ root.direction);
            signals.dispose("switch");
        });
    }
}