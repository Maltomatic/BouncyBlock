const {ccclass, property} = cc._decorator;

@ccclass
export class Player extends cc.Component {

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.Node)
    maplist: cc.Node = null;

    @property(cc.Prefab)
    secPrefab: cc.Prefab = null;

    private dir: number = 0;
    private section_count = 0;      // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.dir = 0;
        this.section_count = 0;
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onBeginContact(contact, self, other){
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if(other.tag == 1000){
            console.log("hit marker");
            if(this.node.x >= this.section_count*1920){
                console.log("init next section");
                this.section_count++;
                var next_section = cc.instantiate(this.secPrefab);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            }else console.log(this.node.x, this.section_count);
        }
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
