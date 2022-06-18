
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3FCQUFJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQW5GRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBTGhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FpR3JCO0lBQUQsZ0JBQUM7Q0FqR0QsQUFpR0MsQ0FqRzhCLEVBQUUsQ0FBQyxTQUFTLEdBaUcxQztBQWpHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMaWdodGJlYW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBhbGVydF9sZXZlbDogbnVtYmVyID0gMDsgICAgICAgIC8vIDA6IGRvbid0IHNlZSAgIDE6IHN0YXJlLCBwYXNzIGJ5ICAyOiBhdHRhY2tcbiAgICBwcml2YXRlIHdhdGNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBib2R5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHdhdGNoX3g6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB3YXRjaF95OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYm90dG9tOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHJhaXNlX3RpbWVyOiBudW1iZXIgPSAwLjI7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJyk7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdib3R0b20nKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCk7XG4gICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicgJiYgc2VsZi50YWc9PSAxNSl7XG4gICAgICAgICAgICAvLyB0aGlzLndhdGNoX3ggPSBvdGhlci5ub2RlLng7XG4gICAgICAgICAgICAvLyB0aGlzLndhdGNoX3kgPSBvdGhlci5ub2RlLnk7XG4gICAgICAgICAgICBpZih0aGlzLndhdGNoKXtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGxlZnQgcmFuZ2VcIik7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLndhdGNoID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBlbnRlcmVkIHdhdGNoIGZyYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XG4gICAgLy8gICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSAncGxheWVyJyl7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBvdXQgb2YgcmFuZ2VcIik7XG4gICAgLy8gICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhbGxjbGVhcigpe1xuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcbiAgICAgICAgdGhpcy5yYWlzZV90aW1lciA9IDM7XG4gICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90aGluZyB0byBzZWVcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyBpZih0aGlzLndhdGNoKWNvbnNvbGUubG9nKFwid2F0Y2hpbmdcIik7XG4gICAgICAgIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMCAmJiAhdGhpcy53YXRjaCkgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICBlbHNlIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMCAmJiB0aGlzLndhdGNoKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbil7XG4gICAgICAgICAgICAgICAgLy8gaWYodGhpcy5ib3R0b20ueCA+IHRoaXMuY2hhcmFjdGVyLnggJiYgdGhpcy5ub2RlLnggPCB0aGlzLmNoYXJhY3Rlci54KSB0aGlzLm5vZGUuc2tld1ggLT0gLTU7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZih0aGlzLmJvdHRvbS54IDwgdGhpcy5jaGFyYWN0ZXIueCAmJiB0aGlzLm5vZGUueCA+IHRoaXMuY2hhcmFjdGVyLngpIHRoaXMubm9kZS5za2V3WCArPSAtNTtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmKHRoaXMuYm90dG9tLnggPCB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54IDwgdGhpcy5jaGFyYWN0ZXIueCkgdGhpcy5ub2RlLnNrZXdYICs9IC01O1xuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYodGhpcy5ib3R0b20ueCA+IHRoaXMuY2hhcmFjdGVyLnggJiYgdGhpcy5ub2RlLnggPiB0aGlzLmNoYXJhY3Rlci54KSB0aGlzLm5vZGUuc2tld1ggLT0gLTU7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgaXMgYmVpbmcgdHJhY2tlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykuc3RhdGUgPSB0aGlzLmFsZXJ0X2xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMucmFpc2VfdGltZXIgLT0gZHQ7XG4gICAgICAgICAgICBpZih0aGlzLnJhaXNlX3RpbWVyIDwgMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWlzZV90aW1lciA9IDAuMjtcbiAgICAgICAgICAgICAgICB2YXIgdmlzID0gISh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLmhpZGRlbik7XG4gICAgICAgICAgICAgICAgaWYodmlzKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyYWlzZSBhbGVydCBsZXZlbCB0byBhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykuc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNlYXNlIGF0dGFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVE9ETyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gZWRnZSBkZXRlY3Rpb246IHRpbWUgdGhlIGFtb3VudCBvZiB0aW1lIHRoZSBwbGF5ZXIgdGFrZXMgZnJvbSBhcHBlYXJpbmcgaW4gbGlnaHQgcmFuZ2UgdG8gZXllcyBjbG9zaW5nICh2aXNfdGltZSlcbiAgICAvLyAodCA9PSAwKToganVzdCBtb3ZlIGF3YXlcbiAgICAvLyBlbHNlOiBsaWdodCBzd2luZyBvdmVyIHRvIHBsYXllclxuICAgICAgICAvLyAoMCA8IHQgPD0gMC4yKTogaG92ZXIgb3ZlciBwbGF5ZXIgYnJpZWZseSwgdGhlbiBtb3ZlIG9uXG4gICAgICAgIC8vIGVsc2U6IGF0dGFjayBwbGF5ZXI7IHByb2plY3RpbGUgc3BlZWQgc2hvdWxkIGJlIGVxdWFsIHRvIHBsYXllciBtb3ZlIHNwZWVkIGFuZCBmaXJlIG9uY2UgcGVyIDAuNiB+IDEuMnNlYyBkZXBlbmRpbmcgb24gcGxheWVyIHNjb3JlXG4gICAgICAgICAgICAvLyBzcG90bGlnaHQgXG59XG4iXX0=
