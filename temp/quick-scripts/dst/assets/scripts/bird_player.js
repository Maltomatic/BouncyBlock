
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
        _this.Color = null;
        _this.die_audio = null;
        _this.player_jump = null;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.speed = 150;
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
        // update (dt) {}
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
        this.score = 0;
    };
    Bird.prototype.update = function (dt) {
        this.camera_track();
        this.node.x += this.speed * dt;
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    };
    Bird.prototype.camera_track = function () {
        this.Scoretag.x = Math.max(this.node.x - 500, -389.764);
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
                var rand = Math.floor(Math.random() * 3);
                //console.log(rand);
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
            this.scheduleOnce(function () {
                cc.director.loadScene("lose");
            }, 0.3);
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
            cc.audioEngine.pauseAll();
            cc.director.pause();
        }
        else if (event.keyCode == cc.macro.KEY.r) {
            cc.audioEngine.resumeAll();
            cc.director.resume();
        }
    };
    Bird.prototype.jump = function () {
        cc.audioEngine.playEffect(this.player_jump, false);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 200);
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
        property(cc.Sprite)
    ], Bird.prototype, "Color", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bird.prototype, "die_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bird.prototype, "player_jump", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmlyZF9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBCLHdCQUFZO0lBQXRDO1FBQUEscUVBa0pDO1FBL0lHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR3hCLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUUxQixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFNLHdHQUF3RztRQUN4SSxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDNUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQiw0QkFBNEI7UUFDNUIsZ0JBQVUsR0FBUSxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDdkYsRUFBRSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVB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LENBQUMsQ0FBQyxFQUFDO1lBQ3JDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUE1SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FDUztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNXO0lBdEJ6QixJQUFJO1FBRGhCLE9BQU87T0FDSyxJQUFJLENBa0poQjtJQUFELFdBQUM7Q0FsSkQsQUFrSkMsQ0FsSnlCLEVBQUUsQ0FBQyxTQUFTLEdBa0pyQztBQWxKWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBCaXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXBsaXN0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2VjdGlvbjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBTY29yZXRhZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIENvbG9yOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBkaWVfYXVkaW8gOiBjYy5BdWRpb0NsaXAgPSBudWxsOyBcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICAgIHBsYXllcl9qdW1wIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHByaXZhdGUgc2VjdGlvbl9jb3VudDogbnVtYmVyID0gMDsgICAgICAvLyBvbiBjb250YWN0IHdpdGggbWFya2VyLCBpZiBzZWN0aW9uX2NvdW50ICogMTkyMCA8IHRoaXMubm9kZS54OiBpbml0IG5leHQgc2VjdGlvbiBhbmQgc2VjdGlvbl9jb3VudCArK1xuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAxNTA7XG4gICAgY29sb3I6IG51bWJlciA9IDA7XG4gICAgc3RyaXA6IG51bWJlciA9IDA7XG4gICAgYmFzZTogbnVtYmVyID0gMDtcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcblxuICAgIC8vIGNvbG9yIGluZm8gb2YgbmV3X3RpbGVzZXRcbiAgICBjb2xvcl9saXN0OiBhbnkgPSB7NzogXCIjMmIzYTY3XCIsODogXCIjNDk2YTgxXCIsOTogXCIjNjY5OTliXCIsIDEwOiBcIiNiM2FmOGZcIiwgMTE6IFwiI2ZmYzU4MlwiLFxuICAgIDEzOlwiIzFjMzE0NFwiLCAxNDogXCIjNTk2ZjYyXCIsIDE1OiBcIiM3ZWExNmJcIiwxNjogXCIjYzNkODk4XCIsMTc6IFwiIzcwMTYxZFwiLFxuICAgIDE5IDpcIiNlZGViZDNcIiwgMjAgOlwiI2VkZWJkM1wiLCAyMSA6XCIjZGE0MTY3XCIsIDIyIDpcIiNmNGQzNWVcIiwgMjMgOlwiI2Y3ODY2NFwiLCBcbiAgICAyNSAgOlwiIzU2MmMyY1wiLCAyNiA6XCIjZjI1NDJkXCIsIDI3IDpcIiNmNWRmYmJcIiwgMjggOlwiIzBlOTU5NVwiLCAyOSA6XCIjMTI3NDc0XCIsIFxuICAgIDMxIDpcIiM4ZTlhYWZcIiwgMzIgOlwiI2NiYzBkM1wiLCAzMyA6XCIjZWZkM2Q3XCIsIDM0IDpcIiNmZWVhZmFcIiwgMzUgOlwiI2RlZTJmZlwiIH1cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHNldGNvbG9yKCkge1xuICAgICAgICAvLy0tLS0tLS0tLS0tcGxheWVyIGNvbG9yLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwO1xuICAgICAgICB0aGlzLmJhc2UgPSA2KnRoaXMuc3RyaXA7XG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5iYXNlICsgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpKTtcbiAgICAgICAgdmFyIGNvbG9yX3N0ciA9IHRoaXMuY29sb3JfbGlzdFt0aGlzLmJhc2UgKyB0aGlzLmNvbG9yXTtcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQgPSAwO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuY2FtZXJhX3RyYWNrKCk7XG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgXG4gICAgICAgIC8vLS0tLS0tLS1zY29yZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy5zY29yZSA9IChNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpID4gdGhpcy5zY29yZSkgPyBNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpIDogdGhpcy5zY29yZTtcbiAgICAgICAgdGhpcy5TY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIH1cblxuICAgIGNhbWVyYV90cmFjaygpe1xuICAgICAgICB0aGlzLlNjb3JldGFnLnggPSBNYXRoLm1heCh0aGlzLm5vZGUueCAtIDUwMCwgLTM4OS43NjQpO1xuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XG4gICAgICAgIGVsc2UgdGhpcy5jYW1lcmEueCA9IHRoaXMubm9kZS54IC0gMTAwO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XG4gICAgICAgIHZhciB0b3VjaCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaXQgbm9kZSB3aXRoIGNvbG9yIFwiICsgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQpO1xuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGl0IG1hcmtlclwiKTtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID49IHRoaXMuc2VjdGlvbl9jb3VudCoxOTIwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgKj0gMS4xO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbl9jb3VudCsrO1xuICAgICAgICAgICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJhbmQpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY3Rpb24pO1xuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBsaXN0LmFkZENoaWxkKG5leHRfc2VjdGlvbik7XG4gICAgICAgICAgICB9IC8vZWxzZSBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5zZWN0aW9uX2NvdW50KTtcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCArIFwiIChcIiArIHRvdWNoLnggKyBcIiwgXCIgKyB0b3VjaC55ICsgXCIpXCIpXG4gICAgICAgICAgICAvLyBkaWVlXG4gICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9zZVwiKTtcbiAgICAgICAgICAgIH0sIDAuMyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaWVfcGFydGljbGUoKVxuICAgIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZV9hdWRpbywgZmFsc2UpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xuICAgICAgICAgICAgZXhwbG9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcbiAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xuICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbG9yJykuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnApe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgICAgIH1lbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGp1bXAoKXsgICAgXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5ZXJfanVtcCwgZmFsc2UpOyBcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMjAwKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19