
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
        this.node.x += 150 * dt;
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
            // die
            this.node.getChildByName('eye').active = false;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmlyZF9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBCLHdCQUFZO0lBQXRDO1FBQUEscUVBMEhDO1FBdkhHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRWhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQU0sd0dBQXdHO1FBQ3hJLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFMUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQiw0QkFBNEI7UUFDNUIsZ0JBQVUsR0FBUSxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDdkYsRUFBRSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsU0FBUztZQUN0RSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVB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SSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7WUFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELG1CQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFwSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFqQmYsSUFBSTtRQURoQixPQUFPO09BQ0ssSUFBSSxDQTBIaEI7SUFBRCxXQUFDO0NBMUhELEFBMEhDLENBMUh5QixFQUFFLENBQUMsU0FBUyxHQTBIckM7QUExSFksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCaXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXBsaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjdGlvbjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmV0YWc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlY3Rpb25fY291bnQ6IG51bWJlciA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29sb3I6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcclxuICAgIGJhc2U6IG51bWJlciA9IDA7XHJcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcclxuXHJcbiAgICAvLyBjb2xvciBpbmZvIG9mIG5ld190aWxlc2V0XHJcbiAgICBjb2xvcl9saXN0OiBhbnkgPSB7NzogXCIjMmIzYTY3XCIsODogXCIjNDk2YTgxXCIsOTogXCIjNjY5OTliXCIsIDEwOiBcIiNiM2FmOGZcIiwgMTE6IFwiI2ZmYzU4MlwiLFxyXG4gICAgMTM6XCIjMWMzMTQ0XCIsIDE0OiBcIiM1OTZmNjJcIiwgMTU6IFwiIzdlYTE2YlwiLDE2OiBcIiNjM2Q4OThcIiwxNzogXCIjNzAxNjFkXCIsXHJcbiAgICAxOSA6XCIjZWRlYmQzXCIsIDIwIDpcIiNlZGViZDNcIiwgMjEgOlwiI2RhNDE2N1wiLCAyMiA6XCIjZjRkMzVlXCIsIDIzIDpcIiNmNzg2NjRcIiwgXHJcbiAgICAyNSAgOlwiIzU2MmMyY1wiLCAyNiA6XCIjZjI1NDJkXCIsIDI3IDpcIiNmNWRmYmJcIiwgMjggOlwiIzBlOTU5NVwiLCAyOSA6XCIjMTI3NDc0XCIsIFxyXG4gICAgMzEgOlwiIzhlOWFhZlwiLCAzMiA6XCIjY2JjMGQzXCIsIDMzIDpcIiNlZmQzZDdcIiwgMzQgOlwiI2ZlZWFmYVwiLCAzNSA6XCIjZGVlMmZmXCIgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgc2V0Y29sb3IoKSB7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLXBsYXllciBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JhbmRvbSBjaG9vc2UgcGxheWVyIGNvbG9yXHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gNip0aGlzLnN0cmlwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFfdHJhY2soKTtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSAxNTAgKiBkdDtcclxuICAgICAgICBcclxuICAgICAgICAvLy0tLS0tLS0tc2NvcmUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IChNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpID4gdGhpcy5zY29yZSkgPyBNYXRoLnJvdW5kKHRoaXMubm9kZS54IC8gMzUpIDogdGhpcy5zY29yZTtcclxuICAgICAgICB0aGlzLlNjb3JlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmFfdHJhY2soKXtcclxuICAgICAgICB0aGlzLlNjb3JldGFnLnggPSBNYXRoLm1heCh0aGlzLm5vZGUueCAtIDUwMCwgLTM4OS43NjQpO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDwgMTAwKSB0aGlzLmNhbWVyYS54ID0gMDtcclxuICAgICAgICBlbHNlIHRoaXMuY2FtZXJhLnggPSB0aGlzLm5vZGUueCAtIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJhbmQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHRfc2VjdGlvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueCA9IDE5MjAgKiB0aGlzLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0X3NlY3Rpb24ueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcGxpc3QuYWRkQ2hpbGQobmV4dF9zZWN0aW9uKTtcclxuICAgICAgICAgICAgfSAvL2Vsc2UgY29uc29sZS5sb2codGhpcy5ub2RlLngsIHRoaXMuc2VjdGlvbl9jb3VudCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwICsgXCIgKFwiICsgdG91Y2gueCArIFwiLCBcIiArIHRvdWNoLnkgKyBcIilcIilcclxuICAgICAgICAgICAgLy8gZGllXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucil7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpeyAgICBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19