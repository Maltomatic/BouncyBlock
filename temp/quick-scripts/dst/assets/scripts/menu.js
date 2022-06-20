
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e31arRhgdHJrIQbqecYA4v', 'menu');
// scripts/menu.ts

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
var menu = /** @class */ (function (_super) {
    __extends(menu, _super);
    function menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    menu.prototype.start = function () {
        var _this = this;
        cc.debug.setDisplayStats(false);
        //cc.audioEngine.playMusic(this.bgm, true);
        firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value', function (e) {
            cc.sys.localStorage.setItem("data", e.val());
        });
        this.scheduleOnce(function () {
            var signout = new cc.Component.EventHandler();
            signout.target = _this.node;
            signout.component = "menu";
            signout.handler = "loadSignout";
            cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
            var leader = new cc.Component.EventHandler();
            leader.target = _this.node;
            leader.component = "menu";
            leader.handler = "loadLeader";
            cc.find("Canvas/leaderboard").getComponent(cc.Button).clickEvents.push(leader);
            var night = new cc.Component.EventHandler();
            night.target = _this.node;
            night.component = "menu";
            night.handler = "loadNight";
            cc.find("Canvas/night").getComponent(cc.Button).clickEvents.push(night);
            var day = new cc.Component.EventHandler();
            day.target = _this.node;
            day.component = "menu";
            day.handler = "loadDay";
            cc.find("Canvas/day").getComponent(cc.Button).clickEvents.push(day);
            var multi = new cc.Component.EventHandler();
            multi.target = _this.node;
            multi.component = "menu";
            multi.handler = "loadMulti";
            cc.find("Canvas/multi").getComponent(cc.Button).clickEvents.push(multi);
            var bird = new cc.Component.EventHandler();
            bird.target = _this.node;
            bird.component = "menu";
            bird.handler = "loadBird";
            cc.find("Canvas/bird").getComponent(cc.Button).clickEvents.push(bird);
            var store = new cc.Component.EventHandler();
            store.target = _this.node;
            store.component = "menu";
            store.handler = "loadStore";
            cc.find("Canvas/store").getComponent(cc.Button).clickEvents.push(store);
            var t = new cc.Component.EventHandler();
            t.target = _this.node;
            t.component = "menu";
            t.handler = "loadrule";
            cc.find("Canvas/rule").getComponent(cc.Button).clickEvents.push(t);
        }, 0.7);
    };
    menu.prototype.loadNight = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("test");
    };
    menu.prototype.loadDay = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("day");
    };
    menu.prototype.loadMulti = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("multi_pairing");
    };
    menu.prototype.loadBird = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("bird");
    };
    menu.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("start");
    };
    menu.prototype.loadLeader = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("leader");
    };
    menu.prototype.loadStore = function () {
        cc.director.loadScene("store");
    };
    menu.prototype.loadrule = function () {
        cc.director.loadScene("tutorial");
    };
    menu = __decorate([
        ccclass
    ], menu);
    return menu;
}(cc.Component));
exports.default = menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFnR0EsQ0FBQztJQTlGRyxvQkFBSyxHQUFMO1FBQUEsaUJBMkRDO1FBMURHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLDJDQUEyQztRQUUzQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDO1lBQy9FLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFFO1lBRWYsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUMzQixPQUFPLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztZQUNoQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFNB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QUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTlGZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWdHeEI7SUFBRCxXQUFDO0NBaEdELEFBZ0dDLENBaEdpQyxFQUFFLENBQUMsU0FBUyxHQWdHN0M7a0JBaEdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xuXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvdXNlcnMvJysgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZCkub25jZSgndmFsdWUnLCBlID0+e1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBlLnZhbCgpKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCk9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IHNpZ25vdXQgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgc2lnbm91dC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBzaWdub3V0LmNvbXBvbmVudCA9IFwibWVudVwiO1xuICAgICAgICAgICAgc2lnbm91dC5oYW5kbGVyID0gXCJsb2FkU2lnbm91dFwiO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9TaWduT3V0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2lnbm91dCk7XG5cbiAgICAgICAgICAgIGxldCBsZWFkZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgbGVhZGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIGxlYWRlci5jb21wb25lbnQgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgIGxlYWRlci5oYW5kbGVyID0gXCJsb2FkTGVhZGVyXCI7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xlYWRlcmJvYXJkXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobGVhZGVyKTtcblxuICAgICAgICAgICAgbGV0IG5pZ2h0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIG5pZ2h0LnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIG5pZ2h0LmNvbXBvbmVudCA9IFwibWVudVwiO1xuICAgICAgICAgICAgbmlnaHQuaGFuZGxlciA9IFwibG9hZE5pZ2h0XCI7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL25pZ2h0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmlnaHQpO1xuXG4gICAgICAgICAgICBsZXQgZGF5ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGRheS50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBkYXkuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgICAgICBkYXkuaGFuZGxlciA9IFwibG9hZERheVwiO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9kYXlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChkYXkpO1xuXG4gICAgICAgICAgICBsZXQgbXVsdGkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgbXVsdGkudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgbXVsdGkuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgICAgICBtdWx0aS5oYW5kbGVyID0gXCJsb2FkTXVsdGlcIjtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbXVsdGlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChtdWx0aSk7XG5cbiAgICAgICAgICAgIGxldCBiaXJkID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGJpcmQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgYmlyZC5jb21wb25lbnQgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgIGJpcmQuaGFuZGxlciA9IFwibG9hZEJpcmRcIjtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmlyZFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGJpcmQpO1xuXG4gICAgICAgICAgICBsZXQgc3RvcmUgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgc3RvcmUudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgc3RvcmUuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgICAgICBzdG9yZS5oYW5kbGVyID0gXCJsb2FkU3RvcmVcIjtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc3RvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzdG9yZSk7XG5cbiAgICAgICAgICAgIGxldCB0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIHQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdC5jb21wb25lbnQgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgIHQuaGFuZGxlciA9IFwibG9hZHJ1bGVcIjtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvcnVsZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHQpO1xuICAgICAgICAgIFxuICAgICAgICB9LCAwLjcpO1xuICAgIH1cblxuICAgIGxvYWROaWdodCgpe1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ0ZXN0XCIpO1xuICAgIH1cbiAgICBsb2FkRGF5KCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImRheVwiKTtcbiAgICB9XG4gICAgbG9hZE11bHRpKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm11bHRpX3BhaXJpbmdcIik7XG4gICAgfVxuICAgIGxvYWRCaXJkKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJpcmRcIik7XG4gICAgfVxuICAgIGxvYWRTaWdub3V0KCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YXJ0XCIpO1xuICAgIH1cbiAgICBsb2FkTGVhZGVyKCkge1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsZWFkZXJcIik7XG4gICAgfVxuXG4gICAgbG9hZFN0b3JlICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RvcmVcIik7XG4gICAgfVxuXG4gICAgbG9hZHJ1bGUgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ0dXRvcmlhbFwiKTtcbiAgICB9XG4gICBcbn1cbiJdfQ==