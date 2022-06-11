// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class searchlight extends cc.Component {

    @property()
    searchlight_speed: number = 10;

    @property(cc.ParticleSystem)
    spark : cc.ParticleSystem = null;

    private vis_time: number = 0;
    private attack: boolean = false;

    @property(cc.Node)
    eye_pos : cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    private physicManager: cc.PhysicsManager = null;
    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.wander();
    }

    start () {
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
    }

    update (dt) {
        //this.node.x+= this.searchlight_speed * dt;
    }
    wander(){
        cc.tween(this.node).repeatForever(
            cc.tween(this.node)
            .by(1, {x: this.node.position.x-100})  
            .by(1, {x: this.node.position.x+100})
        ).start();
        
    }

    ////////////////////////////////// TODO //////////////////////////////////
    // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
    // (t == 0): just move away
    // else: light swing over to player
        // (0 < t <= 0.3): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
            // spotlight 
}
