// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    before_x:number;
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x=this.node.x;
        
    }
    onBeginContact(contact, self, other){
        var touch = contact.getWorldManifold().normal;
        
        
    }
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    protected update(dt: number): void {
        this.node.x += 1;
        if(Math.abs(this.node.x-this.before_x)<=0.5) this.jump();
        this.before_x=this.node.x;
        
    }
    start () {

    }
    jump(){    
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        
    }
    // update (dt) {}
}
