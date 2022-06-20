const {ccclass, property} = cc._decorator;

@ccclass
export default class lose extends cc.Component {

    start () {
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);

        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(cc.sys.localStorage.getItem("data"));
        
        let menu = new cc.Component.EventHandler();
        this.scheduleOnce( ()=> {
            menu.target = this.node;
            menu.component = "lose";
            menu.handler = "loadmenu";
            cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
        }, 0.7);
    }

    loadmenu() {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("menu");
    }

}
