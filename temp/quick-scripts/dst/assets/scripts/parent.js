
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
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
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
            setTimeout(function () {
                _this.stunned = 0;
                _this.node.color = new cc.Color(255, 255, 255);
                _this.penalty = 220;
                _this.scheduleOnce(function () {
                    _this.penalty = 0;
                }, 1.5);
            }, 3000);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.update = function (dt) {
        console.log(this.node.x, this.node.y);
        this.speedup = 0.3 + 0.003 * parseInt(this.now_score.string); //每得一分加速0.03 //約七百多分會比player快
        if (!this.stunned)
            this.node.x += Math.max(0.32, (Math.min(this.speedup * 300, 200) + this.penalty) * dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOERDO1FBN0RHLGFBQU8sR0FBUSxHQUFHLENBQUM7UUFJbkIsYUFBTyxHQUFRLENBQUMsQ0FBQztRQUNULGFBQU8sR0FBVyxDQUFDLENBQUM7O1FBdUQ1QixpQkFBaUI7SUFDckIsQ0FBQztJQWhERyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFnQkM7UUFmRyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBRyxLQUFL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Ly8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHNwZWVkdXA6bnVtYmVyPTAuNztcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbm93X3Njb3JlOmNjLkxhYmVsO1xuICAgIGJlZm9yZV94Om51bWJlcjtcbiAgICBzdHVubmVkOm51bWJlcj0wO1xuICAgIHByaXZhdGUgcGVuYWx0eTogbnVtYmVyID0gMDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIGZvb3RzdGVwOmNjLkF1ZGlvQ2xpcDtcbiAgICBmb290c3RlcF9pZDpudW1iZXI7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF5ZXI6Y2MuTm9kZTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYmVmb3JlX3g9dGhpcy5ub2RlLng7XG4gICAgICAgIHRoaXMuZm9vdHN0ZXBfaWQ9Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZvb3RzdGVwLCB0cnVlKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuZm9vdHN0ZXBfaWQsMSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XG4gICAgICAgIHZhciB0b3VjaCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lPT1cImxlZ29cIilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdHVubmVkPTE7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVubmVkPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yPW5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5hbHR5ID0gMjIwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5hbHR5ID0gMDtcbiAgICAgICAgICAgICAgICB9LCAxLjUpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcbiAgICAgICAgdGhpcy5zcGVlZHVwID0gMC4zICsgMC4wMDMqcGFyc2VJbnQodGhpcy5ub3dfc2NvcmUuc3RyaW5nKTsgIC8v5q+P5b6X5LiA5YiG5Yqg6YCfMC4wMyAvL+e0hOS4g+eZvuWkmuWIhuacg+avlHBsYXllcuW/q1xuICAgICAgICBpZighdGhpcy5zdHVubmVkKSB0aGlzLm5vZGUueCArPSBNYXRoLm1heCgwLjMyLCAoTWF0aC5taW4odGhpcy5zcGVlZHVwICogMzAwLCAyMDApICsgdGhpcy5wZW5hbHR5KSogZHQpO1xuICAgICAgICBlbHNlIHRoaXMubm9kZS54Kz0wO1xuICAgICAgICBpZihNYXRoLmFicyh0aGlzLm5vZGUueC10aGlzLmJlZm9yZV94KTw9MC4zJiZ0aGlzLnN0dW5uZWQ9PTApIHRoaXMuanVtcCgpO1xuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xuICAgICAgICB2YXIgY2xvc2U9NjgwLSh0aGlzLnBsYXllci54LXRoaXMubm9kZS54KTtcbiAgICAgICAgaWYoY2xvc2U+PTApIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmZvb3RzdGVwX2lkLGNsb3NlLzY4MCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAganVtcCgpeyAgICBcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=