
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWdKQztRQTdJRyxnQkFBVSxHQUFrQixJQUFJLENBQUMsQ0FBQSxNQUFNOztJQTZJM0MsQ0FBQztJQTNJRyxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsMkNBQTJDO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDM0IsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFVBQUMsSUFBSTtZQUNwQyxJQUFHLElBQUksRUFBQztnQkFDSixPQUFPLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztnQkFDaEMsb0NBQW9DO2dCQUNwQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxRQUFRO29CQUM1RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMvRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FB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OUIsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHlCQUFVLEdBQVY7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUEzSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDVTtJQUhoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0p4QjtJQUFELFdBQUM7Q0FoSkQsQUFnSkMsQ0FoSmlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0o3QztrQkFoSm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBtZW51X211c2ljIDogY2MuQXVkaW9DbGlwID0gbnVsbDsvLyBAQUBcclxuXHJcbiAgICBvbmxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm1lbnVfbXVzaWMsIHRydWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgbGV0IHNpZ25vdXQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNpZ25vdXQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ25vdXQuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgICAgIHNpZ25vdXQuaGFuZGxlciA9IFwibG9hZFNpZ25vdXRcIjtcclxuICAgICAgICAgICAgICAgIC8vIGdyYWIgbG9nZ2VkIGluIGRhdGEgZnJvbSBGaXJlYmFzZVxyXG4gICAgICAgICAgICAgICAgdmFyIHVpZCA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXJzLycgKyB1aWQgKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWlkXCIsIHVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VpZCBoZXJlICcsIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVpZFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgZGF0YVsnY29pbnMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVnb1wiLCBkYXRhWyd0aGluZyddWydsZWdvJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBvd2VydXBcIiwgZGF0YVsndGhpbmcnXVsncG93ZXJ1cCddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYW5hbmFcIiwgZGF0YVsndGhpbmcnXVsnYmFuYW5hJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11dGVcIiwgZGF0YVsndGhpbmcnXVsnbXV0ZSddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWduYWxcIiwgZGF0YVsndGhpbmcnXVsnc2lnbmFsJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hzY29yZVwiLCBkYXRhWydoaWdoc2NvcmUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBkYXRhWyduYW1lJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIGRhdGFbJ2VtYWlsJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVsndGhpbmcnXVsnY29sb3InXVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ11baV0pIHMgPSBzICsgJzEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHMgPSBzICsgJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBzaWduIGluIGJ1dHRvbiBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL291dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwic2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25PdXRcIikuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgICAgICBzaWdub3V0LmhhbmRsZXIgPSBcImxvYWRTaWduSW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ25vdXQpO1xyXG5cclxuICAgICAgICBsZXQgbGVhZGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBsZWFkZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGxlYWRlci5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBsZWFkZXIuaGFuZGxlciA9IFwibG9hZExlYWRlclwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbGVhZGVyYm9hcmRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChsZWFkZXIpO1xyXG5cclxuICAgICAgICBsZXQgbmlnaHQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG5pZ2h0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBuaWdodC5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBuaWdodC5oYW5kbGVyID0gXCJsb2FkTmlnaHRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL25pZ2h0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgZGF5ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBkYXkudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGRheS5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBkYXkuaGFuZGxlciA9IFwibG9hZERheVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZGF5KTtcclxuXHJcbiAgICAgICAgbGV0IG11bHRpID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBtdWx0aS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbXVsdGkuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgbXVsdGkuaGFuZGxlciA9IFwibG9hZE11bHRpXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9tdWx0aVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG11bHRpKTtcclxuXHJcbiAgICAgICAgbGV0IGJpcmQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGJpcmQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJpcmQuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgYmlyZC5oYW5kbGVyID0gXCJsb2FkQmlyZFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmlyZFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGJpcmQpO1xyXG5cclxuICAgICAgICBsZXQgc3RvcmUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHN0b3JlLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzdG9yZS5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBzdG9yZS5oYW5kbGVyID0gXCJsb2FkU3RvcmVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3N0b3JlXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc3RvcmUpO1xyXG5cclxuICAgICAgICBsZXQgdCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdC5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICB0LmhhbmRsZXIgPSBcImxvYWRydWxlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9ydWxlXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2godCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROaWdodCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwidGVzdFwiKTtcclxuICAgIH1cclxuICAgIGxvYWREYXkoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImRheVwiKTtcclxuICAgIH1cclxuICAgIGxvYWRNdWx0aSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibXVsdGlfcGFpcmluZ1wiKTtcclxuICAgIH1cclxuICAgIGxvYWRCaXJkKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJiaXJkXCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZFNpZ25vdXQoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIC8vIGtpY2sgcGxheWVyIG9mZlxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgICAgICAgICBhbGVydChcIllvdSBoYXZlIGJlZW4gc2lnbmVkIG91dC5cIik7XHJcbiAgICAgICAgfSkuY2F0Y2goKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGxvYWRTaWduSW4oKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YXJ0XCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZExlYWRlcigpIHtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxlYWRlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RvcmUgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0b3JlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRydWxlICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ0dXRvcmlhbFwiKTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuIl19