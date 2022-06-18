const {ccclass, property} = cc._decorator;

@ccclass
export class Missile extends cc.Component {

    private tgt_x: number = 0;
    private tgt_y: number = 0;

    private player: cc.Node = null;

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
        // console.log("bulelt spawn at " + this.node.x, this.node.y);
    }

    onPostSolve(contact, self, other){
        if(other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies'){
            // deploy black particles
            this.node.active = false;
            this.node.destroy();
        }
    }

    update (dt) {
        if(this.node.y < -3500) this.node.destroy();
    }
}