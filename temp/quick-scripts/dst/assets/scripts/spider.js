
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
    spider.prototype.update = function (dt) {
        this.node.x += 220 * dt * this.moveDir;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3BpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXdDQztRQXRDRyxhQUFPLEdBQVcsQ0FBQyxDQUFDOztJQXNDeEIsQ0FBQztJQW5DRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkQsQ0FBQztJQUNELHNCQUFLLEdBQUw7UUFFSSx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MscUNBQXFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUc3QyxDQUFDO0lBQ0QsdUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkMsa0RBQWtEO0lBQ3RELENBQUM7SUFDQSwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFHLElBQUksRUFBRyxLQUFLO1FBQ2xDLElBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUUxRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25COzs7OztlQUtHO1NBQ047O1lBQ0ksT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQWxDUSxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBd0NsQjtJQUFELGFBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzJCLEVBQUUsQ0FBQyxTQUFTLEdBd0N2QztBQXhDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIHNwaWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbW92ZURpcjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IC10aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAvL2JvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigyNTAsMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWID0gXCIsIGJvZHkubGluZWFyVmVsb2NpdHkpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSAyMjAgKiBkdCAqIHRoaXMubW92ZURpcjtcclxuICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID49IDApID8gMSA6IC0xO1xyXG4gICAgfVxyXG4gICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QgLCBzZWxmICwgb3RoZXIpe1xyXG4gICAgICAgIGlmKChvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpICYmIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ID09IDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcclxuICAgICAgICAgICAgLyppZiggKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueCA+IDAgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gMSkgfHwgKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueCA8IDAgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwLCBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCwgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoLXRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueCwgMCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAtdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgY29udGFjdC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbn1cclxuIl19