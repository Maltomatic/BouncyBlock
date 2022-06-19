
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sharp_down.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d26fZxbw1NSItYzpbTZZ6m', 'sharp_down');
// scripts/sharp_down.ts

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
exports.sharp_down = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var sharp_down = /** @class */ (function (_super) {
    __extends(sharp_down, _super);
    function sharp_down() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sharp_down.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    sharp_down.prototype.start = function () {
        var _this = this;
        var action = cc.repeatForever(cc.sequence(cc.moveBy(0.2, cc.v2(0, -210)), cc.delayTime(0.1), cc.moveBy(0, cc.v2(0, 210)), cc.delayTime(1.2)));
        if (this.node.name == 'sharp_d') {
            this.scheduleOnce(function () {
                _this.node.runAction(action);
            }, 1);
        }
        else if (this.node.name == 'sharp_d2') {
            this.scheduleOnce(function () {
                _this.node.runAction(action);
            }, 2);
        }
        else if (this.node.name == 'sharp_d3') {
            this.scheduleOnce(function () {
                _this.node.runAction(action);
            }, 3);
        }
    };
    sharp_down = __decorate([
        ccclass
    ], sharp_down);
    return sharp_down;
}(cc.Component));
exports.sharp_down = sharp_down;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2hhcnBfZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0MsOEJBQVk7SUFBNUM7O0lBeUJBLENBQUM7SUF0QkcsMkJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFDRCwwQkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUU7Z0JBQ2YsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7YUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTtZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFFO2dCQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO2FBQU0sSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBRTtnQkFDZixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDtJQUVMLENBQUM7SUF2QlEsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQXlCdEI7SUFBRCxpQkFBQztDQXpCRCxBQXlCQyxDQXpCK0IsRUFBRSxDQUFDLFNBQVMsR0F5QjNDO0FBekJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3Mgc2hhcnBfZG93biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjIsIGNjLnYyKDAsIC0yMTApKSAsY2MuZGVsYXlUaW1lKDAuMSksIGNjLm1vdmVCeSgwLCBjYy52MigwLCAyMTApKSwgY2MuZGVsYXlUaW1lKDEuMikpKTtcbiAgICBcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gJ3NoYXJwX2QnKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnBfZDInKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSwgMik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnBfZDMnKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSwgMyk7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgIH1cblxufVxuIl19