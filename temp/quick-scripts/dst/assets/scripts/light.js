
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2SCxJQUFHLEdBQUcsRUFBQztvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNqRTtxQkFBSTtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ25CO2FBQ0o7U0FDSjthQUFLLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUF2RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUxoQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBcUdyQjtJQUFELGdCQUFDO0NBckdELEFBcUdDLENBckc4QixFQUFFLENBQUMsU0FBUyxHQXFHMUM7QUFyR1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGlnaHRiZWFtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnVsbGV0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgYWxlcnRfbGV2ZWw6IG51bWJlciA9IDA7ICAgICAgICAvLyAwOiBkb24ndCBzZWUgICAxOiBzdGFyZSwgcGFzcyBieSAgMjogYXR0YWNrXG4gICAgcHJpdmF0ZSB3YXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYm9keTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB3YXRjaF94OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2F0Y2hfeTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGJvdHRvbTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSByYWlzZV90aW1lcjogbnVtYmVyID0gMC41O1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xuICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYm90dG9tJyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcbiAgICAgICAgdGhpcy5ib2R5ID0gdGhpcy5ub2RlLmdldFBhcmVudCgpO1xuICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XG4gICAgfVxuXG4gICAgXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XG4gICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSAncGxheWVyJyl7XG4gICAgICAgICAgICAvLyAvLyB0aGlzLndhdGNoX3ggPSBvdGhlci5ub2RlLng7XG4gICAgICAgICAgICAvLyAvLyB0aGlzLndhdGNoX3kgPSBvdGhlci5ub2RlLnk7XG4gICAgICAgICAgICAvLyBpZih0aGlzLndhdGNoKXtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLndhdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGxlZnQgcmFuZ2VcIik7XG4gICAgICAgICAgICAvLyB9ZWxzZSBpZih0aGlzLndhdGNoID09IGZhbHNlKXtcbiAgICAgICAgICAgIGlmKHNlbGYudGFnID09IDE1ICYmIHRoaXMuYWxlcnRfbGV2ZWwgIT0gMSl7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMud2F0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGVudGVyZWQgd2F0Y2ggZnJhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcbiAgICAvLyAgICAgaWYob3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInKXtcbiAgICAvLyAgICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgb3V0IG9mIHJhbmdlXCIpO1xuICAgIC8vICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgYWxsY2xlYXIoKXtcbiAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDA7XG4gICAgICAgIHRoaXMucmFpc2VfdGltZXIgPSAwLjU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyB0byBzZWVcIik7XG4gICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpY29uc29sZS5sb2coXCJ3YXRjaGluZ1wiKTtcbiAgICAgICAgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAwICYmIHRoaXMud2F0Y2gpe1xuICAgICAgICAgICAgaWYoIXRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgoKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSAnbXVsdGknKT8gJ3BsYXllcl9tdWx0aScgOiAncGxheWVyJykpLmhpZGRlbil7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5yYWlzZV90aW1lciA9IDAuNTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBpcyBiZWluZyB0cmFja2VkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IHRoaXMuYWxlcnRfbGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMSAmJiB0aGlzLndhdGNoKXtcbiAgICAgICAgICAgIHRoaXMucmFpc2VfdGltZXIgLT0gZHQ7XG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYIDwgMS41KSB0aGlzLm5vZGUuc2NhbGVYICs9ICgxLXRoaXMucmFpc2VfdGltZXIpLzI7XG4gICAgICAgICAgICBpZih0aGlzLnJhaXNlX3RpbWVyIDwgMCl7XG4gICAgICAgICAgICAgICAgdmFyIHZpcyA9ICEodGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCgoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtdWx0aScpPyAncGxheWVyX211bHRpJyA6ICdwbGF5ZXInKSkuaGlkZGVuKTtcbiAgICAgICAgICAgICAgICBpZih2aXMpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJhaXNlIGFsZXJ0IGxldmVsIHRvIGF0dGFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2VuZW15X3dyYXBwZXInKS5zdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Vhc2UgYXR0YWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFsZXJ0X2xldmVsID09IDIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGFyYWN0ZXIueCA+IHRoaXMubm9kZS5wb3NpdGlvbi54KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVE9ETyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gZWRnZSBkZXRlY3Rpb246IHRpbWUgdGhlIGFtb3VudCBvZiB0aW1lIHRoZSBwbGF5ZXIgdGFrZXMgZnJvbSBhcHBlYXJpbmcgaW4gbGlnaHQgcmFuZ2UgdG8gZXllcyBjbG9zaW5nICh2aXNfdGltZSlcbiAgICAvLyAodCA9PSAwKToganVzdCBtb3ZlIGF3YXlcbiAgICAvLyBlbHNlOiBsaWdodCBzd2luZyBvdmVyIHRvIHBsYXllclxuICAgICAgICAvLyAoMCA8IHQgPD0gMC41KTogaG92ZXIgb3ZlciBwbGF5ZXIgYnJpZWZseSwgdGhlbiBtb3ZlIG9uXG4gICAgICAgIC8vIGVsc2U6IGF0dGFjayBwbGF5ZXI7IHByb2plY3RpbGUgc3BlZWQgc2hvdWxkIGJlIGVxdWFsIHRvIHBsYXllciBtb3ZlIHNwZWVkIGFuZCBmaXJlIG9uY2UgcGVyIDAuNiB+IDEuMnNlYyBkZXBlbmRpbmcgb24gcGxheWVyIHNjb3JlXG4gICAgICAgICAgICAvLyBzcG90bGlnaHQgXG59XG4iXX0=