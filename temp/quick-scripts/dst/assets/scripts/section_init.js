
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
        _this.spider = null;
        _this.coin_pre = null;
        _this.lv = 0;
        return _this;
    }
    Section.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
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
                        collider.size = cc.size(47.8, 48);
                    else
                        collider.size = sz;
                    collider.apply();
                }
            }
        }
        // console.log("tile init complete, marking mounds")
        // for(j = 3; j < layerSz.height; j++){
        var FloorTile = floor.getTiledTileAt(layerSz.width - 1, 7, true);
        if (FloorTile.gid) {
            FloorTile.node.group = "mound";
            var col = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
            col.size = cc.size(47.8, 48);
            col.apply();
            // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        }
        // }
        for (var i = 1; i < layerSz.width - 1; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid != 0 && ((floor.getTiledTileAt(i + 1, j, true).gid == 0 && floor.getTiledTileAt(i + 1, j + 1, true).gid != 0) || (floor.getTiledTileAt(i - 1, j, true).gid == 0 && floor.getTiledTileAt(i - 1, j + 1, true).gid != 0))) {
                    FloorTile.node.group = "mound";
                    var col = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
                    col.size = cc.size(47.8, 48);
                    col.apply();
                    // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
                }
            }
        }
        var obj_list = map.getObjectGroup("colors").getObjects();
        this.player_col = 6 * this.strip + cc.find('Canvas/root/player').getComponent('player').color;
        console.log("bias towards " + this.player_col);
        obj_list.forEach(function (obj) {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            var cannot_hide = Math.floor(Math.random() * 3);
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
        // sharp obstacle
        var section_count = cc.find('Canvas/root/player').getComponent('player').section_count;
        var sharp_list = { 1: 'sharp', 2: 'sharp2', 3: 'sharp3', 4: 'sharp4' };
        var map_layer = map.getLayer("enemy");
        var layer_size = map_layer.getLayerSize();
        var flag = new Array(layer_size.width);
        for (var i = 0; i < layer_size.width; i++) {
            flag[i] = new Array(layer_size.height);
        }
        for (var i = 0; i < layer_size.width; i++) {
            for (var j = 0; j < layer_size.height; j++) {
                var tile = map_layer.getTiledTileAt(i, j, true);
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
                }
            }
        }
        // spider
        map_layer = map.getLayer("enemy");
        layer_size = map_layer.getLayerSize();
        var flag = new Array(layer_size.width);
        for (var i = 0; i < layer_size.width; i++) {
            for (var j = 0; j < layer_size.height; j++) {
                var tile = map_layer.getTiledTileAt(i, j, true);
                if (tile.gid == 265 + 61) {
                    var spider_pre = cc.instantiate(this.spider);
                    console.log(spider_pre);
                    spider_pre.x = section_count * 1920 + tile.node.x;
                    spider_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld").addChild(spider_pre);
                }
            }
        }
        map_layer.enabled = false;
        //enemy init
        var lv_diff = cc.find("Canvas/root/player").getComponent('player').section_count;
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
                cc.find("Canvas/root/Enemy_collection").addChild(enemy);
            }
        }
        //coin 不知為甚麼只有第一個可以成功  後面都說instantiate null
        var offset = lv_diff * 1920 + ((lv_diff == 0) ? 400 : 0);
        for (i = 0; i < Math.random() * 11; i++) {
            var money = cc.instantiate(this.coin_pre);
            money.x = Math.random() * 1920 + offset;
            money.y = 500;
            cc.find("Canvas/root/powerups").addChild(money);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "searchlight", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "sharp", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "spider", void 0);
    __decorate([
        property(cc.Prefab)
    ], Section.prototype, "coin_pre", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQXVOQztRQXJOVyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFbkIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUFxTTNCLENBQUM7SUFuTUcsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFT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LFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNPO0lBaEJsQixPQUFPO1FBRG5CLE9BQU87T0FDSyxPQUFPLENBdU5uQjtJQUFELGNBQUM7Q0F2TkQsQUF1TkMsQ0F2TjRCLEVBQUUsQ0FBQyxTQUFTLEdBdU54QztBQXZOWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU2VjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlOiBudW1iZXIgPSA2O1xyXG4gICAgcHJpdmF0ZSBzdHJpcDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGxheWVyX2NvbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VhcmNobGlnaHQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNoYXJwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzcGlkZXI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNvaW5fcHJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbHY6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTUwMCk7XHJcbiAgICAgICAgdGhpcy5sdiA9IHBhcnNlSW50KHRoaXMubm9kZS5uYW1lLnJlcGxhY2UoJ3NlY3Rpb24nLCAnJykpO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JYID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWSA9IDA7XHJcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApO1xyXG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwOyAgICAgICAgIC8v5q+P5qyh5pu05paw55qEc2VjdGlvbiDoibLnpajpg73opoHkuIDmqKNcclxuICAgICAgICB0aGlzLmJhc2UgPSAxICsgNip0aGlzLnN0cmlwO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmFzZSBjb2xvciBnaWQ6IFwiICsgdGhpcy5iYXNlKTtcclxuXHJcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB2YXIgY29sbGlkZXIgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoOTYwLCAyNDApO1xyXG4gICAgICAgIGNvbGxpZGVyLnNpemUgPSBjYy5zaXplKDUsIDEwMDApO1xyXG4gICAgICAgIGNvbGxpZGVyLnNlbnNvciA9IHRydWU7XHJcbiAgICAgICAgY29sbGlkZXIudGFnID0gMTAwMDsgICAgICAgIC8vIGluaXQgbmV4dCBtYXAgb24gY29udGFjdFxyXG4gICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcblxyXG4gICAgICAgIHZhciBzeiA9IG1hcC5nZXRUaWxlU2l6ZSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN6KTtcclxuXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgZmxvb3IgPSBtYXAuZ2V0TGF5ZXIoXCJncm91bmRcIik7XHJcbiAgICAgICAgdmFyIGxheWVyU3ogPSBmbG9vci5nZXRMYXllclNpemUoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJTei53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHJhdyBncm91bmQgYm94IGZvciB0aWxlIChcIiArIGkgKyBcIiwgXCIgKyBqICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJncm91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdGlsZSB3aXRoIFwiICsgRmxvb3JUaWxlLm5vZGUuZ3JvdXApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBGbG9vclRpbGUubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZXIgPSBGbG9vclRpbGUubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mihzei53aWR0aC8yLCBzei5oZWlnaHQvMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgai0xLCB0cnVlKS5naWQpIGNvbGxpZGVyLnNpemUgPSBjYy5zaXplKDQ3LjgsIDQ4KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbGxpZGVyLnNpemUgPSBzejtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGlsZSBpbml0IGNvbXBsZXRlLCBtYXJraW5nIG1vdW5kc1wiKVxyXG4gICAgICAgIC8vIGZvcihqID0gMzsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChsYXllclN6LndpZHRoLTEsIDcsIHRydWUpO1xyXG4gICAgICAgIGlmKEZsb29yVGlsZS5naWQpe1xyXG4gICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICAgICAgdmFyIGNvbCA9IEZsb29yVGlsZS5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjb2wuc2l6ZSA9IGNjLnNpemUoNDcuOCwgNDgpO1xyXG4gICAgICAgICAgICBjb2wuYXBwbHkoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaHJpbmsgY29sbGlkZXIgc2l6ZSBvZiB0aWxlKFwiICsgMzkgKyBcIiwgXCIgKyA3ICsgXCIpIHRvIFwiKyBjb2wuc2l6ZS53aWR0aCArIFwiLCBcIisgY29sLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBsYXllclN6LndpZHRoLTE7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBsYXllclN6LmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgIT0gMCAmJiAoKGZsb29yLmdldFRpbGVkVGlsZUF0KGkrMSwgaiwgdHJ1ZSkuZ2lkID09IDAgJiYgZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSsxLCBqKzEsIHRydWUpLmdpZCAhPSAwKSB8fCAoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaS0xLCBqLCB0cnVlKS5naWQgPT0gMCAmJiBmbG9vci5nZXRUaWxlZFRpbGVBdChpLTEsIGorMSwgdHJ1ZSkuZ2lkICE9IDApKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IEZsb29yVGlsZS5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5zaXplID0gY2Muc2l6ZSg0Ny44LCA0OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaHJpbmsgY29sbGlkZXIgc2l6ZSBvZiB0aWxlKFwiICsgMzkgKyBcIiwgXCIgKyA3ICsgXCIpIHRvIFwiKyBjb2wuc2l6ZS53aWR0aCArIFwiLCBcIisgY29sLnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9ial9saXN0ID0gbWFwLmdldE9iamVjdEdyb3VwKFwiY29sb3JzXCIpLmdldE9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLnBsYXllcl9jb2wgPSA2KnRoaXMuc3RyaXAgKyBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpLmNvbG9yXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWFzIHRvd2FyZHMgXCIgKyB0aGlzLnBsYXllcl9jb2wpO1xyXG4gICAgICAgIG9ial9saXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeF9zaXplID0gb2JqLndpZHRoIC8gNDg7XHJcbiAgICAgICAgICAgIHZhciB5X3NpemUgPSBvYmouaGVpZ2h0IC8gNDg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY2Fubm90X2hpZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICAgICAgdmFyIGNvbCA9IDA7XHJcbiAgICAgICAgICAgIGlmKGNhbm5vdF9oaWRlKSBjb2wgPSB0aGlzLmJhc2UgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcclxuICAgICAgICAgICAgZWxzZSBjb2wgPSB0aGlzLnBsYXllcl9jb2w7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai54LCBvYmoueSwgeF9zaXplLCB5X3NpemUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNyZWF0ZSBjb2xvcmVkIGJsb2NrIHdpdGggZ2lkIFwiICsgdGhpcy5iYXNlICsgY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSBvYmoueCAvIDQ4OyBpIDwgKG9iai54IC8gNDggKyB4X3NpemUpOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGogPSAxMCAtIChvYmoueS80OCk7IGogPCAoMTAgLSAob2JqLnkvNDgpICsgeV9zaXplKTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLmdpZCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzaGFycCBvYnN0YWNsZVxyXG4gICAgICAgIHZhciBzZWN0aW9uX2NvdW50ID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIHZhciBzaGFycF9saXN0ID0gezE6ICdzaGFycCcsIDI6ICdzaGFycDInLCAzOiAnc2hhcnAzJywgNDogJ3NoYXJwNCd9O1xyXG4gICAgICAgIHZhciBtYXBfbGF5ZXIgPSBtYXAuZ2V0TGF5ZXIoXCJlbmVteVwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJfc2l6ZSA9IG1hcF9sYXllci5nZXRMYXllclNpemUoKTtcclxuICAgICAgICB2YXIgZmxhZyA9IG5ldyBBcnJheShsYXllcl9zaXplLndpZHRoKTtcclxuICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxheWVyX3NpemUud2lkdGg7IGkrKykge1xyXG4gICAgICAgICAgICBmbGFnW2ldID0gbmV3IEFycmF5KGxheWVyX3NpemUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyX3NpemUud2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBsYXllcl9zaXplLmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciB0aWxlID0gbWFwX2xheWVyLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYodGlsZS5naWQgPT0gODc4ICsgNjEgJiYgZmxhZ1tpXVtqXSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnW2ldW2pdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyAgLy8xIHN0YXRpYywgMjM0IG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGFycF9wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoYXJwKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9wcmUubmFtZSA9IHNoYXJwX2xpc3RbcmFkXTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9wcmUueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfcHJlLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvc2hhcnBcIikuYWRkQ2hpbGQoc2hhcnBfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIG0gPSBpICsgMTsgOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGVfID0gbWFwX2xheWVyLmdldFRpbGVkVGlsZUF0KG0sIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlXy5naWQgIT0gODc4ICsgNjEpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnW21dW2pdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJwX3AgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoYXJwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfcC5uYW1lID0gc2hhcnBfbGlzdFtyYWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF9wLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGVfLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfcC55ID0gdGlsZV8ubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvc2hhcnBcIikuYWRkQ2hpbGQoc2hhcnBfcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzcGlkZXJcclxuICAgICAgICBtYXBfbGF5ZXIgPSBtYXAuZ2V0TGF5ZXIoXCJlbmVteVwiKTtcclxuICAgICAgICBsYXllcl9zaXplID0gbWFwX2xheWVyLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIHZhciBmbGFnID0gbmV3IEFycmF5KGxheWVyX3NpemUud2lkdGgpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJfc2l6ZS5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IG1hcF9sYXllci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKHRpbGUuZ2lkID09IDI2NSArIDYxKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BpZGVyX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3BpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzcGlkZXJfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGlkZXJfcHJlLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHNwaWRlcl9wcmUueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZFwiKS5hZGRDaGlsZChzcGlkZXJfcHJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXBfbGF5ZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL2VuZW15IGluaXRcclxuICAgICAgICB2YXIgbHZfZGlmZiA9IGNjLmZpbmQoXCJDYW52YXMvcm9vdC9wbGF5ZXJcIikuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5zZWN0aW9uX2NvdW50O1xyXG5cclxuICAgICAgICBpZihsdl9kaWZmICYmIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImRheVwiKXtcclxuICAgICAgICAgICAgdmFyIHJhbmdlX2FyciA9IFszNjAsIDMwMCwgMzAwLCAyNTAsIDIwMCwgMTUwLCAxMjAsIDEwMF07ICAgICAgLy8gMTAwIG9yIDgwIGlmIG9uZSBsaWdodCBzcGF3bmVkLCA2MCBvciA1MCBpZiB0d28sIDMwIG9yIDIwIGlmIHRocmVlXHJcbiAgICAgICAgICAgIHZhciBsaWdodGNvdW50ID0gMDtcclxuICAgICAgICAgICAgaWYobHZfZGlmZiA+PSAxMil7XHJcbiAgICAgICAgICAgICAgICBsaWdodGNvdW50ID0gMztcclxuICAgICAgICAgICAgfWVsc2UgaWYobHZfZGlmZiA+PSA2KXtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Y291bnQgPSAyICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsdl9kaWZmIC0gNikpKT8gMSA6IDA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGx2X2RpZmYgPj0gMil7XHJcbiAgICAgICAgICAgICAgICBsaWdodGNvdW50ID0gMSArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobHZfZGlmZiAtIDIpKSk/IDEgOiAwO1xyXG4gICAgICAgICAgICB9ZWxzZSBsaWdodGNvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKSBsaWdodGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gbHZfZGlmZiAqIDE5MjAgKyAoKGx2X2RpZmYgPT0gMCk/IDQwMCA6IDApO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlnaHRjb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHJhbmdlX2FyclsobGlnaHRjb3VudC0xKSAqIDIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlYXJjaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGlmKGVuZW15LmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpKWVuZW15LmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnJhbmdlID0gcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5zZXRQb3NpdGlvbihvZmZzZXQgKyAoMTkyMC8obGlnaHRjb3VudCsxKSkqaSArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNDAwKSAtMjAwKSwgMjAwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9FbmVteV9jb2xsZWN0aW9uXCIpLmFkZENoaWxkKGVuZW15KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvaW4g5LiN55+l54K655Sa6bq85Y+q5pyJ56ys5LiA5YCL5Y+v5Lul5oiQ5YqfICDlvozpnaLpg73oqqppbnN0YW50aWF0ZSBudWxsXHJcbiAgICAgICAgdmFyIG9mZnNldCA9IGx2X2RpZmYgKiAxOTIwICsgKChsdl9kaWZmID09IDApPyA0MDAgOiAwKTtcclxuICAgICAgICBmb3IoaSA9MDtpPE1hdGgucmFuZG9tKCkqMTE7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1vbmV5PWNjLmluc3RhbnRpYXRlKHRoaXMuY29pbl9wcmUpO1xyXG4gICAgICAgICAgICBtb25leS54PU1hdGgucmFuZG9tKCkqMTkyMCtvZmZzZXQ7XHJcbiAgICAgICAgICAgIG1vbmV5Lnk9NTAwO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvcG93ZXJ1cHNcIikuYWRkQ2hpbGQobW9uZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19