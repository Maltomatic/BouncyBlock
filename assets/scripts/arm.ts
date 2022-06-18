// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class arm extends cc.Component {


    @property()
    banana_Speed: number = 100;

    private anim: cc.Animation = null;
    private physicManager: cc.PhysicsManager = null;

    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2 (0, -500);
    }

    start () {
        this.anim = this.getComponent(cc.Animation);
    }

    onBeginContact(contact, self, other) {//碰撞
        if(other.node.name == "parent"){ 
            if(this.node.name == 'banana'){
                this.node.y - 20;
                this.anim.play('banana');// knock
                this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.banana_Speed,0);
                
                setTimeout(()=>{
                    this.node.destroy();
                }, 1000);
            }else if(this.node.name == 'lego'){
                this.anim.play('lego');// knock                
                setTimeout(()=>{
                    this.node.destroy();
                }, 1000);
            }
        }

    }

    // update (dt) {}
}
