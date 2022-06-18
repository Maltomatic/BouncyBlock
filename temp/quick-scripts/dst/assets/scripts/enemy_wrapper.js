
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
        _this.eye = null;
        _this.light = null;
        _this.bullet = null;
        _this.range = 0;
        _this.character = null;
        _this.dir = 1;
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
        console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    };
    Light_wrapper.prototype.update = function (dt) {
        console.log("state: " + this.state);
        if (this.state == 0) {
            this.node.x += 70 * dt * this.dir;
            this.light.skewX -= this.dir * 10 * dt * this.range / 80;
            if (this.node.x <= this.leftbound)
                this.dir = 1;
            else if (this.node.x >= this.rightbound)
                this.dir = -1;
        }
        else {
            if (this.node.x > this.character.x + 10)
                this.dir = -1;
            else if (this.node.x < this.character.x - 10)
                this.dir = 1;
            else
                this.dir = 0;
            this.light.skewX = (this.character.x - this.node.x) / 3;
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
        if (this.light.skewX > 40)
            this.light.skewX = 40;
        else if (this.light.skewX < -40)
            this.light.skewX = -40;
        this.light.x = this.enemy.x = this.node.x;
        this.eye.angle = -1 * this.light.skewX;
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
    ], Light_wrapper.prototype, "eye", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2VuZW15X3dyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLGlDQUFZO0lBQS9DO1FBQUEscUVBMEVDO1FBdkVHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFeEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFtRHRCLENBQUM7SUFqREcsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FB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LENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZLLDZFQUE2RTtRQUM3RSwyQ0FBMkM7SUFDL0MsQ0FBQztJQXRFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNLO0lBR3pCO1FBREMsUUFBUTtnREFDUztJQWRULGFBQWE7UUFEekIsT0FBTztPQUNLLGFBQWEsQ0EwRXpCO0lBQUQsb0JBQUM7Q0ExRUQsQUEwRUMsQ0ExRWtDLEVBQUUsQ0FBQyxTQUFTLEdBMEU5QztBQTFFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExpZ2h0X3dyYXBwZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGV5ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHJhbmdlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbGVmdGJvdW5kOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgYXRrOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5pdCB3aXRoIHJhbmdlOiBcIiArIHRoaXMucmFuZ2UgKyBcIiAgYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XG4gICAgICAgIHRoaXMubGVmdGJvdW5kID0gdGhpcy5ub2RlLnggLSB0aGlzLnJhbmdlO1xuICAgICAgICB0aGlzLnJpZ2h0Ym91bmQgPSB0aGlzLm5vZGUueCArIHRoaXMucmFuZ2U7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHRoaXMuc3RhdGUpO1xuICAgICAgICBpZih0aGlzLnN0YXRlID09IDApe1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gNzAgKiBkdCAqIHRoaXMuZGlyO1xuICAgICAgICAgICAgdGhpcy5saWdodC5za2V3WCAtPSB0aGlzLmRpciAqIDEwICogZHQgKiB0aGlzLnJhbmdlLzgwO1xuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPD0gdGhpcy5sZWZ0Ym91bmQpIHRoaXMuZGlyID0gMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5ub2RlLnggPj0gdGhpcy5yaWdodGJvdW5kKSB0aGlzLmRpciA9IC0xO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID4gdGhpcy5jaGFyYWN0ZXIueCsxMCkgdGhpcy5kaXIgPSAtMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5ub2RlLnggPCB0aGlzLmNoYXJhY3Rlci54LTEwKSB0aGlzLmRpciA9IDE7XG4gICAgICAgICAgICBlbHNlIHRoaXMuZGlyID0gMDtcbiAgICAgICAgICAgIHRoaXMubGlnaHQuc2tld1ggPSAodGhpcy5jaGFyYWN0ZXIueCAtIHRoaXMubm9kZS54KS8zO1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAxKSB0aGlzLmF0ayA9IDA7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUgPT0gMil7XG4gICAgICAgICAgICAgICAgdGhpcy5hdGsgLT0gZHQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdGsgPCAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0ayA9IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5saWdodC5za2V3WCA+IDQwKSB0aGlzLmxpZ2h0LnNrZXdYID0gNDA7XG4gICAgICAgIGVsc2UgaWYodGhpcy5saWdodC5za2V3WCA8IC00MCkgdGhpcy5saWdodC5za2V3WCA9IC00MDtcbiAgICAgICAgdGhpcy5saWdodC54ID0gdGhpcy5lbmVteS54ID0gdGhpcy5ub2RlLng7XG4gICAgICAgIHRoaXMuZXllLmFuZ2xlID0gLTEgKiB0aGlzLmxpZ2h0LnNrZXdYO1xuICAgIH1cbiAgICBcbiAgICBzaG9vdCgpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob290aW5nXCIpXG4gICAgICAgIHZhciBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XG4gICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgYnVsbGV0LnkgLT0gMTA7XG4gICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKCh0aGlzLmNoYXJhY3Rlci54IC0gdGhpcy5ub2RlLngpLCAodGhpcy5jaGFyYWN0ZXIueSAtIHRoaXMubm9kZS55KSkubm9ybWFsaXplU2VsZigpLm11bHRpcGx5KGNjLnYyKDgwMCwgODAwKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlIGJ1bGxldCBieSBsaWdodCBhdCBcIiArIHRoaXMuY2hhcmFjdGVyLngsIHRoaXMubm9kZS55KTtcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9yb290XCIpLmFkZENoaWxkKGJ1bGxldCk7XG4gICAgfVxufVxuIl19