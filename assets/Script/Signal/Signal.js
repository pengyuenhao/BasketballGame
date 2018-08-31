import Singleton from "../Lib/Singleton"

var singleton = new Singleton();

export default class Signal {
    constructor(root) {
        //回调函数
        var callback = [];
        //维护一个命令字典
        var sets = new Set();
        // 维护当前requestAnimationFrame的id
        this.to = function(cmd){
            if(sets.has(cmd)){
                //已经添加指令
                console.log("is exist "+ cmd.constructor().name);
            }
            else{
                console.log("no exist "+ cmd.constructor().name);
                sets.add(cmd);
            }
        };
        this.listen = function(call){
            callback.push(call);
        }
        //信号被发布事，执行所有和信号关联的指令
        this.dispose = function(args){
            sets.forEach(function(element){
                var cmd = singleton.getSingleton(element,root);
                console.info("[root is 3]"+root + "[cmd]"+ cmd);
                cmd.execute.apply(this,args);
            });
            callback.forEach(function(element){
                //执行
                element.apply(this,args);
            });
        }
        this.getCmds = function(){
            var cmds = [];
            sets.forEach(function(element){
                cmds.push(singleton.getSingleton(element,root))
            });
            return cmds;
        }
    }
}