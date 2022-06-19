const {ccclass, property} = cc._decorator;

@ccclass
export default class menu extends cc.Component {

    onload() {
        cc.debug.setDisplayStats(false);
    }

    start () {
        //cc.audioEngine.playMusic(this.bgm, true);

        let signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "menu";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);

        let leader = new cc.Component.EventHandler();
        leader.target = this.node;
        leader.component = "menu";
        leader.handler = "loadLeader";
        cc.find("Canvas/leaderboard").getComponent(cc.Button).clickEvents.push(leader);

        let night = new cc.Component.EventHandler();
        night.target = this.node;
        night.component = "menu";
        night.handler = "loadNight";
        cc.find("Canvas/night").getComponent(cc.Button).clickEvents.push(night);

        let day = new cc.Component.EventHandler();
        day.target = this.node;
        day.component = "menu";
        day.handler = "loadDay";
        cc.find("Canvas/day").getComponent(cc.Button).clickEvents.push(day);

        let multi = new cc.Component.EventHandler();
        multi.target = this.node;
        multi.component = "menu";
        multi.handler = "loadMulti";
        cc.find("Canvas/multi").getComponent(cc.Button).clickEvents.push(multi);

        let bird = new cc.Component.EventHandler();
        bird.target = this.node;
        bird.component = "menu";
        bird.handler = "loadBird";
        cc.find("Canvas/bird").getComponent(cc.Button).clickEvents.push(bird);

        let shop = new cc.Component.EventHandler();
        shop.target = this.node;
        shop.component = "menu";
        shop.handler = "loadShop";
        cc.find("Canvas/shop").getComponent(cc.Button).clickEvents.push(shop);
    }

    loadNight(){
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("test");
    }
    loadDay(){
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("day");
    }
    loadMulti(){
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("multi_pairing");
    }
    loadBird(){
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("bird");
    }
    loadSignout(){
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("start");
    }
    loadLeader() {
        //cc.audioEngine.playEffect(this.press, false);
    }

    loadShop () {
        
    }
   
}
