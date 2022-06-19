
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
        _this.banana_pre = null;
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
        if (cc.director.getScene().name == "test" || cc.director.getScene().name == "multi")
            this.player_col = 6 * this.strip + cc.find('Canvas/root/player').getComponent(((cc.director.getScene().name == 'multi') ? 'player_multi' : 'player')).color;
        else if (cc.director.getScene().name == "day")
            this.player_col = 6 * this.strip + cc.find('Canvas/root/player').getComponent('player_day').color;
        //console.log("bias towards " + this.player_col);
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
                console.log(tile.gid);
                if (tile.gid == 268 + 61) {
                    var c = cc.instantiate(this.coin_pre);
                    c.x = section_count * 1920 + tile.node.x;
                    c.y = tile.node.y;
                    //c.active = true;
                    cc.find("Canvas/root/mapworld/coin_bubble").addChild(c);
                }
                else if (tile.gid == 225 + 61) {
                    console.log('herereeeeee');
                    var rad = 1 + Math.floor(Math.random() * 2);
                    var b = new cc.Node;
                    if (rad == 1)
                        b = cc.instantiate(this.banana_pre);
                    else
                        b = cc.instantiate(this.lego_pre);
                    b.x = section_count * 1920 + tile.node.x;
                    b.y = tile.node.y;
                    //c.active = true;
                    cc.find("Canvas/root/mapworld/coin_bubble").addChild(b);
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
    ], Section.prototype, "banana_pre", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQXFTQztRQW5TVyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVuQixRQUFFLEdBQVcsQ0FBQyxDQUFDOztJQTJRM0IsQ0FBQztJQXpRRyx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUNoRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxzREFBc0Q7UUFDdEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJ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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNPO0lBeEJsQixPQUFPO1FBRG5CLE9BQU87T0FDSyxPQUFPLENBcVNuQjtJQUFELGNBQUM7Q0FyU0QsQUFxU0MsQ0FyUzRCLEVBQUUsQ0FBQyxTQUFTLEdBcVN4QztBQXJTWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgU2VjdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlOiBudW1iZXIgPSA2O1xyXG4gICAgcHJpdmF0ZSBzdHJpcDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcGxheWVyX2NvbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VhcmNobGlnaHQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNoYXJwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNoYXJwX2Rvd246IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNwaWRlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY29pbl9wcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxlZ29fcHJlOiBjYy5QcmVmYWI9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFuYW5hX3ByZTogY2MuUHJlZmFiPW51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsdjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmdyYXZpdHkgPSBjYy52MigwLCAtNTAwKTtcclxuICAgICAgICB0aGlzLmx2ID0gcGFyc2VJbnQodGhpcy5ub2RlLm5hbWUucmVwbGFjZSgnc2VjdGlvbicsICcnKSk7XHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JZID0gMDtcclxuICAgICAgICB2YXIgbWFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZE1hcCk7XHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7ICAgICAgICAgLy/mr4/mrKHmm7TmlrDnmoRzZWN0aW9uIOiJsuelqOmDveimgeS4gOaoo1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJiYXNlIGNvbG9yIGdpZDogXCIgKyB0aGlzLmJhc2UpO1xyXG5cclxuICAgICAgICB2YXIgYm9keSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mig5NjAsIDI0MCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoNSwgMTAwMCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gdHJ1ZTtcclxuICAgICAgICBjb2xsaWRlci50YWcgPSAxMDAwOyAgICAgICAgLy8gaW5pdCBuZXh0IG1hcCBvbiBjb250YWN0XHJcbiAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgdmFyIHN6ID0gbWFwLmdldFRpbGVTaXplKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3opO1xyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHZhciBmbG9vciA9IG1hcC5nZXRMYXllcihcImdyb3VuZFwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJTeiA9IGZsb29yLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkcmF3IGdyb3VuZCBib3ggZm9yIHRpbGUgKFwiICsgaSArIFwiLCBcIiArIGogKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcImdyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlZCB0aWxlIHdpdGggXCIgKyBGbG9vclRpbGUubm9kZS5ncm91cClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlciA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHN6LndpZHRoLzIsIHN6LmhlaWdodC8yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLTEsIHRydWUpLmdpZCkgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoNDcuOCwgNDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29sbGlkZXIuc2l6ZSA9IHN6O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aWxlIGluaXQgY29tcGxldGUsIG1hcmtpbmcgbW91bmRzXCIpXHJcbiAgICAgICAgLy8gZm9yKGogPSAzOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGxheWVyU3oud2lkdGgtMSwgNywgdHJ1ZSk7XHJcbiAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCl7XHJcbiAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJtb3VuZFwiO1xyXG4gICAgICAgICAgICB2YXIgY29sID0gRmxvb3JUaWxlLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIGNvbC5zaXplID0gY2Muc2l6ZSg0Ny44LCA0OCk7XHJcbiAgICAgICAgICAgIGNvbC5hcHBseSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNocmluayBjb2xsaWRlciBzaXplIG9mIHRpbGUoXCIgKyAzOSArIFwiLCBcIiArIDcgKyBcIikgdG8gXCIrIGNvbC5zaXplLndpZHRoICsgXCIsIFwiKyBjb2wuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGxheWVyU3oud2lkdGgtMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCAhPSAwICYmICgoZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSsxLCBqLCB0cnVlKS5naWQgPT0gMCAmJiBmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGorMSwgdHJ1ZSkuZ2lkICE9IDApIHx8IChmbG9vci5nZXRUaWxlZFRpbGVBdChpLTEsIGosIHRydWUpLmdpZCA9PSAwICYmIGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaisxLCB0cnVlKS5naWQgIT0gMCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gRmxvb3JUaWxlLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLnNpemUgPSBjYy5zaXplKDQ3LjgsIDQ4KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNocmluayBjb2xsaWRlciBzaXplIG9mIHRpbGUoXCIgKyAzOSArIFwiLCBcIiArIDcgKyBcIikgdG8gXCIrIGNvbC5zaXplLndpZHRoICsgXCIsIFwiKyBjb2wuc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2JqX2xpc3QgPSBtYXAuZ2V0T2JqZWN0R3JvdXAoXCJjb2xvcnNcIikuZ2V0T2JqZWN0cygpO1xyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PVwidGVzdFwiIHx8IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PVwibXVsdGlcIil0aGlzLnBsYXllcl9jb2wgPSA2KnRoaXMuc3RyaXAgKyBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoKChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyk/ICdwbGF5ZXJfbXVsdGknIDogJ3BsYXllcicpKS5jb2xvclxyXG4gICAgICAgIGVsc2UgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09XCJkYXlcIil0aGlzLnBsYXllcl9jb2wgPSA2KnRoaXMuc3RyaXAgKyBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcl9kYXknKS5jb2xvcjtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmlhcyB0b3dhcmRzIFwiICsgdGhpcy5wbGF5ZXJfY29sKTtcclxuICAgICAgICBvYmpfbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgdmFyIHhfc2l6ZSA9IG9iai53aWR0aCAvIDQ4O1xyXG4gICAgICAgICAgICB2YXIgeV9zaXplID0gb2JqLmhlaWdodCAvIDQ4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNhbm5vdF9oaWRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSAwO1xyXG4gICAgICAgICAgICBpZihjYW5ub3RfaGlkZSkgY29sID0gdGhpcy5iYXNlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgICAgIGVsc2UgY29sID0gdGhpcy5wbGF5ZXJfY29sO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoueCwgb2JqLnksIHhfc2l6ZSwgeV9zaXplKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDcmVhdGUgY29sb3JlZCBibG9jayB3aXRoIGdpZCBcIiArIHRoaXMuYmFzZSArIGNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihpID0gb2JqLnggLyA0ODsgaSA8IChvYmoueCAvIDQ4ICsgeF9zaXplKTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqID0gMTAgLSAob2JqLnkvNDgpOyBqIDwgKDEwIC0gKG9iai55LzQ4KSArIHlfc2l6ZSk7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSBjb2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2hhcnAgb2JzdGFjbGXjgIFzcGlkZXLjgIFzaGFycF9kb3duXHJcbiAgICAgICAgdmFyIHNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09XCJ0ZXN0XCIgfHwgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09XCJtdWx0aVwiKSBzZWN0aW9uX2NvdW50ID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCgoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtdWx0aScpPyAncGxheWVyX211bHRpJyA6ICdwbGF5ZXInKSkuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICBlbHNlIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PVwiZGF5XCIpIHNlY3Rpb25fY291bnQgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcl9kYXknKS5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzaGFycF9saXN0ID0gezE6ICdzaGFycCcsIDI6ICdzaGFycDInLCAzOiAnc2hhcnAzJywgNDogJ3NoYXJwNCd9O1xyXG4gICAgICAgIHZhciBzaGFycF9kX2xpc3QgPSB7MTogJ3NoYXJwX2QnLCAyOiAnc2hhcnBfZDInLCAzOiAnc2hhcnBfZDMnfTtcclxuICAgICAgICB2YXIgbWFwX2xheWVyID0gbWFwLmdldExheWVyKFwiZW5lbXlcIik7XHJcbiAgICAgICAgdmFyIGxheWVyX3NpemUgPSBtYXBfbGF5ZXIuZ2V0TGF5ZXJTaXplKCk7XHJcbiAgICAgICAgdmFyIGZsYWcgPSBuZXcgQXJyYXkobGF5ZXJfc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspIHtcclxuICAgICAgICAgICAgZmxhZ1tpXSA9IG5ldyBBcnJheShsYXllcl9zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmbGFnX2QgPSBuZXcgQXJyYXkobGF5ZXJfc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspIHtcclxuICAgICAgICAgICAgZmxhZ19kW2ldID0gbmV3IEFycmF5KGxheWVyX3NpemUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyX3NpemUud2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBsYXllcl9zaXplLmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciB0aWxlID0gbWFwX2xheWVyLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vMSBzdGF0aWMsIDIzNCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIGlmKHRpbGUuZ2lkID09IDg3OCArIDYxICYmIGZsYWdbaV1bal0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ1tpXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTsgIC8vMSBzdGF0aWMsIDIzNCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcnBfcHJlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGFycCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfcHJlLm5hbWUgPSBzaGFycF9saXN0W3JhZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfcHJlLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX3ByZS55ID0gdGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL3NoYXJwXCIpLmFkZENoaWxkKHNoYXJwX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBtID0gaSArIDE7IDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlXyA9IG1hcF9sYXllci5nZXRUaWxlZFRpbGVBdChtLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZV8uZ2lkICE9IDg3OCArIDYxKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ1ttXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFycF9wID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGFycCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwX3AubmFtZSA9IHNoYXJwX2xpc3RbcmFkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfcC54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlXy5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwX3AueSA9IHRpbGVfLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL3NoYXJwXCIpLmFkZENoaWxkKHNoYXJwX3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vc3BpZGVyXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGlsZS5naWQgPT0gMjY1ICsgNjEpeyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwaWRlcl9wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNwaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BpZGVyX3ByZS54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICBzcGlkZXJfcHJlLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGRcIikuYWRkQ2hpbGQoc3BpZGVyX3ByZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zaGFycCBmYWxsIGRvd25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlLmdpZCA9PSA2NjQgKyA2MSAmJiBmbGFnX2RbaV1bal0gPT0gbnVsbCl7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ19kW2ldW2pdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJwX2QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoYXJwX2Rvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX2QubmFtZSA9IHNoYXJwX2RfbGlzdFtyYWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJwX2QueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfZC55ID0gdGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL3NoYXJwX2Rvd25cIikuYWRkQ2hpbGQoc2hhcnBfZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBtID0gaSArIDE7IDsgbSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlXyA9IG1hcF9sYXllci5nZXRUaWxlZFRpbGVBdChtLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGlsZV8uZ2lkICE9IDY2NCArIDYxKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ19kW21dW2pdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJwXyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hhcnBfZG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwXy5uYW1lID0gc2hhcnBfZF9saXN0W3JhZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwXy54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlXy5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJwXy55ID0gdGlsZV8ubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvc2hhcnBfZG93blwiKS5hZGRDaGlsZChzaGFycF8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFwX2xheWVyLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9jb2luXHJcbiAgICAgICAgdmFyIGNvaW5fbGF5ZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTWFwKS5nZXRMYXllcihcImNvaW5fYW5kX2J1YmJsZVwiKTtcclxuICAgICAgICBsYXllcl9zaXplID0gY29pbl9sYXllci5nZXRMYXllclNpemUoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJfc2l6ZS53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyX3NpemUuaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBjb2luX2xheWVyLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy9jb2luXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLmdpZCk7XHJcbiAgICAgICAgICAgICAgICBpZih0aWxlLmdpZCA9PSAyNjggKyA2MSl7ICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29pbl9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGMueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYy55ID0gdGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L21hcHdvcmxkL2NvaW5fYnViYmxlXCIpLmFkZENoaWxkKGMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aWxlLmdpZCA9PSAyMjUgKyA2MSl7ICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZXJlZWVlZWUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYWQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7ICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IG5ldyBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJhZCA9PSAxKSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYW5hbmFfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxlZ29fcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBiLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGIueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9jb2luX2J1YmJsZVwiKS5hZGRDaGlsZChiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2luX2xheWVyLmVuYWJsZWQgPSBmYWxzZTsgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vZW5lbXkgaW5pdFxyXG4gICAgICAgIC8vdmFyIGx2X2RpZmYgPSBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvcGxheWVyXCIpLmdldENvbXBvbmVudCgoKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSAnbXVsdGknKT8gJ3BsYXllcl9tdWx0aScgOiAncGxheWVyJykpLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgdmFyIGx2X2RpZmYgPSBzZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIGlmKGx2X2RpZmYgJiYgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lICE9IFwiZGF5XCIpe1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2VfYXJyID0gWzM2MCwgMzAwLCAzMDAsIDI1MCwgMjAwLCAxNTAsIDEyMCwgMTAwXTsgICAgICAvLyAxMDAgb3IgODAgaWYgb25lIGxpZ2h0IHNwYXduZWQsIDYwIG9yIDUwIGlmIHR3bywgMzAgb3IgMjAgaWYgdGhyZWVcclxuICAgICAgICAgICAgdmFyIGxpZ2h0Y291bnQgPSAwO1xyXG4gICAgICAgICAgICBpZihsdl9kaWZmID49IDEyKXtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Y291bnQgPSAzO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihsdl9kaWZmID49IDYpe1xyXG4gICAgICAgICAgICAgICAgbGlnaHRjb3VudCA9IDIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGx2X2RpZmYgLSA2KSkpPyAxIDogMDtcclxuICAgICAgICAgICAgfWVsc2UgaWYobHZfZGlmZiA+PSAyKXtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Y291bnQgPSAxICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsdl9kaWZmIC0gMikpKT8gMSA6IDA7XHJcbiAgICAgICAgICAgIH1lbHNlIGxpZ2h0Y291bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikpIGxpZ2h0Y291bnQrKztcclxuXHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBsdl9kaWZmICogMTkyMCArICgobHZfZGlmZiA9PSAwKT8gNDAwIDogMCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaWdodGNvdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gcmFuZ2VfYXJyWyhsaWdodGNvdW50LTEpICogMiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VhcmNobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgaWYoZW5lbXkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykpZW5lbXkuZ2V0Q29tcG9uZW50KCdlbmVteV93cmFwcGVyJykucmFuZ2UgPSByYW5nZTtcclxuICAgICAgICAgICAgICAgIGVuZW15LnNldFBvc2l0aW9uKG9mZnNldCArICgxOTIwLyhsaWdodGNvdW50KzEpKSppICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MDApIC0yMDApLCAyMDApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L2VuZW15X2NvbGxlY3Rpb25cIikuYWRkQ2hpbGQoZW5lbXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vY29pbiBcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU9PVwiZGF5XCIpIHtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGx2X2RpZmYgKiAxOTIwICsgKChsdl9kaWZmID09IDApPyA0MDAgOiAwKTtcclxuICAgICAgICAgICAgZm9yKGkgPTA7aTxNYXRoLnJhbmRvbSgpKjExO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbmV5PWNjLmluc3RhbnRpYXRlKHRoaXMuY29pbl9wcmUpO1xyXG4gICAgICAgICAgICAgICAgbW9uZXkueD1NYXRoLnJhbmRvbSgpKjE5MjArb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgbW9uZXkueT01MDA7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvcG93ZXJ1cHNcIikuYWRkQ2hpbGQobW9uZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2J1YmJsZSBpdGVtIGluaXQoZGF5c2NlbmUpXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lPT1cImRheVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGkgPTA7aTxNYXRoLnJhbmRvbSgpKjQ7aSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7IC8vMCBhbmQgMVxyXG4gICAgICAgICAgICAgICAgaWYocmFuZG9tKXZhciBwb3dlcnVwcz1jYy5pbnN0YW50aWF0ZSh0aGlzLmxlZ29fcHJlKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdmFyIHBvd2VydXBzPWNjLmluc3RhbnRpYXRlKHRoaXMuYmFuYW5hX3ByZSk7XHJcbiAgICAgICAgICAgICAgICBwb3dlcnVwcy54PU1hdGgucmFuZG9tKCkqMTkyMCtvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBwb3dlcnVwcy55PTArTWF0aC5yYW5kb20oKSo1MDtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9wb3dlcnVwc1wiKS5hZGRDaGlsZChwb3dlcnVwcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Ki9cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
