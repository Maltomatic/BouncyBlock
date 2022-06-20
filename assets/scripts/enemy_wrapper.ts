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
        this.character = cc.find('Canvas/root/player');
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
        // console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = /*this.node.x*/ -1 * this.range*0.8;
        this.rightbound = /*this.node.x +*/ this.range*0.8;
    }

    update (dt) {
        if(this.state == 0){
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;

            if(this.enemy.x <= this.leftbound) this.dir = 1;
            else if(this.enemy.x >= this.rightbound) this.dir = -1;

            // var x = this.node.getNodeToWorldTransform();

            this.light.scaleX += dt * this.scale_dir
            if(this.light.scaleX < -0.15) this.scale_dir = 0.3;
            else if(this.light.scaleX >= 1.2) this.scale_dir = -0.3;
        }else{
            if(this.state == 1) this.atk = 0;
            else if(this.state == 2){
                var enempos = this.enemy.x + this.node.x;
                if(enempos > this.character.x+10) this.dir = -1;
                else if(enempos < this.character.x-10) this.dir = 1;
                else this.dir = 0;
                    
                // console.log("enemy position: " + enempos + "player position: " + this.character.x + "track in direction " + this.dir);
                this.enemy.x += 170 * dt * this.dir;
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
        console.log("shooting")
        var bullet = cc.instantiate(this.bullet);
        this.node.addChild(bullet);
        bullet.setPosition(this.enemy.x/* + this.node.x*/, 0);
        bullet.y -= 10;
        // var offset = 20 * ((this.enemy.x < this.character.x)? -1:1);
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - (this.enemy.x + this.node.x)), (this.character.y - this.node.y)).normalizeSelf().multiply(cc.v2(700, 700));
        // console.log("create bullet by light at " + this.character.x, this.node.y);
        // cc.find("Canvas/root").addChild(bullet);
    }
}
