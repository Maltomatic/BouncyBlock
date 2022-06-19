
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
        _this.sec3 = null;
        _this.sec4 = null;
        _this.sec5 = null;
        _this.sec6 = null;
        _this.sec7 = null;
        _this.sec8 = null;
        _this.sec9 = null;
        _this.sec10 = null;
        _this.sec11 = null;
        _this.sec12 = null;
        _this.sec13 = null;
        _this.sec14 = null;
        _this.sec15 = null;
        _this.sec16 = null;
        _this.sec17 = null;
        _this.sec18 = null;
        _this.sec19 = null;
        _this.sec20 = null;
        _this.Score = null;
        _this.Color = null;
        _this.coin_point = null;
        _this.coin = 0;
        _this.bubble_powerup = null;
        _this.powerup = 0;
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
        this.base = 1 + 6 * this.strip;
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
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count / 2, 21));
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
            if (other.tag == 3) { // colorful bubble
                this.update_powerup(1);
                other.node.destroy();
            }
        }
        else if (other.node.name == 'missile') {
            // die
            // deploy white particles
            this.node.active = false;
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
        }
        else if (other.node.name == 'sharp' || other.node.name == 'parent') {
            // die
            // deploy white particles
            this.node.active = false;
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
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
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec6, this.sec7, this.sec8, this.sec9, this.sec10, this.sec11, this.sec12, this.sec13, this.sec14, this.sec15, this.sec16, this.sec17, this.sec18, this.sec19, this.sec20];
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
    Player.prototype.update_powerup = function (number) {
        this.powerup += number;
        this.bubble_powerup.getComponent(cc.Label).string = this.powerup.toString();
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
        property(cc.Prefab)
    ], Player.prototype, "sec3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec5", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec6", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec7", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec8", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec9", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec10", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec11", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec12", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec13", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec14", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec15", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec16", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec17", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec18", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec19", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec20", void 0);
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
    ], Player.prototype, "bubble_powerup", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXlTQztRQXRTRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFJeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVC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LEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDblAsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkcsbURBQW1EO0lBQ3ZELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQUssSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMxRCwrRkFBK0Y7UUFDL0YsSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsSUFBRSxFQUFFLEdBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxHQUFDLEdBQUcsQ0FBQzs7WUFDdkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDO1FBQ3hGLHNEQUFzRDtRQUl0RCxxQ0FBcUM7UUFDckMsSUFBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDNUMsSUFBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNqRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDaEQsc0NBQXNDO1FBRXRDLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pFLDhDQUE4QztJQUdsRCxDQUFDO0lBQ0QsMkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUV2QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMEJBQVMsR0FBVCxVQUFVLEtBQUs7UUFFWCxJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDO1lBQ25DLElBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzVCO2FBQ0ksSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM1QjtRQUVELElBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO2FBQUssSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBQ0Qsd0JBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNELDRCQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsTUFBTTtRQUNqQixJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQXJTRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDYztJQS9EdkIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQXlTbEI7SUFBRCxhQUFDO0NBelNELEFBeVNDLENBelMyQixFQUFFLENBQUMsU0FBUyxHQXlTdkM7QUF6U1ksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcGxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM2OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjODogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzExOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE2OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzIwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgQ29sb3I6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luX3BvaW50IDogY2MuTm9kZSA9IG51bGw7ICBcclxuICAgIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfcG93ZXJ1cCA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIHBvd2VydXA6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZGVidWdfbW9kZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNlY19saXN0ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZXZfZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcclxuICAgIHByaXZhdGUgb25fZmxvb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzdGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VjdGlvbl9jb3VudCA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb2xvcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmlwOiBudW1iZXIgPSAwO1xyXG4gICAgYmFzZTogbnVtYmVyID0gMDtcclxuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcclxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXHJcbiAgICAxMzpcIiMxYzMxNDRcIiwgMTQ6IFwiIzU5NmY2MlwiLCAxNTogXCIjN2VhMTZiXCIsMTY6IFwiI2MzZDg5OFwiLDE3OiBcIiM3MDE2MWRcIixcclxuICAgIDE5IDpcIiNlZGViZDNcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcclxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXHJcbiAgICAzMSA6XCIjOGU5YWFmXCIsIDMyIDpcIiNjYmMwZDNcIiwgMzMgOlwiI2VmZDNkN1wiLCAzNCA6XCIjZmVlYWZhXCIsIDM1IDpcIiNkZWUyZmZcIiB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYXNlICsgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpKTtcclxuICAgICAgICB2YXIgY29sb3Jfc3RyID0gdGhpcy5jb2xvcl9saXN0W3RoaXMuYmFzZSArIHRoaXMuY29sb3JdO1xyXG4gICAgICAgIHZhciBjb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRjb2xvcigpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbl9jb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXApO1xyXG4gICAgICAgIHZhciB0b3VjaCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhpdCBub2RlIHdpdGggY29sb3IgXCIgKyBvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCk7XHJcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEwMDApe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGl0IG1hcmtlclwiKTtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gdGhpcy5zZWN0aW9uX2NvdW50KjE5MjApe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKDIrdGhpcy5zZWN0aW9uX2NvdW50LzIsIDIxKSlcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmFuZCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY19saXN0W3JhbmRdKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwbGlzdC5hZGRDaGlsZChuZXh0X3NlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IC8vZWxzZSBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5zZWN0aW9uX2NvdW50KTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAgKyBcIiAoXCIgKyB0b3VjaC54ICsgXCIsIFwiICsgdG91Y2gueSArIFwiKVwiKVxyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSA8IDApIHRoaXMub25fZmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgdG91Y2gueC8qICYmICF0b3VjaC55Ki8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdjb2luJyl7IC8vIEBAIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9jb2luKDEpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdidWJibGUnKXsgLy8gQEAgXHJcbiAgICAgICAgICAgaWYob3RoZXIudGFnID09IDMpeyAvLyBjb2xvcmZ1bCBidWJibGVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgxKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ21pc3NpbGUnKXtcclxuICAgICAgICAgICAgLy8gZGllXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb3NlXCIpXHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5uYW1lID09ICdzaGFycCd8fG90aGVyLm5vZGUubmFtZSA9PSAncGFyZW50Jyl7XHJcbiAgICAgICAgICAgIC8vIGRpZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9zZVwiKVxyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICAvL2EgYnVnIGhhcHBlbnMgd2hlbiB0aGUgY29sb3Igb2YgbW91bmQgaXMgc2FtZSBhcyB0aGUgY29sb3Igb2YgcGxheWVyLCBub3Qgc29sdmVkIHlldCBcclxuICAgICAgICAvLyBmaXhlZCB3aXRoIG1vdW5kLiBwbGF5ZXIgc2hvdWxkIG5vdyBjaGVjayBjb2xsaXNpb25zIHdpdGggbW91bmRcclxuICAgICAgICBpZih0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZiggb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKSB7XHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICB0aGlzLnNlY19saXN0ID0gW3RoaXMuc2VjMCwgdGhpcy5zZWMxLCB0aGlzLnNlYzIsIHRoaXMuc2VjMywgdGhpcy5zZWM0LHRoaXMuc2VjNSx0aGlzLnNlYzYsdGhpcy5zZWM3LHRoaXMuc2VjOCx0aGlzLnNlYzksdGhpcy5zZWMxMCx0aGlzLnNlYzExLHRoaXMuc2VjMTIsdGhpcy5zZWMxMyx0aGlzLnNlYzE0LHRoaXMuc2VjMTUsdGhpcy5zZWMxNix0aGlzLnNlYzE3LHRoaXMuc2VjMTgsdGhpcy5zZWMxOSx0aGlzLnNlYzIwXTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLXNwYXJrbGUgY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYV90cmFjaygpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyICogMjAwICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RpY2tcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLmRpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tc3BhcmtsZSBlbWlzc2lvbiByYXRlIGlzIDAgd2hlbiBkaWRudCBtb3ZlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZih0aGlzLmRpciE9MHx8ZHk+MTApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MTAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tLXBsYXllciBzcGluLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IDEpIHRoaXMuc3Bpbl9yaWdodCgpO1xyXG4gICAgICAgIGVsc2UgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IC0xKSB0aGlzLnNwaW5fbGVmdCgpO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5ub2RlLmFuZ2xlICE9IDApIHRoaXMubm9kZS5hbmdsZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS1zY29yZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLnNjb3JlID0gKE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgPiB0aGlzLnNjb3JlKSA/IE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgOiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuU2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzcGluX3JpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IDEyO1xyXG4gICAgfVxyXG4gICAgc3Bpbl9sZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlICYmICF0aGlzLmRpcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25fZmxvb3IpIHRoaXMuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnApe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgIH1lbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGwoKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAoKXsgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IDE7XHJcbiAgICAgICAgaWYoIXRoaXMuZGVidWdfbW9kZSkgdGhpcy5vbl9mbG9vciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJldl9kaXIgKyBcImZseSBzdGF0ZTogXCIgKyB0aGlzLmZseV9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfY29pbihudW1iZXIpeyAgLy8gQEAgXHJcbiAgICAgICAgdGhpcy5jb2luICs9IG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvaW5fcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvaW4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9wb3dlcnVwKG51bWJlcil7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLnBvd2VydXAgKz0gbnVtYmVyO1xyXG4gICAgICAgdGhpcy5idWJibGVfcG93ZXJ1cC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucG93ZXJ1cC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==