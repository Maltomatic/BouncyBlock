
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
        cc.sys.localStorage.setItem("uid", 'local');
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
                var data = {};
                firebase.database().ref('users/' + user.uid).once('value', function (snapshot) {
                    var data = snapshot.val();
                    console.log(data);
                    cc.sys.localStorage.setItem("uid", user.uid);
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
                    //console.log(cc.sys.localStorage.getItem("color"), cc.sys.localStorage.getItem("coins"));
                });
            }
            else {
                cc.sys.localStorage.setItem("coins", 0);
                cc.sys.localStorage.setItem("lego", 0);
                cc.sys.localStorage.setItem("powerup", 0);
                cc.sys.localStorage.setItem("banana", 0);
                cc.sys.localStorage.setItem("mute", 0);
                cc.sys.localStorage.setItem("signal", 0);
                cc.sys.localStorage.setItem("highscore", 0);
                cc.sys.localStorage.setItem("name", 0);
                cc.sys.localStorage.setItem("email", 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJKQztRQXhKRyxnQkFBVSxHQUFrQixJQUFJLENBQUMsQ0FBQSxNQUFNOztJQXdKM0MsQ0FBQztJQXRKRyxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBQ0Qsc0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQywyQ0FBMkM7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMzQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsVUFBQyxJQUFJO1lBQ3BDLElBQUcsSUFBSSxFQUFDO2dCQUNKLE9BQU8sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO2dCQUNoQyxvQ0FBb0M7Z0JBQ3BDLElBQUks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Q0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBdEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ1U7SUFIaEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTJKeEI7SUFBRCxXQUFDO0NBM0pELEFBMkpDLENBM0ppQyxFQUFFLENBQUMsU0FBUyxHQTJKN0M7a0JBM0pvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbWVudV9tdXNpYyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7Ly8gQEFAXHJcblxyXG4gICAgb25sb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWlkXCIsICdsb2NhbCcpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcGxheUJHTSgpeyAvLyBAQUBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5tZW51X211c2ljLCB0cnVlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIGxldCBzaWdub3V0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWdub3V0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWdub3V0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICBzaWdub3V0LmhhbmRsZXIgPSBcImxvYWRTaWdub3V0XCI7XHJcbiAgICAgICAgICAgICAgICAvLyBncmFiIGxvZ2dlZCBpbiBkYXRhIGZyb20gRmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigndXNlcnMvJyArIHVzZXIudWlkICkub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpZFwiLCB1c2VyLnVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgZGF0YVsnY29pbnMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVnb1wiLCBkYXRhWyd0aGluZyddWydsZWdvJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBvd2VydXBcIiwgZGF0YVsndGhpbmcnXVsncG93ZXJ1cCddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYW5hbmFcIiwgZGF0YVsndGhpbmcnXVsnYmFuYW5hJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11dGVcIiwgZGF0YVsndGhpbmcnXVsnbXV0ZSddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWduYWxcIiwgZGF0YVsndGhpbmcnXVsnc2lnbmFsJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hzY29yZVwiLCBkYXRhWydoaWdoc2NvcmUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBkYXRhWyduYW1lJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIGRhdGFbJ2VtYWlsJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVsndGhpbmcnXVsnY29sb3InXVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ11baV0pIHMgPSBzICsgJzEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHMgPSBzICsgJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvclwiKSwgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVnb1wiLCAwKTtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBvd2VydXBcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYW5hbmFcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lnbmFsXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCAwKTtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgLy8gc2lnbiBpbiBidXR0b24gaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9vdXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInNpZ24gaW5cIlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduT3V0XCIpLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgc2lnbm91dC5oYW5kbGVyID0gXCJsb2FkU2lnbkluXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25PdXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWdub3V0KTtcclxuXHJcbiAgICAgICAgbGV0IGxlYWRlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbGVhZGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBsZWFkZXIuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgbGVhZGVyLmhhbmRsZXIgPSBcImxvYWRMZWFkZXJcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xlYWRlcmJvYXJkXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobGVhZGVyKTtcclxuXHJcbiAgICAgICAgbGV0IG5pZ2h0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBuaWdodC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmlnaHQuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgbmlnaHQuaGFuZGxlciA9IFwibG9hZE5pZ2h0XCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9uaWdodFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG5pZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGRheSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZGF5LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBkYXkuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgZGF5LmhhbmRsZXIgPSBcImxvYWREYXlcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2RheVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGRheSk7XHJcblxyXG4gICAgICAgIGxldCBtdWx0aSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbXVsdGkudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG11bHRpLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIG11bHRpLmhhbmRsZXIgPSBcImxvYWRNdWx0aVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbXVsdGlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChtdWx0aSk7XHJcblxyXG4gICAgICAgIGxldCBiaXJkID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBiaXJkLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBiaXJkLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGJpcmQuaGFuZGxlciA9IFwibG9hZEJpcmRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JpcmRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChiaXJkKTtcclxuXHJcbiAgICAgICAgbGV0IHN0b3JlID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzdG9yZS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc3RvcmUuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgc3RvcmUuaGFuZGxlciA9IFwibG9hZFN0b3JlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zdG9yZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHN0b3JlKTtcclxuXHJcbiAgICAgICAgbGV0IHQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHQuY29tcG9uZW50ID0gXCJtZW51XCI7XHJcbiAgICAgICAgdC5oYW5kbGVyID0gXCJsb2FkcnVsZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcnVsZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmlnaHQoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInRlc3RcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkRGF5KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJkYXlcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkTXVsdGkoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm11bHRpX3BhaXJpbmdcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkQmlyZCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmlyZFwiKTtcclxuICAgIH1cclxuICAgIGxvYWRTaWdub3V0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICAvLyBraWNrIHBsYXllciBvZmZcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBiZWVuIHNpZ25lZCBvdXQuXCIpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsb2FkU2lnbkluKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdGFydFwiKTtcclxuICAgIH1cclxuICAgIGxvYWRMZWFkZXIoKSB7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsZWFkZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0b3JlICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdG9yZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkcnVsZSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwidHV0b3JpYWxcIik7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==