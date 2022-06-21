
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/arm');
require('./assets/scripts/bird_map_init');
require('./assets/scripts/bird_player');
require('./assets/scripts/bubble_item');
require('./assets/scripts/bubble_item_in_dayscene');
require('./assets/scripts/bubble_item_in_multi');
require('./assets/scripts/enemy moving sharp');
require('./assets/scripts/enemy_wrapper');
require('./assets/scripts/leader');
require('./assets/scripts/light');
require('./assets/scripts/loadgame');
require('./assets/scripts/lose');
require('./assets/scripts/lose_canvas');
require('./assets/scripts/menu');
require('./assets/scripts/missile');
require('./assets/scripts/multi_res_lose');
require('./assets/scripts/multi_res_win');
require('./assets/scripts/pair_game');
require('./assets/scripts/parent');
require('./assets/scripts/player');
require('./assets/scripts/player_day');
require('./assets/scripts/player_multi');
require('./assets/scripts/root');
require('./assets/scripts/rule');
require('./assets/scripts/searchlight');
require('./assets/scripts/section_init');
require('./assets/scripts/sharp');
require('./assets/scripts/sharp_down');
require('./assets/scripts/spider');
require('./assets/scripts/start_scene');
require('./assets/scripts/store');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bird_player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8f78kelolP16GUSK4Ymy8r', 'bird_player');
// scripts/bird_player.ts

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
exports.Bird = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.maplist = null;
        _this.section = null;
        _this.Score = null;
        _this.Scoretag = null;
        _this.Cointag = null;
        _this.coin_point = null;
        _this.Color = null;
        _this.die_audio = null;
        _this.player_jump = null;
        _this.get_coin = null;
        _this.bird_back_music = null; // @A@
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.paused = false;
        _this.speed = 150;
        _this.coin = 0;
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
    Bird.prototype.setcolor = function () {
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
    Bird.prototype.onLoad = function () {
        cc.audioEngine.pauseMusic(); // @A@
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.section_count = 0;
    };
    Bird.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Bird.prototype.start = function () {
        this.coin = cc.sys.localStorage.getItem("coins");
        this.update_coin();
        this.playBGM();
        this.score = 0;
    };
    Bird.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bird_back_music, true);
    };
    Bird.prototype.update = function (dt) {
        this.camera_track();
        this.node.x += this.speed * dt * Math.max(1, this.section_count / 3);
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    };
    Bird.prototype.camera_track = function () {
        this.Scoretag.x = Math.max(this.node.x - 500, -389.764);
        this.Cointag.x = Math.max(this.node.x - 320, -209.764);
        if (this.node.x < 100)
            this.camera.x = 0;
        else
            this.camera.x = this.node.x - 100;
    };
    Bird.prototype.onBeginContact = function (contact, self, other) {
        // console.log(other.node.group);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                console.log("init next section");
                this.speed *= 1.1;
                this.section_count++;
                var next_section = cc.instantiate(this.section);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")");
            // diee
            this.die_particle();
            this.speed = 0;
            cc.sys.localStorage.setItem("coins", this.coin);
            cc.sys.localStorage.setItem("nowscore", this.score);
            cc.sys.localStorage.setItem("nowscene", 'bird');
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
        }
        else if (other.node.name == 'coin') {
            cc.audioEngine.playEffect(this.get_coin, false);
            this.coin++;
            this.update_coin();
            other.node.destroy();
        }
    };
    Bird.prototype.die_particle = function () {
        cc.audioEngine.playEffect(this.die_audio, false);
        this.node.getChildByName('eye').active = false;
        var explode = this.node.getChildByName("star_explode");
        explode.active = true;
        explode.getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        this.node.getChildByName('color').active = false;
    };
    Bird.prototype.onKeyDown = function (event) {
        if (event.keyCode == cc.macro.KEY.space) {
            this.jump();
        }
        if (event.keyCode == cc.macro.KEY.p) {
            if (this.paused) {
                this.paused = false;
                cc.audioEngine.resumeAll();
                cc.director.resume();
            }
            else {
                this.paused = true;
                cc.audioEngine.pauseAll();
                cc.director.pause();
            }
        }
    };
    Bird.prototype.jump = function () {
        cc.audioEngine.playEffect(this.player_jump, false);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 200);
    };
    Bird.prototype.update_coin = function () {
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "maplist", void 0);
    __decorate([
        property(cc.Prefab)
    ], Bird.prototype, "section", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "Score", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "Scoretag", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "Cointag", void 0);
    __decorate([
        property(cc.Node)
    ], Bird.prototype, "coin_point", void 0);
    __decorate([
        property(cc.Sprite)
    ], Bird.prototype, "Color", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bird.prototype, "die_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bird.prototype, "player_jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bird.prototype, "get_coin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bird.prototype, "bird_back_music", void 0);
    Bird = __decorate([
        ccclass
    ], Bird);
    return Bird;
}(cc.Component));
exports.Bird = Bird;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmlyZF9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBCLHdCQUFZO0lBQXRDO1FBQUEscUVBaUxDO1FBOUtHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBa0IsSUFBSSxDQUFDO1FBRy9CLHFCQUFlLEdBQWtCLElBQUksQ0FBQyxDQUFBLE1BQU07UUFFNUMsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBTSx3R0FBd0c7UUFDaEksV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDNUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBRXJCLDRCQUE0QjtRQUM1QixnQkFBVSxHQUFRLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUztZQUN2RixFQUFFLEVBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBRSxTQUFTO1lBQ3RFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDekUsRUFBRSxFQUFHLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUztZQUMxRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQTs7SUFpSS9FLENBQUM7SUEvSEcsd0JBQXdCO0lBQ3hCLHVCQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsMERBQTBEO1FBQzFELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsbURBQW1EO0lBQ3ZELENBQUM7SUFFRCxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx3QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pFLDhDQUE4QztJQUNsRCxDQUFDO0lBRUQsMkJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBRUQsNkJBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixpQ0FBaUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzlDLG1GQUFtRjtRQUNuRixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFDO1lBQ2pCLDRCQUE0QjtZQUM1QixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUMsSUFBSSxFQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO2dCQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUMzQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkMsQ0FBQyxvREFBb0Q7U0FDekQ7YUFBSyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNyRSxPQUFPO1lBQ1AsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO2FBQUssSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUM7WUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNDLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4RSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDekQsQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtRQUVELElBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDL0IsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3hCO2lCQUFJO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBN0tEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNlO0lBL0I3QixJQUFJO1FBRGhCLE9BQU87T0FDSyxJQUFJLENBaUxoQjtJQUFELFdBQUM7Q0FqTEQsQUFpTEMsQ0FqTHlCLEVBQUUsQ0FBQyxTQUFTLEdBaUxyQztBQWpMWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEJpcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcGxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWN0aW9uOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY29yZXRhZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENvaW50YWc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luX3BvaW50IDogY2MuTm9kZSA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZGllX2F1ZGlvIDogY2MuQXVkaW9DbGlwID0gbnVsbDsgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcGxheWVyX2p1bXAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdldF9jb2luIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmlyZF9iYWNrX211c2ljIDogY2MuQXVkaW9DbGlwID0gbnVsbDsvLyBAQUBcclxuXHJcbiAgICBzZWN0aW9uX2NvdW50OiBudW1iZXIgPSAwOyAgICAgIC8vIG9uIGNvbnRhY3Qgd2l0aCBtYXJrZXIsIGlmIHNlY3Rpb25fY291bnQgKiAxOTIwIDwgdGhpcy5ub2RlLng6IGluaXQgbmV4dCBzZWN0aW9uIGFuZCBzZWN0aW9uX2NvdW50ICsrXHJcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDE1MDtcclxuICAgIGNvaW46IG51bWJlciA9IDA7XHJcbiAgICBjb2xvcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmlwOiBudW1iZXIgPSAwO1xyXG4gICAgYmFzZTogbnVtYmVyID0gMDtcclxuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcclxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXHJcbiAgICAxMzpcIiMxYzMxNDRcIiwgMTQ6IFwiIzU5NmY2MlwiLCAxNTogXCIjN2VhMTZiXCIsMTY6IFwiI2MzZDg5OFwiLDE3OiBcIiM3MDE2MWRcIixcclxuICAgIDE5IDpcIiNlZGViZDNcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcclxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXHJcbiAgICAzMSA6XCIjOGU5YWFmXCIsIDMyIDpcIiNjYmMwZDNcIiwgMzMgOlwiI2VmZDNkN1wiLCAzNCA6XCIjZmVlYWZhXCIsIDM1IDpcIiNkZWUyZmZcIiB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBzZXRjb2xvcigpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tcGxheWVyIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vcmFuZG9tIGNob29zZSBwbGF5ZXIgY29sb3JcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDtcclxuICAgICAgICB0aGlzLmJhc2UgPSA2KnRoaXMuc3RyaXA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFzZSArICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSk7XHJcbiAgICAgICAgdmFyIGNvbG9yX3N0ciA9IHRoaXMuY29sb3JfbGlzdFt0aGlzLmJhc2UgKyB0aGlzLmNvbG9yXTtcclxuICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTsgLy8gQEFAXHJcbiAgICAgICAgdGhpcy5zZXRjb2xvcigpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2luID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfY29pbigpO1xyXG4gICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKXsgLy8gQEFAXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmlyZF9iYWNrX211c2ljLCB0cnVlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhX3RyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIGR0ICogTWF0aC5tYXgoMSwgdGhpcy5zZWN0aW9uX2NvdW50LzMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS1zY29yZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLnNjb3JlID0gKE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgPiB0aGlzLnNjb3JlKSA/IE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgOiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuU2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIHRoaXMuU2NvcmV0YWcueCA9IE1hdGgubWF4KHRoaXMubm9kZS54IC0gNTAwLCAtMzg5Ljc2NCk7XHJcbiAgICAgICAgdGhpcy5Db2ludGFnLnggPSBNYXRoLm1heCh0aGlzLm5vZGUueCAtIDMyMCwgLTIwOS43NjQpO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDwgMTAwKSB0aGlzLmNhbWVyYS54ID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuY2FtZXJhLnggPSB0aGlzLm5vZGUueCAtIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAqPSAxLjE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnggPSAxOTIwICogdGhpcy5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBsaXN0LmFkZENoaWxkKG5leHRfc2VjdGlvbik7XHJcbiAgICAgICAgICAgIH0gLy9lbHNlIGNvbnNvbGUubG9nKHRoaXMubm9kZS54LCB0aGlzLnNlY3Rpb25fY291bnQpO1xyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2dyb3VuZCcgfHwgb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCArIFwiIChcIiArIHRvdWNoLnggKyBcIiwgXCIgKyB0b3VjaC55ICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC8vIGRpZWVcclxuICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMuY29pbik7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vd3Njb3JlXCIsIHRoaXMuc2NvcmUpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3dzY2VuZVwiLCAnYmlyZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb3NlXCIpO1xyXG4gICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUubmFtZSA9PSAnY29pbicpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2V0X2NvaW4sIGZhbHNlKTsgXHJcbiAgICAgICAgICAgIHRoaXMuY29pbisrO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9jb2luKCk7XHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaWVfcGFydGljbGUoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5kaWVfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZXhwbG9kZT10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyX2V4cGxvZGVcIik7XHJcbiAgICAgICAgICAgIGV4cGxvZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbG9yJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5wKXtcclxuICAgICAgICAgICAgaWYodGhpcy5wYXVzZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpeyAgICBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheWVyX2p1bXAsIGZhbHNlKTsgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfY29pbigpeyAgLy8gQEAgXHJcbiAgICAgICAgdGhpcy5jb2luX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb2luLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bubble_item_in_dayscene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2414Nfm2FM+LvC8kdiGMcR', 'bubble_item_in_dayscene');
// scripts/bubble_item_in_dayscene.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bubble_item = /** @class */ (function (_super) {
    __extends(bubble_item, _super);
    function bubble_item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_Speed = 50;
        _this.physicManager = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    bubble_item.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -500);
        this.bubble_move();
        this.print_bubble();
    };
    bubble_item.prototype.start = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.bubble_Speed, 0);
    };
    bubble_item.prototype.bubble_move = function () {
    };
    bubble_item.prototype.print_bubble = function () {
    };
    bubble_item.prototype.update = function (dt) {
    };
    __decorate([
        property()
    ], bubble_item.prototype, "bubble_Speed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnViYmxlX2l0ZW1faW5fZGF5c2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2QkM7UUEzQkcsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFFbEIsbUJBQWEsR0FBc0IsSUFBSSxDQUFDOztJQXlCcEQsQ0FBQztJQXhCRyx3QkFBd0I7SUFFeEIsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsaUNBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCxrQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQTFCRDtRQURDLFFBQVEsRUFBRTtxREFDZTtJQUZULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E2Qi9CO0lBQUQsa0JBQUM7Q0E3QkQsQUE2QkMsQ0E3QndDLEVBQUUsQ0FBQyxTQUFTLEdBNkJwRDtrQkE3Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBidWJibGVfaXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KClcbiAgICBidWJibGVfU3BlZWQ6IG51bWJlciA9IDUwO1xuXG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5ncmF2aXR5ID0gY2MudjIgKDAsIC01MDApO1xuICAgICAgICB0aGlzLmJ1YmJsZV9tb3ZlKCk7XG4gICAgICAgIHRoaXMucHJpbnRfYnViYmxlKCk7IFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5idWJibGVfU3BlZWQsMCk7XG4gICAgfVxuICAgIFxuICAgIGJ1YmJsZV9tb3ZlKCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBwcmludF9idWJibGUoKXsgLy8gQEAgcmFuZG9tIHByaW50IGJ1YmJsZSBhbmQgYnViYmxlIGxlZ28gb24gY2FudmFzXG5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/enemy moving sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8958wtIKZH/pz7sWUEkBOb', 'enemy moving sharp');
// scripts/enemy moving sharp.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var enemy_moving_sharp = /** @class */ (function (_super) {
    __extends(enemy_moving_sharp, _super);
    function enemy_moving_sharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.now = null;
        _this.next = null;
        _this.physicManager = null;
        return _this;
        // update (dt) {}
    }
    enemy_moving_sharp.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.now = "Up";
        this.next = "DOWN";
    };
    enemy_moving_sharp.prototype.start = function () {
        this.schedule(function () {
            this.changeState();
            // cc.log("Change state: " + this.state);
        }, 0.5);
    };
    enemy_moving_sharp.prototype.changeState = function () {
        switch (this.now) {
            case "Init":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                if (this.next == "Up") {
                    this.now = "Down";
                }
                else
                    this.now = "Up";
                break;
            case "Down":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -60);
                this.now = "Init";
                this.next = "Down";
                break;
            case "Up":
                this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 60);
                this.now = "Init";
                this.next = "Up";
                break;
        }
    };
    enemy_moving_sharp.prototype.onBeginContact = function (contact, self, other) {
    };
    enemy_moving_sharp = __decorate([
        ccclass
    ], enemy_moving_sharp);
    return enemy_moving_sharp;
}(cc.Component));
exports.default = enemy_moving_sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXkgbW92aW5nIHNoYXJwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBNkNDO1FBM0NXLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBdUNoRCxpQkFBaUI7SUFDckIsQ0FBQztJQXRDRyxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFFO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFFO0lBQ3hCLENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQix5Q0FBeUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDSSxRQUFPLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDWixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztpQkFDckI7O29CQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLE1BQU07WUFDTixLQUFLLElBQUk7Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU07U0FDVDtJQUNMLENBQUM7SUFDRCwyQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO0lBQ25DLENBQUM7SUExQ2dCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBNkN0QztJQUFELHlCQUFDO0NBN0NELEFBNkNDLENBN0MrQyxFQUFFLENBQUMsU0FBUyxHQTZDM0Q7a0JBN0NvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlbmVteV9tb3Zpbmdfc2hhcnAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBub3cgOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgbmV4dCA6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHsgXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3cgPSBcIlVwXCIgO1xuICAgICAgICB0aGlzLm5leHQgPSBcIkRPV05cIiA7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgICAgICAvLyBjYy5sb2coXCJDaGFuZ2Ugc3RhdGU6IFwiICsgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKCl7XG4gICAgICAgIHN3aXRjaCh0aGlzLm5vdyl7XG4gICAgICAgICAgICBjYXNlIFwiSW5pdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLDApO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubmV4dCA9PSBcIlVwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3cgPSBcIkRvd25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLm5vdyA9IFwiVXBcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgLTYwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdyA9IFwiSW5pdFwiO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IFwiRG93blwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCw2MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3cgPSBcIkluaXRcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSBcIlVwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikgey8v56Kw5pKeXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bubble_item_in_multi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbf7ev4NwZJGL7yv3MkLzbV', 'bubble_item_in_multi');
// scripts/bubble_item_in_multi.ts

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
var bubble_item_in_multi = /** @class */ (function (_super) {
    __extends(bubble_item_in_multi, _super);
    function bubble_item_in_multi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_num = 0;
        _this.bubble_Speed = 0;
        _this.physicManager = null;
        return _this;
    }
    bubble_item_in_multi.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -500);
        this.bubble_num = Math.floor(Math.random() * 10);
        this.wander();
    };
    bubble_item_in_multi.prototype.start = function () {
        this.bubble_Speed = (Math.random() * 10 + 20);
        this.wander();
    };
    bubble_item_in_multi.prototype.wander = function () {
        cc.tween(this.node).repeatForever(cc.tween(this.node)
            .by(1, { x: 200 })
            .by(1, { x: -200 })).start();
    };
    bubble_item_in_multi.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
    };
    bubble_item_in_multi = __decorate([
        ccclass
    ], bubble_item_in_multi);
    return bubble_item_in_multi;
}(cc.Component));
exports.default = bubble_item_in_multi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnViYmxlX2l0ZW1faW5fbXVsdGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUE4QkM7UUE1QkcsZ0JBQVUsR0FBWSxDQUFDLENBQUM7UUFDeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDakIsbUJBQWEsR0FBc0IsSUFBSSxDQUFDOztJQTBCcEQsQ0FBQztJQXhCRyxxQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELHFDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ2YsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQ3BCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsd0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUE3QmdCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBOEJ4QztJQUFELDJCQUFDO0NBOUJELEFBOEJDLENBOUJpRCxFQUFFLENBQUMsU0FBUyxHQThCN0Q7a0JBOUJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJ1YmJsZV9pdGVtX2luX211bHRpIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGJ1YmJsZV9udW0gOiBudW1iZXIgPSAwO1xuICAgIGJ1YmJsZV9TcGVlZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmdyYXZpdHkgPSBjYy52MiAoMCwgLTUwMCk7XG5cbiAgICAgICAgdGhpcy5idWJibGVfbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB0aGlzLndhbmRlcigpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5idWJibGVfU3BlZWQgPSAoTWF0aC5yYW5kb20oKSAqIDEwICsgMjApO1xuICAgICAgICB0aGlzLndhbmRlcigpO1xuICAgIH1cbiAgICB3YW5kZXIoKXtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmJ5KDEsIHt4OiAyMDB9KSAgXG4gICAgICAgICAgICAuYnkoMSwge3g6IC0yMDB9KVxuICAgICAgICApLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/light.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.body = null;
        _this.watch_x = 0;
        _this.watch_y = 0;
        _this.bottom = null;
        _this.raise_timer = 0.5;
        return _this;
        ////////////////////////////////// TODO //////////////////////////////////
        // edge detection: time the amount of time the player takes from appearing in light range to eyes closing (vis_time)
        // (t == 0): just move away
        // else: light swing over to player
        // (0 < t <= 0.5): hover over player briefly, then move on
        // else: attack player; projectile speed should be equal to player move speed and fire once per 0.6 ~ 1.2sec depending on player score
        // spotlight 
    }
    // LIFE-CYCLE CALLBACKS:
    Lightbeam.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        this.character = cc.find('Canvas/root/player');
        this.bottom = this.node.getChildByName('bottom');
    };
    Lightbeam.prototype.start = function () {
        this.alert_level = 0;
        this.body = this.node.getParent();
        this.watch = false;
    };
    Lightbeam.prototype.onBeginContact = function (contact, self, other) {
        var touch = contact.getWorldManifold().normal;
        if (other.node.name == 'player') {
            // // this.watch_x = other.node.x;
            // // this.watch_y = other.node.y;
            // if(this.watch){
            //     this.watch = false;
            //     this.allclear();
            //     console.log("player left range");
            // }else if(this.watch == false){
            if (self.tag == 15 && this.alert_level != 1) {
                this.watch = false;
                this.allclear();
            }
            else {
                this.watch = true;
                console.log("player entered watch frame");
            }
        }
    };
    // onEndContact(contact, self, other){
    //     if(other.node.name == 'player'){
    //         this.watch = false;
    //         this.alert_level = 0;
    //         console.log("player out of range");
    //         this.allclear();
    //     }
    // }
    Lightbeam.prototype.allclear = function () {
        this.alert_level = 0;
        this.raise_timer = 0.5;
        this.node.getParent().getComponent('enemy_wrapper').state = 0;
        console.log("nothing to see");
        this.watch = false;
    };
    Lightbeam.prototype.update = function (dt) {
        // if(this.watch)console.log("watching");
        if (this.alert_level == 0 && this.watch) {
            if (!this.character.getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).hidden) {
                this.alert_level = 1;
                this.raise_timer = 0.5;
                console.log("player is being tracked");
                this.node.getParent().getComponent('enemy_wrapper').state = this.alert_level;
            }
        }
        else if (this.alert_level == 1 && this.watch) {
            this.raise_timer -= dt;
            if (this.node.scaleX < 1.5)
                this.node.scaleX += (1 - this.raise_timer) / 2;
            if (this.raise_timer < 0) {
                var vis = !(this.character.getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).hidden);
                if (vis) {
                    console.log("raise alert level to attack");
                    this.alert_level = 2;
                    this.node.getParent().getComponent('enemy_wrapper').state = 2;
                }
                else {
                    console.log("cease attack");
                    this.allclear();
                }
            }
        }
        else if (this.alert_level == 2) {
            console.log(this.character.x > this.node.position.x);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBcUdDO1FBbkdXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFRLDhDQUE4QztRQUN0RSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxHQUFHLENBQUM7O1FBaUZsQywwRUFBMEU7UUFDMUUsb0hBQW9IO1FBQ3BILDJCQUEyQjtRQUMzQixtQ0FBbUM7UUFDL0IsMERBQTBEO1FBQzFELHNJQUFzSTtRQUNsSSxhQUFhO0lBQ3pCLENBQUM7SUF0Rkcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FB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QUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZILElBQUcsR0FBRyxFQUFDO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7YUFDSjtTQUNKO2FBQUssSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQXZGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBTGhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FxR3JCO0lBQUQsZ0JBQUM7Q0FyR0QsQUFxR0MsQ0FyRzhCLEVBQUUsQ0FBQyxTQUFTLEdBcUcxQztBQXJHWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMaWdodGJlYW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBhbGVydF9sZXZlbDogbnVtYmVyID0gMDsgICAgICAgIC8vIDA6IGRvbid0IHNlZSAgIDE6IHN0YXJlLCBwYXNzIGJ5ICAyOiBhdHRhY2tcbiAgICBwcml2YXRlIHdhdGNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBib2R5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHdhdGNoX3g6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB3YXRjaF95OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYm90dG9tOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHJhaXNlX3RpbWVyOiBudW1iZXIgPSAwLjU7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJyk7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdib3R0b20nKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRfbGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLmJvZHkgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCk7XG4gICAgICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XG4gICAgICAgIHZhciB0b3VjaCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09ICdwbGF5ZXInKXtcbiAgICAgICAgICAgIC8vIC8vIHRoaXMud2F0Y2hfeCA9IG90aGVyLm5vZGUueDtcbiAgICAgICAgICAgIC8vIC8vIHRoaXMud2F0Y2hfeSA9IG90aGVyLm5vZGUueTtcbiAgICAgICAgICAgIC8vIGlmKHRoaXMud2F0Y2gpe1xuICAgICAgICAgICAgLy8gICAgIHRoaXMud2F0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFsbGNsZWFyKCk7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgbGVmdCByYW5nZVwiKTtcbiAgICAgICAgICAgIC8vIH1lbHNlIGlmKHRoaXMud2F0Y2ggPT0gZmFsc2Upe1xuICAgICAgICAgICAgaWYoc2VsZi50YWcgPT0gMTUgJiYgdGhpcy5hbGVydF9sZXZlbCAhPSAxKXtcbiAgICAgICAgICAgICAgICB0aGlzLndhdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxjbGVhcigpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy53YXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgZW50ZXJlZCB3YXRjaCBmcmFtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgIC8vICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicpe1xuICAgIC8vICAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5hbGVydF9sZXZlbCA9IDA7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBvdXQgb2YgcmFuZ2VcIik7XG4gICAgLy8gICAgICAgICB0aGlzLmFsbGNsZWFyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBhbGxjbGVhcigpe1xuICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMDtcbiAgICAgICAgdGhpcy5yYWlzZV90aW1lciA9IDAuNTtcbiAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nIHRvIHNlZVwiKTtcbiAgICAgICAgdGhpcy53YXRjaCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8gaWYodGhpcy53YXRjaCljb25zb2xlLmxvZyhcIndhdGNoaW5nXCIpO1xuICAgICAgICBpZih0aGlzLmFsZXJ0X2xldmVsID09IDAgJiYgdGhpcy53YXRjaCl7XG4gICAgICAgICAgICBpZighdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCgoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtdWx0aScpPyAncGxheWVyX211bHRpJyA6ICdwbGF5ZXInKSkuaGlkZGVuKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhaXNlX3RpbWVyID0gMC41O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGlzIGJlaW5nIHRyYWNrZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gdGhpcy5hbGVydF9sZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5hbGVydF9sZXZlbCA9PSAxICYmIHRoaXMud2F0Y2gpe1xuICAgICAgICAgICAgdGhpcy5yYWlzZV90aW1lciAtPSBkdDtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5zY2FsZVggPCAxLjUpIHRoaXMubm9kZS5zY2FsZVggKz0gKDEtdGhpcy5yYWlzZV90aW1lcikvMjtcbiAgICAgICAgICAgIGlmKHRoaXMucmFpc2VfdGltZXIgPCAwKXtcbiAgICAgICAgICAgICAgICB2YXIgdmlzID0gISh0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoKChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyk/ICdwbGF5ZXJfbXVsdGknIDogJ3BsYXllcicpKS5oaWRkZW4pO1xuICAgICAgICAgICAgICAgIGlmKHZpcyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFpc2UgYWxlcnQgbGV2ZWwgdG8gYXR0YWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0X2xldmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjZWFzZSBhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYWxlcnRfbGV2ZWwgPT0gMil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoYXJhY3Rlci54ID4gdGhpcy5ub2RlLnBvc2l0aW9uLngpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBUT0RPIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBlZGdlIGRldGVjdGlvbjogdGltZSB0aGUgYW1vdW50IG9mIHRpbWUgdGhlIHBsYXllciB0YWtlcyBmcm9tIGFwcGVhcmluZyBpbiBsaWdodCByYW5nZSB0byBleWVzIGNsb3NpbmcgKHZpc190aW1lKVxuICAgIC8vICh0ID09IDApOiBqdXN0IG1vdmUgYXdheVxuICAgIC8vIGVsc2U6IGxpZ2h0IHN3aW5nIG92ZXIgdG8gcGxheWVyXG4gICAgICAgIC8vICgwIDwgdCA8PSAwLjUpOiBob3ZlciBvdmVyIHBsYXllciBicmllZmx5LCB0aGVuIG1vdmUgb25cbiAgICAgICAgLy8gZWxzZTogYXR0YWNrIHBsYXllcjsgcHJvamVjdGlsZSBzcGVlZCBzaG91bGQgYmUgZXF1YWwgdG8gcGxheWVyIG1vdmUgc3BlZWQgYW5kIGZpcmUgb25jZSBwZXIgMC42IH4gMS4yc2VjIGRlcGVuZGluZyBvbiBwbGF5ZXIgc2NvcmVcbiAgICAgICAgICAgIC8vIHNwb3RsaWdodCBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW5lbXlfd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMsaUNBQVk7SUFBL0M7UUFBQSxxRUFnRkM7UUE3RUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQTBEdEIsQ0FBQztJQXhERyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSw0RkFBNEY7UUFDNUYsd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7SUFDdkQsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBUSxF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Q0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4TCw2RUFBNkU7UUFDN0UsMkNBQTJDO0lBQy9DLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFHekI7UUFEQyxRQUFRO2dEQUNTO0lBWlQsYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQWdGekI7SUFBRCxvQkFBQztDQWhGRCxBQWdGQyxDQWhGa0MsRUFBRSxDQUFDLFNBQVMsR0FnRjlDO0FBaEZZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGlnaHRfd3JhcHBlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVteTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJ1bGxldDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHJhbmdlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgc2NhbGVfZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbGVmdGJvdW5kOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgYXRrOiBudW1iZXIgPSAwO1xuICAgIFxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5lbXkgaW5pdCB3aXRoIHJhbmdlOiBcIiArIHRoaXMucmFuZ2UgKyBcIiAgYXQgXCIgKyB0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMuc2VhcmNobGlnaHRfc3BlZWQsMCk7XG4gICAgICAgIHRoaXMubGVmdGJvdW5kID0gLyp0aGlzLm5vZGUueCovIC0xICogdGhpcy5yYW5nZSowLjg7XG4gICAgICAgIHRoaXMucmlnaHRib3VuZCA9IC8qdGhpcy5ub2RlLnggKyovIHRoaXMucmFuZ2UqMC44O1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSAwKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlnaHQuc2NhbGVYLCB0aGlzLmxpZ2h0LngsIHRoaXMubm9kZS5wb3NpdGlvbi54KVxuICAgICAgICAgICAgdGhpcy5lbmVteS54ICs9IDcwICogZHQgKiB0aGlzLmRpcjtcblxuICAgICAgICAgICAgaWYodGhpcy5lbmVteS54IDw9IHRoaXMubGVmdGJvdW5kKSB0aGlzLmRpciA9IDE7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXkueCA+PSB0aGlzLnJpZ2h0Ym91bmQpIHRoaXMuZGlyID0gLTE7XG5cbiAgICAgICAgICAgIC8vIHZhciB4ID0gdGhpcy5ub2RlLmdldE5vZGVUb1dvcmxkVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlnaHQuc2NhbGVYICs9IGR0ICogdGhpcy5zY2FsZV9kaXJcbiAgICAgICAgICAgIGlmKHRoaXMubGlnaHQuc2NhbGVYIDwgLTAuMTUpIHRoaXMuc2NhbGVfZGlyID0gMC4zO1xuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmxpZ2h0LnNjYWxlWCA+PSAxLjIpIHRoaXMuc2NhbGVfZGlyID0gLTAuMztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlID09IDEpIHRoaXMuYXRrID0gMDtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZSA9PSAyKXtcbiAgICAgICAgICAgICAgICB2YXIgZW5lbXBvcyA9IHRoaXMuZW5lbXkueCArIHRoaXMubm9kZS54O1xuICAgICAgICAgICAgICAgIGlmKGVuZW1wb3MgPiB0aGlzLmNoYXJhY3Rlci54KzEwKSB0aGlzLmRpciA9IC0xO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYoZW5lbXBvcyA8IHRoaXMuY2hhcmFjdGVyLngtMTApIHRoaXMuZGlyID0gMTtcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZGlyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteSBwb3NpdGlvbjogXCIgKyBlbmVtcG9zICsgXCJwbGF5ZXIgcG9zaXRpb246IFwiICsgdGhpcy5jaGFyYWN0ZXIueCArIFwidHJhY2sgaW4gZGlyZWN0aW9uIFwiICsgdGhpcy5kaXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXkueCArPSAxNzAgKiBkdCAqIHRoaXMuZGlyO1xuICAgICAgICAgICAgICAgIHRoaXMuYXRrIC09IGR0O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXRrIDwgMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGsgPSAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlnaHQueCA9IHRoaXMuZW5lbXkueDtcbiAgICB9XG4gICAgXG4gICAgc2hvb3QoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG9vdGluZ1wiKVxuICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYnVsbGV0KTtcbiAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKHRoaXMuZW5lbXkueC8qICsgdGhpcy5ub2RlLngqLywgMCk7XG4gICAgICAgIGJ1bGxldC55IC09IDEwO1xuICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gMjAgKiAoKHRoaXMuZW5lbXkueCA8IHRoaXMuY2hhcmFjdGVyLngpPyAtMToxKTtcbiAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKHRoaXMuY2hhcmFjdGVyLnggLSAodGhpcy5lbmVteS54ICsgdGhpcy5ub2RlLngpKSwgKHRoaXMuY2hhcmFjdGVyLnkgLSB0aGlzLm5vZGUueSkpLm5vcm1hbGl6ZVNlbGYoKS5tdWx0aXBseShjYy52Mig3MDAsIDcwMCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZSBidWxsZXQgYnkgbGlnaHQgYXQgXCIgKyB0aGlzLmNoYXJhY3Rlci54LCB0aGlzLm5vZGUueSk7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChidWxsZXQpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/loadgame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6bc9T7v/xKe7T03FjKa+s4', 'loadgame');
// scripts/loadgame.ts

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
exports.Loadscene = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loadscene = /** @class */ (function (_super) {
    __extends(Loadscene, _super);
    function Loadscene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Loadscene.prototype.start = function () {
        this.schedule(function () {
            // count -= 1;
            var str = cc.find('Canvas/load_background/str').getComponent(cc.Label);
            str.string = str.string + '.';
        }, 0.3, 2);
        this.scheduleOnce(function () {
            cc.director.loadScene('menu');
        }, 1);
        cc.sys.localStorage.setItem("uid", 'local');
        cc.sys.localStorage.setItem("coins", 0);
        cc.sys.localStorage.setItem("lego", 0);
        cc.sys.localStorage.setItem("powerup", 0);
        cc.sys.localStorage.setItem("banana", 0);
        cc.sys.localStorage.setItem("mute", 0);
        cc.sys.localStorage.setItem("signal", 0);
        cc.sys.localStorage.setItem("highscore", 0);
        cc.sys.localStorage.setItem("name", 0);
        cc.sys.localStorage.setItem("email", 0);
        cc.sys.localStorage.setItem("color", '010000');
        cc.sys.localStorage.setItem("nowcolor", 1);
    };
    Loadscene = __decorate([
        ccclass
    ], Loadscene);
    return Loadscene;
}(cc.Component));
exports.Loadscene = Loadscene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9hZGdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStCLDZCQUFZO0lBQTNDOztJQThCQSxDQUFDO0lBM0JHLHdCQUF3QjtJQUd4Qix5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBRTtZQUNYLGNBQWM7WUFDZCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTNCUSxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBOEJyQjtJQUFELGdCQUFDO0NBOUJELEFBOEJDLENBOUI4QixFQUFFLENBQUMsU0FBUyxHQThCMUM7QUE5QlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBMb2Fkc2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoICgpPT4ge1xyXG4gICAgICAgICAgICAvLyBjb3VudCAtPSAxO1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gY2MuZmluZCgnQ2FudmFzL2xvYWRfYmFja2dyb3VuZC9zdHInKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBzdHIuc3RyaW5nID0gc3RyLnN0cmluZyArICcuJztcclxuICAgICAgICB9LCAwLjMsIDIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aWRcIiwgJ2xvY2FsJyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgMCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVnb1wiLCAwKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwb3dlcnVwXCIsIDApO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhbmFuYVwiLCAwKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIDApO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZ25hbFwiLCAwKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgMCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCAwKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCAwKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvclwiLCAnMDEwMDAwJyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm93Y29sb3JcIiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2affC6cylNr5t6u4Gjq4Sx', 'lose');
// scripts/lose.ts

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
var lose = /** @class */ (function (_super) {
    __extends(lose, _super);
    function lose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lose_back_music = null; // @A@
        _this.uid = null;
        _this.online = false;
        return _this;
    }
    lose.prototype.onload = function () {
        cc.audioEngine.pauseMusic(); // @A@
    };
    lose.prototype.start = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user)
                _this.online = true;
        });
        this.uid = cc.sys.localStorage.getItem('uid');
        console.log(this.uid);
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var score = parseInt(cc.sys.localStorage.getItem("nowscore"));
        var scene = cc.sys.localStorage.getItem("nowscene");
        var h_score = parseInt(cc.sys.localStorage.getItem("highscore"));
        // console.log(score);
        // console.log(this.uid, scene, h_score);
        // console.log("storing data if highscore");
        // console.log((this.uid != 'local'));
        // console.log((this.uid != 'local'));
        // console.log((score > h_score));
        // console.log((this.uid != 'local') && (scene == 'test') && (score > h_score));
        if ((this.uid != 'local') && (scene == 'test') && (score > h_score)) {
            firebase.database().ref('/users/' + this.uid + '/highscore').set(score, function () {
                cc.sys.localStorage.setItem("highscore", score);
                cc.find('Canvas/best').active = true;
            });
        }
        cc.find('score').getComponent(cc.Label).string = score.toString();
        //callback
        if (this.uid != 'local') { //  &&&& 原本是online, always false
            firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(parseInt(cc.sys.localStorage.getItem("lego")));
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(parseInt(cc.sys.localStorage.getItem("banana")));
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")));
        }
        var menu = new cc.Component.EventHandler();
        menu.target = this.node;
        menu.component = "lose";
        menu.handler = "loadmenu";
        cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
    };
    lose.prototype.loadmenu = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.audioEngine.pauseMusic();
        cc.director.loadScene("menu");
    };
    lose.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.lose_back_music, false);
    };
    __decorate([
        property(cc.AudioClip)
    ], lose.prototype, "lose_back_music", void 0);
    lose = __decorate([
        ccclass
    ], lose);
    return lose;
}(cc.Component));
exports.default = lose;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXFFQztRQWxFRyxxQkFBZSxHQUFrQixJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRXJDLFNBQUcsR0FBVyxJQUFJLENBQUM7UUFDbkIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUErRHBDLENBQUM7SUE3REcscUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQ3ZDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQUEsaUJBNkNDO1FBNUNHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLElBQUk7WUFDcEMsSUFBSSxJQUFJO2dCQUFFLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsMkNBQTJDO1FBRTNDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FB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QUM7U0FDeEg7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFFLENBQUM7SUFHRCx1QkFBUSxHQUFSO1FBQ0ksK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFqRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDZTtJQUhyQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBcUV4QjtJQUFELFdBQUM7Q0FyRUQsQUFxRUMsQ0FyRWlDLEVBQUUsQ0FBQyxTQUFTLEdBcUU3QztrQkFyRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBsb3NlX2JhY2tfbXVzaWMgOiBjYy5BdWRpb0NsaXAgPSBudWxsOyAvLyBAQUBcclxuXHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgb25saW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25sb2FkKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpOyAvLyBAQUBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikgdGhpcy5vbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVpZCk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciBzY29yZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vd3Njb3JlXCIpKTtcclxuICAgICAgICB2YXIgc2NlbmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJub3dzY2VuZVwiKTtcclxuICAgICAgICB2YXIgaF9zY29yZSA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2NvcmUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudWlkLCBzY2VuZSwgaF9zY29yZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdG9yaW5nIGRhdGEgaWYgaGlnaHNjb3JlXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCh0aGlzLnVpZCAhPSAnbG9jYWwnKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMudWlkICE9ICdsb2NhbCcpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygoc2NvcmUgPiBoX3Njb3JlKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMudWlkICE9ICdsb2NhbCcpICYmIChzY2VuZSA9PSAndGVzdCcpICYmIChzY29yZSA+IGhfc2NvcmUpKTtcclxuICAgICAgICBpZigodGhpcy51aWQgIT0gJ2xvY2FsJykgJiYgKHNjZW5lID09ICd0ZXN0JykgJiYgKHNjb3JlID4gaF9zY29yZSkpIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2hpZ2hzY29yZScpLnNldChzY29yZSwgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jlc3QnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ3Njb3JlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzY29yZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL2NhbGxiYWNrXHJcbiAgICAgICAgaWYodGhpcy51aWQgIT0gJ2xvY2FsJykgeyAgICAgICAgICAgICAgICAvLyAgJiYmJiDljp/mnKzmmK9vbmxpbmUsIGFsd2F5cyBmYWxzZVxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIikpKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2xlZ28nKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGVnb1wiKSkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvcG93ZXJ1cCcpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3dlcnVwXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9iYW5hbmEnKS5zZXQocGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFuYW5hXCIpKSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9tdXRlJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11dGVcIikpKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3NpZ25hbCcpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWduYWxcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lbnUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG1lbnUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG1lbnUuY29tcG9uZW50ID0gXCJsb3NlXCI7XHJcbiAgICAgICAgbWVudS5oYW5kbGVyID0gXCJsb2FkbWVudVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG1lbnUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkbWVudSgpIHtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKXsvLyBAQUBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5sb3NlX2JhY2tfbXVzaWMsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lose_canvas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0977qYDkNHmZXrv09WzYJc', 'lose_canvas');
// scripts/lose_canvas.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        cc.audioEngine.stopAllEffects();
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9zZV9jYW52YXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e31arRhgdHJrIQbqecYA4v', 'menu');
// scripts/menu.ts

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
var menu = /** @class */ (function (_super) {
    __extends(menu, _super);
    function menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu_music = null; // @A@
        return _this;
    }
    menu.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    menu.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.menu_music, true);
    };
    menu.prototype.start = function () {
        if (!cc.audioEngine.isMusicPlaying())
            this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "menu";
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                signout.handler = "loadSignout";
                // grab logged in data from Firebase
                var uid = firebase.auth().currentUser.uid;
                var data = {};
                firebase.database().ref('users/' + uid).once('value', function (snapshot) {
                    var data = snapshot.val();
                    console.log(data);
                    cc.sys.localStorage.setItem("uid", uid);
                    console.log('uid here ', cc.sys.localStorage.getItem("uid"));
                    cc.sys.localStorage.setItem("coins", data['coins']);
                    cc.sys.localStorage.setItem("lego", data['thing']['lego']);
                    cc.sys.localStorage.setItem("powerup", data['thing']['powerup']);
                    cc.sys.localStorage.setItem("banana", data['thing']['banana']);
                    cc.sys.localStorage.setItem("mute", data['thing']['mute']);
                    cc.sys.localStorage.setItem("signal", data['thing']['signal']);
                    cc.sys.localStorage.setItem("highscore", data['highscore']);
                    cc.sys.localStorage.setItem("name", data['name']);
                    cc.sys.localStorage.setItem("email", data['email']);
                    cc.find("Canvas/username").getComponent(cc.Label).string = "Welcome, " + data['name'];
                    var s = "0";
                    for (var i = 1; i <= 5; i++) {
                        //console.log(data['thing']['color'][i]);
                        if (data['thing']['color'][i])
                            s = s + '1';
                        else
                            s = s + '0';
                    }
                    cc.sys.localStorage.setItem("color", s);
                });
            }
            else {
                // sign in button instead
                cc.find('Canvas/username').active = false;
                cc.find("Canvas/out").getComponent(cc.Label).string = "sign in";
                cc.find("Canvas/SignOut").scaleX = -1;
                signout.handler = "loadSignIn";
            }
        });
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
        var leader = new cc.Component.EventHandler();
        leader.target = this.node;
        leader.component = "menu";
        leader.handler = "loadLeader";
        cc.find("Canvas/leaderboard").getComponent(cc.Button).clickEvents.push(leader);
        var night = new cc.Component.EventHandler();
        night.target = this.node;
        night.component = "menu";
        night.handler = "loadNight";
        cc.find("Canvas/night").getComponent(cc.Button).clickEvents.push(night);
        var day = new cc.Component.EventHandler();
        day.target = this.node;
        day.component = "menu";
        day.handler = "loadDay";
        cc.find("Canvas/day").getComponent(cc.Button).clickEvents.push(day);
        var multi = new cc.Component.EventHandler();
        multi.target = this.node;
        multi.component = "menu";
        multi.handler = "loadMulti";
        cc.find("Canvas/multi").getComponent(cc.Button).clickEvents.push(multi);
        var bird = new cc.Component.EventHandler();
        bird.target = this.node;
        bird.component = "menu";
        bird.handler = "loadBird";
        cc.find("Canvas/bird").getComponent(cc.Button).clickEvents.push(bird);
        var store = new cc.Component.EventHandler();
        store.target = this.node;
        store.component = "menu";
        store.handler = "loadStore";
        cc.find("Canvas/store").getComponent(cc.Button).clickEvents.push(store);
        var t = new cc.Component.EventHandler();
        t.target = this.node;
        t.component = "menu";
        t.handler = "loadrule";
        cc.find("Canvas/rule").getComponent(cc.Button).clickEvents.push(t);
    };
    menu.prototype.loadNight = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("test");
    };
    menu.prototype.loadDay = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("day");
    };
    menu.prototype.loadMulti = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("multi_pairing");
    };
    menu.prototype.loadBird = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("bird");
    };
    menu.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        // kick player off
        firebase.auth().signOut().then(function () {
            cc.director.loadScene("menu");
            alert("You have been signed out.");
        }).catch(function (e) {
            console.log(e.message);
        });
    };
    menu.prototype.loadSignIn = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("start");
    };
    menu.prototype.loadLeader = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("leader");
    };
    menu.prototype.loadStore = function () {
        cc.director.loadScene("store");
    };
    menu.prototype.loadrule = function () {
        cc.director.loadScene("tutorial");
    };
    __decorate([
        property(cc.AudioClip)
    ], menu.prototype, "menu_music", void 0);
    menu = __decorate([
        ccclass
    ], menu);
    return menu;
}(cc.Component));
exports.default = menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlKQztRQTlJRyxnQkFBVSxHQUFrQixJQUFJLENBQUMsQ0FBQSxNQUFNOztJQThJM0MsQ0FBQztJQTVJRyxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHNCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLDJDQUEyQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLElBQUk7WUFDcEMsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osT0FBTyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7Z0JBQ2hDLG9DQUFvQztnQkFDcEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBUTtvQkFDNUQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDakUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDL0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFD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b3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBtZW51X211c2ljIDogY2MuQXVkaW9DbGlwID0gbnVsbDsvLyBAQUBcclxuXHJcbiAgICBvbmxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm1lbnVfbXVzaWMsIHRydWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYoIWNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIGxldCBzaWdub3V0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWdub3V0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWdub3V0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICBzaWdub3V0LmhhbmRsZXIgPSBcImxvYWRTaWdub3V0XCI7XHJcbiAgICAgICAgICAgICAgICAvLyBncmFiIGxvZ2dlZCBpbiBkYXRhIGZyb20gRmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIHZhciB1aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgdWlkICkub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVpZFwiLCB1aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1aWQgaGVyZSAnLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1aWRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIGRhdGFbJ2NvaW5zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxlZ29cIiwgZGF0YVsndGhpbmcnXVsnbGVnbyddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwb3dlcnVwXCIsIGRhdGFbJ3RoaW5nJ11bJ3Bvd2VydXAnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFuYW5hXCIsIGRhdGFbJ3RoaW5nJ11bJ2JhbmFuYSddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIGRhdGFbJ3RoaW5nJ11bJ211dGUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lnbmFsXCIsIGRhdGFbJ3RoaW5nJ11bJ3NpZ25hbCddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgZGF0YVsnaGlnaHNjb3JlJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgZGF0YVsnbmFtZSddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCBkYXRhWydlbWFpbCddKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3VzZXJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJXZWxjb21lLCBcIiArIGRhdGFbJ25hbWUnXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ11baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhWyd0aGluZyddWydjb2xvciddW2ldKSBzID0gcyArICcxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzID0gcyArICcwJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBzaWduIGluIGJ1dHRvbiBpbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvdXNlcm5hbWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvb3V0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJzaWduIGluXCJcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHNpZ25vdXQuaGFuZGxlciA9IFwibG9hZFNpZ25JblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduT3V0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbm91dCk7XHJcblxyXG4gICAgICAgIGxldCBsZWFkZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGxlYWRlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGVhZGVyLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGxlYWRlci5oYW5kbGVyID0gXCJsb2FkTGVhZGVyXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9sZWFkZXJib2FyZFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGxlYWRlcik7XHJcblxyXG4gICAgICAgIGxldCBuaWdodCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmlnaHQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5pZ2h0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIG5pZ2h0LmhhbmRsZXIgPSBcImxvYWROaWdodFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbmlnaHRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChuaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBkYXkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGRheS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgZGF5LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIGRheS5oYW5kbGVyID0gXCJsb2FkRGF5XCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9kYXlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChkYXkpO1xyXG5cclxuICAgICAgICBsZXQgbXVsdGkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG11bHRpLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBtdWx0aS5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBtdWx0aS5oYW5kbGVyID0gXCJsb2FkTXVsdGlcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL211bHRpXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobXVsdGkpO1xyXG5cclxuICAgICAgICBsZXQgYmlyZCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmlyZC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmlyZC5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBiaXJkLmhhbmRsZXIgPSBcImxvYWRCaXJkXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iaXJkXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmlyZCk7XHJcblxyXG4gICAgICAgIGxldCBzdG9yZSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc3RvcmUudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHN0b3JlLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIHN0b3JlLmhhbmRsZXIgPSBcImxvYWRTdG9yZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc3RvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzdG9yZSk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0LnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0LmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIHQuaGFuZGxlciA9IFwibG9hZHJ1bGVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3J1bGVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaCh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5pZ2h0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ0ZXN0XCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZERheSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZGF5XCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZE11bHRpKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtdWx0aV9wYWlyaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZEJpcmQoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJpcmRcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkU2lnbm91dCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgLy8ga2ljayBwbGF5ZXIgb2ZmXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgYmVlbiBzaWduZWQgb3V0LlwiKTtcclxuICAgICAgICB9KS5jYXRjaCgoZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbG9hZFNpZ25Jbigpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RhcnRcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkTGVhZGVyKCkge1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibGVhZGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdG9yZSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RvcmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZHJ1bGUgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInR1dG9yaWFsXCIpO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/multi_res_win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddd621B4/5ES5vZuFCJiSEF', 'multi_res_win');
// scripts/multi_res_win.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.win_music = null;
        _this.uid = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onload = function () {
        cc.audioEngine.pauseMusic(); // @A@
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.uid = cc.sys.localStorage.getItem('uid');
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var self_score = cc.sys.localStorage.getItem('multi_self');
        var other_score = cc.sys.localStorage.getItem('multi_other');
        cc.find('Canvas/multi_self').getComponent(cc.Label).string = self_score.toString();
        cc.find('Canvas/multi_other').getComponent(cc.Label).string = other_score.toString();
        console.log(self_score, other_score);
        //callback
        firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
        firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
        firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
        firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")));
        cc.find("Canvas/menu").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadmenu();
        }, this);
    };
    NewClass.prototype.loadmenu = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.audioEngine.pauseMusic();
        cc.director.loadScene("menu");
    };
    NewClass.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.win_music, false);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "win_music", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVsdGlfcmVzX3dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThDQztRQTNDRyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUN2QixTQUFHLEdBQVcsSUFBSSxDQUFDOztJQTBDL0IsQ0FBQztJQXhDRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQ3ZDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLDJDQUEyQztRQUUzQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdELEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkYsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVyQyxVQUFVO1FBQ1YsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0csUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2SCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqSCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVySCxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDcEQsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFHRCwyQkFBUSxHQUFSO1FBQ0ksK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDUTtJQUhkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QzVCO0lBQUQsZUFBQztDQTlDRCxBQThDQyxDQTlDcUMsRUFBRSxDQUFDLFNBQVMsR0E4Q2pEO2tCQTlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICB3aW5fbXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbmxvYWQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7IC8vIEBBQFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciBzZWxmX3Njb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9zZWxmJyk7XHJcbiAgICAgICAgdmFyIG90aGVyX3Njb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9vdGhlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdWx0aV9zZWxmJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzZWxmX3Njb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL211bHRpX290aGVyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvdGhlcl9zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGZfc2NvcmUsIG90aGVyX3Njb3JlKTtcclxuXHJcbiAgICAgICAgLy9jYWxsYmFja1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luc1wiKSkpO1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9wb3dlcnVwJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvd2VydXBcIikpKTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvbXV0ZScpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXRlXCIpKSk7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3NpZ25hbCcpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWduYWxcIikpKTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRtZW51KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRtZW51KCkge1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJHTSgpey8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLndpbl9tdXNpYywgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/leader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85c5c8PX5tGq4IWRK8+60WD', 'leader');
