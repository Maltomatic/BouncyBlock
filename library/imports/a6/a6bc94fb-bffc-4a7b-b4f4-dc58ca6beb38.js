"use strict";
cc._RF.push(module, 'a6bc9T7v/xKe7T03FjKa+s4', 'loadgame');
// scripts/loadgame.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.Loadscene = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loadscene = /** @class */ (function (_super) {
    __extends(Loadscene, _super);
    function Loadscene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Loadscene.prototype.start = function () {
        this.schedule(function () {
            // count -= 1;
            var str = cc.find('Canvas/load_background/str').getComponent(cc.Label);
            str.string = str.string + '.';
        }, 0.3, 2);
        this.scheduleOnce(function () {
            cc.director.loadScene('menu');
        }, 1);
        cc.sys.localStorage.setItem("uid", 'local');
        cc.sys.localStorage.setItem("coins", 0);
        cc.sys.localStorage.setItem("lego", 0);
        cc.sys.localStorage.setItem("powerup", 0);
        cc.sys.localStorage.setItem("banana", 0);
        cc.sys.localStorage.setItem("mute", 0);
        cc.sys.localStorage.setItem("signal", 0);
        cc.sys.localStorage.setItem("highscore", 0);
        cc.sys.localStorage.setItem("name", 0);
        cc.sys.localStorage.setItem("email", 0);
        cc.sys.localStorage.setItem("color", '010000');
        cc.sys.localStorage.setItem("nowcolor", 1);
    };
    Loadscene = __decorate([
        ccclass
    ], Loadscene);
    return Loadscene;
}(cc.Component));
exports.Loadscene = Loadscene;

cc._RF.pop();