
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pair_game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c676ei8t6JMzZCzLvA9kLsr', 'pair_game');
// scripts/pair_game.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invite_code = null;
        _this.uid = null;
        _this.kick = false;
        _this.key = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.uid = firebase.auth().currentUser.uid;
                _this.key = _this.uid.substring(0, 5);
            }
            else {
                _this.kick = true;
            }
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        cc.find("Canvas/root/Create").on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.kick) {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
            else
                _this.makeGame();
        }, this);
        cc.find("Canvas/root/Join").on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.kick) {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
            else
                _this.joinGame();
        }, this);
        cc.find("Canvas/root/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            var key = _this.uid.substring(0, 5);
            firebase.database().ref('waiting_room/' + key).remove();
            firebase.database().ref('in_game/' + _this.uid).remove();
            _this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    };
    NewClass.prototype.makeGame = function () {
        this.invite_code.string = this.key;
        // firebase.database().ref('waiting_room/' + this.key).set(0);
        this.maker_load();
    };
    NewClass.prototype.maker_load = function () {
        var _this = this;
        console.log("maker called");
        firebase.database().ref('waiting_room/' + this.key).once('value', function (snapshot) {
            console.log(snapshot.val());
            if (snapshot.exists()) {
                var joiner = snapshot.val();
                firebase.database().ref('in_game/' + joiner + '/creator').set(0);
                firebase.database().ref('waiting_room/' + _this.key).remove();
                console.log("entering game as creator");
                // remeber self as creator, then change scene
                cc.sys.localStorage.setItem("id", 1);
                cc.sys.localStorage.setItem("room", joiner);
                cc.director.loadScene('multi');
            }
            else
                _this.maker_load();
        });
        // setInterval(this.maker_load, 300);
    };
    // update (dt) {
    // }
    NewClass.prototype.joinGame = function () {
        // var key: string = this.invite_code.string;
        firebase.database().ref('waiting_room/' + this.invite_code.string).set(this.uid);
        this.joiner_load();
    };
    NewClass.prototype.joiner_load = function () {
        var _this = this;
        console.log("joiner called");
        firebase.database().ref('in_game/' + this.uid).once('value', function (snapshot) {
            if (snapshot.exists()) {
                console.log("creator has joined");
                firebase.database().ref('in_game/' + _this.uid + '/joiner').set(0);
                cc.sys.localStorage.setItem("id", 0);
                cc.sys.localStorage.setItem("room", _this.uid);
                cc.director.loadScene('multi');
            }
            else {
                _this.joiner_load();
            }
        });
        // setInterval(this.joiner_load, 300);
    };
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "invite_code", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BhaXJfZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThGQztRQTNGRyxpQkFBVyxHQUFlLElBQUksQ0FBQztRQUV2QixTQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFVBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsU0FBRyxHQUFXLElBQUksQ0FBQzs7SUF1Ri9CLENBQUM7SUFyRkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsVUFBQyxJQUFJO1lBQ3BDLElBQUcsSUFBSSxFQUFDO2dCQUNKLEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFJO2dCQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUFBLGlCQW9CQztRQW5CRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUMzRCxJQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUM7Z0JBQ1QsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBQ25FLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDOztnQkFBSyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDekQsSUFBRyxLQUFJLENBQUMsSUFBSSxFQUFDO2dCQUNULEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2dCQUNuRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQzs7Z0JBQUssS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ3pELElBQUksR0FBRyxHQUFXLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQyw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQUEsaUJBZ0JDO1FBZkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM1QixJQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQztnQkFDakIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDeEMsNkNBQTZDO2dCQUM3QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsQzs7Z0JBQU0sS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gscUNBQXFDO0lBQ3pDLENBQUM7SUFFRCxnQkFBZ0I7SUFFaEIsSUFBSTtJQUVKLDJCQUFRLEdBQVI7UUFDSSw2Q0FBNkM7UUFDN0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUFBLGlCQWNDO1FBYkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7WUFDbEUsSUFBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNsQztpQkFBSTtnQkFDRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILHNDQUFzQztJQUMxQyxDQUFDO0lBMUZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ1U7SUFIZCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEY1QjtJQUFELGVBQUM7Q0E5RkQsQUE4RkMsQ0E5RnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEZqRDtrQkE5Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGludml0ZV9jb2RlOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUga2ljazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUga2V5OiBzdHJpbmcgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZih1c2VyKXtcbiAgICAgICAgICAgICAgICB0aGlzLnVpZCA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSB0aGlzLnVpZC5zdWJzdHJpbmcoMCwgNSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9DcmVhdGVcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5raWNrKXtcbiAgICAgICAgICAgICAgICBhbGVydChcIk11bHRpcGxheWVyIGlzIG5vdCBhY2Nlc3NpYmxlIHdoZW4geW91IGFyZSBub3Qgc2lnbmVkIGluLlwiKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcbiAgICAgICAgICAgIH1lbHNlIHRoaXMubWFrZUdhbWUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9Kb2luXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMua2ljayl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNdWx0aXBsYXllciBpcyBub3QgYWNjZXNzaWJsZSB3aGVuIHlvdSBhcmUgbm90IHNpZ25lZCBpbi5cIik7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgICAgICAgICB9ZWxzZSB0aGlzLmpvaW5HYW1lKClcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9iYWNrXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcbiAgICAgICAgICAgIHZhciBrZXk6IHN0cmluZyA9IHRoaXMudWlkLnN1YnN0cmluZygwLCA1KTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd3YWl0aW5nX3Jvb20vJyArIGtleSkucmVtb3ZlKCk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy51aWQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5pbnZpdGVfY29kZS5zdHJpbmcgPSAnJztcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBtYWtlR2FtZSgpe1xuICAgICAgICB0aGlzLmludml0ZV9jb2RlLnN0cmluZyA9IHRoaXMua2V5O1xuICAgICAgICAvLyBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignd2FpdGluZ19yb29tLycgKyB0aGlzLmtleSkuc2V0KDApO1xuICAgICAgICB0aGlzLm1ha2VyX2xvYWQoKTtcbiAgICB9XG5cbiAgICBtYWtlcl9sb2FkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFrZXIgY2FsbGVkXCIpO1xuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignd2FpdGluZ19yb29tLycgKyB0aGlzLmtleSkub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcbiAgICAgICAgICAgIGlmKHNuYXBzaG90LmV4aXN0cygpKXtcbiAgICAgICAgICAgICAgICB2YXIgam9pbmVyID0gc25hcHNob3QudmFsKCk7XG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIGpvaW5lciArICcvY3JlYXRvcicpLnNldCgwKTtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignd2FpdGluZ19yb29tLycgKyB0aGlzLmtleSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmluZyBnYW1lIGFzIGNyZWF0b3JcIik7XG4gICAgICAgICAgICAgICAgLy8gcmVtZWJlciBzZWxmIGFzIGNyZWF0b3IsIHRoZW4gY2hhbmdlIHNjZW5lXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgMSk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicm9vbVwiLCBqb2luZXIpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGknKTtcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLm1ha2VyX2xvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldEludGVydmFsKHRoaXMubWFrZXJfbG9hZCwgMzAwKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7XG5cbiAgICAvLyB9XG5cbiAgICBqb2luR2FtZSgpe1xuICAgICAgICAvLyB2YXIga2V5OiBzdHJpbmcgPSB0aGlzLmludml0ZV9jb2RlLnN0cmluZztcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsgdGhpcy5pbnZpdGVfY29kZS5zdHJpbmcpLnNldCh0aGlzLnVpZCk7XG4gICAgICAgIHRoaXMuam9pbmVyX2xvYWQoKTtcbiAgICB9XG5cbiAgICBqb2luZXJfbG9hZCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImpvaW5lciBjYWxsZWRcIik7XG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnVpZCkub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGlmKHNuYXBzaG90LmV4aXN0cygpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0b3IgaGFzIGpvaW5lZFwiKTtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy51aWQgKyAnL2pvaW5lcicpLnNldCgwKTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCAwKTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyb29tXCIsIHRoaXMudWlkKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5lcl9sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbCh0aGlzLmpvaW5lcl9sb2FkLCAzMDApO1xuICAgIH1cbn1cbiJdfQ==