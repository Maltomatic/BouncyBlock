
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bubble_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnViYmxlX2l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFpREM7UUE5Q0csZ0JBQVUsR0FBWSxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDakIsbUJBQWEsR0FBc0IsSUFBSSxDQUFDOztJQTRDcEQsQ0FBQztJQTFDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsdURBQXVEO1FBQ3hELDBCQUEwQjtJQUM3QixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLHNGQUFzRjtRQUN0RixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSw4Q0FBOEM7SUFDOUMsNERBQTREO0lBQzVELHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsa0ZBQWtGO0lBQ2xGLG1EQUFtRDtJQUVuRCxJQUFJO0lBRUosNEJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUFDQSw0QkFBTSxHQUFOO1FBQ0csRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUNmLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUNwQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQWhEZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWlEL0I7SUFBRCxrQkFBQztDQWpERCxBQWlEQyxDQWpEd0MsRUFBRSxDQUFDLFNBQVMsR0FpRHBEO2tCQWpEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYnViYmxlX2l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBidWJibGVfbnVtIDogbnVtYmVyID0gMDtcbiAgICBidWJibGVfU3BlZWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5ncmF2aXR5ID0gY2MudjIgKDAsIC01MDApO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMuYnViYmxlX251bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgICAgICB0aGlzLndhbmRlcigpO1xuICAgICAgICAvL3RoaXMuYnViYmxlX3Nob3cgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgLy8gdGhpcy5nZW5lcmF0ZV9idWJibGUoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuYnViYmxlX1NwZWVkID0gKE1hdGgucmFuZG9tKCkgKiAxMCArIDIwKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5idWJibGVfU3BlZWQsMCk7Ly9cbiAgICAgICAgdGhpcy53YW5kZXIoKTtcblxuICAgIH1cbiAgICBcbiAgICAvLyBnZW5lcmF0ZV9idWJibGUoKXsgLy9yYW5kb20gcHJpbnQgYnViYmxlIGFuZCBidWJibGUgbGVnbyBvbiAgY2FudmFzXG4gICAgLy8gICAgIGlmKHRoaXMuYnViYmxlX1ByZWZhYnMgPT0gbnVsbCkgcmV0dXJuO1xuICAgIC8vICAgICB2YXIgYnViYmxlX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlX1ByZWZhYnMpO1xuICAgIC8vICAgICBidWJibGVfcHJlLnggPSB0aGlzLm5vZGUueCArIDUwIDtcbiAgICAvLyAgICAgYnViYmxlX3ByZS55ID0gdGhpcy5ub2RlLnkgKyAzMCA7XG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuZ2VuZXJhdGVfYnViYmxlLmJpbmQodGhpcyksIE1hdGgucmFuZG9tKCkgKiAzICsgMTApO1xuICAgIC8vICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3RcIikuYWRkQ2hpbGQoYnViYmxlX3ByZSk7XG5cbiAgICAvLyB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG5cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAgd2FuZGVyKCl7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5ieSgxLCB7eDogMjAwfSkgIFxuICAgICAgICAgICAgLmJ5KDEsIHt4OiAtMjAwfSlcbiAgICAgICAgKS5zdGFydCgpO1xuICAgIH1cbn1cbiJdfQ==