
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/parent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '201d1+0To9E0LGUE/g+DzID', 'parent');
// scripts/parent.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speedup = 0.7;
        _this.stunned = 0;
        _this.penalty = 0;
        _this.animator = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.animator = this.getComponent(cc.Animation);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x = this.node.x;
        this.footstep_id = cc.audioEngine.playEffect(this.footstep, true);
        cc.audioEngine.setVolume(this.footstep_id, 1);
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        var touch = contact.getWorldManifold().normal;
        if (other.node.name == "lego") {
            this.stunned = 1;
            this.animator.play("parent_stun");
            setTimeout(function () {
                _this.stunned = 0;
                _this.animator.play("parent_norm");
                _this.node.color = new cc.Color(255, 255, 255);
                _this.penalty = 220;
                _this.scheduleOnce(function () {
                    _this.penalty = 0;
                }, 2);
            }, 4000);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.update = function (dt) {
        this.speedup = 0.3 + 0.003 * parseInt(this.now_score.string); //每得一分加速0.03 //約七百多分會比player快
        if (!this.stunned)
            this.node.x += Math.max(0.32, (Math.min(this.speedup * 300, 250) + this.penalty) * dt);
        else
            this.node.x += 0;
        if (Math.abs(this.node.x - this.before_x) <= 0.3 && this.stunned == 0)
            this.jump();
        this.before_x = this.node.x;
        var close = 680 - (this.player.x - this.node.x);
        if (close >= 0)
            cc.audioEngine.setVolume(this.footstep_id, close / 680);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "now_score", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "footstep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "player", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUVDO1FBaEVHLGFBQU8sR0FBUSxHQUFHLENBQUM7UUFJbkIsYUFBTyxHQUFRLENBQUMsQ0FBQztRQUNULGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsY0FBUSxHQUFpQixJQUFJLENBQUM7O1FBeUR0QyxpQkFBaUI7SUFDckIsQ0FBQztJQWxERyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpELENBQUM7SUFDRCxpQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElB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QWpFcUMsRUFBRSxDQUFDLFNBQVMsR0FpRWpEO2tCQWpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzcGVlZHVwOm51bWJlcj0wLjc7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBub3dfc2NvcmU6Y2MuTGFiZWw7XHJcbiAgICBiZWZvcmVfeDpudW1iZXI7XHJcbiAgICBzdHVubmVkOm51bWJlcj0wO1xyXG4gICAgcHJpdmF0ZSBwZW5hbHR5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRvcjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGZvb3RzdGVwOmNjLkF1ZGlvQ2xpcDtcclxuICAgIGZvb3RzdGVwX2lkOm51bWJlcjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjpjYy5Ob2RlO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xyXG4gICAgICAgIHRoaXMuZm9vdHN0ZXBfaWQ9Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZvb3RzdGVwLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5mb290c3RlcF9pZCwxKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lPT1cImxlZ29cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R1bm5lZD0xO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdG9yLnBsYXkoXCJwYXJlbnRfc3R1blwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVubmVkPTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdG9yLnBsYXkoXCJwYXJlbnRfbm9ybVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvcj1uZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5hbHR5ID0gMjIwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuYWx0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BlZWR1cCA9IDAuMyArIDAuMDAzKnBhcnNlSW50KHRoaXMubm93X3Njb3JlLnN0cmluZyk7ICAvL+avj+W+l+S4gOWIhuWKoOmAnzAuMDMgLy/ntITkuIPnmb7lpJrliIbmnIPmr5RwbGF5ZXLlv6tcclxuICAgICAgICBpZighdGhpcy5zdHVubmVkKSB0aGlzLm5vZGUueCArPSBNYXRoLm1heCgwLjMyLCAoTWF0aC5taW4odGhpcy5zcGVlZHVwICogMzAwLCAyNTApICsgdGhpcy5wZW5hbHR5KSogZHQpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLngrPTA7XHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5ub2RlLngtdGhpcy5iZWZvcmVfeCk8PTAuMyYmdGhpcy5zdHVubmVkPT0wKSB0aGlzLmp1bXAoKTtcclxuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xyXG4gICAgICAgIHZhciBjbG9zZT02ODAtKHRoaXMucGxheWVyLngtdGhpcy5ub2RlLngpO1xyXG4gICAgICAgIGlmKGNsb3NlPj0wKSBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5mb290c3RlcF9pZCxjbG9zZS82ODApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIGp1bXAoKXsgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19