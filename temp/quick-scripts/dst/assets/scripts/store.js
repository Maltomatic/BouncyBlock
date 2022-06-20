
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/store.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63accuI0aRFm5VF25/+YBYC', 'store');
// scripts/store.ts

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
var store = /** @class */ (function (_super) {
    __extends(store, _super);
    function store() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.money = 0;
        _this.lego = 0;
        _this.banana = 0;
        _this.powerup = 0;
        _this.mute = 0;
        _this.signal = 0;
        _this.color = {};
        return _this;
    }
    store.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    store.prototype.start = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        var data = {};
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value', function (e) {
            data = e.val();
        });
        this.scheduleOnce(function () {
            _this.money = data['coins'];
            _this.lego = data['thing']['lego'];
            _this.banana = data['thing']['banana'];
            _this.powerup = data['thing']['powerup'];
            _this.mute = data['thing']['mute'];
            _this.signal = data['thing']['signal'];
            _this.color = data['thing']['color'];
            cc.find('Canvas/coins').getComponent(cc.Label).string = _this.money.toString();
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = _this.lego.toString();
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = _this.banana.toString();
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = _this.powerup.toString();
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = _this.mute.toString();
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = _this.signal.toString();
            cc.find('Canvas/color1/check').active = true;
            if (_this.color[2])
                cc.find('Canvas/color2/check').active = true;
            if (_this.color[3])
                cc.find('Canvas/color3/check').active = true;
            if (_this.color[4])
                cc.find('Canvas/color4/check').active = true;
            if (_this.color[5])
                cc.find('Canvas/color5/check').active = true;
        }, 0.3);
        var lego = new cc.Component.EventHandler();
        lego.target = this.node;
        lego.component = "store";
        lego.handler = "loadlego";
        cc.find("Canvas/lego/button").getComponent(cc.Button).clickEvents.push(lego);
        var banana = new cc.Component.EventHandler();
        banana.target = this.node;
        banana.component = "store";
        banana.handler = "loadbanana";
        cc.find("Canvas/banana/button").getComponent(cc.Button).clickEvents.push(banana);
        var powerup = new cc.Component.EventHandler();
        powerup.target = this.node;
        powerup.component = "store";
        powerup.handler = "loadpowerup";
        cc.find("Canvas/powerup/button").getComponent(cc.Button).clickEvents.push(powerup);
        var mute = new cc.Component.EventHandler();
        mute.target = this.node;
        mute.component = "store";
        mute.handler = "loadmute";
        cc.find("Canvas/mute/button").getComponent(cc.Button).clickEvents.push(mute);
        var signal = new cc.Component.EventHandler();
        signal.target = this.node;
        signal.component = "store";
        signal.handler = "loadsignal";
        cc.find("Canvas/signal/button").getComponent(cc.Button).clickEvents.push(signal);
        var color2 = new cc.Component.EventHandler();
        color2.target = this.node;
        color2.component = "store";
        color2.handler = "loadcolor2";
        cc.find("Canvas/color2").getComponent(cc.Button).clickEvents.push(color2);
        var color3 = new cc.Component.EventHandler();
        color3.target = this.node;
        color3.component = "store";
        color3.handler = "loadcolor3";
        cc.find("Canvas/color3").getComponent(cc.Button).clickEvents.push(color3);
        var color4 = new cc.Component.EventHandler();
        color4.target = this.node;
        color4.component = "store";
        color4.handler = "loadcolor4";
        cc.find("Canvas/color4").getComponent(cc.Button).clickEvents.push(color4);
        var color5 = new cc.Component.EventHandler();
        color5.target = this.node;
        color5.component = "store";
        color5.handler = "loadcolor5";
        cc.find("Canvas/color5").getComponent(cc.Button).clickEvents.push(color5);
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "store";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
    };
    store.prototype.loadpowerup = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 60;
        if (this.money >= price) {
            this.money -= price;
            this.powerup += 1;
            cc.find('Canvas/powerup/amount').getComponent(cc.Label).string = this.powerup.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/powerup').set(this.powerup);
        }
    };
    store.prototype.loadmute = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.mute += 1;
            cc.find('Canvas/mute/amount').getComponent(cc.Label).string = this.mute.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/mute').set(this.mute);
        }
    };
    store.prototype.loadsignal = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 70;
        if (this.money >= price) {
            this.money -= price;
            this.signal += 1;
            cc.find('Canvas/signal/amount').getComponent(cc.Label).string = this.signal.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/signal').set(this.signal);
        }
    };
    store.prototype.loadlego = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 50;
        if (this.money >= price) {
            this.money -= price;
            this.lego += 1;
            cc.find('Canvas/lego/amount').getComponent(cc.Label).string = this.lego.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/lego').set(this.lego);
        }
    };
    store.prototype.loadbanana = function () {
        var price = 80;
        if (this.money >= price) {
            this.money -= price;
            this.banana += 1;
            cc.find('Canvas/banana/amount').getComponent(cc.Label).string = this.banana.toString();
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/banana').set(this.banana);
        }
    };
    store.prototype.loadcolor2 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 150;
        if (this.money >= price && this.color[2] == false) {
            this.money -= price;
            this.color[2] = true;
            cc.find('Canvas/color2/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').update(this.color);
        }
    };
    store.prototype.loadcolor3 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 200;
        if (this.money >= price && this.color[3] == false) {
            this.money -= price;
            this.color[3] = true;
            cc.find('Canvas/color3/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').set(this.color);
        }
    };
    store.prototype.loadcolor4 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 250;
        if (this.money >= price && this.color[4] == false) {
            this.money -= price;
            this.color[4] = true;
            cc.find('Canvas/color4/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').update(this.color);
        }
    };
    store.prototype.loadcolor5 = function () {
        //cc.audioEngine.playEffect(this.press, false);
        var price = 500;
        if (this.money >= price && this.color[5] == false) {
            this.money -= price;
            this.color[5] = true;
            cc.find('Canvas/color5/check').active = true;
            cc.find('Canvas/coins').getComponent(cc.Label).string = this.money.toString();
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/coins').set(this.money);
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/thing/color').update(this.color);
        }
    };
    store.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        this.scheduleOnce(function () {
            cc.director.loadScene("menu");
        }, 0.5);
    };
    store = __decorate([
        ccclass
    ], store);
    return store;
}(cc.Component));
exports.default = store;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBOE5DO1FBNU5HLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQU8sR0FBRyxDQUFDLENBQUE7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFBO1FBQ1IsWUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNWLFdBQUssR0FBRyxFQUFFLENBQUM7O0lBc05mLENBQUM7SUFwTkcsc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQUEsaUJBMEZDO1FBekZHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLDJDQUEyQztRQUMzQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDO1lBQy9FLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJ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QUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRixJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFD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V0FBVyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUc7SUFDTCxDQUFDO0lBQ0QsMkJBQVcsR0FBWDtRQUNJLCtDQUErQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQTNOZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQThOekI7SUFBRCxZQUFDO0NBOU5ELEFBOE5DLENBOU5rQyxFQUFFLENBQUMsU0FBUyxHQThOOUM7a0JBOU5vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9yZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBtb25leSA9IDA7XG4gICAgbGVnbyA9IDA7XG4gICAgYmFuYW5hID0gMDtcbiAgICBwb3dlcnVwID0gMFxuICAgIG11dGUgPSAwXG4gICAgc2lnbmFsID0gMFxuICAgIGNvbG9yID0ge307XG5cbiAgICBvbmxvYWQoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJysgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkub25jZSgndmFsdWUnLCBlID0+e1xuICAgICAgICAgICAgZGF0YSA9IGUudmFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5ID0gZGF0YVsnY29pbnMnXTtcbiAgICAgICAgICAgIHRoaXMubGVnbyA9IGRhdGFbJ3RoaW5nJ11bJ2xlZ28nXTtcbiAgICAgICAgICAgIHRoaXMuYmFuYW5hID0gZGF0YVsndGhpbmcnXVsnYmFuYW5hJ107XG4gICAgICAgICAgICB0aGlzLnBvd2VydXAgPSBkYXRhWyd0aGluZyddWydwb3dlcnVwJ107XG4gICAgICAgICAgICB0aGlzLm11dGUgPSBkYXRhWyd0aGluZyddWydtdXRlJ107XG4gICAgICAgICAgICB0aGlzLnNpZ25hbCA9IGRhdGFbJ3RoaW5nJ11bJ3NpZ25hbCddO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGRhdGFbJ3RoaW5nJ11bJ2NvbG9yJ107XG5cbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2lucycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb25leS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2xlZ28vYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmxlZ28udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYW5hbmEvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmJhbmFuYS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3Bvd2VydXAvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnBvd2VydXAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9tdXRlL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tdXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2lnbmFsL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zaWduYWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMS9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLmNvbG9yWzJdKSBjYy5maW5kKCdDYW52YXMvY29sb3IyL2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMuY29sb3JbM10pIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYodGhpcy5jb2xvcls0XSkgY2MuZmluZCgnQ2FudmFzL2NvbG9yNC9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLmNvbG9yWzVdKSBjYy5maW5kKCdDYW52YXMvY29sb3I1L2NoZWNrJykuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB9LCAwLjMpO1xuXG4gICAgICAgIGxldCBsZWdvID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgbGVnby50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGxlZ28uY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBsZWdvLmhhbmRsZXIgPSBcImxvYWRsZWdvXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbGVnby9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChsZWdvKTtcblxuICAgICAgICBsZXQgYmFuYW5hID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgYmFuYW5hLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgYmFuYW5hLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcbiAgICAgICAgYmFuYW5hLmhhbmRsZXIgPSBcImxvYWRiYW5hbmFcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iYW5hbmEvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmFuYW5hKTtcblxuICAgICAgICBsZXQgcG93ZXJ1cCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIHBvd2VydXAudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBwb3dlcnVwLmNvbXBvbmVudCA9IFwic3RvcmVcIjtcbiAgICAgICAgcG93ZXJ1cC5oYW5kbGVyID0gXCJsb2FkcG93ZXJ1cFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3Bvd2VydXAvYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocG93ZXJ1cCk7XG5cbiAgICAgICAgbGV0IG11dGUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBtdXRlLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgbXV0ZS5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIG11dGUuaGFuZGxlciA9IFwibG9hZG11dGVcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9tdXRlL2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG11dGUpO1xuXG4gICAgICAgIGxldCBzaWduYWwgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzaWduYWwudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBzaWduYWwuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBzaWduYWwuaGFuZGxlciA9IFwibG9hZHNpZ25hbFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NpZ25hbC9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWduYWwpO1xuXG4gICAgICAgIGxldCBjb2xvcjIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjb2xvcjIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBjb2xvcjIuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBjb2xvcjIuaGFuZGxlciA9IFwibG9hZGNvbG9yMlwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yMlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yMik7XG5cbiAgICAgICAgbGV0IGNvbG9yMyA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNvbG9yMy50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNvbG9yMy5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIGNvbG9yMy5oYW5kbGVyID0gXCJsb2FkY29sb3IzXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvY29sb3IzXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY29sb3IzKTtcblxuICAgICAgICBsZXQgY29sb3I0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY29sb3I0LnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgY29sb3I0LmNvbXBvbmVudCA9IFwic3RvcmVcIjtcbiAgICAgICAgY29sb3I0LmhhbmRsZXIgPSBcImxvYWRjb2xvcjRcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9jb2xvcjRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjb2xvcjQpO1xuXG4gICAgICAgIGxldCBjb2xvcjUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjb2xvcjUudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBjb2xvcjUuY29tcG9uZW50ID0gXCJzdG9yZVwiO1xuICAgICAgICBjb2xvcjUuaGFuZGxlciA9IFwibG9hZGNvbG9yNVwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2NvbG9yNVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNvbG9yNSk7XG5cbiAgICAgICAgbGV0IHNpZ25vdXQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzaWdub3V0LnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgc2lnbm91dC5jb21wb25lbnQgPSBcInN0b3JlXCI7XG4gICAgICAgIHNpZ25vdXQuaGFuZGxlciA9IFwibG9hZFNpZ25vdXRcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduT3V0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbm91dCk7XG4gICAgfVxuXG4gICAgbG9hZHBvd2VydXAoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gNjA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLnBvd2VydXAgKz0gMTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wb3dlcnVwL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5wb3dlcnVwLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvcG93ZXJ1cCcpLnNldCh0aGlzLnBvd2VydXApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRtdXRlKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIHZhciBwcmljZSA9IDcwO1xuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5tdXRlICs9IDE7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbXV0ZS9hbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubXV0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL211dGUnKS5zZXQodGhpcy5tdXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2Fkc2lnbmFsKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIHZhciBwcmljZSA9IDcwO1xuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5zaWduYWwgKz0gMTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zaWduYWwvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNpZ25hbC50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL3NpZ25hbCcpLnNldCh0aGlzLnNpZ25hbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGxlZ28oKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gNTA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLmxlZ28gKz0gMTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9sZWdvL2Ftb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5sZWdvLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvbGVnbycpLnNldCh0aGlzLmxlZ28pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRiYW5hbmEoKSB7XG4gICAgICAgIHZhciBwcmljZSA9IDgwO1xuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5iYW5hbmEgKz0gMTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYW5hbmEvYW1vdW50JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmJhbmFuYS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL2JhbmFuYScpLnNldCh0aGlzLmJhbmFuYSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGNvbG9yMigpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICB2YXIgcHJpY2UgPSAxNTA7XG4gICAgICAgIGlmKHRoaXMubW9uZXkgPj0gcHJpY2UgJiYgdGhpcy5jb2xvclsyXSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5tb25leSAtPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMuY29sb3JbMl0gPSB0cnVlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yMi9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvY29sb3InKS51cGRhdGUodGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkY29sb3IzKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIHZhciBwcmljZSA9IDIwMDtcbiAgICAgICAgaWYodGhpcy5tb25leSA+PSBwcmljZSAmJiB0aGlzLmNvbG9yWzNdID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLm1vbmV5IC09IHByaWNlO1xuICAgICAgICAgICAgdGhpcy5jb2xvclszXSA9IHRydWVcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjMvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL2NvbG9yJykuc2V0KHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRjb2xvcjQoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gMjUwO1xuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlICYmIHRoaXMuY29sb3JbNF0gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLmNvbG9yWzRdID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9jb2xvcjQvY2hlY2snKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvaW5zJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLm1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3VzZXJzLycgKyBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudWlkICsgJy9jb2lucycpLnNldCh0aGlzLm1vbmV5KTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL3RoaW5nL2NvbG9yJykudXBkYXRlKHRoaXMuY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRjb2xvcjUoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdmFyIHByaWNlID0gNTAwO1xuICAgICAgICBpZih0aGlzLm1vbmV5ID49IHByaWNlICYmIHRoaXMuY29sb3JbNV0gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9uZXkgLT0gcHJpY2U7XG4gICAgICAgICAgICB0aGlzLmNvbG9yWzVdID0gdHJ1ZVxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2NvbG9yNS9jaGVjaycpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvY29pbnMnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJyArIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci51aWQgKyAnL2NvaW5zJykuc2V0KHRoaXMubW9uZXkpO1xuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy91c2Vycy8nICsgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCArICcvdGhpbmcvY29sb3InKS51cGRhdGUodGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZFNpZ25vdXQoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xuICAgICAgICB9LCAwLjUpO1xuICAgIH1cblxuICAgXG59XG4iXX0=