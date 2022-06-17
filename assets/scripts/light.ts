// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class Lightbeam extends cc.Component {

    private character: cc.Node = null;

    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    alert_level: number = 0;        // 0: don't see   1: stare, pass by  2: attack
    private watch: boolean = false;
    private watch_x: number = 0;
    private watch_y: number = 0;
    private armed: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.character = cc.find('Canvas/root/player');
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
            if(!(this.character.getComponent('player').hidden)){
                this.alert_level = 1;
                this.armed = false;
                // console.log("spotted player");
            }
        }
    }
    onEndContact(contact, self, other){
        if(other.node.name == 'player'){
            console.log("player out of range");
            this.allclear();
        }
    }

    allclear(){
        this.alert_level = 0;
        this.watch = false;
        this.armed = false;
        this.unscheduleAllCallbacks();
    }

    update (dt) {
        if(this.alert_level == 0 && !this.watch) this.allclear();
        else if(this.watch){
            if((this.character.x != this.watch_x || this.character.y != this.watch_y) && !this.character.getComponent('player').hidden) this.alert_level = Math.max(1, this.alert_level);
        }

        if(this.alert_level == 1 && !this.armed){
            this.armed = true;
            this.scheduleOnce(() =>{
                var vis = !(this.character.getComponent('player').hidden);
                // console.log("visible from alert level 1? " + vis);
                if(vis){
                    console.log("raise alert level to attack");
                    this.alert_level = 2;
                    this.armed = true;
                }else{
                    console.log("cease attack");
                    this.allclear();
                }
            }, 0.3);
        }else if(this.alert_level == 2){
            if(this.armed){
                this.armed = false;
                this.scheduleOnce(()=> {
                    // var vis = !(this.character.getComponent('player').hidden);
                    // // console.log("visible from alert level 2? " + vis)
                    // if(vis){
                    //     this.armed = true;
                    //     this.shoot();
                    //     this.alert_level = 2;
                    // }else{
                    //     this.allclear();
                    // }
                    this.armed = true;
                    this.shoot();
                    this.alert_level = 2;
                }, 0.5);
            }
        }
    }

    shoot(){
        console.log("shooting")
        var bullet = cc.instantiate(this.bullet);
        bullet.setPosition(this.node.x, this.node.y+10);
        console.log("create bullet by light at " + this.node.x, this.node.y);
        cc.find("Canvas/root").addChild(bullet);
    }

    ////////////////////////////////// TODO //////////////////////////////////
    // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
    // (t == 0): just move away
    // else: light swing over to player
        // (0 < t <= 0.3): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
            // spotlight 
}
