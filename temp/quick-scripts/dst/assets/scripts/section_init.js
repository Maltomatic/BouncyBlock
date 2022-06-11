
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
        for (j = 3; j < layerSz.height; j++) {
            var FloorTile = floor.getTiledTileAt(layerSz.width - 1, j, true);
            if (FloorTile.gid) {
                FloorTile.node.group = "mound";
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
                    // TODO: introduce bias to increase player color match rate
                }
            }
        });
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2VjdGlvbl9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQXFHQztRQW5HVyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBaUduQyxDQUFDO0lBL0ZHLHdCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLHNEQUFzRDtRQUN0RCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDckUsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFBQSxpQkFpRkM7UUFo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Q0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztvQkFDekQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNqRCxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDcEIsMkRBQTJEO2lCQUM5RDthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBcEdRLE9BQU87UUFEbkIsT0FBTztPQUNLLE9BQU8sQ0FxR25CO0lBQUQsY0FBQztDQXJHRCxBQXFHQyxDQXJHNEIsRUFBRSxDQUFDLFNBQVMsR0FxR3hDO0FBckdZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGJhc2U6IG51bWJlciA9IDY7XHJcbiAgICBwcml2YXRlIHN0cmlwOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJfY29sOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC01MDApO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JYID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWSA9IDA7XHJcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRNYXApO1xyXG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwOyAgICAgICAgIC8v5q+P5qyh5pu05paw55qEc2VjdGlvbiDoibLnpajpg73opoHkuIDmqKNcclxuICAgICAgICB0aGlzLmJhc2UgPSAxICsgNip0aGlzLnN0cmlwO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmFzZSBjb2xvciBnaWQ6IFwiICsgdGhpcy5iYXNlKTtcclxuXHJcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgYm9keS5maXhlZFJvdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICB2YXIgY29sbGlkZXIgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgY29sbGlkZXIub2Zmc2V0ID0gY2MudjIoOTYwLCAyNDApO1xyXG4gICAgICAgIGNvbGxpZGVyLnNpemUgPSBjYy5zaXplKDUsIDEwMDApO1xyXG4gICAgICAgIGNvbGxpZGVyLnNlbnNvciA9IHRydWU7XHJcbiAgICAgICAgY29sbGlkZXIudGFnID0gMTAwMDsgICAgICAgIC8vIGluaXQgbmV4dCBtYXAgb24gY29udGFjdFxyXG4gICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcblxyXG4gICAgICAgIHZhciBzeiA9IG1hcC5nZXRUaWxlU2l6ZSgpO1xyXG5cclxuICAgICAgICB2YXIgZmxvb3IgPSBtYXAuZ2V0TGF5ZXIoXCJncm91bmRcIik7XHJcbiAgICAgICAgdmFyIGxheWVyU3ogPSBmbG9vci5nZXRMYXllclNpemUoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJTei53aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUuZ2lkID0gdGhpcy5iYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHJhdyBncm91bmQgYm94IGZvciB0aWxlIChcIiArIGkgKyBcIiwgXCIgKyBqICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5ub2RlLmdyb3VwID0gXCJncm91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQgdGlsZSB3aXRoIFwiICsgRmxvb3JUaWxlLm5vZGUuZ3JvdXApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBGbG9vclRpbGUubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlciA9IEZsb29yVGlsZS5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHN6LndpZHRoLzIsIHN6LmhlaWdodC8yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gc3o7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpbGUgaW5pdCBjb21wbGV0ZSwgbWFya2luZyBtb3VuZHNcIilcclxuICAgICAgICBmb3IoaiA9IDM7IGogPCBsYXllclN6LmhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGxheWVyU3oud2lkdGgtMSwgaiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmKEZsb29yVGlsZS5naWQpe1xyXG4gICAgICAgICAgICAgICAgRmxvb3JUaWxlLm5vZGUuZ3JvdXAgPSBcIm1vdW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGxheWVyU3oud2lkdGgtMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGxheWVyU3ouaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoRmxvb3JUaWxlLmdpZCAhPSAwICYmIChmbG9vci5nZXRUaWxlZFRpbGVBdChpKzEsIGosIHRydWUpLmdpZCA9PSAwIHx8IGZsb29yLmdldFRpbGVkVGlsZUF0KGktMSwgaiwgdHJ1ZSkuZ2lkID09IDApKXtcclxuICAgICAgICAgICAgICAgICAgICBGbG9vclRpbGUubm9kZS5ncm91cCA9IFwibW91bmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGbG9vclRpbGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWFya2VkIG1vdW5kIGF0IHRpbGUgKFwiICsgaSArIFwiLCBcIiArIGogKyBcIilcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvYmpfbGlzdCA9IG1hcC5nZXRPYmplY3RHcm91cChcImNvbG9yc1wiKS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfY29sID0gNip0aGlzLnN0cmlwICsgY2MuZmluZCgnQ2FudmFzL3Jvb3QvcGxheWVyJykuZ2V0Q29tcG9uZW50KCdwbGF5ZXInKS5jb2xvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmlhcyB0b3dhcmRzIFwiICsgdGhpcy5wbGF5ZXJfY29sKTtcclxuICAgICAgICBvYmpfbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICAgdmFyIHhfc2l6ZSA9IG9iai53aWR0aCAvIDQ4O1xyXG4gICAgICAgICAgICB2YXIgeV9zaXplID0gb2JqLmhlaWdodCAvIDQ4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNhbm5vdF9oaWRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSAwO1xyXG4gICAgICAgICAgICBpZihjYW5ub3RfaGlkZSkgY29sID0gdGhpcy5iYXNlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcbiAgICAgICAgICAgIGVsc2UgY29sID0gdGhpcy5wbGF5ZXJfY29sO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoueCwgb2JqLnksIHhfc2l6ZSwgeV9zaXplKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDcmVhdGUgY29sb3JlZCBibG9jayB3aXRoIGdpZCBcIiArIHRoaXMuYmFzZSArIGNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihpID0gb2JqLnggLyA0ODsgaSA8IChvYmoueCAvIDQ4ICsgeF9zaXplKTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihqID0gMTAgLSAob2JqLnkvNDgpOyBqIDwgKDEwIC0gKG9iai55LzQ4KSArIHlfc2l6ZSk7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIEZsb29yVGlsZSA9IGZsb29yLmdldFRpbGVkVGlsZUF0KGksIGosIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZsb29yVGlsZS5naWQgPSBjb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaW50cm9kdWNlIGJpYXMgdG8gaW5jcmVhc2UgcGxheWVyIGNvbG9yIG1hdGNoIHJhdGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==