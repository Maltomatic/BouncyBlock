
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0YXJ0X3NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEOztJQWlHQSxDQUFDO0lBNUZHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUU7WUFDZixFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsMkNBQTJDO1FBRTNDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXhCLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyw0QkFBNEI7UUFDdEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUE7UUFDL0IsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDOUIsS0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekUsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlB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QUMsU0FBUyxHQWlHcEQ7a0JBakdvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdGFydF9zY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBlbWFpbF9kYXRhOiBzdHJpbmc7XG4gICAgcGFzc3dvcmRfZGF0YTogc3RyaW5nO1xuXG4gICAgb25sb2FkKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgIH1cbiBcbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCAoKT0+IHtcbiAgICAgICAgICAgIGNjLmZpbmQoJ2JhY2tncm91bmQnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMy41KVxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5lbWFpbF9kYXRhID0gXCJcIjtcbiAgICAgICAgdGhpcy5wYXNzd29yZF9kYXRhID0gXCJcIjtcblxuICAgICAgICB2YXIgZW1haWwgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBlbWFpbC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XG4gICAgICAgIGVtYWlsLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxuICAgICAgICBlbWFpbC5oYW5kbGVyID0gXCJlbWFpbFVwZGF0ZVwiO1xuICAgICAgICBlbWFpbC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKGVtYWlsKTtcblxuICAgICAgICB2YXIgcGFzc3dvcmQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBwYXNzd29yZC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XG4gICAgICAgIHBhc3N3b3JkLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxuICAgICAgICBwYXNzd29yZC5oYW5kbGVyID0gXCJwYXNzd29yZFVwZGF0ZVwiO1xuICAgICAgICBwYXNzd29yZC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKHBhc3N3b3JkKTtcblxuICAgICAgICBsZXQgc2lnbmluID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgc2lnbmluLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgc2lnbmluLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIjtcbiAgICAgICAgc2lnbmluLmhhbmRsZXIgPSBcImxvYWRzaWduaW5cIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduSW5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduaW4pO1xuXG4gICAgICAgIGxldCBzaWdudXAgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzaWdudXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBzaWdudXAuY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiO1xuICAgICAgICBzaWdudXAuaGFuZGxlciA9IFwibG9hZHNpZ251cFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ251cCk7IFxuXG4gICAgfVxuICAgIGVtYWlsVXBkYXRlKHRleHQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSB0ZXh0O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1haWxfZGF0YSk7XG4gICAgfVxuICAgIHBhc3N3b3JkVXBkYXRlKHRleHQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSB0ZXh0O1xuICAgIH1cbiAgICBsb2Fkc2lnbmluKCkge1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpLnRoZW4oIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMnKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc25hcHNob3QuY2hpbGQoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkuZXhpc3RzKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2NvaW5zJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnaGlnaHNjb3JlJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOmZhbHNlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdzaWduYWwnOiAwLCAnbXV0ZSc6IDB9XG4gICAgICAgICAgICAgICAgICAgIHRtcFsncG93ZXJ1cCddID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYVtmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkXSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nKS51cGRhdGUoYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGVydCgnU2lnbiBpbiBzdWNjZXNzLicpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRzaWdudXAoKSB7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpO1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKS50aGVuKCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzJykub25jZShcInZhbHVlXCIpLnRoZW4oIChzbmFwc2hvdCk9PiB7XG4gICAgICAgICAgICAgICAgaWYoc25hcHNob3QuY2hpbGQoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkuZXhpc3RzKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2NvaW5zJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnaGlnaHNjb3JlJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOmZhbHNlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdzaWduYWwnOiAwLCAnbXV0ZSc6IDB9XG4gICAgICAgICAgICAgICAgICAgIHRtcFsncG93ZXJ1cCddID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYVtmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkXSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nKS51cGRhdGUoYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGVydCgnU2lnbiB1cCBzdWNjZXNzLicpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSAgIFxufVxuXG5cbiJdfQ==