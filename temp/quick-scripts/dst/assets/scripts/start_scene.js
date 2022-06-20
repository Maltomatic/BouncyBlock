
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/start_scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73edcRU4k1F8JCNxOMYOUiu', 'start_scene');
// scripts/start_scene.ts

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
var start_scene = /** @class */ (function (_super) {
    __extends(start_scene, _super);
    function start_scene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    start_scene.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
        if (firebase.auth().currentUser.uid)
            this.uid = firebase.auth().currentUser.uid;
    };
    start_scene.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        var count = 4;
        this.schedule(function () {
            count -= 1;
            cc.find('background/number').getComponent(cc.Label).string = count.toString();
        }, 1, 4);
        this.scheduleOnce(function () {
            cc.find('background').active = false;
        }, 4);
        //cc.audioEngine.playMusic(this.bgm, true);
        this.email_data = "";
        this.password_data = "";
        this.username = "";
        var email = new cc.Component.EventHandler();
        email.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        email.component = "start_scene";
        email.handler = "emailUpdate";
        email.customEventData = "foobar";
        cc.find("Canvas/Email").getComponent(cc.EditBox).textChanged.push(email);
        var n = new cc.Component.EventHandler();
        n.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        n.component = "start_scene";
        n.handler = "nameUpdate";
        n.customEventData = "foobar";
        cc.find("Canvas/Name").getComponent(cc.EditBox).textChanged.push(n);
        var password = new cc.Component.EventHandler();
        password.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        password.component = "start_scene";
        password.handler = "passwordUpdate";
        password.customEventData = "foobar";
        cc.find("Canvas/Password").getComponent(cc.EditBox).textChanged.push(password);
        var signin = new cc.Component.EventHandler();
        signin.target = this.node;
        signin.component = "start_scene";
        signin.handler = "loadsignin";
        cc.find("Canvas/SignIn").getComponent(cc.Button).clickEvents.push(signin);
        var signup = new cc.Component.EventHandler();
        signup.target = this.node;
        signup.component = "start_scene";
        signup.handler = "loadsignup";
        cc.find("Canvas/SignUp").getComponent(cc.Button).clickEvents.push(signup);
    };
    start_scene.prototype.emailUpdate = function (text, editbox, customEventData) {
        this.email_data = text;
        //console.log(this.email_data);
    };
    start_scene.prototype.nameUpdate = function (text, editbox, customEventData) {
        this.username = text;
        //console.log(this.email_data);
    };
    start_scene.prototype.passwordUpdate = function (text, editbox, customEventData) {
        this.password_data = text;
    };
    start_scene.prototype.loadsignin = function () {
        var _this = this;
        //cc.audioEngine.playEffect(this.press, false);
        firebase.auth().signInWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            firebase.database().ref('/users').once("value").then(function (snapshot) {
                if (snapshot.child(_this.uid).exists() == false) {
                    var a = {};
                    var tmp = {};
                    tmp['coins'] = 0;
                    tmp['email'] = firebase.auth().currentUser.email;
                    tmp['highscore'] = 0;
                    console.log('name = ', _this.username);
                    tmp['name'] = _this.username;
                    var t = { 'lego': 0, 'banana': 0, 'color': { 1: true, 2: false, 3: false, 4: false, 5: false }, 'powerup': 0, 'signal': 0, 'mute': 0 };
                    tmp['thing'] = t;
                    a[_this.uid] = tmp;
                    firebase.database().ref('/users/').update(a);
                }
                _this.scheduleOnce(function () {
                    cc.director.loadScene("menu");
                }, 1);
            });
        }).catch(function (error) {
            alert(error);
        });
    };
    start_scene.prototype.loadsignup = function () {
        var _this = this;
        //cc.audioEngine.playEffect(this.press, false);
        //console.log(this.email_data, this.password_data);
        console.log('name = ', this.username);
        firebase.auth().createUserWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            firebase.database().ref('/users').once("value").then(function (snapshot) {
                if (snapshot.child(_this.uid).exists() == false) {
                    var a = {};
                    var tmp = {};
                    tmp['coins'] = 0;
                    tmp['email'] = firebase.auth().currentUser.email;
                    tmp['highscore'] = 0;
                    tmp['name'] = _this.username;
                    console.log('name = ', _this.username, _this.email_data);
                    var t = { 'lego': 0, 'banana': 0, 'color': { 1: true, 2: false, 3: false, 4: false, 5: false }, 'powerup': 0, 'signal': 0, 'mute': 0 };
                    tmp['thing'] = t;
                    a[firebase.auth().currentUser.uid] = tmp;
                    firebase.database().ref('/users/').update(a);
                }
                _this.scheduleOnce(function () {
                    cc.director.loadScene("menu");
                }, 1);
            });
        }).catch(function (error) {
            alert(error);
        });
    };
    start_scene = __decorate([
        ccclass
    ], start_scene);
    return start_scene;
}(cc.Component));
exports.default = start_scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0YXJ0X3NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEOztJQWdJQSxDQUFDO0lBekhHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRztZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDbkYsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFFO1lBQ1gsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEYsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sMkNBQTJDO1FBRTNDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxh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Q0FBQyxDQUFDLENBQUMsQ0FBQztpQkFFaEQ7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBUyxLQUFLO1lBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEvSGdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnSS9CO0lBQUQsa0JBQUM7Q0FoSUQsQUFnSUMsQ0FoSXdDLEVBQUUsQ0FBQyxTQUFTLEdBZ0lwRDtrQkFoSW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0X3NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGVtYWlsX2RhdGE6IHN0cmluZztcbiAgICBwYXNzd29yZF9kYXRhOiBzdHJpbmc7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICB1aWQ6IHN0cmluZztcblxuICAgIG9ubG9hZCgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgaWYoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkgdGhpcy51aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xuICAgIH1cbiBcbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIHZhciBjb3VudCA9IDQ7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoICgpPT4ge1xuICAgICAgICAgICAgY291bnQgLT0gMTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ2JhY2tncm91bmQvbnVtYmVyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb3VudC50b1N0cmluZygpO1xuICAgICAgICB9LCAxLCA0KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XG4gICAgICAgICAgICBjYy5maW5kKCdiYWNrZ3JvdW5kJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDQpO1xuXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSBcIlwiO1xuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSBcIlwiO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gXCJcIjtcblxuICAgICAgICB2YXIgZW1haWwgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBlbWFpbC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XG4gICAgICAgIGVtYWlsLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxuICAgICAgICBlbWFpbC5oYW5kbGVyID0gXCJlbWFpbFVwZGF0ZVwiO1xuICAgICAgICBlbWFpbC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKGVtYWlsKTtcblxuICAgICAgICB2YXIgbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIG4udGFyZ2V0ID0gdGhpcy5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxuICAgICAgICBuLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxuICAgICAgICBuLmhhbmRsZXIgPSBcIm5hbWVVcGRhdGVcIjtcbiAgICAgICAgbi5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL05hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnRleHRDaGFuZ2VkLnB1c2gobik7XG5cbiAgICAgICAgdmFyIHBhc3N3b3JkID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgcGFzc3dvcmQudGFyZ2V0ID0gdGhpcy5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxuICAgICAgICBwYXNzd29yZC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCJcbiAgICAgICAgcGFzc3dvcmQuaGFuZGxlciA9IFwicGFzc3dvcmRVcGRhdGVcIjtcbiAgICAgICAgcGFzc3dvcmQuY3VzdG9tRXZlbnREYXRhID0gXCJmb29iYXJcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkudGV4dENoYW5nZWQucHVzaChwYXNzd29yZCk7XG5cbiAgICAgICAgbGV0IHNpZ25pbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIHNpZ25pbi50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHNpZ25pbi5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCI7XG4gICAgICAgIHNpZ25pbi5oYW5kbGVyID0gXCJsb2Fkc2lnbmluXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbkluXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbmluKTtcblxuICAgICAgICBsZXQgc2lnbnVwID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgc2lnbnVwLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgc2lnbnVwLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIjtcbiAgICAgICAgc2lnbnVwLmhhbmRsZXIgPSBcImxvYWRzaWdudXBcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduVXBcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWdudXApOyBcblxuICAgIH1cbiAgICBlbWFpbFVwZGF0ZSh0ZXh0LCBlZGl0Ym94LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5lbWFpbF9kYXRhID0gdGV4dDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEpO1xuICAgIH1cbiAgICBuYW1lVXBkYXRlKHRleHQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdGV4dDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEpO1xuICAgIH1cbiAgICBwYXNzd29yZFVwZGF0ZSh0ZXh0LCBlZGl0Ym94LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZF9kYXRhID0gdGV4dDtcbiAgICB9XG4gICAgbG9hZHNpZ25pbigpIHtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKS50aGVuKCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzJykub25jZShcInZhbHVlXCIpLnRoZW4oIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNuYXBzaG90LmNoaWxkKHRoaXMudWlkKS5leGlzdHMoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnY29pbnMnXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnZW1haWwnXSA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgdG1wWydoaWdoc2NvcmUnXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduYW1lID0gJywgdGhpcy51c2VybmFtZSlcbiAgICAgICAgICAgICAgICAgICAgdG1wWyduYW1lJ10gPSB0aGlzLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOiB0cnVlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdwb3dlcnVwJzogMCwgJ3NpZ25hbCc6IDAsICdtdXRlJzogMH1cbiAgICAgICAgICAgICAgICAgICAgdG1wWyd0aGluZyddID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYVt0aGlzLnVpZF0gPSB0bXA7XG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJykudXBkYXRlKGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZHNpZ251cCgpIHtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCduYW1lID0gJywgdGhpcy51c2VybmFtZSk7XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpLnRoZW4oIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMnKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KT0+IHtcbiAgICAgICAgICAgICAgICBpZihzbmFwc2hvdC5jaGlsZCh0aGlzLnVpZCkuZXhpc3RzKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2NvaW5zJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnaGlnaHNjb3JlJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ25hbWUnXSA9IHRoaXMudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduYW1lID0gJywgdGhpcy51c2VybmFtZSwgdGhpcy5lbWFpbF9kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB7J2xlZ28nOjAsICdiYW5hbmEnOiAwLCAnY29sb3InOiB7MTp0cnVlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdwb3dlcnVwJzogMCwgJ3NpZ25hbCc6IDAsICdtdXRlJzogMH1cbiAgICAgICAgICAgICAgICAgICAgdG1wWyd0aGluZyddID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYVtmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkXSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nKS51cGRhdGUoYSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9IFxufVxuXG5cbiJdfQ==