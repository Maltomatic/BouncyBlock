const {ccclass, property} = cc._decorator;

@ccclass
export default class store extends cc.Component {

    money: number = 0;
    lego: number = 0;
    banana: number = 0;
    powerup: number = 0
    mute: number = 0
    signal: number = 0
    color: any= {};

    onload() {
        cc.debug.setDisplayStats(false);
    }

    start () {
        cc.debug.setDisplayStats(false);
        var data = {};
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/'+ firebase.auth().currentUser.uid).once('value', e =>{
            data = e.val();
        });
        this.scheduleOnce(() => {
            this.money = data['coins'];
            this.lego = data['thing']['lego'];
            this.banana = data['thing']['banana'];
            this.powerup = data['thing']['powerup'];
            this.mute = data['thing']['mute'];
            this.signal = data['thing']['signal'];
            this.color = data['thing']['color'];
            console.log('here' + this.color);

            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = this.lego.toString();
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = this.banana.toString();
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = this.powerup.toString();
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = this.mute.toString();
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = this.signal.toString();
            
            cc.find('Canvas/color1/check').active = true;
            if(this.color[2]) cc.find('Canvas/color2/check').active = true;
            if(this.color[3]) cc.find('Canvas/color3/check').active = true;
            if(this.color[4]) cc.find('Canvas/color4/check').active = true;
            if(this.color[5]) cc.find('Canvas/color5/check').active = true;

        }, 0.7);

        let l = new cc.Component.EventHandler();
        l.target = this.node;
        l.component = "store";
        l.handler = "loadlego";
        cc.find("Canvas/lego/button").getComponent(cc.Button).clickEvents.push(l);

        let banana = new cc.Component.EventHandler();
        banana.target = this.node;
        banana.component = "store";
        banana.handler = "loadbanana";
        cc.find("Canvas/banana/button").getComponent(cc.Button).clickEvents.push(banana);

        let powerup = new cc.Component.EventHandler();
        powerup.target = this.node;
        powerup.component = "store";
        powerup.handler = "loadpowerup";
        cc.find("Canvas/powerup/button").getComponent(cc.Button).clickEvents.push(powerup);

        let mute = new cc.Component.EventHandler();
        mute.target = this.node;
        mute.component = "store";
        mute.handler = "loadmute";
        cc.find("Canvas/mute/button").getComponent(cc.Button).clickEvents.push(mute);

        let signal = new cc.Component.EventHandler();
        signal.target = this.node;
        signal.component = "store";
        signal.handler = "loadsignal";
        cc.find("Canvas/signal/button").getComponent(cc.Button).clickEvents.push(signal);

        let color2 = new cc.Component.EventHandler();
        color2.target = this.node;
        color2.component = "store";
        color2.handler = "loadcolor2";
        cc.find("Canvas/color2").getComponent(cc.Button).clickEvents.push(color2);

        let color3 = new cc.Component.EventHandler();
        color3.target = this.node;
        color3.component = "store";
        color3.handler = "loadcolor3";
        cc.find("Canvas/color3").getComponent(cc.Button).clickEvents.push(color3);

        let color4 = new cc.Component.EventHandler();
        color4.target = this.node;
        color4.component = "store";
        color4.handler = "loadcolor4";
        cc.find("Canvas/color4").getComponent(cc.Button).clickEvents.push(color4);

        let color5 = new cc.Component.EventHandler();
        color5.target = this.node;
        color5.component = "store";
        color5.handler = "loadcolor5";
        cc.find("Canvas/color5").getComponent(cc.Button).clickEvents.push(color5);

        let signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "store";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
    }

    loadpowerup(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 60;
        if(this.money >= price) {
            this.money -= price;
            this.powerup += 1;
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = this.powerup.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/powerup').set(this.powerup);
        }
    }
    loadmute(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if(this.money >= price) {
            this.money -= price;
            this.mute += 1;
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = this.mute.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/mute').set(this.mute);
        }
    }
    loadsignal(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if(this.money >= price) {
            this.money -= price;
            this.signal += 1;
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = this.signal.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/signal').set(this.signal);
        }
    }
    loadlego(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 50;
        if(this.money >= price) {
            this.money -= price;
            this.lego += 1;
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = this.lego.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/lego').set(this.lego);
        }
    }
    loadbanana() {
        var price = 80;
        if(this.money >= price) {
            this.money -= price;
            this.banana += 1;
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = this.banana.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/banana').set(this.banana);
        }
    }
    loadcolor2(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 150;
        if(this.money >= price && this.color[2] == false) {
            this.money -= price;
            this.color[2] = true;
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
        }
    }

    loadcolor3(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 200;
        if(this.money >= price && this.color[3] == false) {
            this.money -= price;
            this.color[3] = true
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
        }
    }
    loadcolor4(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 250;
        if(this.money >= price && this.color[4] == false) {
            this.money -= price;
            this.color[4] = true;
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
        }
    }
    loadcolor5(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 500;
        if(this.money >= price && this.color[5] == false) {
            this.money -= price;
            this.color[5] = true
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
            console.log(this.color);
        }
    }
    loadSignout(){
        //cc.audioEngine.playEffect(this.press, false);
        this.scheduleOnce(()=> {
            cc.director.loadScene("menu");
        }, 1.5);
    }

   
}
