
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/enemy_wrapper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        this.leftbound = this.node.x - this.range / 2;
        this.rightbound = this.node.x + this.range / 2;
    };
    Light_wrapper.prototype.update = function (dt) {
        if (this.state == 0) {
            // console.log(this.light.scaleX, this.light.x, this.node.position.x)
            this.enemy.x += 70 * dt * this.dir;
            if (this.enemy.position.x <= this.leftbound)
                this.dir = 1;
            else if (this.enemy.position.x >= this.rightbound)
                this.dir = -1;
            // var x = this.node.getNodeToWorldTransform();
            this.light.scaleX += dt * this.scale_dir;
            if (this.light.scaleX <= 0.6)
                this.scale_dir = 0.1;
            else if (this.light.scaleX >= 1.2)
                this.scale_dir = -0.1;
        }
        else {
            if (this.state == 1)
                this.atk = 0;
            else if (this.state == 2) {
                if (this.enemy.position.x > this.character.x + 10)
                    this.dir = -1;
                else if (this.enemy.position.x < this.character.x - 10)
                    this.dir = 1;
                else
                    this.dir = 0;
                console.log("track in direction " + this.dir);
                this.enemy.x += 205 * dt * this.dir;
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
        // console.log("shooting")
        var bullet = cc.instantiate(this.bullet);
        this.node.getParent().addChild(bullet);
        bullet.setPosition(this.enemy.position.x, this.node.position.y);
        bullet.y -= 10;
        // var offset = 20 * ((this.enemy.position.x < this.character.position.x)? -1:1);
        bullet.getComponent(cc.RigidBody).linearVelocity = cc.v2((this.character.x - this.enemy.position.x), (this.character.y - this.node.position.y)).normalizeSelf().multiply(cc.v2(800, 800));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXlfd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUErRUM7UUE1RUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXlEdEIsQ0FBQztJQXZERyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSw0RkFBNEY7UUFDNUYsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFD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LENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUwsNkVBQTZFO1FBQzdFLDJDQUEyQztJQUMvQyxDQUFDO0lBM0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNLO0lBR3pCO1FBREMsUUFBUTtnREFDUztJQVpULGFBQWE7UUFEekIsT0FBTztPQUNLLGFBQWEsQ0ErRXpCO0lBQUQsb0JBQUM7Q0EvRUQsQUErRUMsQ0EvRWtDLEVBQUUsQ0FBQyxTQUFTLEdBK0U5QztBQS9FWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIExpZ2h0X3dyYXBwZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5lbXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByYW5nZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGRpcjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgc2NhbGVfZGlyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBsZWZ0Ym91bmQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHJpZ2h0Ym91bmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBhdGs6IG51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZW15IGluaXQgd2l0aCByYW5nZTogXCIgKyB0aGlzLnJhbmdlICsgXCIgIGF0IFwiICsgdGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Ym91bmQgPSB0aGlzLm5vZGUueCAtIHRoaXMucmFuZ2UvMjtcclxuICAgICAgICB0aGlzLnJpZ2h0Ym91bmQgPSB0aGlzLm5vZGUueCArIHRoaXMucmFuZ2UvMjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAwKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saWdodC5zY2FsZVgsIHRoaXMubGlnaHQueCwgdGhpcy5ub2RlLnBvc2l0aW9uLngpXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXkueCArPSA3MCAqIGR0ICogdGhpcy5kaXI7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15LnBvc2l0aW9uLnggPD0gdGhpcy5sZWZ0Ym91bmQpIHRoaXMuZGlyID0gMTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15LnBvc2l0aW9uLnggPj0gdGhpcy5yaWdodGJvdW5kKSB0aGlzLmRpciA9IC0xO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIHggPSB0aGlzLm5vZGUuZ2V0Tm9kZVRvV29ybGRUcmFuc2Zvcm0oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlnaHQuc2NhbGVYICs9IGR0ICogdGhpcy5zY2FsZV9kaXJcclxuICAgICAgICAgICAgaWYodGhpcy5saWdodC5zY2FsZVggPD0gMC42KSB0aGlzLnNjYWxlX2RpciA9IDAuMTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmxpZ2h0LnNjYWxlWCA+PSAxLjIpIHRoaXMuc2NhbGVfZGlyID0gLTAuMTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAxKSB0aGlzLmF0ayA9IDA7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA+IHRoaXMuY2hhcmFjdGVyLngrMTApIHRoaXMuZGlyID0gLTE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8IHRoaXMuY2hhcmFjdGVyLngtMTApIHRoaXMuZGlyID0gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFjayBpbiBkaXJlY3Rpb24gXCIgKyB0aGlzLmRpcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15LnggKz0gMjA1ICogZHQgKiB0aGlzLmRpcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRrIC09IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hdGsgPCAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saWdodC54ID0gdGhpcy5lbmVteS54O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG9vdCgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvb3RpbmdcIilcclxuICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5hZGRDaGlsZChidWxsZXQpO1xyXG4gICAgICAgIGJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLmVuZW15LnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICBidWxsZXQueSAtPSAxMDtcclxuICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gMjAgKiAoKHRoaXMuZW5lbXkucG9zaXRpb24ueCA8IHRoaXMuY2hhcmFjdGVyLnBvc2l0aW9uLngpPyAtMToxKTtcclxuICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigodGhpcy5jaGFyYWN0ZXIueCAtIHRoaXMuZW5lbXkucG9zaXRpb24ueCksICh0aGlzLmNoYXJhY3Rlci55IC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkpKS5ub3JtYWxpemVTZWxmKCkubXVsdGlwbHkoY2MudjIoODAwLCA4MDApKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZSBidWxsZXQgYnkgbGlnaHQgYXQgXCIgKyB0aGlzLmNoYXJhY3Rlci54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9yb290XCIpLmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICB9XHJcbn1cclxuIl19