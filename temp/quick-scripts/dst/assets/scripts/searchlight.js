
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
        _this.state = 0; // 0: normal movement, 1: track, 2: attack
        _this.dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.lockon = false;
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
        console.log("alert level: " + this.lightbeam.getComponent('light').alert_level);
        if (this.lightbeam.getComponent('light').alert_level == 0) {
            this.state = 0;
            this.lockon = false;
            // console.log("no target yet");
            this.node.x += this.searchlight_speed * dt * this.dir;
            // this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range/40);
            this.lightbeam.x = this.node.x;
            this.eye_pos.angle += this.dir * 0.6 * this.range / 50 / (this.searchlight_speed / 60);
            this.lightbeam.angle += this.dir * 0.2 * this.range / 50 / (this.searchlight_speed / 60);
            if (this.node.x <= this.leftbound || this.node.x >= this.rightbound)
                this.dir *= -1;
        }
        else {
            if (!this.lockon) {
                this.lockon = true;
                console.log("searchlight:: locked on");
                // move to be straight over player
                // this.lightbeam.angle += 0.5 * this.dir;
            }
        }
        // this.lightbeam.x = this.node.x;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VhcmNobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFvRUM7UUFqRUcsdUJBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRS9CLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsV0FBSyxHQUF1QixJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBTSwwQ0FBMEM7UUFFbEUsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFHaEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLHdCQUF3QjtRQUNoQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBbUNoRCxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLDhCQUE4QjtRQUM5QixrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELGlCQUFpQjtRQUVqQixJQUFJO0lBQ1IsQ0FBQztJQTFDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLGlCQUFpQjtJQUNyQixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hGLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEQsb0ZBQW9GO1lBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RGO2FBQUk7WUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN2QyxrQ0FBa0M7Z0JBQ2xDLDBDQUEwQzthQUM3QztTQUNKO1FBQ0Qsa0NBQWtDO0lBQ3RDLENBQUM7SUF4REQ7UUFEQyxRQUFRLEVBQUU7MERBQ29CO0lBRS9CO1FBREMsUUFBUSxFQUFFOzhDQUNRO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7OENBQ0s7SUFhakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNTO0lBdkJWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvRS9CO0lBQUQsa0JBQUM7Q0FwRUQsQUFvRUMsQ0FwRXdDLEVBQUUsQ0FBQyxTQUFTLEdBb0VwRDtrQkFwRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaGxpZ2h0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgc2VhcmNobGlnaHRfc3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHJhbmdlOiBudW1iZXIgPSA1MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBzcGFyayA6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHZpc190aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlciA9IDA7ICAgICAgLy8gMDogbm9ybWFsIG1vdmVtZW50LCAxOiB0cmFjaywgMjogYXR0YWNrXHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGxlZnRib3VuZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGxvY2tvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZXllX3BvcyA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaWdodGJlYW0gOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMud2FuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5zZWFyY2hsaWdodF9zcGVlZCwwKTtcclxuICAgICAgICB0aGlzLmxlZnRib3VuZCA9IHRoaXMubm9kZS54IC0gdGhpcy5yYW5nZTtcclxuICAgICAgICB0aGlzLnJpZ2h0Ym91bmQgPSB0aGlzLm5vZGUueCArIHRoaXMucmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWxlcnQgbGV2ZWw6IFwiICsgdGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsKTtcclxuICAgICAgICBpZih0aGlzLmxpZ2h0YmVhbS5nZXRDb21wb25lbnQoJ2xpZ2h0JykuYWxlcnRfbGV2ZWwgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vIHRhcmdldCB5ZXRcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc2VhcmNobGlnaHRfc3BlZWQgKiBkdCAqIHRoaXMuZGlyO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxpZ2h0YmVhbS54ICs9IHRoaXMuc2VhcmNobGlnaHRfc3BlZWQgKiBkdCAqIHRoaXMuZGlyIC8gKDIgKiB0aGlzLnJhbmdlLzQwKTtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJlYW0ueCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICB0aGlzLmV5ZV9wb3MuYW5nbGUgKz0gdGhpcy5kaXIgKiAwLjYgKiB0aGlzLnJhbmdlLzUwIC8gKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQvNjApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0YmVhbS5hbmdsZSArPSB0aGlzLmRpciAqIDAuMiAqIHRoaXMucmFuZ2UvNTAgLyAodGhpcy5zZWFyY2hsaWdodF9zcGVlZC82MCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54IDw9IHRoaXMubGVmdGJvdW5kIHx8IHRoaXMubm9kZS54ID49IHRoaXMucmlnaHRib3VuZCkgdGhpcy5kaXIgKj0gLTE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmxvY2tvbil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGxpZ2h0OjogbG9ja2VkIG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0byBiZSBzdHJhaWdodCBvdmVyIHBsYXllclxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5saWdodGJlYW0uYW5nbGUgKz0gMC41ICogdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5saWdodGJlYW0ueCA9IHRoaXMubm9kZS54O1xyXG4gICAgfVxyXG4gICAgLy8gd2FuZGVyKCl7XHJcbiAgICAvLyAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5yZXBlYXRGb3JldmVyKFxyXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAvLyAgICAgICAgIC5ieSgxLCB7eDogdGhpcy5ub2RlLnBvc2l0aW9uLngtMTAwfSkgIFxyXG4gICAgLy8gICAgICAgICAuYnkoMSwge3g6IHRoaXMubm9kZS5wb3NpdGlvbi54KzEwMH0pXHJcbiAgICAvLyAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==