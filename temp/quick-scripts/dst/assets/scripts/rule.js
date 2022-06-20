
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFvQ0EsQ0FBQztJQW5DRyxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELG9CQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRFLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNO1lBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEUsSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3JGLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU07WUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNyRixJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDMUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNO1lBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDakYsSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RGLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBbkNnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0N4QjtJQUFELFdBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0M3QztrQkFwQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcnVsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBvbmxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgYmFjayA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmFjay50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmFjay5jb21wb25lbnQgPSBcInJ1bGVcIjtcclxuICAgICAgICBiYWNrLmhhbmRsZXIgPSBcImxvYWRiYWNrXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYWNrXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmFjayk7XHJcblxyXG4gICAgICAgIGxldCBuZXh0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBuZXh0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBuZXh0LmNvbXBvbmVudCA9IFwicnVsZVwiO1xyXG4gICAgICAgIG5leHQuaGFuZGxlciA9IFwibG9hZG5leHRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL25leHRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChuZXh0KTtcclxuICAgIH1cclxuICAgIGxvYWRiYWNrKCkge1xyXG4gICAgICAgIGlmKGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMScpLmFjdGl2ZSkgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XHJcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzInKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzMnKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzQnKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8zJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL25leHQnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRuZXh0KCkge1xyXG4gICAgICAgIGlmKGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMScpLmFjdGl2ZSkgY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8xJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzInKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGVsc2UgaWYoY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8zJykuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbmV4dCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==