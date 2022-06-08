
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
        for (j = 0; j < layerSz.height; j++) {
            var FloorTile = floor.getTiledTileAt(layerSz.width - 1, j, true);
            if (FloorTile.gid) {
                FloorTile.node.group = "mound";
                FloorTile.getComponent(cc.PhysicsBoxCollider).enabled = false;
            }
        }
        for (var i = 1; i < layerSz.width - 1; i++) {
            for (var j = 0; j < layerSz.height; j++) {
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if (FloorTile.gid != 0 && (floor.getTiledTileAt(i + 1, j, true).gid == 0 || floor.getTiledTileAt(i - 1, j, true).gid == 0)) {
                    FloorTile.node.group = "mound";
                    // FloorTile.getComponent(cc.PhysicsBoxCollider).enabled = false;
                    // console.log("marked mound at tile (" + i + ", " + j + ")");
                }
            }
        }
        for (j = 3; j < layerSz.height; j++) {
            if (floor.getTiledTileAt(i, j, true).gid)
                floor.getTiledTileAt(i, j, true).node.group = "mound";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBaUdDO1FBL0ZXLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUE4RjlCLENBQUM7SUE1Rkcsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDaEUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0Msc0RBQXNEO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUNyRSxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUFBLGlCQThFQztRQTdFRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8s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R0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7b0JBQ3pELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakQsU0FBUyxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQkFDckM7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhHZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWlHM0I7SUFBRCxjQUFDO0NBakdELEFBaUdDLENBakdvQyxFQUFFLENBQUMsU0FBUyxHQWlHaEQ7a0JBakdvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgYmFzZTogbnVtYmVyID0gNjtcclxuICAgIHByaXZhdGUgc3RyaXA6IG51bWJlciA9IDE7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTUwMCk7XHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JZID0gMDtcclxuICAgICAgICB2YXIgbWFwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZE1hcCk7XHJcbiAgICAgICAgdGhpcy5zdHJpcCA9IGNjLmZpbmQoJ0NhbnZhcy9yb290JykuZ2V0Q29tcG9uZW50KCdyb290JykuY29sb3Jfc3RyaXA7ICAgICAgICAgLy/mr4/mrKHmm7TmlrDnmoRzZWN0aW9uIOiJsuelqOmDveimgeS4gOaoo1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJiYXNlIGNvbG9yIGdpZDogXCIgKyB0aGlzLmJhc2UpO1xyXG5cclxuICAgICAgICB2YXIgYm9keSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICBjb2xsaWRlci5vZmZzZXQgPSBjYy52Mig5NjAsIDI0MCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2l6ZSA9IGNjLnNpemUoNSwgMTAwMCk7XHJcbiAgICAgICAgY29sbGlkZXIuc2Vuc29yID0gdHJ1ZTtcclxuICAgICAgICBjb2xsaWRlci50YWcgPSAxMDAwOyAgICAgICAgLy8gaW5pdCBuZXh0IG1hcCBvbiBjb250YWN0XHJcbiAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgdmFyIHN6ID0gbWFwLmdldFRpbGVTaXplKCk7XHJcblxyXG4gICAgICAgIHZhciBmbG9vciA9IG1hcC5nZXRMYXllcihcImdyb3VuZFwiKTtcclxuICAgICAgICB2YXIgbGF5ZXJTeiA9IGZsb29yLmdldExheWVyU2l6ZSgpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllclN6LndpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihGbG9vclRpbGUuZ2lkID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSB0aGlzLmJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkcmF3IGdyb3VuZCBib3ggZm9yIHRpbGUgKFwiICsgaSArIFwiLCBcIiArIGogKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcImdyb3VuZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlZCB0aWxlIHdpdGggXCIgKyBGbG9vclRpbGUubm9kZS5ncm91cClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVyID0gRmxvb3JUaWxlLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoc3oud2lkdGgvMiwgc3ouaGVpZ2h0LzIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLnNpemUgPSBzejtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGlsZSBpbml0IGNvbXBsZXRlLCBtYXJraW5nIG1vdW5kc1wiKVxyXG4gICAgICAgIGZvcihqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICB2YXIgRmxvb3JUaWxlID0gZmxvb3IuZ2V0VGlsZWRUaWxlQXQobGF5ZXJTei53aWR0aC0xLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCl7XHJcbiAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICAgICAgICAgIEZsb29yVGlsZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGxheWVyU3oud2lkdGgtMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCAhPSAwICYmIChmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGosIHRydWUpLmdpZCA9PSAwIHx8IGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDApKXtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGbG9vclRpbGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWFya2VkIG1vdW5kIGF0IHRpbGUgKFwiICsgaSArIFwiLCBcIiArIGogKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGogPSAzOyBqIDwgbGF5ZXJTei5oZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgICAgIGlmKGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpLmdpZCkgZmxvb3IuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSkubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvYmpfbGlzdCA9IG1hcC5nZXRPYmplY3RHcm91cChcImNvbG9yc1wiKS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgb2JqX2xpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4X3NpemUgPSBvYmoud2lkdGggLyA0ODtcclxuICAgICAgICAgICAgdmFyIHlfc2l6ZSA9IG9iai5oZWlnaHQgLyA0ODtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqLngsIG9iai55LCB4X3NpemUsIHlfc2l6ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ3JlYXRlIGNvbG9yZWQgYmxvY2sgd2l0aCBnaWQgXCIgKyB0aGlzLmJhc2UgKyBjb2xvcik7XHJcblxyXG4gICAgICAgICAgICBmb3IoaSA9IG9iai54IC8gNDg7IGkgPCAob2JqLnggLyA0OCArIHhfc2l6ZSk7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDEwIC0gKG9iai55LzQ4KTsgaiA8ICgxMCAtIChvYmoueS80OCkgKyB5X3NpemUpOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBGbG9vclRpbGUgPSBmbG9vci5nZXRUaWxlZFRpbGVBdChpLCBqLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlICsgY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=