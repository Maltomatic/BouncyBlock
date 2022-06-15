
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var searchlight = /** @class */ (function (_super) {
    __extends(searchlight, _super);
    function searchlight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchlight_speed = 10;
        _this.range = 50;
        _this.spark = null;
        _this.vis_time = 0;
        _this.attack = false;
        _this.dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.eye_pos = null;
        _this.lightbeam = null;
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
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.3): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
        // spotlight 
    }
    searchlight.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        // this.wander();
    };
    searchlight.prototype.start = function () {
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    };
    searchlight.prototype.update = function (dt) {
        this.node.x += this.searchlight_speed * dt * this.dir;
        this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range / 40);
        this.eye_pos.angle += this.dir * 0.7 * this.range / 50 / (this.searchlight_speed / 60);
        this.lightbeam.angle += this.dir * 0.2 * this.range / 50 / (this.searchlight_speed / 60);
        if (this.node.x <= this.leftbound || this.node.x >= this.rightbound)
            this.dir *= -1;
    };
    __decorate([
        property()
    ], searchlight.prototype, "searchlight_speed", void 0);
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
    searchlight = __decorate([
        ccclass
    ], searchlight);
    return searchlight;
}(cc.Component));
exports.default = searchlight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VhcmNobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwREM7UUF2REcsdUJBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRS9CLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsV0FBSyxHQUF1QixJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUcvQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFDM0Isd0JBQXdCO1FBQ2hCLG1CQUFhLEdBQXNCLElBQUksQ0FBQzs7UUFvQmhELFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsOEJBQThCO1FBQzlCLGtEQUFrRDtRQUNsRCxnREFBZ0Q7UUFDaEQsaUJBQWlCO1FBRWpCLElBQUk7UUFFSiwwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMERBQTBEO1FBQzFELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUFuQ0csNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQyxpQkFBaUI7SUFDckIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSx3RkFBd0Y7UUFDeEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDLENBQUM7UUFDckYsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBdENEO1FBREMsUUFBUSxFQUFFOzBEQUNvQjtJQUUvQjtRQURDLFFBQVEsRUFBRTs4Q0FDUTtJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDOzhDQUNLO0lBVWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQXBCVixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEQvQjtJQUFELGtCQUFDO0NBMURELEFBMERDLENBMUR3QyxFQUFFLENBQUMsU0FBUyxHQTBEcEQ7a0JBMURvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZWFyY2hsaWdodCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHNlYXJjaGxpZ2h0X3NwZWVkOiBudW1iZXIgPSAxMDtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICByYW5nZTogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgc3BhcmsgOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB2aXNfdGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYXR0YWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGxlZnRib3VuZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGV5ZV9wb3MgOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlnaHRiZWFtIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgcGh5c2ljTWFuYWdlcjogY2MuUGh5c2ljc01hbmFnZXIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLndhbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Ym91bmQgPSB0aGlzLm5vZGUueCAtIHRoaXMucmFuZ2U7XHJcbiAgICAgICAgdGhpcy5yaWdodGJvdW5kID0gdGhpcy5ub2RlLnggKyB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNlYXJjaGxpZ2h0X3NwZWVkICogZHQgKiB0aGlzLmRpcjtcclxuICAgICAgICB0aGlzLmxpZ2h0YmVhbS54ICs9IHRoaXMuc2VhcmNobGlnaHRfc3BlZWQgKiBkdCAqIHRoaXMuZGlyIC8gKDIgKiB0aGlzLnJhbmdlLzQwKTtcclxuICAgICAgICB0aGlzLmV5ZV9wb3MuYW5nbGUgKz0gdGhpcy5kaXIgKiAwLjcgKiB0aGlzLnJhbmdlLzUwIC8gKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQvNjApO1xyXG4gICAgICAgIHRoaXMubGlnaHRiZWFtLmFuZ2xlICs9IHRoaXMuZGlyICogMC4yICogdGhpcy5yYW5nZS81MCAvICh0aGlzLnNlYXJjaGxpZ2h0X3NwZWVkLzYwKTtcclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8PSB0aGlzLmxlZnRib3VuZCB8fCB0aGlzLm5vZGUueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyICo9IC0xO1xyXG4gICAgfVxyXG4gICAgLy8gd2FuZGVyKCl7XHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5yZXBlYXRGb3JldmVyKFxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAvLyAgICAgICAgIC5ieSgxLCB7eDogdGhpcy5ub2RlLnBvc2l0aW9uLngtMTAwfSkgIFxyXG4gICAgLy8gICAgICAgICAuYnkoMSwge3g6IHRoaXMubm9kZS5wb3NpdGlvbi54KzEwMH0pXHJcbiAgICAvLyAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVE9ETyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBlZGdlIGRldGVjdGlvbjogdGltZSB0aGUgYW1vdW50IG9mIHRpbWUgdGhlIHBsYXllciB0YWtlcyBmcm9tIGFwcGVhcmluZyBpbiBsaWdodCByYW5nZSB0byBleWVzIGNsb3NpbmcgKHZpc190aW1lKVxyXG4gICAgLy8gKHQgPT0gMCk6IGp1c3QgbW92ZSBhd2F5XHJcbiAgICAvLyBlbHNlOiBsaWdodCBzd2luZyBvdmVyIHRvIHBsYXllclxyXG4gICAgICAgIC8vICgwIDwgdCA8PSAwLjMpOiBob3ZlciBvdmVyIHBsYXllciBicmllZmx5LCB0aGVuIG1vdmUgb25cclxuICAgICAgICAvLyBlbHNlOiBhdHRhY2sgcGxheWVyOyBwcm9qZWN0aWxlIHNwZWVkIHNob3VsZCBiZSBlcXVhbCB0byBwbGF5ZXIgbW92ZSBzcGVlZCBhbmQgZmlyZSBvbmNlIHBlciAwLjYgfiAxLjJzZWMgZGVwZW5kaW5nIG9uIHBsYXllciBzY29yZVxyXG4gICAgICAgICAgICAvLyBzcG90bGlnaHQgXHJcbn1cclxuIl19