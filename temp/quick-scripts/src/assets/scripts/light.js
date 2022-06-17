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
        _this.bullet = null;
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
        this.character = cc.find('Canvas/root/player');
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
            if ((this.character.x != this.watch_x || this.character.y != this.watch_y) && !this.character.getComponent('player').hidden)
                this.alert_level = Math.max(1, this.alert_level);
        }
        if (this.alert_level == 1 && !this.armed) {
            this.armed = true;
            this.scheduleOnce(function () {
                var vis = !(_this.character.getComponent('player').hidden);
                // console.log("visible from alert level 1? " + vis);
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
            if (this.armed) {
                this.armed = false;
                this.scheduleOnce(function () {
                    // var vis = !(this.character.getComponent('player').hidden);
                    // // console.log("visible from alert level 2? " + vis)
                    // if(vis){
                    //     this.armed = true;
                    //     this.shoot();
                    //     this.alert_level = 2;
                    // }else{
                    //     this.allclear();
                    // }
                    _this.armed = true;
                    _this.shoot();
                    _this.alert_level = 2;
                }, 0.5);
            }
        }
    };
    Lightbeam.prototype.shoot = function () {
        console.log("shooting");
        var bullet = cc.instantiate(this.bullet);
        bullet.setPosition(this.node.x, 190);
        console.log("create bullet by light at " + this.node.x, this.node.y);
        cc.find("Canvas/root").addChild(bullet);
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