// scripts/leader.ts

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
var leader = /** @class */ (function (_super) {
    __extends(leader, _super);
    function leader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    leader.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    leader.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        var rank = { 1: { 'name': "", 'score': 0 }, 2: { 'name': "", 'score': 0 }, 3: { 'name': "", 'score': 0 }, 4: { 'name': "", 'score': 0 }, 5: { 'name': "", 'score': 0 } };
        firebase.database().ref('users').orderByKey().once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var user = childSnapshot.val();
                if (user['highscore'] > 0) {
                    for (var i = 5; i >= 1; i--) {
                        if (i == 5 && (rank[5]['name'] == "" || user['highscore'] > rank[5]['score'])) {
                            rank[5]['name'] = user['name'];
                            rank[5]['score'] = user['highscore'];
                        }
                        else if (rank[i]['name'] == "" || user['highscore'] > rank[i]['score']) {
                            var tmp = rank[i];
                            rank[i] = rank[i + 1];
                            rank[i + 1] = tmp;
                        }
                    }
                }
            });
            for (var i = 1; i <= 5; i++) {
                if (rank[i]['name'] == "")
                    cc.find('Canvas/rank' + i.toString()).active = false;
                else {
                    cc.find('Canvas/rank' + i.toString()).active = true;
                    cc.find('Canvas/rank' + i.toString() + '/name').getComponent(cc.Label).string = rank[i]['name'];
                    cc.find('Canvas/rank' + i.toString() + '/score').getComponent(cc.Label).string = rank[i]['score'];
                }
            }
        });
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "leader";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
    };
    leader.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("menu");
    };
    leader = __decorate([
        ccclass
    ], leader);
    return leader;
}(cc.Component));
exports.default = leader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQTZDQSxDQUFDO0lBNUNHLHVCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsc0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQztRQUM3SixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQyxRQUFRO1lBQ3ZFLFFBQVEsQ0FBQyxPQUFPLENBQUUsVUFBQyxhQUFhO2dCQUM1QixJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEIsS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7NEJBQzNFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQ3hDOzZCQUNJLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNuRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNwQixJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTt5QkFDbEI7cUJBQ0o7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDMUU7b0JBQ0QsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDckc7YUFDSjtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM3QixPQUFPLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCw0QkFBVyxHQUFYO1FBQ0ksK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE1Q2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E2QzFCO0lBQUQsYUFBQztDQTdDRCxBQTZDQyxDQTdDbUMsRUFBRSxDQUFDLFNBQVMsR0E2Qy9DO2tCQTdDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxlYWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgb25sb2FkKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIHZhciByYW5rID0gezE6IHsnbmFtZSc6IFwiXCIsICdzY29yZSc6IDB9LCAyOiB7J25hbWUnOiBcIlwiLCAnc2NvcmUnOiAwfSwgMzogeyduYW1lJzogXCJcIiwgJ3Njb3JlJzogMH0sIDQ6IHsnbmFtZSc6IFwiXCIsICdzY29yZSc6IDB9LCA1OiB7J25hbWUnOiBcIlwiLCAnc2NvcmUnOiAwfX07XG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VycycpLm9yZGVyQnlLZXkoKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKCAoY2hpbGRTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gY2hpbGRTbmFwc2hvdC52YWwoKTtcbiAgICAgICAgICAgICAgICBpZih1c2VyWydoaWdoc2NvcmUnXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSA1OyBpID49IDE7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGkgPT0gNSAmJiAocmFua1s1XVsnbmFtZSddID09IFwiXCIgfHwgdXNlclsnaGlnaHNjb3JlJ10gPiByYW5rWzVdWydzY29yZSddKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtbNV1bJ25hbWUnXSA9IHVzZXJbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5rWzVdWydzY29yZSddID0gdXNlclsnaGlnaHNjb3JlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyYW5rW2ldWyduYW1lJ10gPT0gXCJcIiB8fCB1c2VyWydoaWdoc2NvcmUnXSA+IHJhbmtbaV1bJ3Njb3JlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wID0gcmFua1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5rW2ldID0gcmFua1tpKzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtbaSsxXSA9IHRtcFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihyYW5rW2ldWyduYW1lJ10gPT0gXCJcIikgY2MuZmluZCgnQ2FudmFzL3JhbmsnICsgaS50b1N0cmluZygpKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3JhbmsnICsgaS50b1N0cmluZygpKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcmFuaycgKyBpLnRvU3RyaW5nKCkgKyAnL25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHJhbmtbaV1bJ25hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3JhbmsnICsgaS50b1N0cmluZygpICsgJy9zY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcmFua1tpXVsnc2NvcmUnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHNpZ25vdXQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzaWdub3V0LnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgc2lnbm91dC5jb21wb25lbnQgPSBcImxlYWRlclwiO1xuICAgICAgICBzaWdub3V0LmhhbmRsZXIgPSBcImxvYWRTaWdub3V0XCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ25vdXQpO1xuICAgIH1cbiAgICBsb2FkU2lnbm91dCgpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/missile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWlzc2lsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkIsMkJBQVk7SUFBekM7UUFBQSxxRUF3RUM7UUF0RVcsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUE2RGpDLENBQUM7SUEzREcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUzQixlQUFlO1FBQ2YseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxLQUFLO1FBQ0wsZ0NBQWdDO1FBQ2hDLHdEQUF3RDtRQUN4RCw0QkFBNEI7UUFDNUIsZ0NBQWdDO0lBQ3BDLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsc0lBQXNJO0lBQ3RJLG9DQUFvQztJQUNwQyxtR0FBbUc7SUFDbkcscUdBQXFHO0lBQ3JHLGlEQUFpRDtJQUNqRCw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLDRDQUE0QztJQUU1QyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixJQUFJO0lBRUosZ0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQztZQUMxSCx5QkFBeUI7WUFDekIsd0ZBQXdGO1lBQ3hGLDBGQUEwRjtZQUMxRixJQUFJLElBQUksR0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUM5RDtZQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQS9ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ007SUFYcEIsT0FBTztRQURuQixPQUFPO09BQ0ssT0FBTyxDQXdFbkI7SUFBRCxjQUFDO0NBeEVELEFBd0VDLENBeEU0QixFQUFFLENBQUMsU0FBUyxHQXdFeEM7QUF4RVksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBNaXNzaWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgdGd0X3g6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Z3RfeTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZXhwbG9kZTpjYy5QcmVmYWI9bnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYnVsbGV0RmFsbDpjYy5BdWRpb0NsaXA9bnVsbDtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLnBsYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xuICAgICAgICB0aGlzLnRndF94ID0gdGhpcy5wbGF5ZXIueDtcbiAgICAgICAgdGhpcy50Z3RfeSA9IHRoaXMucGxheWVyLnk7XG4gICAgICAgIFxuICAgICAgICAvLyB2YXIgZGlmZiA9IHtcbiAgICAgICAgLy8gICAgICdkeCc6IHRoaXMucGxheWVyLnggLSB0aGlzLm5vZGUueCxcbiAgICAgICAgLy8gICAgICdkeSc6IHRoaXMucGxheWVyLnkgLSB0aGlzLm5vZGUueSBcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmFuZ2xlKTtcbiAgICAgICAgLy8gdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaWZmLmR5LCBkaWZmLmR4KSAqIDU3LjI5NTgvNDtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFuZ2xlICs9IGFuZ2xlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUuYW5nbGUpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZSA9IDMwO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvciA9IGNjLmNvbG9yKDAsIDAsIDApO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyID0gY2MuY29sb3IoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgLy8gb25Qb3N0U29sdmUoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgIC8vICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyB8fCBvdGhlci5ub2RlLm5hbWUgPT0gJ3BsYXllcicgfHwgb3RoZXIubm9kZS5uYW1lID09ICdlbmVtaWVzJyl7XG4gICAgLy8gICAgICAgICAvLyBkZXBsb3kgYmxhY2sgcGFydGljbGVzXG4gICAgLy8gICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkucG9zaXRpb25UeXBlID0gMTtcbiAgICAvLyAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGUgPSAxMDA7XG4gICAgLy8gICAgICAgICB2YXIgZmlyZT1jYy5pbnN0YW50aWF0ZSh0aGlzLmV4cGxvZGUpO1xuICAgIC8vICAgICAgICAgZmlyZS54PXRoaXMubm9kZS54O1xuICAgIC8vICAgICAgICAgZmlyZS55PXRoaXMubm9kZS55KzE4MDtcbiAgICAvLyAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoZmlyZSk7XG5cbiAgICAvLyAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2dyb3VuZCcgfHwgb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnIHx8IG90aGVyLm5vZGUubmFtZSA9PSAncGxheWVyJyB8fCBvdGhlci5ub2RlLm5hbWUgPT0gJ2VuZW1pZXMnKXtcbiAgICAgICAgICAgIC8vIGRlcGxveSBibGFjayBwYXJ0aWNsZXNcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5wb3NpdGlvblR5cGUgPSAxO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZSA9IDEwMDtcbiAgICAgICAgICAgIHZhciBmaXJlPWNjLmluc3RhbnRpYXRlKHRoaXMuZXhwbG9kZSk7XG4gICAgICAgICAgICBmaXJlLng9dGhpcy5ub2RlLng7XG4gICAgICAgICAgICBmaXJlLnk9dGhpcy5ub2RlLnkrMTgwO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChmaXJlKTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJylcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJ1bGxldEZhbGwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPCAtMzUwMCkgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pair_game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c676ei8t6JMzZCzLvA9kLsr', 'pair_game');
// scripts/pair_game.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invite_code = null;
        _this.uid = null;
        _this.kick = false;
        _this.key = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        var _this = this;
        cc.audioEngine.pauseMusic(); // @A@
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("logged in");
            }
            else {
                _this.kick = true;
            }
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.uid = cc.sys.localStorage.getItem("uid");
        this.key = this.uid.substring(0, 5);
        cc.find("Canvas/root/Create").on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.kick) {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
            else
                _this.makeGame();
        }, this);
        cc.find("Canvas/root/Join").on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.kick) {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
            else
                _this.joinGame();
        }, this);
        cc.find("Canvas/root/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            firebase.database().ref('waiting_room/' + _this.key).remove();
            firebase.database().ref('in_game/' + _this.uid).remove();
            _this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    };
    NewClass.prototype.makeGame = function () {
        this.invite_code.string = this.key;
        // firebase.database().ref('waiting_room/' + this.key).set(0);
        this.maker_load();
    };
    NewClass.prototype.maker_load = function () {
        var _this = this;
        console.log("maker called");
        firebase.database().ref('waiting_room/' + this.key).once('value', function (snapshot) {
            console.log(snapshot.val());
            if (snapshot.exists()) {
                var joiner = snapshot.val();
                firebase.database().ref('in_game/' + joiner + '/creator').set(0);
                firebase.database().ref('waiting_room/' + _this.key).remove();
                console.log("entering game as creator");
                // remeber self as creator, then change scene
                cc.sys.localStorage.setItem("id", 1);
                cc.sys.localStorage.setItem("room", joiner);
                cc.director.loadScene('multi');
            }
            else
                _this.maker_load();
        });
        // setInterval(this.maker_load, 300);
    };
    // update (dt) {
    // }
    NewClass.prototype.joinGame = function () {
        // var key: string = this.invite_code.string;
        firebase.database().ref('waiting_room/' + this.invite_code.string).set(this.uid);
        this.joiner_load();
    };
    NewClass.prototype.joiner_load = function () {
        var _this = this;
        console.log("joiner called");
        firebase.database().ref('in_game/' + this.uid).once('value', function (snapshot) {
            if (snapshot.exists()) {
                console.log("creator has joined");
                firebase.database().ref('in_game/' + _this.uid + '/joiner').set(0);
                cc.sys.localStorage.setItem("id", 0);
                cc.sys.localStorage.setItem("room", _this.uid);
                cc.director.loadScene('multi');
            }
            else {
                _this.joiner_load();
            }
        });
        // setInterval(this.joiner_load, 300);
    };
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "invite_code", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFpcl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0ZDO1FBNUZHLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBVyxJQUFJLENBQUM7UUFDbkIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixTQUFHLEdBQVcsSUFBSSxDQUFDOztJQXdGL0IsQ0FBQztJQXRGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUNmLHlCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLElBQUk7WUFDcEMsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM1QjtpQkFBSTtnQkFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFD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Q0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxzQ0FBc0M7SUFDMUMsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNVO0lBSGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStGNUI7SUFBRCxlQUFDO0NBL0ZELEFBK0ZDLENBL0ZxQyxFQUFFLENBQUMsU0FBUyxHQStGakQ7a0JBL0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBpbnZpdGVfY29kZTogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGtpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUga2V5OiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7IC8vIEBBQFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCBpblwiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMudWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidWlkXCIpO1xyXG4gICAgICAgIHRoaXMua2V5ID0gdGhpcy51aWQuc3Vic3RyaW5nKDAsIDUpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9DcmVhdGVcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmtpY2spe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNdWx0aXBsYXllciBpcyBub3QgYWNjZXNzaWJsZSB3aGVuIHlvdSBhcmUgbm90IHNpZ25lZCBpbi5cIik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcclxuICAgICAgICAgICAgfWVsc2UgdGhpcy5tYWtlR2FtZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9Kb2luXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5raWNrKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTXVsdGlwbGF5ZXIgaXMgbm90IGFjY2Vzc2libGUgd2hlbiB5b3UgYXJlIG5vdCBzaWduZWQgaW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtZW51Jyk7XHJcbiAgICAgICAgICAgIH1lbHNlIHRoaXMuam9pbkdhbWUoKVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9iYWNrXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsgdGhpcy5rZXkpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy51aWQpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZV9jb2RlLnN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21lbnUnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlR2FtZSgpe1xyXG4gICAgICAgIHRoaXMuaW52aXRlX2NvZGUuc3RyaW5nID0gdGhpcy5rZXk7XHJcbiAgICAgICAgLy8gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsgdGhpcy5rZXkpLnNldCgwKTtcclxuICAgICAgICB0aGlzLm1ha2VyX2xvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlcl9sb2FkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlciBjYWxsZWRcIik7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsgdGhpcy5rZXkpLm9uY2UoJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGpvaW5lciA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIGpvaW5lciArICcvY3JlYXRvcicpLnNldCgwKTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd3YWl0aW5nX3Jvb20vJyArIHRoaXMua2V5KS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJpbmcgZ2FtZSBhcyBjcmVhdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtZWJlciBzZWxmIGFzIGNyZWF0b3IsIHRoZW4gY2hhbmdlIHNjZW5lXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCAxKTtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJvb21cIiwgam9pbmVyKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGknKTtcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMubWFrZXJfbG9hZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldEludGVydmFsKHRoaXMubWFrZXJfbG9hZCwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIGpvaW5HYW1lKCl7XHJcbiAgICAgICAgLy8gdmFyIGtleTogc3RyaW5nID0gdGhpcy5pbnZpdGVfY29kZS5zdHJpbmc7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3dhaXRpbmdfcm9vbS8nICsgdGhpcy5pbnZpdGVfY29kZS5zdHJpbmcpLnNldCh0aGlzLnVpZCk7XHJcbiAgICAgICAgdGhpcy5qb2luZXJfbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW5lcl9sb2FkKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJqb2luZXIgY2FsbGVkXCIpO1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnVpZCkub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdG9yIGhhcyBqb2luZWRcIik7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy51aWQgKyAnL2pvaW5lcicpLnNldCgwKTtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicm9vbVwiLCB0aGlzLnVpZCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2luZXJfbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwodGhpcy5qb2luZXJfbG9hZCwgMzAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
        _this.lego = 0;
        _this.banana = 0;
        _this.powerup = 0;
        _this.mute = 0;
        _this.signal = 0;
        _this.color_avail = { 1: true, 2: false, 3: false, 4: false, 5: false };
        _this.bubble_powerup = null;
        _this.player_jump = null;
        _this.get_coin = null;
        _this.die_audio = null;
        _this.sharp_knife = null;
        _this.get_powerup_bubble = null;
        _this.shooted = null;
        _this.night_back_music = null; // @A@
        _this.debug_mode = false;
        _this.hidden = false;
        _this.sec_list = [];
        _this.paused = false;
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.invis = false;
        _this.chameleon = null;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#083e77", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
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
        cc.audioEngine.pauseMusic();
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.dir = 0;
        this.section_count = 0;
        var c = cc.sys.localStorage.getItem("color").split("");
        for (var i = 1; i <= 5; i++) {
            this.color_avail[i] = parseInt(c[i]);
        }
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
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count * 3, 21));
                //console.log(rand);
                //console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        if (other.node.group == 'ground' || other.node.group == 'mound') {
            console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")");
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y)
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
            this.coin++;
            this.update_coin();
            other.node.destroy();
        }
        else if (other.node.group == 'bubble') { // @@ 
            if (other.tag == 3) { // colorful bubble
                cc.audioEngine.playEffect(this.get_powerup_bubble, false);
                this.powerup++;
                this.update_powerup();
                other.node.destroy();
            }
        }
        else if (other.node.name == 'missile') {
            cc.audioEngine.playEffect(this.shooted, false);
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.loser();
        }
        else if ((other.node.name[0] == 's' && other.node.name[1] == 'h') || other.node.name == 'spider') {
            if (other.node.name[0] == 's') {
                cc.audioEngine.playEffect(this.sharp_knife, false);
            }
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.loser();
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
    Player.prototype.loser = function () {
        this.unscheduleAllCallbacks();
        console.log("you died");
        cc.sys.localStorage.setItem("coins", this.coin);
        cc.sys.localStorage.setItem("powerup", this.powerup);
        cc.sys.localStorage.setItem("nowscore", this.score);
        cc.sys.localStorage.setItem("nowscene", 'test');
        this.node.active = false;
        this.scheduleOnce(function () {
            cc.director.loadScene("lose");
        }, 0.3);
    };
    Player.prototype.onEndContact = function (contact, self, other) {
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
    Player.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.night_back_music, true);
    };
    Player.prototype.start = function () {
        this.coin = cc.sys.localStorage.getItem("coins");
        this.powerup = cc.sys.localStorage.getItem("powerup");
        this.update_coin();
        this.update_powerup();
        this.playBGM();
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
        if (this.invis) {
            if (!this.hidden) {
                var cl = new cc.Color(0, 0, 0);
                this.Color.node.color = cl;
            }
            else {
                var cl = new cc.Color(0, 0, 0);
                this.Color.node.color = cl.fromHEX(this.chameleon);
            }
        }
        if (this.node.y <= -400) {
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emitterMode = 1;
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
            // deploy white particles
            this.loser();
        }
        this.camera_track();
        this.node.x += this.dir * 250 * dt;
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
        if ((event.keyCode == cc.macro.KEY.r) && this.powerup) { // ## 
            // use color powerup
            var cl = this.Color.node.color;
            this.invis = true;
            this.powerup--;
            this.update_powerup();
            this.scheduleOnce(function () {
                _this.Color.node.color = cl;
                _this.invis = false;
            }, 5);
        }
        if (event.keyCode == cc.macro.KEY.p) {
            if (this.paused) {
                this.paused = false;
                cc.audioEngine.resumeAll();
                cc.director.resume();
            }
            else {
                this.paused = true;
                cc.audioEngine.pauseAll();
                cc.director.pause();
            }
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
    Player.prototype.update_coin = function () {
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    Player.prototype.update_powerup = function () {
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
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "player_jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_coin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "die_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "sharp_knife", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_powerup_bubble", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "shooted", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "night_back_music", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQWtZQztRQS9YRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFJeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFXLEdBQVEsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUlyRSxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFrQixJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLHdCQUFrQixHQUFrQixJQUFJLENBQUM7UUFFekMsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFFOUIsc0JBQWdCLEdBQWtCLElBQUksQ0FBQyxDQUFBLE1BQU07UUFFN0MsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUVoQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFFLGdEQUFnRDtRQUN4RSxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ2pDLG1CQUFhLEdBQUcsQ0FBQyxDQUFDLENBQU0sd0dBQXdHO1FBRWhJLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQiw0QkFBNEI7UUFDNUIsZ0JBQVUsR0FBUSxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDdkYsRUFBRSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsU0FBUztZQUN0RSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTO1lBQ3pFLEVBQUUsRUFBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDMUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUE7O0lBZ1IvRSxDQUFDO0lBOVFHLHdCQUF3QjtJQUV4Qix5QkFBUSxHQUFSO1FBQ0ksK0NBQStDO1FBQy9DLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQywwREFBMEQ7UUFDMUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxtREFBbUQ7SUFDdkQsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsaUNBQWlDO1FBQ2pDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxtRkFBbUY7UUFDbkYsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksRUFBQztZQUNqQiw0QkFBNEI7WUFDNUIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFDLElBQUksRUFBQztnQkFDdEMsbUNBQW1DO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQzNFLG9CQUFvQjtnQkFDcEIsNkRBQTZEO2dCQUM3RCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdkQsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDM0MsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDLENBQUMsb0RBQW9EO1NBQ3pEO1FBQUEsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFDO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDckUsSUFBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUM7Z0JBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUM7b0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEQ7WUFFRCxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsSUFBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBRyxJQUFJLENBQUMsS0FBSzt3QkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzRiw2QkFBNkI7aUJBQ2hDO2FBQ0o7U0FDSjthQUFLLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxFQUFDLEVBQUUsTUFBTTtZQUN4QyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUMsRUFBRSxNQUFNO1lBQzNDLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUMsRUFBRSxrQkFBa0I7Z0JBQ2pDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN4QjtTQUNKO2FBQUssSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUM7WUFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQyx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLDRCQUE0QjtZQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBSyxJQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBQztZQUMzRixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBQztnQkFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtZQUNELHlCQUF5QjtZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUVMLENBQUM7SUFDRCw2QkFBWSxHQUFaO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLE9BQU8sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pELENBQUM7SUFDRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELDZCQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDN0IsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDbkMsNEVBQTRFO1lBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSTtTQUNQO0lBQ0wsQ0FBQztJQUVELHdCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDblAsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkcsbURBQW1EO0lBQ3ZELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNaLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQzlCO2lCQUFJO2dCQUNELElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEQ7U0FDSjtRQUNELElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN2Rix5QkFBeUI7WUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBSyxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDaEIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsK0ZBQStGO1FBQy9GLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLElBQUUsRUFBRSxHQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksR0FBQyxHQUFHLENBQUM7O1lBQ3ZHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQztRQUN4RixxQ0FBcUM7UUFDckMsSUFBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDNUMsSUFBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNqRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDaEQsOENBQThDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakUsOENBQThDO0lBR2xELENBQUM7SUFDRCwyQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw2QkFBWSxHQUFaO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRXZDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNDLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsS0FBSztRQUFmLGlCQXFDQztRQW5DRyxJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDO1lBQ25DLElBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzVCO2FBQ0ksSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM1QjtRQUVELElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxNQUFNO1lBQ3pELG9CQUFvQjtZQUNwQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQy9CLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN4QjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQUNELHdCQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSTtnQkFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSztnQkFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELHFCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDM0MsK0RBQStEO0lBQ25FLENBQUM7SUFDRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFDRCwrQkFBYyxHQUFkO1FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUE5WEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBVzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNRO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNrQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2dCO0lBckY5QixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBa1lsQjtJQUFELGFBQUM7Q0FsWUQsQUFrWUMsQ0FsWTJCLEVBQUUsQ0FBQyxTQUFTLEdBa1l2QztBQWxZWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwbGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzY6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTY6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5fcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgIFxyXG4gICAgY29pbjogbnVtYmVyID0gMDtcclxuICAgIGxlZ286IG51bWJlciA9IDA7XHJcbiAgICBiYW5hbmE6IG51bWJlciA9IDA7XHJcbiAgICBwb3dlcnVwOiBudW1iZXIgPSAwO1xyXG4gICAgbXV0ZTogbnVtYmVyID0gMDtcclxuICAgIHNpZ25hbDogbnVtYmVyID0gMDtcclxuICAgIGNvbG9yX2F2YWlsOiBhbnkgPSB7MTogdHJ1ZSwgMjogZmFsc2UsIDM6IGZhbHNlLCA0OiBmYWxzZSwgNTogZmFsc2V9O1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1YmJsZV9wb3dlcnVwIDogY2MuTm9kZSA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwbGF5ZXJfanVtcCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ2V0X2NvaW4gOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRpZV9hdWRpbyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2hhcnBfa25pZmUgOiBjYy5BdWRpb0NsaXAgPSBudWxsOyBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBnZXRfcG93ZXJ1cF9idWJibGUgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNob290ZWQgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG5pZ2h0X2JhY2tfbXVzaWMgOiBjYy5BdWRpb0NsaXAgPSBudWxsOy8vIEBBQFxyXG5cclxuICAgIGRlYnVnX21vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2VjX2xpc3QgPSBbXTtcclxuICAgIHByaXZhdGUgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZXZfZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcclxuICAgIHByaXZhdGUgb25fZmxvb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzdGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbnZpczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaGFtZWxlb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBzZWN0aW9uX2NvdW50ID0gMDsgICAgICAvLyBvbiBjb250YWN0IHdpdGggbWFya2VyLCBpZiBzZWN0aW9uX2NvdW50ICogMTkyMCA8IHRoaXMubm9kZS54OiBpbml0IG5leHQgc2VjdGlvbiBhbmQgc2VjdGlvbl9jb3VudCArK1xyXG5cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbG9yOiBudW1iZXIgPSAwO1xyXG4gICAgc3RyaXA6IG51bWJlciA9IDA7XHJcbiAgICBiYXNlOiBudW1iZXIgPSAwO1xyXG4gICAgbGFzdF94OiBudW1iZXIgPSAwLjA7XHJcblxyXG4gICAgLy8gY29sb3IgaW5mbyBvZiBuZXdfdGlsZXNldFxyXG4gICAgY29sb3JfbGlzdDogYW55ID0gezc6IFwiIzJiM2E2N1wiLDg6IFwiIzQ5NmE4MVwiLDk6IFwiIzY2OTk5YlwiLCAxMDogXCIjYjNhZjhmXCIsIDExOiBcIiNmZmM1ODJcIixcclxuICAgIDEzOlwiIzFjMzE0NFwiLCAxNDogXCIjNTk2ZjYyXCIsIDE1OiBcIiM3ZWExNmJcIiwxNjogXCIjYzNkODk4XCIsMTc6IFwiIzcwMTYxZFwiLFxyXG4gICAgMTkgOlwiIzA4M2U3N1wiLCAyMCA6XCIjZWRlYmQzXCIsIDIxIDpcIiNkYTQxNjdcIiwgMjIgOlwiI2Y0ZDM1ZVwiLCAyMyA6XCIjZjc4NjY0XCIsIFxyXG4gICAgMjUgIDpcIiM1NjJjMmNcIiwgMjYgOlwiI2YyNTQyZFwiLCAyNyA6XCIjZjVkZmJiXCIsIDI4IDpcIiMwZTk1OTVcIiwgMjkgOlwiIzEyNzQ3NFwiLCBcclxuICAgIDMxIDpcIiM4ZTlhYWZcIiwgMzIgOlwiI2NiYzBkM1wiLCAzMyA6XCIjZWZkM2Q3XCIsIDM0IDpcIiNmZWVhZmFcIiwgMzUgOlwiI2RlZTJmZlwiIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBzZXRjb2xvcigpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tcGxheWVyIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vcmFuZG9tIGNob29zZSBwbGF5ZXIgY29sb3JcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDtcclxuICAgICAgICB0aGlzLmJhc2UgPSAxICsgNip0aGlzLnN0cmlwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5zZXRjb2xvcigpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbl9jb3VudCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvclwiKS5zcGxpdChcIlwiKTtcclxuICAgICAgICBmb3IoIGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcl9hdmFpbFtpXSA9IHBhcnNlSW50KGNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW5pdCBuZXh0IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5taW4oMit0aGlzLnNlY3Rpb25fY291bnQqMywgMjEpKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyYW5kKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUbyBpbnN0YW50aWF0ZTogXCIgKyB0aGlzLnNlY19saXN0W3JhbmRdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfc2VjdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VjX2xpc3RbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnggPSAxOTIwICogdGhpcy5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBsaXN0LmFkZENoaWxkKG5leHRfc2VjdGlvbik7XHJcbiAgICAgICAgICAgIH0gLy9lbHNlIGNvbnNvbGUubG9nKHRoaXMubm9kZS54LCB0aGlzLnNlY3Rpb25fY291bnQpO1xyXG4gICAgICAgIH1pZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAgKyBcIiAoXCIgKyB0b3VjaC54ICsgXCIsIFwiICsgdG91Y2gueSArIFwiKVwiKVxyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSkgdGhpcy5vbl9mbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykge1xyXG4gICAgICAgICAgICAgICAgaWYoKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgdG91Y2gueCkgfHwgdGhpcy5pbnZpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW52aXMpIHRoaXMuY2hhbWVsZW9uID0gdGhpcy5jb2xvcl9saXN0W290aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2NvaW4nKXsgLy8gQEAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfY29pbiwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdGhpcy5jb2luKys7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2NvaW4oKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnYnViYmxlJyl7IC8vIEBAIFxyXG4gICAgICAgICAgIGlmKG90aGVyLnRhZyA9PSAzKXsgLy8gY29sb3JmdWwgYnViYmxlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2V0X3Bvd2VydXBfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlcnVwKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9wb3dlcnVwKCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUubmFtZSA9PSAnbWlzc2lsZScpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hvb3RlZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMuZGllX3BhcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb3NlcigpO1xyXG4gICAgICAgIH1lbHNlIGlmKChvdGhlci5ub2RlLm5hbWVbMF0gPT0gJ3MnJiZvdGhlci5ub2RlLm5hbWVbMV0gPT0gJ2gnKSB8fCBvdGhlci5ub2RlLm5hbWUgPT0gJ3NwaWRlcicpe1xyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLm5hbWVbMF0gPT0gJ3MnKXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaGFycF9rbmlmZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGRpZV9wYXJ0aWNsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xyXG4gICAgICAgICAgICBleHBsb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXI9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdjb2xvcicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbG9zZXIoKXtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBkaWVkXCIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMuY29pbik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicG93ZXJ1cFwiLCB0aGlzLnBvd2VydXApO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vd3Njb3JlXCIsIHRoaXMuc2NvcmUpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vd3NjZW5lXCIsICd0ZXN0Jyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvc2VcIik7XHJcbiAgICAgICAgfSwgMC4zKTtcclxuICAgIH1cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgLy8gaWYob3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQgPT0gdGhpcy5jb2xvciArIHRoaXMuYmFzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm5pZ2h0X2JhY2tfbXVzaWMsIHRydWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2luID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIik7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicG93ZXJ1cFwiKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9jb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWNfbGlzdCA9IFt0aGlzLnNlYzAsIHRoaXMuc2VjMSwgdGhpcy5zZWMyLCB0aGlzLnNlYzMsIHRoaXMuc2VjNCx0aGlzLnNlYzUsdGhpcy5zZWM2LHRoaXMuc2VjNyx0aGlzLnNlYzgsdGhpcy5zZWM5LHRoaXMuc2VjMTAsdGhpcy5zZWMxMSx0aGlzLnNlYzEyLHRoaXMuc2VjMTMsdGhpcy5zZWMxNCx0aGlzLnNlYzE1LHRoaXMuc2VjMTYsdGhpcy5zZWMxNyx0aGlzLnNlYzE4LHRoaXMuc2VjMTksdGhpcy5zZWMyMF07XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS1zcGFya2xlIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXI9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pbnZpcyl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhpZGRlbil7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbC5mcm9tSEVYKHRoaXMuY2hhbWVsZW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm5vZGUueSA8PSAtNDAwKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXR0ZXJNb2RlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZSA9IDEwMDtcclxuICAgICAgICAgICAgLy8gZGVwbG95IHdoaXRlIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhX3RyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5kaXIgKiAyNTAgKiBkdDtcclxuICAgICAgICBpZih0aGlzLmZseV9zdGF0ZSA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5wcmV2X2RpciAqIDAuNDtcclxuICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAtMTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0aWNrKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGlja1wiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5wcmV2X2RpciAqIDAuNDtcclxuICAgICAgICAgICAgdGhpcy5zdGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gKHRoaXMuZGlyID49IDApID8gMSA6IC0xO1xyXG4gICAgICAgIHZhciBkeSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueTtcclxuICAgICAgICAvLy0tLS0tLS0tLS1zcGFya2xlIGVtaXNzaW9uIHJhdGUgaXMgMCB3aGVuIGRpZG50IG1vdmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmKHRoaXMuZGlyIT0wfHxkeT4xMCkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0xMDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW1pc3Npb25SYXRlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLS1wbGF5ZXIgc3Bpbi0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmKChkeSA+IDEwKSAmJiB0aGlzLmRpciA9PSAxKSB0aGlzLnNwaW5fcmlnaHQoKTtcclxuICAgICAgICBlbHNlIGlmKChkeSA+IDEwKSAmJiB0aGlzLmRpciA9PSAtMSkgdGhpcy5zcGluX2xlZnQoKTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5hbmdsZSAhPSAwKSB0aGlzLm5vZGUuYW5nbGU9MDtcclxuICAgICAgICAvLy0tLS0tLS0tc2NvcmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IChNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpID4gdGhpcy5zY29yZSkgPyBNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpIDogdGhpcy5zY29yZTtcclxuICAgICAgICB0aGlzLlNjb3JlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgc3Bpbl9yaWdodCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSAtPSAxMjtcclxuICAgIH1cclxuICAgIHNwaW5fbGVmdCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmFfdHJhY2soKXtcclxuICAgICAgICBpZih0aGlzLmZseV9zdGF0ZSAmJiAhdGhpcy5kaXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnggPCAxMDApIHRoaXMuY2FtZXJhLnggPSAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jYW1lcmEueCA9IHRoaXMubm9kZS54IC0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uX2Zsb29yKSB0aGlzLmp1bXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkubGVmdCl7IFxyXG4gICAgICAgICAgICB0aGlzLmRpciA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJldl9kaXIgPSB0aGlzLmRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpICYmIHRoaXMucG93ZXJ1cCl7IC8vICMjIFxyXG4gICAgICAgICAgICAvLyB1c2UgY29sb3IgcG93ZXJ1cFxyXG4gICAgICAgICAgICB2YXIgY2wgPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBvd2VydXAtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnApe1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhdXNlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uS2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wKCl7ICAgIFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5ZXJfanVtcCwgZmFsc2UpOyBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCA2MDApO1xyXG4gICAgICAgIHRoaXMuZmx5X3N0YXRlID0gMTtcclxuICAgICAgICBpZighdGhpcy5kZWJ1Z19tb2RlKSB0aGlzLm9uX2Zsb29yID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmV2X2RpciArIFwiZmx5IHN0YXRlOiBcIiArIHRoaXMuZmx5X3N0YXRlKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9jb2luKCl7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLmNvaW5fcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvaW4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9wb3dlcnVwKCl7ICAvLyBAQCBcclxuICAgICAgIHRoaXMuYnViYmxlX3Bvd2VydXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnBvd2VydXAudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/multi_res_lose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95b01493m1EhI/sOoLxyS4X', 'multi_res_lose');
// scripts/multi_res_lose.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lose_back_music = null;
        _this.uid = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onload = function () {
        cc.audioEngine.pauseMusic(); // @A@
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.uid = cc.sys.localStorage.getItem('uid');
        this.playBGM();
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        var self_score = cc.sys.localStorage.getItem('multi_self');
        var other_score = cc.sys.localStorage.getItem('multi_other');
        cc.find('Canvas/multi_self').getComponent(cc.Label).string = self_score.toString();
        cc.find('Canvas/multi_other').getComponent(cc.Label).string = other_score.toString();
        console.log(self_score, other_score);
        //callback
        firebase.database().ref('/users/' + this.uid + '/coins').set(parseInt(cc.sys.localStorage.getItem("coins")));
        firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(parseInt(cc.sys.localStorage.getItem("powerup")));
        firebase.database().ref('/users/' + this.uid + '/thing/mute').set(parseInt(cc.sys.localStorage.getItem("mute")));
        firebase.database().ref('/users/' + this.uid + '/thing/signal').set(parseInt(cc.sys.localStorage.getItem("signal")));
        cc.find("Canvas/menu").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadmenu();
        }, this);
    };
    NewClass.prototype.loadmenu = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.audioEngine.pauseMusic();
        cc.director.loadScene("menu");
    };
    NewClass.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.lose_back_music, false);
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "lose_back_music", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVsdGlfcmVzX2xvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4Q0M7UUEzQ0cscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQzdCLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBMEMvQixDQUFDO0lBeENHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDdkMsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsMkNBQTJDO1FBRTNDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0QsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRixFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXJDLFVBQVU7UUFDVixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZILFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pILFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJILEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUNwRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUdELDJCQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQTFDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3FEQUNjO0lBSHBCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QzVCO0lBQUQsZUFBQztDQTlDRCxBQThDQyxDQTlDcUMsRUFBRSxDQUFDLFNBQVMsR0E4Q2pEO2tCQTlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBsb3NlX2JhY2tfbXVzaWM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbmxvYWQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7IC8vIEBBQFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciBzZWxmX3Njb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9zZWxmJyk7XHJcbiAgICAgICAgdmFyIG90aGVyX3Njb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9vdGhlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdWx0aV9zZWxmJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzZWxmX3Njb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL211bHRpX290aGVyJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvdGhlcl9zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGZfc2NvcmUsIG90aGVyX3Njb3JlKTtcclxuXHJcbiAgICAgICAgLy9jYWxsYmFja1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luc1wiKSkpO1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9wb3dlcnVwJykuc2V0KHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvd2VydXBcIikpKTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvbXV0ZScpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXRlXCIpKSk7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL3NpZ25hbCcpLnNldChwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaWduYWxcIikpKTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVcIikub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRtZW51KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRtZW51KCkge1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJHTSgpey8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmxvc2VfYmFja19tdXNpYywgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/parent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '201d1+0To9E0LGUE/g+DzID', 'parent');
// scripts/parent.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speedup = 0.7;
        _this.stunned = 0;
        _this.penalty = 0;
        _this.animator = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.animator = this.getComponent(cc.Animation);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.before_x = this.node.x;
        this.footstep_id = cc.audioEngine.playEffect(this.footstep, true);
        cc.audioEngine.setVolume(this.footstep_id, 1);
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        var touch = contact.getWorldManifold().normal;
        if (other.node.name == "lego") {
            this.stunned = 1;
            this.animator.play("parent_stun");
            setTimeout(function () {
                _this.stunned = 0;
                _this.animator.play("parent_norm");
                _this.node.color = new cc.Color(255, 255, 255);
                _this.penalty = 220;
                _this.scheduleOnce(function () {
                    _this.penalty = 0;
                }, 2);
            }, 4000);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.update = function (dt) {
        this.speedup = 0.3 + 0.003 * parseInt(this.now_score.string); //每得一分加速0.03 //約七百多分會比player快
        if (!this.stunned)
            this.node.x += Math.max(0.32, (Math.min(this.speedup * 300, 250) + this.penalty) * dt);
        else
            this.node.x += 0;
        if (Math.abs(this.node.x - this.before_x) <= 0.3 && this.stunned == 0)
            this.jump();
        this.before_x = this.node.x;
        var close = 680 - (this.player.x - this.node.x);
        if (close >= 0)
            cc.audioEngine.setVolume(this.footstep_id, close / 680);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.jump = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "now_score", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "footstep", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "player", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUVDO1FBaEVHLGFBQU8sR0FBUSxHQUFHLENBQUM7UUFJbkIsYUFBTyxHQUFRLENBQUMsQ0FBQztRQUNULGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsY0FBUSxHQUFpQixJQUFJLENBQUM7O1FBeUR0QyxpQkFBaUI7SUFDckIsQ0FBQztJQWxERyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpELENBQUM7SUFDRCxpQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElB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QWpFcUMsRUFBRSxDQUFDLFNBQVMsR0FpRWpEO2tCQWpFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzcGVlZHVwOm51bWJlcj0wLjc7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBub3dfc2NvcmU6Y2MuTGFiZWw7XHJcbiAgICBiZWZvcmVfeDpudW1iZXI7XHJcbiAgICBzdHVubmVkOm51bWJlcj0wO1xyXG4gICAgcHJpdmF0ZSBwZW5hbHR5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRvcjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGZvb3RzdGVwOmNjLkF1ZGlvQ2xpcDtcclxuICAgIGZvb3RzdGVwX2lkOm51bWJlcjtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjpjYy5Ob2RlO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdG9yID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xyXG4gICAgICAgIHRoaXMuZm9vdHN0ZXBfaWQ9Y2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZvb3RzdGVwLCB0cnVlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5mb290c3RlcF9pZCwxKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lPT1cImxlZ29cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R1bm5lZD0xO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdG9yLnBsYXkoXCJwYXJlbnRfc3R1blwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVubmVkPTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdG9yLnBsYXkoXCJwYXJlbnRfbm9ybVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvcj1uZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5hbHR5ID0gMjIwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVuYWx0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BlZWR1cCA9IDAuMyArIDAuMDAzKnBhcnNlSW50KHRoaXMubm93X3Njb3JlLnN0cmluZyk7ICAvL+avj+W+l+S4gOWIhuWKoOmAnzAuMDMgLy/ntITkuIPnmb7lpJrliIbmnIPmr5RwbGF5ZXLlv6tcclxuICAgICAgICBpZighdGhpcy5zdHVubmVkKSB0aGlzLm5vZGUueCArPSBNYXRoLm1heCgwLjMyLCAoTWF0aC5taW4odGhpcy5zcGVlZHVwICogMzAwLCAyNTApICsgdGhpcy5wZW5hbHR5KSogZHQpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLngrPTA7XHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy5ub2RlLngtdGhpcy5iZWZvcmVfeCk8PTAuMyYmdGhpcy5zdHVubmVkPT0wKSB0aGlzLmp1bXAoKTtcclxuICAgICAgICB0aGlzLmJlZm9yZV94PXRoaXMubm9kZS54O1xyXG4gICAgICAgIHZhciBjbG9zZT02ODAtKHRoaXMucGxheWVyLngtdGhpcy5ub2RlLngpO1xyXG4gICAgICAgIGlmKGNsb3NlPj0wKSBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5mb290c3RlcF9pZCxjbG9zZS82ODApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIGp1bXAoKXsgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9ac5BmMLxLho8t58liW+df', 'rule');
// scripts/rule.ts

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
var rule = /** @class */ (function (_super) {
    __extends(rule, _super);
    function rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rule.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    rule.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        var back = new cc.Component.EventHandler();
        back.target = this.node;
        back.component = "rule";
        back.handler = "loadback";
        cc.find("Canvas/back").getComponent(cc.Button).clickEvents.push(back);
        var next = new cc.Component.EventHandler();
        next.target = this.node;
        next.component = "rule";
        next.handler = "loadnext";
        cc.find("Canvas/next").getComponent(cc.Button).clickEvents.push(next);
    };
    rule.prototype.loadback = function () {
        if (cc.find('Canvas/game_rule_1').active)
            cc.director.loadScene('menu');
        else if (cc.find('Canvas/game_rule_2').active)
            cc.find('Canvas/game_rule_1').active = true;
        else if (cc.find('Canvas/game_rule_3').active)
            cc.find('Canvas/game_rule_2').active = true;
        else if (cc.find('Canvas/game_rule_4').active) {
            cc.find('Canvas/game_rule_3').active = true;
            cc.find('Canvas/next').active = true;
        }
    };
    rule.prototype.loadnext = function () {
        if (cc.find('Canvas/game_rule_1').active)
            cc.find('Canvas/game_rule_1').active = false;
        else if (cc.find('Canvas/game_rule_2').active)
            cc.find('Canvas/game_rule_2').active = false;
        else if (cc.find('Canvas/game_rule_3').active) {
            cc.find('Canvas/game_rule_3').active = false;
            cc.find('Canvas/next').active = false;
        }
    };
    rule = __decorate([
        ccclass
    ], rule);
    return rule;
}(cc.Component));
exports.default = rule;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFvQ0EsQ0FBQztJQW5DRyxxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELG9CQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRFLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDMUIsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNO1lBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEUsSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3JGLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU07WUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNyRixJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDMUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFDSSxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNO1lBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDakYsSUFBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTTtZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RGLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBbkNnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0N4QjtJQUFELFdBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0M3QztrQkFwQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBydWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbmxvYWQoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcblxuICAgICAgICBsZXQgYmFjayA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGJhY2sudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBiYWNrLmNvbXBvbmVudCA9IFwicnVsZVwiO1xuICAgICAgICBiYWNrLmhhbmRsZXIgPSBcImxvYWRiYWNrXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGJhY2spO1xuXG4gICAgICAgIGxldCBuZXh0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgbmV4dC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIG5leHQuY29tcG9uZW50ID0gXCJydWxlXCI7XG4gICAgICAgIG5leHQuaGFuZGxlciA9IFwibG9hZG5leHRcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9uZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dCk7XG4gICAgfVxuICAgIGxvYWRiYWNrKCkge1xuICAgICAgICBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzEnKS5hY3RpdmUpIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xuICAgICAgICBlbHNlIGlmKGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMicpLmFjdGl2ZSkgY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8xJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzMnKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMicpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYoY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV80JykuYWN0aXZlKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzMnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL25leHQnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRuZXh0KCkge1xuICAgICAgICBpZihjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzEnKS5hY3RpdmUpIGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBlbHNlIGlmKGNjLmZpbmQoJ0NhbnZhcy9nYW1lX3J1bGVfMicpLmFjdGl2ZSkgY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8yJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYoY2MuZmluZCgnQ2FudmFzL2dhbWVfcnVsZV8zJykuYWN0aXZlKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvZ2FtZV9ydWxlXzMnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9uZXh0JykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player_day.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30951GbWQNKHZLo+kLjQlFg', 'player_day');
// scripts/player_day.ts

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
        _this.bubble_banana = null;
        _this.banana = 0;
        _this.bubble_lego = null;
        _this.lego = 0;
        _this.banana_Prefabs = null;
        _this.lego_Prefabs = null;
        _this.player_jump = null;
        _this.get_coin = null;
        _this.get_B_L_bubble = null;
        _this.get_powerup_bubble = null;
        _this.put_bubble = null;
        _this.sharp_knife = null;
        _this.die_audio = null;
        _this.day_back_music = null; // @A@
        _this.debug_mode = false;
        _this.sec_list = [];
        _this.paused = false;
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.stick2 = false;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#083e77", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
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
        console.log("color string: " + color_str);
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    };
    Player.prototype.onLoad = function () {
        cc.audioEngine.pauseMusic();
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
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count * 3, 21));
                //console.log(rand);
                //console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else console.log(this.node.x, this.section_count);
        }
        if (other.node.group == 'ground' || other.node.group == 'mound') {
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y)
                    this.on_floor = true;
            }
        }
        else if (other.node.group == 'coin') { // @@ 
            cc.audioEngine.playEffect(this.get_coin, false);
            this.coin++;
            this.update_coin();
            other.node.destroy();
        }
        else if (other.node.group == 'bubble') { // @@ 
            if (other.tag == 1) { // bubble banana
                cc.audioEngine.playEffect(this.get_B_L_bubble, false);
                this.banana++;
                this.update_banana();
                other.node.destroy();
            }
            else if (other.tag == 2) { // bubble lego
                cc.audioEngine.playEffect(this.get_B_L_bubble, false);
                this.lego++;
                this.update_lego();
                other.node.destroy();
            }
        }
        else if ((other.node.name[0] == 's' && other.node.name[1] == 'h') || other.node.name == 'parent' || other.node.name == 'spider') {
            // diee
            // deploy white particles
            if (other.node.name[0] == 's') {
                cc.audioEngine.playEffect(this.sharp_knife, false);
            }
            this.die_particle();
            this.loser();
        }
    };
    Player.prototype.die_particle = function () {
        cc.audioEngine.playEffect(this.die_audio, false);
        this.node.getChildByName('eye').active = false;
        var explode = this.node.getChildByName("star_explode");
        explode.active = true;
        explode.getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        this.node.getChildByName('color').active = false;
    };
    Player.prototype.loser = function () {
        cc.sys.localStorage.setItem("coins", this.coin);
        cc.sys.localStorage.setItem("lego", this.lego);
        cc.sys.localStorage.setItem("banana", this.banana);
        cc.sys.localStorage.setItem("nowscore", this.score);
        cc.sys.localStorage.setItem("nowscene", 'day');
        this.node.active = false;
        this.scheduleOnce(function () {
            cc.director.loadScene("lose");
        }, 0.3);
    };
    Player.prototype.start = function () {
        this.coin = cc.sys.localStorage.getItem("coins");
        this.lego = cc.sys.localStorage.getItem("lego");
        this.banana = cc.sys.localStorage.getItem("banana");
        this.update_coin();
        this.update_lego();
        this.update_banana();
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec6, this.sec7, this.sec8, this.sec9, this.sec10, this.sec11, this.sec12, this.sec13, this.sec14, this.sec15, this.sec16, this.sec17, this.sec18, this.sec19, this.sec20];
        this.score = 0;
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        //-------------------------------------------------
        this.playBGM();
    };
    Player.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.day_back_music, true);
    };
    Player.prototype.update = function (dt) {
        if (this.stick2) {
            this.node.x -= 0.4 * this.dir;
            this.dir = 0;
            this.stick2 = false;
        }
        if (!this.node.active) {
            cc.sys.localStorage.setItem("coins", this.coin);
            cc.sys.localStorage.setItem("lego", this.lego);
            cc.sys.localStorage.setItem("banana", this.banana);
            cc.sys.localStorage.setItem("nowscore", this.score);
            cc.sys.localStorage.setItem("nowscene", 'test');
            cc.director.loadScene('lose');
        }
        if (this.node.y <= -400) {
            // die
            // deploy white particles
            this.loser();
        }
        this.camera_track();
        this.node.x += this.dir * 250 * dt;
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
            if (this.paused) {
                this.paused = false;
                cc.audioEngine.resumeAll();
                cc.director.resume();
            }
            else {
                this.paused = true;
                cc.audioEngine.pauseAll();
                cc.director.pause();
            }
        }
        if (event.keyCode == cc.macro.KEY.e && this.banana > 0) { // put banana ##
            cc.audioEngine.playEffect(this.put_bubble, false);
            var banana_pre = cc.instantiate(this.banana_Prefabs);
            banana_pre.x = this.node.x;
            banana_pre.y = this.node.y;
            cc.find("Canvas/root").addChild(banana_pre);
            this.banana--;
            this.update_banana();
        }
        else if (event.keyCode == cc.macro.KEY.w && this.lego > 0) { //  put lego ##
            cc.audioEngine.playEffect(this.put_bubble, false);
            var lego_pre = cc.instantiate(this.lego_Prefabs);
            lego_pre.x = this.node.x;
            lego_pre.y = this.node.y - 1;
            cc.find("Canvas/root").addChild(lego_pre);
            this.lego--;
            this.update_lego();
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
        console.log(this.prev_dir + "fly state: " + this.fly_state);
    };
    Player.prototype.update_coin = function () {
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    Player.prototype.update_banana = function () {
        this.bubble_banana.getComponent(cc.Label).string = this.banana.toString();
    };
    Player.prototype.update_lego = function () {
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
        property(cc.AudioClip)
    ], Player.prototype, "player_jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_coin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_B_L_bubble", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_powerup_bubble", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "put_bubble", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "sharp_knife", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "die_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "day_back_music", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyX2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUFtWUM7UUFoWUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBSXhCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFhLElBQUksQ0FBQztR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RztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFJeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFJNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDYTtJQUkvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNXO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ1E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDYztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3NEQUNrQjtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzhDQUNVO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1c7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNjO0lBN0Y1QixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBbVlsQjtJQUFELGFBQUM7Q0FuWUQsQUFtWUMsQ0FuWTJCLEVBQUUsQ0FBQyxTQUFTLEdBbVl2QztBQW5ZWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwbGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzY6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTY6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5fcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgIFxyXG4gICAgY29pbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1YmJsZV9iYW5hbmEgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBiYW5hbmE6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfbGVnbyA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIGxlZ286IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhbmFuYV9QcmVmYWJzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxlZ29fUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBsYXllcl9qdW1wIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBnZXRfY29pbiA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ2V0X0JfTF9idWJibGUgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdldF9wb3dlcnVwX2J1YmJsZSA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcHV0X2J1YmJsZSA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNoYXJwX2tuaWZlIDogY2MuQXVkaW9DbGlwID0gbnVsbDsgXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRpZV9hdWRpbyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkYXlfYmFja19tdXNpYyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7Ly8gQEFAXHJcblxyXG4gICAgZGVidWdfbW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2VjX2xpc3QgPSBbXTtcclxuICAgIHByaXZhdGUgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZXZfZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcclxuICAgIHByaXZhdGUgb25fZmxvb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzdGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGljazI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlY3Rpb25fY291bnQgPSAwOyAgICAgIC8vIG9uIGNvbnRhY3Qgd2l0aCBtYXJrZXIsIGlmIHNlY3Rpb25fY291bnQgKiAxOTIwIDwgdGhpcy5ub2RlLng6IGluaXQgbmV4dCBzZWN0aW9uIGFuZCBzZWN0aW9uX2NvdW50ICsrXHJcblxyXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29sb3I6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcclxuICAgIGJhc2U6IG51bWJlciA9IDA7XHJcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcclxuXHJcblxyXG4gICAgLy8gY29sb3IgaW5mbyBvZiBuZXdfdGlsZXNldFxyXG4gICAgY29sb3JfbGlzdDogYW55ID0gezc6IFwiIzJiM2E2N1wiLDg6IFwiIzQ5NmE4MVwiLDk6IFwiIzY2OTk5YlwiLCAxMDogXCIjYjNhZjhmXCIsIDExOiBcIiNmZmM1ODJcIixcclxuICAgIDEzOlwiIzFjMzE0NFwiLCAxNDogXCIjNTk2ZjYyXCIsIDE1OiBcIiM3ZWExNmJcIiwxNjogXCIjYzNkODk4XCIsMTc6IFwiIzcwMTYxZFwiLFxyXG4gICAgMTkgOlwiIzA4M2U3N1wiLCAyMCA6XCIjZWRlYmQzXCIsIDIxIDpcIiNkYTQxNjdcIiwgMjIgOlwiI2Y0ZDM1ZVwiLCAyMyA6XCIjZjc4NjY0XCIsIFxyXG4gICAgMjUgIDpcIiM1NjJjMmNcIiwgMjYgOlwiI2YyNTQyZFwiLCAyNyA6XCIjZjVkZmJiXCIsIDI4IDpcIiMwZTk1OTVcIiwgMjkgOlwiIzEyNzQ3NFwiLCBcclxuICAgIDMxIDpcIiM4ZTlhYWZcIiwgMzIgOlwiI2NiYzBkM1wiLCAzMyA6XCIjZWZkM2Q3XCIsIDM0IDpcIiNmZWVhZmFcIiwgMzUgOlwiI2RlZTJmZlwiIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBzZXRjb2xvcigpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tcGxheWVyIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vcmFuZG9tIGNob29zZSBwbGF5ZXIgY29sb3JcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDtcclxuICAgICAgICB0aGlzLmJhc2UgPSAxICsgNip0aGlzLnN0cmlwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2xvciBzdHJpbmc6IFwiICsgY29sb3Jfc3RyKTtcclxuICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaW5pdCBuZXh0IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5taW4oMit0aGlzLnNlY3Rpb25fY291bnQqMywgMjEpKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmFuZCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY19saXN0W3JhbmRdKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwbGlzdC5hZGRDaGlsZChuZXh0X3NlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IC8vZWxzZSBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5zZWN0aW9uX2NvdW50KTtcclxuICAgICAgICB9aWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpe1xyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSkgdGhpcy5vbl9mbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnY29pbicpeyAvLyBAQCBcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdldF9jb2luLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB0aGlzLmNvaW4rKztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfY29pbigpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdidWJibGUnKXsgLy8gQEAgXHJcblxyXG4gICAgICAgICAgICBpZihvdGhlci50YWcgPT0gMSl7IC8vIGJ1YmJsZSBiYW5hbmFcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfQl9MX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFuYW5hKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9iYW5hbmEoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSAyKXsgLy8gYnViYmxlIGxlZ29cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfQl9MX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMubGVnbysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfbGVnbygpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKChvdGhlci5ub2RlLm5hbWVbMF0gPT0gJ3MnICYmIG90aGVyLm5vZGUubmFtZVsxXSA9PSAnaCcpIHx8IG90aGVyLm5vZGUubmFtZSA9PSAncGFyZW50JyB8fCBvdGhlci5ub2RlLm5hbWUgPT0gJ3NwaWRlcicpe1xyXG4gICAgICAgICAgICAvLyBkaWVlXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lWzBdID09ICdzJyl7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hhcnBfa25pZmUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGRpZV9wYXJ0aWNsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZV9hdWRpbywgZmFsc2UpOyBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBleHBsb2RlPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJfZXhwbG9kZVwiKTtcclxuICAgICAgICBleHBsb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXI9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbG9yJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsb3Nlcigpe1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMuY29pbik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVnb1wiLCB0aGlzLmxlZ28pO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhbmFuYVwiLCB0aGlzLmJhbmFuYSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm93c2NvcmVcIiwgdGhpcy5zY29yZSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm93c2NlbmVcIiwgJ2RheScpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb3NlXCIpO1xyXG4gICAgICAgIH0sIDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuY29pbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvaW5zXCIpO1xyXG4gICAgICAgIHRoaXMubGVnbyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxlZ29cIik7XHJcbiAgICAgICAgdGhpcy5iYW5hbmEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYW5hbmFcIik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfY29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2xlZ28oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9iYW5hbmEoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjX2xpc3QgPSBbdGhpcy5zZWMwLCB0aGlzLnNlYzEsIHRoaXMuc2VjMiwgdGhpcy5zZWMzLCB0aGlzLnNlYzQsdGhpcy5zZWM1LHRoaXMuc2VjNix0aGlzLnNlYzcsdGhpcy5zZWM4LHRoaXMuc2VjOSx0aGlzLnNlYzEwLHRoaXMuc2VjMTEsdGhpcy5zZWMxMix0aGlzLnNlYzEzLHRoaXMuc2VjMTQsdGhpcy5zZWMxNSx0aGlzLnNlYzE2LHRoaXMuc2VjMTcsdGhpcy5zZWMxOCx0aGlzLnNlYzE5LHRoaXMuc2VjMjBdO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tc3BhcmtsZSBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmRheV9iYWNrX211c2ljLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGljazIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSAwLjQgKiB0aGlzLmRpcjtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0aWNrMiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMuY29pbik7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxlZ29cIiwgdGhpcy5sZWdvKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFuYW5hXCIsIHRoaXMuYmFuYW5hKTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm93c2NvcmVcIiwgdGhpcy5zY29yZSk7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vd3NjZW5lXCIsICd0ZXN0Jyk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9zZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm5vZGUueSA8PSAtNDAwKXtcclxuICAgICAgICAgICAgLy8gZGllXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5sb3NlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbWVyYV90cmFjaygpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyICogMjUwICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RpY2tcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLmRpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tc3BhcmtsZSBlbWlzc2lvbiByYXRlIGlzIDAgd2hlbiBkaWRudCBtb3ZlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZih0aGlzLmRpciE9MHx8ZHk+MTApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MTAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tLXBsYXllciBzcGluLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IDEpIHRoaXMuc3Bpbl9yaWdodCgpO1xyXG4gICAgICAgIGVsc2UgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IC0xKSB0aGlzLnNwaW5fbGVmdCgpO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5ub2RlLmFuZ2xlICE9IDApIHRoaXMubm9kZS5hbmdsZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS1zY29yZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLnNjb3JlID0gKE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgPiB0aGlzLnNjb3JlKSA/IE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgOiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuU2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBzcGluX3JpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IDEyO1xyXG4gICAgfVxyXG4gICAgc3Bpbl9sZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlICYmICF0aGlzLmRpcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25fZmxvb3IpIHRoaXMuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnApe1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhdXNlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuZSAmJiB0aGlzLmJhbmFuYSA+IDAgKXsvLyBwdXQgYmFuYW5hICMjXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wdXRfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB2YXIgYmFuYW5hX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFuYW5hX1ByZWZhYnMpO1xyXG4gICAgICAgICAgICBiYW5hbmFfcHJlLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgYmFuYW5hX3ByZS55ID0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdFwiKS5hZGRDaGlsZChiYW5hbmFfcHJlKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5hbmEtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfYmFuYW5hKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkudyAgJiYgdGhpcy5sZWdvID4gMCl7IC8vICBwdXQgbGVnbyAjI1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHV0X2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdmFyIGxlZ29fcHJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZWdvX1ByZWZhYnMpO1xyXG4gICAgICAgICAgICBsZWdvX3ByZS54ID0gdGhpcy5ub2RlLng7XHJcbiAgICAgICAgICAgIGxlZ29fcHJlLnkgPSB0aGlzLm5vZGUueS0xO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3RcIikuYWRkQ2hpbGQobGVnb19wcmUpO1xyXG4gICAgICAgICAgICB0aGlzLmxlZ28tLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfbGVnbygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uS2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wKCl7ICAgIFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5ZXJfanVtcCwgZmFsc2UpOyBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCA2MDApO1xyXG4gICAgICAgIHRoaXMuZmx5X3N0YXRlID0gMTtcclxuICAgICAgICBpZighdGhpcy5kZWJ1Z19tb2RlKSB0aGlzLm9uX2Zsb29yID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmV2X2RpciArIFwiZmx5IHN0YXRlOiBcIiArIHRoaXMuZmx5X3N0YXRlKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9jb2luKCl7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLmNvaW5fcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvaW4udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9iYW5hbmEoKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMuYnViYmxlX2JhbmFuYS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuYmFuYW5hLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfbGVnbygpeyAgLy8gQEAgXHJcbiAgICAgICB0aGlzLmJ1YmJsZV9sZWdvLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5sZWdvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sharp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1779RvYYhKTLIdabDWRppQ', 'sharp');
// scripts/sharp.ts

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
exports.sharp = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var sharp = /** @class */ (function (_super) {
    __extends(sharp, _super);
    function sharp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sharp.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    sharp.prototype.start = function () {
        if (this.node.name == 'sharp1') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)), cc.delayTime(0.5), cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(0.5)));
            this.node.runAction(action);
        }
        else if (this.node.name == 'sharp2') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)), cc.delayTime(1), cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(1)));
            this.node.runAction(action);
        }
        else if (this.node.name == 'sharp3') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)), cc.delayTime(1.5), cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(1.5)));
            this.node.runAction(action);
        }
        else if (this.node.name == 'sharp4') {
            var action = cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -48)), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 48)), cc.delayTime(2)));
            this.node.runAction(action);
        }
    };
    sharp = __decorate([
        ccclass
    ], sharp);
    return sharp;
}(cc.Component));
exports.sharp = sharp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2hhcnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJCLHlCQUFZO0lBQXZDOztJQXVCQSxDQUFDO0lBcEJHLHNCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBQ0QscUJBQUssR0FBTDtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6SSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjthQUFNLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO0lBRUwsQ0FBQztJQXJCUSxLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBdUJqQjtJQUFELFlBQUM7Q0F2QkQsQUF1QkMsQ0F2QjBCLEVBQUUsQ0FBQyxTQUFTLEdBdUJ0QztBQXZCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIHNoYXJwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gJ3NoYXJwMScpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLCBjYy52MigwLCAtNDgpKSwgY2MuZGVsYXlUaW1lKDAuNSksY2MubW92ZUJ5KDEsIGNjLnYyKDAsIDQ4KSksIGNjLmRlbGF5VGltZSgwLjUpKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnAyJykge1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDEsIGNjLnYyKDAsIC00OCkpLCBjYy5kZWxheVRpbWUoMSksY2MubW92ZUJ5KDEsIGNjLnYyKDAsIDQ4KSksIGNjLmRlbGF5VGltZSgxKSkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gJ3NoYXJwMycpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLCBjYy52MigwLCAtNDgpKSxjYy5kZWxheVRpbWUoMS41KSwgY2MubW92ZUJ5KDEsIGNjLnYyKDAsIDQ4KSksIGNjLmRlbGF5VGltZSgxLjUpKSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnA0Jykge1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDEsIGNjLnYyKDAsIC00OCkpLGNjLmRlbGF5VGltZSgyKSwgY2MubW92ZUJ5KDEsIGNjLnYyKDAsIDQ4KSksIGNjLmRlbGF5VGltZSgyKSkpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/searchlight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '624693b42NGNrmPyczxPfy+', 'searchlight');
// scripts/searchlight.ts

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
exports.searchlight = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var searchlight = /** @class */ (function (_super) {
    __extends(searchlight, _super);
    function searchlight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchlight_speed = 70;
        _this.range = 50;
        _this.spark = null;
        _this.character = null;
        _this.eye_pos = null;
        _this.lightbeam = null;
        _this.beambottom = null;
        _this.dir = 1;
        _this.leftbound = 0;
        _this.rightbound = 0;
        _this.lockon = false;
        // LIFE-CYCLE CALLBACKS:
        _this.physicManager = null;
        return _this;
        // wander(){
        //     cc.tween(this.node).repeatForever(
        //         cc.tween(this.node)
        //         .by(1, {x: this.node.position.x-100})  
        //         .by(1, {x: this.node.position.x+100})
        //     ).start();
        // }
    }
    searchlight.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.character = cc.find('Canvas/root/player');
        // this.wander();
    };
    searchlight.prototype.start = function () {
        console.log("enemy init with range: " + this.range + "  at " + this.node.x, this.node.y);
        //this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.searchlight_speed,0);
        this.leftbound = this.node.x - this.range;
        this.rightbound = this.node.x + this.range;
    };
    searchlight.prototype.update = function (dt) {
        // console.log("alert level: " + this.lightbeam.getComponent('light').alert_level);
        if (this.lightbeam.getComponent('light').alert_level == 0) {
            this.lockon = false;
            console.log("no target");
            this.node.x += this.searchlight_speed * dt * this.dir;
            // this.lightbeam.x += this.searchlight_speed * dt * this.dir / (2 * this.range/40);
            this.lightbeam.x = this.node.x;
            this.lightbeam.angle += this.dir * 0.2 * this.range / 50;
            if (this.node.x <= this.leftbound)
                this.dir = 1;
            else if (this.node.x >= this.rightbound)
                this.dir = -1;
            if (this.lightbeam.angle > 30)
                this.lightbeam.angle = 30;
            if (this.lightbeam.angle < -30)
                this.lightbeam.angle = -30;
        }
        else {
            console.log("tracking");
            var shift_dir = 0;
            if (this.beambottom.x > this.character.x && this.node.x < this.character.x)
                shift_dir = -1;
            else if (this.beambottom.x < this.character.x && this.node.x > this.character.x)
                shift_dir = 1;
            else if (this.beambottom.x < this.character.x && this.node.x < this.character.x)
                shift_dir = 1;
            else if (this.beambottom.x > this.character.x && this.node.x > this.character.x)
                shift_dir = -1;
            this.node.x += 3 * this.searchlight_speed * dt * shift_dir;
            this.lightbeam.x = this.node.x;
            console.log("player movement [dir, prev_dir]: " + this.character.getComponent('player').dir, this.character.getComponent('player').prev_dir);
            // if(this.lightbeam.getComponent('light').alert_level == 1) shift_dir = (this.character.getComponent('player').dir)? this.character.getComponent('player').prev_dir : this.character.getComponent('player').prev_dir*-1;
            // else shift_dir = this.character.getComponent('player').dir;
            this.lightbeam.angle += 5 * dt * shift_dir;
        }
        this.eye_pos.angle = this.lightbeam.angle;
    };
    __decorate([
        property()
    ], searchlight.prototype, "range", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], searchlight.prototype, "spark", void 0);
    __decorate([
        property(cc.Node)
    ], searchlight.prototype, "eye_pos", void 0);
    __decorate([
        property(cc.Node)
    ], searchlight.prototype, "lightbeam", void 0);
    __decorate([
        property(cc.Node)
    ], searchlight.prototype, "beambottom", void 0);
    searchlight = __decorate([
        ccclass
    ], searchlight);
    return searchlight;
}(cc.Component));
exports.searchlight = searchlight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VhcmNobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBNkVDO1FBM0VXLHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUV2QyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLFdBQUssR0FBdUIsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHbEMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5CLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHdCQUF3QjtRQUNoQixtQkFBYSxHQUFzQixJQUFJLENBQUM7O1FBNkNoRCxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLDhCQUE4QjtRQUM5QixrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELGlCQUFpQjtRQUVqQixJQUFJO0lBQ1IsQ0FBQztJQXBERyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FB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WSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBzZWFyY2hsaWdodCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHNlYXJjaGxpZ2h0X3NwZWVkOiBudW1iZXIgPSA3MDtcbiAgICBAcHJvcGVydHkoKVxuICAgIHJhbmdlOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcbiAgICBzcGFyayA6IGNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcblxuICAgIHByaXZhdGUgY2hhcmFjdGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGV5ZV9wb3MgOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaWdodGJlYW0gOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZWFtYm90dG9tOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbGVmdGJvdW5kOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcmlnaHRib3VuZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgbG9ja29uOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpO1xuICAgICAgICAvLyB0aGlzLndhbmRlcigpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmVteSBpbml0IHdpdGggcmFuZ2U6IFwiICsgdGhpcy5yYW5nZSArIFwiICBhdCBcIiArIHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XG4gICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIodGhpcy5zZWFyY2hsaWdodF9zcGVlZCwwKTtcbiAgICAgICAgdGhpcy5sZWZ0Ym91bmQgPSB0aGlzLm5vZGUueCAtIHRoaXMucmFuZ2U7XG4gICAgICAgIHRoaXMucmlnaHRib3VuZCA9IHRoaXMubm9kZS54ICsgdGhpcy5yYW5nZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWxlcnQgbGV2ZWw6IFwiICsgdGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsKTtcbiAgICAgICAgaWYodGhpcy5saWdodGJlYW0uZ2V0Q29tcG9uZW50KCdsaWdodCcpLmFsZXJ0X2xldmVsID09IDApe1xuICAgICAgICAgICAgdGhpcy5sb2Nrb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gdGFyZ2V0XCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogdGhpcy5kaXI7XG4gICAgICAgICAgICAvLyB0aGlzLmxpZ2h0YmVhbS54ICs9IHRoaXMuc2VhcmNobGlnaHRfc3BlZWQgKiBkdCAqIHRoaXMuZGlyIC8gKDIgKiB0aGlzLnJhbmdlLzQwKTtcbiAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLnggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgICAgIHRoaXMubGlnaHRiZWFtLmFuZ2xlICs9IHRoaXMuZGlyICogMC4yICogdGhpcy5yYW5nZS81MDtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54IDw9IHRoaXMubGVmdGJvdW5kKSB0aGlzLmRpciA9IDE7XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54ID49IHRoaXMucmlnaHRib3VuZCkgdGhpcy5kaXIgPSAtMTtcblxuICAgICAgICAgICAgaWYodGhpcy5saWdodGJlYW0uYW5nbGUgPiAzMCkgdGhpcy5saWdodGJlYW0uYW5nbGUgPSAzMDtcbiAgICAgICAgICAgIGlmKHRoaXMubGlnaHRiZWFtLmFuZ2xlIDwgLTMwKSB0aGlzLmxpZ2h0YmVhbS5hbmdsZSA9IC0zMDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYWNraW5nXCIpO1xuICAgICAgICAgICAgdmFyIHNoaWZ0X2RpciA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLmJlYW1ib3R0b20ueCA+IHRoaXMuY2hhcmFjdGVyLnggJiYgdGhpcy5ub2RlLnggPCB0aGlzLmNoYXJhY3Rlci54KSBzaGlmdF9kaXIgPSAtMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5iZWFtYm90dG9tLnggPCB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54ID4gdGhpcy5jaGFyYWN0ZXIueCkgc2hpZnRfZGlyID0gMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5iZWFtYm90dG9tLnggPCB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54IDwgdGhpcy5jaGFyYWN0ZXIueCkgc2hpZnRfZGlyID0gMTtcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5iZWFtYm90dG9tLnggPiB0aGlzLmNoYXJhY3Rlci54ICYmIHRoaXMubm9kZS54ID4gdGhpcy5jaGFyYWN0ZXIueCkgc2hpZnRfZGlyID0gLTE7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSAzICogdGhpcy5zZWFyY2hsaWdodF9zcGVlZCAqIGR0ICogc2hpZnRfZGlyO1xuICAgICAgICAgICAgdGhpcy5saWdodGJlYW0ueCA9IHRoaXMubm9kZS54O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgbW92ZW1lbnQgW2RpciwgcHJldl9kaXJdOiBcIiArIHRoaXMuY2hhcmFjdGVyLmdldENvbXBvbmVudCgncGxheWVyJykuZGlyLCB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLnByZXZfZGlyKTtcbiAgICAgICAgICAgIC8vIGlmKHRoaXMubGlnaHRiZWFtLmdldENvbXBvbmVudCgnbGlnaHQnKS5hbGVydF9sZXZlbCA9PSAxKSBzaGlmdF9kaXIgPSAodGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5kaXIpPyB0aGlzLmNoYXJhY3Rlci5nZXRDb21wb25lbnQoJ3BsYXllcicpLnByZXZfZGlyIDogdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5wcmV2X2RpciotMTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2hpZnRfZGlyID0gdGhpcy5jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5kaXI7XG4gICAgICAgICAgICB0aGlzLmxpZ2h0YmVhbS5hbmdsZSArPSA1ICogZHQgKiBzaGlmdF9kaXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leWVfcG9zLmFuZ2xlID0gdGhpcy5saWdodGJlYW0uYW5nbGU7XG4gICAgfVxuICAgIC8vIHdhbmRlcigpe1xuICAgIC8vICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgLy8gICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgLy8gICAgICAgICAuYnkoMSwge3g6IHRoaXMubm9kZS5wb3NpdGlvbi54LTEwMH0pICBcbiAgICAvLyAgICAgICAgIC5ieSgxLCB7eDogdGhpcy5ub2RlLnBvc2l0aW9uLngrMTAwfSlcbiAgICAvLyAgICAgKS5zdGFydCgpO1xuICAgICAgICBcbiAgICAvLyB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
        _this.die_audio = null;
        _this.get_powerup_bubble = null;
        _this.sharp_knife = null;
        _this.shooted = null;
        _this.multi_back_music = null; // @A@
        _this.data_point = null;
        _this.signal_point = null;
        _this.mute_point = null;
        _this.debug_mode = false;
        _this.hidden = false;
        _this.noisy = 0;
        _this.unhide = false;
        // private ACK: number = 5;
        _this.recv_msg = 0;
        _this.data = 0;
        _this.mute = 0;
        _this.in_hiding = 0;
        _this.signal = 0;
        _this.on_boost = 0;
        _this.sec_list = [];
        _this.dead = false;
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.invis = false;
        _this.chameleon = null;
        _this.id = null;
        _this.room = null;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.hiatus = false;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#083e77", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
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
        // console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    };
    Player.prototype.onLoad = function () {
        cc.audioEngine.pauseMusic();
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
        // console.log(other.tag);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //// console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                // console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count * 3, 21));
                // console.log(rand);
                // console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            }
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            // console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")")
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y)
                    this.on_floor = true;
            }
            if (other.node.group == 'mound') {
                if (((other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x) || this.invis) && !this.noisy && !this.unhide) {
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
            this.coin++;
            this.update_coin();
            other.node.destroy();
        }
        else if (other.node.group == 'bubble') { // @@
            if (other.tag == 3) { // colorful bubble
                cc.audioEngine.playEffect(this.get_powerup_bubble, false);
                this.powerup++;
                this.update_powerup();
                other.node.destroy();
            }
            //losy
            else if (other.tag == 4) { // bubble mute 
                //  cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.mute++;
                this.update_mute();
                other.node.destroy();
            }
            else if (other.tag == 5) { // bubble signal
                // cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.signal++;
                this.update_signal();
                other.node.destroy();
                other.node.destroy();
            }
            else if (other.tag == 6) { // colorful data
                //  cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.data++;
                this.update_data();
                other.node.destroy();
            }
        }
        else if (other.node.name == 'missile') {
            cc.audioEngine.playEffect(this.shooted, false);
            // diee
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.loser();
        }
        else if ((other.node.name[0] == 's' && other.node.name[1] == 'h') || other.node.name == 'spider') {
            if (other.node.name[0] == 's') {
                cc.audioEngine.playEffect(this.sharp_knife, false);
            }
            // diee
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.loser();
        }
    };
    Player.prototype.die_particle = function () {
        cc.audioEngine.playEffect(this.die_audio, false);
        this.node.getChildByName('eye').active = false;
        var explode = this.node.getChildByName("star_explode");
        explode.active = true;
        explode.getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        this.node.getChildByName('color').active = false;
    };
    Player.prototype.loser = function () {
        var _this = this;
        this.dead = true;
        if (this.id == 'creator') {
            // self is creator
            firebase.database().ref('in_game/' + this.room + '/res/creator_res').set(this.score, function () {
                firebase.database().ref('in_game/' + _this.room + '/joiner').set(-100, function () {
                    _this.hiatus = true;
                    _this.check_mail();
                });
            });
        }
        else {
            // self is joiner
            firebase.database().ref('in_game/' + this.room + '/res/joiner_res').set(this.score, function () {
                firebase.database().ref('in_game/' + _this.room + '/creator').set(-100, function () {
                    _this.hiatus = true;
                    _this.check_mail();
                });
            });
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
            // if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
            // }
        }
    };
    Player.prototype.start = function () {
        var _id = parseInt(cc.sys.localStorage.getItem('id'));
        this.room = cc.sys.localStorage.getItem('room');
        this.coin = cc.sys.localStorage.getItem("coins");
        this.mute = cc.sys.localStorage.getItem("mute");
        this.signal = cc.sys.localStorage.getItem("signal");
        this.powerup = cc.sys.localStorage.getItem("powerup");
        this.data = 5;
        this.update_coin();
        this.update_data();
        this.update_mute();
        this.update_signal();
        this.update_powerup();
        this.playBGM();
        if (_id == 1)
            this.id = 'creator';
        else
            this.id = 'joiner';
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec10, this.sec11, this.sec12, this.sec13, this.sec17, this.sec18, this.sec19];
        this.score = 0;
        console.log("joining as " + this.id, this.room);
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        //-------------------------------------------------
        this.check_mail();
    };
    Player.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.multi_back_music, true);
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
            this.loser();
        }
        this.camera_track();
        if (!this.dead)
            this.node.x += this.dir * 250 * dt;
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
        if (!this.hiatus) {
            var ref = firebase.database().ref('in_game/' + this.room + '/' + this.id);
            ref.once('value', function (snapshot) {
                var rd = parseInt(snapshot.val());
                console.log("read message value:" + rd);
                if (rd < -50) {
                    console.log("opponent has died, log scores");
                    firebase.database().ref('in_game/' + _this.room + '/res').once('value', function (snap) {
                        var self_score = _this.score;
                        var other_score = 0;
                        console.log(_this.id + " logging scores");
                        firebase.database().ref('in_game/' + _this.room + '/res/' + _this.id + '_res').set(_this.score, function () {
                            if (!snap.child('joiner_res').exists() || !snap.child('creator_res').exists())
                                _this.check_mail();
                            if (_this.id == 'creator')
                                other_score = parseInt(snap.child('joiner_res').val());
                            else
                                other_score = parseInt(snap.child('creator_res').val());
                            cc.sys.localStorage.setItem('multi_self', self_score);
                            cc.sys.localStorage.setItem('multi_other', other_score);
                            console.log("immediate values: " + self_score, other_score);
                            console.log("stored values: " + cc.sys.localStorage.getItem('multi_self'), cc.sys.localStorage.getItem('multi_other'));
                            cc.sys.localStorage.setItem("coins", _this.coin);
                            cc.sys.localStorage.setItem("mute", _this.mute);
                            cc.sys.localStorage.setItem("signal", _this.signal);
                            if (self_score >= other_score) {
                                var explode = _this.node.getChildByName("star_explode");
                                explode.active = true;
                                explode.getComponent(cc.ParticleSystem).startColor = cc.color(0, 0, 0);
                                explode.getComponent(cc.ParticleSystem).endColor = cc.color(229, 229, 22);
                                explode.getComponent(cc.ParticleSystem).endColorVar = _this.Color.node.color;
                                _this.scheduleOnce(function () {
                                    cc.director.loadScene('multi_win');
                                }, 0.3);
                            }
                            else {
                                _this.die_particle();
                                _this.scheduleOnce(function () {
                                    cc.director.loadScene('multi_lose');
                                }, 0.3);
                            }
                        });
                    });
                }
                else if (rd > 0) {
                    console.log("received message in game");
                    ref.set((rd - 1), function () {
                        _this.check_mail();
                    });
                    if (!_this.in_hiding) {
                        _this.recv_msg++;
                        console.log("messages left now " + _this.recv_msg);
                        cc.audioEngine.playEffect(_this.notif, false);
                        _this.Color.node.color = new cc.Color(255, 255, 255);
                        _this.unhide = true;
                        _this.hidden = false;
                        _this.scheduleOnce(function () {
                            _this.recv_msg--;
                            console.log("visible time up, messages left: " + _this.recv_msg);
                            if (!_this.recv_msg) {
                                _this.unhide = false;
                                var color_str = _this.color_list[_this.base + _this.color];
                                var color = new cc.Color(255, 255, 255);
                                _this.Color.node.color = color.fromHEX(color_str);
                            }
                        }, 3);
                    }
                }
                else
                    _this.check_mail();
            });
        }
        else {
            if (this.id == 'creator') {
                firebase.database().ref('in_game/' + this.room + '/res/joiner_res').once('value', function (snapshot) {
                    if (snapshot.exists()) {
                        var self_score = _this.score;
                        var other_score = parseInt(snapshot.val());
                        firebase.database().ref('in_game/' + _this.room).remove();
                        cc.sys.localStorage.setItem('multi_self', self_score);
                        cc.sys.localStorage.setItem('multi_other', other_score);
                        console.log("immediate values: " + self_score, other_score);
                        console.log("stored values: " + cc.sys.localStorage.getItem('multi_self'), cc.sys.localStorage.getItem('multi_other'));
                        cc.sys.localStorage.setItem("coins", _this.coin);
                        cc.sys.localStorage.setItem("mute", _this.mute);
                        cc.sys.localStorage.setItem("signal", _this.signal);
                        if (self_score >= other_score)
                            cc.director.loadScene('multi_win');
                        else
                            cc.director.loadScene('multi_lose');
                    }
                    else
                        _this.check_mail();
                });
            }
            else {
                firebase.database().ref('in_game/' + this.room + '/res/creator_res').once('value', function (snapshot) {
                    if (snapshot.exists()) {
                        firebase.database().ref('in_game/' + _this.room).remove();
                        var self_score = _this.score;
                        var other_score = parseInt(snapshot.val());
                        firebase.database().ref('in_game/' + _this.room).remove();
                        cc.sys.localStorage.setItem('multi_self', self_score);
                        cc.sys.localStorage.setItem('multi_other', other_score);
                        console.log("immediate values: " + self_score, other_score);
                        console.log("stored values: " + cc.sys.localStorage.getItem('multi_self'), cc.sys.localStorage.getItem('multi_other'));
                        cc.sys.localStorage.setItem("coins", _this.coin);
                        cc.sys.localStorage.setItem("mute", _this.mute);
                        cc.sys.localStorage.setItem("signal", _this.signal);
                        if (self_score >= other_score)
                            cc.director.loadScene('multi_win');
                        else
                            cc.director.loadScene('multi_lose');
                    }
                    else
                        _this.check_mail();
                });
            }
        }
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
        if (event.keyCode == cc.macro.KEY.enter && this.data > 0) {
            this.Color.node.color = new cc.Color(255, 255, 255);
            this.data--;
            this.update_data();
            // if id = 1 write to joiner, else write to creator
            if (this.id == 'creator') {
                // self is creator
                firebase.database().ref('in_game/' + this.room + '/joiner').once('value', function (snapshot) {
                    var ping = parseInt(snapshot.val());
                    firebase.database().ref('in_game/' + _this.room + '/joiner').set(ping + 1);
                });
            }
            else {
                // self is joiner
                firebase.database().ref('in_game/' + this.room + '/creator').once('value', function (snapshot) {
                    var ping = parseInt(snapshot.val());
                    firebase.database().ref('in_game/' + _this.room + '/creator').set(ping + 1);
                });
            }
            this.noisy++;
            this.hidden = false;
            var delay = 1 + Math.min(1.5, this.section_count / 8);
            if (this.on_boost)
                delay *= 0.3;
            this.scheduleOnce(function () {
                _this.noisy--;
                if (!_this.noisy) {
                    var color_str = _this.color_list[_this.base + _this.color];
                    var color = new cc.Color(255, 255, 255);
                    _this.Color.node.color = color.fromHEX(color_str);
                }
            }, delay);
        }
        if ((event.keyCode == cc.macro.KEY.r) && this.powerup > 0) { // ##
            // use color powerup
            var cl = this.Color.node.color;
            this.invis = true;
            this.powerup--;
            this.update_powerup();
            this.scheduleOnce(function () {
                _this.Color.node.color = cl;
                _this.invis = false;
            }, 5);
        }
        if ((event.keyCode == cc.macro.KEY.s) && this.signal > 0) { // ##
            // use bubble signal
            this.on_boost++;
            this.signal_point.color = cc.color(26, 219, 34);
            this.signal--;
            this.update_signal();
            this.scheduleOnce(function () {
                _this.on_boost--;
                if (!_this.on_boost)
                    _this.signal_point.color = cc.color(255, 255, 255);
            }, 5);
        }
        if ((event.keyCode == cc.macro.KEY.f) && this.mute > 0) { // ##
            // use bubble mute
            this.in_hiding++;
            this.mute_point.color = cc.color(26, 219, 34);
            this.mute--;
            this.update_mute();
            this.scheduleOnce(function () {
                _this.in_hiding--;
                if (!_this.in_hiding)
                    _this.mute_point.color = cc.color(255, 255, 255);
            }, 5);
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
    Player.prototype.update_coin = function () {
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    Player.prototype.update_powerup = function () {
        this.bubble_powerup.getComponent(cc.Label).string = this.powerup.toString();
    };
    //losy
    Player.prototype.update_mute = function () {
        this.mute_point.getComponent(cc.Label).string = this.mute.toString();
    };
    Player.prototype.update_signal = function () {
        this.signal_point.getComponent(cc.Label).string = this.signal.toString();
    };
    Player.prototype.update_data = function () {
        this.data_point.getComponent(cc.Label).string = this.data.toString();
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
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "die_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_powerup_bubble", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "sharp_knife", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "shooted", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "multi_back_music", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "data_point", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "signal_point", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "mute_point", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyX211bHRpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXlsQkM7UUF0bEJHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFpQixJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFrQixJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixlQUFTLEdBQWtCLElBQUksQ0FBQztRQUVoQyx3QkFBa0IsR0FBa0IsSUFBSSxDQUFDO1FBRXpDLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQWtCLElBQUksQ0FBQztRQUU5QixzQkFBZ0IsR0FBa0IsSUFBSSxDQUFDLENBQUEsTUFBTTtRQUc3QyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ2hCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUNoQywyQkFBMkI7UUFDbkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBUSxDQUFDLENBQUM7UUFDTixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFlBQU0sR0FBUSxDQUFDLENBQUM7UUFDUixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxVQUFJLEdBQVksS0FBSyxDQUFDO1FBRXRCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUUsZ0RBQWdEO1FBQ3hFLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFDekIsUUFBRSxHQUFXLElBQUksQ0FBQztRQUNsQixVQUFJLEdBQVcsSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDLENBQU0sd0dBQXdHO1FBRWhJLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDVixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhDLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsNEJBQTRCO1FBQzVCLGdCQUFVLEdBQVEsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTO1lBQ3ZGLEVBQUUsRUFBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFLFNBQVM7WUFDdEUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUztZQUN6RSxFQUFFLEVBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTO1lBQzFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFBOztJQXdkL0UsQ0FBQztJQXRkRyx3QkFBd0I7SUFFeEIseUJBQVEsR0FBUjtRQUNJLCtDQUErQztRQUMvQyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsMkRBQTJEO1FBQzNELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsbURBQW1EO0lBQ3ZELENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLDBCQUEwQjtRQUMxQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsbUZBQW1GO1FBQ25GLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDakIsK0JBQStCO1lBQy9CLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLEVBQUM7Z0JBQ3RDLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxxQkFBcUI7Z0JBQ3JCLDhEQUE4RDtnQkFDOUQsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzNDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2QztTQUNKO2FBQUssSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFDO1lBQ2pFLHdFQUF3RTtZQUN4RSxJQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBQztnQkFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQztvQkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0RDtZQUVELElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO2dCQUM1QixJQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2hJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFHLElBQUksQ0FBQyxLQUFLO3dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNGLDZCQUE2QjtpQkFDaEM7YUFDSjtTQUNKO2FBQUssSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUMsRUFBRSxNQUFNO1lBQ3hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7YUFBSyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBQyxFQUFFLEtBQUs7WUFDekMsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQyxFQUFFLGtCQUFrQjtnQkFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTTtpQkFDRCxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLEVBQUUsZUFBZTtnQkFDckMsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hCO2lCQUFLLElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUMsRUFBRSxnQkFBZ0I7Z0JBQ2xDLDBEQUEwRDtnQkFDMUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM1QjtpQkFBSyxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLEVBQUUsZ0JBQWdCO2dCQUN0QywyREFBMkQ7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDeEI7U0FDUjthQUFLLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFDO1lBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsT0FBTztZQUNQLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjthQUFLLElBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO1lBQ3pGLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDO2dCQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTztZQUNQLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDRCw2QkFBWSxHQUFaO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4RSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUNELHNCQUFLLEdBQUw7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBRyxJQUFJLENBQUMsRUFBRSxJQUFJLFNBQVMsRUFBQztZQUNwQixrQkFBa0I7WUFDbEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNqRixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDbEUsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQUk7WUFDRCxpQkFBaUI7WUFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoRixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDbkUsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELDZCQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDN0IsdUZBQXVGO1FBQ3ZGLGtFQUFrRTtRQUNsRSxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUNuQyw0RUFBNEU7WUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJO1NBQ1A7SUFDTCxDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBRyxHQUFHLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDOztZQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkcsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0Qsd0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQzFCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNaLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQzlCO2lCQUFJO2dCQUNELElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEQ7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDO1lBQ25CLE9BQU87WUFDUCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEQsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQUssSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ2hCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzFELCtGQUErRjtRQUMvRixJQUFHLElBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLEdBQUMsR0FBRyxDQUFDOztZQUN2RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUM7UUFDeEYscUNBQXFDO1FBQ3JDLElBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzVDLElBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDakQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ2hELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pFLDhDQUE4QztJQUNsRCxDQUFDO0lBQ0QsMkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUV2QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMkJBQVUsR0FBVjtRQUFBLGlCQXlHQztRQXhHRyxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUxRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsSUFBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUM7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO29CQUM3QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxJQUFJO3dCQUN4RSxJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN6QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFOzRCQUN6RixJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFO2dDQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFFaEcsSUFBRyxLQUFJLENBQUMsRUFBRSxJQUFJLFNBQVM7Z0NBQUUsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7O2dDQUMzRSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs0QkFDN0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzs0QkFDdEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzs0QkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7NEJBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzRCQUN2SCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUNuRCxJQUFHLFVBQVUsSUFBSSxXQUFXLEVBQUM7Z0NBQ3pCLElBQUksT0FBTyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dDQUNyRCxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDdEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDdkUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQ0FDMUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQ0FDNUUsS0FBSSxDQUFDLFlBQVksQ0FBQztvQ0FDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzZCQUNYO2lDQUFJO2dDQUNELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQ0FDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQztvQ0FDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQ0FDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzZCQUNYO3dCQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUFLLElBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7b0JBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ1osS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBQzt3QkFDZixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNsRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xELEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQzs0QkFDZCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7NEJBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNoRSxJQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBQztnQ0FDZCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQ0FDcEIsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ3RDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzZCQUNwRDt3QkFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ1Q7aUJBQ0o7O29CQUFLLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQUk7WUFDRCxJQUFHLElBQUksQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7b0JBQ3ZGLElBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFDO3dCQUNqQixJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQzNDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDekQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFDdEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN2SCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNuRCxJQUFHLFVBQVUsSUFBSSxXQUFXOzRCQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs0QkFDNUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzVDOzt3QkFBSyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQUk7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxRQUFRO29CQUN4RixJQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQzt3QkFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUN6RCxJQUFJLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQzNDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDekQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFDdEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN2SCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNuRCxJQUFHLFVBQVUsSUFBSSxXQUFXOzRCQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs0QkFDNUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzVDOzt3QkFBSyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2FBQ047U0FDSjtJQUNMLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsS0FBSztRQUFmLGlCQWlGQztRQS9FRyxJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDO1lBQ25DLElBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzVCO2FBQ0ksSUFBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM1QjtRQUdELElBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixtREFBbUQ7WUFDbkQsSUFBRyxJQUFJLENBQUMsRUFBRSxJQUFJLFNBQVMsRUFBQztnQkFDcEIsa0JBQWtCO2dCQUNsQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxRQUFRO29CQUMvRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3BDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUUsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBSTtnQkFDRCxpQkFBaUI7Z0JBQ2pCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVE7b0JBQ2hGLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDcEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBRyxJQUFJLENBQUMsUUFBUTtnQkFBRSxLQUFLLElBQUksR0FBRyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLElBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFDO29CQUNYLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hELElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDcEQ7WUFDTCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDYjtRQUNELElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFDLEVBQUUsS0FBSztZQUM1RCxvQkFBb0I7WUFDcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO1FBQ0QsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsRUFBRSxLQUFLO1lBQzNELG9CQUFvQjtZQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsSUFBRyxDQUFDLEtBQUksQ0FBQyxRQUFRO29CQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6RSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFDLEVBQUUsS0FBSztZQUN6RCxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUztvQkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7SUFHTCxDQUFDO0lBQ0Qsd0JBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDYixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMzQywrREFBK0Q7SUFDbkUsQ0FBQztJQUNELDRCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUNELCtCQUFjLEdBQWQ7UUFDRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQUNELE1BQU07SUFDTiw0QkFBVyxHQUFYO1FBRUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXpFLENBQUM7SUFDRCw4QkFBYSxHQUFiO1FBRUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFDRCw0QkFBVyxHQUFYO1FBRUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFybEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt5Q0FDSTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBSTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ1M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDa0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDVztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzJDQUNPO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ2dCO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBdEZuQixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBeWxCbEI7SUFBRCxhQUFDO0NBemxCRCxBQXlsQkMsQ0F6bEIyQixFQUFFLENBQUMsU0FBUyxHQXlsQnZDO0FBemxCWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwbGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzY6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTM6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTY6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMTk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjA6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY29yZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgQ29sb3I6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbm90aWY6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb2luX3BvaW50IDogY2MuTm9kZSA9IG51bGw7ICBcclxuICAgIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHBsYXllcl9qdW1wIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBnZXRfY29pbiA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidWJibGVfcG93ZXJ1cCA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIHBvd2VydXA6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZGllX2F1ZGlvIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBnZXRfcG93ZXJ1cF9idWJibGUgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNoYXJwX2tuaWZlIDogY2MuQXVkaW9DbGlwID0gbnVsbDsgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2hvb3RlZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbXVsdGlfYmFja19tdXNpYyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7Ly8gQEFAXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkYXRhX3BvaW50IDogY2MuTm9kZSA9IG51bGw7IFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaWduYWxfcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG11dGVfcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgXHJcblxyXG4gICAgZGVidWdfbW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG5vaXN5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB1bmhpZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIHByaXZhdGUgQUNLOiBudW1iZXIgPSA1O1xyXG4gICAgcHJpdmF0ZSByZWN2X21zZzogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IG51bWJlciA9IDA7XHJcbiAgICBtdXRlOm51bWJlcj0wO1xyXG4gICAgcHJpdmF0ZSBpbl9oaWRpbmc6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc2lnbmFsOm51bWJlcj0wO1xyXG4gICAgcHJpdmF0ZSBvbl9ib29zdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNlY19saXN0ID0gW107XHJcbiAgICBwcml2YXRlIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGRpcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcHJldl9kaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZseV9zdGF0ZTogbnVtYmVyID0gMDsgIC8vIDAgZm9yIG9uIGdyb3VuZCwgMSBmb3IgZmx5aW5nLCAtMSBmb3IgZmFsbGluZ1xyXG4gICAgcHJpdmF0ZSBvbl9mbG9vcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHN0aWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGludmlzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNoYW1lbGVvbjogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJvb206IHN0cmluZyA9IG51bGw7XHJcbiAgICBzZWN0aW9uX2NvdW50ID0gMDsgICAgICAvLyBvbiBjb250YWN0IHdpdGggbWFya2VyLCBpZiBzZWN0aW9uX2NvdW50ICogMTkyMCA8IHRoaXMubm9kZS54OiBpbml0IG5leHQgc2VjdGlvbiBhbmQgc2VjdGlvbl9jb3VudCArK1xyXG5cclxuICAgIHNjb3JlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBoaWF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb2xvcjogbnVtYmVyID0gMDtcclxuICAgIHN0cmlwOiBudW1iZXIgPSAwO1xyXG4gICAgYmFzZTogbnVtYmVyID0gMDtcclxuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcclxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXHJcbiAgICAxMzpcIiMxYzMxNDRcIiwgMTQ6IFwiIzU5NmY2MlwiLCAxNTogXCIjN2VhMTZiXCIsMTY6IFwiI2MzZDg5OFwiLDE3OiBcIiM3MDE2MWRcIixcclxuICAgIDE5IDpcIiMwODNlNzdcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcclxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXHJcbiAgICAzMSA6XCIjOGU5YWFmXCIsIDMyIDpcIiNjYmMwZDNcIiwgMzMgOlwiI2VmZDNkN1wiLCAzNCA6XCIjZmVlYWZhXCIsIDM1IDpcIiNkZWUyZmZcIiB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYmFzZSArICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSk7XHJcbiAgICAgICAgdmFyIGNvbG9yX3N0ciA9IHRoaXMuY29sb3JfbGlzdFt0aGlzLmJhc2UgKyB0aGlzLmNvbG9yXTtcclxuICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIudGFnKTtcclxuICAgICAgICB2YXIgdG91Y2ggPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWw7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaXQgbm9kZSB3aXRoIGNvbG9yIFwiICsgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQpO1xyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAxMDAwKXtcclxuICAgICAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhcImhpdCBtYXJrZXJcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID49IHRoaXMuc2VjdGlvbl9jb3VudCoxOTIwKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBuZXh0IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcclxuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5taW4oMit0aGlzLnNlY3Rpb25fY291bnQqMywgMjEpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJhbmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUbyBpbnN0YW50aWF0ZTogXCIgKyB0aGlzLnNlY19saXN0W3JhbmRdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfc2VjdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VjX2xpc3RbcmFuZF0pO1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnggPSAxOTIwICogdGhpcy5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBsaXN0LmFkZENoaWxkKG5leHRfc2VjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAgKyBcIiAoXCIgKyB0b3VjaC54ICsgXCIsIFwiICsgdG91Y2gueSArIFwiKVwiKVxyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSkgdGhpcy5vbl9mbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykge1xyXG4gICAgICAgICAgICAgICAgaWYoKChvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCA9PSB0aGlzLmNvbG9yICsgdGhpcy5iYXNlICYmIHRvdWNoLngpIHx8IHRoaXMuaW52aXMpICYmICF0aGlzLm5vaXN5ICYmICF0aGlzLnVuaGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW52aXMpIHRoaXMuY2hhbWVsZW9uID0gdGhpcy5jb2xvcl9saXN0W290aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2NvaW4nKXsgLy8gQEAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfY29pbiwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdGhpcy5jb2luKys7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2NvaW4oKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnYnViYmxlJyl7IC8vIEBAXHJcbiAgICAgICAgICAgIGlmKG90aGVyLnRhZyA9PSAzKXsgLy8gY29sb3JmdWwgYnViYmxlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2V0X3Bvd2VydXBfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlcnVwKytcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlX3Bvd2VydXAoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLy9sb3N5XHJcbiAgICAgICAgICAgICBlbHNlIGlmKG90aGVyLnRhZyA9PSA0KXsgLy8gYnViYmxlIG11dGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdldF9CX0xfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRlKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9tdXRlKCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDUpeyAvLyBidWJibGUgc2lnbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdldF9CX0xfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfc2lnbmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSA2KXsgLy8gY29sb3JmdWwgZGF0YVxyXG4gICAgICAgICAgICAgICAgLy8gIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfQl9MX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGErKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5uYW1lID09ICdtaXNzaWxlJyl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaG9vdGVkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGRpZWVcclxuICAgICAgICAgICAgLy8gZGVwbG95IHdoaXRlIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZXIoKTtcclxuICAgICAgICB9ZWxzZSBpZigob3RoZXIubm9kZS5uYW1lWzBdID09ICdzJyYmb3RoZXIubm9kZS5uYW1lWzFdID09ICdoJyl8fG90aGVyLm5vZGUubmFtZSA9PSAnc3BpZGVyJyl7XHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUubmFtZVswXSA9PSAncycpe1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNoYXJwX2tuaWZlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZGllZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMuZGllX3BhcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb3NlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpZV9wYXJ0aWNsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xyXG4gICAgICAgIGV4cGxvZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29sb3InKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGxvc2VyKCl7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmlkID09ICdjcmVhdG9yJyl7XHJcbiAgICAgICAgICAgIC8vIHNlbGYgaXMgY3JlYXRvclxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9yZXMvY3JlYXRvcl9yZXMnKS5zZXQodGhpcy5zY29yZSwgKCk9PntcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL2pvaW5lcicpLnNldCgtMTAwLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpYXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIHNlbGYgaXMgam9pbmVyXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL3Jlcy9qb2luZXJfcmVzJykuc2V0KHRoaXMuc2NvcmUsICgpPT57XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9jcmVhdG9yJykuc2V0KC0xMDAsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy9hIGJ1ZyBoYXBwZW5zIHdoZW4gdGhlIGNvbG9yIG9mIG1vdW5kIGlzIHNhbWUgYXMgdGhlIGNvbG9yIG9mIHBsYXllciwgbm90IHNvbHZlZCB5ZXQgXHJcbiAgICAgICAgLy8gZml4ZWQgd2l0aCBtb3VuZC4gcGxheWVyIHNob3VsZCBub3cgY2hlY2sgY29sbGlzaW9ucyB3aXRoIG1vdW5kXHJcbiAgICAgICAgaWYodGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55ICE9IDApe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYoIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykge1xyXG4gICAgICAgICAgICAvLyBpZihvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCA9PSB0aGlzLmNvbG9yICsgdGhpcy5iYXNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB2YXIgX2lkID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpKTtcclxuICAgICAgICB0aGlzLnJvb20gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jvb20nKTtcclxuICAgICAgICB0aGlzLmNvaW4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luc1wiKTtcclxuICAgICAgICB0aGlzLm11dGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXRlXCIpO1xyXG4gICAgICAgIHRoaXMuc2lnbmFsID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2lnbmFsXCIpO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvd2VydXBcIik7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gNTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9jb2luKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfZGF0YSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX211dGUoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9zaWduYWwoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9wb3dlcnVwKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgaWYoX2lkID09IDEpIHRoaXMuaWQgPSAnY3JlYXRvcic7XHJcbiAgICAgICAgZWxzZSB0aGlzLmlkID0gJ2pvaW5lcic7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjX2xpc3QgPSBbdGhpcy5zZWMwLCB0aGlzLnNlYzEsIHRoaXMuc2VjMiwgdGhpcy5zZWMzLCB0aGlzLnNlYzQsdGhpcy5zZWM1LHRoaXMuc2VjMTAsdGhpcy5zZWMxMSx0aGlzLnNlYzEyLHRoaXMuc2VjMTMsdGhpcy5zZWMxNyx0aGlzLnNlYzE4LHRoaXMuc2VjMTldO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiam9pbmluZyBhcyBcIiArIHRoaXMuaWQsIHRoaXMucm9vbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS1zcGFya2xlIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXI9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgIH1cclxuICAgIHBsYXlCR00oKXsgLy8gQEFAXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMubXVsdGlfYmFja19tdXNpYywgdHJ1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmludmlzICYmICF0aGlzLnVuaGlkZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhpZGRlbil7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbC5mcm9tSEVYKHRoaXMuY2hhbWVsZW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRseSBpbnZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubm9kZS55IDw9IC00MDApe1xyXG4gICAgICAgICAgICAvLyBkaWVlXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5sb3NlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbWVyYV90cmFjaygpO1xyXG4gICAgICAgIGlmKCF0aGlzLmRlYWQpIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyICogMjUwICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RpY2tcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLmRpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tc3BhcmtsZSBlbWlzc2lvbiByYXRlIGlzIDAgd2hlbiBkaWRudCBtb3ZlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZih0aGlzLmRpciE9MHx8ZHk+MTApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MTAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tcGxheWVyIHNwaW4tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gMSkgdGhpcy5zcGluX3JpZ2h0KCk7XHJcbiAgICAgICAgZWxzZSBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gLTEpIHRoaXMuc3Bpbl9sZWZ0KCk7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuYW5nbGUgIT0gMCkgdGhpcy5ub2RlLmFuZ2xlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLXNjb3JlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAoTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA+IHRoaXMuc2NvcmUpID8gTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA6IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5TY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcbiAgICBzcGluX3JpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IDEyO1xyXG4gICAgfVxyXG4gICAgc3Bpbl9sZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlICYmICF0aGlzLmRpcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tfbWFpbCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhpYXR1cyl7XHJcbiAgICAgICAgICAgIHZhciByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy8nICsgdGhpcy5pZCk7XHJcblxyXG4gICAgICAgICAgICByZWYub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZCA9IHBhcnNlSW50KHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhZCBtZXNzYWdlIHZhbHVlOlwiICsgcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYocmQgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3Bwb25lbnQgaGFzIGRpZWQsIGxvZyBzY29yZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzJykub25jZSgndmFsdWUnLCAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZl9zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdGhlcl9zY29yZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQgKyBcIiBsb2dnaW5nIHNjb3Jlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzLycgKyB0aGlzLmlkICsgJ19yZXMnKS5zZXQodGhpcy5zY29yZSwgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzbmFwLmNoaWxkKCdqb2luZXJfcmVzJykuZXhpc3RzKCkgfHwgIXNuYXAuY2hpbGQoJ2NyZWF0b3JfcmVzJykuZXhpc3RzKCkpIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaWQgPT0gJ2NyZWF0b3InKSBvdGhlcl9zY29yZSA9IHBhcnNlSW50KHNuYXAuY2hpbGQoJ2pvaW5lcl9yZXMnKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIG90aGVyX3Njb3JlID0gcGFyc2VJbnQoc25hcC5jaGlsZCgnY3JlYXRvcl9yZXMnKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX3NlbGYnLCBzZWxmX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVsdGlfb3RoZXInLCBvdGhlcl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImltbWVkaWF0ZSB2YWx1ZXM6IFwiICsgc2VsZl9zY29yZSwgb3RoZXJfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdG9yZWQgdmFsdWVzOiBcIiArIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVsdGlfc2VsZicpLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211bHRpX290aGVyJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgdGhpcy5jb2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11dGVcIiwgdGhpcy5tdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZ25hbFwiLCB0aGlzLnNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmX3Njb3JlID49IG90aGVyX3Njb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwbG9kZT10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyX2V4cGxvZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yID0gY2MuY29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yID0gY2MuY29sb3IoMjI5LCAyMjksIDIyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXIgPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX3dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV9sb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgbWVzc2FnZSBpbiBnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZi5zZXQoKHJkLTEpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmluX2hpZGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdl9tc2crKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlcyBsZWZ0IG5vdyBcIiArIHRoaXMucmVjdl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubm90aWYsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3ZfbXNnLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpc2libGUgdGltZSB1cCwgbWVzc2FnZXMgbGVmdDogXCIgKyB0aGlzLnJlY3ZfbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnJlY3ZfbXNnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNlIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5pZCA9PSAnY3JlYXRvcicpe1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzL2pvaW5lcl9yZXMnKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihzbmFwc2hvdC5leGlzdHMoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmX3Njb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG90aGVyX3Njb3JlID0gcGFyc2VJbnQoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9zZWxmJywgc2VsZl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVsdGlfb3RoZXInLCBvdGhlcl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW1tZWRpYXRlIHZhbHVlczogXCIgKyBzZWxmX3Njb3JlLCBvdGhlcl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmVkIHZhbHVlczogXCIgKyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211bHRpX3NlbGYnKSwgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9vdGhlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgdGhpcy5jb2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXV0ZVwiLCB0aGlzLm11dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWduYWxcIiwgdGhpcy5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmX3Njb3JlID49IG90aGVyX3Njb3JlKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX3dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGlfbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzL2NyZWF0b3JfcmVzJykub25jZSgndmFsdWUnLCAoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGZfc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3RoZXJfc2NvcmUgPSBwYXJzZUludChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20pLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX3NlbGYnLCBzZWxmX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9vdGhlcicsIG90aGVyX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbW1lZGlhdGUgdmFsdWVzOiBcIiArIHNlbGZfc2NvcmUsIG90aGVyX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdG9yZWQgdmFsdWVzOiBcIiArIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVsdGlfc2VsZicpLCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211bHRpX290aGVyJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2luc1wiLCB0aGlzLmNvaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIHRoaXMubXV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpZ25hbFwiLCB0aGlzLnNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGZfc2NvcmUgPj0gb3RoZXJfc2NvcmUpIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGlfd2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV9sb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnNwYWNlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5vbl9mbG9vcikgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmxlZnQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJldl9kaXIgPSB0aGlzLmRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuZW50ZXIgJiYgdGhpcy5kYXRhID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9kYXRhKCk7XHJcbiAgICAgICAgICAgIC8vIGlmIGlkID0gMSB3cml0ZSB0byBqb2luZXIsIGVsc2Ugd3JpdGUgdG8gY3JlYXRvclxyXG4gICAgICAgICAgICBpZih0aGlzLmlkID09ICdjcmVhdG9yJyl7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmIGlzIGNyZWF0b3JcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL2pvaW5lcicpLm9uY2UoJ3ZhbHVlJywgKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwaW5nID0gcGFyc2VJbnQoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL2pvaW5lcicpLnNldChwaW5nKzEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZiBpcyBqb2luZXJcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL2NyZWF0b3InKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGluZyA9IHBhcnNlSW50KHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9jcmVhdG9yJykuc2V0KHBpbmcrMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vaXN5Kys7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBkZWxheSA9IDEgKyBNYXRoLm1pbigxLjUsIHRoaXMuc2VjdGlvbl9jb3VudC84KTtcclxuICAgICAgICAgICAgaWYodGhpcy5vbl9ib29zdCkgZGVsYXkgKj0gMC4zO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vaXN5LS07XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5ub2lzeSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX3N0ciA9IHRoaXMuY29sb3JfbGlzdFt0aGlzLmJhc2UgKyB0aGlzLmNvbG9yXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucikgJiYgdGhpcy5wb3dlcnVwID4gMCl7IC8vICMjXHJcbiAgICAgICAgICAgIC8vIHVzZSBjb2xvciBwb3dlcnVwXHJcbiAgICAgICAgICAgIHZhciBjbCA9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5pbnZpcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG93ZXJ1cC0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9wb3dlcnVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnMpICYmIHRoaXMuc2lnbmFsID4gMCl7IC8vICMjXHJcbiAgICAgICAgICAgIC8vIHVzZSBidWJibGUgc2lnbmFsXHJcbiAgICAgICAgICAgIHRoaXMub25fYm9vc3QrKztcclxuICAgICAgICAgICAgdGhpcy5zaWduYWxfcG9pbnQuY29sb3IgPSBjYy5jb2xvcigyNiwgMjE5LCAzNCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3NpZ25hbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbl9ib29zdC0tO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fYm9vc3QpIHRoaXMuc2lnbmFsX3BvaW50LmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIH0sIDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuZikgJiYgdGhpcy5tdXRlID4gMCl7IC8vICMjXHJcbiAgICAgICAgICAgIC8vIHVzZSBidWJibGUgbXV0ZVxyXG4gICAgICAgICAgICB0aGlzLmluX2hpZGluZysrO1xyXG4gICAgICAgICAgICB0aGlzLm11dGVfcG9pbnQuY29sb3IgPSBjYy5jb2xvcigyNiwgMjE5LCAzNCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZS0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9tdXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluX2hpZGluZy0tO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaW5faGlkaW5nKSB0aGlzLm11dGVfcG9pbnQuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgfSBcclxuXHJcblxyXG4gICAgfVxyXG4gICAgb25LZXlVcChldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGxheWVyX2p1bXAsIGZhbHNlKTsgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IDE7XHJcbiAgICAgICAgaWYoIXRoaXMuZGVidWdfbW9kZSkgdGhpcy5vbl9mbG9vciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJldl9kaXIgKyBcImZseSBzdGF0ZTogXCIgKyB0aGlzLmZseV9zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfY29pbigpeyAgLy8gQEAgXHJcbiAgICAgICAgdGhpcy5jb2luX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb2luLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfcG93ZXJ1cCgpeyAgLy8gQEAgXHJcbiAgICAgICB0aGlzLmJ1YmJsZV9wb3dlcnVwLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5wb3dlcnVwLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvL2xvc3lcclxuICAgIHVwZGF0ZV9tdXRlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm11dGVfcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm11dGUudG9TdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHVwZGF0ZV9zaWduYWwoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2lnbmFsX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zaWduYWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9kYXRhKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRhdGFfcG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmRhdGEudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/section_init.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f86b16xEJNGGqnIRrMSrSna', 'section_init');
// scripts/section_init.ts

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
exports.Section = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = 6;
        _this.strip = 1;
        _this.player_col = 0;
        _this.searchlight = null;
        _this.sharp = null;
        _this.sharp_down = null;
        _this.spider = null;
        _this.coin_pre = null;
        _this.lego_pre = null;
        _this.bubble_pre = null;
        _this.banana_pre = null;
        _this.data_pre = null;
        _this.signal_pre = null;
        _this.mute_pre = null;
        _this.lv = 0;
        return _this;
    }
    Section.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -500);
        this.lv = parseInt(this.node.name.replace('section', ''));
    };
    Section.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
    };
    Section.prototype.start = function () {
        var _this = this;
        this.node.anchorX = 0;
        this.node.anchorY = 0;
        var map = this.node.getComponent(cc.TiledMap);
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip; //每次更新的section 色票都要一樣
        this.base = 1 + 6 * this.strip;
        //console.log("base color gid: " + this.base);
        var body = this.node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        body.fixedRotation = true;
        var collider = this.node.addComponent(cc.PhysicsBoxCollider);
        collider.offset = cc.v2(960, 240);
        collider.size = cc.size(5, 1000);
        collider.sensor = true;
        collider.tag = 1000; // init next map on contact
        collider.apply();
        var sz = map.getTileSize();
        // console.log(sz);
        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        for (var i = 0; i < layerSz.width; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid == 1) {
                    FloorTile.gid = this.base;
                    // console.log("draw ground box for tile (" + i + ", " + j + ")");
                    FloorTile.node.group = "ground";
                    // console.log("created tile with " + FloorTile.node.group)
                    var body = FloorTile.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    body.fixedRotation = true;
                    var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset = cc.v2(sz.width / 2, sz.height / 2);
                    if (floor.getTiledTileAt(i, j - 1, true).gid)
                        collider.size = cc.size(47.6, 48);
                    else
                        collider.size = sz;
                    collider.apply();
                }
            }
        }
        // // console.log("tile init complete, marking mounds")
        // for(j = 7; j >= 0; j--){
        //     var FloorTile = floor.getTiledTileAt(layerSz.width-1, j, true);
        //     if(FloorTile.gid) FloorTile.node.group = "mound";
        // }
        // for(var i = 1; i < layerSz.width-1; i++){
        //     for(var j = 0; j < layerSz.height -1; j++){
        //         var FloorTile = floor.getTiledTileAt(i, j, true);
        //         if(FloorTile.gid != 0 && ((floor.getTiledTileAt(i+1, j, true).gid == 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0))){
        //             FloorTile.node.group = "mound";
        //             // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        //         }
        //     }
        // }
        // for(j = 8; j > 2; j--){
        //     var FloorTile = floor.getTiledTileAt(layerSz.width-1, j, true);
        //     if(FloorTile.gid){
        //         if(floor.getTiledTileAt(layerSz.width-1, j-1, true)) FloorTile.node.group = "mound";
        //         else FloorTile.node.group = "mound_top";
        //         // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        //     }
        // }
        // for(var i = 1; i < layerSz.width-1; i++){
        //     for(var j = 0; j < layerSz.height -1; j++){
        //         var FloorTile = floor.getTiledTileAt(i, j, true);
        //         if(FloorTile.gid != 0 && ((floor.getTiledTileAt(i+1, j, true).gid == 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0))){
        //             /*if((floor.getTiledTileAt(i+1, j, true).gid == 0 && floor.getTiledTileAt(i+1, j+1, true).gid != 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0 && floor.getTiledTileAt(i-1, j+1, true).gid != 0))*/
        //             if(floor.getTiledTileAt(i, j-1, true).gid) FloorTile.node.group = "mound";
        //             else FloorTile.node.group = "mound_top";
        //             // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        //         }
        //     }
        // }
        var FloorTile = floor.getTiledTileAt(layerSz.width - 1, 7, true);
        if (FloorTile.gid) {
            FloorTile.node.group = "mound";
            // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        }
        // }
        for (var i = 1; i < layerSz.width - 1; i++) {
            for (var j = 0; j < layerSz.height - 1; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid != 0 && ((floor.getTiledTileAt(i + 1, j, true).gid == 0 && floor.getTiledTileAt(i + 1, j + 1, true).gid != 0) || (floor.getTiledTileAt(i - 1, j, true).gid == 0 && floor.getTiledTileAt(i - 1, j + 1, true).gid != 0))) {
                    FloorTile.node.group = "mound";
                    // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
                }
            }
        }
        var obj_list = map.getObjectGroup("colors").getObjects();
        if (cc.director.getScene().name == "test" || cc.director.getScene().name == "multi")
            this.player_col = 6 * this.strip + cc.find('Canvas/root/player').getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).color;
        else if (cc.director.getScene().name == "day")
            this.player_col = 6 * this.strip + cc.find('Canvas/root/player').getComponent('player_day').color;
        //console.log("bias towards " + this.player_col);
        obj_list.forEach(function (obj) {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            var cannot_hide = Math.floor(Math.random() * 2);
            var col = 0;
            if (cannot_hide)
                col = _this.base + Math.floor(Math.random() * 5);
            else
                col = _this.player_col;
            // console.log(obj.x, obj.y, x_size, y_size);
            // console.log("Create colored block with gid " + this.base + color);
            for (i = obj.x / 48; i < (obj.x / 48 + x_size); i++) {
                for (j = 10 - (obj.y / 48); j < (10 - (obj.y / 48) + y_size); j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = col;
                }
            }
        });
        // sharp obstacle、spider、sharp_down
        var section_count;
        if (cc.director.getScene().name == "test" || cc.director.getScene().name == "multi")
            section_count = cc.find('Canvas/root/player').getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).section_count;
        else if (cc.director.getScene().name == "day")
            section_count = cc.find('Canvas/root/player').getComponent('player_day').section_count;
        var sharp_list = { 1: 'sharp', 2: 'sharp2', 3: 'sharp3', 4: 'sharp4' };
        var sharp_d_list = { 1: 'sharp_d', 2: 'sharp_d2', 3: 'sharp_d3' };
        var map_layer = map.getLayer("enemy");
        var layer_size = map_layer.getLayerSize();
        var flag = new Array(layer_size.width);
        for (var i = 0; i < layer_size.width; i++) {
            flag[i] = new Array(layer_size.height);
        }
        var flag_d = new Array(layer_size.width);
        for (var i = 0; i < layer_size.width; i++) {
            flag_d[i] = new Array(layer_size.height);
        }
        for (var i = 0; i < layer_size.width; i++) {
            for (var j = 0; j < layer_size.height; j++) {
                var tile = map_layer.getTiledTileAt(i, j, true);
                //1 static, 234 moving
                if (tile.gid == 878 + 61 && flag[i][j] == null) {
                    flag[i][j] = 1;
                    var rad = 1 + Math.floor(Math.random() * 4); //1 static, 234 moving
                    var sharp_pre = cc.instantiate(this.sharp);
                    sharp_pre.name = sharp_list[rad];
                    sharp_pre.x = section_count * 1920 + tile.node.x;
                    sharp_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld/sharp").addChild(sharp_pre);
                    for (var m = i + 1;; m++) {
                        var tile_ = map_layer.getTiledTileAt(m, j, true);
                        if (tile_.gid != 878 + 61)
                            break;
                        flag[m][j] = 1;
                        var sharp_p = cc.instantiate(this.sharp);
                        sharp_p.name = sharp_list[rad];
                        sharp_p.x = section_count * 1920 + tile_.node.x;
                        sharp_p.y = tile_.node.y;
                        cc.find("Canvas/root/mapworld/sharp").addChild(sharp_p);
                    }
                    //spider
                }
                else if (tile.gid == 265 + 61) {
                    var spider_pre = cc.instantiate(this.spider);
                    spider_pre.x = section_count * 1920 + tile.node.x;
                    spider_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld").addChild(spider_pre);
                    //sharp fall down
                }
                else if (tile.gid == 664 + 61 && flag_d[i][j] == null) {
                    flag_d[i][j] = 1;
                    var rad = 1 + Math.floor(Math.random() * 3);
                    var sharp_d = cc.instantiate(this.sharp_down);
                    sharp_d.name = sharp_d_list[rad];
                    sharp_d.x = section_count * 1920 + tile.node.x;
                    sharp_d.y = tile.node.y;
                    cc.find("Canvas/root/mapworld/sharp_down").addChild(sharp_d);
                    for (var m = i + 1;; m++) {
                        var tile_ = map_layer.getTiledTileAt(m, j, true);
                        if (tile_.gid != 664 + 61)
                            break;
                        flag_d[m][j] = 1;
                        var sharp_ = cc.instantiate(this.sharp_down);
                        sharp_.name = sharp_d_list[rad];
                        sharp_.x = section_count * 1920 + tile_.node.x;
                        sharp_.y = tile_.node.y;
                        cc.find("Canvas/root/mapworld/sharp_down").addChild(sharp_);
                    }
                }
            }
        }
        map_layer.enabled = false;
        //coin
        var coin_layer = this.node.getComponent(cc.TiledMap).getLayer("coin_and_bubble");
        layer_size = coin_layer.getLayerSize();
        for (var i = 0; i < layer_size.width; i++) {
            for (var j = 0; j < layer_size.height; j++) {
                var tile = coin_layer.getTiledTileAt(i, j, true);
                //coin
                // console.log(tile.gid);
                if (tile.gid == 268 + 61) {
                    var c = cc.instantiate(this.coin_pre);
                    c.x = section_count * 1920 + tile.node.x;
                    c.y = tile.node.y;
                    //c.active = true;
                    cc.find("Canvas/root/mapworld/coin_bubble").addChild(c);
                    tile.gid = 0;
                }
                else if (tile.gid == 225 + 61) {
                    tile.gid = 0;
                    if (cc.director.getScene().name == 'day') {
                        var rad = 1 + Math.floor(Math.random() * 2);
                        var b = new cc.Node;
                        if (rad == 1)
                            b = cc.instantiate(this.banana_pre);
                        else if (rad == 2)
                            b = cc.instantiate(this.lego_pre);
                        // else b = cc.instantiate(this.bubble_pre);
                        b.x = section_count * 1920 + tile.node.x;
                        b.y = tile.node.y;
                        //c.active = true;
                        cc.find("Canvas/root/mapworld/coin_bubble").addChild(b);
                    }
                    else if (cc.director.getScene().name == 'multi') {
                        var rad = 1 + Math.floor(Math.random() * 4);
                        var b = new cc.Node;
                        if (rad == 1)
                            b = cc.instantiate(this.bubble_pre);
                        else if (rad == 2)
                            b = cc.instantiate(this.data_pre);
                        else if (rad == 2)
                            b = cc.instantiate(this.signal_pre);
                        else if (rad == 2)
                            b = cc.instantiate(this.mute_pre);
                        // else b = cc.instantiate(this.bubble_pre);
                        b.x = section_count * 1920 + tile.node.x;
                        b.y = tile.node.y;
                        //c.active = true;
                        cc.find("Canvas/root/mapworld/coin_bubble").addChild(b);
                    }
                    else {
                        var b = cc.instantiate(this.bubble_pre);
                        b.x = section_count * 1920 + tile.node.x;
                        b.y = tile.node.y;
                        //c.active = true;
                        cc.find("Canvas/root/mapworld/coin_bubble").addChild(b);
                    }
                }
            }
        }
        coin_layer.enabled = false;
        //enemy init
        //var lv_diff = cc.find("Canvas/root/player").getComponent(((cc.director.getScene().name == 'multi')? 'player_multi' : 'player')).section_count;
        var lv_diff = section_count;
        if (lv_diff && cc.director.getScene().name != "day") {
            var range_arr = [360, 300, 300, 250, 200, 150, 120, 100]; // 100 or 80 if one light spawned, 60 or 50 if two, 30 or 20 if three
            var lightcount = 0;
            if (lv_diff >= 12) {
                lightcount = 3;
            }
            else if (lv_diff >= 6) {
                lightcount = 2 + (Math.floor(Math.random() * (lv_diff - 6))) ? 1 : 0;
            }
            else if (lv_diff >= 2) {
                lightcount = 1 + (Math.floor(Math.random() * (lv_diff - 2))) ? 1 : 0;
            }
            else
                lightcount = Math.floor(Math.random() * 2);
            if (Math.floor(Math.random() * 2))
                lightcount++;
            var offset = lv_diff * 1920 + ((lv_diff == 0) ? 400 : 0);
            for (var i = 0; i < lightcount; i++) {
                var range = range_arr[(lightcount - 1) * 2 + Math.floor(Math.random() * 2)];
                var enemy = cc.instantiate(this.searchlight);
                if (enemy.getComponent('enemy_wrapper'))
                    enemy.getComponent('enemy_wrapper').range = range;
                enemy.setPosition(offset + (1920 / (lightcount + 1)) * i + (Math.floor(Math.random() * 400) - 200), 200);
                cc.find("Canvas/root/enemy_collection").addChild(enemy);
            }
        }
        /*
        //coin
        if(cc.director.getScene().name=="day") {
            var offset = lv_diff * 1920 + ((lv_diff == 0)? 400 : 0);
            for(i =0;i<Math.random()*11;i++)
            {
                var money=cc.instantiate(this.coin_pre);
                money.x=Math.random()*1920+offset;
                money.y=500;
                cc.find("Canvas/root/powerups").addChild(money);
            }
        }

        //bubble item init(dayscene)
        if(cc.director.getScene().name=="day")
        {
            for(i =0;i<Math.random()*4;i++)
            {
                var random= Math.floor(Math.random()*2); //0 and 1
                if(random)var powerups=cc.instantiate(this.lego_pre);
                else var powerups=cc.instantiate(this.banana_pre);
                powerups.x=Math.random()*1920+offset;
                powerups.y=0+Math.random()*50;
                cc.find("Canvas/root/powerups").addChild(powerups);
            }
        }*/
    };
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "searchlight", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "sharp", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "sharp_down", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "spider", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "coin_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "lego_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "bubble_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "banana_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "data_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "signal_pre", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "mute_pre", void 0);
    Section = __decorate([
        ccclass
    ], Section);
    return Section;
}(cc.Component));
exports.Section = Section;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQWlXQztRQS9WVyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFakIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUE4VDNCLENBQUM7SUE1VEcsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0Msc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFP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O1FBRG5CLE9BQU87T0FDSyxPQUFPLENBaVduQjtJQUFELGNBQUM7Q0FqV0QsQUFpV0MsQ0FqVzRCLEVBQUUsQ0FBQyxTQUFTLEdBaVd4QztBQWpXWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU2VjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlOiBudW1iZXIgPSA2O1xyXG4gICAgcHJpdmF0ZSBzdHJpcDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGxheWVyX2NvbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VhcmNobGlnaHQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNoYXJwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNoYXJwX2Rvd246IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNwaWRlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY29pbl9wcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxlZ29fcHJlOiBjYy5QcmVmYWI9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYnViYmxlX3ByZTogY2MuUHJlZmFiPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhbmFuYV9wcmU6IGNjLlByZWZhYj1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRhdGFfcHJlOiBjYy5QcmVmYWI9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzaWduYWxfcHJlOiBjYy5QcmVmYWI9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBtdXRlX3ByZTogY2MuUHJlZmFiPW51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsdjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNTAwKTtcclxuICAgICAgICB0aGlzLmx2ID0gcGFyc2VJbnQodGhpcy5ub2RlLm5hbWUucmVwbGFjZSgnc2VjdGlvbicsICcnKSk7XHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JZID0gMDtcclxuICAgICAgICB2YXIgbWFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZE1hcCk7XHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7ICAgICAgICAgLy/mr4/mrKHmm7TmlrDnmoRzZWN0aW9uIOiJsuelqOmDveimgeS4gOaoo1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJiYXNlIGNvbG9yIGdpZDogXCIgKyB0aGlzLmJhc2UpO1xyXG5cclxuICAgICAgICB2YXIgYm9keSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mig5NjAsIDI0MCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoNSwgMTAwMCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gdHJ1ZTtcclxuICAgICAgICBjb2xsaWRlci50YWcgPSAxMDAwOyAgICAgICAgLy8gaW5pdCBuZXh0IG1hcCBvbiBjb250YWN0XHJcbiAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgdmFyIHN6ID0gbWFwLmdldFRpbGVTaXplKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3opO1xyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHZhciBmbG9vciA9IG1hcC5nZXRMYXllcihcImdyb3VuZFwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJTeiA9IGZsb29yLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkcmF3IGdyb3VuZCBib3ggZm9yIHRpbGUgKFwiICsgaSArIFwiLCBcIiArIGogKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcImdyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlZCB0aWxlIHdpdGggXCIgKyBGbG9vclRpbGUubm9kZS5ncm91cClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlciA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHN6LndpZHRoLzIsIHN6LmhlaWdodC8yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLTEsIHRydWUpLmdpZCkgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoNDcuNiwgNDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29sbGlkZXIuc2l6ZSA9IHN6O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJ0aWxlIGluaXQgY29tcGxldGUsIG1hcmtpbmcgbW91bmRzXCIpXHJcbiAgICAgICAgLy8gZm9yKGogPSA3OyBqID49IDA7IGotLSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChsYXllclN6LndpZHRoLTEsIGosIHRydWUpO1xyXG4gICAgICAgIC8vICAgICBpZihGbG9vclRpbGUuZ2lkKSBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8IGxheWVyU3oud2lkdGgtMTsgaSsrKXtcclxuICAgICAgICAvLyAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0IC0xOyBqKyspe1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCAhPSAwICYmICgoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSsxLCBqLCB0cnVlKS5naWQgPT0gMCkgfHwgKGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDApKSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaHJpbmsgY29sbGlkZXIgc2l6ZSBvZiB0aWxlKFwiICsgMzkgKyBcIiwgXCIgKyA3ICsgXCIpIHRvIFwiKyBjb2wuc2l6ZS53aWR0aCArIFwiLCBcIisgY29sLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBmb3IoaiA9IDg7IGogPiAyOyBqLS0pe1xyXG4gICAgICAgIC8vICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQobGF5ZXJTei53aWR0aC0xLCBqLCB0cnVlKTtcclxuICAgICAgICAvLyAgICAgaWYoRmxvb3JUaWxlLmdpZCl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZihmbG9vci5nZXRUaWxlZFRpbGVBdChsYXllclN6LndpZHRoLTEsIGotMSwgdHJ1ZSkpIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJtb3VuZFwiO1xyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRfdG9wXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8IGxheWVyU3oud2lkdGgtMTsgaSsrKXtcclxuICAgICAgICAvLyAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0IC0xOyBqKyspe1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCAhPSAwICYmICgoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSsxLCBqLCB0cnVlKS5naWQgPT0gMCkgfHwgKGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDApKSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLyppZigoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSsxLCBqLCB0cnVlKS5naWQgPT0gMCAmJiBmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGorMSwgdHJ1ZSkuZ2lkICE9IDApIHx8IChmbG9vci5nZXRUaWxlZFRpbGVBdChpLTEsIGosIHRydWUpLmdpZCA9PSAwICYmIGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaisxLCB0cnVlKS5naWQgIT0gMCkpKi9cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZihmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLTEsIHRydWUpLmdpZCkgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxzZSBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRfdG9wXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaHJpbmsgY29sbGlkZXIgc2l6ZSBvZiB0aWxlKFwiICsgMzkgKyBcIiwgXCIgKyA3ICsgXCIpIHRvIFwiKyBjb2wuc2l6ZS53aWR0aCArIFwiLCBcIisgY29sLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQobGF5ZXJTei53aWR0aC0xLCA3LCB0cnVlKTtcclxuICAgICAgICBpZihGbG9vclRpbGUuZ2lkKXtcclxuICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgbGF5ZXJTei53aWR0aC0xOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQgLTE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkICE9IDAgJiYgKChmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGosIHRydWUpLmdpZCA9PSAwICYmIGZsb29yLmdldFRpbGVkVGlsZUF0KGkrMSwgaisxLCB0cnVlKS5naWQgIT0gMCkgfHwgKGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDAgJiYgZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaS0xLCBqKzEsIHRydWUpLmdpZCAhPSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJtb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIG9ial9saXN0ID0gbWFwLmdldE9iamVjdEdyb3VwKFwiY29sb3JzXCIpLmdldE9iamVjdHMoKTtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT1cInRlc3RcIiB8fCBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT1cIm11bHRpXCIpdGhpcy5wbGF5ZXJfY29sID0gNip0aGlzLnN0cmlwICsgY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCgoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtdWx0aScpPyAncGxheWVyX211bHRpJyA6ICdwbGF5ZXInKSkuY29sb3JcclxuICAgICAgICBlbHNlIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PVwiZGF5XCIpdGhpcy5wbGF5ZXJfY29sID0gNip0aGlzLnN0cmlwICsgY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCdwbGF5ZXJfZGF5JykuY29sb3I7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJpYXMgdG93YXJkcyBcIiArIHRoaXMucGxheWVyX2NvbCk7XHJcbiAgICAgICAgb2JqX2xpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4X3NpemUgPSBvYmoud2lkdGggLyA0ODtcclxuICAgICAgICAgICAgdmFyIHlfc2l6ZSA9IG9iai5oZWlnaHQgLyA0ODtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjYW5ub3RfaGlkZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICB2YXIgY29sID0gMDtcclxuICAgICAgICAgICAgaWYoY2Fubm90X2hpZGUpIGNvbCA9IHRoaXMuYmFzZSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG4gICAgICAgICAgICBlbHNlIGNvbCA9IHRoaXMucGxheWVyX2NvbDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqLngsIG9iai55LCB4X3NpemUsIHlfc2l6ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ3JlYXRlIGNvbG9yZWQgYmxvY2sgd2l0aCBnaWQgXCIgKyB0aGlzLmJhc2UgKyBjb2xvcik7XHJcblxyXG4gICAgICAgICAgICBmb3IoaSA9IG9iai54IC8gNDg7IGkgPCAob2JqLnggLyA0OCArIHhfc2l6ZSk7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDEwIC0gKG9iai55LzQ4KTsgaiA8ICgxMCAtIChvYmoueS80OCkgKyB5X3NpemUpOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gY29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNoYXJwIG9ic3RhY2xl44CBc3BpZGVy44CBc2hhcnBfZG93blxyXG4gICAgICAgIHZhciBzZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PVwidGVzdFwiIHx8IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PVwibXVsdGlcIikgc2VjdGlvbl9jb3VudCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpLmdldENvbXBvbmVudCgoKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSAnbXVsdGknKT8gJ3BsYXllcl9tdWx0aScgOiAncGxheWVyJykpLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgZWxzZSBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT1cImRheVwiKSBzZWN0aW9uX2NvdW50ID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCdwbGF5ZXJfZGF5Jykuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2hhcnBfbGlzdCA9IHsxOiAnc2hhcnAnLCAyOiAnc2hhcnAyJywgMzogJ3NoYXJwMycsIDQ6ICdzaGFycDQnfTtcclxuICAgICAgICB2YXIgc2hhcnBfZF9saXN0ID0gezE6ICdzaGFycF9kJywgMjogJ3NoYXJwX2QyJywgMzogJ3NoYXJwX2QzJ307XHJcbiAgICAgICAgdmFyIG1hcF9sYXllciA9IG1hcC5nZXRMYXllcihcImVuZW15XCIpO1xyXG4gICAgICAgIHZhciBsYXllcl9zaXplID0gbWFwX2xheWVyLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIHZhciBmbGFnID0gbmV3IEFycmF5KGxheWVyX3NpemUud2lkdGgpO1xyXG4gICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbGF5ZXJfc2l6ZS53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZsYWdbaV0gPSBuZXcgQXJyYXkobGF5ZXJfc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZmxhZ19kID0gbmV3IEFycmF5KGxheWVyX3NpemUud2lkdGgpO1xyXG4gICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbGF5ZXJfc2l6ZS53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZsYWdfZFtpXSA9IG5ldyBBcnJheShsYXllcl9zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJfc2l6ZS5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IG1hcF9sYXllci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLzEgc3RhdGljLCAyMzQgbW92aW5nXHJcbiAgICAgICAgICAgICAgICBpZih0aWxlLmdpZCA9PSA4NzggKyA2MSAmJiBmbGFnW2ldW2pdID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdbaV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYWQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7ICAvLzEgc3RhdGljLCAyMzQgbW92aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJwX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hhcnApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX3ByZS5uYW1lID0gc2hhcnBfbGlzdFtyYWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX3ByZS54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9wcmUueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9zaGFycFwiKS5hZGRDaGlsZChzaGFycF9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgbSA9IGkgKyAxOyA7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZV8gPSBtYXBfbGF5ZXIuZ2V0VGlsZWRUaWxlQXQobSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGVfLmdpZCAhPSA4NzggKyA2MSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdbbV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcnBfcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hhcnApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF9wLm5hbWUgPSBzaGFycF9saXN0W3JhZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwX3AueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZV8ubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF9wLnkgPSB0aWxlXy5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9zaGFycFwiKS5hZGRDaGlsZChzaGFycF9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3NwaWRlclxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGUuZ2lkID09IDI2NSArIDYxKXsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGlkZXJfcHJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwaWRlcl9wcmUueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BpZGVyX3ByZS55ID0gdGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkXCIpLmFkZENoaWxkKHNwaWRlcl9wcmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2hhcnAgZmFsbCBkb3duXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGlsZS5naWQgPT0gNjY0ICsgNjEgJiYgZmxhZ19kW2ldW2pdID09IG51bGwpeyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdfZFtpXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGFycF9kID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGFycF9kb3duKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9kLm5hbWUgPSBzaGFycF9kX2xpc3RbcmFkXTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9kLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX2QueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9zaGFycF9kb3duXCIpLmFkZENoaWxkKHNoYXJwX2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgbSA9IGkgKyAxOyA7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZV8gPSBtYXBfbGF5ZXIuZ2V0VGlsZWRUaWxlQXQobSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGVfLmdpZCAhPSA2NjQgKyA2MSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdfZFttXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFycF8gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoYXJwX2Rvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF8ubmFtZSA9IHNoYXJwX2RfbGlzdFtyYWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF8ueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZV8ubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF8ueSA9IHRpbGVfLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL3NoYXJwX2Rvd25cIikuYWRkQ2hpbGQoc2hhcnBfKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcF9sYXllci5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vY29pblxyXG4gICAgICAgIHZhciBjb2luX2xheWVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZE1hcCkuZ2V0TGF5ZXIoXCJjb2luX2FuZF9idWJibGVcIik7XHJcbiAgICAgICAgbGF5ZXJfc2l6ZSA9IGNvaW5fbGF5ZXIuZ2V0TGF5ZXJTaXplKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyX3NpemUud2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBsYXllcl9zaXplLmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciB0aWxlID0gY29pbl9sYXllci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vY29pblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGlsZS5naWQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGlsZS5naWQgPT0gMjY4ICsgNjEpeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5fcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBjLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGMueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9jb2luX2J1YmJsZVwiKS5hZGRDaGlsZChjKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmdpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuZ2lkID09IDIyNSArIDYxKXsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZ2lkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ2RheScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhZCA9PSAxKSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYW5hbmFfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyYWQgPT0gMikgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGVnb19wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1YmJsZV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9jb2luX2J1YmJsZVwiKS5hZGRDaGlsZChiKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBuZXcgY2MuTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFkID09IDEpIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1YmJsZV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJhZCA9PSAyKSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5kYXRhX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmFkID09IDIpIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNpZ25hbF9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJhZCA9PSAyKSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5tdXRlX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL2NvaW5fYnViYmxlXCIpLmFkZENoaWxkKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL2NvaW5fYnViYmxlXCIpLmFkZENoaWxkKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2luX2xheWVyLmVuYWJsZWQgPSBmYWxzZTsgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vZW5lbXkgaW5pdFxyXG4gICAgICAgIC8vdmFyIGx2X2RpZmYgPSBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvcGxheWVyXCIpLmdldENvbXBvbmVudCgoKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSAnbXVsdGknKT8gJ3BsYXllcl9tdWx0aScgOiAncGxheWVyJykpLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgdmFyIGx2X2RpZmYgPSBzZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIGlmKGx2X2RpZmYgJiYgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lICE9IFwiZGF5XCIpe1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VfYXJyID0gWzM2MCwgMzAwLCAzMDAsIDI1MCwgMjAwLCAxNTAsIDEyMCwgMTAwXTsgICAgICAvLyAxMDAgb3IgODAgaWYgb25lIGxpZ2h0IHNwYXduZWQsIDYwIG9yIDUwIGlmIHR3bywgMzAgb3IgMjAgaWYgdGhyZWVcclxuICAgICAgICAgICAgdmFyIGxpZ2h0Y291bnQgPSAwO1xyXG4gICAgICAgICAgICBpZihsdl9kaWZmID49IDEyKXtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Y291bnQgPSAzO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihsdl9kaWZmID49IDYpe1xyXG4gICAgICAgICAgICAgICAgbGlnaHRjb3VudCA9IDIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGx2X2RpZmYgLSA2KSkpPyAxIDogMDtcclxuICAgICAgICAgICAgfWVsc2UgaWYobHZfZGlmZiA+PSAyKXtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Y291bnQgPSAxICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsdl9kaWZmIC0gMikpKT8gMSA6IDA7XHJcbiAgICAgICAgICAgIH1lbHNlIGxpZ2h0Y291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikpIGxpZ2h0Y291bnQrKztcclxuXHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBsdl9kaWZmICogMTkyMCArICgobHZfZGlmZiA9PSAwKT8gNDAwIDogMCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaWdodGNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gcmFuZ2VfYXJyWyhsaWdodGNvdW50LTEpICogMiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VhcmNobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYoZW5lbXkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykpZW5lbXkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykucmFuZ2UgPSByYW5nZTtcclxuICAgICAgICAgICAgICAgIGVuZW15LnNldFBvc2l0aW9uKG9mZnNldCArICgxOTIwLyhsaWdodGNvdW50KzEpKSppICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MDApIC0yMDApLCAyMDApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L2VuZW15X2NvbGxlY3Rpb25cIikuYWRkQ2hpbGQoZW5lbXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vY29pbiBcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU9PVwiZGF5XCIpIHtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGx2X2RpZmYgKiAxOTIwICsgKChsdl9kaWZmID09IDApPyA0MDAgOiAwKTtcclxuICAgICAgICAgICAgZm9yKGkgPTA7aTxNYXRoLnJhbmRvbSgpKjExO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbmV5PWNjLmluc3RhbnRpYXRlKHRoaXMuY29pbl9wcmUpO1xyXG4gICAgICAgICAgICAgICAgbW9uZXkueD1NYXRoLnJhbmRvbSgpKjE5MjArb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgbW9uZXkueT01MDA7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvcG93ZXJ1cHNcIikuYWRkQ2hpbGQobW9uZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2J1YmJsZSBpdGVtIGluaXQoZGF5c2NlbmUpXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lPT1cImRheVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGkgPTA7aTxNYXRoLnJhbmRvbSgpKjQ7aSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7IC8vMCBhbmQgMVxyXG4gICAgICAgICAgICAgICAgaWYocmFuZG9tKXZhciBwb3dlcnVwcz1jYy5pbnN0YW50aWF0ZSh0aGlzLmxlZ29fcHJlKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdmFyIHBvd2VydXBzPWNjLmluc3RhbnRpYXRlKHRoaXMuYmFuYW5hX3ByZSk7XHJcbiAgICAgICAgICAgICAgICBwb3dlcnVwcy54PU1hdGgucmFuZG9tKCkqMTkyMCtvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBwb3dlcnVwcy55PTArTWF0aC5yYW5kb20oKSo1MDtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9wb3dlcnVwc1wiKS5hZGRDaGlsZChwb3dlcnVwcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Ki9cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/spider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cb3fLVW15AforolOA9VO1/', 'spider');
// scripts/spider.ts

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
exports.spider = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var spider = /** @class */ (function (_super) {
    __extends(spider, _super);
    function spider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moveDir = 1;
        return _this;
    }
    spider.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    spider.prototype.start = function () {
        //this.node.scaleX = -this.node.scaleX;
        var body = this.getComponent(cc.RigidBody);
        //body.linearVelocity = cc.v2(250,0);
        console.log("V = ", body.linearVelocity);
    };
    spider.prototype.update = function (dt) {
        this.node.x += 220 * dt * this.moveDir;
        //this.node.scaleX = (this.moveDir >= 0) ? 1 : -1;
    };
    spider.prototype.onBeginContact = function (contact, self, other) {
        if ((other.node.group == 'mound') && contact.getWorldManifold().normal.y == 0) {
            this.moveDir *= -1;
            /*if( (this.getComponent(cc.RigidBody).linearVelocity.x > 0 && contact.getWorldManifold().normal.x == 1) || (this.getComponent(cc.RigidBody).linearVelocity.x < 0 && contact.getWorldManifold().normal.x == -1)) {
                console.log(other.node.group, contact.getWorldManifold().normal.x, contact.getWorldManifold().normal.y);
                //this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.getComponent(cc.RigidBody).linearVelocity.x, 0);
                //this.node.scaleX = -this.node.scaleX;
                this.moveDir *= -1;
            }*/
        }
        else
            contact.enabled = false;
    };
    spider = __decorate([
        ccclass
    ], spider);
    return spider;
}(cc.Component));
exports.spider = spider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3BpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXdDQztRQXRDRyxhQUFPLEdBQVcsQ0FBQyxDQUFDOztJQXNDeEIsQ0FBQztJQW5DRyx1QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkQsQ0FBQztJQUNELHNCQUFLLEdBQUw7UUFFSSx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MscUNBQXFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUc3QyxDQUFDO0lBQ0QsdUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkMsa0RBQWtEO0lBQ3RELENBQUM7SUFDQSwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFHLElBQUksRUFBRyxLQUFLO1FBQ2xDLElBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUUxRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25COzs7OztlQUtHO1NBQ047O1lBQ0ksT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQWxDUSxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBd0NsQjtJQUFELGFBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzJCLEVBQUUsQ0FBQyxTQUFTLEdBd0N2QztBQXhDWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIHNwaWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbW92ZURpcjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IC10aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAvL2JvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigyNTAsMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWID0gXCIsIGJvZHkubGluZWFyVmVsb2NpdHkpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSAyMjAgKiBkdCAqIHRoaXMubW92ZURpcjtcclxuICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID49IDApID8gMSA6IC0xO1xyXG4gICAgfVxyXG4gICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QgLCBzZWxmICwgb3RoZXIpe1xyXG4gICAgICAgIGlmKChvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpICYmIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ID09IDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcclxuICAgICAgICAgICAgLyppZiggKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueCA+IDAgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gMSkgfHwgKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueCA8IDAgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwLCBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCwgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoLXRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueCwgMCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAtdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciAqPSAtMTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgY29udGFjdC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/root.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eb0eVa2iJO2qXjaMqeJlJR', 'root');
// scripts/root.ts

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
exports.root = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var root = /** @class */ (function (_super) {
    __extends(root, _super);
    function root() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color_strip = 0;
        return _this;
    }
    // private player = Player;
    // private sec = Section;
    root.prototype.onLoad = function () {
        this.color_strip = cc.sys.localStorage.getItem("nowcolor");
        console.log("using strip " + this.color_strip);
    };
    root.prototype.start = function () {
        // this.color_strip = 1 + Math.floor(Math.random() * 5);
        //set background color according to different strips. 
        var skyColorList = [0, 30, 30, 60, 0, 30];
        cc.director.setClearColor(cc.color(skyColorList[this.color_strip], skyColorList[this.color_strip], skyColorList[this.color_strip]));
    };
    root = __decorate([
        ccclass
    ], root);
    return root;
}(cc.Component));
exports.root = root;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFNMUM7SUFBMEIsd0JBQVk7SUFBdEM7UUFBQSxxRUF1QkM7UUF0QkcsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBc0I1QixDQUFDO0lBcEJHLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFFekIscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLHdEQUF3RDtRQUV4RCxzREFBc0Q7UUFDdEQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBR3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhJLENBQUM7SUFyQlEsSUFBSTtRQURoQixPQUFPO09BQ0ssSUFBSSxDQXVCaEI7SUFBRCxXQUFDO0NBdkJELEFBdUJDLENBdkJ5QixFQUFFLENBQUMsU0FBUyxHQXVCckM7QUF2Qlksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcidcclxuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25faW5pdCdcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyByb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGNvbG9yX3N0cmlwOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIHByaXZhdGUgcGxheWVyID0gUGxheWVyO1xyXG4gICAgLy8gcHJpdmF0ZSBzZWMgPSBTZWN0aW9uO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvcl9zdHJpcCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vd2NvbG9yXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNpbmcgc3RyaXAgXCIgKyB0aGlzLmNvbG9yX3N0cmlwKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLmNvbG9yX3N0cmlwID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG5cclxuICAgICAgICAvL3NldCBiYWNrZ3JvdW5kIGNvbG9yIGFjY29yZGluZyB0byBkaWZmZXJlbnQgc3RyaXBzLiBcclxuICAgICAgICB2YXIgc2t5Q29sb3JMaXN0ID0gWzAsIDMwLDMwLDYwLDAsIDMwXVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKGNjLmNvbG9yKHNreUNvbG9yTGlzdFt0aGlzLmNvbG9yX3N0cmlwXSwgc2t5Q29sb3JMaXN0W3RoaXMuY29sb3Jfc3RyaXBdLCBza3lDb2xvckxpc3RbdGhpcy5jb2xvcl9zdHJpcF0pKTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sharp_down.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d26fZxbw1NSItYzpbTZZ6m', 'sharp_down');
// scripts/sharp_down.ts

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
exports.sharp_down = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var sharp_down = /** @class */ (function (_super) {
    __extends(sharp_down, _super);
    function sharp_down() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sharp_down.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    sharp_down.prototype.start = function () {
        var _this = this;
        var action = cc.repeatForever(cc.sequence(cc.moveBy(0.2, cc.v2(0, -210)), cc.delayTime(0.1), cc.moveBy(0, cc.v2(0, 210)), cc.delayTime(1.2)));
        if (this.node.name == 'sharp_d') {
            this.scheduleOnce(function () {
                _this.node.runAction(action);
            }, 1);
        }
        else if (this.node.name == 'sharp_d2') {
            this.scheduleOnce(function () {
                _this.node.runAction(action);
            }, 2);
        }
        else if (this.node.name == 'sharp_d3') {
            this.scheduleOnce(function () {
                _this.node.runAction(action);
            }, 3);
        }
    };
    sharp_down = __decorate([
        ccclass
    ], sharp_down);
    return sharp_down;
}(cc.Component));
exports.sharp_down = sharp_down;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2hhcnBfZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0MsOEJBQVk7SUFBNUM7O0lBeUJBLENBQUM7SUF0QkcsMkJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFDRCwwQkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUU7Z0JBQ2YsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7YUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTtZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFFO2dCQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO2FBQU0sSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBRTtnQkFDZixLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDtJQUVMLENBQUM7SUF2QlEsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQXlCdEI7SUFBRCxpQkFBQztDQXpCRCxBQXlCQyxDQXpCK0IsRUFBRSxDQUFDLFNBQVMsR0F5QjNDO0FBekJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3Mgc2hhcnBfZG93biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjIsIGNjLnYyKDAsIC0yMTApKSAsY2MuZGVsYXlUaW1lKDAuMSksIGNjLm1vdmVCeSgwLCBjYy52MigwLCAyMTApKSwgY2MuZGVsYXlUaW1lKDEuMikpKTtcbiAgICBcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gJ3NoYXJwX2QnKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnBfZDInKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSwgMik7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnc2hhcnBfZDMnKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSwgMyk7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/store.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63accuI0aRFm5VF25/+YBYC', 'store');
// scripts/store.ts

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
var store = /** @class */ (function (_super) {
    __extends(store, _super);
    function store() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.money = 0;
        _this.lego = 0;
        _this.banana = 0;
        _this.powerup = 0;
        _this.mute = 0;
        _this.signal = 0;
        _this.color = { 1: true, 2: false, 3: false, 4: false, 5: false };
        _this.nowcolor = 1;
        _this.uid = null;
        return _this;
    }
    store.prototype.start = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        this.uid = cc.sys.localStorage.getItem('uid');
        this.money = cc.sys.localStorage.getItem("coins");
        this.lego = cc.sys.localStorage.getItem("lego");
        this.powerup = cc.sys.localStorage.getItem("powerup");
        this.banana = cc.sys.localStorage.getItem("banana");
        this.mute = cc.sys.localStorage.getItem("mute");
        this.signal = cc.sys.localStorage.getItem("signal");
        this.nowcolor = cc.sys.localStorage.getItem("nowcolor");
        var c = cc.sys.localStorage.getItem("color").split("");
        for (var i = 1; i <= 5; i++) {
            if (parseInt(c[i]))
                this.color[i] = true;
            else
                this.color[i] = false;
        }
        var a = this.money;
        cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        a = this.lego;
        cc.find('Canvas/lego/amount').getComponent(cc.Label).string = a.toString();
        a = this.banana;
        cc.find('Canvas/banana/amount').getComponent(cc.Label).string = a.toString();
        a = this.powerup;
        cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = a.toString();
        a = this.mute;
        cc.find('Canvas/mute/amount').getComponent(cc.Label).string = a.toString();
        a = this.signal;
        cc.find('Canvas/signal/amount').getComponent(cc.Label).string = a.toString();
        if (this.nowcolor == 1)
            cc.find('Canvas/color1/check').active = true;
        else if (this.nowcolor == 2)
            cc.find('Canvas/color2/check').active = true;
        else if (this.nowcolor == 3)
            cc.find('Canvas/color3/check').active = true;
        else if (this.nowcolor == 4)
            cc.find('Canvas/color4/check').active = true;
        else if (this.nowcolor == 5)
            cc.find('Canvas/color5/check').active = true;
        for (var i = 1; i <= 5; i++) {
            if (this.color[i])
                cc.find('Canvas/color' + i.toString() + '/price').getComponent(cc.Label).string = 'free';
        }
        var l = new cc.Component.EventHandler();
        l.target = this.node;
        l.component = "store";
        l.handler = "loadlego";
        cc.find("Canvas/lego/button").getComponent(cc.Button).clickEvents.push(l);
        var banana = new cc.Component.EventHandler();
        banana.target = this.node;
        banana.component = "store";
        banana.handler = "loadbanana";
        cc.find("Canvas/banana/button").getComponent(cc.Button).clickEvents.push(banana);
        var powerup = new cc.Component.EventHandler();
        powerup.target = this.node;
        powerup.component = "store";
        powerup.handler = "loadpowerup";
        cc.find("Canvas/powerup/button").getComponent(cc.Button).clickEvents.push(powerup);
        var mute = new cc.Component.EventHandler();
        mute.target = this.node;
        mute.component = "store";
        mute.handler = "loadmute";
        cc.find("Canvas/mute/button").getComponent(cc.Button).clickEvents.push(mute);
        var signal = new cc.Component.EventHandler();
        signal.target = this.node;
        signal.component = "store";
        signal.handler = "loadsignal";
        cc.find("Canvas/signal/button").getComponent(cc.Button).clickEvents.push(signal);
        var color1 = new cc.Component.EventHandler();
        color1.target = this.node;
        color1.component = "store";
        color1.handler = "loadcolor1";
        cc.find("Canvas/color1").getComponent(cc.Button).clickEvents.push(color1);
        var color2 = new cc.Component.EventHandler();
        color2.target = this.node;
        color2.component = "store";
        color2.handler = "loadcolor2";
        cc.find("Canvas/color2").getComponent(cc.Button).clickEvents.push(color2);
        var color3 = new cc.Component.EventHandler();
        color3.target = this.node;
        color3.component = "store";
        color3.handler = "loadcolor3";
        cc.find("Canvas/color3").getComponent(cc.Button).clickEvents.push(color3);
        var color4 = new cc.Component.EventHandler();
        color4.target = this.node;
        color4.component = "store";
        color4.handler = "loadcolor4";
        cc.find("Canvas/color4").getComponent(cc.Button).clickEvents.push(color4);
        var color5 = new cc.Component.EventHandler();
        color5.target = this.node;
        color5.component = "store";
        color5.handler = "loadcolor5";
        cc.find("Canvas/color5").getComponent(cc.Button).clickEvents.push(color5);
        cc.find("Canvas/SignOut").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadSignout();
        }, this);
    };
    store.prototype.loadpowerup = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 60;
        if (this.money >= price) {
            this.money -= price;
            this.powerup++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/powerup').set(this.powerup);
            var a = this.powerup;
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadmute = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.mute++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/mute').set(this.mute);
            var a = this.mute;
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadsignal = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.signal++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/signal').set(this.signal);
            var a = this.signal;
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadlego = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 50;
        if (this.money >= price) {
            this.money -= price;
            this.lego++;
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/lego').set(this.lego);
            var a = this.lego;
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadbanana = function () {
        var price = 80;
        if (this.money >= price) {
            this.money -= price;
            this.banana++;
            console.log(this.banana);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/banana').set(this.banana);
            var a = this.banana;
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = a.toString();
            a = this.money;
            cc.find('Canvas/coins').getComponent(cc.Label).string = a.toString();
        }
    };
    store.prototype.loadcolor1 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 0;
        if (this.money >= price && this.color[1] == false) {
            this.money -= price;
            this.color[1] = true;
            this.nowcolor = 1;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color1/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color1/check').active = true;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if (this.color[1] == true) {
            this.nowcolor = 1;
            cc.find('Canvas/color1/check').active = true;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    };
    store.prototype.loadcolor2 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 150;
        if (this.money >= price && this.color[2] == false) {
            this.money -= price;
            this.color[2] = true;
            this.nowcolor = 2;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color2/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if (this.color[2] == true) {
            this.nowcolor = 2;
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    };
    store.prototype.loadcolor3 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 200;
        if (this.money >= price && this.color[3] == false) {
            this.money -= price;
            this.color[3] = true;
            this.nowcolor = 3;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color3/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if (this.color[3] == true) {
            this.nowcolor = 3;
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    };
    store.prototype.loadcolor4 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 250;
        if (this.money >= price && this.color[4] == false) {
            this.money -= price;
            this.color[4] = true;
            this.nowcolor = 4;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color4/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
        else if (this.color[4] == true) {
            this.nowcolor = 4;
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color5/check').active = false;
        }
    };
    store.prototype.loadcolor5 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 500;
        if (this.money >= price && this.color[5] == false) {
            this.money -= price;
            this.color[5] = true;
            this.nowcolor = 5;
            //console.log(this.color);
            firebase.database().ref('/users/' + this.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + this.uid + '/thing/color').set(this.color);
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            cc.find('Canvas/color5/price').getComponent(cc.Label).string = 'free';
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color2/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
        }
        else if (this.color[5] == true) {
            this.nowcolor = 5;
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/color1/check').active = false;
            cc.find('Canvas/color3/check').active = false;
            cc.find('Canvas/color4/check').active = false;
            cc.find('Canvas/color2/check').active = false;
        }
    };
    store.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        console.log("back");
        cc.sys.localStorage.setItem("coins", this.money);
        cc.sys.localStorage.setItem("lego", this.lego);
        cc.sys.localStorage.setItem("powerup", this.powerup);
        cc.sys.localStorage.setItem("banana", this.banana);
        cc.sys.localStorage.setItem("mute", this.mute);
        cc.sys.localStorage.setItem("signal", this.signal);
        cc.sys.localStorage.setItem("nowcolor", this.nowcolor);
        console.log(cc.sys.localStorage.getItem("nowcolor"));
        this.scheduleOnce(function () {
            cc.director.loadScene('menu');
        }, 0.5);
    };
    store = __decorate([
        ccclass
    ], store);
    return store;
}(cc.Component));
exports.default = store;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF5V0M7UUF2V0csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsYUFBTyxHQUFXLENBQUMsQ0FBQTtRQUNuQixVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBQ2hCLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFDbEIsV0FBSyxHQUFRLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDL0QsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNiLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBK1YvQixDQUFDO0lBNVZHLHFCQUFLLEdBQUw7UUFBQSxpQkEwR0M7UUF6R0csRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFD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QWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0RSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNqRDthQUNJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0MsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1B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Q0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBRTtZQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUF4V2dCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F5V3pCO0lBQUQsWUFBQztDQXpXRCxBQXlXQyxDQXpXa0MsRUFBRSxDQUFDLFNBQVMsR0F5VzlDO2tCQXpXb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RvcmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1vbmV5OiBudW1iZXIgPSAwO1xyXG4gICAgbGVnbzogbnVtYmVyID0gMDtcclxuICAgIGJhbmFuYTogbnVtYmVyID0gMDtcclxuICAgIHBvd2VydXA6IG51bWJlciA9IDBcclxuICAgIG11dGU6IG51bWJlciA9IDBcclxuICAgIHNpZ25hbDogbnVtYmVyID0gMFxyXG4gICAgY29sb3I6IGFueSA9IHsxOiB0cnVlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX07XHJcbiAgICBub3djb2xvcjogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgdWlkOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy51aWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubW9uZXkgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2luc1wiKTtcclxuICAgICAgICB0aGlzLmxlZ28gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZWdvXCIpO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBvd2VydXBcIik7XHJcbiAgICAgICAgdGhpcy5iYW5hbmEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiYW5hbmFcIik7XHJcbiAgICAgICAgdGhpcy5tdXRlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXV0ZVwiKTtcclxuICAgICAgICB0aGlzLnNpZ25hbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZ25hbFwiKTtcclxuICAgICAgICB0aGlzLm5vd2NvbG9yID0gIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vd2NvbG9yXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIikuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KGNbaV0pKSB0aGlzLmNvbG9yW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmNvbG9yW2ldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYSA9IHRoaXMubW9uZXk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYSA9IHRoaXMubGVnbztcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvbGVnby9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICBhID0gdGhpcy5iYW5hbmE7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhbmFuYS9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICBhID0gdGhpcy5wb3dlcnVwO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wb3dlcnVwL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgIGEgPSB0aGlzLm11dGU7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL211dGUvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYSA9IHRoaXMuc2lnbmFsO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zaWduYWwvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5ub3djb2xvciA9PSAxKSBjYy5maW5kKCdDYW52YXMvY29sb3IxL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMubm93Y29sb3IgPT0gMikgY2MuZmluZCgnQ2FudmFzL2NvbG9yMi9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vd2NvbG9yID09IDMpIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5ub3djb2xvciA9PSA0KSBjYy5maW5kKCdDYW52YXMvY29sb3I0L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMubm93Y29sb3IgPT0gNSkgY2MuZmluZCgnQ2FudmFzL2NvbG9yNS9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29sb3JbaV0pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcicgKyBpLnRvU3RyaW5nKCkgKyAnL3ByaWNlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnZnJlZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbC5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgbC5oYW5kbGVyID0gXCJsb2FkbGVnb1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbGVnby9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChsKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbmFuYSA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmFuYW5hLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBiYW5hbmEuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGJhbmFuYS5oYW5kbGVyID0gXCJsb2FkYmFuYW5hXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYW5hbmEvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmFuYW5hKTtcclxuXHJcbiAgICAgICAgbGV0IHBvd2VydXAgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHBvd2VydXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHBvd2VydXAuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIHBvd2VydXAuaGFuZGxlciA9IFwibG9hZHBvd2VydXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Bvd2VydXAvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocG93ZXJ1cCk7XHJcblxyXG4gICAgICAgIGxldCBtdXRlID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBtdXRlLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBtdXRlLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBtdXRlLmhhbmRsZXIgPSBcImxvYWRtdXRlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9tdXRlL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG11dGUpO1xyXG5cclxuICAgICAgICBsZXQgc2lnbmFsID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWduYWwudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ25hbC5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgc2lnbmFsLmhhbmRsZXIgPSBcImxvYWRzaWduYWxcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NpZ25hbC9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduYWwpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3IxID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjb2xvcjEudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbG9yMS5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgY29sb3IxLmhhbmRsZXIgPSBcImxvYWRjb2xvcjFcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yMSk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvcjIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbG9yMi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29sb3IyLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBjb2xvcjIuaGFuZGxlciA9IFwibG9hZGNvbG9yMlwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3IyXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3IyKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbG9yMyA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY29sb3IzLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjb2xvcjMuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xyXG4gICAgICAgIGNvbG9yMy5oYW5kbGVyID0gXCJsb2FkY29sb3IzXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9jb2xvcjNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjb2xvcjMpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3I0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjb2xvcjQudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNvbG9yNC5jb21wb25lbnQgPSBcInN0b3JlXCI7XHJcbiAgICAgICAgY29sb3I0LmhhbmRsZXIgPSBcImxvYWRjb2xvcjRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yNFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yNCk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvcjUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNvbG9yNS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY29sb3I1LmNvbXBvbmVudCA9IFwic3RvcmVcIjtcclxuICAgICAgICBjb2xvcjUuaGFuZGxlciA9IFwibG9hZGNvbG9yNVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3I1XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3I1KTtcclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduT3V0XCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2lnbm91dCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRwb3dlcnVwKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSA2MDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMucG93ZXJ1cCsrO1xyXG5cclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvcG93ZXJ1cCcpLnNldCh0aGlzLnBvd2VydXApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGE9IHRoaXMucG93ZXJ1cDtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3Bvd2VydXAvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGEgPSB0aGlzLm1vbmV5O1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkbXV0ZSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLm11dGUrKztcclxuXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL211dGUnKS5zZXQodGhpcy5tdXRlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhPSB0aGlzLm11dGU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdXRlL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5tb25leTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZHNpZ25hbCgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNzA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbCsrO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9zaWduYWwnKS5zZXQodGhpcy5zaWduYWwpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGE9IHRoaXMuc2lnbmFsO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2lnbmFsL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5tb25leTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZGxlZ28oKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IDUwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5sZWdvKys7XHJcblxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9sZWdvJykuc2V0KHRoaXMubGVnbyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYT0gdGhpcy5sZWdvO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbGVnby9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYSA9IHRoaXMubW9uZXk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvYWRiYW5hbmEoKSB7XHJcbiAgICAgICAgdmFyIHByaWNlID0gODA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhbmFuYSsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhbmFuYSk7XHJcblxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9iYW5hbmEnKS5zZXQodGhpcy5iYW5hbmEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGE9IHRoaXMuYmFuYW5hO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFuYW5hL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBhID0gdGhpcy5tb25leTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkY29sb3IxKCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSAwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvclsxXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yWzFdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3djb2xvciA9IDE7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvcHJpY2UnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdmcmVlJztcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMS9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMy9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I0L2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbG9yWzFdID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3djb2xvciA9IDE7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I1L2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZGNvbG9yMigpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gMTUwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvclsyXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yWzJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3djb2xvciA9IDI7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvcHJpY2UnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdmcmVlJztcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMi9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMy9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I0L2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbG9yWzJdID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3djb2xvciA9IDI7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IxL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I1L2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRjb2xvcjMoKXtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IDIwMDtcclxuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlICYmIHRoaXMuY29sb3JbM10gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclszXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y29sb3IgPSAzO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvY29pbnMnKS5zZXQodGhpcy5tb25leSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy90aGluZy9jb2xvcicpLnNldCh0aGlzLmNvbG9yKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IzL3ByaWNlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnZnJlZSc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IxL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjIvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I1L2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jb2xvclszXSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y29sb3IgPSAzO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IzL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMS9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjQvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNS9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkY29sb3I0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICB2YXIgcHJpY2UgPSAyNTA7XHJcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSAmJiB0aGlzLmNvbG9yWzRdID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JbNF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vd2NvbG9yID0gNDtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbG9yKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyB0aGlzLnVpZCArICcvdGhpbmcvY29sb3InKS5zZXQodGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9wcmljZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ2ZyZWUnO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3I0L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMS9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNS9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuY29sb3JbNF0gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2NvbG9yID0gNDtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMi9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IzL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGNvbG9yNSgpe1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHByaWNlID0gNTAwO1xyXG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvcls1XSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yWzVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub3djb2xvciA9IDU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb2xvcik7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIHRoaXMudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgdGhpcy51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvcHJpY2UnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICdmcmVlJztcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNS9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjEvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMi9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IzL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjQvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbG9yWzVdID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3djb2xvciA9IDU7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjUvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IxL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTaWdub3V0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJhY2tcIik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgdGhpcy5tb25leSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGVnb1wiLCB0aGlzLmxlZ28pO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBvd2VydXBcIiwgdGhpcy5wb3dlcnVwKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiYW5hbmFcIiwgdGhpcy5iYW5hbmEpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11dGVcIiwgdGhpcy5tdXRlKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWduYWxcIiwgdGhpcy5zaWduYWwpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vd2NvbG9yXCIsIHRoaXMubm93Y29sb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vd2NvbG9yXCIpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/start_scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73edcRU4k1F8JCNxOMYOUiu', 'start_scene');
// scripts/start_scene.ts

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
var start_scene = /** @class */ (function (_super) {
    __extends(start_scene, _super);
    function start_scene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    start_scene.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
        if (firebase.auth().currentUser.uid)
            this.uid = firebase.auth().currentUser.uid;
    };
    start_scene.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        cc.find("Canvas/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            cc.director.loadScene('menu');
        }, this);
        this.email_data = "";
        this.password_data = "";
        this.username = "";
        /*
                // var email = new cc.Component.EventHandler();
                // email.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                // email.component = "start_scene"
                // email.handler = "emailUpdate";
                // email.customEventData = "foobar";
                // cc.find("Canvas/Email").getComponent(cc.EditBox).textChanged.push(email);
        
                // var n = new cc.Component.EventHandler();
                // n.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                // n.component = "start_scene"
                // n.handler = "nameUpdate";
                // n.customEventData = "foobar";
                // cc.find("Canvas/Name").getComponent(cc.EditBox).textChanged.push(n);
        
                // var password = new cc.Component.EventHandler();
                // password.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                // password.component = "start_scene"
                // password.handler = "passwordUpdate";
                // password.customEventData = "foobar";
                // cc.find("Canvas/Password").getComponent(cc.EditBox).textChanged.push(password);
        */
        var signin = new cc.Component.EventHandler();
        signin.target = this.node;
        signin.component = "start_scene";
        signin.handler = "loadsignin";
        cc.find("Canvas/SignIn").getComponent(cc.Button).clickEvents.push(signin);
        var signup = new cc.Component.EventHandler();
        signup.target = this.node;
        signup.component = "start_scene";
        signup.handler = "loadsignup";
        cc.find("Canvas/SignUp").getComponent(cc.Button).clickEvents.push(signup);
    };
    /*
    // emailUpdate(text, editbox, customEventData) {
    //     this.email_data = text;
    //     //console.log(this.email_data);
    // }
    // nameUpdate(text, editbox, customEventData) {
    //     this.username = text;
    //     //console.log(this.email_data);
    // }
    // passwordUpdate(text, editbox, customEventData) {
    //     this.password_data = text;
    // }
    */
    start_scene.prototype.loadsignin = function () {
        var _this = this;
        this.password_data = cc.find("Canvas/Password").getComponent(cc.EditBox).string;
        this.email_data = cc.find("Canvas/Email").getComponent(cc.EditBox).string;
        //cc.audioEngine.playEffect(this.press, false);
        firebase.auth().signInWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            /*
                // firebase.database().ref('/users').once("value").then( (snapshot) => {
                    // if(snapshot.child(this.uid).exists() == false) {
                    //     var a = {};
                    //     var tmp = {};
                    //     tmp['coins'] = 0;
                    //     tmp['email'] = firebase.auth().currentUser.email;
                    //     tmp['highscore'] = 0;
                    //     console.log('name = ', this.username)
                    //     tmp['name'] = this.username;
                    //     var t = {'lego':0, 'banana': 0, 'color': {1: true, 2: false, 3: false, 4: false, 5: false}, 'powerup': 0, 'signal': 0, 'mute': 0}
                    //     tmp['thing'] = t;
                    //     a[this.uid] = tmp;
                    //     firebase.database().ref('/users/').update(a);
                    // }
                    // this.scheduleOnce(()=>{
            */
            _this.password_data = '';
            _this.email_data = '';
            cc.director.loadScene("menu");
            // }, 1);
            // });
        }).catch(function (error) {
            alert(error);
        });
    };
    start_scene.prototype.loadsignup = function () {
        var _this = this;
        this.username = cc.find("Canvas/Name").getComponent(cc.EditBox).string;
        this.password_data = cc.find("Canvas/Password").getComponent(cc.EditBox).string;
        this.email_data = cc.find("Canvas/Email").getComponent(cc.EditBox).string;
        //cc.audioEngine.playEffect(this.press, false);
        //console.log(this.email_data, this.password_data);
        console.log('name = ', this.username);
        if (this.username == '') {
            alert('Username cannot be empty.');
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(this.email_data, this.password_data).then(function (result) {
            // firebase.database().ref('/users').once("value").then( (snapshot)=> {
            // if(snapshot.child(result.uid).exists() == false) {
            var tmp = {};
            tmp['coins'] = 0;
            tmp['email'] = _this.email_data; //firebase.auth().currentUser.email;
            tmp['highscore'] = 0;
            tmp['name'] = _this.username;
            console.log('name = ', _this.username, _this.email_data);
            var t = { 'lego': 0, 'banana': 0, 'color': { 1: true, 2: false, 3: false, 4: false, 5: false }, 'powerup': 0, 'signal': 0, 'mute': 0 };
            tmp['thing'] = t;
            firebase.database().ref('/users/' + result.user.uid).set(tmp, function () {
                _this.loadsignin();
            });
            //     }
            // });
        }).catch(function (error) {
            alert(error);
        });
    };
    start_scene = __decorate([
        ccclass
    ], start_scene);
    return start_scene;
}(cc.Component));
exports.default = start_scene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3RhcnRfc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBcUlBLENBQUM7SUE5SEcsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNuRixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLDJDQUEyQztRQUMzQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXFCRTtRQUNNLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElB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LFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxSS9CO0lBQUQsa0JBQUM7Q0FySUQsQUFxSUMsQ0FySXdDLEVBQUUsQ0FBQyxTQUFTLEdBcUlwRDtrQkFySW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXJ0X3NjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBlbWFpbF9kYXRhOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZF9kYXRhOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgdWlkOiBzdHJpbmc7XHJcblxyXG4gICAgb25sb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICAgICAgaWYoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkgdGhpcy51aWQgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkO1xyXG4gICAgfVxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmFja1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiXCI7XHJcbi8qXHJcbiAgICAgICAgLy8gdmFyIGVtYWlsID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAvLyBlbWFpbC50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgLy8gZW1haWwuY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiXHJcbiAgICAgICAgLy8gZW1haWwuaGFuZGxlciA9IFwiZW1haWxVcGRhdGVcIjtcclxuICAgICAgICAvLyBlbWFpbC5jdXN0b21FdmVudERhdGEgPSBcImZvb2JhclwiO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvRW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnRleHRDaGFuZ2VkLnB1c2goZW1haWwpO1xyXG5cclxuICAgICAgICAvLyB2YXIgbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgLy8gbi50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgLy8gbi5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCJcclxuICAgICAgICAvLyBuLmhhbmRsZXIgPSBcIm5hbWVVcGRhdGVcIjtcclxuICAgICAgICAvLyBuLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9OYW1lXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0Q2hhbmdlZC5wdXNoKG4pO1xyXG5cclxuICAgICAgICAvLyB2YXIgcGFzc3dvcmQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8vIHBhc3N3b3JkLnRhcmdldCA9IHRoaXMubm9kZTsgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcclxuICAgICAgICAvLyBwYXNzd29yZC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCJcclxuICAgICAgICAvLyBwYXNzd29yZC5oYW5kbGVyID0gXCJwYXNzd29yZFVwZGF0ZVwiO1xyXG4gICAgICAgIC8vIHBhc3N3b3JkLmN1c3RvbUV2ZW50RGF0YSA9IFwiZm9vYmFyXCI7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9QYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkudGV4dENoYW5nZWQucHVzaChwYXNzd29yZCk7XHJcbiovXHJcbiAgICAgICAgbGV0IHNpZ25pbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2lnbmluLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaWduaW4uY29tcG9uZW50ID0gXCJzdGFydF9zY2VuZVwiO1xyXG4gICAgICAgIHNpZ25pbi5oYW5kbGVyID0gXCJsb2Fkc2lnbmluXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduSW5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduaW4pO1xyXG5cclxuICAgICAgICBsZXQgc2lnbnVwID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaWdudXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNpZ251cC5jb21wb25lbnQgPSBcInN0YXJ0X3NjZW5lXCI7XHJcbiAgICAgICAgc2lnbnVwLmhhbmRsZXIgPSBcImxvYWRzaWdudXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25VcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ251cCk7IFxyXG5cclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAvLyBlbWFpbFVwZGF0ZSh0ZXh0LCBlZGl0Ym94LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgIC8vICAgICB0aGlzLmVtYWlsX2RhdGEgPSB0ZXh0O1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2codGhpcy5lbWFpbF9kYXRhKTtcclxuICAgIC8vIH1cclxuICAgIC8vIG5hbWVVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgdGhpcy51c2VybmFtZSA9IHRleHQ7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcGFzc3dvcmRVcGRhdGUodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wYXNzd29yZF9kYXRhID0gdGV4dDtcclxuICAgIC8vIH1cclxuICAgICovXHJcbiAgICBsb2Fkc2lnbmluKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9IGNjLmZpbmQoXCJDYW52YXMvUGFzc3dvcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICB0aGlzLmVtYWlsX2RhdGEgPSBjYy5maW5kKFwiQ2FudmFzL0VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5lbWFpbF9kYXRhLCB0aGlzLnBhc3N3b3JkX2RhdGEpLnRoZW4oIChyZXN1bHQpID0+IHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAvLyBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzJykub25jZShcInZhbHVlXCIpLnRoZW4oIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoc25hcHNob3QuY2hpbGQodGhpcy51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdG1wID0ge307XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG1wWydjb2lucyddID0gMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0bXBbJ2VtYWlsJ10gPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWw7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdG1wWydoaWdoc2NvcmUnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRtcFsnbmFtZSddID0gdGhpcy51c2VybmFtZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdCA9IHsnbGVnbyc6MCwgJ2JhbmFuYSc6IDAsICdjb2xvcic6IHsxOiB0cnVlLCAyOiBmYWxzZSwgMzogZmFsc2UsIDQ6IGZhbHNlLCA1OiBmYWxzZX0sICdwb3dlcnVwJzogMCwgJ3NpZ25hbCc6IDAsICdtdXRlJzogMH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB0bXBbJ3RoaW5nJ10gPSB0O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFbdGhpcy51aWRdID0gdG1wO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJykudXBkYXRlKGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRfZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWxfZGF0YSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB9LCAxKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2Fkc2lnbnVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBjYy5maW5kKFwiQ2FudmFzL05hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICB0aGlzLnBhc3N3b3JkX2RhdGEgPSBjYy5maW5kKFwiQ2FudmFzL1Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5lbWFpbF9kYXRhID0gY2MuZmluZChcIkNhbnZhcy9FbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVtYWlsX2RhdGEsIHRoaXMucGFzc3dvcmRfZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICBpZih0aGlzLnVzZXJuYW1lID09ICcnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIGNhbm5vdCBiZSBlbXB0eS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKHRoaXMuZW1haWxfZGF0YSwgdGhpcy5wYXNzd29yZF9kYXRhKS50aGVuKCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMnKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KT0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHNuYXBzaG90LmNoaWxkKHJlc3VsdC51aWQpLmV4aXN0cygpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcFsnY29pbnMnXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWydlbWFpbCddID0gdGhpcy5lbWFpbF9kYXRhOyAvL2ZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ2hpZ2hzY29yZSddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0bXBbJ25hbWUnXSA9IHRoaXMudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25hbWUgPSAnLCB0aGlzLnVzZXJuYW1lLCB0aGlzLmVtYWlsX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0geydsZWdvJzowLCAnYmFuYW5hJzogMCwgJ2NvbG9yJzogezE6dHJ1ZSwgMjogZmFsc2UsIDM6IGZhbHNlLCA0OiBmYWxzZSwgNTogZmFsc2V9LCAncG93ZXJ1cCc6IDAsICdzaWduYWwnOiAwLCAnbXV0ZSc6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wWyd0aGluZyddID0gdDtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyByZXN1bHQudXNlci51aWQpLnNldCh0bXAsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRzaWduaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bird_map_init.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77477pwviNK9rGDv30oF7rf', 'bird_map_init');
// scripts/bird_map_init.ts

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
exports.BirdBase = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdBase = /** @class */ (function (_super) {
    __extends(BirdBase, _super);
    function BirdBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = 6;
        _this.strip = 1;
        _this.coin = null;
        return _this;
    }
    BirdBase.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -600);
    };
    BirdBase.prototype.onDestroy = function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
    };
    BirdBase.prototype.start = function () {
        this.node.anchorX = 0;
        this.node.anchorY = 0;
        var map = this.node.getComponent(cc.TiledMap);
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip; //每次更新的section 色票都要一樣
        this.base = 1 + 6 * this.strip;
        //console.log("base color gid: " + this.base);
        var body = this.node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        body.fixedRotation = true;
        var collider = this.node.addComponent(cc.PhysicsBoxCollider);
        collider.offset = cc.v2(960, 240);
        collider.size = cc.size(5, 1000);
        collider.sensor = true;
        collider.tag = 1000; // init next map on contact
        collider.apply();
        var sz = map.getTileSize();
        console.log(sz);
        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        if (this.node.name == "bird0") {
            for (var i = 0; i < layerSz.width; i++) {
                for (var j = 0; j < layerSz.height; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if (FloorTile.gid != 0) {
                        // console.log("draw ground box for tile (" + i + ", " + j + ")");
                        FloorTile.node.group = "ground";
                        // console.log("created tile with " + FloorTile.node.group)
                        FloorTile.gid = this.base;
                        var body = FloorTile.node.addComponent(cc.RigidBody);
                        body.type = cc.RigidBodyType.Static;
                        body.fixedRotation = true;
                        var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                        collider.offset = cc.v2(sz.width / 2, sz.height / 2);
                        collider.size = sz;
                        collider.apply();
                    }
                }
            }
        }
        else {
            for (var i = 0; i < layerSz.width; i++) {
                for (var j = 0; j < layerSz.height; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = this.base;
                }
            }
            console.log("tile init complete, digging path(s)");
            var pathrange = [2, 17]; // path should be range between j = 2 and j = 17
            for (var i = 0; i < layerSz.width; i++) {
                // set gid to 0 for path
                var range = Math.floor(Math.random() * 3);
                var up_range_min = Math.max(2, pathrange[0] - range);
                var down_range_min = Math.min(17, pathrange[1] + range);
                range = Math.floor(Math.random() * 3);
                var up_range_max = Math.min(pathrange[1] - range, pathrange[0] + range);
                var down_range_max = Math.max(pathrange[0] + range, pathrange[1] - range);
                var down_bound = Math.floor(Math.random() * (down_range_max - down_range_min)) + down_range_min;
                var up_bound = Math.floor(Math.random() * (up_range_max - up_range_min)) + up_range_min;
                if (down_bound - up_bound < 4) {
                    down_bound++;
                    up_bound--;
                }
                console.log(up_bound, down_bound);
                for (var k = up_bound; k < down_bound; k++)
                    floor.getTiledTileAt(i, k, true).gid = 0;
                pathrange[0] = up_bound;
                pathrange[1] = down_bound;
            }
            var section_count = cc.find('Canvas/root/bird_player').getComponent('bird_player').section_count;
            for (var i = 0; i < layerSz.width; i++) {
                for (var j = 0; j < layerSz.height; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if (FloorTile.gid != 0) {
                        FloorTile.node.group = "ground";
                        // console.log("created tile with " + FloorTile.node.group)
                        FloorTile.gid = this.base;
                        var body = FloorTile.node.addComponent(cc.RigidBody);
                        body.type = cc.RigidBodyType.Static;
                        body.fixedRotation = true;
                        var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                        collider.offset = cc.v2(sz.width / 2, sz.height / 2);
                        collider.size = sz;
                        collider.apply();
                    }
                }
                var max_allowed = 5;
                for (var j = 3; j < layerSz.height - 3; j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if (FloorTile.gid == 0) {
                        if (floor.getTiledTileAt(i, j - 3, true).gid != 0)
                            continue;
                        var nocoin = Math.floor(Math.random() * 8);
                        if (!nocoin) {
                            //init coin
                            max_allowed--;
                            var c = cc.instantiate(this.coin);
                            c.x = section_count * 1920 + FloorTile.node.x;
                            c.y = FloorTile.node.y;
                            console.log("coin at " + c.x, c.y);
                            //c.active = true;
                            cc.find("Canvas/root/mapworld/coin_bubble").addChild(c);
                            if (!max_allowed)
                                break;
                        }
                        else {
                            if (floor.getTiledTileAt(i, j + 3, true).gid != 0)
                                break;
                        }
                    }
                }
            }
        }
    };
    __decorate([
        property(cc.Prefab)
    ], BirdBase.prototype, "coin", void 0);
    BirdBase = __decorate([
        ccclass
    ], BirdBase);
    return BirdBase;
}(cc.Component));
exports.BirdBase = BirdBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmlyZF9tYXBfaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBOEIsNEJBQVk7SUFBMUM7UUFBQSxxRUEySUM7UUF6SVcsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLFVBQUksR0FBYyxJQUFJLENBQUM7O0lBcUkzQixDQUFDO0lBbklHLHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLHNEQUFzRDtRQUN0RCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDckUsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMs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OzRCQUN4RCxJQUFHLENBQUMsV0FBVztnQ0FBRSxNQUFNO3lCQUMxQjs2QkFBSTs0QkFDRCxJQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0NBQUUsTUFBTTt5QkFDekQ7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQXBJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBTmQsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQTJJcEI7SUFBRCxlQUFDO0NBM0lELEFBMklDLENBM0k2QixFQUFFLENBQUMsU0FBUyxHQTJJekM7QUEzSVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCaXJkQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlOiBudW1iZXIgPSA2O1xyXG4gICAgcHJpdmF0ZSBzdHJpcDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY29pbjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNjAwKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwO1xyXG4gICAgICAgIHZhciBtYXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTWFwKTtcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDsgICAgICAgICAvL+avj+asoeabtOaWsOeahHNlY3Rpb24g6Imy56Wo6YO96KaB5LiA5qijXHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJhc2UgY29sb3IgZ2lkOiBcIiArIHRoaXMuYmFzZSk7XHJcblxyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNvbGxpZGVyID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDk2MCwgMjQwKTtcclxuICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg1LCAxMDAwKTtcclxuICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIGNvbGxpZGVyLnRhZyA9IDEwMDA7ICAgICAgICAvLyBpbml0IG5leHQgbWFwIG9uIGNvbnRhY3RcclxuICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICB2YXIgc3ogPSBtYXAuZ2V0VGlsZVNpemUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzeik7XHJcblxyXG4gICAgICAgIHZhciBmbG9vciA9IG1hcC5nZXRMYXllcihcImdyb3VuZFwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJTeiA9IGZsb29yLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiYmlyZDBcIil7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRyYXcgZ3JvdW5kIGJveCBmb3IgdGlsZSAoXCIgKyBpICsgXCIsIFwiICsgaiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcImdyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdGlsZSB3aXRoIFwiICsgRmxvb3JUaWxlLm5vZGUuZ3JvdXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZXIgPSBGbG9vclRpbGUubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoc3oud2lkdGgvMiwgc3ouaGVpZ2h0LzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gc3o7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpbGUgaW5pdCBjb21wbGV0ZSwgZGlnZ2luZyBwYXRoKHMpXCIpXHJcbiAgICAgICAgICAgIHZhciBwYXRocmFuZ2UgPSBbMiwgMTddOyAgICAgICAgLy8gcGF0aCBzaG91bGQgYmUgcmFuZ2UgYmV0d2VlbiBqID0gMiBhbmQgaiA9IDE3XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJTei53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBnaWQgdG8gMCBmb3IgcGF0aFxyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBfcmFuZ2VfbWluID0gTWF0aC5tYXgoMiwgcGF0aHJhbmdlWzBdLXJhbmdlKTtcclxuICAgICAgICAgICAgICAgIHZhciBkb3duX3JhbmdlX21pbiA9IE1hdGgubWluKDE3LCBwYXRocmFuZ2VbMV0rcmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICAgICAgICAgIHZhciB1cF9yYW5nZV9tYXggPSBNYXRoLm1pbihwYXRocmFuZ2VbMV0tcmFuZ2UsIHBhdGhyYW5nZVswXStyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG93bl9yYW5nZV9tYXggPSBNYXRoLm1heChwYXRocmFuZ2VbMF0rcmFuZ2UsIHBhdGhyYW5nZVsxXS1yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG93bl9ib3VuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChkb3duX3JhbmdlX21heCAtIGRvd25fcmFuZ2VfbWluKSkgKyBkb3duX3JhbmdlX21pbjtcclxuICAgICAgICAgICAgICAgIHZhciB1cF9ib3VuZCA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodXBfcmFuZ2VfbWF4IC0gdXBfcmFuZ2VfbWluKSkgKyB1cF9yYW5nZV9taW47XHJcbiAgICAgICAgICAgICAgICBpZihkb3duX2JvdW5kIC0gdXBfYm91bmQgPCA0KXtcclxuICAgICAgICAgICAgICAgICAgICBkb3duX2JvdW5kKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBfYm91bmQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXBfYm91bmQsIGRvd25fYm91bmQpO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrID0gdXBfYm91bmQ7IGsgPCBkb3duX2JvdW5kOyBrKyspIGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGssIHRydWUpLmdpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBwYXRocmFuZ2VbMF0gPSB1cF9ib3VuZDtcclxuICAgICAgICAgICAgICAgIHBhdGhyYW5nZVsxXSA9IGRvd25fYm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uX2NvdW50ID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvYmlyZF9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ2JpcmRfcGxheWVyJykuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyU3oud2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJncm91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHRpbGUgd2l0aCBcIiArIEZsb29yVGlsZS5ub2RlLmdyb3VwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVyID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHN6LndpZHRoLzIsIHN6LmhlaWdodC8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuc2l6ZSA9IHN6O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtYXhfYWxsb3dlZCA9IDU7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAzOyBqIDwgbGF5ZXJTei5oZWlnaHQtMzsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgai0zLCB0cnVlKS5naWQgIT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2NvaW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIW5vY29pbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2luaXQgY29pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4X2FsbG93ZWQtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgRmxvb3JUaWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMueSA9IEZsb29yVGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvaW4gYXQgXCIgKyBjLngsIGMueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9jb2luX2J1YmJsZVwiKS5hZGRDaGlsZChjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFtYXhfYWxsb3dlZCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiszLCB0cnVlKS5naWQgIT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/arm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39f30jqkF9PyIAExa3ovAKr', 'arm');
// scripts/arm.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var arm = /** @class */ (function (_super) {
    __extends(arm, _super);
    function arm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banana_Speed = 100;
        _this.anim = null;
        _this.physicManager = null;
        return _this;
        // update (dt) {}
    }
    arm.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -500);
    };
    arm.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
    };
    arm.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.name == "parent") {
            if (this.node.name == 'banana') {
                this.node.y - 20;
                this.anim.play('banana'); // knock
                this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.banana_Speed, 0);
                cc.audioEngine.playEffect(this.parent_step_on_banana, false);
                setTimeout(function () {
                    _this.node.destroy();
                }, 1000);
            }
            else if (this.node.name == 'lego') {
                this.anim.play('lego'); // knock   
                other.node.color = new cc.Color(127.5, 127.5, 127.5);
                cc.audioEngine.playEffect(this.step_on_lego, false);
                setTimeout(function () {
                    _this.node.destroy();
                }, 1000);
            }
        }
    };
    __decorate([
        property()
    ], arm.prototype, "banana_Speed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], arm.prototype, "parent_step_on_banana", void 0);
    __decorate([
        property(cc.AudioClip)
    ], arm.prototype, "step_on_lego", void 0);
    arm = __decorate([
        ccclass
    ], arm);
    return arm;
}(cc.Component));
exports.default = arm;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXJtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBcURDO1FBakRHLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBU25CLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBQzFCLG1CQUFhLEdBQXNCLElBQUksQ0FBQzs7UUFzQ2hELGlCQUFpQjtJQUNyQixDQUFDO0lBckNHLG9CQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBRUQsbUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDRCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBbkMsaUJBdUJDO1FBdEJHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO1lBQzNCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUEsUUFBUTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUU3RCxVQUFVLENBQUM7b0JBRVAsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7aUJBQUssSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsV0FBVztnQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRW5ELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELFVBQVUsQ0FBQztvQkFDUCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDWjtTQUNKO0lBRUwsQ0FBQztJQTlDRDtRQURDLFFBQVEsRUFBRTs2Q0FDZ0I7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztzREFDWTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNHO0lBVlQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXFEdkI7SUFBRCxVQUFDO0NBckRELEFBcURDLENBckRnQyxFQUFFLENBQUMsU0FBUyxHQXFENUM7a0JBckRvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXJtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KClcbiAgICBiYW5hbmFfU3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcGFyZW50X3N0ZXBfb25fYmFuYW5hOmNjLkF1ZGlvQ2xpcDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc3RlcF9vbl9sZWdvOmNjLkF1ZGlvQ2xpcDtcblxuXG4gICAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuICAgIHByaXZhdGUgcGh5c2ljTWFuYWdlcjogY2MuUGh5c2ljc01hbmFnZXIgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBoeXNpY01hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyICgwLCAtNTAwKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7Ly/norDmkp5cbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09IFwicGFyZW50XCIpeyBcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09ICdiYW5hbmEnKXtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtIDIwO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdiYW5hbmEnKTsvLyBrbm9ja1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKC10aGlzLmJhbmFuYV9TcGVlZCwwKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucGFyZW50X3N0ZXBfb25fYmFuYW5hLCBmYWxzZSk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnbGVnbycpe1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCdsZWdvJyk7Ly8ga25vY2sgICBcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmNvbG9yPW5ldyBjYy5Db2xvcigxMjcuNSwgMTI3LjUsIDEyNy41KTsgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zdGVwX29uX2xlZ28sIGZhbHNlKTsgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------
