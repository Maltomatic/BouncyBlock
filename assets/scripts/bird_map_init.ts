const {ccclass, property} = cc._decorator;

@ccclass
export class BirdBase extends cc.Component {

    private base: number = 6;
    private strip: number = 1;

    @property(cc.Prefab)
    coin: cc.Prefab = null;

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        cc.director.getPhysicsManager().enabled = true;
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -600);
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
        console.log(sz);

        var floor = map.getLayer("ground");
        var layerSz = floor.getLayerSize();
        if(this.node.name == "bird0"){
            for(var i = 0; i < layerSz.width; i++){
                for(var j = 0; j < layerSz.height; j++){
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if(FloorTile.gid != 0){
                        // console.log("draw ground box for tile (" + i + ", " + j + ")");
                        FloorTile.node.group = "ground";
                        // console.log("created tile with " + FloorTile.node.group)
                        FloorTile.gid = this.base;
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
        }else{
            for(var i = 0; i < layerSz.width; i++){
                for(var j = 0; j < layerSz.height; j++){
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    FloorTile.gid = this.base;
                }
            }

            console.log("tile init complete, digging path(s)")
            var pathrange = [2, 17];        // path should be range between j = 2 and j = 17

            for(var i = 0; i < layerSz.width; i++){
                // set gid to 0 for path
                var range = Math.floor(Math.random() * 3);
                var up_range_min = Math.max(2, pathrange[0]-range);
                var down_range_min = Math.min(17, pathrange[1]+range);
                range = Math.floor(Math.random() * 3);
                var up_range_max = Math.min(pathrange[1]-range, pathrange[0]+range);
                var down_range_max = Math.max(pathrange[0]+range, pathrange[1]-range);
                

                var down_bound = Math.floor(Math.random() * (down_range_max - down_range_min)) + down_range_min;
                var up_bound =  Math.floor(Math.random() * (up_range_max - up_range_min)) + up_range_min;
                if(down_bound - up_bound < 4){
                    down_bound++;
                    up_bound--;
                }
                
                console.log(up_bound, down_bound);
                for(var k = up_bound; k < down_bound; k++) floor.getTiledTileAt(i, k, true).gid = 0;
                pathrange[0] = up_bound;
                pathrange[1] = down_bound;
            }

            var section_count = cc.find('Canvas/root/bird_player').getComponent('bird_player').section_count;
            for(var i = 0; i < layerSz.width; i++){
                for(var j = 0; j < layerSz.height; j++){
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if(FloorTile.gid != 0){
                        FloorTile.node.group = "ground";
                        // console.log("created tile with " + FloorTile.node.group)
                        FloorTile.gid = this.base;
                        var body = FloorTile.node.addComponent(cc.RigidBody);
                        body.type = cc.RigidBodyType.Static;
                        body.fixedRotation = true;
                        var collider = FloorTile.node.addComponent(cc.PhysicsBoxCollider);
                        collider.offset = cc.v2(sz.width/2, sz.height/2);
                        collider.size = sz;
                        collider.apply();
                    }
                }
                var max_allowed = 5;
                for(var j = 3; j < layerSz.height-3; j++){
                    var FloorTile = floor.getTiledTileAt(i, j, true);
                    if(FloorTile.gid == 0){
                        if(floor.getTiledTileAt(i, j-3, true).gid != 0) continue;
                        var nocoin = Math.floor(Math.random() * 8);
                        if(!nocoin){
                            //init coin
                            max_allowed--;
                            var c = cc.instantiate(this.coin);
                            c.x = section_count * 1920 + FloorTile.node.x;
                            c.y = FloorTile.node.y;
                            console.log("coin at " + c.x, c.y);
                            //c.active = true;
                            cc.find("Canvas/root/mapworld/coin_bubble").addChild(c);
                            if(!max_allowed) break;
                        }else{
                            if(floor.getTiledTileAt(i, j+3, true).gid != 0) break;
                        }
                    }
                }
            }
        }
    }
}
