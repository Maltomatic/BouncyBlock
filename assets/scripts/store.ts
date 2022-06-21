const {ccclass, property} = cc._decorator;

@ccclass
export default class store extends cc.Component {

    money: number = 0;
    lego: number = 0;
    banana: number = 0;
    powerup: number = 0
    mute: number = 0
    signal: number = 0
    color: any = {1: true, 2: false, 3: false, 4: false, 5: false};
    nowcolor: number = 1;
    private uid: string = null;


    start () {
        cc.debug.setDisplayStats(false);

        this.uid = cc.sys.localStorage.getItem('uid');
        
        this.money = cc.sys.localStorage.getItem("coins");
        this.lego = cc.sys.localStorage.getItem("lego");
        this.powerup = cc.sys.localStorage.getItem("powerup");
        this.banana = cc.sys.localStorage.getItem("banana");
        this.mute = cc.sys.localStorage.getItem("mute");
        this.signal = cc.sys.localStorage.getItem("signal");
        this.nowcolor =  cc.sys.localStorage.getItem("nowcolor");
        
        var c = cc.sys.localStorage.getItem("color").split("");
        for( let i = 1; i <= 5; i++) {
            if(parseInt(c[i])) this.color[i] = true;
            else this.color[i] = false;
        }

        var a = this.money;
        cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        a = this.lego;
        cc.find('Canvas/lego/amount').getComponent(cc.Label).string = a.toString();
        a = this.banana;
        cc.find('Canvas/banana/amount').getComponent(cc.Label).string = a.toString();
        a = this.powerup;
        cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = a.toString();
        a = this.mute;
        cc.find('Canvas/mute/amount').getComponent(cc.Label).string = a.toString();
        a = this.signal;
        cc.find('Canvas/signal/amount').getComponent(cc.Label).string = a.toString();
        
        
        if(this.nowcolor == 1) cc.find('Canvas/color1/check').active = true;
        else if(this.nowcolor == 2) cc.find('Canvas/color2/check').active = true;
        else if(this.nowcolor == 3) cc.find('Canvas/color3/check').active = true;
        else if(this.nowcolor == 4) cc.find('Canvas/color4/check').active = true;
        else if(this.nowcolor == 5) cc.find('Canvas/color5/check').active = true;

        for(let i = 1; i <= 5; i++) {
            if(this.color[i]) cc.find('Canvas/color' + i.toString() + '/price').getComponent(cc.Label).string = 'free';
        }

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

        let color1 = new cc.Component.EventHandler();
        color1.target = this.node;
        color1.component = "store";
        color1.handler = "loadcolor1";
        cc.find("Canvas/color1").getComponent(cc.Button).clickEvents.push(color1);

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

        cc.find("Canvas/SignOut").on(cc.Node.EventType.MOUSE_DOWN, () => {
            this.loadSignout();
        }, this);
    }

    loadpowerup(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 60;
        if(this.money >= price) {
            this.money -= price;
            this.powerup++;

            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(this.powerup);

            var a= this.powerup;
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    }
    loadmute(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if(this.money >= price) {
            this.money -= price;
            this.mute++;

            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(this.mute);

            var a= this.mute;
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    }
    loadsignal(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if(this.money >= price) {
            this.money -= price;
            this.signal++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(this.signal);

            var a= this.signal;
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    }
    loadlego(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 50;
        if(this.money >= price) {
            this.money -= price;
            this.lego++;

            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(this.lego);

            var a= this.lego;
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    }
    loadbanana() {
        var price = 80;
        if(this.money >= price) {
            this.money -= price;
            this.banana++;
            console.log(this.banana);

            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(this.banana);

            var a= this.banana;
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    }


    loadcolor1(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 0;
        if(this.money >= price && this.color[1] == false) {
            this.money -= price;
            this.color[1] = true;
            this.nowcolor = 1;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color1/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color1/check').active = true;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if(this.color[1] == true) {
            this.nowcolor = 1;
            cc.find('Canvas/color1/check').active = true;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    }
    loadcolor2(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 150;
        if(this.money >= price && this.color[2] == false) {
            this.money -= price;
            this.color[2] = true;
            this.nowcolor = 2;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color2/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if(this.color[2] == true) {
            this.nowcolor = 2;
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    }

    loadcolor3(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 200;
        if(this.money >= price && this.color[3] == false) {
            this.money -= price;
            this.color[3] = true;
            this.nowcolor = 3;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color3/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if(this.color[3] == true) {
            this.nowcolor = 3;
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    }

    loadcolor4(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 250;
        if(this.money >= price && this.color[4] == false) {
            this.money -= price;
            this.color[4] = true;
            this.nowcolor = 4;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color4/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if(this.color[4] == true) {
            this.nowcolor = 4;
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    }

    loadcolor5(){
        //cc.audioEngine.playEffect(this.press, false);
        var price = 500;
        if(this.money >= price && this.color[5] == false) {
            this.money -= price;
            this.color[5] = true;
            this.nowcolor = 5;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color5/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
        }
        else if(this.color[5] == true) {
            this.nowcolor = 5;
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color2/check').active = false;
        }
    }

    loadSignout(){
        //cc.audioEngine.playEffect(this.press, false);
        console.log("back");
        cc.sys.localStorage.setItem("coins", this.money);
        cc.sys.localStorage.setItem("lego", this.lego);
        cc.sys.localStorage.setItem("powerup", this.powerup);
        cc.sys.localStorage.setItem("banana", this.banana);
        cc.sys.localStorage.setItem("mute", this.mute);
        cc.sys.localStorage.setItem("signal", this.signal);
        cc.sys.localStorage.setItem("nowcolor", this.nowcolor);
        console.log(cc.sys.localStorage.getItem("nowcolor"));
        this.scheduleOnce( ()=> {
            cc.director.loadScene('menu');
        }, 0.5);
    }
}
