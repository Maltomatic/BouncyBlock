// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    speedup:number=0.7;
    @property(cc.Label)
    now_score:cc.Label;
    before_x:number;
    stunned:number=0;
    
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x=this.node.x;
        
    }
    onBeginContact(contact, self, other){
        var touch = contact.getWorldManifold().normal;
        if(other.node.name=="lego")
        {
            this.stunned=1;
            setTimeout(()=>{

                this.stunned=0;
                this.node.color=new cc.Color(255,255,255);
            
                 }, 3000);
        }
        
        
    }
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected update(dt: number): void {
        this.speedup=0.7+0.003*parseInt(this.now_score.string);  //每得一分加速0.03 //約七百多分會比player快
        if(this.stunned==0) this.node.x += this.speedup;
        else this.node.x+=0;
        if(Math.abs(this.node.x-this.before_x)<=0.3&&this.stunned==0) this.jump();
        this.before_x=this.node.x;
        
    }
    start () {

    }
    jump(){    
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        
    }
    // update (dt) {}
}
