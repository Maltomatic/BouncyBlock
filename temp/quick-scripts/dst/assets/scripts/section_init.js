
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
            for (var j = 0; j < layerSz.height - 1; j++) {
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
                console.log(tile.gid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQW9VQztRQWxVVyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFHL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFakIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUFpUzNCLENBQUM7SUEvUkcsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0Msc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFP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LENBQUM7NkNBQ0s7SUFqQ2hCLE9BQU87UUFEbkIsT0FBTztPQUNLLE9BQU8sQ0FvVW5CO0lBQUQsY0FBQztDQXBVRCxBQW9VQyxDQXBVNEIsRUFBRSxDQUFDLFNBQVMsR0FvVXhDO0FBcFVZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGJhc2U6IG51bWJlciA9IDY7XHJcbiAgICBwcml2YXRlIHN0cmlwOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJfY29sOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWFyY2hsaWdodDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2hhcnA6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2hhcnBfZG93bjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3BpZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjb2luX3ByZTogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGVnb19wcmU6IGNjLlByZWZhYj1udWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWJibGVfcHJlOiBjYy5QcmVmYWI9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgYmFuYW5hX3ByZTogY2MuUHJlZmFiPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZGF0YV9wcmU6IGNjLlByZWZhYj1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNpZ25hbF9wcmU6IGNjLlByZWZhYj1udWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIG11dGVfcHJlOiBjYy5QcmVmYWI9bnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGx2OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MDApO1xyXG4gICAgICAgIHRoaXMubHYgPSBwYXJzZUludCh0aGlzLm5vZGUubmFtZS5yZXBsYWNlKCdzZWN0aW9uJywgJycpKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwO1xyXG4gICAgICAgIHZhciBtYXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkTWFwKTtcclxuICAgICAgICB0aGlzLnN0cmlwID0gY2MuZmluZCgnQ2FudmFzL3Jvb3QnKS5nZXRDb21wb25lbnQoJ3Jvb3QnKS5jb2xvcl9zdHJpcDsgICAgICAgICAvL+avj+asoeabtOaWsOeahHNlY3Rpb24g6Imy56Wo6YO96KaB5LiA5qijXHJcbiAgICAgICAgdGhpcy5iYXNlID0gMSArIDYqdGhpcy5zdHJpcDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImJhc2UgY29sb3IgZ2lkOiBcIiArIHRoaXMuYmFzZSk7XHJcblxyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdmFyIGNvbGxpZGVyID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKDk2MCwgMjQwKTtcclxuICAgICAgICBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg1LCAxMDAwKTtcclxuICAgICAgICBjb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIGNvbGxpZGVyLnRhZyA9IDEwMDA7ICAgICAgICAvLyBpbml0IG5leHQgbWFwIG9uIGNvbnRhY3RcclxuICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICB2YXIgc3ogPSBtYXAuZ2V0VGlsZVNpemUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzeik7XHJcblxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIGZsb29yID0gbWFwLmdldExheWVyKFwiZ3JvdW5kXCIpO1xyXG4gICAgICAgIHZhciBsYXllclN6ID0gZmxvb3IuZ2V0TGF5ZXJTaXplKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVyU3oud2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBsYXllclN6LmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLmdpZCA9IHRoaXMuYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRyYXcgZ3JvdW5kIGJveCBmb3IgdGlsZSAoXCIgKyBpICsgXCIsIFwiICsgaiArIFwiKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwiZ3JvdW5kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVkIHRpbGUgd2l0aCBcIiArIEZsb29yVGlsZS5ub2RlLmdyb3VwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVyID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoc3oud2lkdGgvMiwgc3ouaGVpZ2h0LzIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGotMSwgdHJ1ZSkuZ2lkKSBjb2xsaWRlci5zaXplID0gY2Muc2l6ZSg0Ny44LCA0OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb2xsaWRlci5zaXplID0gc3o7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRpbGUgaW5pdCBjb21wbGV0ZSwgbWFya2luZyBtb3VuZHNcIilcclxuICAgICAgICAvLyBmb3IoaiA9IDM7IGogPCBsYXllclN6LmhlaWdodDsgaisrKXtcclxuICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQobGF5ZXJTei53aWR0aC0xLCA3LCB0cnVlKTtcclxuICAgICAgICBpZihGbG9vclRpbGUuZ2lkKXtcclxuICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSBGbG9vclRpbGUubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgY29sLnNpemUgPSBjYy5zaXplKDQ3LjgsIDQ4KTtcclxuICAgICAgICAgICAgY29sLmFwcGx5KCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgbGF5ZXJTei53aWR0aC0xOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQgLTE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkICE9IDAgJiYgKChmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGosIHRydWUpLmdpZCA9PSAwICYmIGZsb29yLmdldFRpbGVkVGlsZUF0KGkrMSwgaisxLCB0cnVlKS5naWQgIT0gMCkgfHwgKGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDAgJiYgZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaS0xLCBqKzEsIHRydWUpLmdpZCAhPSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJtb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSBGbG9vclRpbGUubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuc2l6ZSA9IGNjLnNpemUoNDcuOCwgNDgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hyaW5rIGNvbGxpZGVyIHNpemUgb2YgdGlsZShcIiArIDM5ICsgXCIsIFwiICsgNyArIFwiKSB0byBcIisgY29sLnNpemUud2lkdGggKyBcIiwgXCIrIGNvbC5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvYmpfbGlzdCA9IG1hcC5nZXRPYmplY3RHcm91cChcImNvbG9yc1wiKS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09XCJ0ZXN0XCIgfHwgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09XCJtdWx0aVwiKXRoaXMucGxheWVyX2NvbCA9IDYqdGhpcy5zdHJpcCArIGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpLmdldENvbXBvbmVudCgoKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSA9PSAnbXVsdGknKT8gJ3BsYXllcl9tdWx0aScgOiAncGxheWVyJykpLmNvbG9yXHJcbiAgICAgICAgZWxzZSBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT1cImRheVwiKXRoaXMucGxheWVyX2NvbCA9IDYqdGhpcy5zdHJpcCArIGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpLmdldENvbXBvbmVudCgncGxheWVyX2RheScpLmNvbG9yO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJiaWFzIHRvd2FyZHMgXCIgKyB0aGlzLnBsYXllcl9jb2wpO1xyXG4gICAgICAgIG9ial9saXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeF9zaXplID0gb2JqLndpZHRoIC8gNDg7XHJcbiAgICAgICAgICAgIHZhciB5X3NpemUgPSBvYmouaGVpZ2h0IC8gNDg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY2Fubm90X2hpZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgdmFyIGNvbCA9IDA7XHJcbiAgICAgICAgICAgIGlmKGNhbm5vdF9oaWRlKSBjb2wgPSB0aGlzLmJhc2UgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcclxuICAgICAgICAgICAgZWxzZSBjb2wgPSB0aGlzLnBsYXllcl9jb2w7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai54LCBvYmoueSwgeF9zaXplLCB5X3NpemUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNyZWF0ZSBjb2xvcmVkIGJsb2NrIHdpdGggZ2lkIFwiICsgdGhpcy5iYXNlICsgY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSBvYmoueCAvIDQ4OyBpIDwgKG9iai54IC8gNDggKyB4X3NpemUpOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGogPSAxMCAtIChvYmoueS80OCk7IGogPCAoMTAgLSAob2JqLnkvNDgpICsgeV9zaXplKTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLmdpZCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzaGFycCBvYnN0YWNsZeOAgXNwaWRlcuOAgXNoYXJwX2Rvd25cclxuICAgICAgICB2YXIgc2VjdGlvbl9jb3VudDtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT1cInRlc3RcIiB8fCBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT1cIm11bHRpXCIpIHNlY3Rpb25fY291bnQgPSBjYy5maW5kKCdDYW52YXMvcm9vdC9wbGF5ZXInKS5nZXRDb21wb25lbnQoKChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyk/ICdwbGF5ZXJfbXVsdGknIDogJ3BsYXllcicpKS5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIGVsc2UgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09XCJkYXlcIikgc2VjdGlvbl9jb3VudCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290L3BsYXllcicpLmdldENvbXBvbmVudCgncGxheWVyX2RheScpLnNlY3Rpb25fY291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNoYXJwX2xpc3QgPSB7MTogJ3NoYXJwJywgMjogJ3NoYXJwMicsIDM6ICdzaGFycDMnLCA0OiAnc2hhcnA0J307XHJcbiAgICAgICAgdmFyIHNoYXJwX2RfbGlzdCA9IHsxOiAnc2hhcnBfZCcsIDI6ICdzaGFycF9kMicsIDM6ICdzaGFycF9kMyd9O1xyXG4gICAgICAgIHZhciBtYXBfbGF5ZXIgPSBtYXAuZ2V0TGF5ZXIoXCJlbmVteVwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJfc2l6ZSA9IG1hcF9sYXllci5nZXRMYXllclNpemUoKTtcclxuICAgICAgICB2YXIgZmxhZyA9IG5ldyBBcnJheShsYXllcl9zaXplLndpZHRoKTtcclxuICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxheWVyX3NpemUud2lkdGg7IGkrKykge1xyXG4gICAgICAgICAgICBmbGFnW2ldID0gbmV3IEFycmF5KGxheWVyX3NpemUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZsYWdfZCA9IG5ldyBBcnJheShsYXllcl9zaXplLndpZHRoKTtcclxuICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxheWVyX3NpemUud2lkdGg7IGkrKykge1xyXG4gICAgICAgICAgICBmbGFnX2RbaV0gPSBuZXcgQXJyYXkobGF5ZXJfc2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJfc2l6ZS53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyX3NpemUuaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGUgPSBtYXBfbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8xIHN0YXRpYywgMjM0IG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgaWYodGlsZS5naWQgPT0gODc4ICsgNjEgJiYgZmxhZ1tpXVtqXSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnW2ldW2pdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyAgLy8xIHN0YXRpYywgMjM0IG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGFycF9wcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoYXJwKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9wcmUubmFtZSA9IHNoYXJwX2xpc3RbcmFkXTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9wcmUueCA9IHNlY3Rpb25fY291bnQgKiAxOTIwICsgdGlsZS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfcHJlLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvc2hhcnBcIikuYWRkQ2hpbGQoc2hhcnBfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIG0gPSBpICsgMTsgOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGVfID0gbWFwX2xheWVyLmdldFRpbGVkVGlsZUF0KG0sIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlXy5naWQgIT0gODc4ICsgNjEpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnW21dW2pdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJwX3AgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoYXJwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfcC5uYW1lID0gc2hhcnBfbGlzdFtyYWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFycF9wLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGVfLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfcC55ID0gdGlsZV8ubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvc2hhcnBcIikuYWRkQ2hpbGQoc2hhcnBfcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9zcGlkZXJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aWxlLmdpZCA9PSAyNjUgKyA2MSl7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BpZGVyX3ByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3BpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGlkZXJfcHJlLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHNwaWRlcl9wcmUueSA9IHRpbGUubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZFwiKS5hZGRDaGlsZChzcGlkZXJfcHJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NoYXJwIGZhbGwgZG93blxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRpbGUuZ2lkID09IDY2NCArIDYxICYmIGZsYWdfZFtpXVtqXSA9PSBudWxsKXsgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmbGFnX2RbaV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYWQgPSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7ICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcnBfZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hhcnBfZG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfZC5uYW1lID0gc2hhcnBfZF9saXN0W3JhZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcnBfZC54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICBzaGFycF9kLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvc2hhcnBfZG93blwiKS5hZGRDaGlsZChzaGFycF9kKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIG0gPSBpICsgMTsgOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGVfID0gbWFwX2xheWVyLmdldFRpbGVkVGlsZUF0KG0sIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aWxlXy5naWQgIT0gNjY0ICsgNjEpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnX2RbbV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcnBfID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaGFycF9kb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfLm5hbWUgPSBzaGFycF9kX2xpc3RbcmFkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGVfLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcnBfLnkgPSB0aWxlXy5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9zaGFycF9kb3duXCIpLmFkZENoaWxkKHNoYXJwXyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXBfbGF5ZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL2NvaW5cclxuICAgICAgICB2YXIgY29pbl9sYXllciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApLmdldExheWVyKFwiY29pbl9hbmRfYnViYmxlXCIpO1xyXG4gICAgICAgIGxheWVyX3NpemUgPSBjb2luX2xheWVyLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllcl9zaXplLndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJfc2l6ZS5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IGNvaW5fbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvaW5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGUuZ2lkKTtcclxuICAgICAgICAgICAgICAgIGlmKHRpbGUuZ2lkID09IDI2OCArIDYxKXsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2MuaW5zdGFudGlhdGUodGhpcy5jb2luX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYy54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICBjLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAvL2MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvY29pbl9idWJibGVcIikuYWRkQ2hpbGQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5naWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aWxlLmdpZCA9PSAyMjUgKyA2MSl7ICBcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmdpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdkYXknKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZCA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IG5ldyBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYWQgPT0gMSkgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFuYW5hX3ByZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmFkID09IDIpIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxlZ29fcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWJibGVfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi54ID0gc2VjdGlvbl9jb3VudCAqIDE5MjAgKyB0aWxlLm5vZGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi55ID0gdGlsZS5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvbWFwd29ybGQvY29pbl9idWJibGVcIikuYWRkQ2hpbGQoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtdWx0aScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkID0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhZCA9PSAxKSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWJibGVfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyYWQgPT0gMikgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGF0YV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJhZCA9PSAyKSBiID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaWduYWxfcHJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyYWQgPT0gMikgYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXV0ZV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1YmJsZV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9jb2luX2J1YmJsZVwiKS5hZGRDaGlsZChiKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1YmJsZV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnggPSBzZWN0aW9uX2NvdW50ICogMTkyMCArIHRpbGUubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnkgPSB0aWxlLm5vZGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9tYXB3b3JsZC9jb2luX2J1YmJsZVwiKS5hZGRDaGlsZChiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29pbl9sYXllci5lbmFibGVkID0gZmFsc2U7IFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL2VuZW15IGluaXRcclxuICAgICAgICAvL3ZhciBsdl9kaWZmID0gY2MuZmluZChcIkNhbnZhcy9yb290L3BsYXllclwiKS5nZXRDb21wb25lbnQoKChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ211bHRpJyk/ICdwbGF5ZXJfbXVsdGknIDogJ3BsYXllcicpKS5zZWN0aW9uX2NvdW50O1xyXG4gICAgICAgIHZhciBsdl9kaWZmID0gc2VjdGlvbl9jb3VudDtcclxuICAgICAgICBpZihsdl9kaWZmICYmIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZSAhPSBcImRheVwiKXtcclxuICAgICAgICAgICAgdmFyIHJhbmdlX2FyciA9IFszNjAsIDMwMCwgMzAwLCAyNTAsIDIwMCwgMTUwLCAxMjAsIDEwMF07ICAgICAgLy8gMTAwIG9yIDgwIGlmIG9uZSBsaWdodCBzcGF3bmVkLCA2MCBvciA1MCBpZiB0d28sIDMwIG9yIDIwIGlmIHRocmVlXHJcbiAgICAgICAgICAgIHZhciBsaWdodGNvdW50ID0gMDtcclxuICAgICAgICAgICAgaWYobHZfZGlmZiA+PSAxMil7XHJcbiAgICAgICAgICAgICAgICBsaWdodGNvdW50ID0gMztcclxuICAgICAgICAgICAgfWVsc2UgaWYobHZfZGlmZiA+PSA2KXtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Y291bnQgPSAyICsgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsdl9kaWZmIC0gNikpKT8gMSA6IDA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGx2X2RpZmYgPj0gMil7XHJcbiAgICAgICAgICAgICAgICBsaWdodGNvdW50ID0gMSArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobHZfZGlmZiAtIDIpKSk/IDEgOiAwO1xyXG4gICAgICAgICAgICB9ZWxzZSBsaWdodGNvdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgICAgIGlmKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKSBsaWdodGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gbHZfZGlmZiAqIDE5MjAgKyAoKGx2X2RpZmYgPT0gMCk/IDQwMCA6IDApO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlnaHRjb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHJhbmdlX2FyclsobGlnaHRjb3VudC0xKSAqIDIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlYXJjaGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGlmKGVuZW15LmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpKWVuZW15LmdldENvbXBvbmVudCgnZW5lbXlfd3JhcHBlcicpLnJhbmdlID0gcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5zZXRQb3NpdGlvbihvZmZzZXQgKyAoMTkyMC8obGlnaHRjb3VudCsxKSkqaSArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNDAwKSAtMjAwKSwgMjAwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcm9vdC9lbmVteV9jb2xsZWN0aW9uXCIpLmFkZENoaWxkKGVuZW15KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAvL2NvaW4gXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lPT1cImRheVwiKSB7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBsdl9kaWZmICogMTkyMCArICgobHZfZGlmZiA9PSAwKT8gNDAwIDogMCk7XHJcbiAgICAgICAgICAgIGZvcihpID0wO2k8TWF0aC5yYW5kb20oKSoxMTtpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb25leT1jYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5fcHJlKTtcclxuICAgICAgICAgICAgICAgIG1vbmV5Lng9TWF0aC5yYW5kb20oKSoxOTIwK29mZnNldDtcclxuICAgICAgICAgICAgICAgIG1vbmV5Lnk9NTAwO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9yb290L3Bvd2VydXBzXCIpLmFkZENoaWxkKG1vbmV5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9idWJibGUgaXRlbSBpbml0KGRheXNjZW5lKVxyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZT09XCJkYXlcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihpID0wO2k8TWF0aC5yYW5kb20oKSo0O2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbT0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpOyAvLzAgYW5kIDFcclxuICAgICAgICAgICAgICAgIGlmKHJhbmRvbSl2YXIgcG93ZXJ1cHM9Y2MuaW5zdGFudGlhdGUodGhpcy5sZWdvX3ByZSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHZhciBwb3dlcnVwcz1jYy5pbnN0YW50aWF0ZSh0aGlzLmJhbmFuYV9wcmUpO1xyXG4gICAgICAgICAgICAgICAgcG93ZXJ1cHMueD1NYXRoLnJhbmRvbSgpKjE5MjArb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgcG93ZXJ1cHMueT0wK01hdGgucmFuZG9tKCkqNTA7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Jvb3QvcG93ZXJ1cHNcIikuYWRkQ2hpbGQocG93ZXJ1cHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==