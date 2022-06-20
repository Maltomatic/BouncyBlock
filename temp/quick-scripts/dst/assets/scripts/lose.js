
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
        _this.online = false;
        return _this;
    }
    lose.prototype.onload = function () {
        var _this = this;
        cc.audioEngine.pauseMusic(); // @A@
        firebase.auth().onAuthStateChanged(function (user) {
            if (user)
                _this.online = true;
        });
    };
    lose.prototype.start = function () {
        var _this = this;
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
        console.log(this.uid);
        if (this.online) {
            firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(parseInt(cc.sys.localStorage.getItem("lego")));
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(parseInt(cc.sys.localStorage.getItem("banana")));
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")), function () {
                var menu = new cc.Component.EventHandler();
                menu.target = _this.node;
                menu.component = "lose";
                menu.handler = "loadmenu";
                cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWtFQztRQS9ERyxxQkFBZSxHQUFrQixJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRXJDLFNBQUcsR0FBVyxJQUFJLENBQUM7UUFDbkIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUE0RHBDLENBQUM7SUExREcscUJBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDbkMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFVBQUMsSUFBSTtZQUNwQyxJQUFJLElBQUk7Z0JBQUUsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUFBLGlCQXNDQztRQXBDRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQywyQ0FBMkM7UUFFM0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxJQUFHLEtB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LENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUdELHVCQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQTdERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNlO0lBSHJCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrRXhCO0lBQUQsV0FBQztDQWxFRCxBQWtFQyxDQWxFaUMsRUFBRSxDQUFDLFNBQVMsR0FrRTdDO2tCQWxFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9zZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGxvc2VfYmFja19tdXNpYyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7IC8vIEBBQFxyXG5cclxuICAgIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBvbmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbmxvYWQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7IC8vIEBBQFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHRoaXMub25saW5lID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51aWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpZCcpO1xyXG4gICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG5cclxuICAgICAgICB2YXIgc2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3dzY29yZVwiKTtcclxuICAgICAgICB2YXIgc2NlbmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3dzY2VuZVwiKTtcclxuICAgICAgICBpZihzY2VuZSA9PSAnbmlnaHQnICYmIHNjb3JlID4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpKSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9oaWdoc2NvcmUnKS5zZXQocGFyc2VJbnQoc2NvcmUpLCAoKT0+IHtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hzY29yZVwiLCBzY29yZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZCgnc2NvcmUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vY2FsbGJhY2tcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVpZCk7XHJcbiAgICAgICAgaWYodGhpcy5vbmxpbmUpIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvaW5zXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9sZWdvJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxlZ29cIikpKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3Bvd2VydXAnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicG93ZXJ1cFwiKSkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvYmFuYW5hJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhbmFuYVwiKSkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvbXV0ZScpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXRlXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9zaWduYWwnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lnbmFsXCIpKSwgKCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBtZW51ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIG1lbnUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbWVudS5jb21wb25lbnQgPSBcImxvc2VcIjtcclxuICAgICAgICAgICAgICAgIG1lbnUuaGFuZGxlciA9IFwibG9hZG1lbnVcIjtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG1lbnUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lbnUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG1lbnUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG1lbnUuY29tcG9uZW50ID0gXCJsb3NlXCI7XHJcbiAgICAgICAgbWVudS5oYW5kbGVyID0gXCJsb2FkbWVudVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG1lbnUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkbWVudSgpIHtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKXsvLyBAQUBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5sb3NlX2JhY2tfbXVzaWMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=