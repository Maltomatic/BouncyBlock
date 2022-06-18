const {ccclass, property} = cc._decorator;

@ccclass
export class Light_wrapper extends cc.Component {

    @property(cc.Node)
    enemy: cc.Node = null;
    @property(cc.Node)
    eye: cc.Node = null;

    @property(cc.Node)
    light: cc.Node = null;

    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    @property
    range: number = 0;

    private character: cc.Node = null;
    private dir: number = 1;
    private leftbound: number = 0;
    private rightbound: number = 0;

    private atk: number = 0;
    
    state: number = 0;

    onLoad () {
        this.character = cc.find('Canvas/root/player');
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
        console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    }

    update (dt) {
        console.log("state: " + this.state);
        if(this.state == 0){
            this.node.x += 70 * dt * this.dir;
            this.light.skewX -= this.dir * 10 * dt * this.range/80;
            if(this.node.x <= this.leftbound) this.dir = 1;
            else if(this.node.x >= this.rightbound) this.dir = -1;
        }else{
            if(this.node.x > this.character.x+10) this.dir = -1;
            else if(this.node.x < this.character.x-10) this.dir = 1;
            else this.dir = 0;
            this.light.skewX = (this.character.x - this.node.x)/3;
            if(this.state == 1) this.atk = 0;
            else if(this.state == 2){
                this.atk -= dt;
                if(this.atk < 0){
                    this.shoot();
                    this.atk = 0.5;
                }
            }
        }
        if(this.light.skewX > 40) this.light.skewX = 40;
        else if(this.light.skewX < -40) this.light.skewX = -40;
        this.light.x = this.enemy.x = this.node.x;
        this.eye.angle = -1 * this.light.skewX;
    }
    
    shoot(){
        // console.log("shooting")
        var bullet = cc.instantiate(this.bullet);
        bullet.setPosition(this.node.x, this.node.y);
        this.node.addChild(bullet);
        bullet.y -= 10;
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - this.node.x), (this.character.y - this.node.y)).normalizeSelf().multiply(cc.v2(800, 800));
        // console.log("create bullet by light at " + this.character.x, this.node.y);
        // cc.find("Canvas/root").addChild(bullet);
    }
}
