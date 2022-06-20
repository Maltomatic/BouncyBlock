const {ccclass, property} = cc._decorator;

@ccclass
export class Missile extends cc.Component {

    private tgt_x: number = 0;
    private tgt_y: number = 0;

    private player: cc.Node = null;

    @property(cc.Prefab)
    explode:cc.Prefab=null;

    @property(cc.AudioClip)
    bulletFall:cc.AudioClip=null;

    onLoad(){
        this.player = cc.find('Canvas/root/player');
        this.tgt_x = this.player.x;
        this.tgt_y = this.player.y;
        
        // var diff = {
        //     'dx': this.player.x - this.node.x,
        //     'dy': this.player.y - this.node.y 
        // };
        // console.log(this.node.angle);
        // var angle = Math.atan2(diff.dy, diff.dx) * 57.2958/4;
        // this.node.angle += angle;
        // console.log(this.node.angle);
    }

    start () {
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 30;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = cc.color(0, 0, 0);
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = cc.color(0, 0, 0);
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = cc.color(0, 0, 0);
    }

    // onPostSolve(contact, self, other){
    //     if(other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies'){
    //         // deploy black particles
    //         // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).positionType = 1;
    //         // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
    //         var fire=cc.instantiate(this.explode);
    //         fire.x=this.node.x;
    //         fire.y=this.node.y+180;
    //         cc.find("Canvas").addChild(fire);

    //         this.node.active = false;
    //         this.node.destroy();
    //     }
    // }

    onBeginContact(contact, self, other){
        if(other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies'){
            // deploy black particles
            // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).positionType = 1;
            // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
            var fire=cc.instantiate(this.explode);
            fire.x=this.node.x;
            fire.y=this.node.y+180;
            cc.find("Canvas").addChild(fire);

            this.node.active = false;
            this.node.destroy();
        }
        if(other.node.group == 'ground' || other.node.group == 'mound')
        {
            cc.audioEngine.playEffect(this.bulletFall, false);
        }
    }

    update (dt) {
        if(this.node.y < -3500) this.node.destroy();
    }
}
