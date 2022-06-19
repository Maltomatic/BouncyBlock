
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
            cc.director.loadScene('menu');
        }, this);
    };
    NewClass.prototype.makeGame = function () {
        this.invite_code.string = this.uid.substring(0, 5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFpcl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBcUMvQixDQUFDO0lBbkNHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2YseUJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFVBQUMsSUFBSTtZQUNwQyxJQUFHLElBQUksRUFBQztnQkFDSixLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQzlDO2lCQUFJO2dCQUNELEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2dCQUNuRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkFVQztRQVRHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUNoRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdkQsQ0FBQztJQUVELGlCQUFpQjtJQUNqQiwyQkFBUSxHQUFSO1FBQ0ksRUFBRTtJQUNOLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDVTtJQUhkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgaW52aXRlX2NvZGU6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTXVsdGlwbGF5ZXIgaXMgbm90IGFjY2Vzc2libGUgd2hlbiB5b3UgYXJlIG5vdCBzaWduZWQgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zaWduaW5fZGF0YS9DcmVhdGVcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VHYW1lKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zaWduaW5fZGF0YS9Kb2luXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5qb2luR2FtZSgpXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zaWduaW5fZGF0YS9iYWNrXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUdhbWUoKXtcclxuICAgICAgICB0aGlzLmludml0ZV9jb2RlLnN0cmluZyA9IHRoaXMudWlkLnN1YnN0cmluZygwLCA1KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgam9pbkdhbWUoKXtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59XHJcbiJdfQ==