
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.uid = firebase.auth().currentUser.uid;
            }
            else {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        cc.find("Canvas/signin_data/Create").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.makeGame();
        }, this);
        cc.find("Canvas/signin_data/Join").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.joinGame();
        }, this);
        cc.find("Canvas/signin_data/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    };
    NewClass.prototype.makeGame = function () {
        var key = this.uid.substring(0, 5);
        this.invite_code.string = key;
        firebase.database().ref('waiting_room/' + key).set(0);
        var ref = firebase.database().ref('waiting_room/' + key);
        ref.on('child_changed', function (snapshot) {
            var joiner = snapshot.val();
            ref.remove();
            firebase.database().ref('in_game/' + joiner + '/creator').set(0);
            console.log("entering game as creator");
            // remmeber self as creator, then change scene
            cc.director.loadScene('multi');
        });
    };
    // update (dt) {}
    NewClass.prototype.joinGame = function () {
        //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFpcl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcURDO1FBbERHLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBZ0QvQixDQUFDO0lBOUNHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2YseUJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFVBQUMsSUFBSTtZQUNwQyxJQUFHLElBQUksRUFBQztnQkFDSixLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQzlDO2lCQUFJO2dCQUNELEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2dCQUNuRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUNoRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDaEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxRQUFRO1lBQzdCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDYixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4Qyw4Q0FBOEM7WUFDOUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLDJCQUFRLEdBQVI7UUFDSSxFQUFFO0lBQ04sQ0FBQztJQWpERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNVO0lBSGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFENUI7SUFBRCxlQUFDO0NBckRELEFBcURDLENBckRxQyxFQUFFLENBQUMsU0FBUyxHQXFEakQ7a0JBckRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBpbnZpdGVfY29kZTogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpZCA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQ7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNdWx0aXBsYXllciBpcyBub3QgYWNjZXNzaWJsZSB3aGVuIHlvdSBhcmUgbm90IHNpZ25lZCBpbi5cIik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NpZ25pbl9kYXRhL0NyZWF0ZVwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZUdhbWUoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NpZ25pbl9kYXRhL0pvaW5cIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmpvaW5HYW1lKClcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NpZ25pbl9kYXRhL2JhY2tcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZV9jb2RlLnN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlR2FtZSgpe1xyXG4gICAgICAgIHZhciBrZXk6IHN0cmluZyA9IHRoaXMudWlkLnN1YnN0cmluZygwLCA1KTtcclxuICAgICAgICB0aGlzLmludml0ZV9jb2RlLnN0cmluZyA9IGtleTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignd2FpdGluZ19yb29tLycgKyBrZXkpLnNldCgwKTtcclxuICAgICAgICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsga2V5KTtcclxuICAgICAgICByZWYub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIGpvaW5lciA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICByZWYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyBqb2luZXIgKyAnL2NyZWF0b3InKS5zZXQoMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJpbmcgZ2FtZSBhcyBjcmVhdG9yXCIpO1xyXG4gICAgICAgICAgICAvLyByZW1tZWJlciBzZWxmIGFzIGNyZWF0b3IsIHRoZW4gY2hhbmdlIHNjZW5lXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGknKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbiAgICBqb2luR2FtZSgpe1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn1cclxuIl19