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
        }, 1, 3);
        this.scheduleOnce(()=> {
            cc.director.loadScene('menu');
        }, 3.1);
    }

    // update (dt) {}
}
