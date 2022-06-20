
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
        _this.color = { 1: true, 2: false, 3: false, 4: false, 5: false };
        _this.uid = null;
        return _this;
    }
    store.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
        this.uid = cc.sys.localStorage.getItem('uid');
    };
    store.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        this.money = cc.sys.localStorage.getItem("coins");
        this.lego = cc.sys.localStorage.getItem("lego");
        this.powerup = cc.sys.localStorage.getItem("powerup");
        this.banana = cc.sys.localStorage.getItem("banana");
        this.mute = cc.sys.localStorage.getItem("mute");
        this.signal = cc.sys.localStorage.getItem("signal");
        console.log(this.banana, this.signal, this.mute);
        var c = cc.sys.localStorage.getItem("color").split("");
        for (var i = 1; i <= 5; i++) {
            if (parseInt(c[i]))
                this.color[i] = true;
            else
                this.color[i] = false;
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
        cc.find('Canvas/color1/check').active = true;
        if (this.color[2])
            cc.find('Canvas/color2/check').active = true;
        if (this.color[3])
            cc.find('Canvas/color3/check').active = true;
        if (this.color[4])
            cc.find('Canvas/color4/check').active = true;
        if (this.color[5])
            cc.find('Canvas/color5/check').active = true;
        var l = new cc.Component.EventHandler();
        l.target = this.node;
        l.component = "store";
        l.handler = "loadlego";
        cc.find("Canvas/lego/button").getComponent(cc.Button).clickEvents.push(l);
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
        cc.find("Canvas/SignOut").on(cc.Node.EventType.MOUSE_DOWN, function () {
            cc.director.loadScene('menu');
        }, this);
    };
    store.prototype.loadpowerup = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 60;
        if (this.money >= price) {
            this.money -= price;
            this.powerup++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(this.powerup);
            var a = this.powerup;
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadmute = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.mute++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(this.mute);
            var a = this.mute;
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadsignal = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.signal++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(this.signal);
            var a = this.signal;
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadlego = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 50;
        if (this.money >= price) {
            this.money -= price;
            this.lego++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(this.lego);
            var a = this.lego;
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadbanana = function () {
        var price = 80;
        if (this.money >= price) {
            this.money -= price;
            this.banana++;
            console.log(this.banana);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(this.banana);
            var a = this.banana;
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadcolor2 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 150;
        if (this.money >= price && this.color[2] == false) {
            this.money -= price;
            this.color[2] = true;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
        }
    };
    store.prototype.loadcolor3 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 200;
        if (this.money >= price && this.color[3] == false) {
            this.money -= price;
            this.color[3] = true;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
        }
    };
    store.prototype.loadcolor4 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 250;
        if (this.money >= price && this.color[4] == false) {
            this.money -= price;
            this.color[4] = true;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
        }
    };
    store.prototype.loadcolor5 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 500;
        if (this.money >= price && this.color[5] == false) {
            this.money -= price;
            this.color[5] = true;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            console.log(this.color);
        }
    };
    store.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        console.log("back");
        cc.sys.localStorage.setItem("coins", this.money);
        cc.sys.localStorage.setItem("lego", this.lego);
        cc.sys.localStorage.setItem("powerup", this.powerup);
        cc.sys.localStorage.setItem("banana", this.banana);
        cc.sys.localStorage.setItem("mute", this.mute);
        cc.sys.localStorage.setItem("signal", this.signal);
        cc.director.loadScene('menu');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFrUUM7UUFoUUcsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUNuQixVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBQ2hCLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFDbEIsV0FBSyxHQUFRLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDdkQsU0FBRyxHQUFXLElBQUksQ0FBQzs7SUF5UC9CLENBQUM7SUF2UEcsc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7O2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5RSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEIsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU3RSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9ELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFL0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN0QixDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUN2QixFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRixJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkYsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM5QixFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxRSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3ZELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwyQkFBVyxHQUFYO1FBQ0ksK0NBQStDO1FBQy9DLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWYsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5GLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5RSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUNELHdCQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFWixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdFLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUNELDBCQUFVLEdBQVY7UUFDSSwrQ0FBK0M7UUFDL0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpGLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkIsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3RSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUNELHdCQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFWixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdFLElBQUksQ0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakIsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUNELDBCQUFVLEdBQVY7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXpCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakYsSUFBSSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2YsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBQ0QsMEJBQVUsR0FBVjtRQUNJLCtDQUErQztRQUMvQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9FLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFFRCwwQkFBVSxHQUFWO1FBQ0ksK0NBQStDO1FBQy9DLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO1lBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRXJCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFL0UsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pGO0lBQ0wsQ0FBQztJQUNELDBCQUFVLEdBQVY7UUFDSSwrQ0FBK0M7UUFDL0MsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakY7SUFDTCxDQUFDO0lBQ0QsMEJBQVUsR0FBVjtRQUNJLCtDQUErQztRQUMvQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9FLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFDRCwyQkFBVyxHQUFYO1FBQ0ksK0NBQStDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWpRZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWtRekI7SUFBRCxZQUFDO0NBbFFELEFBa1FDLENBbFFrQyxFQUFFLENBQUMsU0FBUyxHQWtROUM7a0JBbFFvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbW9uZXk6IG51bWJlciA9IDA7XHJcbiAgICBsZWdvOiBudW1iZXIgPSAwO1xyXG4gICAgYmFuYW5hOiBudW1iZXIgPSAwO1xyXG4gICAgcG93ZXJ1cDogbnVtYmVyID0gMFxyXG4gICAgbXV0ZTogbnVtYmVyID0gMFxyXG4gICAgc2lnbmFsOiBudW1iZXIgPSAwXHJcbiAgICBjb2xvcjogYW55ID0gezE6IHRydWUsIDI6IGZhbHNlLCAzOiBmYWxzZSwgNDogZmFsc2UsIDU6IGZhbHNlfTtcclxuICAgIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIG9ubG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1vbmV5ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIik7XHJcbiAgICAgICAgdGhpcy5sZWdvID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGVnb1wiKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3dlcnVwXCIpO1xyXG4gICAgICAgIHRoaXMuYmFuYW5hID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFuYW5hXCIpO1xyXG4gICAgICAgIHRoaXMubXV0ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11dGVcIik7XHJcbiAgICAgICAgdGhpcy5zaWduYWwgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWduYWxcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFuYW5hLCB0aGlzLnNpZ25hbCwgdGhpcy5tdXRlKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yXCIpLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciggbGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICBpZihwYXJzZUludChjW2ldKSkgdGhpcy5jb2xvcltpXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5jb2xvcltpXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLm1vbmV5O1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgIGEgPSB0aGlzLmxlZ287XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2xlZ28vYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYSA9IHRoaXMuYmFuYW5hO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYW5hbmEvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYSA9IHRoaXMucG93ZXJ1cDtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvcG93ZXJ1cC9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICBhID0gdGhpcy5tdXRlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdXRlL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgIGEgPSB0aGlzLnNpZ25hbDtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvc2lnbmFsL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuY29sb3JbMl0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuY29sb3JbM10pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuY29sb3JbNF0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjQvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuY29sb3JbNV0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgbCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbC5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgbC5oYW5kbGVyID0gXCJsb2FkbGVnb1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbGVnby9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChsKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbmFuYSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmFuYW5hLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBiYW5hbmEuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGJhbmFuYS5oYW5kbGVyID0gXCJsb2FkYmFuYW5hXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYW5hbmEvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmFuYW5hKTtcclxuXHJcbiAgICAgICAgbGV0IHBvd2VydXAgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHBvd2VydXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHBvd2VydXAuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIHBvd2VydXAuaGFuZGxlciA9IFwibG9hZHBvd2VydXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Bvd2VydXAvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocG93ZXJ1cCk7XHJcblxyXG4gICAgICAgIGxldCBtdXRlID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBtdXRlLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBtdXRlLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBtdXRlLmhhbmRsZXIgPSBcImxvYWRtdXRlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9tdXRlL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG11dGUpO1xyXG5cclxuICAgICAgICBsZXQgc2lnbmFsID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWduYWwudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ25hbC5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgc2lnbmFsLmhhbmRsZXIgPSBcImxvYWRzaWduYWxcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NpZ25hbC9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduYWwpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3IyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjb2xvcjIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbG9yMi5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgY29sb3IyLmhhbmRsZXIgPSBcImxvYWRjb2xvcjJcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yMlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yMik7XHJcblxyXG4gICAgICAgIGxldCBjb2xvcjMgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbG9yMy50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29sb3IzLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBjb2xvcjMuaGFuZGxlciA9IFwibG9hZGNvbG9yM1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3IzXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3IzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbG9yNCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY29sb3I0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb2xvcjQuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGNvbG9yNC5oYW5kbGVyID0gXCJsb2FkY29sb3I0XCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9jb2xvcjRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjb2xvcjQpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3I1ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjb2xvcjUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbG9yNS5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgY29sb3I1LmhhbmRsZXIgPSBcImxvYWRjb2xvcjVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yNVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yNSk7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRwb3dlcnVwKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSA2MDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMucG93ZXJ1cCsrO1xyXG5cclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvcG93ZXJ1cCcpLnNldCh0aGlzLnBvd2VydXApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGE9IHRoaXMucG93ZXJ1cDtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3Bvd2VydXAvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGEgPSB0aGlzLm1vbmV5O1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkbXV0ZSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLm11dGUrKztcclxuXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL211dGUnKS5zZXQodGhpcy5tdXRlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhPSB0aGlzLm11dGU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdXRlL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5tb25leTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZHNpZ25hbCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbCsrO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9zaWduYWwnKS5zZXQodGhpcy5zaWduYWwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGE9IHRoaXMuc2lnbmFsO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2lnbmFsL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5tb25leTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZGxlZ28oKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IDUwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5sZWdvKys7XHJcblxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9sZWdvJykuc2V0KHRoaXMubGVnbyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYT0gdGhpcy5sZWdvO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbGVnby9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYSA9IHRoaXMubW9uZXk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRiYW5hbmEoKSB7XHJcbiAgICAgICAgdmFyIHByaWNlID0gODA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhbmFuYSsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhbmFuYSk7XHJcblxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9iYW5hbmEnKS5zZXQodGhpcy5iYW5hbmEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGE9IHRoaXMuYmFuYW5hO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFuYW5hL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5tb25leTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZGNvbG9yMigpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gMTUwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvclsyXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yWzJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvY29sb3InKS5zZXQodGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGNvbG9yMygpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gMjAwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvclszXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yWzNdID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMy9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRjb2xvcjQoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IDI1MDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlICYmIHRoaXMuY29sb3JbNF0gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcls0XSA9IHRydWU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRjb2xvcjUoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IDUwMDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlICYmIHRoaXMuY29sb3JbNV0gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcls1XSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNS9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkU2lnbm91dCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWNrXCIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMubW9uZXkpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxlZ29cIiwgdGhpcy5sZWdvKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwb3dlcnVwXCIsIHRoaXMucG93ZXJ1cCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFuYW5hXCIsIHRoaXMuYmFuYW5hKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIHRoaXMubXV0ZSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lnbmFsXCIsIHRoaXMuc2lnbmFsKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XHJcbiAgICB9XHJcbn1cclxuIl19