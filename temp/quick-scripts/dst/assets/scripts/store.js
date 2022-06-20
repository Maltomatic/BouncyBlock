
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
        var data = cc.sys.localStorage.getItem("data");
        //cc.audioEngine.playMusic(this.bgm, true);
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
        }, 0.7);
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
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
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
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
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
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
            console.log(this.color);
        }
    };
    store.prototype.loadSignout = function () {
        var _this = this;
        //cc.audioEngine.playEffect(this.press, false);
        this.scheduleOnce(function () {
            var data = cc.sys.localStorage.getItem("data");
            data['coins'] = _this.money;
            data['thing']['lego'] = _this.lego;
            data['thing']['banana'] = _this.banana;
            data['thing']['powerup'] = _this.powerup;
            data['thing']['mute'] = _this.mute;
            data['thing']['signal'] = _this.signal;
            data['thing']['color'] = _this.color;
            cc.sys.localStorage.setItem("data", data);
            _this.scheduleOnce(function () {
                cc.director.loadScene("menu");
            }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF5T0M7UUF2T0csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUNuQixVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBQ2hCLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFDbEIsV0FBSyxHQUFPLEVBQUUsQ0FBQzs7SUFpT25CLENBQUM7SUEvTkcsc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQUEsaUJBeUZDO1FBeEZHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQywyQ0FBMkM7UUFFM0MsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFD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QUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQXRPZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXlPekI7SUFBRCxZQUFDO0NBek9ELEFBeU9DLENBek9rQyxFQUFFLENBQUMsU0FBUyxHQXlPOUM7a0JBek9vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBtb25leTogbnVtYmVyID0gMDtcbiAgICBsZWdvOiBudW1iZXIgPSAwO1xuICAgIGJhbmFuYTogbnVtYmVyID0gMDtcbiAgICBwb3dlcnVwOiBudW1iZXIgPSAwXG4gICAgbXV0ZTogbnVtYmVyID0gMFxuICAgIHNpZ25hbDogbnVtYmVyID0gMFxuICAgIGNvbG9yOiBhbnk9IHt9O1xuXG4gICAgb25sb2FkKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgdmFyIGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpO1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5ID0gZGF0YVsnY29pbnMnXTtcbiAgICAgICAgICAgIHRoaXMubGVnbyA9IGRhdGFbJ3RoaW5nJ11bJ2xlZ28nXTtcbiAgICAgICAgICAgIHRoaXMuYmFuYW5hID0gZGF0YVsndGhpbmcnXVsnYmFuYW5hJ107XG4gICAgICAgICAgICB0aGlzLnBvd2VydXAgPSBkYXRhWyd0aGluZyddWydwb3dlcnVwJ107XG4gICAgICAgICAgICB0aGlzLm11dGUgPSBkYXRhWyd0aGluZyddWydtdXRlJ107XG4gICAgICAgICAgICB0aGlzLnNpZ25hbCA9IGRhdGFbJ3RoaW5nJ11bJ3NpZ25hbCddO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ107XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbGVnby9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubGVnby50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhbmFuYS9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuYmFuYW5hLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcG93ZXJ1cC9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucG93ZXJ1cC50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL211dGUvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm11dGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zaWduYWwvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNpZ25hbC50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IxL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMuY29sb3JbMl0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYodGhpcy5jb2xvclszXSkgY2MuZmluZCgnQ2FudmFzL2NvbG9yMy9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLmNvbG9yWzRdKSBjYy5maW5kKCdDYW52YXMvY29sb3I0L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMuY29sb3JbNV0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0sIDAuNyk7XG5cbiAgICAgICAgbGV0IGwgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBsLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgbC5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIGwuaGFuZGxlciA9IFwibG9hZGxlZ29cIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9sZWdvL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGwpO1xuXG4gICAgICAgIGxldCBiYW5hbmEgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBiYW5hbmEudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBiYW5hbmEuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBiYW5hbmEuaGFuZGxlciA9IFwibG9hZGJhbmFuYVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhbmFuYS9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChiYW5hbmEpO1xuXG4gICAgICAgIGxldCBwb3dlcnVwID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgcG93ZXJ1cC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHBvd2VydXAuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBwb3dlcnVwLmhhbmRsZXIgPSBcImxvYWRwb3dlcnVwXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcG93ZXJ1cC9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChwb3dlcnVwKTtcblxuICAgICAgICBsZXQgbXV0ZSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIG11dGUudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBtdXRlLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcbiAgICAgICAgbXV0ZS5oYW5kbGVyID0gXCJsb2FkbXV0ZVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL211dGUvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobXV0ZSk7XG5cbiAgICAgICAgbGV0IHNpZ25hbCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIHNpZ25hbC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHNpZ25hbC5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIHNpZ25hbC5oYW5kbGVyID0gXCJsb2Fkc2lnbmFsXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lnbmFsL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ25hbCk7XG5cbiAgICAgICAgbGV0IGNvbG9yMiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNvbG9yMi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNvbG9yMi5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIGNvbG9yMi5oYW5kbGVyID0gXCJsb2FkY29sb3IyXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3IyXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3IyKTtcblxuICAgICAgICBsZXQgY29sb3IzID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY29sb3IzLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgY29sb3IzLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcbiAgICAgICAgY29sb3IzLmhhbmRsZXIgPSBcImxvYWRjb2xvcjNcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9jb2xvcjNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjb2xvcjMpO1xuXG4gICAgICAgIGxldCBjb2xvcjQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjb2xvcjQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBjb2xvcjQuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBjb2xvcjQuaGFuZGxlciA9IFwibG9hZGNvbG9yNFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yNFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yNCk7XG5cbiAgICAgICAgbGV0IGNvbG9yNSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNvbG9yNS50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNvbG9yNS5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIGNvbG9yNS5oYW5kbGVyID0gXCJsb2FkY29sb3I1XCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3I1XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3I1KTtcblxuICAgICAgICBsZXQgc2lnbm91dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIHNpZ25vdXQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBzaWdub3V0LmNvbXBvbmVudCA9IFwic3RvcmVcIjtcbiAgICAgICAgc2lnbm91dC5oYW5kbGVyID0gXCJsb2FkU2lnbm91dFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25PdXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWdub3V0KTtcbiAgICB9XG5cbiAgICBsb2FkcG93ZXJ1cCgpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICB2YXIgcHJpY2UgPSA2MDtcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMucG93ZXJ1cCArPSAxO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3Bvd2VydXAvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnBvd2VydXAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9wb3dlcnVwJykuc2V0KHRoaXMucG93ZXJ1cCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZG11dGUoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLm11dGUgKz0gMTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdXRlL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tdXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvbXV0ZScpLnNldCh0aGlzLm11dGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRzaWduYWwoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLnNpZ25hbCArPSAxO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NpZ25hbC9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2lnbmFsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvc2lnbmFsJykuc2V0KHRoaXMuc2lnbmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkbGVnbygpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICB2YXIgcHJpY2UgPSA1MDtcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMubGVnbyArPSAxO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2xlZ28vYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmxlZ28udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9sZWdvJykuc2V0KHRoaXMubGVnbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGJhbmFuYSgpIHtcbiAgICAgICAgdmFyIHByaWNlID0gODA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLmJhbmFuYSArPSAxO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhbmFuYS9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuYmFuYW5hLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvYmFuYW5hJykuc2V0KHRoaXMuYmFuYW5hKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkY29sb3IyKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIHZhciBwcmljZSA9IDE1MDtcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSAmJiB0aGlzLmNvbG9yWzJdID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5jb2xvclsyXSA9IHRydWU7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9jb2xvcicpLnNldCh0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRjb2xvcjMoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gMjAwO1xuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlICYmIHRoaXMuY29sb3JbM10gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLmNvbG9yWzNdID0gdHJ1ZVxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMy9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvY29sb3InKS5zZXQodGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGNvbG9yNCgpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICB2YXIgcHJpY2UgPSAyNTA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvcls0XSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMuY29sb3JbNF0gPSB0cnVlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvY29sb3InKS5zZXQodGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGNvbG9yNSgpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICB2YXIgcHJpY2UgPSA1MDA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvcls1XSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMuY29sb3JbNV0gPSB0cnVlXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I1L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy90aGluZy9jb2xvcicpLnNldCh0aGlzLmNvbG9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRTaWdub3V0KCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpO1xuICAgICAgICAgICAgZGF0YVsnY29pbnMnXSA9IHRoaXMubW9uZXk7XG4gICAgICAgICAgICBkYXRhWyd0aGluZyddWydsZWdvJ10gPSB0aGlzLmxlZ287XG4gICAgICAgICAgICBkYXRhWyd0aGluZyddWydiYW5hbmEnXSA9IHRoaXMuYmFuYW5hO1xuICAgICAgICAgICAgZGF0YVsndGhpbmcnXVsncG93ZXJ1cCddID0gdGhpcy5wb3dlcnVwO1xuICAgICAgICAgICAgZGF0YVsndGhpbmcnXVsnbXV0ZSddID0gdGhpcy5tdXRlO1xuICAgICAgICAgICAgZGF0YVsndGhpbmcnXVsnc2lnbmFsJ10gPSB0aGlzLnNpZ25hbDtcbiAgICAgICAgICAgIGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ10gPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoICgpPT4ge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9LCAwLjUpO1xuICAgIH1cblxuICAgXG59XG4iXX0=