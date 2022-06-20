
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2affC6cylNr5t6u4Gjq4Sx', 'lose');
// scripts/lose.ts

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
var lose = /** @class */ (function (_super) {
    __extends(lose, _super);
    function lose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lose_back_music = null; // @A@
        _this.uid = null;
        return _this;
    }
    lose.prototype.onload = function () {
        this.uid = cc.sys.localStorage.getItem('uid');
        cc.audioEngine.pauseMusic(); // @A@
    };
    lose.prototype.start = function () {
        var _this = this;
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/' + this.uid + '/coins').set(cc.sys.localStorage.getItem("data"), function () {
            var menu = new cc.Component.EventHandler();
            menu.target = _this.node;
            menu.component = "lose";
            menu.handler = "loadmenu";
            cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
        });
        //callback
        firebase.database().ref('/users/' + this.uid + '/coins').set(cc.sys.localStorage.getItem("coins"));
        firebase.database().ref('/users/' + this.uid + '/thing/lego').set(cc.sys.localStorage.getItem("lego"));
        firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(cc.sys.localStorage.getItem("powerup"));
        firebase.database().ref('/users/' + this.uid + '/thing/banana').set(cc.sys.localStorage.getItem("banana"));
        firebase.database().ref('/users/' + this.uid + '/thing/mute').set(cc.sys.localStorage.getItem("mute"));
        firebase.database().ref('/users/' + this.uid + '/thing/signal').set(cc.sys.localStorage.getItem("signal"));
        var menu = new cc.Component.EventHandler();
        menu.target = this.node;
        menu.component = "lose";
        menu.handler = "loadmenu";
        cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
    };
    lose.prototype.loadmenu = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.audioEngine.pauseMusic();
        cc.director.loadScene("menu");
    };
    lose.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.lose_back_music, true);
    };
    __decorate([
        property(cc.AudioClip)
    ], lose.prototype, "lose_back_music", void 0);
    lose = __decorate([
        ccclass
    ], lose);
    return lose;
}(cc.Component));
exports.default = lose;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW9EQztRQWpERyxxQkFBZSxHQUFrQixJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRXJDLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBK0MvQixDQUFDO0lBN0NHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTTtJQUN2QyxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQywyQ0FBMkM7UUFFM0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlGLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENB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dGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBsb3NlX2JhY2tfbXVzaWMgOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyBAQUBcclxuXHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBvbmxvYWQoKXtcclxuICAgICAgICB0aGlzLnVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpOyAvLyBAQUBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpLCAoKT0+IHtcclxuICAgICAgICAgICAgbGV0IG1lbnUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBtZW51LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbWVudS5jb21wb25lbnQgPSBcImxvc2VcIjtcclxuICAgICAgICAgICAgbWVudS5oYW5kbGVyID0gXCJsb2FkbWVudVwiO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChtZW51KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL2NhbGxiYWNrXHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvaW5zXCIpKTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvbGVnbycpLnNldChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZWdvXCIpKTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvcG93ZXJ1cCcpLnNldChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3dlcnVwXCIpKTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvYmFuYW5hJykuc2V0KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhbmFuYVwiKSk7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL211dGUnKS5zZXQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXV0ZVwiKSk7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3NpZ25hbCcpLnNldChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWduYWxcIikpO1xyXG5cclxuICAgICAgICBsZXQgbWVudSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbWVudS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbWVudS5jb21wb25lbnQgPSBcImxvc2VcIjtcclxuICAgICAgICBtZW51LmhhbmRsZXIgPSBcImxvYWRtZW51XCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9tZW51XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobWVudSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZG1lbnUoKSB7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QkdNKCl7Ly8gQEFAXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMubG9zZV9iYWNrX211c2ljLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19