
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
        cc.audioEngine.pauseMusic(); // @A@
    };
    lose.prototype.start = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user)
                _this.online = true;
        });
        this.uid = cc.sys.localStorage.getItem('uid');
        console.log(this.uid);
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var score = parseInt(cc.sys.localStorage.getItem("nowscore"));
        var scene = cc.sys.localStorage.getItem("nowscene");
        var h_score = parseInt(cc.sys.localStorage.getItem("highscore"));
        // console.log(score);
        // console.log(this.uid, scene, h_score);
        // console.log("storing data if highscore");
        // console.log((this.uid != 'local'));
        // console.log((this.uid != 'local'));
        // console.log((score > h_score));
        // console.log((this.uid != 'local') && (scene == 'test') && (score > h_score));
        if ((this.uid != 'local') && (scene == 'test') && (score > h_score)) {
            firebase.database().ref('/users/' + this.uid + '/highscore').set(score, function () {
                cc.sys.localStorage.setItem("highscore", score);
                cc.find('Canvas/best').active = true;
            });
        }
        cc.find('score').getComponent(cc.Label).string = score.toString();
        //callback
        if (this.uid != 'local') { //  &&&& 原本是online, always false
            firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(parseInt(cc.sys.localStorage.getItem("lego")));
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(parseInt(cc.sys.localStorage.getItem("banana")));
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")));
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
        cc.audioEngine.playMusic(this.lose_back_music, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXFFQztRQWxFRyxxQkFBZSxHQUFrQixJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRXJDLFNBQUcsR0FBVyxJQUFJLENBQUM7UUFDbkIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUErRHBDLENBQUM7SUE3REcscUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQ3ZDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQUEsaUJBNkNDO1FBNUNHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLElBQUk7WUFDcEMsSUFBSSxJQUFJO2dCQUFFLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsMkNBQTJDO1FBRTNDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FB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QUM7U0FDeEg7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFFLENBQUM7SUFHRCx1QkFBUSxHQUFSO1FBQ0ksK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFqRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDZTtJQUhyQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBcUV4QjtJQUFELFdBQUM7Q0FyRUQsQUFxRUMsQ0FyRWlDLEVBQUUsQ0FBQyxTQUFTLEdBcUU3QztrQkFyRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBsb3NlX2JhY2tfbXVzaWMgOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyBAQUBcclxuXHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgb25saW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25sb2FkKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpOyAvLyBAQUBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikgdGhpcy5vbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVpZCk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciBzY29yZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vd3Njb3JlXCIpKTtcclxuICAgICAgICB2YXIgc2NlbmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3dzY2VuZVwiKTtcclxuICAgICAgICB2YXIgaF9zY29yZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2NvcmUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudWlkLCBzY2VuZSwgaF9zY29yZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdG9yaW5nIGRhdGEgaWYgaGlnaHNjb3JlXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCh0aGlzLnVpZCAhPSAnbG9jYWwnKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMudWlkICE9ICdsb2NhbCcpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygoc2NvcmUgPiBoX3Njb3JlKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMudWlkICE9ICdsb2NhbCcpICYmIChzY2VuZSA9PSAndGVzdCcpICYmIChzY29yZSA+IGhfc2NvcmUpKTtcclxuICAgICAgICBpZigodGhpcy51aWQgIT0gJ2xvY2FsJykgJiYgKHNjZW5lID09ICd0ZXN0JykgJiYgKHNjb3JlID4gaF9zY29yZSkpIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2hpZ2hzY29yZScpLnNldChzY29yZSwgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jlc3QnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ3Njb3JlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL2NhbGxiYWNrXHJcbiAgICAgICAgaWYodGhpcy51aWQgIT0gJ2xvY2FsJykgeyAgICAgICAgICAgICAgICAvLyAgJiYmJiDljp/mnKzmmK9vbmxpbmUsIGFsd2F5cyBmYWxzZVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIikpKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2xlZ28nKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGVnb1wiKSkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvcG93ZXJ1cCcpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3dlcnVwXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9iYW5hbmEnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFuYW5hXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9tdXRlJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11dGVcIikpKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3NpZ25hbCcpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWduYWxcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lbnUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG1lbnUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG1lbnUuY29tcG9uZW50ID0gXCJsb3NlXCI7XHJcbiAgICAgICAgbWVudS5oYW5kbGVyID0gXCJsb2FkbWVudVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG1lbnUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkbWVudSgpIHtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKXsvLyBAQUBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5sb3NlX2JhY2tfbXVzaWMsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG4iXX0=