
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
        _this.flag = false;
        _this.uid = null;
        _this.online = false;
        return _this;
    }
    lose.prototype.onload = function () {
        cc.audioEngine.pauseMusic(); // @A@
    };
    lose.prototype.start = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user)
                _this.online = true;
        });
        this.uid = cc.sys.localStorage.getItem('uid');
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var score = cc.sys.localStorage.getItem("nowscore");
        var scene = cc.sys.localStorage.getItem("nowscene");
        if (scene == 'night' && score > cc.sys.localStorage.getItem("highscore")) {
            firebase.database().ref('/users/' + this.uid + '/highscore').set(parseInt(score), function () {
                cc.sys.localStorage.setItem("highscore", score);
            });
        }
        cc.find('score').getComponent(cc.Label).string = score.toString();
        //callback
        console.log(this.online);
        if (this.uid != 'local') { //  &&&& 原本是online, always false
            firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(parseInt(cc.sys.localStorage.getItem("lego")));
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(parseInt(cc.sys.localStorage.getItem("banana")));
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")), function () {
                _this.flag = true;
            });
        }
        var menu = new cc.Component.EventHandler();
        menu.target = this.node;
        menu.component = "lose";
        menu.handler = "loadmenu";
        cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
    };
    lose.prototype.loadmenu = function () {
        if (this.flag) {
            //cc.audioEngine.playEffect(this.press, false);
            cc.audioEngine.pauseMusic();
            cc.director.loadScene("menu");
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW1FQztRQWhFRyxxQkFBZSxHQUFrQixJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQzdDLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFZCxTQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBNERwQyxDQUFDO0lBMURHLHFCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTTtJQUN2QyxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUFBLGlCQXdDQztRQXZDRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsVUFBQyxJQUFJO1lBQ3BDLElBQUksSUFBSTtnQkFBRSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLDJDQUEyQztRQUUzQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFD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Q0FBQztRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxRSxDQUFDO0lBR0QsdUJBQVEsR0FBUjtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLCtDQUErQztZQUMzQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUEvREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDZTtJQUhyQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBbUV4QjtJQUFELFdBQUM7Q0FuRUQsQUFtRUMsQ0FuRWlDLEVBQUUsQ0FBQyxTQUFTLEdBbUU3QztrQkFuRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBsb3NlX2JhY2tfbXVzaWMgOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyBAQUBcclxuICAgIGZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgb25saW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25sb2FkKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpOyAvLyBAQUBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikgdGhpcy5vbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKTtcclxuICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdmFyIHNjb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm93c2NvcmVcIik7XHJcbiAgICAgICAgdmFyIHNjZW5lID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm93c2NlbmVcIik7XHJcbiAgICAgICAgaWYoc2NlbmUgPT0gJ25pZ2h0JyAmJiBzY29yZSA+IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKSkge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvaGlnaHNjb3JlJykuc2V0KHBhcnNlSW50KHNjb3JlKSwgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgc2NvcmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ3Njb3JlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL2NhbGxiYWNrXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vbmxpbmUpO1xyXG4gICAgICAgIGlmKHRoaXMudWlkICE9ICdsb2NhbCcpIHsgICAgICAgICAgICAgICAgLy8gICYmJiYg5Y6f5pys5pivb25saW5lLCBhbHdheXMgZmFsc2VcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvaW5zXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9sZWdvJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxlZ29cIikpKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3Bvd2VydXAnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicG93ZXJ1cFwiKSkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvYmFuYW5hJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhbmFuYVwiKSkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvbXV0ZScpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXRlXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9zaWduYWwnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lnbmFsXCIpKSwgKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZW51ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBtZW51LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBtZW51LmNvbXBvbmVudCA9IFwibG9zZVwiO1xyXG4gICAgICAgIG1lbnUuaGFuZGxlciA9IFwibG9hZG1lbnVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChtZW51KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZG1lbnUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5mbGFnKSB7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QkdNKCl7Ly8gQEFAXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMubG9zZV9iYWNrX211c2ljLCB0cnVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=