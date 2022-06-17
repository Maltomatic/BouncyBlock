// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class searchlight extends cc.Component {

    private searchlight_speed: number = 70;
    @property()
    range: number = 50;

    @property(cc.ParticleSystem)
    spark : cc.ParticleSystem = null;

    private character: cc.Node = null;

    @property(cc.Node)
    eye_pos : cc.Node = null;
    @property(cc.Node)
    lightbeam : cc.Node = null;
    @property(cc.Node)
    beambottom: cc.Node = null;

    private vis_time: number = 0;
    private attack: boolean = false;
    private state: number = 0;      // 0: normal movement, 1: track, 2: attack

    private dir: number = 1;
    private leftbound: number = 0;
    private rightbound: number = 0;

    private lockon: boolean = false;
    // LIFE-CYCLE CALLBACKS:
    private physicManager: cc.PhysicsManager = null;
    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.character = cc.find('Canvas/root/player');
        // this.wander();
    }

    start () {
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    }

    update (dt) {
        // console.log("alert level: " + this.lightbeam.getComponent('light').alert_level);
        if(this.lightbeam.getComponent('light').alert_level == 0){
            this.state = 0;
            this.lockon = false;
            console.log("no target");
            this.node.x += this.searchlight_speed * dt * this.dir;
            // this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range/40);
            this.lightbeam.x = this.node.x;
            this.lightbeam.angle += this.dir * 0.2 * this.range/50;
            if(this.node.x <= this.leftbound) this.dir = 1;
            else if(this.node.x >= this.rightbound) this.dir = -1;

            if(this.lightbeam.angle > 40) this.lightbeam.angle = 40;
            if(this.lightbeam.angle < -40) this.lightbeam.angle = -40;
        }else{
            //if(this.lightbeam.getComponent('light').alert_level){
                console.log("tracking");
                var shift_dir = 0;
                if(this.node.x > this.character.x + 3) shift_dir = -1;
                else if(this.node.x < this.character.x - 3) shift_dir = 1;
                this.node.x += 3 * this.searchlight_speed * dt * shift_dir;
                this.lightbeam.x = this.node.x;
                // var diff = {
                //     'dx' : this.character.x - this.node.x,
                //     'dy':this.character.y - this.node.y 
                // };
                // var angle = Math.atan2(diff.dy, diff.dx) * -57.2958/4;
                // var roto = cc.rotateTo(0.05, angle);
                // this.lightbeam.runAction(roto);
                if(this.beambottom.x > this.character.x + 3) shift_dir = 1;
                else if(this.beambottom.x < this.character.x - 3) shift_dir = -1;
                this.lightbeam.angle += 2 * dt * shift_dir;
            }
        this.eye_pos.angle = this.lightbeam.angle;
    }
        
        // this.lightbeam.x = this.node.x;
    //}
    // wander(){
    //     cc.tween(this.node).repeatForever(
    //         cc.tween(this.node)
    //         .by(1, {x: this.node.position.x-100})  
    //         .by(1, {x: this.node.position.x+100})
    //     ).start();
        
    // }
}
