
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
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x = this.node.x;
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        var touch = contact.getWorldManifold().normal;
        if (other.node.name == "lego") {
            this.stunned = 1;
            setTimeout(function () {
                _this.stunned = 0;
                _this.node.color = new cc.Color(255, 255, 255);
            }, 3000);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.update = function (dt) {
        this.speedup = 0.7 + 0.003 * parseInt(this.now_score.string); //每得一分加速0.03 //約七百多分會比player快
        if (this.stunned == 0)
            this.node.x += this.speedup;
        else
            this.node.x += 0;
        if (Math.abs(this.node.x - this.before_x) <= 0.3 && this.stunned == 0)
            this.jump();
        this.before_x = this.node.x;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "now_score", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdEQztRQS9DRyxhQUFPLEdBQVEsR0FBRyxDQUFDO1FBSW5CLGFBQU8sR0FBUSxDQUFDLENBQUM7O1FBMENqQixpQkFBaUI7SUFDckIsQ0FBQztJQXpDRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFjQztRQWJHLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFFLE1BQU0sRUFDMUI7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztZQUNmLFVBQVUsQ0FBQztnQkFFUCxLQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUV6QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakI7SUFHTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFDTCx5QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRyxHQUFDLEtBQUssR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLDZCQUE2QjtRQUN0RixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUUsQ0FBQztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7O1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQztRQUNwQixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFFLEdBQUcsSUFBRSxJQUFJLENBQUMsT0FBTyxJQUFFLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBQ0Qsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBM0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0E7SUFIRixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RqRDtrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgc3BlZWR1cDpudW1iZXI9MC43O1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBub3dfc2NvcmU6Y2MuTGFiZWw7XG4gICAgYmVmb3JlX3g6bnVtYmVyO1xuICAgIHN0dW5uZWQ6bnVtYmVyPTA7XG4gICAgXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xuICAgICAgICBcbiAgICB9XG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZT09XCJsZWdvXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3R1bm5lZD0xO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVubmVkPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yPW5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNwZWVkdXA9MC43KzAuMDAzKnBhcnNlSW50KHRoaXMubm93X3Njb3JlLnN0cmluZyk7ICAvL+avj+W+l+S4gOWIhuWKoOmAnzAuMDMgLy/ntITkuIPnmb7lpJrliIbmnIPmr5RwbGF5ZXLlv6tcbiAgICAgICAgaWYodGhpcy5zdHVubmVkPT0wKSB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkdXA7XG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLngrPTA7XG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMubm9kZS54LXRoaXMuYmVmb3JlX3gpPD0wLjMmJnRoaXMuc3R1bm5lZD09MCkgdGhpcy5qdW1wKCk7XG4gICAgICAgIHRoaXMuYmVmb3JlX3g9dGhpcy5ub2RlLng7XG4gICAgICAgIFxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAganVtcCgpeyAgICBcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=