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
    sharp_down: cc.Prefab = null;

    @property(cc.Prefab)
    spider: cc.Prefab = null;

    @property(cc.Prefab)
    coin_pre: cc.Prefab = null;

    @property(cc.Prefab)
    lego_pre: cc.Prefab=null;

    @property(cc.Prefab)
    bubble_pre: cc.Prefab=null;

    @property(cc.Prefab)
    banana_pre: cc.Prefab=null;
    @property(cc.Prefab)
    data_pre: cc.Prefab=null;
    @property(cc.Prefab)
    signal_pre: cc.Prefab=null;
    @property(cc.Prefab)
    mute_pre: cc.Prefab=null;

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
                    if(floor.getTiledTileAt(i, j-1, true).gid) collider.size = cc.size(47.6, 48);
                    else collider.size = sz;
                    collider.apply();
                }
            }
        }
        // // console.log("tile init complete, marking mounds")
        // for(j = 7; j >= 0; j--){
        //     var FloorTile = floor.getTiledTileAt(layerSz.width-1, j, true);
        //     if(FloorTile.gid) FloorTile.node.group = "mound";
        // }
        // for(var i = 1; i < layerSz.width-1; i++){
        //     for(var j = 0; j < layerSz.height -1; j++){
        //         var FloorTile = floor.getTiledTileAt(i, j, true);
        //         if(FloorTile.gid != 0 && ((floor.getTiledTileAt(i+1, j, true).gid == 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0))){
        //             FloorTile.node.group = "mound";
        //             // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        //         }
        //     }
        // }
        // for(j = 8; j > 2; j--){
        //     var FloorTile = floor.getTiledTileAt(layerSz.width-1, j, true);
        //     if(FloorTile.gid){
        //         if(floor.getTiledTileAt(layerSz.width-1, j-1, true)) FloorTile.node.group = "mound";
        //         else FloorTile.node.group = "mound_top";
                
        //         // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        //     }
        // }
        // for(var i = 1; i < layerSz.width-1; i++){
        //     for(var j = 0; j < layerSz.height -1; j++){
        //         var FloorTile = floor.getTiledTileAt(i, j, true);
        //         if(FloorTile.gid != 0 && ((floor.getTiledTileAt(i+1, j, true).gid == 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0))){
        //             /*if((floor.getTiledTileAt(i+1, j, true).gid == 0 && floor.getTiledTileAt(i+1, j+1, true).gid != 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0 && floor.getTiledTileAt(i-1, j+1, true).gid != 0))*/
        //             if(floor.getTiledTileAt(i, j-1, true).gid) FloorTile.node.group = "mound";
        //             else FloorTile.node.group = "mound_top";
                    
        //             // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        //         }
        //     }
        // }
        var FloorTile = floor.getTiledTileAt(layerSz.width-1, 7, true);
        if(FloorTile.gid){
            FloorTile.node.group = "mound";
            // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
        }
        // }
        for(var i = 1; i < layerSz.width-1; i++){
            for(var j = 0; j < layerSz.height -1; j++){
                var FloorTile = floor.getTiledTileAt(i, j, true);
                if(FloorTile.gid != 0 && ((floor.getTiledTileAt(i+1, j, true).gid == 0 && floor.getTiledTileAt(i+1, j+1, true).gid != 0) || (floor.getTiledTileAt(i-1, j, true).gid == 0 && floor.getTiledTileAt(i-1, j+1, true).gid != 0))){
                    FloorTile.node.group = "mound";
                    // console.log("shrink collider size of tile(" + 39 + ", " + 7 + ") to "+ col.size.width + ", "+ col.size.height);
                }
            }
        }



        var obj_list = map.getObjectGroup("colors").getObjects();
        if(cc.director.getScene().name =="test" || cc.director.getScene().name =="multi")this.player_col = 6*this.strip + cc.find('Canvas/root/player').getComponent(((cc.director.getScene().name == 'multi')? 'player_multi' : 'player')).color
        else if(cc.director.getScene().name =="day")this.player_col = 6*this.strip + cc.find('Canvas/root/player').getComponent('player_day').color;
        //console.log("bias towards " + this.player_col);
        obj_list.forEach((obj) => {
            var x_size = obj.width / 48;
            var y_size = obj.height / 48;
            
            var cannot_hide = Math.floor(Math.random() * 2);
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

        // sharp obstacle、spider、sharp_down
        var section_count;
        if(cc.director.getScene().name =="test" || cc.director.getScene().name =="multi") section_count = cc.find('Canvas/root/player').getComponent(((cc.director.getScene().name == 'multi')? 'player_multi' : 'player')).section_count;
        else if(cc.director.getScene().name =="day") section_count = cc.find('Canvas/root/player').getComponent('player_day').section_count;
        
        var sharp_list = {1: 'sharp', 2: 'sharp2', 3: 'sharp3', 4: 'sharp4'};
        var sharp_d_list = {1: 'sharp_d', 2: 'sharp_d2', 3: 'sharp_d3'};
        var map_layer = map.getLayer("enemy");
        var layer_size = map_layer.getLayerSize();
        var flag = new Array(layer_size.width);
        for( var i = 0; i < layer_size.width; i++) {
            flag[i] = new Array(layer_size.height);
        }
        var flag_d = new Array(layer_size.width);
        for( var i = 0; i < layer_size.width; i++) {
            flag_d[i] = new Array(layer_size.height);
        }
        for(var i = 0; i < layer_size.width; i++){
            for(var j = 0; j < layer_size.height; j++){
                var tile = map_layer.getTiledTileAt(i, j, true);

                //1 static, 234 moving
                if(tile.gid == 878 + 61 && flag[i][j] == null){
                    flag[i][j] = 1;
                    var rad = 1 + Math.floor(Math.random() * 4);  //1 static, 234 moving
                    
                    var sharp_pre = cc.instantiate(this.sharp);
                    sharp_pre.name = sharp_list[rad];
                    sharp_pre.x = section_count * 1920 + tile.node.x;
                    sharp_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld/sharp").addChild(sharp_pre);
                    for(var m = i + 1; ; m++) {
                        var tile_ = map_layer.getTiledTileAt(m, j, true);
                        if(tile_.gid != 878 + 61) break;
                        flag[m][j] = 1;
                        var sharp_p = cc.instantiate(this.sharp);
                        sharp_p.name = sharp_list[rad];
                        sharp_p.x = section_count * 1920 + tile_.node.x;
                        sharp_p.y = tile_.node.y;
                        cc.find("Canvas/root/mapworld/sharp").addChild(sharp_p);
                    }
                //spider
                } else if(tile.gid == 265 + 61){     
                    var spider_pre = cc.instantiate(this.spider);
                    spider_pre.x = section_count * 1920 + tile.node.x;
                    spider_pre.y = tile.node.y;
                    cc.find("Canvas/root/mapworld").addChild(spider_pre);

                //sharp fall down
                } else if(tile.gid == 664 + 61 && flag_d[i][j] == null){      
                    flag_d[i][j] = 1;
                    var rad = 1 + Math.floor(Math.random() * 3);  
                    
                    var sharp_d = cc.instantiate(this.sharp_down);
                    sharp_d.name = sharp_d_list[rad];
                    sharp_d.x = section_count * 1920 + tile.node.x;
                    sharp_d.y = tile.node.y;
                    cc.find("Canvas/root/mapworld/sharp_down").addChild(sharp_d);
                    for(var m = i + 1; ; m++) {
                        var tile_ = map_layer.getTiledTileAt(m, j, true);
                        if(tile_.gid != 664 + 61) break;
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
        for(var i = 0; i < layer_size.width; i++){
            for(var j = 0; j < layer_size.height; j++){
                var tile = coin_layer.getTiledTileAt(i, j, true);
                //coin
                // console.log(tile.gid);
                if(tile.gid == 268 + 61){  
                    var c = cc.instantiate(this.coin_pre);
                    c.x = section_count * 1920 + tile.node.x;
                    c.y = tile.node.y;
                    //c.active = true;
                    cc.find("Canvas/root/mapworld/coin_bubble").addChild(c);
                    tile.gid = 0;
                }
                else if(tile.gid == 225 + 61){  
                    tile.gid = 0;
                    if(cc.director.getScene().name == 'day'){
                        var rad = 1 + Math.floor(Math.random() * 2);  
                        var b = new cc.Node;
                        if(rad == 1) b = cc.instantiate(this.banana_pre);
                        else if(rad == 2) b = cc.instantiate(this.lego_pre);
                        // else b = cc.instantiate(this.bubble_pre);
                        b.x = section_count * 1920 + tile.node.x;
                        b.y = tile.node.y;
                        //c.active = true;
                        cc.find("Canvas/root/mapworld/coin_bubble").addChild(b);
                    }else if(cc.director.getScene().name == 'multi'){
                        var rad = 1 + Math.floor(Math.random() * 4);  
                        var b = new cc.Node;
                        if(rad == 1) b = cc.instantiate(this.bubble_pre);
                        else if(rad == 2) b = cc.instantiate(this.data_pre);
                        else if(rad == 2) b = cc.instantiate(this.signal_pre);
                        else if(rad == 2) b = cc.instantiate(this.mute_pre);
                        // else b = cc.instantiate(this.bubble_pre);
                        b.x = section_count * 1920 + tile.node.x;
                        b.y = tile.node.y;
                        //c.active = true;
                        cc.find("Canvas/root/mapworld/coin_bubble").addChild(b);
                    }else{
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

    }
}
