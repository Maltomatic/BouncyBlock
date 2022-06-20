// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class enemy_moving_sharp extends cc.Component {

    private now : string = null;
    private next : string = null;

    private physicManager: cc.PhysicsManager = null;

    onLoad() { 
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.now = "Up" ;
        this.next = "DOWN" ;
    }

    start () {
        this.schedule(function() {
            this.changeState();
           // cc.log("Change state: " + this.state);
        }, 0.5);
    }
    changeState(){
        switch(this.now){
            case "Init":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,0);
                if(this.next == "Up") {
                    this.now = "Down";
                }
                else this.now = "Up";
            break;
            case "Down":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -60);
                this.now = "Init";
                this.next = "Down";
            break;
            case "Up":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,60);
                this.now = "Init";
                this.next = "Up";
            break;
        }
    }
    onBeginContact(contact, self, other) {//碰撞
    }

    // update (dt) {}
}
