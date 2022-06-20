
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/store.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63accuI0aRFm5VF25/+YBYC', 'store');
// scripts/store.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var store = /** @class */ (function (_super) {
    __extends(store, _super);
    function store() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.money = 0;
        _this.lego = 0;
        _this.banana = 0;
        _this.powerup = 0;
        _this.mute = 0;
        _this.signal = 0;
        _this.color = {};
        return _this;
    }
    store.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    store.prototype.start = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        var data = {};
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value', function (e) {
            data = e.val();
        });
        this.scheduleOnce(function () {
            _this.money = data['coins'];
            _this.lego = data['thing']['lego'];
            _this.banana = data['thing']['banana'];
            _this.powerup = data['thing']['powerup'];
            _this.mute = data['thing']['mute'];
            _this.signal = data['thing']['signal'];
            _this.color = data['thing']['color'];
            cc.find('Canvas/coins').getComponent(cc.Label).string = _this.money.toString();
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = _this.lego.toString();
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = _this.banana.toString();
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = _this.powerup.toString();
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = _this.mute.toString();
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = _this.signal.toString();
            cc.find('Canvas/color1/check').active = true;
            if (_this.color[2])
                cc.find('Canvas/color2/check').active = true;
            if (_this.color[3])
                cc.find('Canvas/color3/check').active = true;
            if (_this.color[4])
                cc.find('Canvas/color4/check').active = true;
            if (_this.color[5])
                cc.find('Canvas/color5/check').active = true;
        }, 0.3);
        var lego = new cc.Component.EventHandler();
        lego.target = this.node;
        lego.component = "store";
        lego.handler = "loadlego";
        cc.find("Canvas/lego/button").getComponent(cc.Button).clickEvents.push(lego);
        var banana = new cc.Component.EventHandler();
        banana.target = this.node;
        banana.component = "store";
        banana.handler = "loadbanana";
        cc.find("Canvas/banana/button").getComponent(cc.Button).clickEvents.push(banana);
        var powerup = new cc.Component.EventHandler();
        powerup.target = this.node;
        powerup.component = "store";
        powerup.handler = "loadpowerup";
        cc.find("Canvas/powerup/button").getComponent(cc.Button).clickEvents.push(powerup);
        var mute = new cc.Component.EventHandler();
        mute.target = this.node;
        mute.component = "store";
        mute.handler = "loadmute";
        cc.find("Canvas/mute/button").getComponent(cc.Button).clickEvents.push(mute);
        var signal = new cc.Component.EventHandler();
        signal.target = this.node;
        signal.component = "store";
        signal.handler = "loadsignal";
        cc.find("Canvas/signal/button").getComponent(cc.Button).clickEvents.push(signal);
        var color2 = new cc.Component.EventHandler();
        color2.target = this.node;
        color2.component = "store";
        color2.handler = "loadcolor2";
        cc.find("Canvas/color2").getComponent(cc.Button).clickEvents.push(color2);
        var color3 = new cc.Component.EventHandler();
        color3.target = this.node;
        color3.component = "store";
        color3.handler = "loadcolor3";
        cc.find("Canvas/color3").getComponent(cc.Button).clickEvents.push(color3);
        var color4 = new cc.Component.EventHandler();
        color4.target = this.node;
        color4.component = "store";
        color4.handler = "loadcolor4";
        cc.find("Canvas/color4").getComponent(cc.Button).clickEvents.push(color4);
        var color5 = new cc.Component.EventHandler();
        color5.target = this.node;
        color5.component = "store";
        color5.handler = "loadcolor5";
        cc.find("Canvas/color5").getComponent(cc.Button).clickEvents.push(color5);
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "store";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
    };
    store.prototype.loadpowerup = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 60;
        if (this.money >= price) {
            this.money -= price;
            this.powerup += 1;
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = this.powerup.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/powerup').set(this.powerup);
        }
    };
    store.prototype.loadmute = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.mute += 1;
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = this.mute.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/mute').set(this.mute);
        }
    };
    store.prototype.loadsignal = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.signal += 1;
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = this.signal.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/signal').set(this.signal);
        }
    };
    store.prototype.loadlego = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 50;
        if (this.money >= price) {
            this.money -= price;
            this.lego += 1;
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = this.lego.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/lego').set(this.lego);
        }
    };
    store.prototype.loadbanana = function () {
        var price = 80;
        if (this.money >= price) {
            this.money -= price;
            this.banana += 1;
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = this.banana.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/banana').set(this.banana);
        }
    };
    store.prototype.loadcolor2 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 150;
        if (this.money >= price && this.color[2] == false) {
            this.money -= price;
            this.color[2] = true;
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').update(this.color);
        }
    };
    store.prototype.loadcolor3 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 200;
        if (this.money >= price && this.color[3] == false) {
            this.money -= price;
            this.color[3] = true;
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
        }
    };
    store.prototype.loadcolor4 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 250;
        if (this.money >= price && this.color[4] == false) {
            this.money -= price;
            this.color[4] = true;
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').update(this.color);
        }
    };
    store.prototype.loadcolor5 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 500;
        if (this.money >= price && this.color[5] == false) {
            this.money -= price;
            this.color[5] = true;
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').update(this.color);
        }
    };
    store.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        this.scheduleOnce(function () {
            cc.director.loadScene("menu");
        }, 0.5);
    };
    store = __decorate([
        ccclass
    ], store);
    return store;
}(cc.Component));
exports.default = store;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE4TkM7UUE1TkcsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsYUFBTyxHQUFHLENBQUMsQ0FBQTtRQUNYLFVBQUksR0FBRyxDQUFDLENBQUE7UUFDUixZQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsV0FBSyxHQUFHLEVBQUUsQ0FBQzs7SUFzTmYsQ0FBQztJQXBORyxzQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFBQSxpQkEwRkM7UUF6RkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsMkNBQTJDO1FBQzNDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDL0UsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVwQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkYsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekYsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFD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LENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2RztJQUNMLENBQUM7SUFDRCwwQkFBVSxHQUFWO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2RixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFB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QyxXQUFXLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RztJQUNMLENBQUM7SUFDRCwyQkFBVyxHQUFYO1FBQ0ksK0NBQStDO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBM05nQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBOE56QjtJQUFELFlBQUM7Q0E5TkQsQUE4TkMsQ0E5TmtDLEVBQUUsQ0FBQyxTQUFTLEdBOE45QztrQkE5Tm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0b3JlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBtb25leSA9IDA7XHJcbiAgICBsZWdvID0gMDtcclxuICAgIGJhbmFuYSA9IDA7XHJcbiAgICBwb3dlcnVwID0gMFxyXG4gICAgbXV0ZSA9IDBcclxuICAgIHNpZ25hbCA9IDBcclxuICAgIGNvbG9yID0ge307XHJcblxyXG4gICAgb25sb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkKS5vbmNlKCd2YWx1ZScsIGUgPT57XHJcbiAgICAgICAgICAgIGRhdGEgPSBlLnZhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSA9IGRhdGFbJ2NvaW5zJ107XHJcbiAgICAgICAgICAgIHRoaXMubGVnbyA9IGRhdGFbJ3RoaW5nJ11bJ2xlZ28nXTtcclxuICAgICAgICAgICAgdGhpcy5iYW5hbmEgPSBkYXRhWyd0aGluZyddWydiYW5hbmEnXTtcclxuICAgICAgICAgICAgdGhpcy5wb3dlcnVwID0gZGF0YVsndGhpbmcnXVsncG93ZXJ1cCddO1xyXG4gICAgICAgICAgICB0aGlzLm11dGUgPSBkYXRhWyd0aGluZyddWydtdXRlJ107XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsID0gZGF0YVsndGhpbmcnXVsnc2lnbmFsJ107XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBkYXRhWyd0aGluZyddWydjb2xvciddO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9sZWdvL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5sZWdvLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYW5hbmEvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmJhbmFuYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcG93ZXJ1cC9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucG93ZXJ1cC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbXV0ZS9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubXV0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2lnbmFsL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zaWduYWwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvbG9yWzJdKSBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5jb2xvclszXSkgY2MuZmluZCgnQ2FudmFzL2NvbG9yMy9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29sb3JbNF0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjQvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvbG9yWzVdKSBjYy5maW5kKCdDYW52YXMvY29sb3I1L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSwgMC4zKTtcclxuXHJcbiAgICAgICAgbGV0IGxlZ28gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGxlZ28udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxlZ28uY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGxlZ28uaGFuZGxlciA9IFwibG9hZGxlZ29cIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xlZ28vYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobGVnbyk7XHJcblxyXG4gICAgICAgIGxldCBiYW5hbmEgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGJhbmFuYS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmFuYW5hLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBiYW5hbmEuaGFuZGxlciA9IFwibG9hZGJhbmFuYVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFuYW5hL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGJhbmFuYSk7XHJcblxyXG4gICAgICAgIGxldCBwb3dlcnVwID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwb3dlcnVwLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwb3dlcnVwLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBwb3dlcnVwLmhhbmRsZXIgPSBcImxvYWRwb3dlcnVwXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9wb3dlcnVwL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHBvd2VydXApO1xyXG5cclxuICAgICAgICBsZXQgbXV0ZSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbXV0ZS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbXV0ZS5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgbXV0ZS5oYW5kbGVyID0gXCJsb2FkbXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbXV0ZS9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChtdXRlKTtcclxuXHJcbiAgICAgICAgbGV0IHNpZ25hbCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2lnbmFsLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWduYWwuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIHNpZ25hbC5oYW5kbGVyID0gXCJsb2Fkc2lnbmFsXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zaWduYWwvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbmFsKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbG9yMiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY29sb3IyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb2xvcjIuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGNvbG9yMi5oYW5kbGVyID0gXCJsb2FkY29sb3IyXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9jb2xvcjJcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjb2xvcjIpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3IzID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjb2xvcjMudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbG9yMy5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgY29sb3IzLmhhbmRsZXIgPSBcImxvYWRjb2xvcjNcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yM1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yMyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvcjQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbG9yNC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29sb3I0LmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBjb2xvcjQuaGFuZGxlciA9IFwibG9hZGNvbG9yNFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3I0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3I0KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbG9yNSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY29sb3I1LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb2xvcjUuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGNvbG9yNS5oYW5kbGVyID0gXCJsb2FkY29sb3I1XCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9jb2xvcjVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjb2xvcjUpO1xyXG5cclxuICAgICAgICBsZXQgc2lnbm91dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2lnbm91dC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2lnbm91dC5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgc2lnbm91dC5oYW5kbGVyID0gXCJsb2FkU2lnbm91dFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ25vdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRwb3dlcnVwKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSA2MDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMucG93ZXJ1cCArPSAxO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcG93ZXJ1cC9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucG93ZXJ1cC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL3Bvd2VydXAnKS5zZXQodGhpcy5wb3dlcnVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkbXV0ZSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLm11dGUgKz0gMTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL211dGUvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm11dGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9tdXRlJykuc2V0KHRoaXMubXV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZHNpZ25hbCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbCArPSAxO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2lnbmFsL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zaWduYWwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9zaWduYWwnKS5zZXQodGhpcy5zaWduYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRsZWdvKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSA1MDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMubGVnbyArPSAxO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbGVnby9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubGVnby50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL2xlZ28nKS5zZXQodGhpcy5sZWdvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkYmFuYW5hKCkge1xyXG4gICAgICAgIHZhciBwcmljZSA9IDgwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5iYW5hbmEgKz0gMTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhbmFuYS9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuYmFuYW5hLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvYmFuYW5hJykuc2V0KHRoaXMuYmFuYW5hKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkY29sb3IyKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSAxNTA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSAmJiB0aGlzLmNvbG9yWzJdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JbMl0gPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9jb2xvcicpLnVwZGF0ZSh0aGlzLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGNvbG9yMygpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gMjAwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvclszXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yWzNdID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IzL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9jb2xvcicpLnNldCh0aGlzLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkY29sb3I0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSAyNTA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSAmJiB0aGlzLmNvbG9yWzRdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JbNF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I0L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9jb2xvcicpLnVwZGF0ZSh0aGlzLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkY29sb3I1KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSA1MDA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSAmJiB0aGlzLmNvbG9yWzVdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JbNV0gPSB0cnVlXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL2NvbG9yJykudXBkYXRlKHRoaXMuY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRTaWdub3V0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbn1cclxuIl19