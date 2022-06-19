"use strict";
cc._RF.push(module, 'b7474pQMjlO57fgezzYOLXy', 'enemy_wrapper');
// scripts/enemy_wrapper.ts

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
exports.Light_wrapper = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Light_wrapper = /** @class */ (function (_super) {
    __extends(Light_wrapper, _super);
    function Light_wrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemy = null;
        _this.light = null;
        _this.bullet = null;
        _this.range = 0;
        _this.character = null;
        _this.dir = 1;
        _this.scale_dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.atk = 0;
        _this.state = 0;
        return _this;
    }
    Light_wrapper.prototype.onLoad = function () {
        this.character = cc.find('Canvas/root/player');
        cc.director.getPhysicsManager().enabled = true;
    };
    Light_wrapper.prototype.start = function () {
        // console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = /*this.node.x*/ -1 * this.range * 0.8;
        this.rightbound = /*this.node.x +*/ this.range * 0.8;
    };
    Light_wrapper.prototype.update = function (dt) {
        if (this.state == 0) {
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;
            if (this.enemy.x <= this.leftbound)
                this.dir = 1;
            else if (this.enemy.x >= this.rightbound)
                this.dir = -1;
            // var x = this.node.getNodeToWorldTransform();
            this.light.scaleX += dt * this.scale_dir;
            if (this.light.scaleX < -0.15)
                this.scale_dir = 0.3;
            else if (this.light.scaleX >= 1.2)
                this.scale_dir = -0.3;
        }
        else {
            if (this.state == 1)
                this.atk = 0;
            else if (this.state == 2) {
                var enempos = this.enemy.x + this.node.x;
                if (enempos > this.character.x + 10)
                    this.dir = -1;
                else if (enempos < this.character.x - 10)
                    this.dir = 1;
                else
                    this.dir = 0;
                // console.log("enemy position: " + enempos + "player position: " + this.character.x + "track in direction " + this.dir);
                this.enemy.x += 170 * dt * this.dir;
                this.atk -= dt;
                if (this.atk < 0) {
                    this.shoot();
                    this.atk = 0.5;
                }
            }
        }
        this.light.x = this.enemy.x;
    };
    Light_wrapper.prototype.shoot = function () {
        console.log("shooting");
        var bullet = cc.instantiate(this.bullet);
        this.node.addChild(bullet);
        bullet.setPosition(this.enemy.x /* + this.node.x*/, 0);
        bullet.y -= 10;
        // var offset = 20 * ((this.enemy.x < this.character.x)? -1:1);
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - (this.enemy.x + this.node.x)), (this.character.y - this.node.y)).normalizeSelf().multiply(cc.v2(700, 700));
        // console.log("create bullet by light at " + this.character.x, this.node.y);
        // cc.find("Canvas/root").addChild(bullet);
    };
    __decorate([
        property(cc.Node)
    ], Light_wrapper.prototype, "enemy", void 0);
    __decorate([
        property(cc.Node)
    ], Light_wrapper.prototype, "light", void 0);
    __decorate([
        property(cc.Prefab)
    ], Light_wrapper.prototype, "bullet", void 0);
    __decorate([
        property
    ], Light_wrapper.prototype, "range", void 0);
    Light_wrapper = __decorate([
        ccclass
    ], Light_wrapper);
    return Light_wrapper;
}(cc.Component));
exports.Light_wrapper = Light_wrapper;

cc._RF.pop();