const {ccclass, property} = cc._decorator;

@ccclass
export class sharp extends cc.Component {

    
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }
    start () {
        if(this.node.name == 'sharp1') {
            let action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)), cc.delayTime(0.5),cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(0.5)));
            this.node.runAction(action);
        } else if(this.node.name == 'sharp2') {
            let action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)), cc.delayTime(1),cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(1)));
            this.node.runAction(action);
        } else if(this.node.name == 'sharp3') {
            let action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)),cc.delayTime(1.5), cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(1.5)));
            this.node.runAction(action);
        } else if(this.node.name == 'sharp4') {
            let action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)),cc.delayTime(2), cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(2)));
            this.node.runAction(action);
        }

    }

}
