const {ccclass, property} = cc._decorator;

@ccclass
export default class lose extends cc.Component {

    @property(cc.AudioClip)
    lose_back_music : cc.AudioClip = null; // @A@

    private uid: string = null;

    onload(){
        this.uid = cc.sys.localStorage.getItem('uid');
        cc.audioEngine.pauseMusic(); // @A@
    }

    start () {
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);

        var score = cc.sys.localStorage.getItem("nowscore");
        var scene = cc.sys.localStorage.getItem("nowscene");
        if(scene == 'night' && score > cc.sys.localStorage.getItem("highscore")) {
            firebase.database().ref('/users/' + this.uid + '/highscore').set(score, ()=> {
                cc.sys.localStorage.setItem("highscore", score);
            });

        }
        cc.find('score').getComponent(cc.Label).string = score.toString();

        //callback
        firebase.database().ref('/users/' + this.uid + '/coins').set(cc.sys.localStorage.getItem("coins"));
        firebase.database().ref('/users/' + this.uid + '/thing/lego').set(cc.sys.localStorage.getItem("lego"));
        firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(cc.sys.localStorage.getItem("powerup"));
        firebase.database().ref('/users/' + this.uid + '/thing/banana').set(cc.sys.localStorage.getItem("banana"));
        firebase.database().ref('/users/' + this.uid + '/thing/mute').set(cc.sys.localStorage.getItem("mute"));
        firebase.database().ref('/users/' + this.uid + '/thing/signal').set(cc.sys.localStorage.getItem("signal"), ()=>{
            let menu = new cc.Component.EventHandler();
            menu.target = this.node;
            menu.component = "lose";
            menu.handler = "loadmenu";
            cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
        });
    }

    loadmenu() {
        //cc.audioEngine.playEffect(this.press, false);
        cc.audioEngine.pauseMusic();
        cc.director.loadScene("menu");
    }

    playBGM(){// @A@
        cc.audioEngine.playMusic(this.lose_back_music, true);
    }

}
