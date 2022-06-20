const {ccclass, property} = cc._decorator;

@ccclass
export class sharp_down extends cc.Component {

    
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }
    start () {
        let action = cc.repeatForever(cc.sequence(cc.moveBy(0.2, cc.v2(0, -210)) ,cc.delayTime(0.1), cc.moveBy(0, cc.v2(0, 210)), cc.delayTime(1.2)));
    
        if(this.node.name == 'sharp_d') {
            this.scheduleOnce( ()=> {
                this.node.runAction(action);
            }, 1);
        } else if(this.node.name == 'sharp_d2') {
            this.scheduleOnce( ()=> {
                this.node.runAction(action);
            }, 2);
        } else if(this.node.name == 'sharp_d3') {
            this.scheduleOnce( ()=> {
                this.node.runAction(action);
            }, 3);
        } 
        
    }

}
