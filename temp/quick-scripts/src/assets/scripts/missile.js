"use strict";
cc._RF.push(module, 'ce3ddykci1AjY3lRk+k7SkP', 'missile');
// scripts/missile.ts

"use strict";
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
exports.Missile = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Missile = /** @class */ (function (_super) {
    __extends(Missile, _super);
    function Missile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tgt_x = 0;
        _this.tgt_y = 0;
        _this.player = null;
        _this.explode = null;
        _this.bulletFall = null;
        return _this;
    }
    Missile.prototype.onLoad = function () {
        this.player = cc.find('Canvas/root/player');
        this.tgt_x = this.player.x;
        this.tgt_y = this.player.y;
        // var diff = {
        //     'dx': this.player.x - this.node.x,
        //     'dy': this.player.y - this.node.y 
        // };
        // console.log(this.node.angle);
        // var angle = Math.atan2(diff.dy, diff.dx) * 57.2958/4;
        // this.node.angle += angle;
        // console.log(this.node.angle);
    };
    Missile.prototype.start = function () {
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 30;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = cc.color(0, 0, 0);
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = cc.color(0, 0, 0);
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = cc.color(0, 0, 0);
    };
    // onPostSolve(contact, self, other){
    //     if(other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies'){
    //         // deploy black particles
    //         // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).positionType = 1;
    //         // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
    //         var fire=cc.instantiate(this.explode);
    //         fire.x=this.node.x;
    //         fire.y=this.node.y+180;
    //         cc.find("Canvas").addChild(fire);
    //         this.node.active = false;
    //         this.node.destroy();
    //     }
    // }
    Missile.prototype.onBeginContact = function (contact, self, other) {
        if (other.node.group == 'ground' || other.node.group == 'mound' || other.node.name == 'player' || other.node.name == 'enemies') {
            // deploy black particles
            // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).positionType = 1;
            // this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
            var fire = cc.instantiate(this.explode);
            fire.x = this.node.x;
            fire.y = this.node.y + 180;
            cc.find("Canvas").addChild(fire);
            this.node.active = false;
            this.node.destroy();
        }
        if (other.node.group == 'ground' || other.node.group == 'mound') {
            cc.audioEngine.playEffect(this.bulletFall, false);
        }
    };
    Missile.prototype.update = function (dt) {
        if (this.node.y < -3500)
            this.node.destroy();
    };
    __decorate([
        property(cc.Prefab)
    ], Missile.prototype, "explode", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Missile.prototype, "bulletFall", void 0);
    Missile = __decorate([
        ccclass
    ], Missile);
    return Missile;
}(cc.Component));
exports.Missile = Missile;

cc._RF.pop();