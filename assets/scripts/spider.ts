const {ccclass, property} = cc._decorator;

@ccclass
export class spider extends cc.Component {

    moveDir: number = 1;

    
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;

    }
    start () {

        //this.node.scaleX = -this.node.scaleX;
        var body = this.getComponent(cc.RigidBody);
        //body.linearVelocity = cc.v2(250,0);
        console.log("V = ", body.linearVelocity);


    }
    update(dt) {
        this.node.x += 220 * dt * this.moveDir;
        //this.node.scaleX = (this.moveDir >= 0) ? 1 : -1;
    }
     onBeginContact(contact , self , other){
        if((other.node.group == 'mound') && contact.getWorldManifold().normal.y == 0) {
            
            this.moveDir *= -1;
            /*if( (this.getComponent(cc.RigidBody).linearVelocity.x > 0 && contact.getWorldManifold().normal.x == 1) || (this.getComponent(cc.RigidBody).linearVelocity.x < 0 && contact.getWorldManifold().normal.x == -1)) {
                console.log(other.node.group, contact.getWorldManifold().normal.x, contact.getWorldManifold().normal.y);
                //this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.getComponent(cc.RigidBody).linearVelocity.x, 0);
                //this.node.scaleX = -this.node.scaleX;
                this.moveDir *= -1;
            }*/
        }
        else contact.enabled = false;
    }


    


}
