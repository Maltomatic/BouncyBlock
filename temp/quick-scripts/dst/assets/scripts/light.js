
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
        _this.raise_timer = 0.35;
        return _this;
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.35): hover over player briefly, then move on
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
            if (self.tag == 15 && this.alert_level == 0) {
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
        this.raise_timer = 0.35;
        this.node.getParent().getComponent('enemy_wrapper').state = 0;
        console.log("nothing to see");
    };
    Lightbeam.prototype.update = function (dt) {
        // if(this.watch)console.log("watching");
        if (this.alert_level == 0 && this.watch) {
            if (!this.character.getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).hidden) {
                this.alert_level = 1;
                this.raise_timer = 0.35;
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
            if (this.character.x > this.node.position.x + 100 || this.character.x < this.node.position.x - 100)
                this.allclear();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBcUdDO1FBbkdXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFRLDhDQUE4QztRQUN0RSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxJQUFJLENBQUM7O1FBaUZuQywwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMkRBQTJEO1FBQzNELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUF0Rkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FB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QUFDLFNBQVMsR0FxRzFDO0FBckdZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGlnaHRiZWFtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBhbGVydF9sZXZlbDogbnVtYmVyID0gMDsgICAgICAgIC8vIDA6IGRvbid0IHNlZSAgIDE6IHN0YXJlLCBwYXNzIGJ5ICAyOiBhdHRhY2tcclxuICAgIHByaXZhdGUgd2F0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYm9keTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHdhdGNoX3g6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdGNoX3k6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGJvdHRvbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJhaXNlX3RpbWVyOiBudW1iZXIgPSAwLjM1O1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xyXG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdib3R0b20nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5ub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInKXtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy53YXRjaF94ID0gb3RoZXIubm9kZS54O1xyXG4gICAgICAgICAgICAvLyAvLyB0aGlzLndhdGNoX3kgPSBvdGhlci5ub2RlLnk7XHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hbGxjbGVhcigpO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgbGVmdCByYW5nZVwiKTtcclxuICAgICAgICAgICAgLy8gfWVsc2UgaWYodGhpcy53YXRjaCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKHNlbGYudGFnID09IDE1ICYmIHRoaXMuYWxlcnRfbGV2ZWwgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBlbnRlcmVkIHdhdGNoIGZyYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgIC8vICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgLy8gICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgYWxsY2xlYXIoKXtcclxuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMC4zNTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykuc3RhdGUgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyB0byBzZWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpY29uc29sZS5sb2coXCJ3YXRjaGluZ1wiKTtcclxuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDAgJiYgdGhpcy53YXRjaCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoKChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyk/ICdwbGF5ZXJfbXVsdGknIDogJ3BsYXllcicpKS5oaWRkZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMC4zNTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGlzIGJlaW5nIHRyYWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykuc3RhdGUgPSB0aGlzLmFsZXJ0X2xldmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAxICYmIHRoaXMud2F0Y2gpe1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlX3RpbWVyIC09IGR0O1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYIDwgMS41KSB0aGlzLm5vZGUuc2NhbGVYICs9ICgxLXRoaXMucmFpc2VfdGltZXIpLzI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmFpc2VfdGltZXIgPCAwKXtcclxuICAgICAgICAgICAgICAgIHZhciB2aXMgPSAhKHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgoKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSAnbXVsdGknKT8gJ3BsYXllcl9tdWx0aScgOiAncGxheWVyJykpLmhpZGRlbik7XHJcbiAgICAgICAgICAgICAgICBpZih2aXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFpc2UgYWxlcnQgbGV2ZWwgdG8gYXR0YWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNlYXNlIGF0dGFja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFsZXJ0X2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoYXJhY3Rlci54ID4gdGhpcy5ub2RlLnBvc2l0aW9uLngpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXJhY3Rlci54ID4gdGhpcy5ub2RlLnBvc2l0aW9uLngrMTAwIHx8IHRoaXMuY2hhcmFjdGVyLnggPCB0aGlzLm5vZGUucG9zaXRpb24ueC0xMDApIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBUT0RPIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIGVkZ2UgZGV0ZWN0aW9uOiB0aW1lIHRoZSBhbW91bnQgb2YgdGltZSB0aGUgcGxheWVyIHRha2VzIGZyb20gYXBwZWFyaW5nIGluIGxpZ2h0IHJhbmdlIHRvIGV5ZXMgY2xvc2luZyAodmlzX3RpbWUpXHJcbiAgICAvLyAodCA9PSAwKToganVzdCBtb3ZlIGF3YXlcclxuICAgIC8vIGVsc2U6IGxpZ2h0IHN3aW5nIG92ZXIgdG8gcGxheWVyXHJcbiAgICAgICAgLy8gKDAgPCB0IDw9IDAuMzUpOiBob3ZlciBvdmVyIHBsYXllciBicmllZmx5LCB0aGVuIG1vdmUgb25cclxuICAgICAgICAvLyBlbHNlOiBhdHRhY2sgcGxheWVyOyBwcm9qZWN0aWxlIHNwZWVkIHNob3VsZCBiZSBlcXVhbCB0byBwbGF5ZXIgbW92ZSBzcGVlZCBhbmQgZmlyZSBvbmNlIHBlciAwLjYgfiAxLjJzZWMgZGVwZW5kaW5nIG9uIHBsYXllciBzY29yZVxyXG4gICAgICAgICAgICAvLyBzcG90bGlnaHQgXHJcbn1cclxuIl19