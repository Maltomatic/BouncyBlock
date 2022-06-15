
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/light.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46fe35ASG1DZ5runFzzwZXY', 'light');
// scripts/light.ts

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
exports.Lightbeam = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lightbeam = /** @class */ (function (_super) {
    __extends(Lightbeam, _super);
    function Lightbeam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.character = null;
        _this.alert_level = 0; // 0: don't see   1: stare, pass by  2: attack
        _this.watch = false;
        _this.watch_x = 0;
        _this.watch_y = 0;
        _this.armed = false;
        return _this;
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.3): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
        // spotlight 
    }
    // LIFE-CYCLE CALLBACKS:
    Lightbeam.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    Lightbeam.prototype.start = function () {
        this.alert_level = 0;
    };
    Lightbeam.prototype.onBeginContact = function (contact, self, other) {
        if (other.node.name == 'player') {
            this.watch = true;
            this.watch_x = other.node.x;
            this.watch_y = other.node.y;
            console.log("contact player");
            var is_visible = !(this.character.getComponent('player').hidden);
            if (is_visible) {
                this.alert_level = 1;
                console.log("spotted player");
            }
        }
    };
    // onPostSolve(contact, self, other){
    //     this.watch = false;
    //     if(other.node.name == 'player'){
    //         console.log("postsolve player");
    //         var is_visible = !(cc.find('Canvas/root/player').getComponent('player').hidden);
    //         if(is_visible){
    //             this.alert_level = 1;
    //             // console.log("spotted player");
    //             this.scheduleOnce(() =>{
    //                 if(!(cc.find('Canvas/root/player').getComponent('player').hidden)){
    //                     // console.log("can attack");
    //                     this.alert_level = 2;
    //                 }else{
    //                     // console.log("player has hidden");
    //                     this.alert_level = 0;
    //                 }
    //             }, 0.3);
    //         }
    //     }
    // }
    Lightbeam.prototype.onEndContact = function (contact, self, other) {
        if (other.node.name == 'player') {
            this.alert_level = 0;
            this.watch = false;
            this.armed = false;
        }
    };
    Lightbeam.prototype.update = function (dt) {
        var _this = this;
        if (this.watch) {
            if (this.character.x != this.watch_x || this.character.y != this.watch_y)
                this.alert_level = 1;
        }
        if (this.alert_level == 1 && !this.armed) {
            this.armed = true;
            this.scheduleOnce(function () {
                if (!(_this.character.getComponent('player').hidden)) {
                    console.log("can attack");
                    _this.alert_level = 2;
                }
                else {
                    console.log("player has hidden");
                    _this.alert_level = 0;
                    _this.armed = false;
                }
            }, 0.3);
        }
        else if (this.alert_level == 2) {
            // what to do after raising alert_level
            // take turns shooting
        }
    };
    __decorate([
        property(cc.Node)
    ], Lightbeam.prototype, "character", void 0);
    Lightbeam = __decorate([
        ccclass
    ], Lightbeam);
    return Lightbeam;
}(cc.Component));
exports.Lightbeam = Lightbeam;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBNEZDO1FBekZHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBVyxDQUFDLENBQUMsQ0FBUSw4Q0FBOEM7UUFDdEUsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBSyxHQUFZLEtBQUssQ0FBQzs7UUE0RS9CLDBFQUEwRTtRQUMxRSxvSEFBb0g7UUFDcEgsMkJBQTJCO1FBQzNCLG1DQUFtQztRQUMvQiwwREFBMEQ7UUFDMUQsc0lBQXNJO1FBQ2xJLGFBQWE7SUFDekIsQ0FBQztJQWpGRyx3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUdELGtDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBRyxVQUFVLEVBQUM7Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNqQztTQUNKO0lBQ0wsQ0FBQztJQUNELHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQywyRkFBMkY7SUFDM0YsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxnREFBZ0Q7SUFDaEQsdUNBQXVDO0lBQ3ZDLHNGQUFzRjtJQUN0RixvREFBb0Q7SUFDcEQsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QiwyREFBMkQ7SUFDM0QsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFFBQVE7SUFDUixJQUFJO0lBQ0osZ0NBQVksR0FBWixVQUFhLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUM3QixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUFWLGlCQW9CQztRQW5CRyxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDVixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDakc7UUFDRCxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLElBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztpQkFDeEI7cUJBQUk7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ3RCO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7YUFBSyxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFDO1lBQzNCLHVDQUF1QztZQUN2QyxzQkFBc0I7U0FDekI7SUFDTCxDQUFDO0lBaEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFIakIsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTRGckI7SUFBRCxnQkFBQztDQTVGRCxBQTRGQyxDQTVGOEIsRUFBRSxDQUFDLFNBQVMsR0E0RjFDO0FBNUZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGlnaHRiZWFtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgYWxlcnRfbGV2ZWw6IG51bWJlciA9IDA7ICAgICAgICAvLyAwOiBkb24ndCBzZWUgICAxOiBzdGFyZSwgcGFzcyBieSAgMjogYXR0YWNrXHJcbiAgICBwcml2YXRlIHdhdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHdhdGNoX3g6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdGNoX3k6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFybWVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy53YXRjaF94ID0gb3RoZXIubm9kZS54O1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoX3kgPSBvdGhlci5ub2RlLnk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udGFjdCBwbGF5ZXJcIik7XHJcbiAgICAgICAgICAgIHZhciBpc192aXNpYmxlID0gISh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbik7XHJcbiAgICAgICAgICAgIGlmKGlzX3Zpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwb3R0ZWQgcGxheWVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25Qb3N0U29sdmUoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgLy8gICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcclxuICAgIC8vICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBvc3Rzb2x2ZSBwbGF5ZXJcIik7XHJcbiAgICAvLyAgICAgICAgIHZhciBpc192aXNpYmxlID0gIShjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbik7XHJcbiAgICAvLyAgICAgICAgIGlmKGlzX3Zpc2libGUpe1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwb3R0ZWQgcGxheWVyXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT57XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYoIShjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbikpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbiBhdHRhY2tcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllciBoYXMgaGlkZGVuXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFybWVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLndhdGNoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyYWN0ZXIueCAhPSB0aGlzLndhdGNoX3ggfHwgdGhpcy5jaGFyYWN0ZXIueSAhPSB0aGlzLndhdGNoX3kpIHRoaXMuYWxlcnRfbGV2ZWwgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDEgJiYgIXRoaXMuYXJtZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmFybWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZighKHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuaGlkZGVuKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4gYXR0YWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgaGFzIGhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFybWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgLy8gd2hhdCB0byBkbyBhZnRlciByYWlzaW5nIGFsZXJ0X2xldmVsXHJcbiAgICAgICAgICAgIC8vIHRha2UgdHVybnMgc2hvb3RpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBUT0RPIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGVkZ2UgZGV0ZWN0aW9uOiB0aW1lIHRoZSBhbW91bnQgb2YgdGltZSB0aGUgcGxheWVyIHRha2VzIGZyb20gYXBwZWFyaW5nIGluIGxpZ2h0IHJhbmdlIHRvIGV5ZXMgY2xvc2luZyAodmlzX3RpbWUpXHJcbiAgICAvLyAodCA9PSAwKToganVzdCBtb3ZlIGF3YXlcclxuICAgIC8vIGVsc2U6IGxpZ2h0IHN3aW5nIG92ZXIgdG8gcGxheWVyXHJcbiAgICAgICAgLy8gKDAgPCB0IDw9IDAuMyk6IGhvdmVyIG92ZXIgcGxheWVyIGJyaWVmbHksIHRoZW4gbW92ZSBvblxyXG4gICAgICAgIC8vIGVsc2U6IGF0dGFjayBwbGF5ZXI7IHByb2plY3RpbGUgc3BlZWQgc2hvdWxkIGJlIGVxdWFsIHRvIHBsYXllciBtb3ZlIHNwZWVkIGFuZCBmaXJlIG9uY2UgcGVyIDAuNiB+IDEuMnNlYyBkZXBlbmRpbmcgb24gcGxheWVyIHNjb3JlXHJcbiAgICAgICAgICAgIC8vIHNwb3RsaWdodCBcclxufVxyXG4iXX0=