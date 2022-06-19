// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.EditBox)
    invite_code: cc.EditBox = null;

    private uid: string = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = firebase.auth().currentUser.uid;
            }else{
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
        });
    }

    start () {
        cc.find("Canvas/signin_data/Create").on(cc.Node.EventType.MOUSE_DOWN, () => {
            this.makeGame();
        }, this);
        cc.find("Canvas/signin_data/Join").on(cc.Node.EventType.MOUSE_DOWN, () => {
            this.joinGame()
        }, this);
        cc.find("Canvas/signin_data/back").on(cc.Node.EventType.MOUSE_DOWN, () => {
            cc.director.loadScene('menu');
        }, this);
    }

    makeGame(){
        this.invite_code.string = this.uid.substring(0, 5);
        
    }

    joinGame(){
        //
    }
}
