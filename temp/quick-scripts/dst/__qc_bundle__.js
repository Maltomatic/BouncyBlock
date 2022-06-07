
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
require('./assets/scripts/player');
require('./assets/scripts/root');
require('./assets/scripts/section_init');

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.base = 6;
        _this.strip = 1;
        return _this;
    }
    Section.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -500);
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
        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        for (var i = 0; i < layerSz.width; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid == 1) {
                    FloorTile.gid = this.base;
                    // console.log("draw ground box for tile (" + i + ", " + j + ")");
                    FloorTile.node.group = "ground";
                    console.log("created tile with " + FloorTile.node.group);
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
        console.log("tile init complete, marking mounds");
        for (var i = 1; i < layerSz.width - 1; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid != 0 && (floor.getTiledTileAt(i + 1, j, true).gid == 0 || floor.getTiledTileAt(i - 1, j, true).gid == 0)) {
                    FloorTile.node.group = "mound";
                    console.log("marked mound at tile (" + i + ", " + j + ")");
                }
            }
        }
        var obj_list = map.getObjectGroup("colors").getObjects();
        obj_list.forEach(function (obj) {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            var color = Math.floor(Math.random() * 5);
            // console.log(obj.x, obj.y, x_size, y_size);
            // console.log("Create colored block with gid " + this.base + color);
            for (i = obj.x / 48; i < (obj.x / 48 + x_size); i++) {
                for (j = 10 - (obj.y / 48); j < (10 - (obj.y / 48) + y_size); j++) {
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = _this.base + color;
                    var collider = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
                    collider.tag = 10;
                }
            }
        });
    };
    Section = __decorate([
        ccclass
    ], Section);
    return Section;
}(cc.Component));
exports.default = Section;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBeUZDO1FBdkZXLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFzRjlCLENBQUM7SUFwRkcsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0Msc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUNyRSxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUFBLGlCQXNFQztRQXJFRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8s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cG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBiYXNlOiBudW1iZXIgPSA2O1xuICAgIHByaXZhdGUgc3RyaXA6IG51bWJlciA9IDE7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MDApO1xuICAgIH1cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0KCl7XG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JYID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwO1xuICAgICAgICB2YXIgbWFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZE1hcCk7XG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwOyAgICAgICAgIC8v5q+P5qyh5pu05paw55qEc2VjdGlvbiDoibLnpajpg73opoHkuIDmqKNcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmFzZSBjb2xvciBnaWQ6IFwiICsgdGhpcy5iYXNlKTtcblxuICAgICAgICB2YXIgYm9keSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG4gICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBjb2xsaWRlciA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcbiAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoOTYwLCAyNDApO1xuICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg1LCAxMDAwKTtcbiAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gdHJ1ZTtcbiAgICAgICAgY29sbGlkZXIudGFnID0gMTAwMDsgICAgICAgIC8vIGluaXQgbmV4dCBtYXAgb24gY29udGFjdFxuICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xuXG4gICAgICAgIHZhciBzeiA9IG1hcC5nZXRUaWxlU2l6ZSgpO1xuXG4gICAgICAgIHZhciBmbG9vciA9IG1hcC5nZXRMYXllcihcImdyb3VuZFwiKTtcbiAgICAgICAgdmFyIGxheWVyU3ogPSBmbG9vci5nZXRMYXllclNpemUoKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyU3oud2lkdGg7IGkrKyl7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHJhdyBncm91bmQgYm94IGZvciB0aWxlIChcIiArIGkgKyBcIiwgXCIgKyBqICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwiZ3JvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCB0aWxlIHdpdGggXCIgKyBGbG9vclRpbGUubm9kZS5ncm91cClcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBGbG9vclRpbGUubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlciA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mihzei53aWR0aC8yLCBzei5oZWlnaHQvMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLnNpemUgPSBzejtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aWxlIGluaXQgY29tcGxldGUsIG1hcmtpbmcgbW91bmRzXCIpXG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBsYXllclN6LndpZHRoLTE7IGkrKyl7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgIT0gMCAmJiAoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSsxLCBqLCB0cnVlKS5naWQgPT0gMCB8fCBmbG9vci5nZXRUaWxlZFRpbGVBdChpLTEsIGosIHRydWUpLmdpZCA9PSAwKSl7XG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJtb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmtlZCBtb3VuZCBhdCB0aWxlIChcIiArIGkgKyBcIiwgXCIgKyBqICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvYmpfbGlzdCA9IG1hcC5nZXRPYmplY3RHcm91cChcImNvbG9yc1wiKS5nZXRPYmplY3RzKCk7XG4gICAgICAgIG9ial9saXN0LmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICAgICAgdmFyIHhfc2l6ZSA9IG9iai53aWR0aCAvIDQ4O1xuICAgICAgICAgICAgdmFyIHlfc2l6ZSA9IG9iai5oZWlnaHQgLyA0ODtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoueCwgb2JqLnksIHhfc2l6ZSwgeV9zaXplKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ3JlYXRlIGNvbG9yZWQgYmxvY2sgd2l0aCBnaWQgXCIgKyB0aGlzLmJhc2UgKyBjb2xvcik7XG5cbiAgICAgICAgICAgIGZvcihpID0gb2JqLnggLyA0ODsgaSA8IChvYmoueCAvIDQ4ICsgeF9zaXplKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDEwIC0gKG9iai55LzQ4KTsgaiA8ICgxMCAtIChvYmoueS80OCkgKyB5X3NpemUpOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2UgKyBjb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZXIgPSBGbG9vclRpbGUubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIudGFnID0gMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
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
        _this.Score = null;
        _this.Color = null;
        _this.sec_list = [];
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
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
    Player.prototype.onLoad = function () {
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
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
            }
            if (other.node.group == 'mound') {
                if (other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x && !touch.y) {
                    this.node.getChildByName('eye').active = false;
                    // this.last_x = this.node.x;
                }
            }
        }
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        //a bug happens when the color of mound is same as the color of player, not solved yet 
        if ( /*this.last_x > this.node.x + 5 || this.last_x < this.node.x - 5 ||*/this.getComponent(cc.RigidBody).linearVelocity.y != 0)
            this.node.getChildByName('eye').active = true;
        else if (other.node.group == 'mound') {
            if (other.node.getComponent(cc.TiledTile).gid == this.color + this.base && other.tag == 10) {
                this.node.getChildByName('eye').active = true;
            }
        }
    };
    Player.prototype.start = function () {
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2];
        this.score = 0;
        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 1 + 6 * this.strip;
        this.color = Math.floor(Math.random() * 5);
        //console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
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
        console.log(this.prev_dir + "fly state: " + this.fly_state);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQWdOQztRQTdNRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBR2hCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFFLGdEQUFnRDtRQUN4RSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDLENBQU0sd0dBQXdHO1FBRXhJLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQiw0QkFBNEI7UUFDNUIsZ0JBQVUsR0FBUSxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVM7WUFDdkYsRUFBRSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxTQUFT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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQW5CZixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBZ05sQjtJQUFELGFBQUM7Q0FoTkQsQUFnTkMsQ0FoTjJCLEVBQUUsQ0FBQyxTQUFTLEdBZ052QztBQWhOWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFwbGlzdDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHNlYzA6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzZWMxOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc2VjMjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgQ29sb3I6IGNjLlNwcml0ZSA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgc2VjX2xpc3QgPSBbXTtcblxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcHJldl9kaXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcbiAgICBwcml2YXRlIHN0aWNrOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzZWN0aW9uX2NvdW50ID0gMDsgICAgICAvLyBvbiBjb250YWN0IHdpdGggbWFya2VyLCBpZiBzZWN0aW9uX2NvdW50ICogMTkyMCA8IHRoaXMubm9kZS54OiBpbml0IG5leHQgc2VjdGlvbiBhbmQgc2VjdGlvbl9jb3VudCArK1xuXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgICBjb2xvcjogbnVtYmVyID0gMDtcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcbiAgICBiYXNlOiBudW1iZXIgPSAwO1xuICAgIGxhc3RfeDogbnVtYmVyID0gMC4wO1xuXG4gICAgLy8gY29sb3IgaW5mbyBvZiBuZXdfdGlsZXNldFxuICAgIGNvbG9yX2xpc3Q6IGFueSA9IHs3OiBcIiMyYjNhNjdcIiw4OiBcIiM0OTZhODFcIiw5OiBcIiM2Njk5OWJcIiwgMTA6IFwiI2IzYWY4ZlwiLCAxMTogXCIjZmZjNTgyXCIsXG4gICAgMTM6XCIjMWMzMTQ0XCIsIDE0OiBcIiM1OTZmNjJcIiwgMTU6IFwiIzdlYTE2YlwiLDE2OiBcIiNjM2Q4OThcIiwxNzogXCIjNzAxNjFkXCIsXG4gICAgMTkgOlwiI2VkZWJkM1wiLCAyMCA6XCIjZWRlYmQzXCIsIDIxIDpcIiNkYTQxNjdcIiwgMjIgOlwiI2Y0ZDM1ZVwiLCAyMyA6XCIjZjc4NjY0XCIsIFxuICAgIDI1ICA6XCIjNTYyYzJjXCIsIDI2IDpcIiNmMjU0MmRcIiwgMjcgOlwiI2Y1ZGZiYlwiLCAyOCA6XCIjMGU5NTk1XCIsIDI5IDpcIiMxMjc0NzRcIiwgXG4gICAgMzEgOlwiIzhlOWFhZlwiLCAzMiA6XCIjY2JjMGQzXCIsIDMzIDpcIiNlZmQzZDdcIiwgMzQgOlwiI2ZlZWFmYVwiLCAzNSA6XCIjZGVlMmZmXCIgfVxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xuICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQgPSAwO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwKTtcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhpdCBub2RlIHdpdGggY29sb3IgXCIgKyBvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCk7XG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAxMDAwKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gdGhpcy5zZWN0aW9uX2NvdW50KjE5MjApe1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpbml0IG5leHQgc2VjdGlvblwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25fY291bnQrKztcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyYW5kKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dF9zZWN0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZWNfbGlzdFtyYW5kXSk7XG4gICAgICAgICAgICAgICAgbmV4dF9zZWN0aW9uLnggPSAxOTIwICogdGhpcy5zZWN0aW9uX2NvdW50O1xuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcGxpc3QuYWRkQ2hpbGQobmV4dF9zZWN0aW9uKTtcbiAgICAgICAgICAgIH0gLy9lbHNlIGNvbnNvbGUubG9nKHRoaXMubm9kZS54LCB0aGlzLnNlY3Rpb25fY291bnQpO1xuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0aWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJykge1xuICAgICAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgdG91Y2gueCAmJiAhdG91Y2gueSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhc3RfeCA9IHRoaXMubm9kZS54O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcbiAgICAgICAgLy9hIGJ1ZyBoYXBwZW5zIHdoZW4gdGhlIGNvbG9yIG9mIG1vdW5kIGlzIHNhbWUgYXMgdGhlIGNvbG9yIG9mIHBsYXllciwgbm90IHNvbHZlZCB5ZXQgXG4gICAgICAgIGlmKC8qdGhpcy5sYXN0X3ggPiB0aGlzLm5vZGUueCArIDUgfHwgdGhpcy5sYXN0X3ggPCB0aGlzLm5vZGUueCAtIDUgfHwqLyB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UgJiYgb3RoZXIudGFnID09IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmRpciA9IDA7XG4gICAgICAgIHRoaXMuc2VjX2xpc3QgPSBbdGhpcy5zZWMwLCB0aGlzLnNlYzEsIHRoaXMuc2VjMl07XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS1wbGF5ZXIgY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vcmFuZG9tIGNob29zZSBwbGF5ZXIgY29sb3JcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7XG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XG4gICAgICAgIHRoaXMuY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xuICAgICAgICB2YXIgY29sb3Jfc3RyID0gdGhpcy5jb2xvcl9saXN0W3RoaXMuYmFzZSArICB0aGlzLmNvbG9yXTtcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tc3BhcmtsZSBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgdGhpcy5jYW1lcmFfdHJhY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5kaXIgKiAyMDAgKiBkdDtcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnByZXZfZGlyICogMC40O1xuICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAtMTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0aWNrXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5wcmV2X2RpciAqIDAuNDtcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gKHRoaXMuZGlyID49IDApID8gMSA6IC0xO1xuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XG4gICAgICAgIC8vLS0tLS0tLS0tLXNwYXJrbGUgZW1pc3Npb24gcmF0ZSBpcyAwIHdoZW4gZGlkbnQgbW92ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGlmKHRoaXMuZGlyIT0wfHxkeT4xMCkgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0xMDA7XG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vLS0tLS0tLS0tcGxheWVyIHNwaW4tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IDEpIHRoaXMuc3Bpbl9yaWdodCgpO1xuICAgICAgICBlbHNlIGlmKChkeSA+IDEwKSAmJiB0aGlzLmRpciA9PSAtMSkgdGhpcy5zcGluX2xlZnQoKTtcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuYW5nbGUgIT0gMCkgdGhpcy5ub2RlLmFuZ2xlPTA7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgLy8tLS0tLS0tLXNjb3JlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLnNjb3JlID0gKE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgPiB0aGlzLnNjb3JlKSA/IE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgOiB0aGlzLnNjb3JlO1xuICAgICAgICB0aGlzLlNjb3JlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIH1cbiAgICBzcGluX3JpZ2h0KCl7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSAtPSAxMjtcbiAgICB9XG4gICAgc3Bpbl9sZWZ0KCl7XG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSAxMjtcbiAgICB9XG5cbiAgICBjYW1lcmFfdHJhY2soKXtcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgJiYgIXRoaXMuZGlyKSByZXR1cm47XG5cbiAgICAgICAgaWYodGhpcy5ub2RlLnggPCAxMDApIHRoaXMuY2FtZXJhLnggPSAwO1xuICAgICAgICBlbHNlIHRoaXMuY2FtZXJhLnggPSB0aGlzLm5vZGUueCAtIDEwMDtcbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuc3BhY2Upe1xuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkubGVmdCl7XG4gICAgICAgICAgICB0aGlzLmRpciA9IC0xO1xuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkucmlnaHQpe1xuICAgICAgICAgICAgdGhpcy5kaXIgPSAxO1xuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5wKXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xuICAgICAgICB9ZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5yKXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25LZXlVcChldmVudCl7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSAwOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAganVtcCgpeyAgICBcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcbiAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZXZfZGlyICsgXCJmbHkgc3RhdGU6IFwiICsgdGhpcy5mbHlfc3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==
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
    root.prototype.start = function () {
        this.color_strip = 1 + Math.floor(Math.random() * 5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEIsd0JBQVk7SUFBdEM7UUFBQSxxRUFZQztRQVhHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQVc1QixDQUFDO0lBVEcsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJELHNEQUFzRDtRQUN0RCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDdEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEksQ0FBQztJQVZRLElBQUk7UUFEaEIsT0FBTztPQUNLLElBQUksQ0FZaEI7SUFBRCxXQUFDO0NBWkQsQUFZQyxDQVp5QixFQUFFLENBQUMsU0FBUyxHQVlyQztBQVpZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3Mgcm9vdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgY29sb3Jfc3RyaXA6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jb2xvcl9zdHJpcCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcblxuICAgICAgICAvL3NldCBiYWNrZ3JvdW5kIGNvbG9yIGFjY29yZGluZyB0byBkaWZmZXJlbnQgc3RyaXBzLiBcbiAgICAgICAgdmFyIHNreUNvbG9yTGlzdCA9IFswLCAzMCwzMCw2MCwwLCAzMF1cbiAgICAgICAgY2MuZGlyZWN0b3Iuc2V0Q2xlYXJDb2xvcihjYy5jb2xvcihza3lDb2xvckxpc3RbdGhpcy5jb2xvcl9zdHJpcF0sIHNreUNvbG9yTGlzdFt0aGlzLmNvbG9yX3N0cmlwXSwgc2t5Q29sb3JMaXN0W3RoaXMuY29sb3Jfc3RyaXBdKSk7XG5cbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------
