"use strict";
cc._RF.push(module, '1e31arRhgdHJrIQbqecYA4v', 'menu');
// scripts/menu.ts

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
var menu = /** @class */ (function (_super) {
    __extends(menu, _super);
    function menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    menu.prototype.start = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value', function (e) {
            cc.sys.localStorage.setItem("data", e.val());
        });
        this.scheduleOnce(function () {
            var signout = new cc.Component.EventHandler();
            signout.target = _this.node;
            signout.component = "menu";
            signout.handler = "loadSignout";
            cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
            var leader = new cc.Component.EventHandler();
            leader.target = _this.node;
            leader.component = "menu";
            leader.handler = "loadLeader";
            cc.find("Canvas/leaderboard").getComponent(cc.Button).clickEvents.push(leader);
            var night = new cc.Component.EventHandler();
            night.target = _this.node;
            night.component = "menu";
            night.handler = "loadNight";
            cc.find("Canvas/night").getComponent(cc.Button).clickEvents.push(night);
            var day = new cc.Component.EventHandler();
            day.target = _this.node;
            day.component = "menu";
            day.handler = "loadDay";
            cc.find("Canvas/day").getComponent(cc.Button).clickEvents.push(day);
            var multi = new cc.Component.EventHandler();
            multi.target = _this.node;
            multi.component = "menu";
            multi.handler = "loadMulti";
            cc.find("Canvas/multi").getComponent(cc.Button).clickEvents.push(multi);
            var bird = new cc.Component.EventHandler();
            bird.target = _this.node;
            bird.component = "menu";
            bird.handler = "loadBird";
            cc.find("Canvas/bird").getComponent(cc.Button).clickEvents.push(bird);
            var store = new cc.Component.EventHandler();
            store.target = _this.node;
            store.component = "menu";
            store.handler = "loadStore";
            cc.find("Canvas/store").getComponent(cc.Button).clickEvents.push(store);
            var t = new cc.Component.EventHandler();
            t.target = _this.node;
            t.component = "menu";
            t.handler = "loadrule";
            cc.find("Canvas/rule").getComponent(cc.Button).clickEvents.push(t);
        }, 0.7);
    };
    menu.prototype.loadNight = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("test");
    };
    menu.prototype.loadDay = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("day");
    };
    menu.prototype.loadMulti = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("multi_pairing");
    };
    menu.prototype.loadBird = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("bird");
    };
    menu.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("start");
    };
    menu.prototype.loadLeader = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("leader");
    };
    menu.prototype.loadStore = function () {
        cc.director.loadScene("store");
    };
    menu.prototype.loadrule = function () {
        cc.director.loadScene("tutorial");
    };
    menu = __decorate([
        ccclass
    ], menu);
    return menu;
}(cc.Component));
exports.default = menu;

cc._RF.pop();