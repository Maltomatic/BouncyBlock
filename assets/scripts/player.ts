const {ccclass, property} = cc._decorator;

@ccclass
export class Player extends cc.Component {

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.Node)
    maplist: cc.Node = null;

    @property(cc.Prefab)
    sec0: cc.Prefab = null;
    @property(cc.Prefab)
    sec1: cc.Prefab = null;
    @property(cc.Prefab)
    sec2: cc.Prefab = null;

    @property(cc.Node)
    Score: cc.Node = null;

    @property(cc.Sprite)
    Color: cc.Sprite = null;


    private sec_list = [];

    private dir: number = 0;
    private section_count = 0;      // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++

    score: number = 0;

    color: number = 0;
    strip: number = 0;
    base: number = 0;
    last_x: any = 0.0;

    // color info of new_tileset
    color_list: any = {7: "#2b3a67",8: "#496a81",9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
    13:"#1c3144", 14: "#596f62", 15: "#7ea16b",16: "#c3d898",17: "#70161d",
    19 :"#edebd3", 20 :"#edebd3", 21 :"#da4167", 22 :"#f4d35e", 23 :"#f78664", 
    25  :"#562c2c", 26 :"#f2542d", 27 :"#f5dfbb", 28 :"#0e9595", 29 :"#127474", 
    31 :"#8e9aaf", 32 :"#cbc0d3", 33 :"#efd3d7", 34 :"#feeafa", 35 :"#dee2ff" }

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
            //console.log("hit marker");
            if(this.node.x >= this.section_count*1920){
                //console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * 3)
                //console.log(rand);
                //console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        else if( other.node.group == 'ground') {
            if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base &&
                 (contact.getWorldManifold().normal.x==-1 || contact.getWorldManifold().normal.x == 1) && contact.getWorldManifold().normal.y == 0) {
                this.node.getChildByName('eye').active = false;
                this.last_x = this.node.x;
            }
        }

    }
    onEndContact(contact, self, other) {

        //a bug happens when the color of ground is same as the color of player, not solved yet 
        if(this.last_x > this.node.x + 5 || this.last_x < this.node.x - 5 || this.getComponent(cc.RigidBody).linearVelocity.y != 0) this.node.getChildByName('eye').active = true;
        else if( other.node.group == 'ground') {
            if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base && other.tag == 10) {
                this.node.getChildByName('eye').active = true;
            }
        }
    }

    start () {
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2];
        this.score = 0;

        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 1 + 6*this.strip;
        this.color = Math.floor(Math.random() * 5);
        //console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base +  this.color];
        var color = new cc.Color(255,255,255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    }

    update (dt) {
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        this.node.scaleX = (this.dir >= 0) ? 1 : -1;
        var dy = this.getComponent(cc.RigidBody).linearVelocity.y;
        //----------sparkle-----------------------------------------
        if(this.dir!=0||dy>10) this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate=100;
        else this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate=0;
        //----------------------------------------------------

        
        
        //---------player spin---------------
        if((dy > 10) && this.dir == 1) this.spin_right();
        else if((dy > 10) && this.dir == -1) this.spin_left();
        else if(this.node.angle != 0) this.node.angle=0;
        //------------------------------------

        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------


    }
    spin_right(){
        this.node.angle -= 12;
    }
    spin_left(){
        this.node.angle += 12;
    }

    camera_track(){
        if(this.node.x < 100) this.camera.x = 0;
        else this.camera.x = this.node.x - 100;
    }

    onKeyDown(event){
        
        if(event.keyCode == cc.macro.KEY.space){
            this.jump();
        }
        if(event.keyCode == cc.macro.KEY.left){
            this.dir = -1;
        }
        else if(event.keyCode == cc.macro.KEY.right){
            this.dir = 1;
        }
        
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
