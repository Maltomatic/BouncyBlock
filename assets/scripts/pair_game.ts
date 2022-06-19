const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.EditBox)
    invite_code: cc.EditBox = null;

    private uid: string = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
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
            this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    }

    makeGame(){
        var key: string = this.uid.substring(0, 5);
        this.invite_code.string = key;
        firebase.database().ref('waiting_room/' + key).set(0);
        var ref = firebase.database().ref('waiting_room/' + key);
        ref.on('child_changed', (snapshot) => {
            var joiner = snapshot.val();
            ref.remove();
            firebase.database().ref('in_game/' + joiner + '/creator').set(0);
            console.log("entering game as creator");
            // remmeber self as creator, then change scene
            cc.director.loadScene('multi');
        })
    }

    // update (dt) {}
    joinGame(){
        //
    }
}
