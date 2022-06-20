"use strict";
cc._RF.push(module, 'c2affC6cylNr5t6u4Gjq4Sx', 'lose');
// scripts/lose.ts

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
var lose = /** @class */ (function (_super) {
    __extends(lose, _super);
    function lose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    lose.prototype.start = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(cc.sys.localStorage.getItem("data"));
        var menu = new cc.Component.EventHandler();
        this.scheduleOnce(function () {
            menu.target = _this.node;
            menu.component = "lose";
            menu.handler = "loadmenu";
            cc.find("Canvas/menu").getComponent(cc.Button).clickEvents.push(menu);
        }, 0.7);
    };
    lose.prototype.loadmenu = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("menu");
    };
    lose = __decorate([
        ccclass
    ], lose);
    return lose;
}(cc.Component));
exports.default = lose;

cc._RF.pop();