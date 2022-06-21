// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    lose_back_music: cc.AudioClip = null;
    private uid: string = null;

    // LIFE-CYCLE CALLBACKS:

    onload(){
        cc.audioEngine.pauseMusic(); // @A@
    }

    start () {
        this.uid = cc.sys.localStorage.getItem('uid');
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);

        var self_score = cc.sys.localStorage.getItem('multi_self');
        var other_score = cc.sys.localStorage.getItem('multi_other');
        
        cc.find('Canvas/multi_self').getComponent(cc.Label).string = self_score.toString();
        cc.find('Canvas/multi_other').getComponent(cc.Label).string = other_score.toString();
        console.log(self_score, other_score);

        //callback
        firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
        firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
        firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
        firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")));
        
        cc.find("Canvas/menu").on(cc.Node.EventType.MOUSE_DOWN, () => {
            this.loadmenu();
        }, this);
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
