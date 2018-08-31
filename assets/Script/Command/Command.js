

//import Singleton from ""
export default class Command {
    constructor(root,execute) {
      //闭包
      this.getRoot = function(){
        var r = root;
        return r;
      }
      //console.log("##############");
      // 维护当前requestAnimationFrame的id
      this.execute = execute;
    }
}