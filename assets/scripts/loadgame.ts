// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class Loadscene extends cc.Component {


    // LIFE-CYCLE CALLBACKS:


    start () {
        this.schedule( ()=> {
            // count -= 1;
            var str = cc.find('Canvas/load_background/str').getComponent(cc.Label);
            str.string = str.string + '.';
        }, 0.3, 2);
        this.scheduleOnce(()=> {
            cc.director.loadScene('menu');
        }, 1);
        cc.sys.localStorage.setItem("uid", 'local');
        cc.sys.localStorage.setItem("coins", 0);
        cc.sys.localStorage.setItem("lego", 0);
        cc.sys.localStorage.setItem("powerup", 0);
        cc.sys.localStorage.setItem("banana", 0);
        cc.sys.localStorage.setItem("mute", 0);
        cc.sys.localStorage.setItem("signal", 0);
        cc.sys.localStorage.setItem("highscore", 0);
        cc.sys.localStorage.setItem("name", 0);
        cc.sys.localStorage.setItem("email", 0);
        cc.sys.localStorage.setItem("color", '010000');
        cc.sys.localStorage.setItem("nowcolor", 1);
    }

    // update (dt) {}
}
