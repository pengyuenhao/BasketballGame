const __ = {
    /**
     * 定义对象池字典为唯一值
    */
    poolDic: Symbol('poolDic')
  }
export default class Singleton {
    /**
     * 构造函数
     */
    constructor() {
      this[__.poolDic] = {}
    }
    //获取一个单例
    getSingleton(className) {
        var args = [];
        for(var i = 1;i<arguments.length;i++){
            args.push(arguments[i]);
        }
        if(!this[__.poolDic][className]){
            if(args.length === 1){
                this[__.poolDic][className] = new className(args[0]);
            }else{
                this[__.poolDic][className] = new className(args);
            }
            //console.info("[class]"+ className + "[obj]" + this[__.poolDic][className])
        }
        return this[__.poolDic][className];
    }
}