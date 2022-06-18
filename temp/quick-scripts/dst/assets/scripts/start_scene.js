
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
                    tmp['life'] = 1;
                    tmp['email'] = firebase.auth().currentUser.email;
                    tmp['level1'] = 0;
                    tmp['level2'] = 0;
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
                    tmp['life'] = 1;
                    tmp['email'] = firebase.auth().currentUser.email;
                    tmp['level1'] = 0;
                    tmp['level2'] = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RhcnRfc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBNEZBLENBQUM7SUF2RkcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksMkNBQTJDO1FBRTNDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXhCLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyw0QkFBNEI7UUFDdEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUE7UUFDL0IsS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDOUIsS0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekUsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUN6RCxRQUFRLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxR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QyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFTLEtBQUs7WUFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNGZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRGL0I7SUFBRCxrQkFBQztDQTVGRCxBQTRGQyxDQTVGd0MsRUFBRSxDQUFDLFNBQVMsR0E0RnBEO2tCQTVGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRfc2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGVtYWlsX2RhdGE6IHN0cmluZztcclxuICAgIHBhc3N3b3JkX2RhdGE6IHN0cmluZztcclxuXHJcbiAgICBvbmxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgIH1cclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWFpbF9kYXRhID0gXCJcIjtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSBcIlwiO1xyXG5cclxuICAgICAgICB2YXIgZW1haWwgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGVtYWlsLnRhcmdldCA9IHRoaXMubm9kZTsgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICBlbWFpbC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCJcclxuICAgICAgICBlbWFpbC5oYW5kbGVyID0gXCJlbWFpbFVwZGF0ZVwiO1xyXG4gICAgICAgIGVtYWlsLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9FbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkudGV4dENoYW5nZWQucHVzaChlbWFpbCk7XHJcblxyXG4gICAgICAgIHZhciBwYXNzd29yZCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcGFzc3dvcmQudGFyZ2V0ID0gdGhpcy5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxyXG4gICAgICAgIHBhc3N3b3JkLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxyXG4gICAgICAgIHBhc3N3b3JkLmhhbmRsZXIgPSBcInBhc3N3b3JkVXBkYXRlXCI7XHJcbiAgICAgICAgcGFzc3dvcmQuY3VzdG9tRXZlbnREYXRhID0gXCJmb29iYXJcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKHBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgbGV0IHNpZ25pbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2lnbmluLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWduaW4uY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiO1xyXG4gICAgICAgIHNpZ25pbi5oYW5kbGVyID0gXCJsb2Fkc2lnbmluXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduSW5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduaW4pO1xyXG5cclxuICAgICAgICBsZXQgc2lnbnVwID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWdudXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ251cC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCI7XHJcbiAgICAgICAgc2lnbnVwLmhhbmRsZXIgPSBcImxvYWRzaWdudXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ251cCk7IFxyXG5cclxuICAgIH1cclxuICAgIGVtYWlsVXBkYXRlKHRleHQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZW1haWxfZGF0YSA9IHRleHQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEpO1xyXG4gICAgfVxyXG4gICAgcGFzc3dvcmRVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZF9kYXRhID0gdGV4dDtcclxuICAgIH1cclxuICAgIGxvYWRzaWduaW4oKSB7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpLnRoZW4oIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2VycycpLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNuYXBzaG90LmNoaWxkKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydsaWZlJ10gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFsnZW1haWwnXSA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2xldmVsMSddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2xldmVsMiddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBhW2ZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWRdID0gdG1wO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJykudXBkYXRlKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWxlcnQoJ1NpZ24gaW4gc3VjY2Vzcy4nKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2Fkc2lnbnVwKCkge1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSk7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSkudGhlbiggKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzJykub25jZShcInZhbHVlXCIpLnRoZW4oIChzbmFwc2hvdCk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihzbmFwc2hvdC5jaGlsZChmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkKS5leGlzdHMoKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFsnbGlmZSddID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydsZXZlbDEnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydsZXZlbDInXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkXSA9IHRtcDtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycpLnVwZGF0ZShhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTaWduIHVwIHN1Y2Nlc3MuJyk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG5cclxuIl19