
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RhcnRfc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBZ0lBLENBQUM7SUF6SEcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNuRixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUU7WUFDWCxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ1gsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTiwyQ0FBMkM7UUFFM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFD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TSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUVoRDtnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFTLEtBQUs7WUFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9IZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWdJL0I7SUFBRCxrQkFBQztDQWhJRCxBQWdJQyxDQWhJd0MsRUFBRSxDQUFDLFNBQVMsR0FnSXBEO2tCQWhJb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnRfc2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgZW1haWxfZGF0YTogc3RyaW5nO1xuICAgIHBhc3N3b3JkX2RhdGE6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHVpZDogc3RyaW5nO1xuXG4gICAgb25sb2FkKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICBpZihmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkKSB0aGlzLnVpZCA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQ7XG4gICAgfVxuIFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgdmFyIGNvdW50ID0gNDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSggKCk9PiB7XG4gICAgICAgICAgICBjb3VudCAtPSAxO1xuICAgICAgICAgICAgY2MuZmluZCgnYmFja2dyb3VuZC9udW1iZXInKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIH0sIDEsIDQpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+IHtcbiAgICAgICAgICAgIGNjLmZpbmQoJ2JhY2tncm91bmQnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgNCk7XG5cbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xuXG4gICAgICAgIHRoaXMuZW1haWxfZGF0YSA9IFwiXCI7XG4gICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBcIlwiO1xuXG4gICAgICAgIHZhciBlbWFpbCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGVtYWlsLnRhcmdldCA9IHRoaXMubm9kZTsgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcbiAgICAgICAgZW1haWwuY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiXG4gICAgICAgIGVtYWlsLmhhbmRsZXIgPSBcImVtYWlsVXBkYXRlXCI7XG4gICAgICAgIGVtYWlsLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvRW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnRleHRDaGFuZ2VkLnB1c2goZW1haWwpO1xuXG4gICAgICAgIHZhciBuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgbi50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XG4gICAgICAgIG4uY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiXG4gICAgICAgIG4uaGFuZGxlciA9IFwibmFtZVVwZGF0ZVwiO1xuICAgICAgICBuLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTmFtZVwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkudGV4dENoYW5nZWQucHVzaChuKTtcblxuICAgICAgICB2YXIgcGFzc3dvcmQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBwYXNzd29yZC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XG4gICAgICAgIHBhc3N3b3JkLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIlxuICAgICAgICBwYXNzd29yZC5oYW5kbGVyID0gXCJwYXNzd29yZFVwZGF0ZVwiO1xuICAgICAgICBwYXNzd29yZC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKHBhc3N3b3JkKTtcblxuICAgICAgICBsZXQgc2lnbmluID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgc2lnbmluLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgc2lnbmluLmNvbXBvbmVudCA9IFwic3RhcnRfc2NlbmVcIjtcbiAgICAgICAgc2lnbmluLmhhbmRsZXIgPSBcImxvYWRzaWduaW5cIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduSW5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduaW4pO1xuXG4gICAgICAgIGxldCBzaWdudXAgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzaWdudXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBzaWdudXAuY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiO1xuICAgICAgICBzaWdudXAuaGFuZGxlciA9IFwibG9hZHNpZ251cFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ251cCk7IFxuXG4gICAgfVxuICAgIGVtYWlsVXBkYXRlKHRleHQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSB0ZXh0O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1haWxfZGF0YSk7XG4gICAgfVxuICAgIG5hbWVVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB0ZXh0O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1haWxfZGF0YSk7XG4gICAgfVxuICAgIHBhc3N3b3JkVXBkYXRlKHRleHQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSB0ZXh0O1xuICAgIH1cbiAgICBsb2Fkc2lnbmluKCkge1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpLnRoZW4oIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMnKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc25hcHNob3QuY2hpbGQodGhpcy51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdG1wWydjb2lucyddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdG1wWydlbWFpbCddID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmVtYWlsO1xuICAgICAgICAgICAgICAgICAgICB0bXBbJ2hpZ2hzY29yZSddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lKVxuICAgICAgICAgICAgICAgICAgICB0bXBbJ25hbWUnXSA9IHRoaXMudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0geydsZWdvJzowLCAnYmFuYW5hJzogMCwgJ2NvbG9yJzogezE6IHRydWUsIDI6IGZhbHNlLCAzOiBmYWxzZSwgNDogZmFsc2UsIDU6IGZhbHNlfSwgJ3Bvd2VydXAnOiAwLCAnc2lnbmFsJzogMCwgJ211dGUnOiAwfVxuICAgICAgICAgICAgICAgICAgICB0bXBbJ3RoaW5nJ10gPSB0O1xuICAgICAgICAgICAgICAgICAgICBhW3RoaXMudWlkXSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nKS51cGRhdGUoYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2Fkc2lnbnVwKCkge1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lKTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSkudGhlbiggKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2VycycpLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKCAoc25hcHNob3QpPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNuYXBzaG90LmNoaWxkKHRoaXMudWlkKS5leGlzdHMoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnY29pbnMnXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnZW1haWwnXSA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbDtcbiAgICAgICAgICAgICAgICAgICAgdG1wWydoaWdoc2NvcmUnXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRtcFsnbmFtZSddID0gdGhpcy51c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lLCB0aGlzLmVtYWlsX2RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOnRydWUsIDI6IGZhbHNlLCAzOiBmYWxzZSwgNDogZmFsc2UsIDU6IGZhbHNlfSwgJ3Bvd2VydXAnOiAwLCAnc2lnbmFsJzogMCwgJ211dGUnOiAwfVxuICAgICAgICAgICAgICAgICAgICB0bXBbJ3RoaW5nJ10gPSB0O1xuICAgICAgICAgICAgICAgICAgICBhW2ZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWRdID0gdG1wO1xuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycpLnVwZGF0ZShhKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gXG59XG5cblxuIl19