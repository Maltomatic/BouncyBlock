
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
    };
    start_scene.prototype.start = function () {
        this.scheduleOnce(function () {
            cc.find('background').active = false;
        }, 3.5);
        //cc.audioEngine.playMusic(this.bgm, true);
        this.email_data = "";
        this.password_data = "";
        var email = new cc.Component.EventHandler();
        email.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        email.component = "start_scene";
        email.handler = "emailUpdate";
        email.customEventData = "foobar";
        cc.find("Canvas/Email").getComponent(cc.EditBox).textChanged.push(email);
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
    start_scene.prototype.passwordUpdate = function (text, editbox, customEventData) {
        this.password_data = text;
    };
    start_scene.prototype.loadsignin = function () {
        //cc.audioEngine.playEffect(this.press, false);
        firebase.auth().signInWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            firebase.database().ref('/users').once("value").then(function (snapshot) {
                if (snapshot.child(firebase.auth().currentUser.uid).exists() == false) {
                    var a = {};
                    var tmp = {};
                    tmp['coins'] = 0;
                    tmp['email'] = firebase.auth().currentUser.email;
                    tmp['highscore'] = 0;
                    var t = { 'lego': 0, 'banana': 0, 'color': { 1: false, 2: false, 3: false, 4: false, 5: false }, 'signal': 0, 'mute': 0 };
                    tmp['powerup'] = t;
                    a[firebase.auth().currentUser.uid] = tmp;
                    firebase.database().ref('/users/').update(a);
                }
            });
            alert('Sign in success.');
            cc.director.loadScene("menu");
        }).catch(function (error) {
            alert(error);
        });
    };
    start_scene.prototype.loadsignup = function () {
        //cc.audioEngine.playEffect(this.press, false);
        //console.log(this.email_data, this.password_data);
        firebase.auth().createUserWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            firebase.database().ref('/users').once("value").then(function (snapshot) {
                if (snapshot.child(firebase.auth().currentUser.uid).exists() == false) {
                    var a = {};
                    var tmp = {};
                    tmp['coins'] = 0;
                    tmp['email'] = firebase.auth().currentUser.email;
                    tmp['highscore'] = 0;
                    var t = { 'lego': 0, 'banana': 0, 'color': { 1: false, 2: false, 3: false, 4: false, 5: false }, 'signal': 0, 'mute': 0 };
                    tmp['powerup'] = t;
                    a[firebase.auth().currentUser.uid] = tmp;
                    firebase.database().ref('/users/').update(a);
                }
            });
            alert('Sign up success.');
            cc.director.loadScene("menu");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RhcnRfc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBaUdBLENBQUM7SUE1RkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBRTtZQUNmLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCwyQ0FBMkM7UUFFM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUN0RCxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQTtRQUMvQixLQUFLLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUM5QixLQUFLLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6RSxJQUFJLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMs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Q0FBQyxTQUFTLEdBaUdwRDtrQkFqR29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0X3NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBlbWFpbF9kYXRhOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZF9kYXRhOiBzdHJpbmc7XHJcblxyXG4gICAgb25sb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICB9XHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2JhY2tncm91bmQnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAzLjUpXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9IFwiXCI7XHJcblxyXG4gICAgICAgIHZhciBlbWFpbCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZW1haWwudGFyZ2V0ID0gdGhpcy5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgIGVtYWlsLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxyXG4gICAgICAgIGVtYWlsLmhhbmRsZXIgPSBcImVtYWlsVXBkYXRlXCI7XHJcbiAgICAgICAgZW1haWwuY3VzdG9tRXZlbnREYXRhID0gXCJmb29iYXJcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKGVtYWlsKTtcclxuXHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwYXNzd29yZC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgcGFzc3dvcmQuY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiXHJcbiAgICAgICAgcGFzc3dvcmQuaGFuZGxlciA9IFwicGFzc3dvcmRVcGRhdGVcIjtcclxuICAgICAgICBwYXNzd29yZC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvUGFzc3dvcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnRleHRDaGFuZ2VkLnB1c2gocGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBsZXQgc2lnbmluID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWduaW4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ25pbi5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCI7XHJcbiAgICAgICAgc2lnbmluLmhhbmRsZXIgPSBcImxvYWRzaWduaW5cIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25JblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ25pbik7XHJcblxyXG4gICAgICAgIGxldCBzaWdudXAgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNpZ251cC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2lnbnVwLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIjtcclxuICAgICAgICBzaWdudXAuaGFuZGxlciA9IFwibG9hZHNpZ251cFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnblVwXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbnVwKTsgXHJcblxyXG4gICAgfVxyXG4gICAgZW1haWxVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbF9kYXRhID0gdGV4dDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1haWxfZGF0YSk7XHJcbiAgICB9XHJcbiAgICBwYXNzd29yZFVwZGF0ZSh0ZXh0LCBlZGl0Ym94LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgbG9hZHNpZ25pbigpIHtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSkudGhlbiggKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzJykub25jZShcInZhbHVlXCIpLnRoZW4oIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc25hcHNob3QuY2hpbGQoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkuZXhpc3RzKCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2NvaW5zJ10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFsnZW1haWwnXSA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2hpZ2hzY29yZSddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOmZhbHNlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdzaWduYWwnOiAwLCAnbXV0ZSc6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydwb3dlcnVwJ10gPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZF0gPSB0bXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nKS51cGRhdGUoYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbGVydCgnU2lnbiBpbiBzdWNjZXNzLicpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRzaWdudXAoKSB7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKTtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKS50aGVuKCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMnKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KT0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNuYXBzaG90LmNoaWxkKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydjb2lucyddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydoaWdoc2NvcmUnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB7J2xlZ28nOjAsICdiYW5hbmEnOiAwLCAnY29sb3InOiB7MTpmYWxzZSwgMjogZmFsc2UsIDM6IGZhbHNlLCA0OiBmYWxzZSwgNTogZmFsc2V9LCAnc2lnbmFsJzogMCwgJ211dGUnOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHRtcFsncG93ZXJ1cCddID0gdDtcclxuICAgICAgICAgICAgICAgICAgICBhW2ZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWRdID0gdG1wO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJykudXBkYXRlKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NpZ24gdXAgc3VjY2Vzcy4nKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcblxyXG4iXX0=
