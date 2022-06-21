"use strict";
cc._RF.push(module, 'c676ei8t6JMzZCzLvA9kLsr', 'pair_game');
// scripts/pair_game.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invite_code = null;
        _this.uid = null;
        _this.kick = false;
        _this.key = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        var _this = this;
        cc.audioEngine.pauseMusic(); // @A@
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("logged in");
            }
            else {
                _this.kick = true;
            }
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.uid = cc.sys.localStorage.getItem("uid");
        this.key = this.uid.substring(0, 5);
        cc.find("Canvas/root/Create").on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.kick) {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
            else
                _this.makeGame();
        }, this);
        cc.find("Canvas/root/Join").on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.kick) {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
            else
                _this.joinGame();
        }, this);
        cc.find("Canvas/root/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            firebase.database().ref('waiting_room/' + _this.key).remove();
            firebase.database().ref('in_game/' + _this.uid).remove();
            _this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    };
    NewClass.prototype.makeGame = function () {
        this.invite_code.string = this.key;
        // firebase.database().ref('waiting_room/' + this.key).set(0);
        this.maker_load();
    };
    NewClass.prototype.maker_load = function () {
        var _this = this;
        console.log("maker called");
        firebase.database().ref('waiting_room/' + this.key).once('value', function (snapshot) {
            console.log(snapshot.val());
            if (snapshot.exists()) {
                var joiner = snapshot.val();
                firebase.database().ref('in_game/' + joiner + '/creator').set(0);
                firebase.database().ref('waiting_room/' + _this.key).remove();
                console.log("entering game as creator");
                // remeber self as creator, then change scene
                cc.sys.localStorage.setItem("id", 1);
                cc.sys.localStorage.setItem("room", joiner);
                cc.director.loadScene('multi');
            }
            else
                _this.maker_load();
        });
        // setInterval(this.maker_load, 300);
    };
    // update (dt) {
    // }
    NewClass.prototype.joinGame = function () {
        // var key: string = this.invite_code.string;
        firebase.database().ref('waiting_room/' + this.invite_code.string).set(this.uid);
        this.joiner_load();
    };
    NewClass.prototype.joiner_load = function () {
        var _this = this;
        console.log("joiner called");
        firebase.database().ref('in_game/' + this.uid).once('value', function (snapshot) {
            if (snapshot.exists()) {
                console.log("creator has joined");
                firebase.database().ref('in_game/' + _this.uid + '/joiner').set(0);
                cc.sys.localStorage.setItem("id", 0);
                cc.sys.localStorage.setItem("room", _this.uid);
                cc.director.loadScene('multi');
            }
            else {
                _this.joiner_load();
            }
        });
        // setInterval(this.joiner_load, 300);
    };
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "invite_code", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();