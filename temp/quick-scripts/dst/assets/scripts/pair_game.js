
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFpcl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOEZDO1FBM0ZHLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBVyxJQUFJLENBQUM7UUFDbkIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixTQUFHLEdBQVcsSUFBSSxDQUFDOztJQXVGL0IsQ0FBQztJQXJGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUNmLHlCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLElBQUk7WUFDcEMsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkM7aUJBQUk7Z0JBQ0QsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBb0JDO1FBbkJHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzNELElBQUcsS0FBSSxDQUFDLElBQUksRUFBQztnQkFDVCxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztnQkFDbkUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakM7O2dCQUFLLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN6RCxJQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUM7Z0JBQ1QsS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBQ25FLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDOztnQkFBSyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDekQsSUFBSSxHQUFHLEdBQVcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ25DLDhEQUE4RDtRQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFnQkM7UUFmRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBUTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLElBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFDO2dCQUNqQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4Qyw2Q0FBNkM7Z0JBQzdDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDOztnQkFBTSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxxQ0FBcUM7SUFDekMsQ0FBQztJQUVELGdCQUFnQjtJQUVoQixJQUFJO0lBRUosMkJBQVEsR0FBUjtRQUNJLDZDQUE2QztRQUM3QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQUEsaUJBY0M7UUFiRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBUTtZQUNsRSxJQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO2lCQUFJO2dCQUNELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsc0NBQXNDO0lBQzFDLENBQUM7SUExRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDVTtJQUhkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4RjVCO0lBQUQsZUFBQztDQTlGRCxBQThGQyxDQTlGcUMsRUFBRSxDQUFDLFNBQVMsR0E4RmpEO2tCQTlGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgaW52aXRlX2NvZGU6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB1aWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBraWNrOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZyA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmKHVzZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMudWlkID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZDtcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IHRoaXMudWlkLnN1YnN0cmluZygwLCA1KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMua2ljayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L0NyZWF0ZVwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmtpY2spe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTXVsdGlwbGF5ZXIgaXMgbm90IGFjY2Vzc2libGUgd2hlbiB5b3UgYXJlIG5vdCBzaWduZWQgaW4uXCIpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xuICAgICAgICAgICAgfWVsc2UgdGhpcy5tYWtlR2FtZSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L0pvaW5cIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5raWNrKXtcbiAgICAgICAgICAgICAgICBhbGVydChcIk11bHRpcGxheWVyIGlzIG5vdCBhY2Nlc3NpYmxlIHdoZW4geW91IGFyZSBub3Qgc2lnbmVkIGluLlwiKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcbiAgICAgICAgICAgIH1lbHNlIHRoaXMuam9pbkdhbWUoKVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L2JhY2tcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGtleTogc3RyaW5nID0gdGhpcy51aWQuc3Vic3RyaW5nKDAsIDUpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsga2V5KS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnVpZCkucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmludml0ZV9jb2RlLnN0cmluZyA9ICcnO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIG1ha2VHYW1lKCl7XG4gICAgICAgIHRoaXMuaW52aXRlX2NvZGUuc3RyaW5nID0gdGhpcy5rZXk7XG4gICAgICAgIC8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd3YWl0aW5nX3Jvb20vJyArIHRoaXMua2V5KS5zZXQoMCk7XG4gICAgICAgIHRoaXMubWFrZXJfbG9hZCgpO1xuICAgIH1cblxuICAgIG1ha2VyX2xvYWQoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlciBjYWxsZWRcIik7XG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd3YWl0aW5nX3Jvb20vJyArIHRoaXMua2V5KS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xuICAgICAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpe1xuICAgICAgICAgICAgICAgIHZhciBqb2luZXIgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgam9pbmVyICsgJy9jcmVhdG9yJykuc2V0KDApO1xuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd3YWl0aW5nX3Jvb20vJyArIHRoaXMua2V5KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyaW5nIGdhbWUgYXMgY3JlYXRvclwiKTtcbiAgICAgICAgICAgICAgICAvLyByZW1lYmVyIHNlbGYgYXMgY3JlYXRvciwgdGhlbiBjaGFuZ2Ugc2NlbmVcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCAxKTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyb29tXCIsIGpvaW5lcik7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aScpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubWFrZXJfbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5tYWtlcl9sb2FkLCAzMDApO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHtcblxuICAgIC8vIH1cblxuICAgIGpvaW5HYW1lKCl7XG4gICAgICAgIC8vIHZhciBrZXk6IHN0cmluZyA9IHRoaXMuaW52aXRlX2NvZGUuc3RyaW5nO1xuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignd2FpdGluZ19yb29tLycgKyB0aGlzLmludml0ZV9jb2RlLnN0cmluZykuc2V0KHRoaXMudWlkKTtcbiAgICAgICAgdGhpcy5qb2luZXJfbG9hZCgpO1xuICAgIH1cblxuICAgIGpvaW5lcl9sb2FkKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiam9pbmVyIGNhbGxlZFwiKTtcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMudWlkKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRvciBoYXMgam9pbmVkXCIpO1xuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnVpZCArICcvam9pbmVyJykuc2V0KDApO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIDApO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJvb21cIiwgdGhpcy51aWQpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGknKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuam9pbmVyX2xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldEludGVydmFsKHRoaXMuam9pbmVyX2xvYWQsIDMwMCk7XG4gICAgfVxufVxuIl19