const {ccclass, property} = cc._decorator;

@ccclass
export default class lose extends cc.Component {

    @property(cc.AudioClip)
    lose_back_music : cc.AudioClip = null; // @A@

    private uid: string = null;
    private online: boolean = false;

    onload(){
        cc.audioEngine.pauseMusic(); // @A@
    }

    start () {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.online = true;
        });
        
        this.uid = cc.sys.localStorage.getItem('uid');
        console.log(this.uid);
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);

        var score = parseInt(cc.sys.localStorage.getItem("nowscore"));
        var scene = cc.sys.localStorage.getItem("nowscene");
        var h_score = parseInt(cc.sys.localStorage.getItem("highscore"));
        // console.log(score);
        // console.log(this.uid, scene, h_score);
        // console.log("storing data if highscore");
        // console.log((this.uid != 'local'));
        // console.log((this.uid != 'local'));
        // console.log((score > h_score));
        // console.log((this.uid != 'local') && (scene == 'test') && (score > h_score));
        if((this.uid != 'local') && (scene == 'test') && (score > h_score)) {
            firebase.database().ref('/users/' + this.uid + '/highscore').set(score, ()=> {
                cc.sys.localStorage.setItem("highscore", score);
                cc.find('Canvas/best').active = true;
            });

        }
        cc.find('score').getComponent(cc.Label).string = score.toString();

        //callback
        if(this.uid != 'local') {                //  &&&& 原本是online, always false
            firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(parseInt(cc.sys.localStorage.getItem("lego")));
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(parseInt(cc.sys.localStorage.getItem("banana")));
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")));
        }
        let menu = new cc.Component.EventHandler();
        menu.target = this.node;
        menu.component = "lose";
        menu.handler = "loadmenu";
        cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
        
    }


    loadmenu() {
        //cc.audioEngine.playEffect(this.press, false);
        cc.audioEngine.pauseMusic();
        cc.director.loadScene("menu");
    }

    playBGM(){// @A@
        cc.audioEngine.playMusic(this.lose_back_music, false);
    }
}
