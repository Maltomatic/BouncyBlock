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
    @property()
    range: number = 50;

    @property(cc.ParticleSystem)
    spark : cc.ParticleSystem = null;

    private vis_time: number = 0;
    private attack: boolean = false;

    private dir: number = 1;
    private leftbound: number = 0;
    private rightbound: number = 0;

    @property(cc.Node)
    eye_pos : cc.Node = null;
    @property(cc.Node)
    lightbeam : cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    private physicManager: cc.PhysicsManager = null;
    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        // this.wander();
    }

    start () {
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    }

    update (dt) {
        this.node.x += this.searchlight_speed * dt * this.dir;
        this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range/40);
        this.eye_pos.angle += this.dir * 0.7 * this.range/50 / (this.searchlight_speed/60);
        this.lightbeam.angle += this.dir * 0.2 * this.range/50 / (this.searchlight_speed/60);
        if(this.node.x <= this.leftbound || this.node.x >= this.rightbound) this.dir *= -1;
    }
    // wander(){
    //     cc.tween(this.node).repeatForever(
    //         cc.tween(this.node)
    //         .by(1, {x: this.node.position.x-100})  
    //         .by(1, {x: this.node.position.x+100})
    //     ).start();
        
    // }

    ////////////////////////////////// TODO //////////////////////////////////
    // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
    // (t == 0): just move away
    // else: light swing over to player
        // (0 < t <= 0.3): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
            // spotlight 
}
