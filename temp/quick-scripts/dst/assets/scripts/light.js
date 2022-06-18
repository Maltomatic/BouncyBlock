
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
        _this.raise_timer = 0.2;
        return _this;
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.2): hover over player briefly, then move on
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
    Lightbeam.prototype.onEndContact = function (contact, self, other) {
        if (other.node.name == 'player' && self.tag == 15) {
            // this.watch_x = other.node.x;
            // this.watch_y = other.node.y;
            if (this.watch) {
                this.watch = false;
                this.allclear();
                console.log("player left range");
            }
            else if (this.watch == false) {
                this.watch = true;
                console.log("player entered watch frame");
            }
        }
    };
    // onEndContact(contact, self, other){
    //     if(other.node.name == 'player'){
    //         console.log("player out of range");
    //         this.allclear();
    //     }
    // }
    Lightbeam.prototype.allclear = function () {
        this.alert_level = 0;
        this.raise_timer = 3;
        this.node.getParent().getComponent('enemy_wrapper').state = 0;
        // console.log("nothing to see");
    };
    Lightbeam.prototype.update = function (dt) {
        // if(this.watch)console.log("watching");
        if (this.alert_level == 0 && !this.watch)
            this.allclear();
        else if (this.alert_level == 0 && this.watch) {
            if (!this.character.getComponent('player').hidden) {
                // if(this.bottom.x > this.character.x && this.node.x < this.character.x) this.node.skewX -= -5;
                // else if(this.bottom.x < this.character.x && this.node.x > this.character.x) this.node.skewX += -5;
                // else if(this.bottom.x < this.character.x && this.node.x < this.character.x) this.node.skewX += -5;
                // else if(this.bottom.x > this.character.x && this.node.x > this.character.x) this.node.skewX -= -5;
                this.alert_level = 1;
                console.log("player is being tracked");
                this.node.getParent().getComponent('enemy_wrapper').state = this.alert_level;
            }
        }
        if (this.alert_level == 1) {
            this.raise_timer -= dt;
            if (this.raise_timer < 0) {
                this.raise_timer = 0.2;
                var vis = !(this.character.getComponent('player').hidden);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBaUdDO1FBL0ZXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFRLDhDQUE4QztRQUN0RSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxHQUFHLENBQUM7O1FBNkVsQywwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMERBQTBEO1FBQzFELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUFsRkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxnQ0FBWSxHQUFaLFVBQWEsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQzdCLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUcsRUFBRSxFQUFDO1lBQzVDLCtCQUErQjtZQUMvQiwrQkFBK0I7WUFDL0IsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUNwQztpQkFBSyxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7SUFDTCxDQUFDO0lBQ0Qsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyw4Q0FBOEM7SUFDOUMsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixJQUFJO0lBRUosNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDOUQsaUNBQWlDO0lBQ3JDLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLHlDQUF5QztRQUN6QyxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEQsSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ3hDLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUM7Z0JBQzdDLGdHQUFnRztnQkFDaEcscUdBQXFHO2dCQUNyRyxxR0FBcUc7Z0JBQ3JHLHFHQUFxRztnQkFDckcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDaEY7U0FDSjtRQUVELElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7WUFDdkIsSUFBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUQsSUFBRyxHQUFHLEVBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDakU7cUJBQUk7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBbkZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFMaEIsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQWlHckI7SUFBRCxnQkFBQztDQWpHRCxBQWlHQyxDQWpHOEIsRUFBRSxDQUFDLFNBQVMsR0FpRzFDO0FBakdZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGlnaHRiZWFtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBhbGVydF9sZXZlbDogbnVtYmVyID0gMDsgICAgICAgIC8vIDA6IGRvbid0IHNlZSAgIDE6IHN0YXJlLCBwYXNzIGJ5ICAyOiBhdHRhY2tcclxuICAgIHByaXZhdGUgd2F0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYm9keTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHdhdGNoX3g6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdhdGNoX3k6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGJvdHRvbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJhaXNlX3RpbWVyOiBudW1iZXIgPSAwLjI7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2JvdHRvbScpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicgJiYgc2VsZi50YWc9PSAxNSl7XHJcbiAgICAgICAgICAgIC8vIHRoaXMud2F0Y2hfeCA9IG90aGVyLm5vZGUueDtcclxuICAgICAgICAgICAgLy8gdGhpcy53YXRjaF95ID0gb3RoZXIubm9kZS55O1xyXG4gICAgICAgICAgICBpZih0aGlzLndhdGNoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGxlZnQgcmFuZ2VcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMud2F0Y2ggPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBlbnRlcmVkIHdhdGNoIGZyYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgIC8vICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgYWxsY2xlYXIoKXtcclxuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcclxuICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMztcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykuc3RhdGUgPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90aGluZyB0byBzZWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpY29uc29sZS5sb2coXCJ3YXRjaGluZ1wiKTtcclxuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDAgJiYgIXRoaXMud2F0Y2gpIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMCAmJiB0aGlzLndhdGNoKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuaGlkZGVuKXtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMuYm90dG9tLnggPiB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54IDwgdGhpcy5jaGFyYWN0ZXIueCkgdGhpcy5ub2RlLnNrZXdYIC09IC01O1xyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZih0aGlzLmJvdHRvbS54IDwgdGhpcy5jaGFyYWN0ZXIueCAmJiB0aGlzLm5vZGUueCA+IHRoaXMuY2hhcmFjdGVyLngpIHRoaXMubm9kZS5za2V3WCArPSAtNTtcclxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYodGhpcy5ib3R0b20ueCA8IHRoaXMuY2hhcmFjdGVyLnggJiYgdGhpcy5ub2RlLnggPCB0aGlzLmNoYXJhY3Rlci54KSB0aGlzLm5vZGUuc2tld1ggKz0gLTU7XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmKHRoaXMuYm90dG9tLnggPiB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54ID4gdGhpcy5jaGFyYWN0ZXIueCkgdGhpcy5ub2RlLnNrZXdYIC09IC01O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBpcyBiZWluZyB0cmFja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gdGhpcy5hbGVydF9sZXZlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZV90aW1lciAtPSBkdDtcclxuICAgICAgICAgICAgaWYodGhpcy5yYWlzZV90aW1lciA8IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWlzZV90aW1lciA9IDAuMjtcclxuICAgICAgICAgICAgICAgIHZhciB2aXMgPSAhKHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuaGlkZGVuKTtcclxuICAgICAgICAgICAgICAgIGlmKHZpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyYWlzZSBhbGVydCBsZXZlbCB0byBhdHRhY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Vhc2UgYXR0YWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFRPRE8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gZWRnZSBkZXRlY3Rpb246IHRpbWUgdGhlIGFtb3VudCBvZiB0aW1lIHRoZSBwbGF5ZXIgdGFrZXMgZnJvbSBhcHBlYXJpbmcgaW4gbGlnaHQgcmFuZ2UgdG8gZXllcyBjbG9zaW5nICh2aXNfdGltZSlcclxuICAgIC8vICh0ID09IDApOiBqdXN0IG1vdmUgYXdheVxyXG4gICAgLy8gZWxzZTogbGlnaHQgc3dpbmcgb3ZlciB0byBwbGF5ZXJcclxuICAgICAgICAvLyAoMCA8IHQgPD0gMC4yKTogaG92ZXIgb3ZlciBwbGF5ZXIgYnJpZWZseSwgdGhlbiBtb3ZlIG9uXHJcbiAgICAgICAgLy8gZWxzZTogYXR0YWNrIHBsYXllcjsgcHJvamVjdGlsZSBzcGVlZCBzaG91bGQgYmUgZXF1YWwgdG8gcGxheWVyIG1vdmUgc3BlZWQgYW5kIGZpcmUgb25jZSBwZXIgMC42IH4gMS4yc2VjIGRlcGVuZGluZyBvbiBwbGF5ZXIgc2NvcmVcclxuICAgICAgICAgICAgLy8gc3BvdGxpZ2h0IFxyXG59XHJcbiJdfQ==