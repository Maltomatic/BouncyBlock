
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9ac5BmMLxLho8t58liW+df', 'rule');
// scripts/rule.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rule = /** @class */ (function (_super) {
    __extends(rule, _super);
    function rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rule.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    rule.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        var back = new cc.Component.EventHandler();
        back.target = this.node;
        back.component = "rule";
        back.handler = "loadback";
        cc.find("Canvas/back").getComponent(cc.Button).clickEvents.push(back);
        var next = new cc.Component.EventHandler();
        next.target = this.node;
        next.component = "rule";
        next.handler = "loadnext";
        cc.find("Canvas/next").getComponent(cc.Button).clickEvents.push(next);
    };
    rule.prototype.loadback = function () {
        if (cc.find('Canvas/game_rule_1').active)
            cc.director.loadScene('menu');
        else if (cc.find('Canvas/game_rule_2').active)
            cc.find('Canvas/game_rule_1').active = true;
        else if (cc.find('Canvas/game_rule_3').active)
            cc.find('Canvas/game_rule_2').active = true;
        else if (cc.find('Canvas/game_rule_4').active) {
            cc.find('Canvas/game_rule_3').active = true;
            cc.find('Canvas/next').active = true;
        }
    };
    rule.prototype.loadnext = function () {
        if (cc.find('Canvas/game_rule_1').active)
            cc.find('Canvas/game_rule_1').active = false;
        else if (cc.find('Canvas/game_rule_2').active)
            cc.find('Canvas/game_rule_2').active = false;
        else if (cc.find('Canvas/game_rule_3').active) {
            cc.find('Canvas/game_rule_3').active = false;
            cc.find('Canvas/next').active = false;
        }
    };
    rule = __decorate([
        ccclass
    ], rule);
    return rule;
}(cc.Component));
exports.default = rule;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBb0NBLENBQUM7SUFuQ0cscUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUMxQixFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCx1QkFBUSxHQUFSO1FBQ0ksSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xFLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU07WUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNyRixJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNO1lBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDckYsSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN4QztJQUNMLENBQUM7SUFDRCx1QkFBUSxHQUFSO1FBQ0ksSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ2pGLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU07WUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN0RixJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDMUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQW5DZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9DeEI7SUFBRCxXQUFDO0NBcENELEFBb0NDLENBcENpQyxFQUFFLENBQUMsU0FBUyxHQW9DN0M7a0JBcENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcnVsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgb25sb2FkKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG5cbiAgICAgICAgbGV0IGJhY2sgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBiYWNrLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgYmFjay5jb21wb25lbnQgPSBcInJ1bGVcIjtcbiAgICAgICAgYmFjay5oYW5kbGVyID0gXCJsb2FkYmFja1wiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2JhY2tcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChiYWNrKTtcblxuICAgICAgICBsZXQgbmV4dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIG5leHQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBuZXh0LmNvbXBvbmVudCA9IFwicnVsZVwiO1xuICAgICAgICBuZXh0LmhhbmRsZXIgPSBcImxvYWRuZXh0XCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbmV4dFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG5leHQpO1xuICAgIH1cbiAgICBsb2FkYmFjaygpIHtcbiAgICAgICAgaWYoY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8xJykuYWN0aXZlKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzInKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYoY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8zJykuYWN0aXZlKSBjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzInKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfNCcpLmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8zJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9uZXh0JykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkbmV4dCgpIHtcbiAgICAgICAgaWYoY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8xJykuYWN0aXZlKSBjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzEnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzInKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMicpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBlbHNlIGlmKGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMycpLmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8zJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbmV4dCcpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==