
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4fb5zoFvJOybdzPXDOd6jk', 'player');
// scripts/player.ts

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
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.maplist = null;
        _this.sec0 = null;
        _this.sec1 = null;
        _this.sec2 = null;
        _this.Score = null;
        _this.Color = null;
        _this.coin_point = null;
        _this.coin = 0;
        _this.bubble_banana = null;
        _this.banana = 0;
        _this.bubble_lego = null;
        _this.lego = 0;
        _this.banana_Prefabs = null;
        _this.lego_Prefabs = null;
        _this.debug_mode = true;
        _this.hidden = false;
        _this.sec_list = [];
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#edebd3", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
            25: "#562c2c", 26: "#f2542d", 27: "#f5dfbb", 28: "#0e9595", 29: "#127474",
            31: "#8e9aaf", 32: "#cbc0d3", 33: "#efd3d7", 34: "#feeafa", 35: "#dee2ff" };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.setcolor = function () {
        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 6 * this.strip;
        this.color = 1 + Math.floor(Math.random() * 4);
        //console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    };
    Player.prototype.onLoad = function () {
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.dir = 0;
        this.section_count = 0;
    };
    Player.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                //console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * 3);
                //console.log(rand);
                //console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")");
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y < 0)
                    this.on_floor = true;
            }
            if (other.node.group == 'mound') {
                if (other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x /* && !touch.y*/) {
                    this.node.getChildByName('eye').active = false;
                    this.hidden = true;
                    // this.last_x = this.node.x;
                }
            }
        }
        else if (other.node.group == 'coin') { // @@ 
            this.update_coin(1);
            other.node.destroy();
        }
        else if (other.node.group == 'bubble') { // @@ 
            if (other.tag == 1) { // bubble banana
                console.log("banana");
                this.update_banana(1);
                other.node.destroy();
            }
            else if (other.tag == 2) { // bubble lego
                console.log("lego");
                this.update_lego(1);
                other.node.destroy();
            }
        }
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        //a bug happens when the color of mound is same as the color of player, not solved yet 
        // fixed with mound. player should now check collisions with mound
        if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
        }
        else if (other.node.group == 'mound') {
            if (other.node.getComponent(cc.TiledTile).gid == this.color + this.base) {
                this.node.getChildByName('eye').active = true;
                this.hidden = false;
            }
        }
    };
    Player.prototype.start = function () {
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2];
        this.score = 0;
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        //-------------------------------------------------
    };
    Player.prototype.update = function (dt) {
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        if (this.fly_state == 1) {
            this.node.x -= this.prev_dir * 0.4;
            this.fly_state = -1;
        }
        else if (this.stick) {
            console.log("stick");
            this.node.x += this.prev_dir * 0.4;
            this.stick = false;
        }
        this.node.scaleX = (this.dir >= 0) ? 1 : -1;
        var dy = this.getComponent(cc.RigidBody).linearVelocity.y;
        //----------sparkle emission rate is 0 when didnt move-----------------------------------------
        if (this.dir != 0 || dy > 10)
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
        else
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 0;
        //----------------------------------------------------
        //---------player spin---------------
        if ((dy > 10) && this.dir == 1)
            this.spin_right();
        else if ((dy > 10) && this.dir == -1)
            this.spin_left();
        else if (this.node.angle != 0)
            this.node.angle = 0;
        //------------------------------------
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    };
    Player.prototype.spin_right = function () {
        this.node.angle -= 12;
    };
    Player.prototype.spin_left = function () {
        this.node.angle += 12;
    };
    Player.prototype.camera_track = function () {
        if (this.fly_state && !this.dir)
            return;
        if (this.node.x < 100)
            this.camera.x = 0;
        else
            this.camera.x = this.node.x - 100;
    };
    Player.prototype.onKeyDown = function (event) {
        if (event.keyCode == cc.macro.KEY.space) {
            if (this.on_floor)
                this.jump();
        }
        if (event.keyCode == cc.macro.KEY.left) {
            this.dir = -1;
            this.prev_dir = this.dir;
        }
        else if (event.keyCode == cc.macro.KEY.right) {
            this.dir = 1;
            this.prev_dir = this.dir;
        }
        if (event.keyCode == cc.macro.KEY.p) {
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }
        else if (event.keyCode == cc.macro.KEY.r) {
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }
        if (event.keyCode == cc.macro.KEY.b && this.banana > 0) { // put banana
            var banana_pre = cc.instantiate(this.banana_Prefabs);
            banana_pre.x = this.node.x;
            banana_pre.y = this.node.y;
            cc.find("Canvas/root").addChild(banana_pre);
            this.update_banana(-1);
        }
        else if (event.keyCode == cc.macro.KEY.l && this.lego > 0) { //  put lego
            var lego_pre = cc.instantiate(this.lego_Prefabs);
            lego_pre.x = this.node.x;
            lego_pre.y = this.node.y - 1;
            cc.find("Canvas/root").addChild(lego_pre);
            this.update_lego(-1);
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.dir = 0;
                break;
            case cc.macro.KEY.right:
                this.dir = 0;
                break;
        }
    };
    Player.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        this.fly_state = 1;
        if (!this.debug_mode)
            this.on_floor = false;
        console.log(this.prev_dir + "fly state: " + this.fly_state);
    };
    Player.prototype.update_coin = function (number) {
        this.coin += number;
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    Player.prototype.update_banana = function (number) {
        this.banana += number;
        this.bubble_banana.getComponent(cc.Label).string = this.banana.toString();
    };
    Player.prototype.update_lego = function (number) {
        this.lego += number;
        this.bubble_lego.getComponent(cc.Label).string = this.lego.toString();
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "maplist", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec0", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "Score", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "Color", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "coin_point", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bubble_banana", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bubble_lego", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "banana_Prefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "lego_Prefabs", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXVSQztRQXBSRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFDL0IsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUduQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUM3QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFaEIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUUsZ0RBQWdEO1FBQ3hFLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFNLHdHQUF3RztRQUV4SSxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FB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QVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDYTtJQUkvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNXO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQXBDdEIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQXVSbEI7SUFBRCxhQUFDO0NBdlJELEFBdVJDLENBdlIyQixFQUFFLENBQUMsU0FBUyxHQXVSdkM7QUF2Ulksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcGxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgQ29sb3I6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luX3BvaW50IDogY2MuTm9kZSA9IG51bGw7ICBcclxuICAgIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfYmFuYW5hIDogY2MuTm9kZSA9IG51bGw7IFxyXG4gICAgYmFuYW5hOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnViYmxlX2xlZ28gOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBsZWdvOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBiYW5hbmFfUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsZWdvX1ByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7IFxyXG5cclxuICAgIGRlYnVnX21vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWNfbGlzdCA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcmV2X2RpcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZmx5X3N0YXRlOiBudW1iZXIgPSAwOyAgLy8gMCBmb3Igb24gZ3JvdW5kLCAxIGZvciBmbHlpbmcsIC0xIGZvciBmYWxsaW5nXHJcbiAgICBwcml2YXRlIG9uX2Zsb29yOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgc3RpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc2VjdGlvbl9jb3VudCA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb2xvcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmlwOiBudW1iZXIgPSAwO1xyXG4gICAgYmFzZTogbnVtYmVyID0gMDtcclxuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcclxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXHJcbiAgICAxMzpcIiMxYzMxNDRcIiwgMTQ6IFwiIzU5NmY2MlwiLCAxNTogXCIjN2VhMTZiXCIsMTY6IFwiI2MzZDg5OFwiLDE3OiBcIiM3MDE2MWRcIixcclxuICAgIDE5IDpcIiNlZGViZDNcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcclxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXHJcbiAgICAzMSA6XCIjOGU5YWFmXCIsIDMyIDpcIiNjYmMwZDNcIiwgMzMgOlwiI2VmZDNkN1wiLCAzNCA6XCIjZmVlYWZhXCIsIDM1IDpcIiNkZWUyZmZcIiB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gNip0aGlzLnN0cmlwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW5pdCBuZXh0IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmFuZCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY19saXN0W3JhbmRdKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwbGlzdC5hZGRDaGlsZChuZXh0X3NlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IC8vZWxzZSBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5zZWN0aW9uX2NvdW50KTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAgKyBcIiAoXCIgKyB0b3VjaC54ICsgXCIsIFwiICsgdG91Y2gueSArIFwiKVwiKVxyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSA8IDApIHRoaXMub25fZmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgdG91Y2gueC8qICYmICF0b3VjaC55Ki8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdjb2luJyl7IC8vIEBAIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9jb2luKDEpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdidWJibGUnKXsgLy8gQEAgXHJcbiAgICAgICAgICAgaWYob3RoZXIudGFnID09IDEpeyAvLyBidWJibGUgYmFuYW5hXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuYW5hXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFuYW5hKDEpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDIpeyAvLyBidWJibGUgbGVnb1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZ29cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9sZWdvKDEpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICAvL2EgYnVnIGhhcHBlbnMgd2hlbiB0aGUgY29sb3Igb2YgbW91bmQgaXMgc2FtZSBhcyB0aGUgY29sb3Igb2YgcGxheWVyLCBub3Qgc29sdmVkIHlldCBcclxuICAgICAgICAvLyBmaXhlZCB3aXRoIG1vdW5kLiBwbGF5ZXIgc2hvdWxkIG5vdyBjaGVjayBjb2xsaXNpb25zIHdpdGggbW91bmRcclxuICAgICAgICBpZih0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZiggb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKSB7XHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICB0aGlzLnNlY19saXN0ID0gW3RoaXMuc2VjMCwgdGhpcy5zZWMxLCB0aGlzLnNlYzJdO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tc3BhcmtsZSBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhX3RyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5kaXIgKiAyMDAgKiBkdDtcclxuICAgICAgICBpZih0aGlzLmZseV9zdGF0ZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5wcmV2X2RpciAqIDAuNDtcclxuICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAtMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0aWNrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGlja1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5wcmV2X2RpciAqIDAuNDtcclxuICAgICAgICAgICAgdGhpcy5zdGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gKHRoaXMuZGlyID49IDApID8gMSA6IC0xO1xyXG4gICAgICAgIHZhciBkeSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueTtcclxuICAgICAgICAvLy0tLS0tLS0tLS1zcGFya2xlIGVtaXNzaW9uIHJhdGUgaXMgMCB3aGVuIGRpZG50IG1vdmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmKHRoaXMuZGlyIT0wfHxkeT4xMCkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0xMDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW1pc3Npb25SYXRlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tcGxheWVyIHNwaW4tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gMSkgdGhpcy5zcGluX3JpZ2h0KCk7XHJcbiAgICAgICAgZWxzZSBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gLTEpIHRoaXMuc3Bpbl9sZWZ0KCk7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuYW5nbGUgIT0gMCkgdGhpcy5ub2RlLmFuZ2xlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLXNjb3JlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAoTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA+IHRoaXMuc2NvcmUpID8gTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA6IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5TY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNwaW5fcmlnaHQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgLT0gMTI7XHJcbiAgICB9XHJcbiAgICBzcGluX2xlZnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgKz0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhX3RyYWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgJiYgIXRoaXMuZGlyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDwgMTAwKSB0aGlzLmNhbWVyYS54ID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuY2FtZXJhLnggPSB0aGlzLm5vZGUueCAtIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnNwYWNlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5vbl9mbG9vcikgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmxlZnQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJldl9kaXIgPSB0aGlzLmRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucil7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmIgJiYgdGhpcy5iYW5hbmEgPiAwICl7Ly8gcHV0IGJhbmFuYVxyXG4gICAgICAgICAgICB2YXIgYmFuYW5hX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFuYW5hX1ByZWZhYnMpO1xyXG4gICAgICAgICAgICBiYW5hbmFfcHJlLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgYmFuYW5hX3ByZS55ID0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChiYW5hbmFfcHJlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFuYW5hKC0xKTtcclxuICAgICAgICB9ZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sICAmJiB0aGlzLmxlZ28gPiAwKXsgLy8gIHB1dCBsZWdvXHJcbiAgICAgICAgICAgIHZhciBsZWdvX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGVnb19QcmVmYWJzKTtcclxuICAgICAgICAgICAgbGVnb19wcmUueCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICBsZWdvX3ByZS55ID0gdGhpcy5ub2RlLnktMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290XCIpLmFkZENoaWxkKGxlZ29fcHJlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfbGVnbygtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAoKXsgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IDE7XHJcbiAgICAgICAgaWYoIXRoaXMuZGVidWdfbW9kZSkgdGhpcy5vbl9mbG9vciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJldl9kaXIgKyBcImZseSBzdGF0ZTogXCIgKyB0aGlzLmZseV9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfY29pbihudW1iZXIpeyAgLy8gQEAgXHJcbiAgICAgICAgdGhpcy5jb2luICs9IG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvaW5fcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvaW4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9iYW5hbmEobnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMuYmFuYW5hICs9IG51bWJlcjtcclxuICAgICAgICB0aGlzLmJ1YmJsZV9iYW5hbmEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmJhbmFuYS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX2xlZ28obnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMubGVnbyArPSBudW1iZXI7XHJcbiAgICAgICB0aGlzLmJ1YmJsZV9sZWdvLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5sZWdvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19