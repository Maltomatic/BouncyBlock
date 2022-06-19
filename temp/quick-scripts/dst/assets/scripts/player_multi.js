
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player_multi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4ea1af56VI/qdqP2nSLwou', 'player_multi');
// scripts/player_multi.ts

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
        _this.notif = null;
        _this.coin_point = null;
        _this.coin = 0;
        _this.player_jump = null;
        _this.get_coin = null;
        _this.bubble_powerup = null;
        _this.powerup = 0;
        _this.debug_mode = true;
        _this.hidden = false;
        _this.noisy = false;
        _this.unhide = false;
        _this.ACK = 5;
        _this.recv_msg = 0;
        _this.data = 0;
        _this.sec_list = [];
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.invis = false;
        _this.chameleon = null;
        _this.id = 0;
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
        //// console.log(this.base +  Math.floor(Math.random() * 5));
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
        this.id = cc.sys.localStorage.getItem('id');
    };
    Player.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        // // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //// console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                //// console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count / 2, 13));
                //// console.log(rand);
                //// console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else // console.log(this.node.x, this.section_count);
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            // console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")")
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y < 0)
                    this.on_floor = true;
            }
            if (other.node.group == 'mound') {
                if ((other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x) || this.invis) {
                    this.node.getChildByName('eye').active = false;
                    this.hidden = true;
                    if (this.invis)
                        this.chameleon = this.color_list[other.node.getComponent(cc.TiledTile).gid];
                    // this.last_x = this.node.x;
                }
            }
        }
        else if (other.node.group == 'coin') { // @@ 
            cc.audioEngine.playEffect(this.get_coin, false);
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
            // diee
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
                _this.node.active = false;
            }, 0.3);
        }
        else if ((other.node.name[0] == 's' && other.node.name[1] == 'h') || other.node.name == 'parent') {
            // diee
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
                _this.node.active = false;
            }, 0.3);
        }
    };
    Player.prototype.die_particle = function () {
        this.node.getChildByName('eye').active = false;
        var explode = this.node.getChildByName("star_explode");
        explode.active = true;
        explode.getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        this.node.getChildByName('color').active = false;
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        //a bug happens when the color of mound is same as the color of player, not solved yet 
        // fixed with mound. player should now check collisions with mound
        if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
        }
        else if (other.node.group == 'mound') {
            // if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
            // }
        }
    };
    Player.prototype.start = function () {
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec10, this.sec11, this.sec12, this.sec13, this.sec17, this.sec18, this.sec19];
        this.score = 0;
        this.data = 5;
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        //-------------------------------------------------
    };
    Player.prototype.update = function (dt) {
        if (this.invis && !this.unhide) {
            if (!this.hidden) {
                var cl = new cc.Color(0, 0, 0);
                this.Color.node.color = cl;
            }
            else {
                var cl = new cc.Color(0, 0, 0);
                this.Color.node.color = cl.fromHEX(this.chameleon);
            }
            console.log("currently invisible");
        }
        if (this.node.y <= -400) {
            // diee
            // deploy white particles
            this.die_particle();
            this.node.active = false;
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
        }
        this.ACK -= dt;
        if (this.ACK <= 0)
            this.check_mail();
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        if (this.fly_state == 1) {
            this.node.x -= this.prev_dir * 0.4;
            this.fly_state = -1;
        }
        else if (this.stick) {
            // console.log("stick");
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
        //---------player spin---------------
        if ((dy > 10) && this.dir == 1)
            this.spin_right();
        else if ((dy > 10) && this.dir == -1)
            this.spin_left();
        else if (this.node.angle != 0)
            this.node.angle = 0;
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
    Player.prototype.check_mail = function () {
        var _this = this;
        this.ACK = 5;
        this.scheduleOnce(function () {
            if (Math.floor(Math.random() * 4) > 2) { // should be if pinged on Firebase
                _this.recv_msg++;
                cc.audioEngine.playEffect(_this.notif, false);
                _this.Color.node.color = new cc.Color(255, 255, 255);
                _this.unhide = true;
                _this.scheduleOnce(function () {
                    _this.recv_msg--;
                    if (_this.recv_msg == 0) {
                        _this.unhide = false;
                        var color_str = _this.color_list[_this.base + _this.color];
                        var color = new cc.Color(255, 255, 255);
                        _this.Color.node.color = color.fromHEX(color_str);
                    }
                }, 3);
            }
        }, 0.12);
    };
    Player.prototype.onKeyDown = function (event) {
        var _this = this;
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
        if (event.keyCode == cc.macro.KEY.enter) { // send message
            if (this.data) {
                this.Color.node.color = new cc.Color(255, 255, 255);
                this.data -= 1;
                // if id = 1 write to joiner, else write to creator
                this.noisy = true;
                this.scheduleOnce(function () {
                    _this.noisy = false;
                    var color_str = _this.color_list[_this.base + _this.color];
                    var color = new cc.Color(255, 255, 255);
                    _this.Color.node.color = color.fromHEX(color_str);
                }, 1);
            }
        }
        if (event.keyCode == cc.macro.KEY.u) {
            // use color powerup
            var cl = this.Color.node.color;
            this.invis = true;
            this.update_powerup(-1);
            this.scheduleOnce(function () {
                _this.Color.node.color = cl;
                _this.invis = false;
            }, 5);
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
        cc.audioEngine.playEffect(this.player_jump, false);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        this.fly_state = 1;
        if (!this.debug_mode)
            this.on_floor = false;
        // console.log(this.prev_dir + "fly state: " + this.fly_state);
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
        property(cc.AudioClip)
    ], Player.prototype, "notif", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "coin_point", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "player_jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_coin", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyX211bHRpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXFZQztRQWxZRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBaUIsSUFBSSxDQUFD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QUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDNUMsSUFBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNqRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDaEQsOENBQThDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakUsOENBQThDO0lBQ2xELENBQUM7SUFDRCwyQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw2QkFBWSxHQUFaO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRXZDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUFFLElBQUks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cHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcGxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM2OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjODogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzExOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE2OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzIwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIENvbG9yOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG5vdGlmOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29pbl9wb2ludCA6IGNjLk5vZGUgPSBudWxsOyAgXHJcbiAgICBjb2luOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwbGF5ZXJfanVtcCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ2V0X2NvaW4gOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnViYmxlX3Bvd2VydXAgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBwb3dlcnVwOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGRlYnVnX21vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG5vaXN5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHVuaGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBBQ0s6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIHJlY3ZfbXNnOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNlY19saXN0ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZXZfZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcclxuICAgIHByaXZhdGUgb25fZmxvb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzdGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbnZpczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaGFtZWxlb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAwO1xyXG4gICAgc2VjdGlvbl9jb3VudCA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb2xvcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmlwOiBudW1iZXIgPSAwO1xyXG4gICAgYmFzZTogbnVtYmVyID0gMDtcclxuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcclxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXHJcbiAgICAxMzpcIiMxYzMxNDRcIiwgMTQ6IFwiIzU5NmY2MlwiLCAxNTogXCIjN2VhMTZiXCIsMTY6IFwiI2MzZDg5OFwiLDE3OiBcIiM3MDE2MWRcIixcclxuICAgIDE5IDpcIiNlZGViZDNcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcclxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXHJcbiAgICAzMSA6XCIjOGU5YWFmXCIsIDMyIDpcIiNjYmMwZDNcIiwgMzMgOlwiI2VmZDNkN1wiLCAzNCA6XCIjZmVlYWZhXCIsIDM1IDpcIiNkZWUyZmZcIiB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codGhpcy5iYXNlICsgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpKTtcclxuICAgICAgICB2YXIgY29sb3Jfc3RyID0gdGhpcy5jb2xvcl9saXN0W3RoaXMuYmFzZSArIHRoaXMuY29sb3JdO1xyXG4gICAgICAgIHZhciBjb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRjb2xvcigpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbl9jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5pZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICAvLy8vIGNvbnNvbGUubG9nKFwiaW5pdCBuZXh0IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5taW4oMit0aGlzLnNlY3Rpb25fY291bnQvMiwgMTMpKVxyXG4gICAgICAgICAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhyYW5kKTtcclxuICAgICAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coXCJUbyBpbnN0YW50aWF0ZTogXCIgKyB0aGlzLnNlY19saXN0W3JhbmRdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfc2VjdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VjX2xpc3RbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnggPSAxOTIwICogdGhpcy5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBsaXN0LmFkZENoaWxkKG5leHRfc2VjdGlvbik7XHJcbiAgICAgICAgICAgIH0gLy9lbHNlIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS54LCB0aGlzLnNlY3Rpb25fY291bnQpO1xyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2dyb3VuZCcgfHwgb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCArIFwiIChcIiArIHRvdWNoLnggKyBcIiwgXCIgKyB0b3VjaC55ICsgXCIpXCIpXHJcbiAgICAgICAgICAgIGlmKHRvdWNoLnkgJiYgdGhpcy5mbHlfc3RhdGUgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5vbl9mbG9vciAmJiB0b3VjaC55IDwgMCkgdGhpcy5vbl9mbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykge1xyXG4gICAgICAgICAgICAgICAgaWYoKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgdG91Y2gueCkgfHwgdGhpcy5pbnZpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW52aXMpIHRoaXMuY2hhbWVsZW9uID0gdGhpcy5jb2xvcl9saXN0W290aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2NvaW4nKXsgLy8gQEAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfY29pbiwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfY29pbigxKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnYnViYmxlJyl7IC8vIEBAIFxyXG4gICAgICAgICAgICBpZihvdGhlci50YWcgPT0gMyl7IC8vIGNvbG9yZnVsIGJ1YmJsZVxyXG4gICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlX3Bvd2VydXAoMSk7XHJcbiAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5uYW1lID09ICdtaXNzaWxlJyl7XHJcbiAgICAgICAgICAgIC8vIGRpZWVcclxuICAgICAgICAgICAgLy8gZGVwbG95IHdoaXRlIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvc2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgfWVsc2UgaWYoKG90aGVyLm5vZGUubmFtZVswXSA9PSAncycmJm90aGVyLm5vZGUubmFtZVsxXSA9PSAnaCcpfHxvdGhlci5ub2RlLm5hbWUgPT0gJ3BhcmVudCcpe1xyXG4gICAgICAgICAgICAvLyBkaWVlXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBkaWVfcGFydGljbGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xyXG4gICAgICAgIGV4cGxvZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29sb3InKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIC8vYSBidWcgaGFwcGVucyB3aGVuIHRoZSBjb2xvciBvZiBtb3VuZCBpcyBzYW1lIGFzIHRoZSBjb2xvciBvZiBwbGF5ZXIsIG5vdCBzb2x2ZWQgeWV0IFxyXG4gICAgICAgIC8vIGZpeGVkIHdpdGggbW91bmQuIHBsYXllciBzaG91bGQgbm93IGNoZWNrIGNvbGxpc2lvbnMgd2l0aCBtb3VuZFxyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgLy8gaWYob3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQgPT0gdGhpcy5jb2xvciArIHRoaXMuYmFzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjX2xpc3QgPSBbdGhpcy5zZWMwLCB0aGlzLnNlYzEsIHRoaXMuc2VjMiwgdGhpcy5zZWMzLCB0aGlzLnNlYzQsdGhpcy5zZWM1LHRoaXMuc2VjMTAsdGhpcy5zZWMxMSx0aGlzLnNlYzEyLHRoaXMuc2VjMTMsdGhpcy5zZWMxNyx0aGlzLnNlYzE4LHRoaXMuc2VjMTldO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IDU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS1zcGFya2xlIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXI9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pbnZpcyAmJiAhdGhpcy51bmhpZGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5oaWRkZW4pe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY2w7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY2wuZnJvbUhFWCh0aGlzLmNoYW1lbGVvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50bHkgaW52aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm5vZGUueSA8PSAtNDAwKXtcclxuICAgICAgICAgICAgLy8gZGllZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMuZGllX3BhcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9zZVwiKVxyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkFDSyAtPSBkdDtcclxuICAgICAgICBpZih0aGlzLkFDSyA8PSAwKSB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYV90cmFjaygpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyICogMjAwICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RpY2tcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLmRpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tc3BhcmtsZSBlbWlzc2lvbiByYXRlIGlzIDAgd2hlbiBkaWRudCBtb3ZlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZih0aGlzLmRpciE9MHx8ZHk+MTApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MTAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tcGxheWVyIHNwaW4tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gMSkgdGhpcy5zcGluX3JpZ2h0KCk7XHJcbiAgICAgICAgZWxzZSBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gLTEpIHRoaXMuc3Bpbl9sZWZ0KCk7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuYW5nbGUgIT0gMCkgdGhpcy5ub2RlLmFuZ2xlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLXNjb3JlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAoTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA+IHRoaXMuc2NvcmUpID8gTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA6IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5TY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcbiAgICBzcGluX3JpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IDEyO1xyXG4gICAgfVxyXG4gICAgc3Bpbl9sZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlICYmICF0aGlzLmRpcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tfbWFpbCgpe1xyXG4gICAgICAgIHRoaXMuQUNLID0gNTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7ICAgICAgIC8vIGdldCBGaXJlYmFzZSBkYXRhOyBoZXJlIHNpbXVsYXRlZCB3aXRoIHRpbWVyLiAvLyBpZiBpZCA9IDEgcmVhZCBmcm9tIGNyZWF0b3IsIGVsc2UgcmVhZCBjcm9tIGpvaW5lclxyXG4gICAgICAgICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCkgPiAyKXsgICAgICAgIC8vIHNob3VsZCBiZSBpZiBwaW5nZWQgb24gRmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjdl9tc2cgKys7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubm90aWYsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN2X21zZy0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVjdl9tc2cgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5oaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uX2Zsb29yKSB0aGlzLmp1bXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkubGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucHJldl9kaXIgPSB0aGlzLmRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5yaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5lbnRlcil7ICAgICAgICAvLyBzZW5kIG1lc3NhZ2VcclxuICAgICAgICAgICAgaWYodGhpcy5kYXRhKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgLT0gMTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGlkID0gMSB3cml0ZSB0byBqb2luZXIsIGVsc2Ugd3JpdGUgdG8gY3JlYXRvclxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2lzeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2lzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS51KXtcclxuICAgICAgICAgICAgLy8gdXNlIGNvbG9yIHBvd2VydXBcclxuICAgICAgICAgICAgdmFyIGNsID0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmludmlzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgtMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucil7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbktleVVwKGV2ZW50KXtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5ZXJfanVtcCwgZmFsc2UpOyBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCA2MDApO1xyXG4gICAgICAgIHRoaXMuZmx5X3N0YXRlID0gMTtcclxuICAgICAgICBpZighdGhpcy5kZWJ1Z19tb2RlKSB0aGlzLm9uX2Zsb29yID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmV2X2RpciArIFwiZmx5IHN0YXRlOiBcIiArIHRoaXMuZmx5X3N0YXRlKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9jb2luKG51bWJlcil7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLmNvaW4gKz0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuY29pbl9wb2ludC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY29pbi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX3Bvd2VydXAobnVtYmVyKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMucG93ZXJ1cCArPSBudW1iZXI7XHJcbiAgICAgICB0aGlzLmJ1YmJsZV9wb3dlcnVwLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5wb3dlcnVwLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19