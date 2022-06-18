
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/bird_map_init');
require('./assets/scripts/bird_player');
require('./assets/scripts/bubble_item');
require('./assets/scripts/bubble_item_in_dayscene');
require('./assets/scripts/enemy moving sharp');
require('./assets/scripts/enemy_wrapper');
require('./assets/scripts/light');
require('./assets/scripts/missile');
require('./assets/scripts/parent');
require('./assets/scripts/player');
require('./assets/scripts/root');
require('./assets/scripts/searchlight');
require('./assets/scripts/section_init');
require('./assets/scripts/sharp');
require('./assets/scripts/spider');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bubble_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea24dvDShpMJLD9BwAs0/ri', 'bubble_item');
// scripts/bubble_item.ts

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
var bubble_item = /** @class */ (function (_super) {
    __extends(bubble_item, _super);
    function bubble_item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_Prefabs = null;
        _this.bubble_num = 0;
        _this.bubble_Speed = 0;
        _this.physicManager = null;
        return _this;
    }
    bubble_item.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -500);
        // ----------------------
        this.bubble_num = Math.floor(Math.random() * 3);
        //  this.bubble_show = this.node.getComponent(cc.Sprite);
        this.generate_bubble();
    };
    bubble_item.prototype.start = function () {
        this.bubble_Speed = (Math.random() * 10 + 20);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.bubble_Speed, 0);
    };
    bubble_item.prototype.generate_bubble = function () {
        if (this.bubble_Prefabs == null)
            return;
        var bubble_pre = cc.instantiate(this.bubble_Prefabs);
        bubble_pre.x = this.node.x + 50;
        bubble_pre.y = this.node.y + 30;
        this.scheduleOnce(this.generate_bubble.bind(this), Math.random() * 3 + 10);
        cc.find("Canvas/root").addChild(bubble_pre);
    };
    bubble_item.prototype.update = function (dt) {
        var dis = this.bubble_Speed * dt;
        this.node.x += dis;
    };
    bubble_item.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
    };
    __decorate([
        property(cc.Prefab)
    ], bubble_item.prototype, "bubble_Prefabs", void 0);
    bubble_item = __decorate([
        ccclass
    ], bubble_item);
    return bubble_item;
}(cc.Component));
exports.default = bubble_item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnViYmxlX2l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwQ0M7UUF4Q0csb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsZ0JBQVUsR0FBWSxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDakIsbUJBQWEsR0FBc0IsSUFBSSxDQUFDOztJQW9DcEQsQ0FBQztJQWxDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQseURBQXlEO1FBQ3pELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ3ZDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFFO1FBQ2pDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFFO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ2E7SUFGaEIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBDL0I7SUFBRCxrQkFBQztDQTFDRCxBQTBDQyxDQTFDd0MsRUFBRSxDQUFDLFNBQVMsR0EwQ3BEO2tCQTFDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYnViYmxlX2l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1YmJsZV9QcmVmYWJzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGJ1YmJsZV9udW0gOiBudW1iZXIgPSAwO1xyXG4gICAgYnViYmxlX1NwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyICgwLCAtNTAwKTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5idWJibGVfbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgLy8gIHRoaXMuYnViYmxlX3Nob3cgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZV9idWJibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5idWJibGVfU3BlZWQgPSAoTWF0aC5yYW5kb20oKSAqIDEwICsgMjApO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuYnViYmxlX1NwZWVkLDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZW5lcmF0ZV9idWJibGUoKXsgLy9yYW5kb20gcHJpbnQgYnViYmxlIGFuZCBidWJibGUgbGVnbyBvbiAgY2FudmFzXHJcbiAgICAgICAgaWYodGhpcy5idWJibGVfUHJlZmFicyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGJ1YmJsZV9wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1YmJsZV9QcmVmYWJzKTtcclxuICAgICAgICBidWJibGVfcHJlLnggPSB0aGlzLm5vZGUueCArIDUwIDtcclxuICAgICAgICBidWJibGVfcHJlLnkgPSB0aGlzLm5vZGUueSArIDMwIDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmdlbmVyYXRlX2J1YmJsZS5iaW5kKHRoaXMpLCBNYXRoLnJhbmRvbSgpICogMyArIDEwKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3RcIikuYWRkQ2hpbGQoYnViYmxlX3ByZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBjb25zdCBkaXMgPSB0aGlzLmJ1YmJsZV9TcGVlZCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRpcztcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/enemy moving sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8958wtIKZH/pz7sWUEkBOb', 'enemy moving sharp');
// scripts/enemy moving sharp.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var enemy_moving_sharp = /** @class */ (function (_super) {
    __extends(enemy_moving_sharp, _super);
    function enemy_moving_sharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.now = null;
        _this.next = null;
        _this.physicManager = null;
        return _this;
        // update (dt) {}
    }
    enemy_moving_sharp.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.now = "Up";
        this.next = "DOWN";
    };
    enemy_moving_sharp.prototype.start = function () {
        this.schedule(function () {
            this.changeState();
            // cc.log("Change state: " + this.state);
        }, 0.5);
    };
    enemy_moving_sharp.prototype.changeState = function () {
        switch (this.now) {
            case "Init":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                if (this.next == "Up") {
                    this.now = "Down";
                }
                else
                    this.now = "Up";
                break;
            case "Down":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -60);
                this.now = "Init";
                this.next = "Down";
                break;
            case "Up":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 60);
                this.now = "Init";
                this.next = "Up";
                break;
        }
    };
    enemy_moving_sharp.prototype.onBeginContact = function (contact, self, other) {
    };
    enemy_moving_sharp = __decorate([
        ccclass
    ], enemy_moving_sharp);
    return enemy_moving_sharp;
}(cc.Component));
exports.default = enemy_moving_sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXkgbW92aW5nIHNoYXJwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBNkNDO1FBM0NXLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBdUNoRCxpQkFBaUI7SUFDckIsQ0FBQztJQXRDRyxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFFO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFFO0lBQ3hCLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQix5Q0FBeUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDSSxRQUFPLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztpQkFDckI7O29CQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLE1BQU07WUFDTixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU07U0FDVDtJQUNMLENBQUM7SUFDRCwyQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO0lBQ25DLENBQUM7SUExQ2dCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNkN0QztJQUFELHlCQUFDO0NBN0NELEFBNkNDLENBN0MrQyxFQUFFLENBQUMsU0FBUyxHQTZDM0Q7a0JBN0NvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVuZW15X21vdmluZ19zaGFycCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBub3cgOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBuZXh0IDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7IFxyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm93ID0gXCJVcFwiIDtcclxuICAgICAgICB0aGlzLm5leHQgPSBcIkRPV05cIiA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoKTtcclxuICAgICAgICAgICAvLyBjYy5sb2coXCJDaGFuZ2Ugc3RhdGU6IFwiICsgdGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuICAgIGNoYW5nZVN0YXRlKCl7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMubm93KXtcclxuICAgICAgICAgICAgY2FzZSBcIkluaXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLDApO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5uZXh0ID09IFwiVXBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93ID0gXCJEb3duXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMubm93ID0gXCJVcFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRvd25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAtNjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3cgPSBcIkluaXRcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IFwiRG93blwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCw2MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdyA9IFwiSW5pdFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0ID0gXCJVcFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikgey8v56Kw5pKeXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bubble_item_in_dayscene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2414Nfm2FM+LvC8kdiGMcR', 'bubble_item_in_dayscene');
// scripts/bubble_item_in_dayscene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var bubble_item = /** @class */ (function (_super) {
    __extends(bubble_item, _super);
    function bubble_item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_Speed = 50;
        _this.physicManager = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    bubble_item.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -500);
        this.bubble_move();
        this.print_bubble();
    };
    bubble_item.prototype.start = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.bubble_Speed, 0);
    };
    bubble_item.prototype.bubble_move = function () {
    };
    bubble_item.prototype.print_bubble = function () {
    };
    bubble_item.prototype.update = function (dt) {
    };
    __decorate([
        property()
    ], bubble_item.prototype, "bubble_Speed", void 0);
    bubble_item = __decorate([
        ccclass
    ], bubble_item);
    return bubble_item;
}(cc.Component));
exports.default = bubble_item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnViYmxlX2l0ZW1faW5fZGF5c2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2QkM7UUEzQkcsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFFbEIsbUJBQWEsR0FBc0IsSUFBSSxDQUFDOztJQXlCcEQsQ0FBQztJQXhCRyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsaUNBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCxrQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQTFCRDtRQURDLFFBQVEsRUFBRTtxREFDZTtJQUZULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E2Qi9CO0lBQUQsa0JBQUM7Q0E3QkQsQUE2QkMsQ0E3QndDLEVBQUUsQ0FBQyxTQUFTLEdBNkJwRDtrQkE3Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJ1YmJsZV9pdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBidWJibGVfU3BlZWQ6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIHByaXZhdGUgcGh5c2ljTWFuYWdlcjogY2MuUGh5c2ljc01hbmFnZXIgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyICgwLCAtNTAwKTtcclxuICAgICAgICB0aGlzLmJ1YmJsZV9tb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5wcmludF9idWJibGUoKTsgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuYnViYmxlX1NwZWVkLDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidWJibGVfbW92ZSgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpbnRfYnViYmxlKCl7IC8vIEBAIHJhbmRvbSBwcmludCBidWJibGUgYW5kIGJ1YmJsZSBsZWdvIG9uIGNhbnZhc1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/enemy_wrapper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7474pQMjlO57fgezzYOLXy', 'enemy_wrapper');
// scripts/enemy_wrapper.ts

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
exports.Light_wrapper = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Light_wrapper = /** @class */ (function (_super) {
    __extends(Light_wrapper, _super);
    function Light_wrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemy = null;
        _this.light = null;
        _this.bullet = null;
        _this.range = 0;
        _this.character = null;
        _this.dir = 1;
        _this.scale_dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.atk = 0;
        _this.state = 0;
        return _this;
    }
    Light_wrapper.prototype.onLoad = function () {
        this.character = cc.find('Canvas/root/character_collection/player');
        cc.director.getPhysicsManager().enabled = true;
    };
    Light_wrapper.prototype.start = function () {
        // console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    };
    Light_wrapper.prototype.update = function (dt) {
        if (this.state == 0) {
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;
            if (this.enemy.position.x <= this.leftbound)
                this.dir = 1;
            else if (this.enemy.position.x >= this.rightbound)
                this.dir = -1;
            this.light.scaleX += dt * this.scale_dir;
            if (this.light.scaleX <= 0.6)
                this.scale_dir = 0.1;
            else if (this.light.scaleX >= 1.2)
                this.scale_dir = -0.1;
        }
        else {
            if (this.enemy.position.x > this.character.position.x + 10)
                this.dir = -1;
            else if (this.enemy.position.x < this.character.position.x - 10)
                this.dir = 1;
            else
                this.dir = 0;
            console.log("track in direction " + this.dir);
            this.enemy.x += 205 * dt * this.dir;
            if (this.state == 1)
                this.atk = 0;
            else if (this.state == 2) {
                this.atk -= dt;
                if (this.atk < 0) {
                    this.shoot();
                    this.atk = 0.5;
                }
            }
        }
        this.light.x = this.enemy.x;
    };
    Light_wrapper.prototype.shoot = function () {
        // console.log("shooting")
        var bullet = cc.instantiate(this.bullet);
        bullet.setPosition(this.node.x, this.node.y);
        this.node.addChild(bullet);
        bullet.y -= 10;
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - this.node.x), (this.character.y - this.node.y)).normalizeSelf().multiply(cc.v2(800, 800));
        // console.log("create bullet by light at " + this.character.x, this.node.y);
        // cc.find("Canvas/root").addChild(bullet);
    };
    __decorate([
        property(cc.Node)
    ], Light_wrapper.prototype, "enemy", void 0);
    __decorate([
        property(cc.Node)
    ], Light_wrapper.prototype, "light", void 0);
    __decorate([
        property(cc.Prefab)
    ], Light_wrapper.prototype, "bullet", void 0);
    __decorate([
        property
    ], Light_wrapper.prototype, "range", void 0);
    Light_wrapper = __decorate([
        ccclass
    ], Light_wrapper);
    return Light_wrapper;
}(cc.Component));
exports.Light_wrapper = Light_wrapper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXlfd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUE0RUM7UUF6RUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXNEdEIsQ0FBQztJQXBERyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDcEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSw0RkFBNEY7UUFDNUYsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBQztZQUNmLHFFQUFxRTtZQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFFbkMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQ3BELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDeEMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUM3QyxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUMzRDthQUFJO1lBRUQsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbEUsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7O2dCQUN0RSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDcEMsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQzVCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUM7Z0JBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO2dCQUNmLElBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUM7b0JBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2lCQUNsQjthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkssNkVBQTZFO1FBQzdFLDJDQUEyQztJQUMvQyxDQUFDO0lBeEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNLO0lBR3pCO1FBREMsUUFBUTtnREFDUztJQVpULGFBQWE7UUFEekIsT0FBTztPQUNLLGFBQWEsQ0E0RXpCO0lBQUQsb0JBQUM7Q0E1RUQsQUE0RUMsQ0E1RWtDLEVBQUUsQ0FBQyxTQUFTLEdBNEU5QztBQTVFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIExpZ2h0X3dyYXBwZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByYW5nZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRpcjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgc2NhbGVfZGlyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBsZWZ0Ym91bmQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJpZ2h0Ym91bmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBhdGs6IG51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9jaGFyYWN0ZXJfY29sbGVjdGlvbi9wbGF5ZXInKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IGluaXQgd2l0aCByYW5nZTogXCIgKyB0aGlzLnJhbmdlICsgXCIgIGF0IFwiICsgdGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Ym91bmQgPSB0aGlzLm5vZGUueCAtIHRoaXMucmFuZ2U7XHJcbiAgICAgICAgdGhpcy5yaWdodGJvdW5kID0gdGhpcy5ub2RlLnggKyB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlID09IDApe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpZ2h0LnNjYWxlWCwgdGhpcy5saWdodC54LCB0aGlzLm5vZGUucG9zaXRpb24ueClcclxuICAgICAgICAgICAgdGhpcy5lbmVteS54ICs9IDcwICogZHQgKiB0aGlzLmRpcjtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8PSB0aGlzLmxlZnRib3VuZCkgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyID0gLTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0LnNjYWxlWCArPSBkdCAqIHRoaXMuc2NhbGVfZGlyXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGlnaHQuc2NhbGVYIDw9IDAuNikgdGhpcy5zY2FsZV9kaXIgPSAwLjE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5saWdodC5zY2FsZVggPj0gMS4yKSB0aGlzLnNjYWxlX2RpciA9IC0wLjE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15LnBvc2l0aW9uLnggPiB0aGlzLmNoYXJhY3Rlci5wb3NpdGlvbi54KzEwKSB0aGlzLmRpciA9IC0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8IHRoaXMuY2hhcmFjdGVyLnBvc2l0aW9uLngtMTApIHRoaXMuZGlyID0gMTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhY2sgaW4gZGlyZWN0aW9uIFwiICsgdGhpcy5kaXIpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15LnggKz0gMjA1ICogZHQgKiB0aGlzLmRpcjtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAxKSB0aGlzLmF0ayA9IDA7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRrIC09IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdGsgPCAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saWdodC54ID0gdGhpcy5lbmVteS54O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG9vdCgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvb3RpbmdcIilcclxuICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xyXG4gICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChidWxsZXQpO1xyXG4gICAgICAgIGJ1bGxldC55IC09IDEwO1xyXG4gICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKCh0aGlzLmNoYXJhY3Rlci54IC0gdGhpcy5ub2RlLngpLCAodGhpcy5jaGFyYWN0ZXIueSAtIHRoaXMubm9kZS55KSkubm9ybWFsaXplU2VsZigpLm11bHRpcGx5KGNjLnYyKDgwMCwgODAwKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGUgYnVsbGV0IGJ5IGxpZ2h0IGF0IFwiICsgdGhpcy5jaGFyYWN0ZXIueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChidWxsZXQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/root.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eb0eVa2iJO2qXjaMqeJlJR', 'root');
// scripts/root.ts

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
exports.root = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var root = /** @class */ (function (_super) {
    __extends(root, _super);
    function root() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color_strip = 0;
        return _this;
    }
    // private player = Player;
    // private sec = Section;
    root.prototype.onLoad = function () {
        this.color_strip = 1 + Math.floor(Math.random() * 5);
    };
    root.prototype.start = function () {
        // this.color_strip = 1 + Math.floor(Math.random() * 5);
        //set background color according to different strips. 
        var skyColorList = [0, 30, 30, 60, 0, 30];
        cc.director.setClearColor(cc.color(skyColorList[this.color_strip], skyColorList[this.color_strip], skyColorList[this.color_strip]));
    };
    root = __decorate([
        ccclass
    ], root);
    return root;
}(cc.Component));
exports.root = root;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFNMUM7SUFBMEIsd0JBQVk7SUFBdEM7UUFBQSxxRUFxQkM7UUFwQkcsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBb0I1QixDQUFDO0lBbEJHLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksd0RBQXdEO1FBRXhELHNEQUFzRDtRQUN0RCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFHdEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEksQ0FBQztJQW5CUSxJQUFJO1FBRGhCLE9BQU87T0FDSyxJQUFJLENBcUJoQjtJQUFELFdBQUM7Q0FyQkQsQUFxQkMsQ0FyQnlCLEVBQUUsQ0FBQyxTQUFTLEdBcUJyQztBQXJCWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJ1xyXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vc2VjdGlvbl9pbml0J1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIHJvb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgY29sb3Jfc3RyaXA6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBwbGF5ZXIgPSBQbGF5ZXI7XHJcbiAgICAvLyBwcml2YXRlIHNlYyA9IFNlY3Rpb247XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmNvbG9yX3N0cmlwID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuY29sb3Jfc3RyaXAgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcblxyXG4gICAgICAgIC8vc2V0IGJhY2tncm91bmQgY29sb3IgYWNjb3JkaW5nIHRvIGRpZmZlcmVudCBzdHJpcHMuIFxyXG4gICAgICAgIHZhciBza3lDb2xvckxpc3QgPSBbMCwgMzAsMzAsNjAsMCwgMzBdXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnNldENsZWFyQ29sb3IoY2MuY29sb3Ioc2t5Q29sb3JMaXN0W3RoaXMuY29sb3Jfc3RyaXBdLCBza3lDb2xvckxpc3RbdGhpcy5jb2xvcl9zdHJpcF0sIHNreUNvbG9yTGlzdFt0aGlzLmNvbG9yX3N0cmlwXSkpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/light.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46fe35ASG1DZ5runFzzwZXY', 'light');
// scripts/light.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.Lightbeam = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lightbeam = /** @class */ (function (_super) {
    __extends(Lightbeam, _super);
    function Lightbeam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.character = null;
        _this.bullet = null;
        _this.alert_level = 0; // 0: don't see   1: stare, pass by  2: attack
        _this.watch = false;
        _this.body = null;
        _this.watch_x = 0;
        _this.watch_y = 0;
        _this.bottom = null;
        _this.raise_timer = 0.25;
        return _this;
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.25): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
        // spotlight 
    }
    // LIFE-CYCLE CALLBACKS:
    Lightbeam.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        this.character = cc.find('Canvas/root/character_collection/player');
        this.bottom = this.node.getChildByName('bottom');
    };
    Lightbeam.prototype.start = function () {
        this.alert_level = 0;
        this.body = this.node.getParent();
        this.watch = false;
    };
    Lightbeam.prototype.onBeginContact = function (contact, self, other) {
        var touch = contact.getWorldManifold().normal;
        if (other.node.name == 'player') {
            // // this.watch_x = other.node.x;
            // // this.watch_y = other.node.y;
            // if(this.watch){
            //     this.watch = false;
            //     this.allclear();
            //     console.log("player left range");
            // }else if(this.watch == false){
            if (self.tag == 15 && this.alert_level == 0) {
                this.watch = false;
                this.allclear();
            }
            else {
                this.watch = true;
                console.log("player entered watch frame");
            }
        }
    };
    // onEndContact(contact, self, other){
    //     if(other.node.name == 'player'){
    //         this.watch = false;
    //         this.alert_level = 0;
    //         console.log("player out of range");
    //         this.allclear();
    //     }
    // }
    Lightbeam.prototype.allclear = function () {
        this.alert_level = 0;
        this.raise_timer = 0.25;
        this.node.getParent().getComponent('enemy_wrapper').state = 0;
        // console.log("nothing to see");
    };
    Lightbeam.prototype.update = function (dt) {
        // if(this.watch)console.log("watching");
        if (this.alert_level == 0 && this.watch) {
            if (!this.character.getComponent('player').hidden) {
                this.alert_level = 1;
                this.raise_timer = 0.25;
                console.log("player is being tracked");
                this.node.getParent().getComponent('enemy_wrapper').state = this.alert_level;
            }
        }
        else if (this.alert_level == 1 && this.watch) {
            this.raise_timer -= dt;
            if (this.node.scaleX < 1.5)
                this.node.scaleX += (1 - this.raise_timer) / 2;
            if (this.raise_timer < 0) {
                var vis = !(this.character.getComponent('player').hidden);
                if (vis) {
                    console.log("raise alert level to attack");
                    this.alert_level = 2;
                    this.node.getParent().getComponent('enemy_wrapper').state = 2;
                }
                else {
                    console.log("cease attack");
                    this.allclear();
                }
            }
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Lightbeam.prototype, "bullet", void 0);
    Lightbeam = __decorate([
        ccclass
    ], Lightbeam);
    return Lightbeam;
}(cc.Component));
exports.Lightbeam = Lightbeam;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBa0dDO1FBaEdXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFRLDhDQUE4QztRQUN0RSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxJQUFJLENBQUM7O1FBOEVuQywwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMkRBQTJEO1FBQzNELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUFuRkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FB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LElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQXBGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBTGhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FrR3JCO0lBQUQsZ0JBQUM7Q0FsR0QsQUFrR0MsQ0FsRzhCLEVBQUUsQ0FBQyxTQUFTLEdBa0cxQztBQWxHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIExpZ2h0YmVhbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgYWxlcnRfbGV2ZWw6IG51bWJlciA9IDA7ICAgICAgICAvLyAwOiBkb24ndCBzZWUgICAxOiBzdGFyZSwgcGFzcyBieSAgMjogYXR0YWNrXHJcbiAgICBwcml2YXRlIHdhdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJvZHk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB3YXRjaF94OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXRjaF95OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3R0b206IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByYWlzZV90aW1lcjogbnVtYmVyID0gMC4yNTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9jaGFyYWN0ZXJfY29sbGVjdGlvbi9wbGF5ZXInKTtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYm90dG9tJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSAncGxheWVyJyl7XHJcbiAgICAgICAgICAgIC8vIC8vIHRoaXMud2F0Y2hfeCA9IG90aGVyLm5vZGUueDtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy53YXRjaF95ID0gb3RoZXIubm9kZS55O1xyXG4gICAgICAgICAgICAvLyBpZih0aGlzLndhdGNoKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGxlZnQgcmFuZ2VcIik7XHJcbiAgICAgICAgICAgIC8vIH1lbHNlIGlmKHRoaXMud2F0Y2ggPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBpZihzZWxmLnRhZyA9PSAxNSAmJiB0aGlzLmFsZXJ0X2xldmVsID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgZW50ZXJlZCB3YXRjaCBmcmFtZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAvLyAgICAgaWYob3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInKXtcclxuICAgIC8vICAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgb3V0IG9mIHJhbmdlXCIpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGFsbGNsZWFyKCl7XHJcbiAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5yYWlzZV90aW1lciA9IDAuMjU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gMDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdGhpbmcgdG8gc2VlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyBpZih0aGlzLndhdGNoKWNvbnNvbGUubG9nKFwid2F0Y2hpbmdcIik7XHJcbiAgICAgICAgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAwICYmIHRoaXMud2F0Y2gpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5oaWRkZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMC4yNTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGlzIGJlaW5nIHRyYWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykuc3RhdGUgPSB0aGlzLmFsZXJ0X2xldmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAxICYmIHRoaXMud2F0Y2gpe1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlX3RpbWVyIC09IGR0O1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYIDwgMS41KSB0aGlzLm5vZGUuc2NhbGVYICs9ICgxLXRoaXMucmFpc2VfdGltZXIpLzI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmFpc2VfdGltZXIgPCAwKXtcclxuICAgICAgICAgICAgICAgIHZhciB2aXMgPSAhKHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuaGlkZGVuKTtcclxuICAgICAgICAgICAgICAgIGlmKHZpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyYWlzZSBhbGVydCBsZXZlbCB0byBhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Vhc2UgYXR0YWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFRPRE8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZWRnZSBkZXRlY3Rpb246IHRpbWUgdGhlIGFtb3VudCBvZiB0aW1lIHRoZSBwbGF5ZXIgdGFrZXMgZnJvbSBhcHBlYXJpbmcgaW4gbGlnaHQgcmFuZ2UgdG8gZXllcyBjbG9zaW5nICh2aXNfdGltZSlcclxuICAgIC8vICh0ID09IDApOiBqdXN0IG1vdmUgYXdheVxyXG4gICAgLy8gZWxzZTogbGlnaHQgc3dpbmcgb3ZlciB0byBwbGF5ZXJcclxuICAgICAgICAvLyAoMCA8IHQgPD0gMC4yNSk6IGhvdmVyIG92ZXIgcGxheWVyIGJyaWVmbHksIHRoZW4gbW92ZSBvblxyXG4gICAgICAgIC8vIGVsc2U6IGF0dGFjayBwbGF5ZXI7IHByb2plY3RpbGUgc3BlZWQgc2hvdWxkIGJlIGVxdWFsIHRvIHBsYXllciBtb3ZlIHNwZWVkIGFuZCBmaXJlIG9uY2UgcGVyIDAuNiB+IDEuMnNlYyBkZXBlbmRpbmcgb24gcGxheWVyIHNjb3JlXHJcbiAgICAgICAgICAgIC8vIHNwb3RsaWdodCBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/parent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '201d1+0To9E0LGUE/g+DzID', 'parent');
// scripts/parent.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.speedup = 0.7;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x = this.node.x;
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var touch = contact.getWorldManifold().normal;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.update = function (dt) {
        this.speedup = 0.7 + 0.003 * parseInt(this.now_score.string); //每得一分加速0.03 //約七百多分會比player快
        this.node.x += this.speedup;
        if (Math.abs(this.node.x - this.before_x) <= 0.3)
            this.jump();
        this.before_x = this.node.x;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "now_score", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0NDO1FBbkNHLGFBQU8sR0FBUSxHQUFHLENBQUM7O1FBa0NuQixpQkFBaUI7SUFDckIsQ0FBQztJQTlCRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFHbEQsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBQ0wseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUcsR0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSw2QkFBNkI7UUFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFFLEdBQUc7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBQ0Qsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0E7SUFIRixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0M1QjtJQUFELGVBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0NqRDtrQkFwQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHNwZWVkdXA6bnVtYmVyPTAuNztcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5vd19zY29yZTpjYy5MYWJlbDtcclxuICAgIGJlZm9yZV94Om51bWJlcjtcclxuICAgIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIHZhciB0b3VjaCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwZWVkdXA9MC43KzAuMDAzKnBhcnNlSW50KHRoaXMubm93X3Njb3JlLnN0cmluZyk7ICAvL+avj+W+l+S4gOWIhuWKoOmAnzAuMDMgLy/ntITkuIPnmb7lpJrliIbmnIPmr5RwbGF5ZXLlv6tcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkdXA7XHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5ub2RlLngtdGhpcy5iZWZvcmVfeCk8PTAuMykgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVfeD10aGlzLm5vZGUueDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBqdW1wKCl7ICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDYwMCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/missile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce3ddykci1AjY3lRk+k7SkP', 'missile');
// scripts/missile.ts

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
exports.Missile = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Missile = /** @class */ (function (_super) {
    __extends(Missile, _super);
    function Missile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tgt_x = 0;
        _this.tgt_y = 0;
        _this.player = null;
        return _this;
    }
    Missile.prototype.onLoad = function () {
        this.player = cc.find('Canvas/root/player');
        this.tgt_x = this.player.x;
        this.tgt_y = this.player.y;
        // var diff = {
        //     'dx': this.player.x - this.node.x,
        //     'dy': this.player.y - this.node.y 
        // };
        // console.log(this.node.angle);
        // var angle = Math.atan2(diff.dy, diff.dx) * 57.2958/4;
        // this.node.angle += angle;
        // console.log(this.node.angle);
    };
    Missile.prototype.start = function () {
        // console.log("bulelt spawn at " + this.node.x, this.node.y);
    };
    Missile.prototype.onPostSolve = function (contact, self, other) {
        if (other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies') {
            // deploy black particles
            this.node.active = false;
            this.node.destroy();
        }
    };
    Missile.prototype.update = function (dt) {
        if (this.node.y < -3500)
            this.node.destroy();
    };
    Missile = __decorate([
        ccclass
    ], Missile);
    return Missile;
}(cc.Component));
exports.Missile = Missile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWlzc2lsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkIsMkJBQVk7SUFBekM7UUFBQSxxRUFxQ0M7UUFuQ1csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBZ0NuQyxDQUFDO0lBOUJHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFM0IsZUFBZTtRQUNmLHlDQUF5QztRQUN6Qyx5Q0FBeUM7UUFDekMsS0FBSztRQUNMLGdDQUFnQztRQUNoQyx3REFBd0Q7UUFDeEQsNEJBQTRCO1FBQzVCLGdDQUFnQztJQUNwQyxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLDhEQUE4RDtJQUNsRSxDQUFDO0lBRUQsNkJBQVcsR0FBWCxVQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUM1QixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUMxSCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQXBDUSxPQUFPO1FBRG5CLE9BQU87T0FDSyxPQUFPLENBcUNuQjtJQUFELGNBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzRCLEVBQUUsQ0FBQyxTQUFTLEdBcUN4QztBQXJDWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE1pc3NpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdGd0X3g6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRndF95OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xyXG4gICAgICAgIHRoaXMudGd0X3ggPSB0aGlzLnBsYXllci54O1xyXG4gICAgICAgIHRoaXMudGd0X3kgPSB0aGlzLnBsYXllci55O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHZhciBkaWZmID0ge1xyXG4gICAgICAgIC8vICAgICAnZHgnOiB0aGlzLnBsYXllci54IC0gdGhpcy5ub2RlLngsXHJcbiAgICAgICAgLy8gICAgICdkeSc6IHRoaXMucGxheWVyLnkgLSB0aGlzLm5vZGUueSBcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5hbmdsZSk7XHJcbiAgICAgICAgLy8gdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaWZmLmR5LCBkaWZmLmR4KSAqIDU3LjI5NTgvNDtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYW5nbGUgKz0gYW5nbGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJidWxlbHQgc3Bhd24gYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9zdFNvbHZlKGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyB8fCBvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicgfHwgb3RoZXIubm9kZS5uYW1lID09ICdlbmVtaWVzJyl7XHJcbiAgICAgICAgICAgIC8vIGRlcGxveSBibGFjayBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPCAtMzUwMCkgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/searchlight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '624693b42NGNrmPyczxPfy+', 'searchlight');
// scripts/searchlight.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.searchlight = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var searchlight = /** @class */ (function (_super) {
    __extends(searchlight, _super);
    function searchlight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchlight_speed = 70;
        _this.range = 50;
        _this.spark = null;
        _this.character = null;
        _this.eye_pos = null;
        _this.lightbeam = null;
        _this.beambottom = null;
        _this.dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.lockon = false;
        // LIFE-CYCLE CALLBACKS:
        _this.physicManager = null;
        return _this;
        // wander(){
        //     cc.tween(this.node).repeatForever(
        //         cc.tween(this.node)
        //         .by(1, {x: this.node.position.x-100})  
        //         .by(1, {x: this.node.position.x+100})
        //     ).start();
        // }
    }
    searchlight.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.character = cc.find('Canvas/root/player');
        // this.wander();
    };
    searchlight.prototype.start = function () {
        console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    };
    searchlight.prototype.update = function (dt) {
        // console.log("alert level: " + this.lightbeam.getComponent('light').alert_level);
        if (this.lightbeam.getComponent('light').alert_level == 0) {
            this.lockon = false;
            console.log("no target");
            this.node.x += this.searchlight_speed * dt * this.dir;
            // this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range/40);
            this.lightbeam.x = this.node.x;
            this.lightbeam.angle += this.dir * 0.2 * this.range / 50;
            if (this.node.x <= this.leftbound)
                this.dir = 1;
            else if (this.node.x >= this.rightbound)
                this.dir = -1;
            if (this.lightbeam.angle > 30)
                this.lightbeam.angle = 30;
            if (this.lightbeam.angle < -30)
                this.lightbeam.angle = -30;
        }
        else {
            console.log("tracking");
            var shift_dir = 0;
            if (this.beambottom.x > this.character.x && this.node.x < this.character.x)
                shift_dir = -1;
            else if (this.beambottom.x < this.character.x && this.node.x > this.character.x)
                shift_dir = 1;
            else if (this.beambottom.x < this.character.x && this.node.x < this.character.x)
                shift_dir = 1;
            else if (this.beambottom.x > this.character.x && this.node.x > this.character.x)
                shift_dir = -1;
            this.node.x += 3 * this.searchlight_speed * dt * shift_dir;
            this.lightbeam.x = this.node.x;
            console.log("player movement [dir, prev_dir]: " + this.character.getComponent('player').dir, this.character.getComponent('player').prev_dir);
            // if(this.lightbeam.getComponent('light').alert_level == 1) shift_dir = (this.character.getComponent('player').dir)? this.character.getComponent('player').prev_dir : this.character.getComponent('player').prev_dir*-1;
            // else shift_dir = this.character.getComponent('player').dir;
            this.lightbeam.angle += 5 * dt * shift_dir;
        }
        this.eye_pos.angle = this.lightbeam.angle;
    };
    __decorate([
        property()
    ], searchlight.prototype, "range", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], searchlight.prototype, "spark", void 0);
    __decorate([
        property(cc.Node)
    ], searchlight.prototype, "eye_pos", void 0);
    __decorate([
        property(cc.Node)
    ], searchlight.prototype, "lightbeam", void 0);
    __decorate([
        property(cc.Node)
    ], searchlight.prototype, "beambottom", void 0);
    searchlight = __decorate([
        ccclass
    ], searchlight);
    return searchlight;
}(cc.Component));
exports.searchlight = searchlight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VhcmNobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBNkVDO1FBM0VXLHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUV2QyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLFdBQUssR0FBdUIsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5CLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHdCQUF3QjtRQUNoQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBNkNoRCxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLDhCQUE4QjtRQUM5QixrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELGlCQUFpQjtRQUVqQixJQUFJO0lBQ1IsQ0FBQztJQXBERyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FB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WSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIHNlYXJjaGxpZ2h0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHNlYXJjaGxpZ2h0X3NwZWVkOiBudW1iZXIgPSA3MDtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICByYW5nZTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgc3BhcmsgOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZXllX3BvcyA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaWdodGJlYW0gOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmVhbWJvdHRvbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGxlZnRib3VuZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGxvY2tvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcclxuICAgICAgICAvLyB0aGlzLndhbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15IGluaXQgd2l0aCByYW5nZTogXCIgKyB0aGlzLnJhbmdlICsgXCIgIGF0IFwiICsgdGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Ym91bmQgPSB0aGlzLm5vZGUueCAtIHRoaXMucmFuZ2U7XHJcbiAgICAgICAgdGhpcy5yaWdodGJvdW5kID0gdGhpcy5ub2RlLnggKyB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFsZXJ0IGxldmVsOiBcIiArIHRoaXMubGlnaHRiZWFtLmdldENvbXBvbmVudCgnbGlnaHQnKS5hbGVydF9sZXZlbCk7XHJcbiAgICAgICAgaWYodGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHRhcmdldFwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlnaHRiZWFtLnggKz0gdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogdGhpcy5kaXIgLyAoMiAqIHRoaXMucmFuZ2UvNDApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0YmVhbS54ID0gdGhpcy5ub2RlLng7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLmFuZ2xlICs9IHRoaXMuZGlyICogMC4yICogdGhpcy5yYW5nZS81MDtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPD0gdGhpcy5sZWZ0Ym91bmQpIHRoaXMuZGlyID0gMTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyID0gLTE7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxpZ2h0YmVhbS5hbmdsZSA+IDMwKSB0aGlzLmxpZ2h0YmVhbS5hbmdsZSA9IDMwO1xyXG4gICAgICAgICAgICBpZih0aGlzLmxpZ2h0YmVhbS5hbmdsZSA8IC0zMCkgdGhpcy5saWdodGJlYW0uYW5nbGUgPSAtMzA7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhY2tpbmdcIik7XHJcbiAgICAgICAgICAgIHZhciBzaGlmdF9kaXIgPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLmJlYW1ib3R0b20ueCA+IHRoaXMuY2hhcmFjdGVyLnggJiYgdGhpcy5ub2RlLnggPCB0aGlzLmNoYXJhY3Rlci54KSBzaGlmdF9kaXIgPSAtMTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmJlYW1ib3R0b20ueCA8IHRoaXMuY2hhcmFjdGVyLnggJiYgdGhpcy5ub2RlLnggPiB0aGlzLmNoYXJhY3Rlci54KSBzaGlmdF9kaXIgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuYmVhbWJvdHRvbS54IDwgdGhpcy5jaGFyYWN0ZXIueCAmJiB0aGlzLm5vZGUueCA8IHRoaXMuY2hhcmFjdGVyLngpIHNoaWZ0X2RpciA9IDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5iZWFtYm90dG9tLnggPiB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54ID4gdGhpcy5jaGFyYWN0ZXIueCkgc2hpZnRfZGlyID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IDMgKiB0aGlzLnNlYXJjaGxpZ2h0X3NwZWVkICogZHQgKiBzaGlmdF9kaXI7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgbW92ZW1lbnQgW2RpciwgcHJldl9kaXJdOiBcIiArIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuZGlyLCB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLnByZXZfZGlyKTtcclxuICAgICAgICAgICAgLy8gaWYodGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsID09IDEpIHNoaWZ0X2RpciA9ICh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmRpcik/IHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykucHJldl9kaXIgOiB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLnByZXZfZGlyKi0xO1xyXG4gICAgICAgICAgICAvLyBlbHNlIHNoaWZ0X2RpciA9IHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuZGlyO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0YmVhbS5hbmdsZSArPSA1ICogZHQgKiBzaGlmdF9kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXllX3Bvcy5hbmdsZSA9IHRoaXMubGlnaHRiZWFtLmFuZ2xlO1xyXG4gICAgfVxyXG4gICAgLy8gd2FuZGVyKCl7XHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5yZXBlYXRGb3JldmVyKFxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAvLyAgICAgICAgIC5ieSgxLCB7eDogdGhpcy5ub2RlLnBvc2l0aW9uLngtMTAwfSkgIFxyXG4gICAgLy8gICAgICAgICAuYnkoMSwge3g6IHRoaXMubm9kZS5wb3NpdGlvbi54KzEwMH0pXHJcbiAgICAvLyAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4fb5zoFvJOybdzPXDOd6jk', 'player');
// scripts/player.ts

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
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.maplist = null;
        _this.sec0 = null;
        _this.sec1 = null;
        _this.sec2 = null;
        _this.sec3 = null;
        _this.sec4 = null;
        _this.sec5 = null;
        _this.sec10 = null;
        _this.sec11 = null;
        _this.sec12 = null;
        _this.sec13 = null;
        _this.sec17 = null;
        _this.sec18 = null;
        _this.sec19 = null;
        _this.Score = null;
        _this.Color = null;
        _this.coin_point = null;
        _this.coin = 0;
        _this.bubble_banana = null;
        _this.banana = 0;
        _this.bubble_lego = null;
        _this.lego = 0;
        _this.banana_Prefabs = null;
        _this.lego_Prefabs = null;
        _this.bubble_powerup = null;
        _this.powerup = 0;
        _this.debug_mode = true;
        _this.hidden = false;
        _this.sec_list = [];
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#edebd3", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
            25: "#562c2c", 26: "#f2542d", 27: "#f5dfbb", 28: "#0e9595", 29: "#127474",
            31: "#8e9aaf", 32: "#cbc0d3", 33: "#efd3d7", 34: "#feeafa", 35: "#dee2ff" };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.setcolor = function () {
        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 6 * this.strip;
        this.color = 1 + Math.floor(Math.random() * 4);
        //console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    };
    Player.prototype.onLoad = function () {
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.dir = 0;
        this.section_count = 0;
    };
    Player.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                //console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * 13);
                //console.log(rand);
                //console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")");
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y < 0)
                    this.on_floor = true;
            }
            if (other.node.group == 'mound') {
                if (other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x /* && !touch.y*/) {
                    this.node.getChildByName('eye').active = false;
                    this.hidden = true;
                    // this.last_x = this.node.x;
                }
            }
        }
        else if (other.node.group == 'coin') { // @@ 
            this.update_coin(1);
            other.node.destroy();
        }
        else if (other.node.group == 'bubble') { // @@ 
            if (other.tag == 1) { // bubble banana
                console.log("banana");
                this.update_banana(1);
                other.node.destroy();
            }
            else if (other.tag == 2) { // bubble lego
                console.log("lego");
                this.update_lego(1);
                other.node.destroy();
            }
            else if (other.tag == 3) { // colorful bubble
                this.update_powerup(1);
                other.node.destroy();
            }
        }
        else if (other.node.name == 'missile') {
            // die
            // deploy white particles
            this.node.active = false;
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
        }
        else if (other.node.name == 'sharp' || other.node.name == 'parent') {
            // die
            // deploy white particles
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
        }
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        //a bug happens when the color of mound is same as the color of player, not solved yet 
        // fixed with mound. player should now check collisions with mound
        if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
        }
        else if (other.node.group == 'mound') {
            if (other.node.getComponent(cc.TiledTile).gid == this.color + this.base) {
                this.node.getChildByName('eye').active = true;
                this.hidden = false;
            }
        }
    };
    Player.prototype.start = function () {
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec10, this.sec11, this.sec12, this.sec13, this.sec17, this.sec18, this.sec19];
        this.score = 0;
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        //-------------------------------------------------
    };
    Player.prototype.update = function (dt) {
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        if (this.fly_state == 1) {
            this.node.x -= this.prev_dir * 0.4;
            this.fly_state = -1;
        }
        else if (this.stick) {
            console.log("stick");
            this.node.x += this.prev_dir * 0.4;
            this.stick = false;
        }
        this.node.scaleX = (this.dir >= 0) ? 1 : -1;
        var dy = this.getComponent(cc.RigidBody).linearVelocity.y;
        //----------sparkle emission rate is 0 when didnt move-----------------------------------------
        if (this.dir != 0 || dy > 10)
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
        else
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 0;
        //----------------------------------------------------
        //---------player spin---------------
        if ((dy > 10) && this.dir == 1)
            this.spin_right();
        else if ((dy > 10) && this.dir == -1)
            this.spin_left();
        else if (this.node.angle != 0)
            this.node.angle = 0;
        //------------------------------------
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    };
    Player.prototype.spin_right = function () {
        this.node.angle -= 12;
    };
    Player.prototype.spin_left = function () {
        this.node.angle += 12;
    };
    Player.prototype.camera_track = function () {
        if (this.fly_state && !this.dir)
            return;
        if (this.node.x < 100)
            this.camera.x = 0;
        else
            this.camera.x = this.node.x - 100;
    };
    Player.prototype.onKeyDown = function (event) {
        if (event.keyCode == cc.macro.KEY.space) {
            if (this.on_floor)
                this.jump();
        }
        if (event.keyCode == cc.macro.KEY.left) {
            this.dir = -1;
            this.prev_dir = this.dir;
        }
        else if (event.keyCode == cc.macro.KEY.right) {
            this.dir = 1;
            this.prev_dir = this.dir;
        }
        if (event.keyCode == cc.macro.KEY.p) {
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }
        else if (event.keyCode == cc.macro.KEY.r) {
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }
        if (event.keyCode == cc.macro.KEY.b && this.banana > 0) { // put banana
            var banana_pre = cc.instantiate(this.banana_Prefabs);
            banana_pre.x = this.node.x;
            banana_pre.y = this.node.y;
            cc.find("Canvas/root").addChild(banana_pre);
            this.update_banana(-1);
        }
        else if (event.keyCode == cc.macro.KEY.l && this.lego > 0) { //  put lego
            var lego_pre = cc.instantiate(this.lego_Prefabs);
            lego_pre.x = this.node.x;
            lego_pre.y = this.node.y - 1;
            cc.find("Canvas/root").addChild(lego_pre);
            this.update_lego(-1);
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.dir = 0;
                break;
            case cc.macro.KEY.right:
                this.dir = 0;
                break;
        }
    };
    Player.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        this.fly_state = 1;
        if (!this.debug_mode)
            this.on_floor = false;
        console.log(this.prev_dir + "fly state: " + this.fly_state);
    };
    Player.prototype.update_coin = function (number) {
        this.coin += number;
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    Player.prototype.update_banana = function (number) {
        this.banana += number;
        this.bubble_banana.getComponent(cc.Label).string = this.banana.toString();
    };
    Player.prototype.update_lego = function (number) {
        this.lego += number;
        this.bubble_lego.getComponent(cc.Label).string = this.lego.toString();
    };
    Player.prototype.update_powerup = function (number) {
        this.powerup += number;
        this.bubble_powerup.getComponent(cc.Label).string = this.powerup.toString();
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "maplist", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec0", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec5", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec10", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec11", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec12", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec13", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec17", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec18", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec19", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "Score", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "Color", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "coin_point", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bubble_banana", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bubble_lego", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "banana_Prefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "lego_Prefabs", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bubble_powerup", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQW9VQztRQWpVRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzdCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7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UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkcsbURBQW1EO0lBQ3ZELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFB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eEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNhO0lBSS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1c7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDYTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2M7SUE1RHZCLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0FvVWxCO0lBQUQsYUFBQztDQXBVRCxBQW9VQyxDQXBVMkIsRUFBRSxDQUFDLFNBQVMsR0FvVXZDO0FBcFVZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXBsaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzExOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5fcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgIFxyXG4gICAgY29pbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1YmJsZV9iYW5hbmEgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBiYW5hbmE6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfbGVnbyA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIGxlZ286IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhbmFuYV9QcmVmYWJzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxlZ29fUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfcG93ZXJ1cCA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIHBvd2VydXA6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZGVidWdfbW9kZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNlY19saXN0ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZXZfZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcclxuICAgIHByaXZhdGUgb25fZmxvb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzdGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VjdGlvbl9jb3VudCA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb2xvcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmlwOiBudW1iZXIgPSAwO1xyXG4gICAgYmFzZTogbnVtYmVyID0gMDtcclxuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcclxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXHJcbiAgICAxMzpcIiMxYzMxNDRcIiwgMTQ6IFwiIzU5NmY2MlwiLCAxNTogXCIjN2VhMTZiXCIsMTY6IFwiI2MzZDg5OFwiLDE3OiBcIiM3MDE2MWRcIixcclxuICAgIDE5IDpcIiNlZGViZDNcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcclxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXHJcbiAgICAzMSA6XCIjOGU5YWFmXCIsIDMyIDpcIiNjYmMwZDNcIiwgMzMgOlwiI2VmZDNkN1wiLCAzNCA6XCIjZmVlYWZhXCIsIDM1IDpcIiNkZWUyZmZcIiB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gNip0aGlzLnN0cmlwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW5pdCBuZXh0IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTMpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJhbmQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRvIGluc3RhbnRpYXRlOiBcIiArIHRoaXMuc2VjX2xpc3RbcmFuZF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dF9zZWN0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZWNfbGlzdFtyYW5kXSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueCA9IDE5MjAgKiB0aGlzLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcGxpc3QuYWRkQ2hpbGQobmV4dF9zZWN0aW9uKTtcclxuICAgICAgICAgICAgfSAvL2Vsc2UgY29uc29sZS5sb2codGhpcy5ub2RlLngsIHRoaXMuc2VjdGlvbl9jb3VudCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwICsgXCIgKFwiICsgdG91Y2gueCArIFwiLCBcIiArIHRvdWNoLnkgKyBcIilcIilcclxuICAgICAgICAgICAgaWYodG91Y2gueSAmJiB0aGlzLmZseV9zdGF0ZSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0aWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLm9uX2Zsb29yICYmIHRvdWNoLnkgPCAwKSB0aGlzLm9uX2Zsb29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCA9PSB0aGlzLmNvbG9yICsgdGhpcy5iYXNlICYmIHRvdWNoLngvKiAmJiAhdG91Y2gueSovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYXN0X3ggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnY29pbicpeyAvLyBAQCBcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfY29pbigxKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnYnViYmxlJyl7IC8vIEBAIFxyXG4gICAgICAgICAgIGlmKG90aGVyLnRhZyA9PSAxKXsgLy8gYnViYmxlIGJhbmFuYVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbmFuYVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlX2JhbmFuYSgxKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSAyKXsgLy8gYnViYmxlIGxlZ29cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWdvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfbGVnbygxKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSAzKXsgLy8gY29sb3JmdWwgYnViYmxlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3Bvd2VydXAoMSk7XHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5uYW1lID09ICdtaXNzaWxlJyl7XHJcbiAgICAgICAgICAgIC8vIGRpZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9zZVwiKVxyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUubmFtZSA9PSAnc2hhcnAnfHxvdGhlci5ub2RlLm5hbWUgPT0gJ3BhcmVudCcpe1xyXG4gICAgICAgICAgICAvLyBkaWVcclxuICAgICAgICAgICAgLy8gZGVwbG95IHdoaXRlIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9zZVwiKVxyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICAvL2EgYnVnIGhhcHBlbnMgd2hlbiB0aGUgY29sb3Igb2YgbW91bmQgaXMgc2FtZSBhcyB0aGUgY29sb3Igb2YgcGxheWVyLCBub3Qgc29sdmVkIHlldCBcclxuICAgICAgICAvLyBmaXhlZCB3aXRoIG1vdW5kLiBwbGF5ZXIgc2hvdWxkIG5vdyBjaGVjayBjb2xsaXNpb25zIHdpdGggbW91bmRcclxuICAgICAgICBpZih0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZiggb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKSB7XHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICB0aGlzLnNlY19saXN0ID0gW3RoaXMuc2VjMCwgdGhpcy5zZWMxLCB0aGlzLnNlYzIsIHRoaXMuc2VjMywgdGhpcy5zZWM0LHRoaXMuc2VjNSx0aGlzLnNlYzEwLHRoaXMuc2VjMTEsdGhpcy5zZWMxMix0aGlzLnNlYzEzLHRoaXMuc2VjMTcsdGhpcy5zZWMxOCx0aGlzLnNlYzE5XTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLXNwYXJrbGUgY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYV90cmFjaygpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyICogMjAwICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RpY2tcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLmRpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tc3BhcmtsZSBlbWlzc2lvbiByYXRlIGlzIDAgd2hlbiBkaWRudCBtb3ZlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZih0aGlzLmRpciE9MHx8ZHk+MTApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MTAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tLXBsYXllciBzcGluLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IDEpIHRoaXMuc3Bpbl9yaWdodCgpO1xyXG4gICAgICAgIGVsc2UgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IC0xKSB0aGlzLnNwaW5fbGVmdCgpO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5ub2RlLmFuZ2xlICE9IDApIHRoaXMubm9kZS5hbmdsZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS1zY29yZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLnNjb3JlID0gKE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgPiB0aGlzLnNjb3JlKSA/IE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgOiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuU2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzcGluX3JpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IDEyO1xyXG4gICAgfVxyXG4gICAgc3Bpbl9sZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlICYmICF0aGlzLmRpcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25fZmxvb3IpIHRoaXMuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgIH1lbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5iICYmIHRoaXMuYmFuYW5hID4gMCApey8vIHB1dCBiYW5hbmFcclxuICAgICAgICAgICAgdmFyIGJhbmFuYV9wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbmFuYV9QcmVmYWJzKTtcclxuICAgICAgICAgICAgYmFuYW5hX3ByZS54ID0gdGhpcy5ub2RlLng7XHJcbiAgICAgICAgICAgIGJhbmFuYV9wcmUueSA9IHRoaXMubm9kZS55O1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3RcIikuYWRkQ2hpbGQoYmFuYW5hX3ByZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2JhbmFuYSgtMSk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkubCAgJiYgdGhpcy5sZWdvID4gMCl7IC8vICBwdXQgbGVnb1xyXG4gICAgICAgICAgICB2YXIgbGVnb19wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxlZ29fUHJlZmFicyk7XHJcbiAgICAgICAgICAgIGxlZ29fcHJlLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgbGVnb19wcmUueSA9IHRoaXMubm9kZS55LTE7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChsZWdvX3ByZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2xlZ28oLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uS2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wKCl7ICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDYwMCk7XHJcbiAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAxO1xyXG4gICAgICAgIGlmKCF0aGlzLmRlYnVnX21vZGUpIHRoaXMub25fZmxvb3IgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZXZfZGlyICsgXCJmbHkgc3RhdGU6IFwiICsgdGhpcy5mbHlfc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX2NvaW4obnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMuY29pbiArPSBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb2luX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb2luLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfYmFuYW5hKG51bWJlcil7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLmJhbmFuYSArPSBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5idWJibGVfYmFuYW5hLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5iYW5hbmEudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9sZWdvKG51bWJlcil7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLmxlZ28gKz0gbnVtYmVyO1xyXG4gICAgICAgdGhpcy5idWJibGVfbGVnby5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubGVnby50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX3Bvd2VydXAobnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMucG93ZXJ1cCArPSBudW1iZXI7XHJcbiAgICAgICB0aGlzLmJ1YmJsZV9wb3dlcnVwLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5wb3dlcnVwLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/section_init.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f86b16xEJNGGqnIRrMSrSna', 'section_init');
// scripts/section_init.ts

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
exports.Section = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = 6;
        _this.strip = 1;
        _this.player_col = 0;
        _this.searchlight = null;
        _this.sharp = null;
        _this.spider = null;
        _this.coin_pre = null;
        _this.lv = 0;
        return _this;
    }
    Section.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -500);
        this.lv = parseInt(this.node.name.replace('section', ''));
    };
    Section.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
    };
    Section.prototype.start = function () {
        var _this = this;
        this.node.anchorX = 0;
        this.node.anchorY = 0;
        var map = this.node.getComponent(cc.TiledMap);
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip; //每次更新的section 色票都要一樣
        this.base = 1 + 6 * this.strip;
        //console.log("base color gid: " + this.base);
        var body = this.node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        body.fixedRotation = true;
        var collider = this.node.addComponent(cc.PhysicsBoxCollider);
        collider.offset = cc.v2(960, 240);
        collider.size = cc.size(5, 1000);
        collider.sensor = true;
        collider.tag = 1000; // init next map on contact
        collider.apply();
        var sz = map.getTileSize();
        // console.log(sz);
        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        for (var i = 0; i < layerSz.width; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid == 1) {
                    FloorTile.gid = this.base;
                    // console.log("draw ground box for tile (" + i + ", " + j + ")");
                    FloorTile.node.group = "ground";
                    // console.log("created tile with " + FloorTile.node.group)
                    var body = FloorTile.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    body.fixedRotation = true;
                    var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset = cc.v2(sz.width / 2, sz.height / 2);
                    if (floor.getTiledTileAt(i, j - 1, true).gid)
                        collider.size = cc.size(47.8, 48);
                    else
                        collider.size = sz;
                    collider.apply();
                }
            }
        }
        // console.log("tile init complete, marking mounds")
        // for(j = 3; j < layerSz.height; j++){
        var FloorTile = floor.getTiledTileAt(layerSz.width - 1, 7, true);
        if (FloorTile.gid) {
            FloorTile.node.group = "mound";
            var col = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
            col.size = cc.size(47.8, 48);
            col.apply();
            // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        }
        // }
        for (var i = 1; i < layerSz.width - 1; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid != 0 && ((floor.getTiledTileAt(i + 1, j, true).gid == 0 && floor.getTiledTileAt(i + 1, j + 1, true).gid != 0) || (floor.getTiledTileAt(i - 1, j, true).gid == 0 && floor.getTiledTileAt(i - 1, j + 1, true).gid != 0))) {
                    FloorTile.node.group = "mound";
                    var col = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
                    col.size = cc.size(47.8, 48);
                    col.apply();
                    // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
                }
            }
        }
        var obj_list = map.getObjectGroup("colors").getObjects();
        this.player_col = 6 * this.strip + cc.find('Canvas/root/player').getComponent('player').color;
        console.log("bias towards " + this.player_col);
        obj_list.forEach(function (obj) {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            var cannot_hide = Math.floor(Math.random() * 3);
            var col = 0;
            if (cannot_hide)
                col = _this.base + Math.floor(Math.random() * 5);
            else
                col = _this.player_col;
            // console.log(obj.x, obj.y, x_size, y_size);
            // console.log("Create colored block with gid " + this.base + color);
            for (i = obj.x / 48; i < (obj.x / 48 + x_size); i++) {
                for (j = 10 - (obj.y / 48); j < (10 - (obj.y / 48) + y_size); j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = col;
                }
            }
        });
        // sharp obstacle
        var section_count = cc.find('Canvas/root/character_collection/player').getComponent('player').section_count;
        var sharp_list = { 1: 'sharp', 2: 'sharp2', 3: 'sharp3', 4: 'sharp4' };
        var map_layer = map.getLayer("enemy");
        var layer_size = map_layer.getLayerSize();
        var flag = new Array(layer_size.width);
        for (var i = 0; i < layer_size.width; i++) {
            flag[i] = new Array(layer_size.height);
        }
        for (var i = 0; i < layer_size.width; i++) {
            for (var j = 0; j < layer_size.height; j++) {
                var tile = map_layer.getTiledTileAt(i, j, true);
                if (tile.gid == 878 + 61 && flag[i][j] == null) {
                    flag[i][j] = 1;
                    var rad = 1 + Math.floor(Math.random() * 4); //1 static, 234 moving
                    var sharp_pre = cc.instantiate(this.sharp);
                    sharp_pre.name = sharp_list[rad];
                    sharp_pre.x = section_count * 1920 + tile.node.x;
                    sharp_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld/sharp").addChild(sharp_pre);
                    for (var m = i + 1;; m++) {
                        var tile_ = map_layer.getTiledTileAt(m, j, true);
                        if (tile_.gid != 878 + 61)
                            break;
                        flag[m][j] = 1;
                        var sharp_p = cc.instantiate(this.sharp);
                        sharp_p.name = sharp_list[rad];
                        sharp_p.x = section_count * 1920 + tile_.node.x;
                        sharp_p.y = tile_.node.y;
                        cc.find("Canvas/root/mapworld/sharp").addChild(sharp_p);
                    }
                }
            }
        }
        // spider
        map_layer = map.getLayer("enemy");
        layer_size = map_layer.getLayerSize();
        var flag = new Array(layer_size.width);
        for (var i = 0; i < layer_size.width; i++) {
            for (var j = 0; j < layer_size.height; j++) {
                var tile = map_layer.getTiledTileAt(i, j, true);
                if (tile.gid == 265 + 61) {
                    var spider_pre = cc.instantiate(this.spider);
                    console.log(spider_pre);
                    spider_pre.x = section_count * 1920 + tile.node.x;
                    spider_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld").addChild(spider_pre);
                }
            }
        }
        map_layer.enabled = false;
        //enemy init
        var lv_diff = cc.find("Canvas/root/character_collection/player").getComponent('player').section_count;
        if (lv_diff && cc.director.getScene().name != "day") {
            var range_arr = [360, 300, 300, 250, 200, 150, 120, 100]; // 100 or 80 if one light spawned, 60 or 50 if two, 30 or 20 if three
            var lightcount = 0;
            if (lv_diff >= 12) {
                lightcount = 3;
            }
            else if (lv_diff >= 6) {
                lightcount = 2 + (Math.floor(Math.random() * (lv_diff - 6))) ? 1 : 0;
            }
            else if (lv_diff >= 2) {
                lightcount = 1 + (Math.floor(Math.random() * (lv_diff - 2))) ? 1 : 0;
            }
            else
                lightcount = Math.floor(Math.random() * 2);
            if (Math.floor(Math.random() * 2))
                lightcount++;
            var offset = lv_diff * 1920 + ((lv_diff == 0) ? 400 : 0);
            for (var i = 0; i < lightcount; i++) {
                var range = range_arr[(lightcount - 1) * 2 + Math.floor(Math.random() * 2)];
                var enemy = cc.instantiate(this.searchlight);
                if (enemy.getComponent('enemy_wrapper'))
                    enemy.getComponent('enemy_wrapper').range = range;
                enemy.setPosition(offset + (1920 / (lightcount + 1)) * i + (Math.floor(Math.random() * 400) - 200), 200);
                cc.find("Canvas/root/character_collection").addChild(enemy);
            }
        }
        //coin 不知為甚麼只有第一個可以成功  後面都說instantiate null
        var offset = lv_diff * 1920 + ((lv_diff == 0) ? 400 : 0);
        for (i = 0; i < Math.random() * 11; i++) {
            var money = cc.instantiate(this.coin_pre);
            money.x = Math.random() * 1920 + offset;
            money.y = 500;
            cc.find("Canvas/root/powerups").addChild(money);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "searchlight", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "sharp", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "spider", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "coin_pre", void 0);
    Section = __decorate([
        ccclass
    ], Section);
    return Section;
}(cc.Component));
exports.Section = Section;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQXVOQztRQXJOVyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFbkIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUFxTTNCLENBQUM7SUFuTUcsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0Msc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELDJCQUFTLEdB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QURuQixPQUFPO09BQ0ssT0FBTyxDQXVObkI7SUFBRCxjQUFDO0NBdk5ELEFBdU5DLENBdk40QixFQUFFLENBQUMsU0FBUyxHQXVOeEM7QUF2TlksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgYmFzZTogbnVtYmVyID0gNjtcclxuICAgIHByaXZhdGUgc3RyaXA6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHBsYXllcl9jb2w6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYXJjaGxpZ2h0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzaGFycDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3BpZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjb2luX3ByZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGx2OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MDApO1xyXG4gICAgICAgIHRoaXMubHYgPSBwYXJzZUludCh0aGlzLm5vZGUubmFtZS5yZXBsYWNlKCdzZWN0aW9uJywgJycpKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwO1xyXG4gICAgICAgIHZhciBtYXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTWFwKTtcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDsgICAgICAgICAvL+avj+asoeabtOaWsOeahHNlY3Rpb24g6Imy56Wo6YO96KaB5LiA5qijXHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJhc2UgY29sb3IgZ2lkOiBcIiArIHRoaXMuYmFzZSk7XHJcblxyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNvbGxpZGVyID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDk2MCwgMjQwKTtcclxuICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg1LCAxMDAwKTtcclxuICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIGNvbGxpZGVyLnRhZyA9IDEwMDA7ICAgICAgICAvLyBpbml0IG5leHQgbWFwIG9uIGNvbnRhY3RcclxuICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICB2YXIgc3ogPSBtYXAuZ2V0VGlsZVNpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzeik7XHJcblxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIGZsb29yID0gbWFwLmdldExheWVyKFwiZ3JvdW5kXCIpO1xyXG4gICAgICAgIHZhciBsYXllclN6ID0gZmxvb3IuZ2V0TGF5ZXJTaXplKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyU3oud2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBsYXllclN6LmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLmdpZCA9IHRoaXMuYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRyYXcgZ3JvdW5kIGJveCBmb3IgdGlsZSAoXCIgKyBpICsgXCIsIFwiICsgaiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwiZ3JvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHRpbGUgd2l0aCBcIiArIEZsb29yVGlsZS5ub2RlLmdyb3VwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVyID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoc3oud2lkdGgvMiwgc3ouaGVpZ2h0LzIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGotMSwgdHJ1ZSkuZ2lkKSBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg0Ny44LCA0OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb2xsaWRlci5zaXplID0gc3o7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRpbGUgaW5pdCBjb21wbGV0ZSwgbWFya2luZyBtb3VuZHNcIilcclxuICAgICAgICAvLyBmb3IoaiA9IDM7IGogPCBsYXllclN6LmhlaWdodDsgaisrKXtcclxuICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQobGF5ZXJTei53aWR0aC0xLCA3LCB0cnVlKTtcclxuICAgICAgICBpZihGbG9vclRpbGUuZ2lkKXtcclxuICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSBGbG9vclRpbGUubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgY29sLnNpemUgPSBjYy5zaXplKDQ3LjgsIDQ4KTtcclxuICAgICAgICAgICAgY29sLmFwcGx5KCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgbGF5ZXJTei53aWR0aC0xOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkICE9IDAgJiYgKChmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGosIHRydWUpLmdpZCA9PSAwICYmIGZsb29yLmdldFRpbGVkVGlsZUF0KGkrMSwgaisxLCB0cnVlKS5naWQgIT0gMCkgfHwgKGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDAgJiYgZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaS0xLCBqKzEsIHRydWUpLmdpZCAhPSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJtb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSBGbG9vclRpbGUubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuc2l6ZSA9IGNjLnNpemUoNDcuOCwgNDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvYmpfbGlzdCA9IG1hcC5nZXRPYmplY3RHcm91cChcImNvbG9yc1wiKS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfY29sID0gNip0aGlzLnN0cmlwICsgY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5jb2xvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmlhcyB0b3dhcmRzIFwiICsgdGhpcy5wbGF5ZXJfY29sKTtcclxuICAgICAgICBvYmpfbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgdmFyIHhfc2l6ZSA9IG9iai53aWR0aCAvIDQ4O1xyXG4gICAgICAgICAgICB2YXIgeV9zaXplID0gb2JqLmhlaWdodCAvIDQ4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNhbm5vdF9oaWRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSAwO1xyXG4gICAgICAgICAgICBpZihjYW5ub3RfaGlkZSkgY29sID0gdGhpcy5iYXNlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgICAgIGVsc2UgY29sID0gdGhpcy5wbGF5ZXJfY29sO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoueCwgb2JqLnksIHhfc2l6ZSwgeV9zaXplKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDcmVhdGUgY29sb3JlZCBibG9jayB3aXRoIGdpZCBcIiArIHRoaXMuYmFzZSArIGNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihpID0gb2JqLnggLyA0ODsgaSA8IChvYmoueCAvIDQ4ICsgeF9zaXplKTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqID0gMTAgLSAob2JqLnkvNDgpOyBqIDwgKDEwIC0gKG9iai55LzQ4KSArIHlfc2l6ZSk7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSBjb2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2hhcnAgb2JzdGFjbGVcclxuICAgICAgICB2YXIgc2VjdGlvbl9jb3VudCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L2NoYXJhY3Rlcl9jb2xsZWN0aW9uL3BsYXllcicpLmdldENvbXBvbmVudCgncGxheWVyJykuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICB2YXIgc2hhcnBfbGlzdCA9IHsxOiAnc2hhcnAnLCAyOiAnc2hhcnAyJywgMzogJ3NoYXJwMycsIDQ6ICdzaGFycDQnfTtcclxuICAgICAgICB2YXIgbWFwX2xheWVyID0gbWFwLmdldExheWVyKFwiZW5lbXlcIik7XHJcbiAgICAgICAgdmFyIGxheWVyX3NpemUgPSBtYXBfbGF5ZXIuZ2V0TGF5ZXJTaXplKCk7XHJcbiAgICAgICAgdmFyIGZsYWcgPSBuZXcgQXJyYXkobGF5ZXJfc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspIHtcclxuICAgICAgICAgICAgZmxhZ1tpXSA9IG5ldyBBcnJheShsYXllcl9zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJfc2l6ZS5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IG1hcF9sYXllci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKHRpbGUuZ2lkID09IDg3OCArIDYxICYmIGZsYWdbaV1bal0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ1tpXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgIC8vMSBzdGF0aWMsIDIzNCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcnBfcHJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGFycCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfcHJlLm5hbWUgPSBzaGFycF9saXN0W3JhZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfcHJlLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX3ByZS55ID0gdGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL3NoYXJwXCIpLmFkZENoaWxkKHNoYXJwX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBtID0gaSArIDE7IDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlXyA9IG1hcF9sYXllci5nZXRUaWxlZFRpbGVBdChtLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZV8uZ2lkICE9IDg3OCArIDYxKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ1ttXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFycF9wID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGFycCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwX3AubmFtZSA9IHNoYXJwX2xpc3RbcmFkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfcC54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlXy5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwX3AueSA9IHRpbGVfLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL3NoYXJwXCIpLmFkZENoaWxkKHNoYXJwX3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3BpZGVyXHJcbiAgICAgICAgbWFwX2xheWVyID0gbWFwLmdldExheWVyKFwiZW5lbXlcIik7XHJcbiAgICAgICAgbGF5ZXJfc2l6ZSA9IG1hcF9sYXllci5nZXRMYXllclNpemUoKTtcclxuICAgICAgICB2YXIgZmxhZyA9IG5ldyBBcnJheShsYXllcl9zaXplLndpZHRoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJfc2l6ZS53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyX3NpemUuaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBtYXBfbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aWxlLmdpZCA9PSAyNjUgKyA2MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwaWRlcl9wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNwaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3BpZGVyX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BpZGVyX3ByZS54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICBzcGlkZXJfcHJlLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGRcIikuYWRkQ2hpbGQoc3BpZGVyX3ByZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFwX2xheWVyLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9lbmVteSBpbml0XHJcbiAgICAgICAgdmFyIGx2X2RpZmYgPSBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvY2hhcmFjdGVyX2NvbGxlY3Rpb24vcGxheWVyXCIpLmdldENvbXBvbmVudCgncGxheWVyJykuc2VjdGlvbl9jb3VudDtcclxuXHJcbiAgICAgICAgaWYobHZfZGlmZiAmJiBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gXCJkYXlcIil7XHJcbiAgICAgICAgICAgIHZhciByYW5nZV9hcnIgPSBbMzYwLCAzMDAsIDMwMCwgMjUwLCAyMDAsIDE1MCwgMTIwLCAxMDBdOyAgICAgIC8vIDEwMCBvciA4MCBpZiBvbmUgbGlnaHQgc3Bhd25lZCwgNjAgb3IgNTAgaWYgdHdvLCAzMCBvciAyMCBpZiB0aHJlZVxyXG4gICAgICAgICAgICB2YXIgbGlnaHRjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmKGx2X2RpZmYgPj0gMTIpe1xyXG4gICAgICAgICAgICAgICAgbGlnaHRjb3VudCA9IDM7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGx2X2RpZmYgPj0gNil7XHJcbiAgICAgICAgICAgICAgICBsaWdodGNvdW50ID0gMiArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobHZfZGlmZiAtIDYpKSk/IDEgOiAwO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihsdl9kaWZmID49IDIpe1xyXG4gICAgICAgICAgICAgICAgbGlnaHRjb3VudCA9IDEgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGx2X2RpZmYgLSAyKSkpPyAxIDogMDtcclxuICAgICAgICAgICAgfWVsc2UgbGlnaHRjb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSkgbGlnaHRjb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGx2X2RpZmYgKiAxOTIwICsgKChsdl9kaWZmID09IDApPyA0MDAgOiAwKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpZ2h0Y291bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSByYW5nZV9hcnJbKGxpZ2h0Y291bnQtMSkgKiAyICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZW15ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZWFyY2hsaWdodCk7XHJcbiAgICAgICAgICAgICAgICBpZihlbmVteS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKSllbmVteS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5yYW5nZSA9IHJhbmdlO1xyXG4gICAgICAgICAgICAgICAgZW5lbXkuc2V0UG9zaXRpb24ob2Zmc2V0ICsgKDE5MjAvKGxpZ2h0Y291bnQrMSkpKmkgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQwMCkgLTIwMCksIDIwMCk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvY2hhcmFjdGVyX2NvbGxlY3Rpb25cIikuYWRkQ2hpbGQoZW5lbXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29pbiDkuI3nn6XngrrnlJrpurzlj6rmnInnrKzkuIDlgIvlj6/ku6XmiJDlip8gIOW+jOmdoumDveiqqmluc3RhbnRpYXRlIG51bGxcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gbHZfZGlmZiAqIDE5MjAgKyAoKGx2X2RpZmYgPT0gMCk/IDQwMCA6IDApO1xyXG4gICAgICAgIGZvcihpID0wO2k8TWF0aC5yYW5kb20oKSoxMTtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbW9uZXk9Y2MuaW5zdGFudGlhdGUodGhpcy5jb2luX3ByZSk7XHJcbiAgICAgICAgICAgIG1vbmV5Lng9TWF0aC5yYW5kb20oKSoxOTIwK29mZnNldDtcclxuICAgICAgICAgICAgbW9uZXkueT01MDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9wb3dlcnVwc1wiKS5hZGRDaGlsZChtb25leSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1779RvYYhKTLIdabDWRppQ', 'sharp');
// scripts/sharp.ts

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
exports.sharp = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var sharp = /** @class */ (function (_super) {
    __extends(sharp, _super);
    function sharp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sharp.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    sharp.prototype.start = function () {
        if (this.node.name == 'sharp2') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -60)), cc.delayTime(1), cc.moveBy(1, cc.v2(0, 60)), cc.delayTime(1)));
            this.node.runAction(action);
        }
        else if (this.node.name == 'sharp3') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -60)), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 60)), cc.delayTime(2)));
            this.node.runAction(action);
        }
        else if (this.node.name == 'sharp4') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -60)), cc.delayTime(3), cc.moveBy(1, cc.v2(0, 60)), cc.delayTime(3)));
            this.node.runAction(action);
        }
    };
    sharp = __decorate([
        ccclass
    ], sharp);
    return sharp;
}(cc.Component));
exports.sharp = sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2hhcnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJCLHlCQUFZO0lBQXZDOztJQW9CQSxDQUFDO0lBakJHLHNCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBQ0QscUJBQUssR0FBTDtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNySSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtJQUVMLENBQUM7SUFsQlEsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQW9CakI7SUFBRCxZQUFDO0NBcEJELEFBb0JDLENBcEIwQixFQUFFLENBQUMsU0FBUyxHQW9CdEM7QUFwQlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBzaGFycCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gJ3NoYXJwMicpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDEsIGNjLnYyKDAsIC02MCkpLCBjYy5kZWxheVRpbWUoMSksY2MubW92ZUJ5KDEsIGNjLnYyKDAsIDYwKSksIGNjLmRlbGF5VGltZSgxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09ICdzaGFycDMnKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLCBjYy52MigwLCAtNjApKSxjYy5kZWxheVRpbWUoMiksIGNjLm1vdmVCeSgxLCBjYy52MigwLCA2MCkpLCBjYy5kZWxheVRpbWUoMikpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnA0Jykge1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMSwgY2MudjIoMCwgLTYwKSksY2MuZGVsYXlUaW1lKDMpLCBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgNjApKSwgY2MuZGVsYXlUaW1lKDMpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bird_map_init.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77477pwviNK9rGDv30oF7rf', 'bird_map_init');
// scripts/bird_map_init.ts

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
exports.BirdBase = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdBase = /** @class */ (function (_super) {
    __extends(BirdBase, _super);
    function BirdBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = 6;
        _this.strip = 1;
        return _this;
    }
    BirdBase.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -600);
    };
    BirdBase.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
    };
    BirdBase.prototype.start = function () {
        this.node.anchorX = 0;
        this.node.anchorY = 0;
        var map = this.node.getComponent(cc.TiledMap);
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip; //每次更新的section 色票都要一樣
        this.base = 1 + 6 * this.strip;
        //console.log("base color gid: " + this.base);
        var body = this.node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        body.fixedRotation = true;
        var collider = this.node.addComponent(cc.PhysicsBoxCollider);
        collider.offset = cc.v2(960, 240);
        collider.size = cc.size(5, 1000);
        collider.sensor = true;
        collider.tag = 1000; // init next map on contact
        collider.apply();
        var sz = map.getTileSize();
        console.log(sz);
        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        if (this.node.name == "bird0") {
            for (var i = 0; i < layerSz.width; i++) {
                for (var j = 0; j < layerSz.height; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if (FloorTile.gid != 0) {
                        // console.log("draw ground box for tile (" + i + ", " + j + ")");
                        FloorTile.node.group = "ground";
                        // console.log("created tile with " + FloorTile.node.group)
                        FloorTile.gid = this.base;
                        var body = FloorTile.node.addComponent(cc.RigidBody);
                        body.type = cc.RigidBodyType.Static;
                        body.fixedRotation = true;
                        var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                        collider.offset = cc.v2(sz.width / 2, sz.height / 2);
                        collider.size = sz;
                        collider.apply();
                    }
                }
            }
        }
        else {
            for (var i = 0; i < layerSz.width; i++) {
                for (var j = 0; j < layerSz.height; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = this.base;
                }
            }
            console.log("tile init complete, digging path(s)");
            var pathrange = [2, 17]; // path should be range between j = 2 and j = 17
            for (var i = 0; i < layerSz.width; i++) {
                // set gid to 0 for path
                var range = Math.floor(Math.random() * 6);
                var up_range_min = Math.max(2, pathrange[0] - range);
                var down_range_min = Math.min(17, pathrange[1] + range);
                range = Math.floor(Math.random() * 6);
                var up_range_max = Math.min(pathrange[1] - range, pathrange[0] + range);
                var down_range_max = Math.max(pathrange[0] + range, pathrange[1] - range);
                var down_bound = Math.floor(Math.random() * (down_range_max - down_range_min)) + down_range_min;
                var up_bound = Math.floor(Math.random() * (up_range_max - up_range_min)) + up_range_min;
                if (down_bound - up_bound < 4) {
                    down_bound++;
                    up_bound--;
                }
                console.log(up_bound, down_bound);
                for (var k = up_bound; k < down_bound; k++)
                    floor.getTiledTileAt(i, k, true).gid = 0;
                pathrange[0] = up_bound;
                pathrange[1] = down_bound;
            }
            for (var i = 1; i < layerSz.width - 1; i++) {
                for (var j = 0; j < layerSz.height; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if (FloorTile.gid != 0) {
                        FloorTile.node.group = "ground";
                        // console.log("created tile with " + FloorTile.node.group)
                        FloorTile.gid = this.base;
                        var body = FloorTile.node.addComponent(cc.RigidBody);
                        body.type = cc.RigidBodyType.Static;
                        body.fixedRotation = true;
                        var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                        collider.offset = cc.v2(sz.width / 2, sz.height / 2);
                        collider.size = sz;
                        collider.apply();
                    }
                }
            }
        }
    };
    BirdBase = __decorate([
        ccclass
    ], BirdBase);
    return BirdBase;
}(cc.Component));
exports.BirdBase = BirdBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmlyZF9tYXBfaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEIsNEJBQVk7SUFBMUM7UUFBQSxxRUFrSEM7UUFoSFcsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQStHOUIsQ0FBQztJQTdHRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUNoRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxzREFBc0Q7UUFDdEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3JFLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxD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SUFBRCxlQUFDO0NBbEhELEFBa0hDLENBbEg2QixFQUFFLENBQUMsU0FBUyxHQWtIekM7QUFsSFksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCaXJkQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlOiBudW1iZXIgPSA2O1xyXG4gICAgcHJpdmF0ZSBzdHJpcDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNjAwKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwO1xyXG4gICAgICAgIHZhciBtYXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTWFwKTtcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDsgICAgICAgICAvL+avj+asoeabtOaWsOeahHNlY3Rpb24g6Imy56Wo6YO96KaB5LiA5qijXHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJhc2UgY29sb3IgZ2lkOiBcIiArIHRoaXMuYmFzZSk7XHJcblxyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNvbGxpZGVyID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDk2MCwgMjQwKTtcclxuICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg1LCAxMDAwKTtcclxuICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIGNvbGxpZGVyLnRhZyA9IDEwMDA7ICAgICAgICAvLyBpbml0IG5leHQgbWFwIG9uIGNvbnRhY3RcclxuICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICB2YXIgc3ogPSBtYXAuZ2V0VGlsZVNpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzeik7XHJcblxyXG4gICAgICAgIHZhciBmbG9vciA9IG1hcC5nZXRMYXllcihcImdyb3VuZFwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJTeiA9IGZsb29yLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiYmlyZDBcIil7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRyYXcgZ3JvdW5kIGJveCBmb3IgdGlsZSAoXCIgKyBpICsgXCIsIFwiICsgaiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcImdyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdGlsZSB3aXRoIFwiICsgRmxvb3JUaWxlLm5vZGUuZ3JvdXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZXIgPSBGbG9vclRpbGUubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoc3oud2lkdGgvMiwgc3ouaGVpZ2h0LzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gc3o7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbGUgaW5pdCBjb21wbGV0ZSwgZGlnZ2luZyBwYXRoKHMpXCIpXHJcbiAgICAgICAgICAgIHZhciBwYXRocmFuZ2UgPSBbMiwgMTddOyAgICAgICAgLy8gcGF0aCBzaG91bGQgYmUgcmFuZ2UgYmV0d2VlbiBqID0gMiBhbmQgaiA9IDE3XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJTei53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBnaWQgdG8gMCBmb3IgcGF0aFxyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBfcmFuZ2VfbWluID0gTWF0aC5tYXgoMiwgcGF0aHJhbmdlWzBdLXJhbmdlKTtcclxuICAgICAgICAgICAgICAgIHZhciBkb3duX3JhbmdlX21pbiA9IE1hdGgubWluKDE3LCBwYXRocmFuZ2VbMV0rcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cF9yYW5nZV9tYXggPSBNYXRoLm1pbihwYXRocmFuZ2VbMV0tcmFuZ2UsIHBhdGhyYW5nZVswXStyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG93bl9yYW5nZV9tYXggPSBNYXRoLm1heChwYXRocmFuZ2VbMF0rcmFuZ2UsIHBhdGhyYW5nZVsxXS1yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG93bl9ib3VuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChkb3duX3JhbmdlX21heCAtIGRvd25fcmFuZ2VfbWluKSkgKyBkb3duX3JhbmdlX21pbjtcclxuICAgICAgICAgICAgICAgIHZhciB1cF9ib3VuZCA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXBfcmFuZ2VfbWF4IC0gdXBfcmFuZ2VfbWluKSkgKyB1cF9yYW5nZV9taW47XHJcbiAgICAgICAgICAgICAgICBpZihkb3duX2JvdW5kIC0gdXBfYm91bmQgPCA0KXtcclxuICAgICAgICAgICAgICAgICAgICBkb3duX2JvdW5kKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBfYm91bmQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXBfYm91bmQsIGRvd25fYm91bmQpO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrID0gdXBfYm91bmQ7IGsgPCBkb3duX2JvdW5kOyBrKyspIGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGssIHRydWUpLmdpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBwYXRocmFuZ2VbMF0gPSB1cF9ib3VuZDtcclxuICAgICAgICAgICAgICAgIHBhdGhyYW5nZVsxXSA9IGRvd25fYm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBsYXllclN6LndpZHRoLTE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJncm91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHRpbGUgd2l0aCBcIiArIEZsb29yVGlsZS5ub2RlLmdyb3VwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVyID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHN6LndpZHRoLzIsIHN6LmhlaWdodC8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuc2l6ZSA9IHN6O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/spider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cb3fLVW15AforolOA9VO1/', 'spider');
// scripts/spider.ts

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
exports.spider = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var spider = /** @class */ (function (_super) {
    __extends(spider, _super);
    function spider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveDir = 1;
        return _this;
    }
    spider.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    spider.prototype.start = function () {
        //this.node.scaleX = -this.node.scaleX;
        var body = this.getComponent(cc.RigidBody);
        //body.linearVelocity = cc.v2(250,0);
        console.log("V = ", body.linearVelocity);
    };
    spider.prototype.update = function () {
        this.node.x += 5 * this.moveDir;
        //this.node.scaleX = (this.moveDir >= 0) ? 1 : -1;
    };
    spider.prototype.onBeginContact = function (contact, self, other) {
        if ((other.node.group == 'mound') && contact.getWorldManifold().normal.y == 0) {
            this.moveDir *= -1;
            /*if( (this.getComponent(cc.RigidBody).linearVelocity.x > 0 && contact.getWorldManifold().normal.x == 1) || (this.getComponent(cc.RigidBody).linearVelocity.x < 0 && contact.getWorldManifold().normal.x == -1)) {
                console.log(other.node.group, contact.getWorldManifold().normal.x, contact.getWorldManifold().normal.y);
                //this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.getComponent(cc.RigidBody).linearVelocity.x, 0);
                //this.node.scaleX = -this.node.scaleX;
                this.moveDir *= -1;
            }*/
        }
        else
            contact.enabled = false;
    };
    spider = __decorate([
        ccclass
    ], spider);
    return spider;
}(cc.Component));
exports.spider = spider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3BpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXdDQztRQXRDRyxhQUFPLEdBQVcsQ0FBQyxDQUFDOztJQXNDeEIsQ0FBQztJQW5DRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkQsQ0FBQztJQUNELHNCQUFLLEdBQUw7UUFFSSx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MscUNBQXFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUc3QyxDQUFDO0lBQ0QsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLGtEQUFrRDtJQUN0RCxDQUFDO0lBQ0EsK0JBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRyxJQUFJLEVBQUcsS0FBSztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFM0UsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQjs7Ozs7ZUFLRztTQUNOOztZQUNJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFsQ1EsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQXdDbEI7SUFBRCxhQUFDO0NBeENELEFBd0NDLENBeEMyQixFQUFFLENBQUMsU0FBUyxHQXdDdkM7QUF4Q1ksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBzcGlkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1vdmVEaXI6IG51bWJlciA9IDE7XHJcblxyXG4gICAgXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAtdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgLy9ib2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMjUwLDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiViA9IFwiLCBib2R5LmxpbmVhclZlbG9jaXR5KTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IDUgKiB0aGlzLm1vdmVEaXI7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuc2NhbGVYID0gKHRoaXMubW92ZURpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgIH1cclxuICAgICBvbkJlZ2luQ29udGFjdChjb250YWN0ICwgc2VsZiAsIG90aGVyKXtcclxuICAgICAgICBpZiggKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkgPT0gMCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGlyICo9IC0xO1xyXG4gICAgICAgICAgICAvKmlmKCAodGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS54ID4gMCAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCA9PSAxKSB8fCAodGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS54IDwgMCAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCA9PSAtMSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAsIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54LCBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigtdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS54LCAwKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IC10aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyICo9IC0xO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBjb250YWN0LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bird_player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8f78kelolP16GUSK4Ymy8r', 'bird_player');
// scripts/bird_player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.Bird = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.maplist = null;
        _this.section = null;
        _this.Score = null;
        _this.Scoretag = null;
        _this.Color = null;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#edebd3", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
            25: "#562c2c", 26: "#f2542d", 27: "#f5dfbb", 28: "#0e9595", 29: "#127474",
            31: "#8e9aaf", 32: "#cbc0d3", 33: "#efd3d7", 34: "#feeafa", 35: "#dee2ff" };
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Bird.prototype.setcolor = function () {
        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 6 * this.strip;
        this.color = 1 + Math.floor(Math.random() * 4);
        //console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    };
    Bird.prototype.onLoad = function () {
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.section_count = 0;
    };
    Bird.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Bird.prototype.start = function () {
        this.score = 0;
    };
    Bird.prototype.update = function (dt) {
        this.camera_track();
        this.node.x += 150 * dt;
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    };
    Bird.prototype.camera_track = function () {
        this.Scoretag.x = Math.max(this.node.x - 500, -389.764);
        if (this.node.x < 100)
            this.camera.x = 0;
        else
            this.camera.x = this.node.x - 100;
    };
    Bird.prototype.onBeginContact = function (contact, self, other) {
        // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * 3);
                //console.log(rand);
                var next_section = cc.instantiate(this.section);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")");
            // die
            this.node.getChildByName('eye').active = false;
        }
    };
    Bird.prototype.onKeyDown = function (event) {
        if (event.keyCode == cc.macro.KEY.space) {
            this.jump();
        }
        if (event.keyCode == cc.macro.KEY.p) {
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }
        else if (event.keyCode == cc.macro.KEY.r) {
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }
    };
    Bird.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 200);
    };
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "maplist", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bird.prototype, "section", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "Score", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "Scoretag", void 0);
    __decorate([
        property(cc.Sprite)
    ], Bird.prototype, "Color", void 0);
    Bird = __decorate([
        ccclass
    ], Bird);
    return Bird;
}(cc.Component));
exports.Bird = Bird;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmlyZF9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBCLHdCQUFZO0lBQXRDO1FBQUEscUVBMEhDO1FBdkhHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRWhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQU0sd0dBQXdHO1FBQ3hJLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFMUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQiw0QkFBNEI7UUFDNUIsZ0JBQVUsR0FBUSxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDdkYsRUFBRSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsU0FBUztZQUN0RSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVB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SSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELG1CQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFwSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFqQmYsSUFBSTtRQURoQixPQUFPO09BQ0ssSUFBSSxDQTBIaEI7SUFBRCxXQUFDO0NBMUhELEFBMEhDLENBMUh5QixFQUFFLENBQUMsU0FBUyxHQTBIckM7QUExSFksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCaXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXBsaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjdGlvbjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmV0YWc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlY3Rpb25fY291bnQ6IG51bWJlciA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29sb3I6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcclxuICAgIGJhc2U6IG51bWJlciA9IDA7XHJcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcclxuXHJcbiAgICAvLyBjb2xvciBpbmZvIG9mIG5ld190aWxlc2V0XHJcbiAgICBjb2xvcl9saXN0OiBhbnkgPSB7NzogXCIjMmIzYTY3XCIsODogXCIjNDk2YTgxXCIsOTogXCIjNjY5OTliXCIsIDEwOiBcIiNiM2FmOGZcIiwgMTE6IFwiI2ZmYzU4MlwiLFxyXG4gICAgMTM6XCIjMWMzMTQ0XCIsIDE0OiBcIiM1OTZmNjJcIiwgMTU6IFwiIzdlYTE2YlwiLDE2OiBcIiNjM2Q4OThcIiwxNzogXCIjNzAxNjFkXCIsXHJcbiAgICAxOSA6XCIjZWRlYmQzXCIsIDIwIDpcIiNlZGViZDNcIiwgMjEgOlwiI2RhNDE2N1wiLCAyMiA6XCIjZjRkMzVlXCIsIDIzIDpcIiNmNzg2NjRcIiwgXHJcbiAgICAyNSAgOlwiIzU2MmMyY1wiLCAyNiA6XCIjZjI1NDJkXCIsIDI3IDpcIiNmNWRmYmJcIiwgMjggOlwiIzBlOTU5NVwiLCAyOSA6XCIjMTI3NDc0XCIsIFxyXG4gICAgMzEgOlwiIzhlOWFhZlwiLCAzMiA6XCIjY2JjMGQzXCIsIDMzIDpcIiNlZmQzZDdcIiwgMzQgOlwiI2ZlZWFmYVwiLCAzNSA6XCIjZGVlMmZmXCIgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gNip0aGlzLnN0cmlwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFfdHJhY2soKTtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSAxNTAgKiBkdDtcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tc2NvcmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IChNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpID4gdGhpcy5zY29yZSkgPyBNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpIDogdGhpcy5zY29yZTtcclxuICAgICAgICB0aGlzLlNjb3JlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmFfdHJhY2soKXtcclxuICAgICAgICB0aGlzLlNjb3JldGFnLnggPSBNYXRoLm1heCh0aGlzLm5vZGUueCAtIDUwMCwgLTM4OS43NjQpO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDwgMTAwKSB0aGlzLmNhbWVyYS54ID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuY2FtZXJhLnggPSB0aGlzLm5vZGUueCAtIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJhbmQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfc2VjdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueCA9IDE5MjAgKiB0aGlzLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcGxpc3QuYWRkQ2hpbGQobmV4dF9zZWN0aW9uKTtcclxuICAgICAgICAgICAgfSAvL2Vsc2UgY29uc29sZS5sb2codGhpcy5ub2RlLngsIHRoaXMuc2VjdGlvbl9jb3VudCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwICsgXCIgKFwiICsgdG91Y2gueCArIFwiLCBcIiArIHRvdWNoLnkgKyBcIilcIilcclxuICAgICAgICAgICAgLy8gZGllXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucil7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpeyAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
