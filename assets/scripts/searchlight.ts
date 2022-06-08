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
}
