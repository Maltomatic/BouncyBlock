import { Player } from "./player";

const {ccclass, property} = cc._decorator;

@ccclass
export class Section extends cc.Component {

    private base: number = 6;
    private strip: number = 1;
    private player_col: number = 0;

    @property(cc.Prefab)
    searchlight: cc.Prefab = null;

    @property(cc.Prefab)
    sharp: cc.Prefab = null;

    @property(cc.Prefab)
    coin_pre: cc.Prefab = null;

    private lv: number = 0;

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -500);
        this.lv = parseInt(this.node.name.replace('section', ''));
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
        // console.log(sz);

        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        for(var i = 0; i < layerSz.width; i++){
            for(var j = 0; j < layerSz.height; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if(FloorTile.gid == 1){
                    FloorTile.gid = this.base;
                    // console.log("draw ground box for tile (" + i + ", " + j + ")");
                    FloorTile.node.group = "ground";
                    // console.log("created tile with " + FloorTile.node.group)
                    var body = FloorTile.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    body.fixedRotation = true;

                    var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset = cc.v2(sz.width/2, sz.height/2);
                    if(floor.getTiledTileAt(i, j-1, true).gid) collider.size = cc.size(47.8, 48);
                    else collider.size = sz;
                    collider.apply();
                }
            }
        }
        // console.log("tile init complete, marking mounds")
        // for(j = 3; j < layerSz.height; j++){
        var FloorTile = floor.getTiledTileAt(layerSz.width-1, 7, true);
        if(FloorTile.gid){
            FloorTile.node.group = "mound";
            var col = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
            col.size = cc.size(47.8, 48);
            col.apply();
            // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        }
        // }
        for(var i = 1; i < layerSz.width-1; i++){
            for(var j = 0; j < layerSz.height; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if(FloorTile.gid != 0 && ((floor.getTiledTileAt(i+1, j, true).gid == 0 && floor.getTiledTileAt(i+1, j+1, true).gid != 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0 && floor.getTiledTileAt(i-1, j+1, true).gid != 0))){
                    FloorTile.node.group = "mound";
                    var col = FloorTile.node.getComponent(cc.PhysicsBoxCollider);
                    col.size = cc.size(47.8, 48);
                    col.apply();
                    // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
                }
            }
        }

        var obj_list = map.getObjectGroup("colors").getObjects();
        this.player_col = 6*this.strip + cc.find('Canvas/root/player').getComponent('player').color
        console.log("bias towards " + this.player_col);
        obj_list.forEach((obj) => {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            
            var cannot_hide = Math.floor(Math.random() * 3);
            var col = 0;
            if(cannot_hide) col = this.base + Math.floor(Math.random() * 5);
            else col = this.player_col;
            // console.log(obj.x, obj.y, x_size, y_size);
            // console.log("Create colored block with gid " + this.base + color);

            for(i = obj.x / 48; i < (obj.x / 48 + x_size); i++){
                for(j = 10 - (obj.y/48); j < (10 - (obj.y/48) + y_size); j++){
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = col;
                }
            }
        });
                // sharp obstacle
        var map_layer = map.getLayer("enemy");
        var layer_size = map_layer.getLayerSize();
        for(var i = 0; i < layer_size.width; i++){
            for(var j = 0; j < layer_size.height; j++){
                var tile = map_layer.getTiledTileAt(i, j, true);
                if(tile.gid == 878 + 61){
                    console.log(tile.node.x, tile.node.y);

                    var section_count = cc.find('Canvas/root/player').getComponent('player').section_count;

                    var sharp_pre = cc.instantiate(this.sharp);
                    sharp_pre.x = section_count * 1920 + tile.node.x;
                    sharp_pre.y = tile.node.y;
                    console.log('sharp', sharp_pre.x, sharp_pre.y);
                    cc.find("Canvas/root/mapworld").addChild(sharp_pre);
                }
            }
        }
        map_layer.enabled = false;

        // enemy init
        var lv_diff = cc.find("Canvas/root/player").getComponent('player').section_count;

        if(lv_diff && cc.director.getScene().name != "day"){
            var range_arr = [360, 300, 300, 250, 200, 150, 120, 100];      // 100 or 80 if one light spawned, 60 or 50 if two, 30 or 20 if three
            var lightcount = 0;
            if(lv_diff >= 12){
                lightcount = 3;
            }else if(lv_diff >= 6){
                lightcount = 2 + (Math.floor(Math.random() * (lv_diff - 6)))? 1 : 0;
            }else if(lv_diff >= 2){
                lightcount = 1 + (Math.floor(Math.random() * (lv_diff - 2)))? 1 : 0;
            }else lightcount = Math.floor(Math.random() * 2);
            if(Math.floor(Math.random() * 2)) lightcount++;

            var offset = lv_diff * 1920 + ((lv_diff == 0)? 400 : 0);
            for(var i = 0; i < lightcount; i++){
                var range = range_arr[(lightcount-1) * 2 + Math.floor(Math.random() * 2)];
                var enemy = cc.instantiate(this.searchlight);
                if(enemy.getComponent('enemy_wrapper'))enemy.getComponent('enemy_wrapper').range = range;
                enemy.setPosition(offset + (1920/(lightcount+1))*i + (Math.floor(Math.random()*400) -200), 200);
                cc.find("Canvas/root/Enemy_collection").addChild(enemy);
            }
        }
        //coin 不知為甚麼只有第一個可以成功  後面都說instantiate null
        var money=cc.instantiate(this.coin_pre);
        money.x=Math.random()*400+offset;
        money.y=200;
        cc.find("Canvas/root/powerups").addChild(money);

    }
}
