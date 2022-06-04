const {ccclass, property} = cc._decorator;

@ccclass
export default class Section extends cc.Component {

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
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
        // var colors = map.getLayer("colors");
        // console.log(colors);
        var layerSz = floor.getLayerSize();
        console.log(layerSz.width, layerSz.height);
        for(var i = 0; i < layerSz.width; i++){
            for(var j = 0; j <= layerSz.height; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                console.log("tile with gid " + FloorTile.gid + " at (" + i + ", " + j + "), draw ground box at (" + i*48 + ", " + j*48 + ")");
                if(FloorTile.gid != 0){
                    console.log("draw ground box for tile (" + i + ", " + j + ")");
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
        console.log("Ground init complete. Creating mounds");

    //     for(j = layerSz.height - 7; j >= 19; j--){
    //         for(i = 3; i < layerSz.width-3; i++){
    //             var FloorTile = floor.getTiledTileAt(i, j, true);
    //             if((floor.getTiledTileAt(i, j+1, true).gid != 0) && (floor.getTiledTileAt(i-1, j+2, true).gid != 0) && (floor.getTiledTileAt(i+1, j+2, true).gid != 0)){
    //                 // legal placement of tile: has ground below, and something to left and right below
    //                 console.log("legal position (" + i + ", " + j + "); block below is (" + +i + ", " + (j+1) + ") with gid " + floor.getTiledTileAt(i, j+1, true).gid);
    //                 var create = Math.floor(Math.random() * (j-15)/2);
    //                 var verify = Math.floor(Math.random() * (j-15)/2);
    //                 if(create != 0 || verify != 0){
    //                     // create tile here
    //                     FloorTile.gid = 425;
    //                     if((floor.getTiledTileAt(i+1, j+1, true).gid != 0) && (floor.getTiledTileAt(i+2, j+2, true).gid != 0)) floor.getTiledTileAt(i+1, j, true).gid = 425;
    //                     if((floor.getTiledTileAt(i+2, j+1, true).gid != 0) && (floor.getTiledTileAt(i+3, j+2, true).gid != 0)) floor.getTiledTileAt(i+2, j, true).gid = 425;
    //                     // create collider components
    //                     FloorTile.node.group = "ground";
    //                     var body = FloorTile.node.addComponent(cc.RigidBody);
    //                     body.type = cc.RigidBodyType.Static;
    //                     body.fixedRotation = true;
    //                     var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
    //                     collider.offset = cc.v2(sz.width/2, sz.height/2);
    //                     collider.size = sz;
    //                     collider.apply();
    //                     i += 2
    //                 } else i = Math.min(i + 4, layerSz.width-2);
    //             }
    //         }
    //     }
    //     for(j = layerSz.height - 7; j >= 19; j--){
    //         for(i = 3; i < layerSz.width-3; i++){
    //             var FloorTile = floor.getTiledTileAt(i, j, true);
    //             if(FloorTile.gid != 0){
    //                 // there is a tile here, so consider coloring
    //                 if((floor.getTiledTileAt(i-1, j, true).gid == 0) && (floor.getTiledTileAt(i-1, j+2, true).gid != 0)){
    //                     // valid coloring position as left is empty and bottom left is populated
    //                     var color = Math.floor(Math.random() * (j-17)/2);
    //                     if(color) FloorTile.gid = 597;
    //                 }else if((floor.getTiledTileAt(i+1, j, true).gid == 0) && (floor.getTiledTileAt(i+1, j+2, true).gid != 0)){
    //                     // valid coloring position as right is empty and bottom right is populated
    //                     var color = Math.floor(Math.random() * (j-17)/2);
    //                     if(color) FloorTile.gid = 597;
    //                 }
    //             }
    //         }
    //     }
    }
}
