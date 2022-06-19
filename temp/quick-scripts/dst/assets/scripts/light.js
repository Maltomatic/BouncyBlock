
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
        _this.bullet = null;
        _this.alert_level = 0; // 0: don't see   1: stare, pass by  2: attack
        _this.watch = false;
        _this.body = null;
        _this.watch_x = 0;
        _this.watch_y = 0;
        _this.bottom = null;
        _this.raise_timer = 0.5;
        return _this;
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.5): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
        // spotlight 
    }
    // LIFE-CYCLE CALLBACKS:
    Lightbeam.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        this.character = cc.find('Canvas/root/player');
        this.bottom = this.node.getChildByName('bottom');
    };
    Lightbeam.prototype.start = function () {
        this.alert_level = 0;
        this.body = this.node.getParent();
        this.watch = false;
    };
    Lightbeam.prototype.onBeginContact = function (contact, self, other) {
        var touch = contact.getWorldManifold().normal;
        if (other.node.name == 'player') {
            // // this.watch_x = other.node.x;
            // // this.watch_y = other.node.y;
            // if(this.watch){
            //     this.watch = false;
            //     this.allclear();
            //     console.log("player left range");
            // }else if(this.watch == false){
            if (self.tag == 15 && this.alert_level != 1) {
                this.watch = false;
                this.allclear();
            }
            else {
                this.watch = true;
                console.log("player entered watch frame");
            }
        }
    };
    // onEndContact(contact, self, other){
    //     if(other.node.name == 'player'){
    //         this.watch = false;
    //         this.alert_level = 0;
    //         console.log("player out of range");
    //         this.allclear();
    //     }
    // }
    Lightbeam.prototype.allclear = function () {
        this.alert_level = 0;
        this.raise_timer = 0.5;
        this.node.getParent().getComponent('enemy_wrapper').state = 0;
        console.log("nothing to see");
        this.watch = false;
    };
    Lightbeam.prototype.update = function (dt) {
        // if(this.watch)console.log("watching");
        if (this.alert_level == 0 && this.watch) {
            if (!this.character.getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).hidden) {
                this.alert_level = 1;
                this.raise_timer = 0.5;
                console.log("player is being tracked");
                this.node.getParent().getComponent('enemy_wrapper').state = this.alert_level;
            }
        }
        else if (this.alert_level == 1 && this.watch) {
            this.raise_timer -= dt;
            if (this.node.scaleX < 1.5)
                this.node.scaleX += (1 - this.raise_timer) / 2;
            if (this.raise_timer < 0) {
                var vis = !(this.character.getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).hidden);
                if (vis) {
                    console.log("raise alert level to attack");
                    this.alert_level = 2;
                    this.node.getParent().getComponent('enemy_wrapper').state = 2;
                }
                else {
                    console.log("cease attack");
                    this.allclear();
                }
            }
        }
        else if (this.alert_level == 2) {
            console.log(this.character.x > this.node.position.x);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Lightbeam.prototype, "bullet", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBcUdDO1FBbkdXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFRLDhDQUE4QztRQUN0RSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxHQUFHLENBQUM7O1FBaUZsQywwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMERBQTBEO1FBQzFELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUF0Rkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxrQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBQztZQUMzQixrQ0FBa0M7WUFDbEMsa0NBQWtDO1lBQ2xDLGtCQUFrQjtZQUNsQiwwQkFBMEI7WUFDMUIsdUJBQXVCO1lBQ3ZCLHdDQUF3QztZQUN4QyxpQ0FBaUM7WUFDakMsSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBQztnQkFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7SUFDTCxDQUFDO0lBQ0Qsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDhDQUE4QztJQUM5QywyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLElBQUk7SUFFSiw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04seUNBQXlDO1FBQ3pDLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztZQUNuQyxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDO2dCQUMxRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEY7U0FDSjthQUFLLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztZQUN2QixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFDO2dCQUNwQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZILElBQUcsR0FBRyxFQUFDO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO2FBQUssSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQXZGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBTGhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FxR3JCO0lBQUQsZ0JBQUM7Q0FyR0QsQUFxR0MsQ0FyRzhCLEVBQUUsQ0FBQyxTQUFTLEdBcUcxQztBQXJHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIExpZ2h0YmVhbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgYWxlcnRfbGV2ZWw6IG51bWJlciA9IDA7ICAgICAgICAvLyAwOiBkb24ndCBzZWUgICAxOiBzdGFyZSwgcGFzcyBieSAgMjogYXR0YWNrXHJcbiAgICBwcml2YXRlIHdhdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJvZHk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB3YXRjaF94OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3YXRjaF95OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3R0b206IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByYWlzZV90aW1lcjogbnVtYmVyID0gMC41O1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xyXG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdib3R0b20nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5ub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInKXtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy53YXRjaF94ID0gb3RoZXIubm9kZS54O1xyXG4gICAgICAgICAgICAvLyAvLyB0aGlzLndhdGNoX3kgPSBvdGhlci5ub2RlLnk7XHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hbGxjbGVhcigpO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgbGVmdCByYW5nZVwiKTtcclxuICAgICAgICAgICAgLy8gfWVsc2UgaWYodGhpcy53YXRjaCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKHNlbGYudGFnID09IDE1ICYmIHRoaXMuYWxlcnRfbGV2ZWwgIT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBlbnRlcmVkIHdhdGNoIGZyYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgIC8vICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgLy8gICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgYWxsY2xlYXIoKXtcclxuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMC41O1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nIHRvIHNlZVwiKTtcclxuICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpY29uc29sZS5sb2coXCJ3YXRjaGluZ1wiKTtcclxuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDAgJiYgdGhpcy53YXRjaCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoKChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyk/ICdwbGF5ZXJfbXVsdGknIDogJ3BsYXllcicpKS5oaWRkZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMC41O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgaXMgYmVpbmcgdHJhY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IHRoaXMuYWxlcnRfbGV2ZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFsZXJ0X2xldmVsID09IDEgJiYgdGhpcy53YXRjaCl7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VfdGltZXIgLT0gZHQ7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5zY2FsZVggPCAxLjUpIHRoaXMubm9kZS5zY2FsZVggKz0gKDEtdGhpcy5yYWlzZV90aW1lcikvMjtcclxuICAgICAgICAgICAgaWYodGhpcy5yYWlzZV90aW1lciA8IDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpcyA9ICEodGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCgoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtdWx0aScpPyAncGxheWVyX211bHRpJyA6ICdwbGF5ZXInKSkuaGlkZGVuKTtcclxuICAgICAgICAgICAgICAgIGlmKHZpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyYWlzZSBhbGVydCBsZXZlbCB0byBhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Vhc2UgYXR0YWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhcmFjdGVyLnggPiB0aGlzLm5vZGUucG9zaXRpb24ueCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVE9ETyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBlZGdlIGRldGVjdGlvbjogdGltZSB0aGUgYW1vdW50IG9mIHRpbWUgdGhlIHBsYXllciB0YWtlcyBmcm9tIGFwcGVhcmluZyBpbiBsaWdodCByYW5nZSB0byBleWVzIGNsb3NpbmcgKHZpc190aW1lKVxyXG4gICAgLy8gKHQgPT0gMCk6IGp1c3QgbW92ZSBhd2F5XHJcbiAgICAvLyBlbHNlOiBsaWdodCBzd2luZyBvdmVyIHRvIHBsYXllclxyXG4gICAgICAgIC8vICgwIDwgdCA8PSAwLjUpOiBob3ZlciBvdmVyIHBsYXllciBicmllZmx5LCB0aGVuIG1vdmUgb25cclxuICAgICAgICAvLyBlbHNlOiBhdHRhY2sgcGxheWVyOyBwcm9qZWN0aWxlIHNwZWVkIHNob3VsZCBiZSBlcXVhbCB0byBwbGF5ZXIgbW92ZSBzcGVlZCBhbmQgZmlyZSBvbmNlIHBlciAwLjYgfiAxLjJzZWMgZGVwZW5kaW5nIG9uIHBsYXllciBzY29yZVxyXG4gICAgICAgICAgICAvLyBzcG90bGlnaHQgXHJcbn1cclxuIl19