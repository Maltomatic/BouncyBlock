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
    @property(cc.Prefab)
    sec3: cc.Prefab = null;
    @property(cc.Prefab)
    sec4: cc.Prefab = null;
    @property(cc.Prefab)
    sec5: cc.Prefab = null;
    @property(cc.Prefab)
    sec6: cc.Prefab = null;
    @property(cc.Prefab)
    sec7: cc.Prefab = null;
    @property(cc.Prefab)
    sec8: cc.Prefab = null;
    @property(cc.Prefab)
    sec9: cc.Prefab = null;
    @property(cc.Prefab)
    sec10: cc.Prefab = null;
    @property(cc.Prefab)
    sec11: cc.Prefab = null;
    @property(cc.Prefab)
    sec12: cc.Prefab = null;
    @property(cc.Prefab)
    sec13: cc.Prefab = null;
    @property(cc.Prefab)
    sec14: cc.Prefab = null;
    @property(cc.Prefab)
    sec15: cc.Prefab = null;
    @property(cc.Prefab)
    sec16: cc.Prefab = null;
    @property(cc.Prefab)
    sec17: cc.Prefab = null;
    @property(cc.Prefab)
    sec18: cc.Prefab = null;
    @property(cc.Prefab)
    sec19: cc.Prefab = null;
    @property(cc.Prefab)
    sec20: cc.Prefab = null;


    @property(cc.Node)
    Score: cc.Node = null;

    @property(cc.Sprite)
    Color: cc.Sprite = null;

    @property(cc.Node)
    coin_point : cc.Node = null;  
    coin: number = 0;

    @property(cc.Node)
    bubble_powerup : cc.Node = null; 
    powerup: number = 0;

    @property(cc.Node)
    bubble_banana : cc.Node = null; 
    banana: number = 0;

    @property(cc.Node)
    bubble_lego : cc.Node = null; 
    lego: number = 0;

    @property(cc.Prefab)
    banana_Prefabs: cc.Prefab = null;
    @property(cc.Prefab)
    lego_Prefabs: cc.Prefab = null; 

    @property(cc.AudioClip)
    player_jump : cc.AudioClip = null;
    @property(cc.AudioClip)
    get_coin : cc.AudioClip = null;
    @property(cc.AudioClip)
    get_B_L_bubble : cc.AudioClip = null;
    @property(cc.AudioClip)
    get_powerup_bubble : cc.AudioClip = null;
    @property(cc.AudioClip)
    put_bubble : cc.AudioClip = null;

    debug_mode: boolean = true;
    hidden: boolean = false;

    private sec_list = [];

    private dir: number = 0;
    private prev_dir: number = 0;
    private fly_state: number = 0;  // 0 for on ground, 1 for flying, -1 for falling
    private on_floor: boolean = true;
    private stick: boolean = false;
    section_count = 0;      // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++

    score: number = 0;

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
        this.base = 1 + 6*this.strip;
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
        this.dir = 0;
        this.section_count = 0;
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onBeginContact(contact, self, other){
        // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if(other.tag == 1000){
            //console.log("hit marker");
            if(this.node.x >= this.section_count*1920){
                //console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * Math.min(2+this.section_count/2, 21))
                //console.log(rand);
                //console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }else if(other.node.group == 'ground' || other.node.group == 'mound'){
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")")
            if(touch.y && this.fly_state == -1){
                this.stick = true;
                this.fly_state = 0;
                if(!this.on_floor && touch.y < 0) this.on_floor = true;
            }

            if(other.node.group == 'mound') {
                if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x/* && !touch.y*/) {
                    this.node.getChildByName('eye').active = false;
                    this.hidden = true;
                    // this.last_x = this.node.x;
                }
            }    
        } else if(other.node.group == 'coin'){ // @@ 
            cc.audioEngine.playEffect(this.get_coin, false); 
            this.update_coin(1);
            other.node.destroy();
        }else if(other.node.group == 'bubble'){ // @@ 

            if(other.tag == 1){ // bubble banana
                cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.update_banana(1);
                other.node.destroy();
           }else if(other.tag == 2){ // bubble lego
                cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.update_lego(1);
                other.node.destroy();
           }else if(other.tag == 3){ // colorful bubble
            cc.audioEngine.playEffect(this.get_powerup_bubble, false); 
            this.update_powerup(1);
            other.node.destroy();
            }
        }else if(other.node.name == 'missile'){
            // die
            // deploy white particles
            this.node.active = false;
            this.scheduleOnce(() => {
                cc.director.loadScene("lose")
            }, 0.3);
        }else if((other.node.name[0] == 's'&&other.node.name[1] == 'h')||other.node.name == 'parent'){
            // die
            // deploy white particles
            
            this.scheduleOnce(() => {
                cc.director.loadScene("lose")
            }, 0.3);
        }

    }
    onEndContact(contact, self, other) {
        //a bug happens when the color of mound is same as the color of player, not solved yet 
        // fixed with mound. player should now check collisions with mound
        if(this.getComponent(cc.RigidBody).linearVelocity.y != 0){
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
        }else if( other.node.group == 'mound') {
            if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base) {
                this.node.getChildByName('eye').active = true;
                this.hidden = false;
            }
        }
    }

    start () {
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4,this.sec5,this.sec6,this.sec7,this.sec8,this.sec9,this.sec10,this.sec11,this.sec12,this.sec13,this.sec14,this.sec15,this.sec16,this.sec17,this.sec18,this.sec19,this.sec20];
        this.score = 0;
        
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor= this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor= this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar= this.Color.node.color;
        //-------------------------------------------------
    }

    update (dt) {
        if(this.node.y <= -400){
            // die
            // deploy white particles
            this.node.active = false;
            this.scheduleOnce(() => {
                cc.director.loadScene("lose")
            }, 0.3);
        }
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        if(this.fly_state == 1){
            this.node.x -= this.prev_dir * 0.4;
            this.fly_state = -1;
        }else if(this.stick){
            console.log("stick");
            this.node.x += this.prev_dir * 0.4;
            this.stick = false;
        }
        this.node.scaleX = (this.dir >= 0) ? 1 : -1;
        var dy = this.getComponent(cc.RigidBody).linearVelocity.y;
        //----------sparkle emission rate is 0 when didnt move-----------------------------------------
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
        if(this.fly_state && !this.dir) return;

        if(this.node.x < 100) this.camera.x = 0;
        else this.camera.x = this.node.x - 100;
    }

    onKeyDown(event){
        
        if(event.keyCode == cc.macro.KEY.space){
            if(this.on_floor) this.jump();
        }
        if(event.keyCode == cc.macro.KEY.left){
            this.dir = -1;
            this.prev_dir = this.dir;
        }
        else if(event.keyCode == cc.macro.KEY.right){
            this.dir = 1;
            this.prev_dir = this.dir;
        }
        
        if(event.keyCode == cc.macro.KEY.p){
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }else if(event.keyCode == cc.macro.KEY.r){
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }

        if(event.keyCode == cc.macro.KEY.b && this.banana > 0 ){// put banana
           // cc.audioEngine.playEffect(this.put_bubble, false); 
            var banana_pre = cc.instantiate(this.banana_Prefabs);
            banana_pre.x = this.node.x;
            banana_pre.y = this.node.y;
            cc.find("Canvas/root").addChild(banana_pre);
            this.update_banana(-1);
        }else if(event.keyCode == cc.macro.KEY.l  && this.lego > 0){ //  put lego
         //   cc.audioEngine.playEffect(this.put_bubble, false); 
            var lego_pre = cc.instantiate(this.lego_Prefabs);
            lego_pre.x = this.node.x;
            lego_pre.y = this.node.y-1;
            cc.find("Canvas/root").addChild(lego_pre);
            this.update_lego(-1);
        }

        if(event.keyCode == cc.macro.KEY.u  && this.powerup > 0){ // bubble powerup @@@ 
            // plug-in mode
            //--------------
            //--------------
            this.update_powerup(-1);
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
        cc.audioEngine.playEffect(this.player_jump, false); 
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        this.fly_state = 1;
        if(!this.debug_mode) this.on_floor = false;
        console.log(this.prev_dir + "fly state: " + this.fly_state);
    }
    update_coin(number){  // @@ 
        this.coin += number;
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    }
    update_powerup(number){  // @@ 
        this.powerup += number;
       this.bubble_powerup.getComponent(cc.Label).string = this.powerup.toString();
    }
    update_banana(number){  // @@ 
        this.banana += number;
        this.bubble_banana.getComponent(cc.Label).string = this.banana.toString();
    }
    update_lego(number){  // @@ 
        this.lego += number;
       this.bubble_lego.getComponent(cc.Label).string = this.lego.toString();
    }
}
