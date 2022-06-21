
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu_music = null; // @A@
        return _this;
    }
    menu.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    menu.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.menu_music, true);
    };
    menu.prototype.start = function () {
        if (!cc.audioEngine.isMusicPlaying())
            this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "menu";
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                signout.handler = "loadSignout";
                // grab logged in data from Firebase
                var uid = firebase.auth().currentUser.uid;
                var data = {};
                firebase.database().ref('users/' + uid).once('value', function (snapshot) {
                    var data = snapshot.val();
                    console.log(data);
                    cc.sys.localStorage.setItem("uid", uid);
                    console.log('uid here ', cc.sys.localStorage.getItem("uid"));
                    cc.sys.localStorage.setItem("coins", data['coins']);
                    cc.sys.localStorage.setItem("lego", data['thing']['lego']);
                    cc.sys.localStorage.setItem("powerup", data['thing']['powerup']);
                    cc.sys.localStorage.setItem("banana", data['thing']['banana']);
                    cc.sys.localStorage.setItem("mute", data['thing']['mute']);
                    cc.sys.localStorage.setItem("signal", data['thing']['signal']);
                    cc.sys.localStorage.setItem("highscore", data['highscore']);
                    cc.sys.localStorage.setItem("name", data['name']);
                    cc.sys.localStorage.setItem("email", data['email']);
                    cc.find("Canvas/username").getComponent(cc.Label).string = "Welcome, " + data['name'];
                    var s = "0";
                    for (var i = 1; i <= 5; i++) {
                        //console.log(data['thing']['color'][i]);
                        if (data['thing']['color'][i])
                            s = s + '1';
                        else
                            s = s + '0';
                    }
                    cc.sys.localStorage.setItem("color", s);
                });
            }
            else {
                // sign in button instead
                cc.find('Canvas/username').active = false;
                cc.find("Canvas/out").getComponent(cc.Label).string = "sign in";
                cc.find("Canvas/SignOut").scaleX = -1;
                signout.handler = "loadSignIn";
            }
        });
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
        var leader = new cc.Component.EventHandler();
        leader.target = this.node;
        leader.component = "menu";
        leader.handler = "loadLeader";
        cc.find("Canvas/leaderboard").getComponent(cc.Button).clickEvents.push(leader);
        var night = new cc.Component.EventHandler();
        night.target = this.node;
        night.component = "menu";
        night.handler = "loadNight";
        cc.find("Canvas/night").getComponent(cc.Button).clickEvents.push(night);
        var day = new cc.Component.EventHandler();
        day.target = this.node;
        day.component = "menu";
        day.handler = "loadDay";
        cc.find("Canvas/day").getComponent(cc.Button).clickEvents.push(day);
        var multi = new cc.Component.EventHandler();
        multi.target = this.node;
        multi.component = "menu";
        multi.handler = "loadMulti";
        cc.find("Canvas/multi").getComponent(cc.Button).clickEvents.push(multi);
        var bird = new cc.Component.EventHandler();
        bird.target = this.node;
        bird.component = "menu";
        bird.handler = "loadBird";
        cc.find("Canvas/bird").getComponent(cc.Button).clickEvents.push(bird);
        var store = new cc.Component.EventHandler();
        store.target = this.node;
        store.component = "menu";
        store.handler = "loadStore";
        cc.find("Canvas/store").getComponent(cc.Button).clickEvents.push(store);
        var t = new cc.Component.EventHandler();
        t.target = this.node;
        t.component = "menu";
        t.handler = "loadrule";
        cc.find("Canvas/rule").getComponent(cc.Button).clickEvents.push(t);
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
        // kick player off
        firebase.auth().signOut().then(function () {
            cc.director.loadScene("menu");
            alert("You have been signed out.");
        }).catch(function (e) {
            console.log(e.message);
        });
    };
    menu.prototype.loadSignIn = function () {
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
    __decorate([
        property(cc.AudioClip)
    ], menu.prototype, "menu_music", void 0);
    menu = __decorate([
        ccclass
    ], menu);
    return menu;
}(cc.Component));
exports.default = menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlKQztRQTlJRyxnQkFBVSxHQUFrQixJQUFJLENBQUMsQ0FBQSxNQUFNOztJQThJM0MsQ0FBQztJQTVJRyxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLDJDQUEyQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLElBQUk7WUFDcEMsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osT0FBTyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7Z0JBQ2hDLG9DQUFvQztnQkFDcEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBUTtvQkFDNUQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDakUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDL0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDL0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN6Qix5Q0FBeUM7d0JBQ3pDLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7NEJBQ3JDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO3FCQUNwQjtvQkFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFJO2dCQUNELHlCQUF5QjtnQkFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFBO2dCQUMvRCxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUNsQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN6QixLQUFLLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM1QixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RSxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBFLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDekIsS0FBSyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RSxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDckIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkUsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELHdCQUFTLEdBQVQ7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELDBCQUFXLEdBQVg7UUFDSSwrQ0FBK0M7UUFDL0Msa0JBQWtCO1FBQ2xCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUE1SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDVTtJQUhoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUp4QjtJQUFELFdBQUM7Q0FqSkQsQUFpSkMsQ0FqSmlDLEVBQUUsQ0FBQyxTQUFTLEdBaUo3QztrQkFqSm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBtZW51X211c2ljIDogY2MuQXVkaW9DbGlwID0gbnVsbDsvLyBAQUBcclxuXHJcbiAgICBvbmxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm1lbnVfbXVzaWMsIHRydWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYoIWNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIGxldCBzaWdub3V0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWdub3V0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWdub3V0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICBzaWdub3V0LmhhbmRsZXIgPSBcImxvYWRTaWdub3V0XCI7XHJcbiAgICAgICAgICAgICAgICAvLyBncmFiIGxvZ2dlZCBpbiBkYXRhIGZyb20gRmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIHZhciB1aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgdWlkICkub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpZFwiLCB1aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1aWQgaGVyZSAnLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1aWRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIGRhdGFbJ2NvaW5zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxlZ29cIiwgZGF0YVsndGhpbmcnXVsnbGVnbyddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwb3dlcnVwXCIsIGRhdGFbJ3RoaW5nJ11bJ3Bvd2VydXAnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFuYW5hXCIsIGRhdGFbJ3RoaW5nJ11bJ2JhbmFuYSddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIGRhdGFbJ3RoaW5nJ11bJ211dGUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lnbmFsXCIsIGRhdGFbJ3RoaW5nJ11bJ3NpZ25hbCddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgZGF0YVsnaGlnaHNjb3JlJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgZGF0YVsnbmFtZSddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCBkYXRhWydlbWFpbCddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3VzZXJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJXZWxjb21lLCBcIiArIGRhdGFbJ25hbWUnXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ11baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhWyd0aGluZyddWydjb2xvciddW2ldKSBzID0gcyArICcxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzID0gcyArICcwJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBzaWduIGluIGJ1dHRvbiBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvdXNlcm5hbWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3V0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJzaWduIGluXCJcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHNpZ25vdXQuaGFuZGxlciA9IFwibG9hZFNpZ25JblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduT3V0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbm91dCk7XHJcblxyXG4gICAgICAgIGxldCBsZWFkZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGxlYWRlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGVhZGVyLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGxlYWRlci5oYW5kbGVyID0gXCJsb2FkTGVhZGVyXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9sZWFkZXJib2FyZFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGxlYWRlcik7XHJcblxyXG4gICAgICAgIGxldCBuaWdodCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmlnaHQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5pZ2h0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIG5pZ2h0LmhhbmRsZXIgPSBcImxvYWROaWdodFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbmlnaHRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChuaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBkYXkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGRheS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgZGF5LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGRheS5oYW5kbGVyID0gXCJsb2FkRGF5XCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9kYXlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChkYXkpO1xyXG5cclxuICAgICAgICBsZXQgbXVsdGkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG11bHRpLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBtdWx0aS5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBtdWx0aS5oYW5kbGVyID0gXCJsb2FkTXVsdGlcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL211bHRpXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobXVsdGkpO1xyXG5cclxuICAgICAgICBsZXQgYmlyZCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmlyZC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmlyZC5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBiaXJkLmhhbmRsZXIgPSBcImxvYWRCaXJkXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iaXJkXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmlyZCk7XHJcblxyXG4gICAgICAgIGxldCBzdG9yZSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc3RvcmUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHN0b3JlLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIHN0b3JlLmhhbmRsZXIgPSBcImxvYWRTdG9yZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc3RvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzdG9yZSk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIHQuaGFuZGxlciA9IFwibG9hZHJ1bGVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3J1bGVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaCh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5pZ2h0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ0ZXN0XCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZERheSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZGF5XCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZE11bHRpKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtdWx0aV9wYWlyaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZEJpcmQoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJpcmRcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkU2lnbm91dCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgLy8ga2ljayBwbGF5ZXIgb2ZmXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgYmVlbiBzaWduZWQgb3V0LlwiKTtcclxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbG9hZFNpZ25Jbigpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RhcnRcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkTGVhZGVyKCkge1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibGVhZGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdG9yZSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RvcmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZHJ1bGUgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInR1dG9yaWFsXCIpO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=