
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXlfd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUEwRUM7UUF2RUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRVYsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQW1EdEIsQ0FBQztJQWpERyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekYsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxD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QUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkssNkVBQTZFO1FBQzdFLDJDQUEyQztJQUMvQyxDQUFDO0lBdEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFHekI7UUFEQyxRQUFRO2dEQUNTO0lBZFQsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQTBFekI7SUFBRCxvQkFBQztDQTFFRCxBQTBFQyxDQTFFa0MsRUFBRSxDQUFDLFNBQVMsR0EwRTlDO0FBMUVZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGlnaHRfd3JhcHBlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmVteTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGV5ZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJhbmdlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBsZWZ0Ym91bmQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJpZ2h0Ym91bmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBhdGs6IG51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15IGluaXQgd2l0aCByYW5nZTogXCIgKyB0aGlzLnJhbmdlICsgXCIgIGF0IFwiICsgdGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Ym91bmQgPSB0aGlzLm5vZGUueCAtIHRoaXMucmFuZ2U7XHJcbiAgICAgICAgdGhpcy5yaWdodGJvdW5kID0gdGhpcy5ub2RlLnggKyB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IDcwICogZHQgKiB0aGlzLmRpcjtcclxuICAgICAgICAgICAgdGhpcy5saWdodC5za2V3WCAtPSB0aGlzLmRpciAqIDEwICogZHQgKiB0aGlzLnJhbmdlLzgwO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA8PSB0aGlzLmxlZnRib3VuZCkgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54ID49IHRoaXMucmlnaHRib3VuZCkgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPiB0aGlzLmNoYXJhY3Rlci54KzEwKSB0aGlzLmRpciA9IC0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54IDwgdGhpcy5jaGFyYWN0ZXIueC0xMCkgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZGlyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5saWdodC5za2V3WCA9ICh0aGlzLmNoYXJhY3Rlci54IC0gdGhpcy5ub2RlLngpLzM7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUgPT0gMSkgdGhpcy5hdGsgPSAwO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuc3RhdGUgPT0gMil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0ayAtPSBkdDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXRrIDwgMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXRrID0gMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubGlnaHQuc2tld1ggPiA0MCkgdGhpcy5saWdodC5za2V3WCA9IDQwO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5saWdodC5za2V3WCA8IC00MCkgdGhpcy5saWdodC5za2V3WCA9IC00MDtcclxuICAgICAgICB0aGlzLmxpZ2h0LnggPSB0aGlzLmVuZW15LnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICB0aGlzLmV5ZS5hbmdsZSA9IC0xICogdGhpcy5saWdodC5za2V3WDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvb3QoKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob290aW5nXCIpXHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0KTtcclxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYnVsbGV0KTtcclxuICAgICAgICBidWxsZXQueSAtPSAxMDtcclxuICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigodGhpcy5jaGFyYWN0ZXIueCAtIHRoaXMubm9kZS54KSwgKHRoaXMuY2hhcmFjdGVyLnkgLSB0aGlzLm5vZGUueSkpLm5vcm1hbGl6ZVNlbGYoKS5tdWx0aXBseShjYy52Mig4MDAsIDgwMCkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlIGJ1bGxldCBieSBsaWdodCBhdCBcIiArIHRoaXMuY2hhcmFjdGVyLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzL3Jvb3RcIikuYWRkQ2hpbGQoYnVsbGV0KTtcclxuICAgIH1cclxufVxyXG4iXX0=