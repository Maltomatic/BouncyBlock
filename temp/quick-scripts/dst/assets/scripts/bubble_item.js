
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2J1YmJsZV9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMENDO1FBeENHLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGdCQUFVLEdBQVksQ0FBQyxDQUFDO1FBQ3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLG1CQUFhLEdBQXNCLElBQUksQ0FBQzs7SUFvQ3BELENBQUM7SUFsQ0csNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLElBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUN2QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBRTtRQUNqQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNhO0lBRmhCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQy9CO0lBQUQsa0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBMENwRDtrQkExQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJ1YmJsZV9pdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1YmJsZV9QcmVmYWJzOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgYnViYmxlX251bSA6IG51bWJlciA9IDA7XG4gICAgYnViYmxlX1NwZWVkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGh5c2ljTWFuYWdlcjogY2MuUGh5c2ljc01hbmFnZXIgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyICgwLCAtNTAwKTtcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLmJ1YmJsZV9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICAgICAgLy8gIHRoaXMuYnViYmxlX3Nob3cgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVfYnViYmxlKCk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmJ1YmJsZV9TcGVlZCA9IChNYXRoLnJhbmRvbSgpICogMTAgKyAyMCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuYnViYmxlX1NwZWVkLDApO1xuICAgIH1cbiAgICBcbiAgICBnZW5lcmF0ZV9idWJibGUoKXsgLy9yYW5kb20gcHJpbnQgYnViYmxlIGFuZCBidWJibGUgbGVnbyBvbiAgY2FudmFzXG4gICAgICAgIGlmKHRoaXMuYnViYmxlX1ByZWZhYnMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB2YXIgYnViYmxlX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlX1ByZWZhYnMpO1xuICAgICAgICBidWJibGVfcHJlLnggPSB0aGlzLm5vZGUueCArIDUwIDtcbiAgICAgICAgYnViYmxlX3ByZS55ID0gdGhpcy5ub2RlLnkgKyAzMCA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuZ2VuZXJhdGVfYnViYmxlLmJpbmQodGhpcyksIE1hdGgucmFuZG9tKCkgKiAzICsgMTApO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3RcIikuYWRkQ2hpbGQoYnViYmxlX3ByZSk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGNvbnN0IGRpcyA9IHRoaXMuYnViYmxlX1NwZWVkICogZHQ7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRpcztcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19