import { Player } from "./player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Section extends cc.Component {

    private base: number = 6;
    private strip: number = 1;

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -500);
    }
    onDestroy () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
    }

    start(){
        this.node.anchorX = 0;
        this.node.anchorY = 0;
        var map = this.node.getComponent(cc.TiledMap);
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;         //每次更新的section 色票都要一樣
        this.base = 1 + 6*this.strip;

        //console.log("base color gid: " + this.base);

        var body = this.node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        body.fixedRotation = true;
        var collider = this.node.addComponent(cc.PhysicsBoxCollider);
        collider.offset = cc.v2(960, 240);
        collider.size = cc.size(5, 1000);
        collider.sensor = true;
        collider.tag = 1000;        // init next map on contact
        collider.apply();

        var sz = map.getTileSize();

        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        for(var i = 0; i < layerSz.width; i++){
            for(var j = 0; j < layerSz.height; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if(FloorTile.gid == 1){
                    FloorTile.gid = this.base;
                    // console.log("draw ground box for tile (" + i + ", " + j + ")");
                    FloorTile.node.group = "ground";
                    console.log("created tile with " + FloorTile.node.group)
                    var body = FloorTile.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    body.fixedRotation = true;
                    var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset = cc.v2(sz.width/2, sz.height/2);
                    collider.size = sz;
                    collider.apply();
                }
            }
        }
        console.log("tile init complete, marking mounds")
        for(var i = 1; i < layerSz.width-1; i++){
            for(var j = 0; j < layerSz.height; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if(FloorTile.gid != 0 && (floor.getTiledTileAt(i+1, j, true).gid == 0 || floor.getTiledTileAt(i-1, j, true).gid == 0)){
                    FloorTile.node.group = "mound";
                    console.log("marked mound at tile (" + i + ", " + j + ")");
                }
            }
        }

        var obj_list = map.getObjectGroup("colors").getObjects();
        obj_list.forEach((obj) => {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            var color = Math.floor(Math.random() * 5)
            // console.log(obj.x, obj.y, x_size, y_size);
            // console.log("Create colored block with gid " + this.base + color);

            for(i = obj.x / 48; i < (obj.x / 48 + x_size); i++){
                for(j = 10 - (obj.y/48); j < (10 - (obj.y/48) + y_size); j++){
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = this.base + color;

                    var collider = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
                    collider.tag = 10;
                }
            }
        });
    }
}
