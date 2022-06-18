// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bubble_item extends cc.Component {
    @property()
    bubble_Speed: number = 50;

    private physicManager: cc.PhysicsManager = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2 (0, -500);
        this.bubble_move();
        this.print_bubble(); 
    }

    start () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.bubble_Speed,0);
    }
    
    bubble_move(){
        
    }
    print_bubble(){ // @@ random print bubble and bubble lego on canvas

    }

    update (dt) {

    }
}
