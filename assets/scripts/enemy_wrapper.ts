const {ccclass, property} = cc._decorator;

@ccclass
export class Light_wrapper extends cc.Component {

    @property(cc.Node)
    enemy: cc.Node = null;

    @property(cc.Node)
    light: cc.Node = null;

    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    @property
    range: number = 0;

    private character: cc.Node = null;
    private dir: number = 1;
    private scale_dir: number = 1;
    private leftbound: number = 0;
    private rightbound: number = 0;

    private atk: number = 0;
    
    state: number = 0;

    onLoad () {
        this.character = cc.find('Canvas/root/character_collection/player');
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
        // console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    }

    update (dt) {
        if(this.state == 0){
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;

            if(this.enemy.position.x <= this.leftbound) this.dir = 1;
            else if(this.enemy.position.x >= this.rightbound) this.dir = -1;

            this.light.scaleX += dt * this.scale_dir
            if(this.light.scaleX <= 0.6) this.scale_dir = 0.1;
            else if(this.light.scaleX >= 1.2) this.scale_dir = -0.1;
        }else{
            
            if(this.enemy.position.x > this.character.position.x+10) this.dir = -1;
            else if(this.enemy.position.x < this.character.position.x-10) this.dir = 1;
            else this.dir = 0;
            console.log("track in direction " + this.dir);
            this.enemy.x += 205 * dt * this.dir;
            if(this.state == 1) this.atk = 0;
            else if(this.state == 2){
                this.atk -= dt;
                if(this.atk < 0){
                    this.shoot();
                    this.atk = 0.5;
                }
            }
        }
        this.light.x = this.enemy.x;
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
