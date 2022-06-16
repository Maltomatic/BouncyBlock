
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQXFHQztRQWxHRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQVEsOENBQThDO1FBQ3RFLFdBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBWSxLQUFLLENBQUM7O1FBcUYvQiwwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMERBQTBEO1FBQzFELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUExRkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFHRCxrQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElB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QUFDLFlBQVksQ0FBQztvQkFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsR0FBRyxDQUFDLENBQUE7b0JBQ2pELElBQUcsR0FBRyxFQUFDO3dCQUNILEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztxQkFDeEI7eUJBQUk7d0JBQ0QsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNuQjtnQkFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDWDtTQUNKO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxFQUFFO0lBQ04sQ0FBQztJQXpGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBSGpCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FxR3JCO0lBQUQsZ0JBQUM7Q0FyR0QsQUFxR0MsQ0FyRzhCLEVBQUUsQ0FBQyxTQUFTLEdBcUcxQztBQXJHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMaWdodGJlYW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGFsZXJ0X2xldmVsOiBudW1iZXIgPSAwOyAgICAgICAgLy8gMDogZG9uJ3Qgc2VlICAgMTogc3RhcmUsIHBhc3MgYnkgIDI6IGF0dGFja1xuICAgIHByaXZhdGUgd2F0Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHdhdGNoX3g6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB3YXRjaF95OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYXJtZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xuICAgIH1cblxuICAgIFxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInKXtcbiAgICAgICAgICAgIHRoaXMud2F0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy53YXRjaF94ID0gb3RoZXIubm9kZS54O1xuICAgICAgICAgICAgdGhpcy53YXRjaF95ID0gb3RoZXIubm9kZS55O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IHBsYXllclwiKTtcbiAgICAgICAgICAgIGlmKCEodGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5oaWRkZW4pKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmFybWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcG90dGVkIHBsYXllclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsY2xlYXIoKXtcbiAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDA7XG4gICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hcm1lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMCAmJiAhdGhpcy53YXRjaCkgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICBlbHNlIGlmKHRoaXMud2F0Y2gpe1xuICAgICAgICAgICAgaWYodGhpcy5jaGFyYWN0ZXIueCAhPSB0aGlzLndhdGNoX3ggfHwgdGhpcy5jaGFyYWN0ZXIueSAhPSB0aGlzLndhdGNoX3kgfHwgIXRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuaGlkZGVuKSB0aGlzLmFsZXJ0X2xldmVsID0gTWF0aC5tYXgoMSwgdGhpcy5hbGVydF9sZXZlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDEgJiYgIXRoaXMuYXJtZWQpe1xuICAgICAgICAgICAgdGhpcy5hcm1lZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PntcbiAgICAgICAgICAgICAgICB2YXIgdmlzID0gISh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aXNpYmxlIGZyb20gYWxlcnQgbGV2ZWwgMT8gXCIgKyB2aXMpO1xuICAgICAgICAgICAgICAgIGlmKHZpcyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFpc2UgYWxlcnQgbGV2ZWwgdG8gYXR0YWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcm1lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Vhc2UgYXR0YWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAyKXtcbiAgICAgICAgICAgIC8vIHdoYXQgdG8gZG8gYWZ0ZXIgcmFpc2luZyBhbGVydF9sZXZlbFxuICAgICAgICAgICAgLy8gdGFrZSB0dXJucyBzaG9vdGluZ1xuICAgICAgICAgICAgaWYodGhpcy5hcm1lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJtZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmlzID0gISh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlzaWJsZSBmcm9tIGFsZXJ0IGxldmVsIDI/IFwiICsgdmlzKVxuICAgICAgICAgICAgICAgICAgICBpZih2aXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcm1lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKXtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFRPRE8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGVkZ2UgZGV0ZWN0aW9uOiB0aW1lIHRoZSBhbW91bnQgb2YgdGltZSB0aGUgcGxheWVyIHRha2VzIGZyb20gYXBwZWFyaW5nIGluIGxpZ2h0IHJhbmdlIHRvIGV5ZXMgY2xvc2luZyAodmlzX3RpbWUpXG4gICAgLy8gKHQgPT0gMCk6IGp1c3QgbW92ZSBhd2F5XG4gICAgLy8gZWxzZTogbGlnaHQgc3dpbmcgb3ZlciB0byBwbGF5ZXJcbiAgICAgICAgLy8gKDAgPCB0IDw9IDAuMyk6IGhvdmVyIG92ZXIgcGxheWVyIGJyaWVmbHksIHRoZW4gbW92ZSBvblxuICAgICAgICAvLyBlbHNlOiBhdHRhY2sgcGxheWVyOyBwcm9qZWN0aWxlIHNwZWVkIHNob3VsZCBiZSBlcXVhbCB0byBwbGF5ZXIgbW92ZSBzcGVlZCBhbmQgZmlyZSBvbmNlIHBlciAwLjYgfiAxLjJzZWMgZGVwZW5kaW5nIG9uIHBsYXllciBzY29yZVxuICAgICAgICAgICAgLy8gc3BvdGxpZ2h0IFxufVxuIl19
