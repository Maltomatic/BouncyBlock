const {ccclass, property} = cc._decorator;
@ccclass
export default class rule extends cc.Component {
    onload() {
        cc.debug.setDisplayStats(false);
    }
    start () {
        cc.debug.setDisplayStats(false);

        let back = new cc.Component.EventHandler();
        back.target = this.node;
        back.component = "rule";
        back.handler = "loadback";
        cc.find("Canvas/back").getComponent(cc.Button).clickEvents.push(back);

        let next = new cc.Component.EventHandler();
        next.target = this.node;
        next.component = "rule";
        next.handler = "loadnext";
        cc.find("Canvas/next").getComponent(cc.Button).clickEvents.push(next);
    }
    loadback() {
        if(cc.find('Canvas/game_rule_1').active) cc.director.loadScene('menu');
        else if(cc.find('Canvas/game_rule_2').active) cc.find('Canvas/game_rule_1').active = true;
        else if(cc.find('Canvas/game_rule_3').active) cc.find('Canvas/game_rule_2').active = true;
        else if(cc.find('Canvas/game_rule_4').active) {
            cc.find('Canvas/game_rule_3').active = true;
            cc.find('Canvas/next').active = true;
        }
    }
    loadnext() {
        if(cc.find('Canvas/game_rule_1').active) cc.find('Canvas/game_rule_1').active = false;
        else if(cc.find('Canvas/game_rule_2').active) cc.find('Canvas/game_rule_2').active = false;
        else if(cc.find('Canvas/game_rule_3').active) {
            cc.find('Canvas/game_rule_3').active = false;
            cc.find('Canvas/next').active = false;
        }
    }
}