
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
            if (!(this.character.getComponent('player').hidden)) {
                this.alert_level = 1;
                this.armed = false;
                // console.log("spotted player");
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
            console.log("player out of range");
            this.allclear();
        }
    };
    Lightbeam.prototype.allclear = function () {
        this.alert_level = 0;
        this.watch = false;
        this.armed = false;
        this.unscheduleAllCallbacks();
    };
    Lightbeam.prototype.update = function (dt) {
        var _this = this;
        if (this.alert_level == 0 && !this.watch)
            this.allclear();
        else if (this.watch) {
            if (this.character.x != this.watch_x || this.character.y != this.watch_y || !this.character.getComponent('player').hidden)
                this.alert_level = Math.max(1, this.alert_level);
        }
        if (this.alert_level == 1 && !this.armed) {
            this.armed = true;
            this.scheduleOnce(function () {
                var vis = !(_this.character.getComponent('player').hidden);
                console.log("visible from alert level 1? " + vis);
                if (vis) {
                    console.log("raise alert level to attack");
                    _this.alert_level = 2;
                    _this.armed = true;
                }
                else {
                    console.log("cease attack");
                    _this.allclear();
                }
            }, 0.3);
        }
        else if (this.alert_level == 2) {
            // what to do after raising alert_level
            // take turns shooting
            if (this.armed) {
                this.shoot();
                this.armed = false;
            }
            else {
                this.scheduleOnce(function () {
                    var vis = !(_this.character.getComponent('player').hidden);
                    console.log("visible from alert level 2? " + vis);
                    if (vis) {
                        _this.armed = true;
                        _this.alert_level = 2;
                    }
                    else {
                        _this.allclear();
                    }
                }, 0.5);
            }
        }
    };
    Lightbeam.prototype.shoot = function () {
        //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBeUhDO1FBdEhHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBVyxDQUFDLENBQUMsQ0FBUSw4Q0FBOEM7UUFDdEUsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBSyxHQUFZLEtBQUssQ0FBQzs7UUF5Ry9CLDBFQUEwRTtRQUMxRSxvSEFBb0g7UUFDcEgsMkJBQTJCO1FBQzNCLG1DQUFtQztRQUMvQiwwREFBMEQ7UUFDMUQsc0lBQXNJO1FBQ2xJLGFBQWE7SUFDekIsQ0FBQztJQTlHRyx3QkFBd0I7SUFFeEIsMEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUdELGtDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQztnQkFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixpQ0FBaUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7SUFDRCxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLHVDQUF1QztJQUN2QywyQ0FBMkM7SUFDM0MsMkZBQTJGO0lBQzNGLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsZ0RBQWdEO0lBQ2hELHVDQUF1QztJQUN2QyxzRkFBc0Y7SUFDdEYsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsMkRBQTJEO0lBQzNELDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixRQUFRO0lBQ1IsSUFBSTtJQUNKLGdDQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDN0IsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQVYsaUJBdUNDO1FBdENHLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwRCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDZixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Z0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUs7UUFFRCxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsSUFBRyxHQUFHLEVBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO29CQUMzQyxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ3JCO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDthQUFLLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDM0IsdUNBQXVDO1lBQ3ZDLHNCQUFzQjtZQUN0QixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO2lCQUFJO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxDQUFBO29CQUNqRCxJQUFHLEdBQUcsRUFBQzt3QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDbEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7cUJBQ3hCO3lCQUFJO3dCQUNELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDbkI7Z0JBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7U0FDSjtJQUNMLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksRUFBRTtJQUNOLENBQUM7SUE3R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUhqQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBeUhyQjtJQUFELGdCQUFDO0NBekhELEFBeUhDLENBekg4QixFQUFFLENBQUMsU0FBUyxHQXlIMUM7QUF6SFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJlYW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBhbGVydF9sZXZlbDogbnVtYmVyID0gMDsgICAgICAgIC8vIDA6IGRvbid0IHNlZSAgIDE6IHN0YXJlLCBwYXNzIGJ5ICAyOiBhdHRhY2tcclxuICAgIHByaXZhdGUgd2F0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgd2F0Y2hfeDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd2F0Y2hfeTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYXJtZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSAncGxheWVyJyl7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoX3ggPSBvdGhlci5ub2RlLng7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hfeSA9IG90aGVyLm5vZGUueTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IHBsYXllclwiKTtcclxuICAgICAgICAgICAgaWYoISh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbikpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFybWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwb3R0ZWQgcGxheWVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25Qb3N0U29sdmUoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgLy8gICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcclxuICAgIC8vICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBvc3Rzb2x2ZSBwbGF5ZXJcIik7XHJcbiAgICAvLyAgICAgICAgIHZhciBpc192aXNpYmxlID0gIShjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbik7XHJcbiAgICAvLyAgICAgICAgIGlmKGlzX3Zpc2libGUpe1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwb3R0ZWQgcGxheWVyXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT57XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYoIShjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbikpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbiBhdHRhY2tcIik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllciBoYXMgaGlkZGVuXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxsY2xlYXIoKXtcclxuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcm1lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDAgJiYgIXRoaXMud2F0Y2gpIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMud2F0Y2gpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXJhY3Rlci54ICE9IHRoaXMud2F0Y2hfeCB8fCB0aGlzLmNoYXJhY3Rlci55ICE9IHRoaXMud2F0Y2hfeSB8fCAhdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5oaWRkZW4pIHRoaXMuYWxlcnRfbGV2ZWwgPSBNYXRoLm1heCgxLCB0aGlzLmFsZXJ0X2xldmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMSAmJiAhdGhpcy5hcm1lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PntcclxuICAgICAgICAgICAgICAgIHZhciB2aXMgPSAhKHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuaGlkZGVuKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZSBmcm9tIGFsZXJ0IGxldmVsIDE/IFwiICsgdmlzKTtcclxuICAgICAgICAgICAgICAgIGlmKHZpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyYWlzZSBhbGVydCBsZXZlbCB0byBhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcm1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNlYXNlIGF0dGFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgLy8gd2hhdCB0byBkbyBhZnRlciByYWlzaW5nIGFsZXJ0X2xldmVsXHJcbiAgICAgICAgICAgIC8vIHRha2UgdHVybnMgc2hvb3RpbmdcclxuICAgICAgICAgICAgaWYodGhpcy5hcm1lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFybWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpcyA9ICEodGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5oaWRkZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZSBmcm9tIGFsZXJ0IGxldmVsIDI/IFwiICsgdmlzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJtZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3QoKXtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVE9ETyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBlZGdlIGRldGVjdGlvbjogdGltZSB0aGUgYW1vdW50IG9mIHRpbWUgdGhlIHBsYXllciB0YWtlcyBmcm9tIGFwcGVhcmluZyBpbiBsaWdodCByYW5nZSB0byBleWVzIGNsb3NpbmcgKHZpc190aW1lKVxyXG4gICAgLy8gKHQgPT0gMCk6IGp1c3QgbW92ZSBhd2F5XHJcbiAgICAvLyBlbHNlOiBsaWdodCBzd2luZyBvdmVyIHRvIHBsYXllclxyXG4gICAgICAgIC8vICgwIDwgdCA8PSAwLjMpOiBob3ZlciBvdmVyIHBsYXllciBicmllZmx5LCB0aGVuIG1vdmUgb25cclxuICAgICAgICAvLyBlbHNlOiBhdHRhY2sgcGxheWVyOyBwcm9qZWN0aWxlIHNwZWVkIHNob3VsZCBiZSBlcXVhbCB0byBwbGF5ZXIgbW92ZSBzcGVlZCBhbmQgZmlyZSBvbmNlIHBlciAwLjYgfiAxLjJzZWMgZGVwZW5kaW5nIG9uIHBsYXllciBzY29yZVxyXG4gICAgICAgICAgICAvLyBzcG90bGlnaHQgXHJcbn1cclxuIl19