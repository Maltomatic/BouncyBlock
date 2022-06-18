
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
        this.character = cc.find('Canvas/root/player');
        cc.director.getPhysicsManager().enabled = true;
    };
    Light_wrapper.prototype.start = function () {
        // console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range / 2;
        this.rightbound = this.node.x + this.range / 2;
    };
    Light_wrapper.prototype.update = function (dt) {
        if (this.state == 0) {
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;
            if (this.enemy.position.x <= this.leftbound)
                this.dir = 1;
            else if (this.enemy.position.x >= this.rightbound)
                this.dir = -1;
            // var x = this.node.getNodeToWorldTransform();
            this.light.scaleX += dt * this.scale_dir;
            if (this.light.scaleX <= 0.6)
                this.scale_dir = 0.1;
            else if (this.light.scaleX >= 1.2)
                this.scale_dir = -0.1;
        }
        else {
            if (this.state == 1)
                this.atk = 0;
            else if (this.state == 2) {
                if (this.enemy.position.x > this.character.x + 10)
                    this.dir = -1;
                else if (this.enemy.position.x < this.character.x - 10)
                    this.dir = 1;
                else
                    this.dir = 0;
                console.log("track in direction " + this.dir);
                this.enemy.x += 205 * dt * this.dir;
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
        this.node.getParent().addChild(bullet);
        bullet.setPosition(this.node.position.x, this.node.position.y);
        bullet.y -= 10;
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - this.node.position.x), (this.character.y - this.node.position.y)).normalizeSelf().multiply(cc.v2(800, 800));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXlfd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUE4RUM7UUEzRUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXdEdEIsQ0FBQztJQXRERyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSw0RkFBNEY7UUFDNUYsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFD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QUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6TCw2RUFBNkU7UUFDN0UsMkNBQTJDO0lBQy9DLENBQUM7SUExRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFHekI7UUFEQyxRQUFRO2dEQUNTO0lBWlQsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQThFekI7SUFBRCxvQkFBQztDQTlFRCxBQThFQyxDQTlFa0MsRUFBRSxDQUFDLFNBQVMsR0E4RTlDO0FBOUVZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGlnaHRfd3JhcHBlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmVteTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJhbmdlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBzY2FsZV9kaXI6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGxlZnRib3VuZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGF0azogbnVtYmVyID0gMDtcclxuICAgIFxyXG4gICAgc3RhdGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5pdCB3aXRoIHJhbmdlOiBcIiArIHRoaXMucmFuZ2UgKyBcIiAgYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5zZWFyY2hsaWdodF9zcGVlZCwwKTtcclxuICAgICAgICB0aGlzLmxlZnRib3VuZCA9IHRoaXMubm9kZS54IC0gdGhpcy5yYW5nZS8yO1xyXG4gICAgICAgIHRoaXMucmlnaHRib3VuZCA9IHRoaXMubm9kZS54ICsgdGhpcy5yYW5nZS8yO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlID09IDApe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpZ2h0LnNjYWxlWCwgdGhpcy5saWdodC54LCB0aGlzLm5vZGUucG9zaXRpb24ueClcclxuICAgICAgICAgICAgdGhpcy5lbmVteS54ICs9IDcwICogZHQgKiB0aGlzLmRpcjtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8PSB0aGlzLmxlZnRib3VuZCkgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyID0gLTE7XHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgeCA9IHRoaXMubm9kZS5nZXROb2RlVG9Xb3JsZFRyYW5zZm9ybSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saWdodC5zY2FsZVggKz0gZHQgKiB0aGlzLnNjYWxlX2RpclxyXG4gICAgICAgICAgICBpZih0aGlzLmxpZ2h0LnNjYWxlWCA8PSAwLjYpIHRoaXMuc2NhbGVfZGlyID0gMC4xO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubGlnaHQuc2NhbGVYID49IDEuMikgdGhpcy5zY2FsZV9kaXIgPSAtMC4xO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDEpIHRoaXMuYXRrID0gMDtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLnN0YXRlID09IDIpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5lbmVteS5wb3NpdGlvbi54ID4gdGhpcy5jaGFyYWN0ZXIueCsxMCkgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteS5wb3NpdGlvbi54IDwgdGhpcy5jaGFyYWN0ZXIueC0xMCkgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYWNrIGluIGRpcmVjdGlvbiBcIiArIHRoaXMuZGlyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXkueCArPSAyMDUgKiBkdCAqIHRoaXMuZGlyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGsgLT0gZHQ7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmF0ayA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayA9IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpZ2h0LnggPSB0aGlzLmVuZW15Lng7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob290KCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaG9vdGluZ1wiKVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgYnVsbGV0LnkgLT0gMTA7XHJcbiAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKHRoaXMuY2hhcmFjdGVyLnggLSB0aGlzLm5vZGUucG9zaXRpb24ueCksICh0aGlzLmNoYXJhY3Rlci55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkpKS5ub3JtYWxpemVTZWxmKCkubXVsdGlwbHkoY2MudjIoODAwLCA4MDApKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZSBidWxsZXQgYnkgbGlnaHQgYXQgXCIgKyB0aGlzLmNoYXJhY3Rlci54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9yb290XCIpLmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICB9XHJcbn1cclxuIl19