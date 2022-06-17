const {ccclass, property} = cc._decorator;

@ccclass
export class spider extends cc.Component {

    
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;

    }
    start () {

        //this.node.scaleX = -this.node.scaleX;
        var body = this.getComponent(cc.RigidBody);
        body.linearVelocity = cc.v2(250,0);
        console.log("V = ", body.linearVelocity);


    }
    onBeginContact(contact , self , other){
        if(other.node.group == 'ground' || other.node.group == 'mound') {
            if(contact.getWorldManifold().normal.y == 0) {
                console.log(other.node.group, contact.getWorldManifold().normal.x, contact.getWorldManifold().normal.y);
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-250, 0);
                //this.node.scaleX = -this.node.scaleX;
            }
        }
    }


    


}
