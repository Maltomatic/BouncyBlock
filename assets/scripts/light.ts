// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class Lightbeam extends cc.Component {

    @property(cc.Node)
    character: cc.Node = null;

    alert_level: number = 0;        // 0: don't see   1: stare, pass by  2: attack
    private watch: boolean = false;
    private watch_x: number = 0;
    private watch_y: number = 0;
    private armed: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
        this.alert_level = 0;
    }

    
    onBeginContact(contact, self, other){
        if(other.node.name == 'player'){
            this.watch = true;
            this.watch_x = other.node.x;
            this.watch_y = other.node.y;
            console.log("contact player");
            var is_visible = !(this.character.getComponent('player').hidden);
            if(is_visible){
                this.alert_level = 1;
                console.log("spotted player");
            }
        }
    }
    // onPostSolve(contact, self, other){
    //     this.watch = false;
    //     if(other.node.name == 'player'){
    //         console.log("postsolve player");
    //         var is_visible = !(cc.find('Canvas/root/player').getComponent('player').hidden);
    //         if(is_visible){
    //             this.alert_level = 1;
    //             // console.log("spotted player");
    //             this.scheduleOnce(() =>{
    //                 if(!(cc.find('Canvas/root/player').getComponent('player').hidden)){
    //                     // console.log("can attack");
    //                     this.alert_level = 2;
    //                 }else{
    //                     // console.log("player has hidden");
    //                     this.alert_level = 0;
    //                 }
    //             }, 0.3);
    //         }
    //     }
    // }
    onEndContact(contact, self, other){
        if(other.node.name == 'player'){
            this.alert_level = 0;
            this.watch = false;
            this.armed = false;
        }
    }

    update (dt) {
        if(this.watch){
            if(this.character.x != this.watch_x || this.character.y != this.watch_y) this.alert_level = 1;
        }
        if(this.alert_level == 1 && !this.armed){
            this.armed = true;
            this.scheduleOnce(() =>{
                if(!(this.character.getComponent('player').hidden)){
                    console.log("can attack");
                    this.alert_level = 2;
                }else{
                    console.log("player has hidden");
                    this.alert_level = 0;
                    this.armed = false;
                }
            }, 0.3);
        }else if(this.alert_level == 2){
            // what to do after raising alert_level
            // take turns shooting
        }
    }

    ////////////////////////////////// TODO //////////////////////////////////
    // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
    // (t == 0): just move away
    // else: light swing over to player
        // (0 < t <= 0.3): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
            // spotlight 
}
