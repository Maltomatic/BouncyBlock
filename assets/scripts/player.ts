const {ccclass, property} = cc._decorator;

@ccclass
export class Player extends cc.Component {

    @property(cc.Node)
    camera: cc.Node = null;

    private dir: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.dir = 0;
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }


    start () {
        this.dir = 0;
    }

    update (dt) {
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        this.node.scaleX = (this.dir >= 0) ? 1 : -1;
        var dy = this.getComponent(cc.RigidBody).linearVelocity.y;
    }

    camera_track(){
        if(this.node.x < 100) this.camera.x = 0;
        else if(this.node.x > 3940) this.camera.x = 3840;
        else this.camera.x = this.node.x - 100;
    }

    onKeyDown(event){
        
        if(event.keyCode == cc.macro.KEY.space){
            this.jump();
        }
        if(event.keyCode == cc.macro.KEY.left) this.dir = -1;
        else if(event.keyCode == cc.macro.KEY.right) this.dir = 1;
        
        if(event.keyCode == cc.macro.KEY.p){
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }else if(event.keyCode == cc.macro.KEY.r){
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }
    }
    onKeyUp(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.dir = 0;
                break;
            case cc.macro.KEY.right:
                this.dir = 0;
                break;
        }
    }

    jump(){
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
    }
}
