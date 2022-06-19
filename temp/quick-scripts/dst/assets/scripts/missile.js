
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/missile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce3ddykci1AjY3lRk+k7SkP', 'missile');
// scripts/missile.ts

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
exports.Missile = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Missile = /** @class */ (function (_super) {
    __extends(Missile, _super);
    function Missile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tgt_x = 0;
        _this.tgt_y = 0;
        _this.player = null;
        return _this;
    }
    Missile.prototype.onLoad = function () {
        this.player = cc.find('Canvas/root/player');
        this.tgt_x = this.player.x;
        this.tgt_y = this.player.y;
        // var diff = {
        //     'dx': this.player.x - this.node.x,
        //     'dy': this.player.y - this.node.y 
        // };
        // console.log(this.node.angle);
        // var angle = Math.atan2(diff.dy, diff.dx) * 57.2958/4;
        // this.node.angle += angle;
        // console.log(this.node.angle);
    };
    Missile.prototype.start = function () {
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 30;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = cc.color(0, 0, 0);
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = cc.color(0, 0, 0);
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = cc.color(0, 0, 0);
    };
    Missile.prototype.onPostSolve = function (contact, self, other) {
        if (other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies') {
            // deploy black particles
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).positionType = 1;
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
            this.node.active = false;
            this.node.destroy();
        }
    };
    Missile.prototype.update = function (dt) {
        if (this.node.y < -3500)
            this.node.destroy();
    };
    Missile = __decorate([
        ccclass
    ], Missile);
    return Missile;
}(cc.Component));
exports.Missile = Missile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWlzc2lsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkIsMkJBQVk7SUFBekM7UUFBQSxxRUEwQ0M7UUF4Q1csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBcUNuQyxDQUFDO0lBbkNHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFM0IsZUFBZTtRQUNmLHlDQUF5QztRQUN6Qyx5Q0FBeUM7UUFDekMsS0FBSztRQUNMLGdDQUFnQztRQUNoQyx3REFBd0Q7UUFDeEQsNEJBQTRCO1FBQzVCLGdDQUFnQztJQUNwQyxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0RixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsNkJBQVcsR0FBWCxVQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUM1QixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUMxSCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBekNRLE9BQU87UUFEbkIsT0FBTztPQUNLLE9BQU8sQ0EwQ25CO0lBQUQsY0FBQztDQTFDRCxBQTBDQyxDQTFDNEIsRUFBRSxDQUFDLFNBQVMsR0EwQ3hDO0FBMUNZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTWlzc2lsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSB0Z3RfeDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGd0X3k6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy50Z3RfeCA9IHRoaXMucGxheWVyLng7XHJcbiAgICAgICAgdGhpcy50Z3RfeSA9IHRoaXMucGxheWVyLnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFyIGRpZmYgPSB7XHJcbiAgICAgICAgLy8gICAgICdkeCc6IHRoaXMucGxheWVyLnggLSB0aGlzLm5vZGUueCxcclxuICAgICAgICAvLyAgICAgJ2R5JzogdGhpcy5wbGF5ZXIueSAtIHRoaXMubm9kZS55IFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmFuZ2xlKTtcclxuICAgICAgICAvLyB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGRpZmYuZHksIGRpZmYuZHgpICogNTcuMjk1OC80O1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSArPSBhbmdsZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuYW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW1pc3Npb25SYXRlID0gMzA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3IgPSBjYy5jb2xvcigwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXIgPSBjYy5jb2xvcigwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblBvc3RTb2x2ZShjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcgfHwgb3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInIHx8IG90aGVyLm5vZGUubmFtZSA9PSAnZW5lbWllcycpe1xyXG4gICAgICAgICAgICAvLyBkZXBsb3kgYmxhY2sgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5wb3NpdGlvblR5cGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW1pc3Npb25SYXRlID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLm5vZGUueSA8IC0zNTAwKSB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==