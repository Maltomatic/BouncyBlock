
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player_multi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4ea1af56VI/qdqP2nSLwou', 'player_multi');
// scripts/player_multi.ts

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
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.maplist = null;
        _this.sec0 = null;
        _this.sec1 = null;
        _this.sec2 = null;
        _this.sec3 = null;
        _this.sec4 = null;
        _this.sec5 = null;
        _this.sec6 = null;
        _this.sec7 = null;
        _this.sec8 = null;
        _this.sec9 = null;
        _this.sec10 = null;
        _this.sec11 = null;
        _this.sec12 = null;
        _this.sec13 = null;
        _this.sec14 = null;
        _this.sec15 = null;
        _this.sec16 = null;
        _this.sec17 = null;
        _this.sec18 = null;
        _this.sec19 = null;
        _this.sec20 = null;
        _this.Score = null;
        _this.Color = null;
        _this.notif = null;
        _this.coin_point = null;
        _this.coin = 0;
        _this.player_jump = null;
        _this.get_coin = null;
        _this.bubble_powerup = null;
        _this.powerup = 0;
        _this.die_audio = null;
        _this.get_powerup_bubble = null;
        _this.sharp_knife = null;
        _this.shooted = null;
        _this.multi_back_music = null; // @A@
        _this.data_point = null;
        _this.signal_point = null;
        _this.mute_point = null;
        _this.debug_mode = true;
        _this.hidden = false;
        _this.noisy = 0;
        _this.unhide = false;
        // private ACK: number = 5;
        _this.recv_msg = 0;
        _this.data = 0;
        _this.mute = 0;
        _this.in_hiding = 0;
        _this.signal = 0;
        _this.on_boost = 0;
        _this.sec_list = [];
        _this.dir = 0;
        _this.prev_dir = 0;
        _this.fly_state = 0; // 0 for on ground, 1 for flying, -1 for falling
        _this.on_floor = true;
        _this.stick = false;
        _this.invis = false;
        _this.chameleon = null;
        _this.id = 0;
        _this.room = null;
        _this.section_count = 0; // on contact with marker, if section_count * 1920 < this.node.x: init next section and section_count ++
        _this.score = 0;
        _this.hiatus = false;
        _this.color = 0;
        _this.strip = 0;
        _this.base = 0;
        _this.last_x = 0.0;
        // color info of new_tileset
        _this.color_list = { 7: "#2b3a67", 8: "#496a81", 9: "#66999b", 10: "#b3af8f", 11: "#ffc582",
            13: "#1c3144", 14: "#596f62", 15: "#7ea16b", 16: "#c3d898", 17: "#70161d",
            19: "#083e77", 20: "#edebd3", 21: "#da4167", 22: "#f4d35e", 23: "#f78664",
            25: "#562c2c", 26: "#f2542d", 27: "#f5dfbb", 28: "#0e9595", 29: "#127474",
            31: "#8e9aaf", 32: "#cbc0d3", 33: "#efd3d7", 34: "#feeafa", 35: "#dee2ff" };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.setcolor = function () {
        //-----------player color----------------------
        //random choose player color
        this.strip = cc.find('Canvas/root').getComponent('root').color_strip;
        this.base = 1 + 6 * this.strip;
        this.color = 1 + Math.floor(Math.random() * 4);
        //// console.log(this.base +  Math.floor(Math.random() * 5));
        var color_str = this.color_list[this.base + this.color];
        var color = new cc.Color(255, 255, 255);
        this.Color.node.color = color.fromHEX(color_str);
        //-------------------------------------------------
    };
    Player.prototype.onLoad = function () {
        cc.audioEngine.pauseMusic();
        this.setcolor();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.dir = 0;
        this.section_count = 0;
    };
    Player.prototype.onDestroy = function () {
        this.id = cc.sys.localStorage.getItem('id');
        this.room = cc.sys.localStorage.getItem('room');
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        console.log(other.tag);
        var touch = contact.getWorldManifold().normal;
        // // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //// console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                //// console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count / 2, 13));
                //// console.log(rand);
                //// console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            } //else // console.log(this.node.x, this.section_count);
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            // console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")")
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y < 0)
                    this.on_floor = true;
            }
            if (other.node.group == 'mound') {
                if ((other.node.getComponent(cc.TiledTile).gid == this.color + this.base && touch.x) || this.invis) {
                    this.node.getChildByName('eye').active = false;
                    this.hidden = true;
                    if (this.invis)
                        this.chameleon = this.color_list[other.node.getComponent(cc.TiledTile).gid];
                    // this.last_x = this.node.x;
                }
            }
        }
        else if (other.node.group == 'coin') { // @@ 
            cc.audioEngine.playEffect(this.get_coin, false);
            this.update_coin(1);
            other.node.destroy();
        }
        else if (other.node.group == 'bubble') { // @@
            if (other.tag == 3) { // colorful bubble
                cc.audioEngine.playEffect(this.get_powerup_bubble, false);
                this.powerup++;
                this.update_powerup();
                other.node.destroy();
            }
            //losy
            else if (other.tag == 4) { // bubble mute 
                //  cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.mute++;
                this.update_mute();
                other.node.destroy();
            }
            else if (other.tag == 5) { // bubble signal
                // cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.signal++;
                this.update_signal();
                other.node.destroy();
                other.node.destroy();
            }
            else if (other.tag == 6) { // colorful data
                //  cc.audioEngine.playEffect(this.get_B_L_bubble, false); 
                this.data++;
                this.update_data();
                other.node.destroy();
            }
        }
        else if (other.node.name == 'missile') {
            cc.audioEngine.playEffect(this.shooted, false);
            // diee
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.loser();
        }
        else if ((other.node.name[0] == 's' && other.node.name[1] == 'h') || other.node.name == 'spider') {
            if (other.node.name[0] == 's') {
                cc.audioEngine.playEffect(this.sharp_knife, false);
            }
            // diee
            // deploy white particles
            this.die_particle();
            // this.node.active = false;
            this.loser();
        }
    };
    Player.prototype.die_particle = function () {
        cc.audioEngine.playEffect(this.die_audio, false);
        this.node.getChildByName('eye').active = false;
        var explode = this.node.getChildByName("star_explode");
        explode.active = true;
        explode.getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        explode.getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        this.node.getChildByName('color').active = false;
    };
    Player.prototype.loser = function () {
        var _this = this;
        if (this.id) {
            // self is creator
            firebase.database().ref('in_game/' + this.room + '/joiner').set(-100, function () {
                firebase.database().ref('in_game/' + _this.room + 'res/creator_res').set(_this.score, function () {
                    _this.hiatus = true;
                    _this.check_mail();
                });
            });
        }
        else {
            // self is joiner
            firebase.database().ref('in_game/' + this.room + '/creator').set(-100, function () {
                firebase.database().ref('in_game/' + _this.room + 'res/joiner_res').set(_this.score, function () {
                    _this.hiatus = true;
                    _this.check_mail();
                });
            });
        }
    };
    Player.prototype.onEndContact = function (contact, self, other) {
        //a bug happens when the color of mound is same as the color of player, not solved yet 
        // fixed with mound. player should now check collisions with mound
        if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
        }
        else if (other.node.group == 'mound') {
            // if(other.node.getComponent(cc.TiledTile).gid == this.color + this.base) {
            this.node.getChildByName('eye').active = true;
            this.hidden = false;
            // }
        }
    };
    Player.prototype.start = function () {
        this.playBGM();
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec10, this.sec11, this.sec12, this.sec13, this.sec17, this.sec18, this.sec19];
        this.score = 0;
        this.data = 5;
        //------------sparkle color------------------------
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).startColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColor = this.Color.node.color;
        this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).endColorVar = this.Color.node.color;
        //-------------------------------------------------
        this.check_mail();
    };
    Player.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.multi_back_music, true);
    };
    Player.prototype.update = function (dt) {
        if (this.invis && !this.unhide) {
            if (!this.hidden) {
                var cl = new cc.Color(0, 0, 0);
                this.Color.node.color = cl;
            }
            else {
                var cl = new cc.Color(0, 0, 0);
                this.Color.node.color = cl.fromHEX(this.chameleon);
            }
            console.log("currently invisible");
        }
        if (this.node.y <= -400) {
            // diee
            // deploy white particles
            this.die_particle();
            this.loser();
        }
        this.camera_track();
        this.node.x += this.dir * 200 * dt;
        if (this.fly_state == 1) {
            this.node.x -= this.prev_dir * 0.4;
            this.fly_state = -1;
        }
        else if (this.stick) {
            // console.log("stick");
            this.node.x += this.prev_dir * 0.4;
            this.stick = false;
        }
        this.node.scaleX = (this.dir >= 0) ? 1 : -1;
        var dy = this.getComponent(cc.RigidBody).linearVelocity.y;
        //----------sparkle emission rate is 0 when didnt move-----------------------------------------
        if (this.dir != 0 || dy > 10)
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 100;
        else
            this.node.getChildByName("sparkle").getComponent(cc.ParticleSystem).emissionRate = 0;
        //---------player spin---------------
        if ((dy > 10) && this.dir == 1)
            this.spin_right();
        else if ((dy > 10) && this.dir == -1)
            this.spin_left();
        else if (this.node.angle != 0)
            this.node.angle = 0;
        //--------score-------------------------------
        this.score = (Math.round(this.node.x / 35) > this.score) ? Math.round(this.node.x / 35) : this.score;
        this.Score.getComponent(cc.Label).string = this.score.toString();
        //--------------------------------------------
    };
    Player.prototype.spin_right = function () {
        this.node.angle -= 12;
    };
    Player.prototype.spin_left = function () {
        this.node.angle += 12;
    };
    Player.prototype.camera_track = function () {
        if (this.fly_state && !this.dir)
            return;
        if (this.node.x < 100)
            this.camera.x = 0;
        else
            this.camera.x = this.node.x - 100;
    };
    Player.prototype.check_mail = function () {
        var _this = this;
        if (!this.hiatus) {
            var ref = firebase.database().ref('in_game/' + this.room + ((this.id == 1) ? '/creator' : '/joiner'));
            ref.once('value', function (snapshot) {
                var rd = parseInt(snapshot.val());
                console.log("read message value:" + rd);
                if (rd < -50) {
                    firebase.database().ref('in_game/' + _this.room + '/res').once('value', function (snap) {
                        var self_score = _this.score;
                        var other_score = 0;
                        if (_this.id) {
                            firebase.database().ref('in_game/' + _this.room + 'res/creator_res').set(_this.score, function () {
                                other_score = parseInt(snap['joiner']);
                                cc.sys.localStorage.setItem('multi_self', self_score);
                                cc.sys.localStorage.setItem('multi_other', other_score);
                                if (self_score >= other_score) {
                                    var explode = _this.node.getChildByName("star_explode");
                                    explode.active = true;
                                    explode.getComponent(cc.ParticleSystem).startColor = cc.color(0, 0, 0);
                                    explode.getComponent(cc.ParticleSystem).endColor = cc.color(229, 229, 22);
                                    explode.getComponent(cc.ParticleSystem).endColorVar = _this.Color.node.color;
                                    _this.scheduleOnce(function () {
                                        cc.director.loadScene('multi_win');
                                    }, 0.3);
                                }
                                else {
                                    _this.die_particle();
                                    cc.director.loadScene('multi_lose');
                                }
                            });
                        }
                        else {
                            firebase.database().ref('in_game/' + _this.room + 'res/joiner_res').set(_this.score, function () {
                                other_score = parseInt(snap['creator']);
                                cc.sys.localStorage.setItem('multi_self', self_score);
                                cc.sys.localStorage.setItem('multi_other', other_score);
                                if (self_score >= other_score) {
                                    var explode = _this.node.getChildByName("star_explode");
                                    explode.active = true;
                                    explode.getComponent(cc.ParticleSystem).startColor = cc.color(0, 0, 0);
                                    explode.getComponent(cc.ParticleSystem).endColor = cc.color(229, 229, 22);
                                    explode.getComponent(cc.ParticleSystem).endColorVar = _this.Color.node.color;
                                    _this.scheduleOnce(function () {
                                        cc.director.loadScene('multi_win');
                                    }, 0.3);
                                }
                                else {
                                    _this.die_particle();
                                    cc.director.loadScene('multi_lose');
                                }
                            });
                        }
                    });
                }
                else if (rd > 0) {
                    console.log("received message");
                    ref.set((rd - 1), function () {
                        _this.check_mail();
                    });
                    if (!_this.in_hiding) {
                        _this.recv_msg++;
                        console.log("messages left now " + _this.recv_msg);
                        cc.audioEngine.playEffect(_this.notif, false);
                        _this.Color.node.color = new cc.Color(255, 255, 255);
                        _this.unhide = true;
                        _this.scheduleOnce(function () {
                            _this.recv_msg--;
                            console.log("visible time up, messages left: " + _this.recv_msg);
                            if (_this.recv_msg == 0) {
                                _this.unhide = false;
                                var color_str = _this.color_list[_this.base + _this.color];
                                var color = new cc.Color(255, 255, 255);
                                _this.Color.node.color = color.fromHEX(color_str);
                            }
                        }, 3);
                    }
                }
                else
                    _this.check_mail();
            });
        }
        else {
            if (this.id) {
                firebase.database().ref('in_game/' + this.room + '/res/joiner_res').once('value', function (snapshot) {
                    if (snapshot.exists()) {
                        var self_score = _this.score;
                        var other_score = parseInt(snapshot.val());
                        cc.sys.localStorage.setItem('multi_self', self_score);
                        cc.sys.localStorage.setItem('multi_other', other_score);
                        if (self_score >= other_score)
                            cc.director.loadScene('multi_win');
                        else
                            cc.director.loadScene('multi_lose');
                    }
                    else
                        _this.check_mail();
                });
            }
            else {
                firebase.database().ref('in_game/' + this.room + '/res/creator_res').once('value', function (snapshot) {
                    if (snapshot.exists()) {
                        var self_score = _this.score;
                        var other_score = parseInt(snapshot.val());
                        cc.sys.localStorage.setItem('multi_self', self_score);
                        cc.sys.localStorage.setItem('multi_other', other_score);
                        if (self_score >= other_score)
                            cc.director.loadScene('multi_win');
                        else
                            cc.director.loadScene('multi_lose');
                    }
                    else
                        _this.check_mail();
                });
            }
        }
    };
    Player.prototype.onKeyDown = function (event) {
        var _this = this;
        if (event.keyCode == cc.macro.KEY.space) {
            if (this.on_floor)
                this.jump();
        }
        if (event.keyCode == cc.macro.KEY.left) {
            this.dir = -1;
            this.prev_dir = this.dir;
        }
        else if (event.keyCode == cc.macro.KEY.right) {
            this.dir = 1;
            this.prev_dir = this.dir;
        }
        if (event.keyCode == cc.macro.KEY.enter) { // send message
            if (this.data) {
                this.Color.node.color = new cc.Color(255, 255, 255);
                this.data -= 1;
                // if id = 1 write to joiner, else write to creator
                if (this.id) {
                    // self is creator
                    firebase.database().ref('in_game/' + this.room + '/joiner').once('value', function (snapshot) {
                        var ping = snapshot.val();
                        firebase.database().ref('in_game/' + _this.room + '/joiner').set(ping + 1);
                    });
                }
                else {
                    // self is joiner
                    firebase.database().ref('in_game/' + this.room + '/creator').once('value', function (snapshot) {
                        var ping = snapshot.val();
                        firebase.database().ref('in_game/' + _this.room + '/creator').set(ping + 1);
                    });
                }
                this.noisy++;
                var delay = 1 + Math.min(1.5, this.section_count / 8);
                if (this.on_boost)
                    delay *= 0.3;
                this.scheduleOnce(function () {
                    _this.noisy--;
                    var color_str = _this.color_list[_this.base + _this.color];
                    var color = new cc.Color(255, 255, 255);
                    _this.Color.node.color = color.fromHEX(color_str);
                }, delay);
            }
        }
        if (event.keyCode == cc.macro.KEY.r) { // ##
            // use color powerup
            var cl = this.Color.node.color;
            this.invis = true;
            this.powerup--;
            this.update_powerup();
            this.scheduleOnce(function () {
                _this.Color.node.color = cl;
                _this.invis = false;
            }, 5);
        }
        else if (event.keyCode == cc.macro.KEY.s) { // ##
            // use bubble signal
            this.on_boost++;
            this.signal--;
            this.update_signal();
            this.scheduleOnce(function () {
                _this.on_boost--;
            }, 5);
        }
        else if (event.keyCode == cc.macro.KEY.f) { // ##
            // use bubble mute
            this.in_hiding++;
            this.mute--;
            this.update_mute();
            this.scheduleOnce(function () {
                _this.in_hiding--;
            }, 5);
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.dir = 0;
                break;
            case cc.macro.KEY.right:
                this.dir = 0;
                break;
        }
    };
    Player.prototype.jump = function () {
        cc.audioEngine.playEffect(this.player_jump, false);
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        this.fly_state = 1;
        if (!this.debug_mode)
            this.on_floor = false;
        // console.log(this.prev_dir + "fly state: " + this.fly_state);
    };
    Player.prototype.update_coin = function (number) {
        this.coin += number;
        this.coin_point.getComponent(cc.Label).string = this.coin.toString();
    };
    Player.prototype.update_powerup = function () {
        this.bubble_powerup.getComponent(cc.Label).string = this.powerup.toString();
    };
    //losy
    Player.prototype.update_mute = function () {
        this.mute_point.getComponent(cc.Label).string = this.mute.toString();
    };
    Player.prototype.update_signal = function () {
        this.signal_point.getComponent(cc.Label).string = this.signal.toString();
    };
    Player.prototype.update_data = function () {
        this.data_point.getComponent(cc.Label).string = this.data.toString();
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "maplist", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec0", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec1", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec3", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec4", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec5", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec6", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec7", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec8", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec9", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec10", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec11", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec12", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec13", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec14", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec15", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec16", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec17", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec18", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec19", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "sec20", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "Score", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "Color", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "notif", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "coin_point", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "player_jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_coin", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bubble_powerup", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "die_audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "get_powerup_bubble", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "sharp_knife", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "shooted", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "multi_back_music", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "data_point", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "signal_point", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "mute_point", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyX211bHRpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQTZqQkM7UUExakJHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFpQixJQUFJLENB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QUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDSTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUNBQ0k7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ1E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNTO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7c0RBQ2tCO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FDTztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNnQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVTtJQXRGbkIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQTZqQmxCO0lBQUQsYUFBQztDQTdqQkQsQUE2akJDLENBN2pCMkIsRUFBRSxDQUFDLFNBQVMsR0E2akJ2QztBQTdqQlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcGxpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM2OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzc6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjODogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzExOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzEzOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE1OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE2OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE4OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzE5OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzIwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgU2NvcmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIENvbG9yOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG5vdGlmOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY29pbl9wb2ludCA6IGNjLk5vZGUgPSBudWxsOyAgXHJcbiAgICBjb2luOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBwbGF5ZXJfanVtcCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ2V0X2NvaW4gOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnViYmxlX3Bvd2VydXAgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBwb3dlcnVwOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRpZV9hdWRpbyA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ2V0X3Bvd2VydXBfYnViYmxlIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzaGFycF9rbmlmZSA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7IFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIHNob290ZWQgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG11bHRpX2JhY2tfbXVzaWMgOiBjYy5BdWRpb0NsaXAgPSBudWxsOy8vIEBBQFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGF0YV9wb2ludCA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2lnbmFsX3BvaW50IDogY2MuTm9kZSA9IG51bGw7IFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtdXRlX3BvaW50IDogY2MuTm9kZSA9IG51bGw7IFxyXG5cclxuICAgIGRlYnVnX21vZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG5vaXN5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB1bmhpZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIHByaXZhdGUgQUNLOiBudW1iZXIgPSA1O1xyXG4gICAgcHJpdmF0ZSByZWN2X21zZzogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IG51bWJlciA9IDA7XHJcbiAgICBtdXRlOm51bWJlcj0wO1xyXG4gICAgcHJpdmF0ZSBpbl9oaWRpbmc6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc2lnbmFsOm51bWJlcj0wO1xyXG4gICAgcHJpdmF0ZSBvbl9ib29zdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNlY19saXN0ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBkaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZXZfZGlyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBmbHlfc3RhdGU6IG51bWJlciA9IDA7ICAvLyAwIGZvciBvbiBncm91bmQsIDEgZm9yIGZseWluZywgLTEgZm9yIGZhbGxpbmdcclxuICAgIHByaXZhdGUgb25fZmxvb3I6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzdGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbnZpczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaGFtZWxlb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSByb29tOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgc2VjdGlvbl9jb3VudCA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaGlhdHVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29sb3I6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcclxuICAgIGJhc2U6IG51bWJlciA9IDA7XHJcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcclxuXHJcbiAgICAvLyBjb2xvciBpbmZvIG9mIG5ld190aWxlc2V0XHJcbiAgICBjb2xvcl9saXN0OiBhbnkgPSB7NzogXCIjMmIzYTY3XCIsODogXCIjNDk2YTgxXCIsOTogXCIjNjY5OTliXCIsIDEwOiBcIiNiM2FmOGZcIiwgMTE6IFwiI2ZmYzU4MlwiLFxyXG4gICAgMTM6XCIjMWMzMTQ0XCIsIDE0OiBcIiM1OTZmNjJcIiwgMTU6IFwiIzdlYTE2YlwiLDE2OiBcIiNjM2Q4OThcIiwxNzogXCIjNzAxNjFkXCIsXHJcbiAgICAxOSA6XCIjMDgzZTc3XCIsIDIwIDpcIiNlZGViZDNcIiwgMjEgOlwiI2RhNDE2N1wiLCAyMiA6XCIjZjRkMzVlXCIsIDIzIDpcIiNmNzg2NjRcIiwgXHJcbiAgICAyNSAgOlwiIzU2MmMyY1wiLCAyNiA6XCIjZjI1NDJkXCIsIDI3IDpcIiNmNWRmYmJcIiwgMjggOlwiIzBlOTU5NVwiLCAyOSA6XCIjMTI3NDc0XCIsIFxyXG4gICAgMzEgOlwiIzhlOWFhZlwiLCAzMiA6XCIjY2JjMGQzXCIsIDMzIDpcIiNlZmQzZDdcIiwgMzQgOlwiI2ZlZWFmYVwiLCAzNSA6XCIjZGVlMmZmXCIgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHNldGNvbG9yKCkge1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS1wbGF5ZXIgY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy9yYW5kb20gY2hvb3NlIHBsYXllciBjb2xvclxyXG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwO1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRoaXMuYmFzZSArICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSk7XHJcbiAgICAgICAgdmFyIGNvbG9yX3N0ciA9IHRoaXMuY29sb3JfbGlzdFt0aGlzLmJhc2UgKyB0aGlzLmNvbG9yXTtcclxuICAgICAgICB2YXIgY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IGNvbG9yLmZyb21IRVgoY29sb3Jfc3RyKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICB0aGlzLnNldGNvbG9yKCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5yb29tID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb29tJyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhvdGhlci50YWcpO1xyXG4gICAgICAgIHZhciB0b3VjaCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbDtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcImhpdCBub2RlIHdpdGggY29sb3IgXCIgKyBvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCk7XHJcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEwMDApe1xyXG4gICAgICAgICAgICAvLy8vIGNvbnNvbGUubG9nKFwiaGl0IG1hcmtlclwiKTtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gdGhpcy5zZWN0aW9uX2NvdW50KjE5MjApe1xyXG4gICAgICAgICAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKDIrdGhpcy5zZWN0aW9uX2NvdW50LzIsIDEzKSlcclxuICAgICAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2cocmFuZCk7XHJcbiAgICAgICAgICAgICAgICAvLy8vIGNvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY19saXN0W3JhbmRdKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwbGlzdC5hZGRDaGlsZChuZXh0X3NlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IC8vZWxzZSAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5zZWN0aW9uX2NvdW50KTtcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdncm91bmQnIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gJ21vdW5kJyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG90aGVyLm5vZGUuZ3JvdXAgKyBcIiAoXCIgKyB0b3VjaC54ICsgXCIsIFwiICsgdG91Y2gueSArIFwiKVwiKVxyXG4gICAgICAgICAgICBpZih0b3VjaC55ICYmIHRoaXMuZmx5X3N0YXRlID09IC0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMub25fZmxvb3IgJiYgdG91Y2gueSA8IDApIHRoaXMub25fZmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKChvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCA9PSB0aGlzLmNvbG9yICsgdGhpcy5iYXNlICYmIHRvdWNoLngpIHx8IHRoaXMuaW52aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmludmlzKSB0aGlzLmNoYW1lbGVvbiA9IHRoaXMuY29sb3JfbGlzdFtvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYXN0X3ggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9ZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09ICdjb2luJyl7IC8vIEBAIFxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2V0X2NvaW4sIGZhbHNlKTsgXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2NvaW4oMSk7XHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2J1YmJsZScpeyAvLyBAQFxyXG4gICAgICAgICAgICBpZihvdGhlci50YWcgPT0gMyl7IC8vIGNvbG9yZnVsIGJ1YmJsZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdldF9wb3dlcnVwX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJ1cCsrXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9wb3dlcnVwKCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC8vbG9zeVxyXG4gICAgICAgICAgICAgZWxzZSBpZihvdGhlci50YWcgPT0gNCl7IC8vIGJ1YmJsZSBtdXRlIFxyXG4gICAgICAgICAgICAgICAgLy8gIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfQl9MX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0ZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfbXV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSA1KXsgLy8gYnViYmxlIHNpZ25hbFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfQl9MX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25hbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlX3NpZ25hbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihvdGhlci50YWcgPT0gNil7IC8vIGNvbG9yZnVsIGRhdGFcclxuICAgICAgICAgICAgICAgIC8vICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2V0X0JfTF9idWJibGUsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUubmFtZSA9PSAnbWlzc2lsZScpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2hvb3RlZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBkaWVlXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxvc2VyKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoKG90aGVyLm5vZGUubmFtZVswXSA9PSAncycmJm90aGVyLm5vZGUubmFtZVsxXSA9PSAnaCcpfHxvdGhlci5ub2RlLm5hbWUgPT0gJ3NwaWRlcicpe1xyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLm5hbWVbMF0gPT0gJ3MnKXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaGFycF9rbmlmZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRpZWVcclxuICAgICAgICAgICAgLy8gZGVwbG95IHdoaXRlIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaWVfcGFydGljbGUoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5kaWVfYXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBleHBsb2RlPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXJfZXhwbG9kZVwiKTtcclxuICAgICAgICBleHBsb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3I9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW5kQ29sb3JWYXI9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2NvbG9yJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsb3Nlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuaWQpe1xyXG4gICAgICAgICAgICAvLyBzZWxmIGlzIGNyZWF0b3JcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvam9pbmVyJykuc2V0KC0xMDAsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICdyZXMvY3JlYXRvcl9yZXMnKS5zZXQodGhpcy5zY29yZSwgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpYXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIHNlbGYgaXMgam9pbmVyXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL2NyZWF0b3InKS5zZXQoLTEwMCwgKCkgPT57XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJ3Jlcy9qb2luZXJfcmVzJykuc2V0KHRoaXMuc2NvcmUsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICAvL2EgYnVnIGhhcHBlbnMgd2hlbiB0aGUgY29sb3Igb2YgbW91bmQgaXMgc2FtZSBhcyB0aGUgY29sb3Igb2YgcGxheWVyLCBub3Qgc29sdmVkIHlldCBcclxuICAgICAgICAvLyBmaXhlZCB3aXRoIG1vdW5kLiBwbGF5ZXIgc2hvdWxkIG5vdyBjaGVjayBjb2xsaXNpb25zIHdpdGggbW91bmRcclxuICAgICAgICBpZih0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZiggb3RoZXIubm9kZS5ncm91cCA9PSAnbW91bmQnKSB7XHJcbiAgICAgICAgICAgIC8vIGlmKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkID09IHRoaXMuY29sb3IgKyB0aGlzLmJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICB0aGlzLnNlY19saXN0ID0gW3RoaXMuc2VjMCwgdGhpcy5zZWMxLCB0aGlzLnNlYzIsIHRoaXMuc2VjMywgdGhpcy5zZWM0LHRoaXMuc2VjNSx0aGlzLnNlYzEwLHRoaXMuc2VjMTEsdGhpcy5zZWMxMix0aGlzLnNlYzEzLHRoaXMuc2VjMTcsdGhpcy5zZWMxOCx0aGlzLnNlYzE5XTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmRhdGEgPSA1O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tc3BhcmtsZSBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm11bHRpX2JhY2tfbXVzaWMsIHRydWUpOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pbnZpcyAmJiAhdGhpcy51bmhpZGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5oaWRkZW4pe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY2w7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY2wuZnJvbUhFWCh0aGlzLmNoYW1lbGVvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50bHkgaW52aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm5vZGUueSA8PSAtNDAwKXtcclxuICAgICAgICAgICAgLy8gZGllZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMuZGllX3BhcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW1lcmFfdHJhY2soKTtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLmRpciAqIDIwMCAqIGR0O1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnByZXZfZGlyICogMC40O1xyXG4gICAgICAgICAgICB0aGlzLmZseV9zdGF0ZSA9IC0xO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RpY2spe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0aWNrXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnByZXZfZGlyICogMC40O1xyXG4gICAgICAgICAgICB0aGlzLnN0aWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5kaXIgPj0gMCkgPyAxIDogLTE7XHJcbiAgICAgICAgdmFyIGR5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55O1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLXNwYXJrbGUgZW1pc3Npb24gcmF0ZSBpcyAwIHdoZW4gZGlkbnQgbW92ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYodGhpcy5kaXIhPTB8fGR5PjEwKSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGFya2xlXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuZW1pc3Npb25SYXRlPTEwMDtcclxuICAgICAgICBlbHNlIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MDtcclxuICAgICAgICAvLy0tLS0tLS0tLXBsYXllciBzcGluLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IDEpIHRoaXMuc3Bpbl9yaWdodCgpO1xyXG4gICAgICAgIGVsc2UgaWYoKGR5ID4gMTApICYmIHRoaXMuZGlyID09IC0xKSB0aGlzLnNwaW5fbGVmdCgpO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy5ub2RlLmFuZ2xlICE9IDApIHRoaXMubm9kZS5hbmdsZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS1zY29yZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICB0aGlzLnNjb3JlID0gKE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgPiB0aGlzLnNjb3JlKSA/IE1hdGgucm91bmQodGhpcy5ub2RlLnggLyAzNSkgOiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuU2NvcmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgfVxyXG4gICAgc3Bpbl9yaWdodCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSAtPSAxMjtcclxuICAgIH1cclxuICAgIHNwaW5fbGVmdCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmFfdHJhY2soKXtcclxuICAgICAgICBpZih0aGlzLmZseV9zdGF0ZSAmJiAhdGhpcy5kaXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnggPCAxMDApIHRoaXMuY2FtZXJhLnggPSAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5jYW1lcmEueCA9IHRoaXMubm9kZS54IC0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrX21haWwoKXtcclxuICAgICAgICBpZighdGhpcy5oaWF0dXMpe1xyXG4gICAgICAgICAgICB2YXIgcmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICgodGhpcy5pZCA9PSAxKT8gJy9jcmVhdG9yJyA6ICcvam9pbmVyJykpO1xyXG4gICAgICAgICAgICByZWYub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZCA9IHBhcnNlSW50KHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhZCBtZXNzYWdlIHZhbHVlOlwiICsgcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYocmQgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL3JlcycpLm9uY2UoJ3ZhbHVlJywgKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGZfc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3RoZXJfc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAncmVzL2NyZWF0b3JfcmVzJykuc2V0KHRoaXMuc2NvcmUsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJfc2NvcmUgPSBwYXJzZUludChzbmFwWydqb2luZXInXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9zZWxmJywgc2VsZl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9vdGhlcicsIG90aGVyX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmX3Njb3JlID49IG90aGVyX3Njb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yID0gY2MuY29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvciA9IGNjLmNvbG9yKDIyOSwgMjI5LCAyMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhciA9IHRoaXMuQ29sb3Iubm9kZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV93aW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV9sb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICdyZXMvam9pbmVyX3JlcycpLnNldCh0aGlzLnNjb3JlLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyX3Njb3JlID0gcGFyc2VJbnQoc25hcFsnY3JlYXRvciddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX3NlbGYnLCBzZWxmX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX290aGVyJywgb3RoZXJfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGZfc2NvcmUgPj0gb3RoZXJfc2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwbG9kZT10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyX2V4cGxvZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLnN0YXJ0Q29sb3IgPSBjYy5jb2xvcigwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yID0gY2MuY29sb3IoMjI5LCAyMjksIDIyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyID0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX3dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX2xvc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmQgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIG1lc3NhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmLnNldCgocmQtMSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuaW5faGlkaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN2X21zZyArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlcyBsZWZ0IG5vdyBcIiArIHRoaXMucmVjdl9tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubm90aWYsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3ZfbXNnLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpc2libGUgdGltZSB1cCwgbWVzc2FnZXMgbGVmdDogXCIgKyB0aGlzLnJlY3ZfbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVjdl9tc2cgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3Jfc3RyID0gdGhpcy5jb2xvcl9saXN0W3RoaXMuYmFzZSArIHRoaXMuY29sb3JdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaWQpe1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzL2pvaW5lcl9yZXMnKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihzbmFwc2hvdC5leGlzdHMoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmX3Njb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG90aGVyX3Njb3JlID0gcGFyc2VJbnQoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX3NlbGYnLCBzZWxmX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9vdGhlcicsIG90aGVyX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZl9zY29yZSA+PSBvdGhlcl9zY29yZSkgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV93aW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX2xvc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL3Jlcy9jcmVhdG9yX3JlcycpLm9uY2UoJ3ZhbHVlJywgKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNuYXBzaG90LmV4aXN0cygpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGZfc2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3RoZXJfc2NvcmUgPSBwYXJzZUludChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVsdGlfc2VsZicsIHNlbGZfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX290aGVyJywgb3RoZXJfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmX3Njb3JlID49IG90aGVyX3Njb3JlKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX3dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGlfbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25fZmxvb3IpIHRoaXMuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmVudGVyKXsgICAgICAgIC8vIHNlbmQgbWVzc2FnZVxyXG4gICAgICAgICAgICBpZih0aGlzLmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgaWQgPSAxIHdyaXRlIHRvIGpvaW5lciwgZWxzZSB3cml0ZSB0byBjcmVhdG9yXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmIGlzIGNyZWF0b3JcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9qb2luZXInKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpbmcgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvam9pbmVyJykuc2V0KHBpbmcrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmIGlzIGpvaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL2NyZWF0b3InKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBpbmcgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvY3JlYXRvcicpLnNldChwaW5nKzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2lzeSsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gMSArIE1hdGgubWluKDEuNSwgdGhpcy5zZWN0aW9uX2NvdW50LzgpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5vbl9ib29zdCkgZGVsYXkgKj0gMC4zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9pc3ktLTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3Jfc3RyID0gdGhpcy5jb2xvcl9saXN0W3RoaXMuYmFzZSArIHRoaXMuY29sb3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpeyAvLyAjI1xyXG4gICAgICAgICAgICAvLyB1c2UgY29sb3IgcG93ZXJ1cFxyXG4gICAgICAgICAgICB2YXIgY2wgPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBvd2VydXAtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgfSAgZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zKXsgLy8gIyNcclxuICAgICAgICAgICAgLy8gdXNlIGJ1YmJsZSBzaWduYWxcclxuICAgICAgICAgICAgdGhpcy5vbl9ib29zdCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbC0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zaWduYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMub25fYm9vc3QtLTtcclxuICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgfSAgZWxzZSBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5mKXsgLy8gIyNcclxuICAgICAgICAgICAgLy8gdXNlIGJ1YmJsZSBtdXRlXHJcbiAgICAgICAgICAgIHRoaXMuaW5faGlkaW5nKys7XHJcbiAgICAgICAgICAgIHRoaXMubXV0ZS0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9tdXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluX2hpZGluZy0tO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9IFxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBvbktleVVwKGV2ZW50KXtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wbGF5ZXJfanVtcCwgZmFsc2UpOyBcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCA2MDApO1xyXG4gICAgICAgIHRoaXMuZmx5X3N0YXRlID0gMTtcclxuICAgICAgICBpZighdGhpcy5kZWJ1Z19tb2RlKSB0aGlzLm9uX2Zsb29yID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmV2X2RpciArIFwiZmx5IHN0YXRlOiBcIiArIHRoaXMuZmx5X3N0YXRlKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9jb2luKG51bWJlcil7ICAvLyBAQCBcclxuICAgICAgICB0aGlzLmNvaW4gKz0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuY29pbl9wb2ludC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY29pbi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX3Bvd2VydXAoKXsgIC8vIEBAIFxyXG4gICAgICAgdGhpcy5idWJibGVfcG93ZXJ1cC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucG93ZXJ1cC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLy9sb3N5XHJcbiAgICB1cGRhdGVfbXV0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRlX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tdXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB1cGRhdGVfc2lnbmFsKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNpZ25hbF9wb2ludC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2lnbmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfZGF0YSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRhX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5kYXRhLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19