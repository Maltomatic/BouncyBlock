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

        var score = cc.sys.localStorage.getItem("nowscore");
        var scene = cc.sys.localStorage.getItem("nowscene");
        if(this.uid != 'local' && scene == 'test' && score > cc.sys.localStorage.getItem("highscore")) {
            firebase.database().ref('/users/' + this.uid + '/highscore').set(parseInt(score), ()=> {
                cc.sys.localStorage.setItem("highscore", score);
            });

        }
        console.log(score);
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
