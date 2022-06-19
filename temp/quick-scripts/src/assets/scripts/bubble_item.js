"use strict";
cc._RF.push(module, 'ea24dvDShpMJLD9BwAs0/ri', 'bubble_item');
// scripts/bubble_item.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bubble_item = /** @class */ (function (_super) {
    __extends(bubble_item, _super);
    function bubble_item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_num = 0;
        _this.bubble_Speed = 0;
        _this.physicManager = null;
        return _this;
    }
    bubble_item.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -500);
        // ----------------------
        this.bubble_num = Math.floor(Math.random() * 3);
        this.wander();
        //this.bubble_show = this.node.getComponent(cc.Sprite);
        // this.generate_bubble();
    };
    bubble_item.prototype.start = function () {
        this.bubble_Speed = (Math.random() * 10 + 20);
        // this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.bubble_Speed,0);//
        this.wander();
    };
    // generate_bubble(){ //random print bubble and bubble lego on  canvas
    //     if(this.bubble_Prefabs == null) return;
    //     var bubble_pre = cc.instantiate(this.bubble_Prefabs);
    //     bubble_pre.x = this.node.x + 50 ;
    //     bubble_pre.y = this.node.y + 30 ;
    //     this.scheduleOnce(this.generate_bubble.bind(this), Math.random() * 3 + 10);
    //     cc.find("Canvas/root").addChild(bubble_pre);
    // }
    bubble_item.prototype.update = function (dt) {
    };
    bubble_item.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
    };
    bubble_item.prototype.wander = function () {
        cc.tween(this.node).repeatForever(cc.tween(this.node)
            .by(1, { x: 200 })
            .by(1, { x: -200 })).start();
    };
    bubble_item = __decorate([
        ccclass
    ], bubble_item);
    return bubble_item;
}(cc.Component));
exports.default = bubble_item;

cc._RF.pop();