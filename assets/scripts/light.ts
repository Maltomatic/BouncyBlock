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
    private body: cc.Node = null;
    private watch_x: number = 0;
    private watch_y: number = 0;
    private bottom: cc.Node = null;
    private raise_timer: number = 0.2;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.character = cc.find('Canvas/root/player');
        this.bottom = this.node.getChildByName('bottom');
    }

    start () {
        this.alert_level = 0;
        this.body = this.node.getParent();
        this.watch = false;
    }

    
    onEndContact(contact, self, other){
        if(other.node.name == 'player' && self.tag== 15){
            // this.watch_x = other.node.x;
            // this.watch_y = other.node.y;
            if(this.watch){
                this.watch = false;
                this.allclear();
                console.log("player left range");
            }else if(this.watch == false){
                this.watch = true;
                console.log("player entered watch frame");
            }
        }
    }
    // onEndContact(contact, self, other){
    //     if(other.node.name == 'player'){
    //         console.log("player out of range");
    //         this.allclear();
    //     }
    // }

    allclear(){
        this.alert_level = 0;
        this.raise_timer = 3;
        this.node.getParent().getComponent('enemy_wrapper').state = 0;
        // console.log("nothing to see");
    }

    update (dt) {
        // if(this.watch)console.log("watching");
        if(this.alert_level == 0 && !this.watch) this.allclear();
        else if(this.alert_level == 0 && this.watch){
            if(!this.character.getComponent('player').hidden){
                // if(this.bottom.x > this.character.x && this.node.x < this.character.x) this.node.skewX -= -5;
                // else if(this.bottom.x < this.character.x && this.node.x > this.character.x) this.node.skewX += -5;
                // else if(this.bottom.x < this.character.x && this.node.x < this.character.x) this.node.skewX += -5;
                // else if(this.bottom.x > this.character.x && this.node.x > this.character.x) this.node.skewX -= -5;
                this.alert_level = 1;
                console.log("player is being tracked");
                this.node.getParent().getComponent('enemy_wrapper').state = this.alert_level;
            }
        }

        if(this.alert_level == 1){
            this.raise_timer -= dt;
            if(this.raise_timer < 0){
                this.raise_timer = 0.2;
                var vis = !(this.character.getComponent('player').hidden);
                if(vis){
                    console.log("raise alert level to attack");
                    this.alert_level = 2;
                    this.node.getParent().getComponent('enemy_wrapper').state = 2;
                }else{
                    console.log("cease attack");
                    this.allclear();
                }
            }
        }
    }

    ////////////////////////////////// TODO //////////////////////////////////
    // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
    // (t == 0): just move away
    // else: light swing over to player
        // (0 < t <= 0.2): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
            // spotlight 
}
