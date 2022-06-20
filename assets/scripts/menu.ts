const {ccclass, property} = cc._decorator;

@ccclass
export default class menu extends cc.Component {

    start () {
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);

        firebase.database().ref('/users/'+ firebase.auth().currentUser.uid).once('value', e =>{
            cc.sys.localStorage.setItem("data", e.val())
        });

        this.scheduleOnce( ()=> {
        
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

            let store = new cc.Component.EventHandler();
            store.target = this.node;
            store.component = "menu";
            store.handler = "loadStore";
            cc.find("Canvas/store").getComponent(cc.Button).clickEvents.push(store);

            let t = new cc.Component.EventHandler();
            t.target = this.node;
            t.component = "menu";
            t.handler = "loadrule";
            cc.find("Canvas/rule").getComponent(cc.Button).clickEvents.push(t);
          
        }, 0.7);
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
        cc.director.loadScene("leader");
    }

    loadStore () {
        cc.director.loadScene("store");
    }

    loadrule () {
        cc.director.loadScene("tutorial");
    }
   
}
