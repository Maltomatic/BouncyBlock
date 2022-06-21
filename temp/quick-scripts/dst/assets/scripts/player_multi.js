
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
        _this.debug_mode = false;
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
        _this.stick2 = false;
        _this.invis = false;
        _this.chameleon = null;
        _this.id = null;
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
        // console.log(this.base +  Math.floor(Math.random() * 5));
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
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        // console.log(other.tag);
        var touch = contact.getWorldManifold().normal;
        // console.log("hit node with color " + other.node.getComponent(cc.TiledTile).gid);
        if (other.tag == 1000) {
            //// console.log("hit marker");
            if (this.node.x >= this.section_count * 1920) {
                // console.log("init next section");
                this.section_count++;
                var rand = Math.floor(Math.random() * Math.min(2 + this.section_count * 3, 21));
                // console.log(rand);
                // console.log("To instantiate: " + this.sec_list[rand].name);
                var next_section = cc.instantiate(this.sec_list[rand]);
                next_section.x = 1920 * this.section_count;
                next_section.y = 0;
                this.maplist.addChild(next_section);
            }
        }
        else if (other.node.group == 'ground' || other.node.group == 'mound') {
            // console.log(other.node.group + " (" + touch.x + ", " + touch.y + ")")
            if (touch.y && this.fly_state == -1) {
                this.stick = true;
                this.fly_state = 0;
                if (!this.on_floor && touch.y)
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
            this.coin++;
            this.update_coin();
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
        if (this.id == 'creator') {
            // self is creator
            firebase.database().ref('in_game/' + this.room + '/res/creator_res').set(this.score, function () {
                firebase.database().ref('in_game/' + _this.room + '/joiner').set(-100, function () {
                    _this.hiatus = true;
                    _this.check_mail();
                });
            });
        }
        else {
            // self is joiner
            firebase.database().ref('in_game/' + this.room + '/res/joiner_res').set(this.score, function () {
                firebase.database().ref('in_game/' + _this.room + '/creator').set(-100, function () {
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
        var _id = parseInt(cc.sys.localStorage.getItem('id'));
        this.room = cc.sys.localStorage.getItem('room');
        this.coin = cc.sys.localStorage.getItem("coins");
        this.mute = cc.sys.localStorage.getItem("mute");
        this.signal = cc.sys.localStorage.getItem("signal");
        this.powerup = cc.sys.localStorage.getItem("powerup");
        this.data = 5;
        this.update_coin();
        this.update_data();
        this.update_mute();
        this.update_signal();
        this.update_powerup();
        this.playBGM();
        if (_id == 1)
            this.id = 'creator';
        else
            this.id = 'joiner';
        this.dir = 0;
        this.sec_list = [this.sec0, this.sec1, this.sec2, this.sec3, this.sec4, this.sec5, this.sec10, this.sec11, this.sec12, this.sec13, this.sec17, this.sec18, this.sec19];
        this.score = 0;
        console.log("joining as " + this.id, this.room);
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
        if (this.stick2) {
            this.node.x -= 0.4 * this.dir;
            this.dir = 0;
            this.stick2 = false;
        }
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
        this.node.x += this.dir * 250 * dt;
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
            var ref = firebase.database().ref('in_game/' + this.room + '/' + this.id);
            ref.once('value', function (snapshot) {
                var rd = parseInt(snapshot.val());
                console.log("read message value:" + rd);
                if (rd < -50) {
                    console.log("opponent has died, log scores");
                    firebase.database().ref('in_game/' + _this.room + '/res').once('value', function (snap) {
                        var self_score = _this.score;
                        var other_score = 0;
                        console.log(_this.id + " logging scores");
                        firebase.database().ref('in_game/' + _this.room + '/res/' + _this.id + '_res').set(_this.score, function () {
                            if (_this.id == 'creator')
                                other_score = parseInt(snap.child('joiner').val());
                            else
                                other_score = parseInt(snap.child('creator').val());
                            cc.sys.localStorage.setItem('multi_self', self_score);
                            cc.sys.localStorage.setItem('multi_other', other_score);
                            console.log("immediate values: " + self_score, other_score);
                            console.log("stored values: " + cc.sys.localStorage.getItem('multi_self'), cc.sys.localStorage.getItem('multi_other'));
                            cc.sys.localStorage.setItem("coins", _this.coin);
                            cc.sys.localStorage.setItem("mute", _this.mute);
                            cc.sys.localStorage.setItem("signal", _this.signal);
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
                                _this.scheduleOnce(function () {
                                    cc.director.loadScene('multi_lose');
                                }, 0.3);
                            }
                        });
                    });
                }
                else if (rd > 0) {
                    console.log("received message in game");
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
                            if (!_this.recv_msg) {
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
            if (this.id == 'creator') {
                firebase.database().ref('in_game/' + this.room + '/res/joiner_res').once('value', function (snapshot) {
                    if (snapshot.exists()) {
                        var self_score = _this.score;
                        var other_score = parseInt(snapshot.val());
                        firebase.database().ref('in_game/' + _this.room).remove();
                        cc.sys.localStorage.setItem('multi_self', self_score);
                        cc.sys.localStorage.setItem('multi_other', other_score);
                        console.log("immediate values: " + self_score, other_score);
                        console.log("stored values: " + cc.sys.localStorage.getItem('multi_self'), cc.sys.localStorage.getItem('multi_other'));
                        cc.sys.localStorage.setItem("coins", _this.coin);
                        cc.sys.localStorage.setItem("mute", _this.mute);
                        cc.sys.localStorage.setItem("signal", _this.signal);
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
                        firebase.database().ref('in_game/' + _this.room).remove();
                        var self_score = _this.score;
                        var other_score = parseInt(snapshot.val());
                        firebase.database().ref('in_game/' + _this.room).remove();
                        cc.sys.localStorage.setItem('multi_self', self_score);
                        cc.sys.localStorage.setItem('multi_other', other_score);
                        console.log("immediate values: " + self_score, other_score);
                        console.log("stored values: " + cc.sys.localStorage.getItem('multi_self'), cc.sys.localStorage.getItem('multi_other'));
                        cc.sys.localStorage.setItem("coins", _this.coin);
                        cc.sys.localStorage.setItem("mute", _this.mute);
                        cc.sys.localStorage.setItem("signal", _this.signal);
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
        if (event.keyCode == cc.macro.KEY.enter && this.data > 0) {
            this.Color.node.color = new cc.Color(255, 255, 255);
            this.data--;
            this.update_data();
            // if id = 1 write to joiner, else write to creator
            if (this.id == 'creator') {
                // self is creator
                firebase.database().ref('in_game/' + this.room + '/joiner').once('value', function (snapshot) {
                    var ping = parseInt(snapshot.val());
                    firebase.database().ref('in_game/' + _this.room + '/joiner').set(ping + 1);
                });
            }
            else {
                // self is joiner
                firebase.database().ref('in_game/' + this.room + '/creator').once('value', function (snapshot) {
                    var ping = parseInt(snapshot.val());
                    firebase.database().ref('in_game/' + _this.room + '/creator').set(ping + 1);
                });
            }
            this.noisy++;
            var delay = 1 + Math.min(1.5, this.section_count / 8);
            if (this.on_boost)
                delay *= 0.3;
            this.scheduleOnce(function () {
                _this.noisy--;
                if (!_this.noisy) {
                    var color_str = _this.color_list[_this.base + _this.color];
                    var color = new cc.Color(255, 255, 255);
                    _this.Color.node.color = color.fromHEX(color_str);
                }
            }, delay);
        }
        if ((event.keyCode == cc.macro.KEY.r) && this.powerup > 0) { // ##
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
        if ((event.keyCode == cc.macro.KEY.s) && this.signal > 0) { // ##
            // use bubble signal
            this.on_boost++;
            this.signal_point.color = cc.color(26, 219, 34);
            this.signal--;
            this.update_signal();
            this.scheduleOnce(function () {
                _this.on_boost--;
                if (!_this.on_boost)
                    _this.signal_point.color = cc.color(255, 255, 255);
            }, 5);
        }
        if ((event.keyCode == cc.macro.KEY.f) && this.mute > 0) { // ##
            // use bubble mute
            this.in_hiding++;
            this.mute_point.color = cc.color(26, 219, 34);
            this.mute--;
            this.update_mute();
            this.scheduleOnce(function () {
                _this.in_hiding--;
                if (!_this.in_hiding)
                    _this.mute_point.color = cc.color(255, 255, 255);
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
    Player.prototype.update_coin = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyX211bHRpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QiwwQkFBWTtJQUF4QztRQUFBLHFFQXlsQkM7UUF0bEJHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFpQixJQUFJLENB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RWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkNBQ087SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDZ0I7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUF0Rm5CLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0F5bEJsQjtJQUFELGFBQUM7Q0F6bEJELEFBeWxCQyxDQXpsQjJCLEVBQUUsQ0FBQyxTQUFTLEdBeWxCdkM7QUF6bEJZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXBsaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjMzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM0OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzU6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjNjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWM3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNlYzg6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc2VjOTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxMzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxNDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxNTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxNjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxNzogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxODogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMxOTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzZWMyMDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNjb3JlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBDb2xvcjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBub3RpZjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvaW5fcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgIFxyXG4gICAgY29pbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcGxheWVyX2p1bXAgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdldF9jb2luIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1YmJsZV9wb3dlcnVwIDogY2MuTm9kZSA9IG51bGw7IFxyXG4gICAgcG93ZXJ1cDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkaWVfYXVkaW8gOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdldF9wb3dlcnVwX2J1YmJsZSA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2hhcnBfa25pZmUgOiBjYy5BdWRpb0NsaXAgPSBudWxsOyBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzaG9vdGVkIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBtdWx0aV9iYWNrX211c2ljIDogY2MuQXVkaW9DbGlwID0gbnVsbDsvLyBAQUBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRhdGFfcG9pbnQgOiBjYy5Ob2RlID0gbnVsbDsgXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNpZ25hbF9wb2ludCA6IGNjLk5vZGUgPSBudWxsOyBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXV0ZV9wb2ludCA6IGNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBkZWJ1Z19tb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbm9pc3k6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVuaGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gcHJpdmF0ZSBBQ0s6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIHJlY3ZfbXNnOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogbnVtYmVyID0gMDtcclxuICAgIG11dGU6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIGluX2hpZGluZzogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzaWduYWw6bnVtYmVyPTA7XHJcbiAgICBwcml2YXRlIG9uX2Jvb3N0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc2VjX2xpc3QgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGRpcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcHJldl9kaXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZseV9zdGF0ZTogbnVtYmVyID0gMDsgIC8vIDAgZm9yIG9uIGdyb3VuZCwgMSBmb3IgZmx5aW5nLCAtMSBmb3IgZmFsbGluZ1xyXG4gICAgcHJpdmF0ZSBvbl9mbG9vcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHN0aWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHN0aWNrMjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbnZpczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjaGFtZWxlb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByb29tOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgc2VjdGlvbl9jb3VudCA9IDA7ICAgICAgLy8gb24gY29udGFjdCB3aXRoIG1hcmtlciwgaWYgc2VjdGlvbl9jb3VudCAqIDE5MjAgPCB0aGlzLm5vZGUueDogaW5pdCBuZXh0IHNlY3Rpb24gYW5kIHNlY3Rpb25fY291bnQgKytcclxuXHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaGlhdHVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29sb3I6IG51bWJlciA9IDA7XHJcbiAgICBzdHJpcDogbnVtYmVyID0gMDtcclxuICAgIGJhc2U6IG51bWJlciA9IDA7XHJcbiAgICBsYXN0X3g6IG51bWJlciA9IDAuMDtcclxuXHJcbiAgICAvLyBjb2xvciBpbmZvIG9mIG5ld190aWxlc2V0XHJcbiAgICBjb2xvcl9saXN0OiBhbnkgPSB7NzogXCIjMmIzYTY3XCIsODogXCIjNDk2YTgxXCIsOTogXCIjNjY5OTliXCIsIDEwOiBcIiNiM2FmOGZcIiwgMTE6IFwiI2ZmYzU4MlwiLFxyXG4gICAgMTM6XCIjMWMzMTQ0XCIsIDE0OiBcIiM1OTZmNjJcIiwgMTU6IFwiIzdlYTE2YlwiLDE2OiBcIiNjM2Q4OThcIiwxNzogXCIjNzAxNjFkXCIsXHJcbiAgICAxOSA6XCIjMDgzZTc3XCIsIDIwIDpcIiNlZGViZDNcIiwgMjEgOlwiI2RhNDE2N1wiLCAyMiA6XCIjZjRkMzVlXCIsIDIzIDpcIiNmNzg2NjRcIiwgXHJcbiAgICAyNSAgOlwiIzU2MmMyY1wiLCAyNiA6XCIjZjI1NDJkXCIsIDI3IDpcIiNmNWRmYmJcIiwgMjggOlwiIzBlOTU5NVwiLCAyOSA6XCIjMTI3NDc0XCIsIFxyXG4gICAgMzEgOlwiIzhlOWFhZlwiLCAzMiA6XCIjY2JjMGQzXCIsIDMzIDpcIiNlZmQzZDdcIiwgMzQgOlwiI2ZlZWFmYVwiLCAzNSA6XCIjZGVlMmZmXCIgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHNldGNvbG9yKCkge1xyXG4gICAgICAgIC8vLS0tLS0tLS0tLS1wbGF5ZXIgY29sb3ItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy9yYW5kb20gY2hvb3NlIHBsYXllciBjb2xvclxyXG4gICAgICAgIHRoaXMuc3RyaXAgPSBjYy5maW5kKCdDYW52YXMvcm9vdCcpLmdldENvbXBvbmVudCgncm9vdCcpLmNvbG9yX3N0cmlwO1xyXG4gICAgICAgIHRoaXMuYmFzZSA9IDEgKyA2KnRoaXMuc3RyaXA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJhc2UgKyAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xyXG4gICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5zZXRjb2xvcigpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbl9jb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG90aGVyLnRhZyk7XHJcbiAgICAgICAgdmFyIHRvdWNoID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG5vZGUgd2l0aCBjb2xvciBcIiArIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRpbGVkVGlsZSkuZ2lkKTtcclxuICAgICAgICBpZihvdGhlci50YWcgPT0gMTAwMCl7XHJcbiAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coXCJoaXQgbWFya2VyXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLnNlY3Rpb25fY291bnQqMTkyMCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgbmV4dCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKDIrdGhpcy5zZWN0aW9uX2NvdW50KjMsIDIxKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVG8gaW5zdGFudGlhdGU6IFwiICsgdGhpcy5zZWNfbGlzdFtyYW5kXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0X3NlY3Rpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNlY19saXN0W3JhbmRdKTtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi54ID0gMTkyMCAqIHRoaXMuc2VjdGlvbl9jb3VudDtcclxuICAgICAgICAgICAgICAgIG5leHRfc2VjdGlvbi55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwbGlzdC5hZGRDaGlsZChuZXh0X3NlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZ3JvdW5kJyB8fCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwICsgXCIgKFwiICsgdG91Y2gueCArIFwiLCBcIiArIHRvdWNoLnkgKyBcIilcIilcclxuICAgICAgICAgICAgaWYodG91Y2gueSAmJiB0aGlzLmZseV9zdGF0ZSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0aWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLm9uX2Zsb29yICYmIHRvdWNoLnkpIHRoaXMub25fZmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmKChvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZCA9PSB0aGlzLmNvbG9yICsgdGhpcy5iYXNlICYmIHRvdWNoLngpIHx8IHRoaXMuaW52aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2V5ZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmludmlzKSB0aGlzLmNoYW1lbGVvbiA9IHRoaXMuY29sb3JfbGlzdFtvdGhlci5ub2RlLmdldENvbXBvbmVudChjYy5UaWxlZFRpbGUpLmdpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYXN0X3ggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2NvaW4nKXsgLy8gQEAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfY29pbiwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdGhpcy5jb2luKys7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX2NvaW4oKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnYnViYmxlJyl7IC8vIEBAXHJcbiAgICAgICAgICAgIGlmKG90aGVyLnRhZyA9PSAzKXsgLy8gY29sb3JmdWwgYnViYmxlXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2V0X3Bvd2VydXBfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3dlcnVwKytcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlX3Bvd2VydXAoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLy9sb3N5XHJcbiAgICAgICAgICAgICBlbHNlIGlmKG90aGVyLnRhZyA9PSA0KXsgLy8gYnViYmxlIG11dGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdldF9CX0xfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRlKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9tdXRlKCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXIudGFnID09IDUpeyAvLyBidWJibGUgc2lnbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdldF9CX0xfYnViYmxlLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfc2lnbmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG90aGVyLnRhZyA9PSA2KXsgLy8gY29sb3JmdWwgZGF0YVxyXG4gICAgICAgICAgICAgICAgLy8gIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nZXRfQl9MX2J1YmJsZSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGErKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYob3RoZXIubm9kZS5uYW1lID09ICdtaXNzaWxlJyl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaG9vdGVkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGRpZWVcclxuICAgICAgICAgICAgLy8gZGVwbG95IHdoaXRlIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICB0aGlzLmRpZV9wYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9zZXIoKTtcclxuICAgICAgICB9ZWxzZSBpZigob3RoZXIubm9kZS5uYW1lWzBdID09ICdzJyYmb3RoZXIubm9kZS5uYW1lWzFdID09ICdoJyl8fG90aGVyLm5vZGUubmFtZSA9PSAnc3BpZGVyJyl7XHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUubmFtZVswXSA9PSAncycpe1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNoYXJwX2tuaWZlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZGllZVxyXG4gICAgICAgICAgICAvLyBkZXBsb3kgd2hpdGUgcGFydGljbGVzXHJcbiAgICAgICAgICAgIHRoaXMuZGllX3BhcnRpY2xlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb3NlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpZV9wYXJ0aWNsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZV9hdWRpbywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZXllJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xyXG4gICAgICAgIGV4cGxvZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvclZhcj0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY29sb3InKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGxvc2VyKCl7XHJcbiAgICAgICAgaWYodGhpcy5pZCA9PSAnY3JlYXRvcicpe1xyXG4gICAgICAgICAgICAvLyBzZWxmIGlzIGNyZWF0b3JcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzL2NyZWF0b3JfcmVzJykuc2V0KHRoaXMuc2NvcmUsICgpPT57XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9qb2luZXInKS5zZXQoLTEwMCwgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBzZWxmIGlzIGpvaW5lclxyXG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9yZXMvam9pbmVyX3JlcycpLnNldCh0aGlzLnNjb3JlLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvY3JlYXRvcicpLnNldCgtMTAwLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpYXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIC8vYSBidWcgaGFwcGVucyB3aGVuIHRoZSBjb2xvciBvZiBtb3VuZCBpcyBzYW1lIGFzIHRoZSBjb2xvciBvZiBwbGF5ZXIsIG5vdCBzb2x2ZWQgeWV0IFxyXG4gICAgICAgIC8vIGZpeGVkIHdpdGggbW91bmQuIHBsYXllciBzaG91bGQgbm93IGNoZWNrIGNvbGxpc2lvbnMgd2l0aCBtb3VuZFxyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKCBvdGhlci5ub2RlLmdyb3VwID09ICdtb3VuZCcpIHtcclxuICAgICAgICAgICAgLy8gaWYob3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuVGlsZWRUaWxlKS5naWQgPT0gdGhpcy5jb2xvciArIHRoaXMuYmFzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdleWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIF9pZCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSk7XHJcbiAgICAgICAgdGhpcy5yb29tID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb29tJyk7XHJcbiAgICAgICAgdGhpcy5jb2luID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29pbnNcIik7XHJcbiAgICAgICAgdGhpcy5tdXRlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXV0ZVwiKTtcclxuICAgICAgICB0aGlzLnNpZ25hbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpZ25hbFwiKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwb3dlcnVwXCIpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IDU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfY29pbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX2RhdGEoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV9tdXRlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfc2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgpO1xyXG4gICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIGlmKF9pZCA9PSAxKSB0aGlzLmlkID0gJ2NyZWF0b3InO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pZCA9ICdqb2luZXInO1xyXG4gICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICB0aGlzLnNlY19saXN0ID0gW3RoaXMuc2VjMCwgdGhpcy5zZWMxLCB0aGlzLnNlYzIsIHRoaXMuc2VjMywgdGhpcy5zZWM0LHRoaXMuc2VjNSx0aGlzLnNlYzEwLHRoaXMuc2VjMTEsdGhpcy5zZWMxMix0aGlzLnNlYzEzLHRoaXMuc2VjMTcsdGhpcy5zZWMxOCx0aGlzLnNlYzE5XTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImpvaW5pbmcgYXMgXCIgKyB0aGlzLmlkLCB0aGlzLnJvb20pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tc3BhcmtsZSBjb2xvci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5zdGFydENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdGhpcy5jaGVja19tYWlsKCk7XHJcbiAgICB9XHJcbiAgICBwbGF5QkdNKCl7IC8vIEBBQFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm11bHRpX2JhY2tfbXVzaWMsIHRydWUpOyBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGljazIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCAtPSAwLjQgKiB0aGlzLmRpcjtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0aWNrMiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmludmlzICYmICF0aGlzLnVuaGlkZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhpZGRlbil7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2wgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbC5mcm9tSEVYKHRoaXMuY2hhbWVsZW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRseSBpbnZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubm9kZS55IDw9IC00MDApe1xyXG4gICAgICAgICAgICAvLyBkaWVlXHJcbiAgICAgICAgICAgIC8vIGRlcGxveSB3aGl0ZSBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5sb3NlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbWVyYV90cmFjaygpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyICogMjUwICogZHQ7XHJcbiAgICAgICAgaWYodGhpcy5mbHlfc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5X3N0YXRlID0gLTE7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGljayl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RpY2tcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucHJldl9kaXIgKiAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9ICh0aGlzLmRpciA+PSAwKSA/IDEgOiAtMTtcclxuICAgICAgICB2YXIgZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8tLS0tLS0tLS0tc3BhcmtsZSBlbWlzc2lvbiByYXRlIGlzIDAgd2hlbiBkaWRudCBtb3ZlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZih0aGlzLmRpciE9MHx8ZHk+MTApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwYXJrbGVcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbWlzc2lvblJhdGU9MTAwO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BhcmtsZVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVtaXNzaW9uUmF0ZT0wO1xyXG4gICAgICAgIC8vLS0tLS0tLS0tcGxheWVyIHNwaW4tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gMSkgdGhpcy5zcGluX3JpZ2h0KCk7XHJcbiAgICAgICAgZWxzZSBpZigoZHkgPiAxMCkgJiYgdGhpcy5kaXIgPT0gLTEpIHRoaXMuc3Bpbl9sZWZ0KCk7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUuYW5nbGUgIT0gMCkgdGhpcy5ub2RlLmFuZ2xlPTA7XHJcbiAgICAgICAgLy8tLS0tLS0tLXNjb3JlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAoTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA+IHRoaXMuc2NvcmUpID8gTWF0aC5yb3VuZCh0aGlzLm5vZGUueCAvIDM1KSA6IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5TY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB9XHJcbiAgICBzcGluX3JpZ2h0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IDEyO1xyXG4gICAgfVxyXG4gICAgc3Bpbl9sZWZ0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYV90cmFjaygpe1xyXG4gICAgICAgIGlmKHRoaXMuZmx5X3N0YXRlICYmICF0aGlzLmRpcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5vZGUueCA8IDEwMCkgdGhpcy5jYW1lcmEueCA9IDA7XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbWVyYS54ID0gdGhpcy5ub2RlLnggLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tfbWFpbCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhpYXR1cyl7XHJcbiAgICAgICAgICAgIHZhciByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy8nICsgdGhpcy5pZCk7XHJcblxyXG4gICAgICAgICAgICByZWYub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZCA9IHBhcnNlSW50KHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhZCBtZXNzYWdlIHZhbHVlOlwiICsgcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYocmQgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3Bwb25lbnQgaGFzIGRpZWQsIGxvZyBzY29yZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzJykub25jZSgndmFsdWUnLCAoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZl9zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdGhlcl9zY29yZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQgKyBcIiBsb2dnaW5nIHNjb3Jlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvcmVzLycgKyB0aGlzLmlkICsgJ19yZXMnKS5zZXQodGhpcy5zY29yZSwgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaWQgPT0gJ2NyZWF0b3InKSBvdGhlcl9zY29yZSA9IHBhcnNlSW50KHNuYXAuY2hpbGQoJ2pvaW5lcicpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugb3RoZXJfc2NvcmUgPSBwYXJzZUludChzbmFwLmNoaWxkKCdjcmVhdG9yJykudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9zZWxmJywgc2VsZl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX290aGVyJywgb3RoZXJfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbW1lZGlhdGUgdmFsdWVzOiBcIiArIHNlbGZfc2NvcmUsIG90aGVyX3Njb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmVkIHZhbHVlczogXCIgKyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211bHRpX3NlbGYnKSwgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9vdGhlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMuY29pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXRlXCIsIHRoaXMubXV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWduYWxcIiwgdGhpcy5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZl9zY29yZSA+PSBvdGhlcl9zY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGxvZGU9dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3Rhcl9leHBsb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBsb2RlLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSkuc3RhcnRDb2xvciA9IGNjLmNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvZGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5lbmRDb2xvciA9IGNjLmNvbG9yKDIyOSwgMjI5LCAyMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLmVuZENvbG9yVmFyID0gdGhpcy5Db2xvci5ub2RlLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV93aW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWVfcGFydGljbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGlfbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmQgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIG1lc3NhZ2UgaW4gZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZWYuc2V0KChyZC0xKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5pbl9oaWRpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3ZfbXNnKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZXMgbGVmdCBub3cgXCIgKyB0aGlzLnJlY3ZfbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLm5vdGlmLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5oaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN2X21zZy0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aXNpYmxlIHRpbWUgdXAsIG1lc3NhZ2VzIGxlZnQ6IFwiICsgdGhpcy5yZWN2X21zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5yZWN2X21zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3Jfc3RyID0gdGhpcy5jb2xvcl9saXN0W3RoaXMuYmFzZSArIHRoaXMuY29sb3JdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLmNvbG9yID0gY29sb3IuZnJvbUhFWChjb2xvcl9zdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaWQgPT0gJ2NyZWF0b3InKXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL3Jlcy9qb2luZXJfcmVzJykub25jZSgndmFsdWUnLCAoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc25hcHNob3QuZXhpc3RzKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZl9zY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdGhlcl9zY29yZSA9IHBhcnNlSW50KHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVsdGlfc2VsZicsIHNlbGZfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211bHRpX290aGVyJywgb3RoZXJfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImltbWVkaWF0ZSB2YWx1ZXM6IFwiICsgc2VsZl9zY29yZSwgb3RoZXJfc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JlZCB2YWx1ZXM6IFwiICsgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9zZWxmJyksIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVsdGlfb3RoZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5zXCIsIHRoaXMuY29pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11dGVcIiwgdGhpcy5tdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lnbmFsXCIsIHRoaXMuc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZl9zY29yZSA+PSBvdGhlcl9zY29yZSkgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aV93aW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX2xvc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB0aGlzLmNoZWNrX21haWwoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdpbl9nYW1lLycgKyB0aGlzLnJvb20gKyAnL3Jlcy9jcmVhdG9yX3JlcycpLm9uY2UoJ3ZhbHVlJywgKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNuYXBzaG90LmV4aXN0cygpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxmX3Njb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG90aGVyX3Njb3JlID0gcGFyc2VJbnQoc25hcHNob3QudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdWx0aV9zZWxmJywgc2VsZl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVsdGlfb3RoZXInLCBvdGhlcl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW1tZWRpYXRlIHZhbHVlczogXCIgKyBzZWxmX3Njb3JlLCBvdGhlcl9zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmVkIHZhbHVlczogXCIgKyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211bHRpX3NlbGYnKSwgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdWx0aV9vdGhlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pbnNcIiwgdGhpcy5jb2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXV0ZVwiLCB0aGlzLm11dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaWduYWxcIiwgdGhpcy5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmX3Njb3JlID49IG90aGVyX3Njb3JlKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ211bHRpX3dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbXVsdGlfbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHRoaXMuY2hlY2tfbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25fZmxvb3IpIHRoaXMuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5sZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2X2RpciA9IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZfZGlyID0gdGhpcy5kaXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmVudGVyICYmIHRoaXMuZGF0YSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfZGF0YSgpO1xyXG4gICAgICAgICAgICAvLyBpZiBpZCA9IDEgd3JpdGUgdG8gam9pbmVyLCBlbHNlIHdyaXRlIHRvIGNyZWF0b3JcclxuICAgICAgICAgICAgaWYodGhpcy5pZCA9PSAnY3JlYXRvcicpe1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZiBpcyBjcmVhdG9yXHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9qb2luZXInKS5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGluZyA9IHBhcnNlSW50KHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9qb2luZXInKS5zZXQocGluZysxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGYgaXMgam9pbmVyXHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignaW5fZ2FtZS8nICsgdGhpcy5yb29tICsgJy9jcmVhdG9yJykub25jZSgndmFsdWUnLCAoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBpbmcgPSBwYXJzZUludChzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIHRoaXMucm9vbSArICcvY3JlYXRvcicpLnNldChwaW5nKzEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2lzeSsrO1xyXG4gICAgICAgICAgICB2YXIgZGVsYXkgPSAxICsgTWF0aC5taW4oMS41LCB0aGlzLnNlY3Rpb25fY291bnQvOCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25fYm9vc3QpIGRlbGF5ICo9IDAuMztcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2lzeS0tO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMubm9pc3kpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xvcl9zdHIgPSB0aGlzLmNvbG9yX2xpc3RbdGhpcy5iYXNlICsgdGhpcy5jb2xvcl07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjb2xvci5mcm9tSEVYKGNvbG9yX3N0cik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLnIpICYmIHRoaXMucG93ZXJ1cCA+IDApeyAvLyAjI1xyXG4gICAgICAgICAgICAvLyB1c2UgY29sb3IgcG93ZXJ1cFxyXG4gICAgICAgICAgICB2YXIgY2wgPSB0aGlzLkNvbG9yLm5vZGUuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBvd2VydXAtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfcG93ZXJ1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNvbG9yLm5vZGUuY29sb3IgPSBjbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5zKSAmJiB0aGlzLnNpZ25hbCA+IDApeyAvLyAjI1xyXG4gICAgICAgICAgICAvLyB1c2UgYnViYmxlIHNpZ25hbFxyXG4gICAgICAgICAgICB0aGlzLm9uX2Jvb3N0Kys7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsX3BvaW50LmNvbG9yID0gY2MuY29sb3IoMjYsIDIxOSwgMzQpO1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbC0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zaWduYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMub25fYm9vc3QtLTtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLm9uX2Jvb3N0KSB0aGlzLnNpZ25hbF9wb2ludC5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKGV2ZW50LmtleUNvZGUgPT0gY2MubWFjcm8uS0VZLmYpICYmIHRoaXMubXV0ZSA+IDApeyAvLyAjI1xyXG4gICAgICAgICAgICAvLyB1c2UgYnViYmxlIG11dGVcclxuICAgICAgICAgICAgdGhpcy5pbl9oaWRpbmcrKztcclxuICAgICAgICAgICAgdGhpcy5tdXRlX3BvaW50LmNvbG9yID0gY2MuY29sb3IoMjYsIDIxOSwgMzQpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGUtLTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfbXV0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbl9oaWRpbmctLTtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmluX2hpZGluZykgdGhpcy5tdXRlX3BvaW50LmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIH0sIDUpO1xyXG4gICAgICAgIH0gXHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uS2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBsYXllcl9qdW1wLCBmYWxzZSk7IFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDYwMCk7XHJcbiAgICAgICAgdGhpcy5mbHlfc3RhdGUgPSAxO1xyXG4gICAgICAgIGlmKCF0aGlzLmRlYnVnX21vZGUpIHRoaXMub25fZmxvb3IgPSBmYWxzZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByZXZfZGlyICsgXCJmbHkgc3RhdGU6IFwiICsgdGhpcy5mbHlfc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX2NvaW4oKXsgIC8vIEBAIFxyXG4gICAgICAgIHRoaXMuY29pbl9wb2ludC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY29pbi50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX3Bvd2VydXAoKXsgIC8vIEBAIFxyXG4gICAgICAgdGhpcy5idWJibGVfcG93ZXJ1cC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucG93ZXJ1cC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLy9sb3N5XHJcbiAgICB1cGRhdGVfbXV0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tdXRlX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tdXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB1cGRhdGVfc2lnbmFsKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNpZ25hbF9wb2ludC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc2lnbmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfZGF0YSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRhX3BvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5kYXRhLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIl19