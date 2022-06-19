
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
        this.leftbound = /*this.node.x*/ -1 * this.range / 2;
        this.rightbound = /*this.node.x +*/ this.range / 2;
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
        bullet.setPosition(this.enemy.position.x, this.node.position.y);
        bullet.y -= 10;
        // var offset = 20 * ((this.enemy.position.x < this.character.position.x)? -1:1);
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - this.enemy.position.x), (this.character.y - this.node.position.y)).normalizeSelf().multiply(cc.v2(800, 800));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2VuZW15X3dyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBK0VDO1FBNUVHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFVixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFeEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF5RHRCLENBQUM7SUF2REcsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksNEZBQTRGO1FBQzVGLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQVEsRUFB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LENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxTCw2RUFBNkU7UUFDN0UsMkNBQTJDO0lBQy9DLENBQUM7SUEzRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFHekI7UUFEQyxRQUFRO2dEQUNTO0lBWlQsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQStFekI7SUFBRCxvQkFBQztDQS9FRCxBQStFQyxDQS9Fa0MsRUFBRSxDQUFDLFNBQVMsR0ErRTlDO0FBL0VZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGlnaHRfd3JhcHBlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHJhbmdlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgc2NhbGVfZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbGVmdGJvdW5kOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgYXRrOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5pdCB3aXRoIHJhbmdlOiBcIiArIHRoaXMucmFuZ2UgKyBcIiAgYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XG4gICAgICAgIHRoaXMubGVmdGJvdW5kID0gLyp0aGlzLm5vZGUueCovIC0xICogdGhpcy5yYW5nZS8yO1xuICAgICAgICB0aGlzLnJpZ2h0Ym91bmQgPSAvKnRoaXMubm9kZS54ICsqLyB0aGlzLnJhbmdlLzI7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlID09IDApe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saWdodC5zY2FsZVgsIHRoaXMubGlnaHQueCwgdGhpcy5ub2RlLnBvc2l0aW9uLngpXG4gICAgICAgICAgICB0aGlzLmVuZW15LnggKz0gNzAgKiBkdCAqIHRoaXMuZGlyO1xuXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15LnBvc2l0aW9uLnggPD0gdGhpcy5sZWZ0Ym91bmQpIHRoaXMuZGlyID0gMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteS5wb3NpdGlvbi54ID49IHRoaXMucmlnaHRib3VuZCkgdGhpcy5kaXIgPSAtMTtcblxuICAgICAgICAgICAgLy8gdmFyIHggPSB0aGlzLm5vZGUuZ2V0Tm9kZVRvV29ybGRUcmFuc2Zvcm0oKTtcblxuICAgICAgICAgICAgdGhpcy5saWdodC5zY2FsZVggKz0gZHQgKiB0aGlzLnNjYWxlX2RpclxuICAgICAgICAgICAgaWYodGhpcy5saWdodC5zY2FsZVggPD0gMC42KSB0aGlzLnNjYWxlX2RpciA9IDAuMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5saWdodC5zY2FsZVggPj0gMS4yKSB0aGlzLnNjYWxlX2RpciA9IC0wLjE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAxKSB0aGlzLmF0ayA9IDA7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUgPT0gMil7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5lbmVteS5wb3NpdGlvbi54ID4gdGhpcy5jaGFyYWN0ZXIueCsxMCkgdGhpcy5kaXIgPSAtMTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8IHRoaXMuY2hhcmFjdGVyLngtMTApIHRoaXMuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGlyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFjayBpbiBkaXJlY3Rpb24gXCIgKyB0aGlzLmRpcik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteS54ICs9IDIwNSAqIGR0ICogdGhpcy5kaXI7XG4gICAgICAgICAgICAgICAgdGhpcy5hdGsgLT0gZHQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdGsgPCAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayA9IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saWdodC54ID0gdGhpcy5lbmVteS54O1xuICAgIH1cbiAgICBcbiAgICBzaG9vdCgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob290aW5nXCIpXG4gICAgICAgIHZhciBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5hZGRDaGlsZChidWxsZXQpO1xuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5lbmVteS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XG4gICAgICAgIGJ1bGxldC55IC09IDEwO1xuICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gMjAgKiAoKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8IHRoaXMuY2hhcmFjdGVyLnBvc2l0aW9uLngpPyAtMToxKTtcbiAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKHRoaXMuY2hhcmFjdGVyLnggLSB0aGlzLmVuZW15LnBvc2l0aW9uLngpLCAodGhpcy5jaGFyYWN0ZXIueSAtIHRoaXMubm9kZS5wb3NpdGlvbi55KSkubm9ybWFsaXplU2VsZigpLm11bHRpcGx5KGNjLnYyKDgwMCwgODAwKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlIGJ1bGxldCBieSBsaWdodCBhdCBcIiArIHRoaXMuY2hhcmFjdGVyLngsIHRoaXMubm9kZS55KTtcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9yb290XCIpLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgfVxufVxuIl19