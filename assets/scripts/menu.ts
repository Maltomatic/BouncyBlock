const {ccclass, property} = cc._decorator;

@ccclass
export default class menu extends cc.Component {

    @property(cc.AudioClip)
    menu_music : cc.AudioClip = null;// @A@

    onload() {
        cc.debug.setDisplayStats(false);       
    }
    playBGM(){ // @A@
        cc.audioEngine.playMusic(this.menu_music, true); 
    }

    start () {
        if(!cc.audioEngine.isMusicPlaying()) this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        let signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "menu";
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                signout.handler = "loadSignout";
                // grab logged in data from Firebase
                var uid = firebase.auth().currentUser.uid;
                var data = {};
                firebase.database().ref('users/' + uid ).once('value', (snapshot) => {
                    var data = snapshot.val();
                    console.log(data);
                    cc.sys.localStorage.setItem("uid", uid);
                    console.log('uid here ', cc.sys.localStorage.getItem("uid"));
                    cc.sys.localStorage.setItem("coins", data['coins']);
                    cc.sys.localStorage.setItem("lego", data['thing']['lego']);
                    cc.sys.localStorage.setItem("powerup", data['thing']['powerup']);
                    cc.sys.localStorage.setItem("banana", data['thing']['banana']);
                    cc.sys.localStorage.setItem("mute", data['thing']['mute']);
                    cc.sys.localStorage.setItem("signal", data['thing']['signal']);
                    cc.sys.localStorage.setItem("highscore", data['highscore']);
                    cc.sys.localStorage.setItem("name", data['name']);
                    cc.sys.localStorage.setItem("email", data['email']);
                    cc.find("Canvas/username").getComponent(cc.Label).string = "Welcome, " + data['name'];
                    var s = "0";
                    for( let i = 1; i <= 5; i++) {
                        //console.log(data['thing']['color'][i]);
                        if(data['thing']['color'][i]) s = s + '1';
                        else s = s + '0';
                    }
                    cc.sys.localStorage.setItem("color", s);
                });
            }else{
                // sign in button instead
                cc.find('Canvas/username').active = false;
                cc.find("Canvas/out").getComponent(cc.Label).string = "sign in"
                cc.find("Canvas/SignOut").scaleX = -1;
                signout.handler = "loadSignIn";
            }
        });
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
        // kick player off
        firebase.auth().signOut().then(()=>{
            cc.director.loadScene("menu");
            alert("You have been signed out.");
        }).catch((e)=>{
            console.log(e.message);
        })
    }
    loadSignIn(){
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
