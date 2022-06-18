
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