// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class Bird extends cc.Component {

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.Node)
    maplist: cc.Node = null;

    @property(cc.Prefab)
    section: cc.Prefab = null;

    @property(cc.Node)
    Score: cc.Node = null;
    @property(cc.Node)
    Scoretag: cc.Node = null;

    @property(cc.Sprite)
    Color: cc.Sprite = null;

    @property(cc.AudioClip)
    die_audio : cc.AudioClip = null; 

    private section_count: number = 0;      // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
    private score: number = 0;

    private speed: number = 150;
    color: number = 0;
    strip: number = 0;
    base: number = 0;
    last_x: number = 0.0;

    // color info of new_tileset
    color_list: any = {7: "#2b3a67",8: "#496a81",9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
    13:"#1c3144", 14: "#596f62", 15: "#7ea16b",16: "#c3d898",17: "#70161d",
    19 :"#edebd3", 20 :"#edebd3", 21 :"#da4167", 22 :"#f4d35e", 23 :"#f78664", 
    25  :"#562c2c", 26 :"#f2542d", 27 :"#f5dfbb", 28 :"#0e9595", 29 :"#127474", 
    31 :"#8e9aaf", 32 :"#cbc0d3", 33 :"#efd3d7", 34 :"#feeafa", 35 :"#dee2ff" }

    // LIFE-CYCLE CALLBACKS:
    setcolor() {
        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 6*this.strip;
        this.color = 1 + Math.floor(Math.random() * 4);
        //console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255,255,255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    }

    onLoad () {
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.section_count = 0;
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start () {
        this.score = 0;
    }

    update (dt) {
        this.camera_track();
        this.node.x += this.speed * dt;
        
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    }

    camera_track(){
        this.Scoretag.x = Math.max(this.node.x - 500, -389.764);
        if(this.node.x < 100) this.camera.x = 0;
        else this.camera.x = this.node.x - 100;
    }

    onBeginContact(contact, self, other){
        // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if(other.tag == 1000){
            //console.log("hit marker");
            if(this.node.x >= this.section_count*1920){
                console.log("init next section");
                this.speed *= 1.1;
                this.section_count++;
                var rand = Math.floor(Math.random() * 3)
                //console.log(rand);
                var next_section = cc.instantiate(this.section);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }else if(other.node.group == 'ground' || other.node.group == 'mound'){
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")")
            // diee
            this.die_particle();
            this.speed = 0;
            this.scheduleOnce(() => {
                cc.director.loadScene("lose");
            }, 0.3);
        }
    }

    die_particle()
    {
        cc.audioEngine.playEffect(this.die_audio, false);
        this.node.getChildByName('eye').active = false;
            var explode=this.node.getChildByName("star_explode");
            explode.active = true;
            explode.getComponent(cc.ParticleSystem).startColor= this.Color.node.color;
            explode.getComponent(cc.ParticleSystem).endColor= this.Color.node.color;
            explode.getComponent(cc.ParticleSystem).endColorVar= this.Color.node.color;
            this.node.getChildByName('color').active = false;
    }

    onKeyDown(event){
        if(event.keyCode == cc.macro.KEY.space){
            this.jump();
        }
        
        if(event.keyCode == cc.macro.KEY.p){
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }else if(event.keyCode == cc.macro.KEY.r){
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }
    }

    jump(){    
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 200);
    }

    // update (dt) {}
}
