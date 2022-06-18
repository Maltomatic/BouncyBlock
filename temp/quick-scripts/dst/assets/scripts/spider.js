
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/spider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cb3fLVW15AforolOA9VO1/', 'spider');
// scripts/spider.ts

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
exports.spider = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var spider = /** @class */ (function (_super) {
    __extends(spider, _super);
    function spider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveDir = 1;
        return _this;
    }
    spider.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    spider.prototype.start = function () {
        //this.node.scaleX = -this.node.scaleX;
        var body = this.getComponent(cc.RigidBody);
        //body.linearVelocity = cc.v2(250,0);
        console.log("V = ", body.linearVelocity);
    };
    spider.prototype.update = function () {
        this.node.x += 5 * this.moveDir;
        //this.node.scaleX = (this.moveDir >= 0) ? 1 : -1;
    };
    spider.prototype.onBeginContact = function (contact, self, other) {
        if ((other.node.group == 'mound') && contact.getWorldManifold().normal.y == 0) {
            this.moveDir *= -1;
            /*if( (this.getComponent(cc.RigidBody).linearVelocity.x > 0 && contact.getWorldManifold().normal.x == 1) || (this.getComponent(cc.RigidBody).linearVelocity.x < 0 && contact.getWorldManifold().normal.x == -1)) {
                console.log(other.node.group, contact.getWorldManifold().normal.x, contact.getWorldManifold().normal.y);
                //this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.getComponent(cc.RigidBody).linearVelocity.x, 0);
                //this.node.scaleX = -this.node.scaleX;
                this.moveDir *= -1;
            }*/
        }
        else
            contact.enabled = false;
    };
    spider = __decorate([
        ccclass
    ], spider);
    return spider;
}(cc.Component));
exports.spider = spider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NwaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUF3Q0M7UUF0Q0csYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUFzQ3hCLENBQUM7SUFuQ0csdUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRW5ELENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBRUksdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLHFDQUFxQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFHN0MsQ0FBQztJQUNELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxrREFBa0Q7SUFDdEQsQ0FBQztJQUNBLCtCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUcsSUFBSSxFQUFHLEtBQUs7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRTNFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkI7Ozs7O2VBS0c7U0FDTjs7WUFDSSxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBbENRLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0F3Q2xCO0lBQUQsYUFBQztDQXhDRCxBQXdDQyxDQXhDMkIsRUFBRSxDQUFDLFNBQVMsR0F3Q3ZDO0FBeENZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3Mgc3BpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG1vdmVEaXI6IG51bWJlciA9IDE7XG5cbiAgICBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAtdGhpcy5ub2RlLnNjYWxlWDtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAvL2JvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigyNTAsMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiViA9IFwiLCBib2R5LmxpbmVhclZlbG9jaXR5KTtcblxuXG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gNSAqIHRoaXMubW92ZURpcjtcbiAgICAgICAgLy90aGlzLm5vZGUuc2NhbGVYID0gKHRoaXMubW92ZURpciA+PSAwKSA/IDEgOiAtMTtcbiAgICB9XG4gICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QgLCBzZWxmICwgb3RoZXIpe1xuICAgICAgICBpZiggKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkgPT0gMCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXIgKj0gLTE7XG4gICAgICAgICAgICAvKmlmKCAodGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS54ID4gMCAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCA9PSAxKSB8fCAodGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS54IDwgMCAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCA9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwLCBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCwgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKC10aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LngsIDApO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IC10aGlzLm5vZGUuc2NhbGVYO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29udGFjdC5lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBcblxuXG59XG4iXX0=