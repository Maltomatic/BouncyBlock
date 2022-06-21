
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
        //cc.audioEngine.playMusic(this.bgm, true);
        cc.find("Canvas/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            cc.director.loadScene('menu');
        }, this);
        this.email_data = "";
        this.password_data = "";
        this.username = "";
        /*
                // var email = new cc.Component.EventHandler();
                // email.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                // email.component = "start_scene"
                // email.handler = "emailUpdate";
                // email.customEventData = "foobar";
                // cc.find("Canvas/Email").getComponent(cc.EditBox).textChanged.push(email);
        
                // var n = new cc.Component.EventHandler();
                // n.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                // n.component = "start_scene"
                // n.handler = "nameUpdate";
                // n.customEventData = "foobar";
                // cc.find("Canvas/Name").getComponent(cc.EditBox).textChanged.push(n);
        
                // var password = new cc.Component.EventHandler();
                // password.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                // password.component = "start_scene"
                // password.handler = "passwordUpdate";
                // password.customEventData = "foobar";
                // cc.find("Canvas/Password").getComponent(cc.EditBox).textChanged.push(password);
        */
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
    /*
    // emailUpdate(text, editbox, customEventData) {
    //     this.email_data = text;
    //     //console.log(this.email_data);
    // }
    // nameUpdate(text, editbox, customEventData) {
    //     this.username = text;
    //     //console.log(this.email_data);
    // }
    // passwordUpdate(text, editbox, customEventData) {
    //     this.password_data = text;
    // }
    */
    start_scene.prototype.loadsignin = function () {
        var _this = this;
        this.password_data = cc.find("Canvas/Password").getComponent(cc.EditBox).string;
        this.email_data = cc.find("Canvas/Email").getComponent(cc.EditBox).string;
        //cc.audioEngine.playEffect(this.press, false);
        firebase.auth().signInWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            /*
                // firebase.database().ref('/users').once("value").then( (snapshot) => {
                    // if(snapshot.child(this.uid).exists() == false) {
                    //     var a = {};
                    //     var tmp = {};
                    //     tmp['coins'] = 0;
                    //     tmp['email'] = firebase.auth().currentUser.email;
                    //     tmp['highscore'] = 0;
                    //     console.log('name = ', this.username)
                    //     tmp['name'] = this.username;
                    //     var t = {'lego':0, 'banana': 0, 'color': {1: true, 2: false, 3: false, 4: false, 5: false}, 'powerup': 0, 'signal': 0, 'mute': 0}
                    //     tmp['thing'] = t;
                    //     a[this.uid] = tmp;
                    //     firebase.database().ref('/users/').update(a);
                    // }
                    // this.scheduleOnce(()=>{
            */
            _this.password_data = '';
            _this.email_data = '';
            cc.director.loadScene("menu");
            // }, 1);
            // });
        }).catch(function (error) {
            alert(error);
        });
    };
    start_scene.prototype.loadsignup = function () {
        var _this = this;
        this.username = cc.find("Canvas/Name").getComponent(cc.EditBox).string;
        this.password_data = cc.find("Canvas/Password").getComponent(cc.EditBox).string;
        this.email_data = cc.find("Canvas/Email").getComponent(cc.EditBox).string;
        //cc.audioEngine.playEffect(this.press, false);
        //console.log(this.email_data, this.password_data);
        console.log('name = ', this.username);
        if (this.username == '') {
            alert('Username cannot be empty.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            // firebase.database().ref('/users').once("value").then( (snapshot)=> {
            // if(snapshot.child(result.uid).exists() == false) {
            var tmp = {};
            tmp['coins'] = 0;
            tmp['email'] = _this.email_data; //firebase.auth().currentUser.email;
            tmp['highscore'] = 0;
            tmp['name'] = _this.username;
            console.log('name = ', _this.username, _this.email_data);
            var t = { 'lego': 0, 'banana': 0, 'color': { 1: true, 2: false, 3: false, 4: false, 5: false }, 'powerup': 0, 'signal': 0, 'mute': 0 };
            tmp['thing'] = t;
            firebase.database().ref('/users/' + result.user.uid).set(tmp, function () {
                _this.loadsignin();
            });
            //     }
            // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RhcnRfc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBcUlBLENBQUM7SUE5SEcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNuRixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLDJDQUEyQztRQUMzQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXFCRTtRQUNNLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElB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LFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxSS9CO0lBQUQsa0JBQUM7Q0FySUQsQUFxSUMsQ0FySXdDLEVBQUUsQ0FBQyxTQUFTLEdBcUlwRDtrQkFySW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0X3NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBlbWFpbF9kYXRhOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZF9kYXRhOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgdWlkOiBzdHJpbmc7XHJcblxyXG4gICAgb25sb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgaWYoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkgdGhpcy51aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xyXG4gICAgfVxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiXCI7XHJcbi8qXHJcbiAgICAgICAgLy8gdmFyIGVtYWlsID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvLyBlbWFpbC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgLy8gZW1haWwuY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiXHJcbiAgICAgICAgLy8gZW1haWwuaGFuZGxlciA9IFwiZW1haWxVcGRhdGVcIjtcclxuICAgICAgICAvLyBlbWFpbC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvRW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnRleHRDaGFuZ2VkLnB1c2goZW1haWwpO1xyXG5cclxuICAgICAgICAvLyB2YXIgbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy8gbi50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgLy8gbi5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCJcclxuICAgICAgICAvLyBuLmhhbmRsZXIgPSBcIm5hbWVVcGRhdGVcIjtcclxuICAgICAgICAvLyBuLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9OYW1lXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKG4pO1xyXG5cclxuICAgICAgICAvLyB2YXIgcGFzc3dvcmQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8vIHBhc3N3b3JkLnRhcmdldCA9IHRoaXMubm9kZTsgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICAvLyBwYXNzd29yZC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCJcclxuICAgICAgICAvLyBwYXNzd29yZC5oYW5kbGVyID0gXCJwYXNzd29yZFVwZGF0ZVwiO1xyXG4gICAgICAgIC8vIHBhc3N3b3JkLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9QYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkudGV4dENoYW5nZWQucHVzaChwYXNzd29yZCk7XHJcbiovXHJcbiAgICAgICAgbGV0IHNpZ25pbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2lnbmluLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWduaW4uY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiO1xyXG4gICAgICAgIHNpZ25pbi5oYW5kbGVyID0gXCJsb2Fkc2lnbmluXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduSW5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduaW4pO1xyXG5cclxuICAgICAgICBsZXQgc2lnbnVwID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWdudXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ251cC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCI7XHJcbiAgICAgICAgc2lnbnVwLmhhbmRsZXIgPSBcImxvYWRzaWdudXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ251cCk7IFxyXG5cclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAvLyBlbWFpbFVwZGF0ZSh0ZXh0LCBlZGl0Ym94LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgIC8vICAgICB0aGlzLmVtYWlsX2RhdGEgPSB0ZXh0O1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2codGhpcy5lbWFpbF9kYXRhKTtcclxuICAgIC8vIH1cclxuICAgIC8vIG5hbWVVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgdGhpcy51c2VybmFtZSA9IHRleHQ7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcGFzc3dvcmRVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wYXNzd29yZF9kYXRhID0gdGV4dDtcclxuICAgIC8vIH1cclxuICAgICovXHJcbiAgICBsb2Fkc2lnbmluKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9IGNjLmZpbmQoXCJDYW52YXMvUGFzc3dvcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSBjYy5maW5kKFwiQ2FudmFzL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpLnRoZW4oIChyZXN1bHQpID0+IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAvLyBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzJykub25jZShcInZhbHVlXCIpLnRoZW4oIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoc25hcHNob3QuY2hpbGQodGhpcy51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdG1wID0ge307XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG1wWydjb2lucyddID0gMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG1wWydoaWdoc2NvcmUnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRtcFsnbmFtZSddID0gdGhpcy51c2VybmFtZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOiB0cnVlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdwb3dlcnVwJzogMCwgJ3NpZ25hbCc6IDAsICdtdXRlJzogMH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB0bXBbJ3RoaW5nJ10gPSB0O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFbdGhpcy51aWRdID0gdG1wO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJykudXBkYXRlKGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWxfZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB9LCAxKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2Fkc2lnbnVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBjYy5maW5kKFwiQ2FudmFzL05hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSBjYy5maW5kKFwiQ2FudmFzL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5lbWFpbF9kYXRhID0gY2MuZmluZChcIkNhbnZhcy9FbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICBpZih0aGlzLnVzZXJuYW1lID09ICcnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGNhbm5vdCBiZSBlbXB0eS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKS50aGVuKCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMnKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KT0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHNuYXBzaG90LmNoaWxkKHJlc3VsdC51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFsnY29pbnMnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydlbWFpbCddID0gdGhpcy5lbWFpbF9kYXRhOyAvL2ZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2hpZ2hzY29yZSddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ25hbWUnXSA9IHRoaXMudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lLCB0aGlzLmVtYWlsX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0geydsZWdvJzowLCAnYmFuYW5hJzogMCwgJ2NvbG9yJzogezE6dHJ1ZSwgMjogZmFsc2UsIDM6IGZhbHNlLCA0OiBmYWxzZSwgNTogZmFsc2V9LCAncG93ZXJ1cCc6IDAsICdzaWduYWwnOiAwLCAnbXV0ZSc6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWyd0aGluZyddID0gdDtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyByZXN1bHQudXNlci51aWQpLnNldCh0bXAsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRzaWduaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuIl19