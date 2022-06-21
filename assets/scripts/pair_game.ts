const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.EditBox)
    invite_code: cc.EditBox = null;

    private uid: string = null;
    private kick: boolean = false;
    private key: string = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    onLoad () {
        cc.audioEngine.pauseMusic(); // @A@
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                console.log("logged in");
            }else{
                this.kick = true;
            }
        });
    }

    start () {
        this.uid = cc.sys.localStorage.getItem("uid");
        this.key = this.uid.substring(0, 5);
        cc.find("Canvas/root/Create").on(cc.Node.EventType.MOUSE_DOWN, () => {
            if(this.kick){
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }else this.makeGame();
        }, this);
        cc.find("Canvas/root/Join").on(cc.Node.EventType.MOUSE_DOWN, () => {
            if(this.kick){
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }else this.joinGame()
        }, this);
        cc.find("Canvas/root/back").on(cc.Node.EventType.MOUSE_DOWN, () => {
            firebase.database().ref('waiting_room/' + this.key).remove();
            firebase.database().ref('in_game/' + this.uid).remove();
            this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    }

    makeGame(){
        this.invite_code.string = this.key;
        // firebase.database().ref('waiting_room/' + this.key).set(0);
        this.maker_load();
    }

    maker_load(){
        console.log("maker called");
        firebase.database().ref('waiting_room/' + this.key).once('value', (snapshot) => {
            console.log(snapshot.val());
            if(snapshot.exists()){
                var joiner = snapshot.val();
                firebase.database().ref('in_game/' + joiner + '/creator').set(0);
                firebase.database().ref('waiting_room/' + this.key).remove();
                console.log("entering game as creator");
                // remeber self as creator, then change scene
                cc.sys.localStorage.setItem("id", 1);
                cc.sys.localStorage.setItem("room", joiner);
                cc.director.loadScene('multi');
            } else this.maker_load();
        });
        // setInterval(this.maker_load, 300);
    }

    // update (dt) {

    // }

    joinGame(){
        // var key: string = this.invite_code.string;
        firebase.database().ref('waiting_room/' + this.invite_code.string).set(this.uid);
        this.joiner_load();
    }

    joiner_load(){
        console.log("joiner called");
        firebase.database().ref('in_game/' + this.uid).once('value', (snapshot) => {
            if(snapshot.exists()){
                console.log("creator has joined");
                firebase.database().ref('in_game/' + this.uid + '/joiner').set(0);
                cc.sys.localStorage.setItem("id", 0);
                cc.sys.localStorage.setItem("room", this.uid);
                cc.director.loadScene('multi');
            }else{
                this.joiner_load();
            }
        });
        // setInterval(this.joiner_load, 300);
    }
}
