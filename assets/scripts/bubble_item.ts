const {ccclass, property} = cc._decorator;

@ccclass
export default class bubble_item extends cc.Component {


    bubble_num : number = 0;
    bubble_Speed: number = 0;
    private physicManager: cc.PhysicsManager = null;

    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2 (0, -500);
        // ----------------------
        this.bubble_num = Math.floor(Math.random() * 3);
        this.wander();
        //this.bubble_show = this.node.getComponent(cc.Sprite);
       // this.generate_bubble();
    }

    start () {
        this.bubble_Speed = (Math.random() * 10 + 20);
        // this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.bubble_Speed,0);//
        this.wander();

    }
    
    // generate_bubble(){ //random print bubble and bubble lego on  canvas
    //     if(this.bubble_Prefabs == null) return;
    //     var bubble_pre = cc.instantiate(this.bubble_Prefabs);
    //     bubble_pre.x = this.node.x + 50 ;
    //     bubble_pre.y = this.node.y + 30 ;
    //     this.scheduleOnce(this.generate_bubble.bind(this), Math.random() * 3 + 10);
    //     cc.find("Canvas/root").addChild(bubble_pre);

    // }

    update (dt) {

    }

    onDestroy () {
        cc.director.getCollisionManager().enabled = false;
    }
     wander(){
        cc.tween(this.node).repeatForever(
            cc.tween(this.node)
            .by(1, {x: 200})  
            .by(1, {x: -200})
        ).start();
    }
}
