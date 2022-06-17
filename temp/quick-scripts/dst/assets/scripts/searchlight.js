
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
        console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
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
            if (this.lightbeam.angle > 30)
                this.lightbeam.angle = 30;
            if (this.lightbeam.angle < -30)
                this.lightbeam.angle = -30;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VhcmNobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBMEZDO1FBeEZXLHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUV2QyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLFdBQUssR0FBdUIsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQU0sMENBQTBDO1FBRWxFLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHdCQUF3QjtRQUNoQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBb0Q1QyxrQ0FBa0M7UUFDdEMsR0FBRztRQUNILFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsOEJBQThCO1FBQzlCLGtEQUFrRDtRQUNsRCxnREFBZ0Q7UUFDaEQsaUJBQWlCO1FBRWpCLElBQUk7SUFDUixDQUFDO0lBN0RHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFR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QyxDQUFDLENBQUM7WUFDL0IsZUFBZTtZQUNmLDZDQUE2QztZQUM3QywyQ0FBMkM7WUFDM0MsS0FBSztZQUNMLHlEQUF5RDtZQUN6RCx1Q0FBdUM7WUFDdkMsa0NBQWtDO1lBQ2xDLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUN0RCxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO1NBQzlDO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQTFFRDtRQURDLFFBQVEsRUFBRTs4Q0FDUTtJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDOzhDQUNLO0lBS2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNTO0lBaEJsQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBMEZ2QjtJQUFELGtCQUFDO0NBMUZELEFBMEZDLENBMUZnQyxFQUFFLENBQUMsU0FBUyxHQTBGNUM7QUExRlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBzZWFyY2hsaWdodCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWFyY2hsaWdodF9zcGVlZDogbnVtYmVyID0gNzA7XHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcmFuZ2U6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIHNwYXJrIDogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGV5ZV9wb3MgOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlnaHRiZWFtIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJlYW1ib3R0b206IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdmlzX3RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGF0dGFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogbnVtYmVyID0gMDsgICAgICAvLyAwOiBub3JtYWwgbW92ZW1lbnQsIDE6IHRyYWNrLCAyOiBhdHRhY2tcclxuXHJcbiAgICBwcml2YXRlIGRpcjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgbGVmdGJvdW5kOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSByaWdodGJvdW5kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgbG9ja29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHByaXZhdGUgcGh5c2ljTWFuYWdlcjogY2MuUGh5c2ljc01hbmFnZXIgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xyXG4gICAgICAgIC8vIHRoaXMud2FuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5pdCB3aXRoIHJhbmdlOiBcIiArIHRoaXMucmFuZ2UgKyBcIiAgYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5zZWFyY2hsaWdodF9zcGVlZCwwKTtcclxuICAgICAgICB0aGlzLmxlZnRib3VuZCA9IHRoaXMubm9kZS54IC0gdGhpcy5yYW5nZTtcclxuICAgICAgICB0aGlzLnJpZ2h0Ym91bmQgPSB0aGlzLm5vZGUueCArIHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWxlcnQgbGV2ZWw6IFwiICsgdGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsKTtcclxuICAgICAgICBpZih0aGlzLmxpZ2h0YmVhbS5nZXRDb21wb25lbnQoJ2xpZ2h0JykuYWxlcnRfbGV2ZWwgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHRhcmdldFwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlnaHRiZWFtLnggKz0gdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogdGhpcy5kaXIgLyAoMiAqIHRoaXMucmFuZ2UvNDApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0YmVhbS54ID0gdGhpcy5ub2RlLng7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLmFuZ2xlICs9IHRoaXMuZGlyICogMC4yICogdGhpcy5yYW5nZS81MDtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPD0gdGhpcy5sZWZ0Ym91bmQpIHRoaXMuZGlyID0gMTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyID0gLTE7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxpZ2h0YmVhbS5hbmdsZSA+IDMwKSB0aGlzLmxpZ2h0YmVhbS5hbmdsZSA9IDMwO1xyXG4gICAgICAgICAgICBpZih0aGlzLmxpZ2h0YmVhbS5hbmdsZSA8IC0zMCkgdGhpcy5saWdodGJlYW0uYW5nbGUgPSAtMzA7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vaWYodGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhY2tpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hpZnRfZGlyID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID4gdGhpcy5jaGFyYWN0ZXIueCArIDMpIHNoaWZ0X2RpciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUueCA8IHRoaXMuY2hhcmFjdGVyLnggLSAzKSBzaGlmdF9kaXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gMyAqIHRoaXMuc2VhcmNobGlnaHRfc3BlZWQgKiBkdCAqIHNoaWZ0X2RpcjtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBkaWZmID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICdkeCcgOiB0aGlzLmNoYXJhY3Rlci54IC0gdGhpcy5ub2RlLngsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgJ2R5Jzp0aGlzLmNoYXJhY3Rlci55IC0gdGhpcy5ub2RlLnkgXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaWZmLmR5LCBkaWZmLmR4KSAqIC01Ny4yOTU4LzQ7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgcm90byA9IGNjLnJvdGF0ZVRvKDAuMDUsIGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubGlnaHRiZWFtLnJ1bkFjdGlvbihyb3RvKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYmVhbWJvdHRvbS54ID4gdGhpcy5jaGFyYWN0ZXIueCArIDMpIHNoaWZ0X2RpciA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuYmVhbWJvdHRvbS54IDwgdGhpcy5jaGFyYWN0ZXIueCAtIDMpIHNoaWZ0X2RpciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saWdodGJlYW0uYW5nbGUgKz0gMiAqIGR0ICogc2hpZnRfZGlyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leWVfcG9zLmFuZ2xlID0gdGhpcy5saWdodGJlYW0uYW5nbGU7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5saWdodGJlYW0ueCA9IHRoaXMubm9kZS54O1xyXG4gICAgLy99XHJcbiAgICAvLyB3YW5kZXIoKXtcclxuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAvLyAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgIC8vICAgICAgICAgLmJ5KDEsIHt4OiB0aGlzLm5vZGUucG9zaXRpb24ueC0xMDB9KSAgXHJcbiAgICAvLyAgICAgICAgIC5ieSgxLCB7eDogdGhpcy5ub2RlLnBvc2l0aW9uLngrMTAwfSlcclxuICAgIC8vICAgICApLnN0YXJ0KCk7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcbn1cclxuIl19