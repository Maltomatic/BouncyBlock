
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/enemy moving sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8958wtIKZH/pz7sWUEkBOb', 'enemy moving sharp');
// scripts/enemy moving sharp.ts

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
var enemy_moving_sharp = /** @class */ (function (_super) {
    __extends(enemy_moving_sharp, _super);
    function enemy_moving_sharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.now = null;
        _this.next = null;
        _this.physicManager = null;
        return _this;
        // update (dt) {}
    }
    enemy_moving_sharp.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.now = "Up";
        this.next = "DOWN";
    };
    enemy_moving_sharp.prototype.start = function () {
        this.schedule(function () {
            this.changeState();
            // cc.log("Change state: " + this.state);
        }, 0.5);
    };
    enemy_moving_sharp.prototype.changeState = function () {
        switch (this.now) {
            case "Init":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                if (this.next == "Up") {
                    this.now = "Down";
                }
                else
                    this.now = "Up";
                break;
            case "Down":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -60);
                this.now = "Init";
                this.next = "Down";
                break;
            case "Up":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 60);
                this.now = "Init";
                this.next = "Up";
                break;
        }
    };
    enemy_moving_sharp.prototype.onBeginContact = function (contact, self, other) {
    };
    enemy_moving_sharp = __decorate([
        ccclass
    ], enemy_moving_sharp);
    return enemy_moving_sharp;
}(cc.Component));
exports.default = enemy_moving_sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXkgbW92aW5nIHNoYXJwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBNkNDO1FBM0NXLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBdUNoRCxpQkFBaUI7SUFDckIsQ0FBQztJQXRDRyxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFFO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFFO0lBQ3hCLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQix5Q0FBeUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDSSxRQUFPLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztpQkFDckI7O29CQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLE1BQU07WUFDTixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU07U0FDVDtJQUNMLENBQUM7SUFDRCwyQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO0lBQ25DLENBQUM7SUExQ2dCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNkN0QztJQUFELHlCQUFDO0NBN0NELEFBNkNDLENBN0MrQyxFQUFFLENBQUMsU0FBUyxHQTZDM0Q7a0JBN0NvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlbmVteV9tb3Zpbmdfc2hhcnAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBub3cgOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgbmV4dCA6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHsgXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3cgPSBcIlVwXCIgO1xuICAgICAgICB0aGlzLm5leHQgPSBcIkRPV05cIiA7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgICAgICAvLyBjYy5sb2coXCJDaGFuZ2Ugc3RhdGU6IFwiICsgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKCl7XG4gICAgICAgIHN3aXRjaCh0aGlzLm5vdyl7XG4gICAgICAgICAgICBjYXNlIFwiSW5pdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLDApO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubmV4dCA9PSBcIlVwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3cgPSBcIkRvd25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLm5vdyA9IFwiVXBcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgLTYwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdyA9IFwiSW5pdFwiO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IFwiRG93blwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCw2MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3cgPSBcIkluaXRcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBcIlVwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikgey8v56Kw5pKeXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==