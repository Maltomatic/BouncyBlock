const {ccclass, property} = cc._decorator;

@ccclass
export default class Section extends cc.Component {

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
        var map = this.node.getComponent(cc.TiledMap)
        var sz = map.getTileSize();

        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        console.log(layerSz.width, layerSz.height);
        for(var i = 0; i < layerSz.width; i++){
            for(var j = 0; j < layerSz.height; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if(FloorTile.gid != 0){
                    // console.log("draw ground box for tile (" + i + ", " + j + ")");
                    FloorTile.node.group = "ground";
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
        var obj_list = map.getObjectGroup("colors").getObjects();
        console.log(obj_list);
        obj_list.forEach((obj) => {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            var colors = [1052, 1053, 1054, 1055, 1056]
            var color = Math.floor(Math.random() * 5)
            console.log(obj.x, obj.y, x_size, y_size);

            for(i = obj.x / 48; i < (obj.x / 48 + x_size); i++){
                for(j = 10 - (obj.y/48); j < (10 - (obj.y/48) + y_size); j++){
                    console.log(i, j);
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = colors[color];
                }
            }
        });
        console.log("Ground init complete. Creating mounds");
    }
}
