
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
        this.leftbound = /*this.node.x*/ -1 * this.range * 0.8;
        this.rightbound = /*this.node.x +*/ this.range * 0.8;
    };
    Light_wrapper.prototype.update = function (dt) {
        if (this.state == 0) {
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;
            if (this.enemy.x <= this.leftbound)
                this.dir = 1;
            else if (this.enemy.x >= this.rightbound)
                this.dir = -1;
            // var x = this.node.getNodeToWorldTransform();
            this.light.scaleX += dt * this.scale_dir;
            if (this.light.scaleX < -0.15)
                this.scale_dir = 0.3;
            else if (this.light.scaleX >= 1.2)
                this.scale_dir = -0.3;
        }
        else {
            if (this.state == 1)
                this.atk = 0;
            else if (this.state == 2) {
                var enempos = this.enemy.x + this.node.x;
                if (enempos > this.character.x + 10)
                    this.dir = -1;
                else if (enempos < this.character.x - 10)
                    this.dir = 1;
                else
                    this.dir = 0;
                // console.log("enemy position: " + enempos + "player position: " + this.character.x + "track in direction " + this.dir);
                this.enemy.x += 170 * dt * this.dir;
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
        console.log("shooting");
        var bullet = cc.instantiate(this.bullet);
        this.node.addChild(bullet);
        bullet.setPosition(this.enemy.x /* + this.node.x*/, 0);
        bullet.y -= 10;
        // var offset = 20 * ((this.enemy.x < this.character.x)? -1:1);
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - (this.enemy.x + this.node.x)), (this.character.y - this.node.y)).normalizeSelf().multiply(cc.v2(700, 700));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXlfd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUFnRkM7UUE3RUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQTBEdEIsQ0FBQztJQXhERyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSw0RkFBNEY7UUFDNUYsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7SUFDdkQsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBUSxF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Q0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4TCw2RUFBNkU7UUFDN0UsMkNBQTJDO0lBQy9DLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFHekI7UUFEQyxRQUFRO2dEQUNTO0lBWlQsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQWdGekI7SUFBRCxvQkFBQztDQWhGRCxBQWdGQyxDQWhGa0MsRUFBRSxDQUFDLFNBQVMsR0FnRjlDO0FBaEZZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGlnaHRfd3JhcHBlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHJhbmdlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgc2NhbGVfZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbGVmdGJvdW5kOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgYXRrOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5pdCB3aXRoIHJhbmdlOiBcIiArIHRoaXMucmFuZ2UgKyBcIiAgYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XG4gICAgICAgIHRoaXMubGVmdGJvdW5kID0gLyp0aGlzLm5vZGUueCovIC0xICogdGhpcy5yYW5nZSowLjg7XG4gICAgICAgIHRoaXMucmlnaHRib3VuZCA9IC8qdGhpcy5ub2RlLnggKyovIHRoaXMucmFuZ2UqMC44O1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAwKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlnaHQuc2NhbGVYLCB0aGlzLmxpZ2h0LngsIHRoaXMubm9kZS5wb3NpdGlvbi54KVxuICAgICAgICAgICAgdGhpcy5lbmVteS54ICs9IDcwICogZHQgKiB0aGlzLmRpcjtcblxuICAgICAgICAgICAgaWYodGhpcy5lbmVteS54IDw9IHRoaXMubGVmdGJvdW5kKSB0aGlzLmRpciA9IDE7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyID0gLTE7XG5cbiAgICAgICAgICAgIC8vIHZhciB4ID0gdGhpcy5ub2RlLmdldE5vZGVUb1dvcmxkVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlnaHQuc2NhbGVYICs9IGR0ICogdGhpcy5zY2FsZV9kaXJcbiAgICAgICAgICAgIGlmKHRoaXMubGlnaHQuc2NhbGVYIDwgLTAuMTUpIHRoaXMuc2NhbGVfZGlyID0gMC4zO1xuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmxpZ2h0LnNjYWxlWCA+PSAxLjIpIHRoaXMuc2NhbGVfZGlyID0gLTAuMztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDEpIHRoaXMuYXRrID0gMDtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZSA9PSAyKXtcbiAgICAgICAgICAgICAgICB2YXIgZW5lbXBvcyA9IHRoaXMuZW5lbXkueCArIHRoaXMubm9kZS54O1xuICAgICAgICAgICAgICAgIGlmKGVuZW1wb3MgPiB0aGlzLmNoYXJhY3Rlci54KzEwKSB0aGlzLmRpciA9IC0xO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYoZW5lbXBvcyA8IHRoaXMuY2hhcmFjdGVyLngtMTApIHRoaXMuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGlyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBwb3NpdGlvbjogXCIgKyBlbmVtcG9zICsgXCJwbGF5ZXIgcG9zaXRpb246IFwiICsgdGhpcy5jaGFyYWN0ZXIueCArIFwidHJhY2sgaW4gZGlyZWN0aW9uIFwiICsgdGhpcy5kaXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXkueCArPSAxNzAgKiBkdCAqIHRoaXMuZGlyO1xuICAgICAgICAgICAgICAgIHRoaXMuYXRrIC09IGR0O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXRrIDwgMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsgPSAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlnaHQueCA9IHRoaXMuZW5lbXkueDtcbiAgICB9XG4gICAgXG4gICAgc2hvb3QoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG9vdGluZ1wiKVxuICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKHRoaXMuZW5lbXkueC8qICsgdGhpcy5ub2RlLngqLywgMCk7XG4gICAgICAgIGJ1bGxldC55IC09IDEwO1xuICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gMjAgKiAoKHRoaXMuZW5lbXkueCA8IHRoaXMuY2hhcmFjdGVyLngpPyAtMToxKTtcbiAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKHRoaXMuY2hhcmFjdGVyLnggLSAodGhpcy5lbmVteS54ICsgdGhpcy5ub2RlLngpKSwgKHRoaXMuY2hhcmFjdGVyLnkgLSB0aGlzLm5vZGUueSkpLm5vcm1hbGl6ZVNlbGYoKS5tdWx0aXBseShjYy52Mig3MDAsIDcwMCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZSBidWxsZXQgYnkgbGlnaHQgYXQgXCIgKyB0aGlzLmNoYXJhY3Rlci54LCB0aGlzLm5vZGUueSk7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChidWxsZXQpO1xuICAgIH1cbn1cbiJdfQ==