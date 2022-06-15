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

    private lockon: boolean = false;

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
        if(this.lightbeam.getComponent('light').alert_level == 0){
            this.lockon = false;
            console.log("no target yet");
            this.node.x += this.searchlight_speed * dt * this.dir;
            this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range/40);
            this.eye_pos.angle += this.dir * 0.7 * this.range/50 / (this.searchlight_speed/60);
            this.lightbeam.angle += this.dir * 0.2 * this.range/50 / (this.searchlight_speed/60);
            if(this.node.x <= this.leftbound || this.node.x >= this.rightbound) this.dir *= -1;
        }else{
            if(!this.lockon){
                this.lockon = true;
                console.log("searchlight:: locked on");
                // move to be straight over player
                this.lightbeam.angle += 0.5 * this.dir;
            }
        }
    }
    // wander(){
    //     cc.tween(this.node).repeatForever(
    //         cc.tween(this.node)
    //         .by(1, {x: this.node.position.x-100})  
    //         .by(1, {x: this.node.position.x+100})
    //     ).start();
        
    // }
}
