const {ccclass, property} = cc._decorator;

@ccclass
export default class start_scene extends cc.Component {

    email_data: string;
    password_data: string;
    username: string;
    uid: string;

    onload() {
        cc.debug.setDisplayStats(false);
        if(firebase.auth().currentUser.uid) this.uid = firebase.auth().currentUser.uid;
    }
 
    start () {
        cc.debug.setDisplayStats(false);

        //cc.audioEngine.playMusic(this.bgm, true);
        cc.find("Canvas/back").on(cc.Node.EventType.MOUSE_DOWN, () => {
            cc.director.loadScene('menu');
        }, this);

        this.email_data = "";
        this.password_data = "";
        this.username = "";
/*
        // var email = new cc.Component.EventHandler();
        // email.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        // email.component = "start_scene"
        // email.handler = "emailUpdate";
        // email.customEventData = "foobar";
        // cc.find("Canvas/Email").getComponent(cc.EditBox).textChanged.push(email);

        // var n = new cc.Component.EventHandler();
        // n.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        // n.component = "start_scene"
        // n.handler = "nameUpdate";
        // n.customEventData = "foobar";
        // cc.find("Canvas/Name").getComponent(cc.EditBox).textChanged.push(n);

        // var password = new cc.Component.EventHandler();
        // password.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        // password.component = "start_scene"
        // password.handler = "passwordUpdate";
        // password.customEventData = "foobar";
        // cc.find("Canvas/Password").getComponent(cc.EditBox).textChanged.push(password);
*/
        let signin = new cc.Component.EventHandler();
        signin.target = this.node;
        signin.component = "start_scene";
        signin.handler = "loadsignin";
        cc.find("Canvas/SignIn").getComponent(cc.Button).clickEvents.push(signin);

        let signup = new cc.Component.EventHandler();
        signup.target = this.node;
        signup.component = "start_scene";
        signup.handler = "loadsignup";
        cc.find("Canvas/SignUp").getComponent(cc.Button).clickEvents.push(signup); 

    }
    /*
    // emailUpdate(text, editbox, customEventData) {
    //     this.email_data = text;
    //     //console.log(this.email_data);
    // }
    // nameUpdate(text, editbox, customEventData) {
    //     this.username = text;
    //     //console.log(this.email_data);
    // }
    // passwordUpdate(text, editbox, customEventData) {
    //     this.password_data = text;
    // }
    */
    loadsignin() {
        this.password_data = cc.find("Canvas/Password").getComponent(cc.EditBox).string;
        this.email_data = cc.find("Canvas/Email").getComponent(cc.EditBox).string;
        //cc.audioEngine.playEffect(this.press, false);
        firebase.auth().signInWithEmailAndPassword(this.email_data, this.password_data).then( (result) => {
        /*
            // firebase.database().ref('/users').once("value").then( (snapshot) => {
                // if(snapshot.child(this.uid).exists() == false) {
                //     var a = {};
                //     var tmp = {};
                //     tmp['coins'] = 0;
                //     tmp['email'] = firebase.auth().currentUser.email;
                //     tmp['highscore'] = 0;
                //     console.log('name = ', this.username)
                //     tmp['name'] = this.username;
                //     var t = {'lego':0, 'banana': 0, 'color': {1: true, 2: false, 3: false, 4: false, 5: false}, 'powerup': 0, 'signal': 0, 'mute': 0}
                //     tmp['thing'] = t;
                //     a[this.uid] = tmp;
                //     firebase.database().ref('/users/').update(a);
                // }
                // this.scheduleOnce(()=>{
        */
                    this.password_data = '';
                    this.email_data = '';
                    cc.director.loadScene("menu");
                // }, 1);
            // });
        }).catch((error)=>{
            alert(error);
        });
    }
    loadsignup() {
        this.username = cc.find("Canvas/Name").getComponent(cc.EditBox).string;
        this.password_data = cc.find("Canvas/Password").getComponent(cc.EditBox).string;
        this.email_data = cc.find("Canvas/Email").getComponent(cc.EditBox).string;
        //cc.audioEngine.playEffect(this.press, false);
        //console.log(this.email_data, this.password_data);
        console.log('name = ', this.username);
        if(this.username == ''){
            alert('Username cannot be empty.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(this.email_data, this.password_data).then( (result) => {
            // firebase.database().ref('/users').once("value").then( (snapshot)=> {
                // if(snapshot.child(result.uid).exists() == false) {
                    var tmp = {};
                    tmp['coins'] = 0;
                    tmp['email'] = this.email_data; //firebase.auth().currentUser.email;
                    tmp['highscore'] = 0;
                    tmp['name'] = this.username;
                    console.log('name = ', this.username, this.email_data);
                    var t = {'lego':0, 'banana': 0, 'color': {1:true, 2: false, 3: false, 4: false, 5: false}, 'powerup': 0, 'signal': 0, 'mute': 0}
                    tmp['thing'] = t;
                    firebase.database().ref('/users/' + result.user.uid).set(tmp, () =>{
                        this.loadsignin();
                    });
            //     }
            // });
        }).catch((error)=>{
            alert(error);
        });
    } 
}


