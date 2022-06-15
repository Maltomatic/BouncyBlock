"use strict";
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