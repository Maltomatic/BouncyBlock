
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
        _this.sec10 = null;
        _this.sec11 = null;
        _this.sec12 = null;
        _this.sec13 = null;
        _this.sec17 = null;
        _this.sec18 = null;
        _this.sec19 = null;
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
                var rand = Math.floor(Math.random() * 13);
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
            else if (other.tag == 3) { // colorful bubble
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
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec10, this.sec11, this.sec12, this.sec13, this.sec17, this.sec18, this.sec19];
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
    ], Player.prototype, "sec17", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec18", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec19", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQW9VQztRQWpVRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUMvQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzdCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7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O3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDYTtJQUkvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNXO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNjO0lBNUR2QixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBb1VsQjtJQUFELGFBQUM7Q0FwVUQsQUFvVUMsQ0FwVTJCLEVBQUUsQ0FBQyxTQUFTLEdBb1V2QztBQXBVWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwbGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxNzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxODogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxOTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgQ29sb3I6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luX3BvaW50IDogY2MuTm9kZSA9IG51bGw7ICBcclxuICAgIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfYmFuYW5hIDogY2MuTm9kZSA9IG51bGw7IFxyXG4gICAgYmFuYW5hOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnViYmxlX2xlZ28gOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBsZWdvOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBiYW5hbmFfUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsZWdvX1ByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnViYmxlX3Bvd2VydXAgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBwb3dlcnVwOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGRlYnVnX21vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWNfbGlzdCA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcmV2X2RpcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZmx5X3N0YXRlOiBudW1iZXIgPSAwOyAgLy8gMCBmb3Igb24gZ3JvdW5kLCAxIGZvciBmbHlpbmcsIC0xIGZvciBmYWxsaW5nXHJcbiAgICBwcml2YXRlIG9uX2Zsb29yOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgc3RpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlY3Rpb25fY291bnQgPSAwOyAgICAgIC8vIG9uIGNvbnRhY3Qgd2l0aCBtYXJrZXIsIGlmIHNlY3Rpb25fY291bnQgKiAxOTIwIDwgdGhpcy5ub2RlLng6IGluaXQgbmV4dCBzZWN0aW9uIGFuZCBzZWN0aW9uX2NvdW50ICsrXHJcblxyXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29sb3I6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcclxuICAgIGJhc2U6IG51bWJlciA9IDA7XHJcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcclxuXHJcbiAgICAvLyBjb2xvciBpbmZvIG9mIG5ld190aWxlc2V0XHJcbiAgICBjb2xvcl9saXN0OiBhbnkgPSB7NzogXCIjMmIzYTY3XCIsODogXCIjNDk2YTgxXCIsOTogXCIjNjY5OTliXCIsIDEwOiBcIiNiM2FmOGZcIiwgMTE6IFwiI2ZmYzU4MlwiLFxyXG4gICAgMTM6XCIjMWMzMTQ0XCIsIDE0OiBcIiM1OTZmNjJcIiwgMTU6IFwiIzdlYTE2YlwiLDE2OiBcIiNjM2Q4OThcIiwxNzogXCIjNzAxNjFkXCIsXHJcbiAgICAxOSA6XCIjZWRlYmQzXCIsIDIwIDpcIiNlZGViZDNcIiwgMjEgOlwiI2RhNDE2N1wiLCAyMiA6XCIjZjRkMzVlXCIsIDIzIDpcIiNmNzg2NjRcIiwgXHJcbiAgICAyNSAgOlwiIzU2MmMyY1wiLCAyNiA6XCIjZjI1NDJkXCIsIDI3IDpcIiNmNWRmYmJcIiwgMjggOlwiIzBlOTU5NVwiLCAyOSA6XCIjMTI3NDc0XCIsIFxyXG4gICAgMzEgOlwiIzhlOWFhZlwiLCAzMiA6XCIjY2JjMGQzXCIsIDMzIDpcIiNlZmQzZDdcIiwgMzQgOlwiI2ZlZWFmYVwiLCAzNSA6XCIjZGVlMmZmXCIgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHNldGNvbG9yKCkge1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS1wbGF5ZXIgY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy9yYW5kb20gY2hvb3NlIHBsYXllciBjb2xvclxyXG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwO1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFzZSArICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSk7XHJcbiAgICAgICAgdmFyIGNvbG9yX3N0ciA9IHRoaXMuY29sb3JfbGlzdFt0aGlzLmJhc2UgKyB0aGlzLmNvbG9yXTtcclxuICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0Y29sb3IoKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwKTtcclxuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaXQgbm9kZSB3aXRoIGNvbG9yIFwiICsgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQpO1xyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAxMDAwKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImhpdCBtYXJrZXJcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID49IHRoaXMuc2VjdGlvbl9jb3VudCoxOTIwKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpbml0IG5leHQgc2VjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbl9jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMylcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmFuZCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY19saXN0W3JhbmRdKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwbGlzdC5hZGRDaGlsZChuZXh0X3NlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IC8vZWxzZSBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5zZWN0aW9uX2NvdW50KTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAgKyBcIiAoXCIgKyB0b3VjaC54ICsgXCIsIFwiICsgdG91Y2gueSArIFwiKVwiKVxyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSA8IDApIHRoaXMub25fZmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgdG91Y2gueC8qICYmICF0b3VjaC55Ki8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdjb2luJyl7IC8vIEBAIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9jb2luKDEpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdidWJibGUnKXsgLy8gQEAgXHJcbiAgICAgICAgICAgaWYob3RoZXIudGFnID09IDEpeyAvLyBidWJibGUgYmFuYW5hXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuYW5hXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFuYW5hKDEpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDIpeyAvLyBidWJibGUgbGVnb1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZ29cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9sZWdvKDEpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDMpeyAvLyBjb2xvcmZ1bCBidWJibGVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgxKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ21pc3NpbGUnKXtcclxuICAgICAgICAgICAgLy8gZGllXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb3NlXCIpXHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5uYW1lID09ICdzaGFycCd8fG90aGVyLm5vZGUubmFtZSA9PSAncGFyZW50Jyl7XHJcbiAgICAgICAgICAgIC8vIGRpZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb3NlXCIpXHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIC8vYSBidWcgaGFwcGVucyB3aGVuIHRoZSBjb2xvciBvZiBtb3VuZCBpcyBzYW1lIGFzIHRoZSBjb2xvciBvZiBwbGF5ZXIsIG5vdCBzb2x2ZWQgeWV0IFxyXG4gICAgICAgIC8vIGZpeGVkIHdpdGggbW91bmQuIHBsYXllciBzaG91bGQgbm93IGNoZWNrIGNvbGxpc2lvbnMgd2l0aCBtb3VuZFxyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgaWYob3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQgPT0gdGhpcy5jb2xvciArIHRoaXMuYmFzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjX2xpc3QgPSBbdGhpcy5zZWMwLCB0aGlzLnNlYzEsIHRoaXMuc2VjMiwgdGhpcy5zZWMzLCB0aGlzLnNlYzQsdGhpcy5zZWM1LHRoaXMuc2VjMTAsdGhpcy5zZWMxMSx0aGlzLnNlYzEyLHRoaXMuc2VjMTMsdGhpcy5zZWMxNyx0aGlzLnNlYzE4LHRoaXMuc2VjMTldO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tc3BhcmtsZSBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhX3RyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5kaXIgKiAyMDAgKiBkdDtcclxuICAgICAgICBpZih0aGlzLmZseV9zdGF0ZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5wcmV2X2RpciAqIDAuNDtcclxuICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAtMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0aWNrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGlja1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5wcmV2X2RpciAqIDAuNDtcclxuICAgICAgICAgICAgdGhpcy5zdGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gKHRoaXMuZGlyID49IDApID8gMSA6IC0xO1xyXG4gICAgICAgIHZhciBkeSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueTtcclxuICAgICAgICAvLy0tLS0tLS0tLS1zcGFya2xlIGVtaXNzaW9uIHJhdGUgaXMgMCB3aGVuIGRpZG50IG1vdmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmKHRoaXMuZGlyIT0wfHxkeT4xMCkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0xMDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW1pc3Npb25SYXRlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tcGxheWVyIHNwaW4tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gMSkgdGhpcy5zcGluX3JpZ2h0KCk7XHJcbiAgICAgICAgZWxzZSBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gLTEpIHRoaXMuc3Bpbl9sZWZ0KCk7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuYW5nbGUgIT0gMCkgdGhpcy5ub2RlLmFuZ2xlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLXNjb3JlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAoTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA+IHRoaXMuc2NvcmUpID8gTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA6IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5TY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNwaW5fcmlnaHQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgLT0gMTI7XHJcbiAgICB9XHJcbiAgICBzcGluX2xlZnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgKz0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhX3RyYWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgJiYgIXRoaXMuZGlyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDwgMTAwKSB0aGlzLmNhbWVyYS54ID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuY2FtZXJhLnggPSB0aGlzLm5vZGUueCAtIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnNwYWNlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5vbl9mbG9vcikgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmxlZnQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJldl9kaXIgPSB0aGlzLmRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucil7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmIgJiYgdGhpcy5iYW5hbmEgPiAwICl7Ly8gcHV0IGJhbmFuYVxyXG4gICAgICAgICAgICB2YXIgYmFuYW5hX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFuYW5hX1ByZWZhYnMpO1xyXG4gICAgICAgICAgICBiYW5hbmFfcHJlLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgYmFuYW5hX3ByZS55ID0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChiYW5hbmFfcHJlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFuYW5hKC0xKTtcclxuICAgICAgICB9ZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sICAmJiB0aGlzLmxlZ28gPiAwKXsgLy8gIHB1dCBsZWdvXHJcbiAgICAgICAgICAgIHZhciBsZWdvX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGVnb19QcmVmYWJzKTtcclxuICAgICAgICAgICAgbGVnb19wcmUueCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICBsZWdvX3ByZS55ID0gdGhpcy5ub2RlLnktMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290XCIpLmFkZENoaWxkKGxlZ29fcHJlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfbGVnbygtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAoKXsgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IDE7XHJcbiAgICAgICAgaWYoIXRoaXMuZGVidWdfbW9kZSkgdGhpcy5vbl9mbG9vciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJldl9kaXIgKyBcImZseSBzdGF0ZTogXCIgKyB0aGlzLmZseV9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfY29pbihudW1iZXIpeyAgLy8gQEAgXHJcbiAgICAgICAgdGhpcy5jb2luICs9IG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvaW5fcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvaW4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9iYW5hbmEobnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMuYmFuYW5hICs9IG51bWJlcjtcclxuICAgICAgICB0aGlzLmJ1YmJsZV9iYW5hbmEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmJhbmFuYS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX2xlZ28obnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMubGVnbyArPSBudW1iZXI7XHJcbiAgICAgICB0aGlzLmJ1YmJsZV9sZWdvLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5sZWdvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfcG93ZXJ1cChudW1iZXIpeyAgLy8gQEAgXHJcbiAgICAgICAgdGhpcy5wb3dlcnVwICs9IG51bWJlcjtcclxuICAgICAgIHRoaXMuYnViYmxlX3Bvd2VydXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnBvd2VydXAudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iXX0=