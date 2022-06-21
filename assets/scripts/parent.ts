// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Player } from "./player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    speedup:number=0.7;
    @property(cc.Label)
    now_score:cc.Label;
    before_x:number;
    stunned:number=0;
    private penalty: number = 0;
    private animator: cc.Animation = null;
    
    @property(cc.AudioClip)
    footstep:cc.AudioClip;
    footstep_id:number;

    @property(cc.Node)
    player:cc.Node;
    onLoad () {
        this.animator = this.getComponent(cc.Animation);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x=this.node.x;
        this.footstep_id=cc.audioEngine.playEffect(this.footstep, true);
        cc.audioEngine.setVolume(this.footstep_id,1);
        
    }
    onBeginContact(contact, self, other){
        var touch = contact.getWorldManifold().normal;
        if(other.node.name=="lego")
        {
            this.stunned=1;
            this.animator.play("parent_stun");
            setTimeout(()=>{
                this.stunned=0;
                this.animator.play("parent_norm");
                this.node.color=new cc.Color(255,255,255);
                this.penalty = 220;
                this.scheduleOnce(() => {
                    this.penalty = 0;
                }, 2);
            }, 4000);
        }
        
        
    }
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected update(dt: number): void {
        this.speedup = 0.3 + 0.003*parseInt(this.now_score.string);  //每得一分加速0.03 //約七百多分會比player快
        if(!this.stunned) this.node.x += Math.max(0.32, (Math.min(this.speedup * 300, 250) + this.penalty)* dt);
        else this.node.x+=0;
        if(Math.abs(this.node.x-this.before_x)<=0.3&&this.stunned==0) this.jump();
        this.before_x=this.node.x;
        var close=680-(this.player.x-this.node.x);
        if(close>=0) cc.audioEngine.setVolume(this.footstep_id,close/680);
        
    }
    start () {

    }
    jump(){    
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        
    }
    // update (dt) {}
}
