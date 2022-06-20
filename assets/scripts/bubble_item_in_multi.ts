const {ccclass, property} = cc._decorator;

@ccclass
export default class bubble_item_in_multi extends cc.Component {

    bubble_num : number = 0;
    bubble_Speed: number = 0;
    private physicManager: cc.PhysicsManager = null;

    onLoad () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2 (0, -500);

        this.bubble_num = Math.floor(Math.random() * 10);
        this.wander();
    }

    start () {
        this.bubble_Speed = (Math.random() * 10 + 20);
        this.wander();
    }
    wander(){
        cc.tween(this.node).repeatForever(
            cc.tween(this.node)
            .by(1, {x: 200})  
            .by(1, {x: -200})
        ).start();
    }

    onDestroy () {
        cc.director.getCollisionManager().enabled = false;
    }
}
