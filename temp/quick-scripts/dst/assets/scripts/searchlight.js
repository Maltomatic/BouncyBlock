
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
        _this.vis_time = 0;
        _this.attack = false;
        _this.state = 0; // 0: normal movement, 1: track, 2: attack
        _this.dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.lockon = false;
        // LIFE-CYCLE CALLBACKS:
        _this.physicManager = null;
        return _this;
        // this.lightbeam.x = this.node.x;
        //}
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
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    };
    searchlight.prototype.update = function (dt) {
        // console.log("alert level: " + this.lightbeam.getComponent('light').alert_level);
        if (this.lightbeam.getComponent('light').alert_level == 0) {
            this.state = 0;
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
            if (this.lightbeam.angle > 40)
                this.lightbeam.angle = 40;
            if (this.lightbeam.angle < -40)
                this.lightbeam.angle = -40;
        }
        else {
            //if(this.lightbeam.getComponent('light').alert_level){
            console.log("tracking");
            var shift_dir = 0;
            if (this.node.x > this.character.x + 3)
                shift_dir = -1;
            else if (this.node.x < this.character.x - 3)
                shift_dir = 1;
            this.node.x += 3 * this.searchlight_speed * dt * shift_dir;
            this.lightbeam.x = this.node.x;
            // var diff = {
            //     'dx' : this.character.x - this.node.x,
            //     'dy':this.character.y - this.node.y 
            // };
            // var angle = Math.atan2(diff.dy, diff.dx) * -57.2958/4;
            // var roto = cc.rotateTo(0.05, angle);
            // this.lightbeam.runAction(roto);
            if (this.beambottom.x > this.character.x + 3)
                shift_dir = 1;
            else if (this.beambottom.x < this.character.x - 3)
                shift_dir = -1;
            this.lightbeam.angle += 2 * dt * shift_dir;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VhcmNobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBeUZDO1FBdkZXLHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUV2QyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLFdBQUssR0FBdUIsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQU0sMENBQTBDO1FBRWxFLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHdCQUF3QjtRQUNoQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBbUQ1QyxrQ0FBa0M7UUFDdEMsR0FBRztRQUNILFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsOEJBQThCO1FBQzlCLGtEQUFrRDtRQUNsRCxnREFBZ0Q7UUFDaEQsaUJBQWlCO1FBRWpCLElBQUk7SUFDUixDQUFDO0lBNURHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFR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R0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7aUJBQ3RELElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7U0FDOUM7UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBekVEO1FBREMsUUFBUSxFQUFFOzhDQUNRO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7OENBQ0s7SUFLakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1M7SUFoQmxCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0F5RnZCO0lBQUQsa0JBQUM7Q0F6RkQsQUF5RkMsQ0F6RmdDLEVBQUUsQ0FBQyxTQUFTLEdBeUY1QztBQXpGWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIHNlYXJjaGxpZ2h0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHNlYXJjaGxpZ2h0X3NwZWVkOiBudW1iZXIgPSA3MDtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICByYW5nZTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgc3BhcmsgOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZXllX3BvcyA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaWdodGJlYW0gOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmVhbWJvdHRvbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB2aXNfdGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYXR0YWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBudW1iZXIgPSAwOyAgICAgIC8vIDA6IG5vcm1hbCBtb3ZlbWVudCwgMTogdHJhY2ssIDI6IGF0dGFja1xyXG5cclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBsZWZ0Ym91bmQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJpZ2h0Ym91bmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBsb2Nrb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJyk7XHJcbiAgICAgICAgLy8gdGhpcy53YW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52Mih0aGlzLnNlYXJjaGxpZ2h0X3NwZWVkLDApO1xyXG4gICAgICAgIHRoaXMubGVmdGJvdW5kID0gdGhpcy5ub2RlLnggLSB0aGlzLnJhbmdlO1xyXG4gICAgICAgIHRoaXMucmlnaHRib3VuZCA9IHRoaXMubm9kZS54ICsgdGhpcy5yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhbGVydCBsZXZlbDogXCIgKyB0aGlzLmxpZ2h0YmVhbS5nZXRDb21wb25lbnQoJ2xpZ2h0JykuYWxlcnRfbGV2ZWwpO1xyXG4gICAgICAgIGlmKHRoaXMubGlnaHRiZWFtLmdldENvbXBvbmVudCgnbGlnaHQnKS5hbGVydF9sZXZlbCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja29uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gdGFyZ2V0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNlYXJjaGxpZ2h0X3NwZWVkICogZHQgKiB0aGlzLmRpcjtcclxuICAgICAgICAgICAgLy8gdGhpcy5saWdodGJlYW0ueCArPSB0aGlzLnNlYXJjaGxpZ2h0X3NwZWVkICogZHQgKiB0aGlzLmRpciAvICgyICogdGhpcy5yYW5nZS80MCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJlYW0uYW5nbGUgKz0gdGhpcy5kaXIgKiAwLjIgKiB0aGlzLnJhbmdlLzUwO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA8PSB0aGlzLmxlZnRib3VuZCkgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54ID49IHRoaXMucmlnaHRib3VuZCkgdGhpcy5kaXIgPSAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGlnaHRiZWFtLmFuZ2xlID4gNDApIHRoaXMubGlnaHRiZWFtLmFuZ2xlID0gNDA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGlnaHRiZWFtLmFuZ2xlIDwgLTQwKSB0aGlzLmxpZ2h0YmVhbS5hbmdsZSA9IC00MDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy9pZih0aGlzLmxpZ2h0YmVhbS5nZXRDb21wb25lbnQoJ2xpZ2h0JykuYWxlcnRfbGV2ZWwpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFja2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBzaGlmdF9kaXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPiB0aGlzLmNoYXJhY3Rlci54ICsgMykgc2hpZnRfZGlyID0gLTE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54IDwgdGhpcy5jaGFyYWN0ZXIueCAtIDMpIHNoaWZ0X2RpciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSAzICogdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogc2hpZnRfZGlyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodGJlYW0ueCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRpZmYgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgJ2R4JyA6IHRoaXMuY2hhcmFjdGVyLnggLSB0aGlzLm5vZGUueCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAnZHknOnRoaXMuY2hhcmFjdGVyLnkgLSB0aGlzLm5vZGUueSBcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGRpZmYuZHksIGRpZmYuZHgpICogLTU3LjI5NTgvNDtcclxuICAgICAgICAgICAgICAgIC8vIHZhciByb3RvID0gY2Mucm90YXRlVG8oMC4wNSwgYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5saWdodGJlYW0ucnVuQWN0aW9uKHJvdG8pO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5iZWFtYm90dG9tLnggPiB0aGlzLmNoYXJhY3Rlci54ICsgMykgc2hpZnRfZGlyID0gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5iZWFtYm90dG9tLnggPCB0aGlzLmNoYXJhY3Rlci54IC0gMykgc2hpZnRfZGlyID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0YmVhbS5hbmdsZSArPSAyICogZHQgKiBzaGlmdF9kaXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLmV5ZV9wb3MuYW5nbGUgPSB0aGlzLmxpZ2h0YmVhbS5hbmdsZTtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLmxpZ2h0YmVhbS54ID0gdGhpcy5ub2RlLng7XHJcbiAgICAvL31cclxuICAgIC8vIHdhbmRlcigpe1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcclxuICAgIC8vICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgLy8gICAgICAgICAuYnkoMSwge3g6IHRoaXMubm9kZS5wb3NpdGlvbi54LTEwMH0pICBcclxuICAgIC8vICAgICAgICAgLmJ5KDEsIHt4OiB0aGlzLm5vZGUucG9zaXRpb24ueCsxMDB9KVxyXG4gICAgLy8gICAgICkuc3RhcnQoKTtcclxuICAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG4iXX0=