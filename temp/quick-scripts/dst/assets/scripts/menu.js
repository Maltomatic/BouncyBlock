
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
    menu.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    menu.prototype.start = function () {
        //cc.audioEngine.playMusic(this.bgm, true);
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "menu";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
        var leader = new cc.Component.EventHandler();
        leader.target = this.node;
        leader.component = "menu";
        leader.handler = "loadLeader";
        cc.find("Canvas/leaderboard").getComponent(cc.Button).clickEvents.push(leader);
        var night = new cc.Component.EventHandler();
        night.target = this.node;
        night.component = "menu";
        night.handler = "loadNight";
        cc.find("Canvas/night").getComponent(cc.Button).clickEvents.push(night);
        var day = new cc.Component.EventHandler();
        day.target = this.node;
        day.component = "menu";
        day.handler = "loadDay";
        cc.find("Canvas/day").getComponent(cc.Button).clickEvents.push(day);
        var multi = new cc.Component.EventHandler();
        multi.target = this.node;
        multi.component = "menu";
        multi.handler = "loadMulti";
        cc.find("Canvas/multi").getComponent(cc.Button).clickEvents.push(multi);
        var bird = new cc.Component.EventHandler();
        bird.target = this.node;
        bird.component = "menu";
        bird.handler = "loadBird";
        cc.find("Canvas/bird").getComponent(cc.Button).clickEvents.push(bird);
        var shop = new cc.Component.EventHandler();
        shop.target = this.node;
        shop.component = "menu";
        shop.handler = "loadShop";
        cc.find("Canvas/shop").getComponent(cc.Button).clickEvents.push(shop);
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
        cc.director.loadScene("multi");
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
    };
    menu.prototype.loadShop = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBZ0ZBLENBQUM7SUE5RUcscUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksMkNBQTJDO1FBRTNDLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDM0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7UUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENB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QU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCwwQkFBVyxHQUFYO1FBQ0ksK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBVSxHQUFWO1FBQ0ksK0NBQStDO0lBQ25ELENBQUM7SUFFRCx1QkFBUSxHQUFSO0lBRUEsQ0FBQztJQTlFZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWdGeEI7SUFBRCxXQUFDO0NBaEZELEFBZ0ZDLENBaEZpQyxFQUFFLENBQUMsU0FBUyxHQWdGN0M7a0JBaEZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9ubG9hZCgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcblxuICAgICAgICBsZXQgc2lnbm91dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIHNpZ25vdXQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBzaWdub3V0LmNvbXBvbmVudCA9IFwibWVudVwiO1xuICAgICAgICBzaWdub3V0LmhhbmRsZXIgPSBcImxvYWRTaWdub3V0XCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvU2lnbk91dFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNpZ25vdXQpO1xuXG4gICAgICAgIGxldCBsZWFkZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBsZWFkZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBsZWFkZXIuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgIGxlYWRlci5oYW5kbGVyID0gXCJsb2FkTGVhZGVyXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbGVhZGVyYm9hcmRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChsZWFkZXIpO1xuXG4gICAgICAgIGxldCBuaWdodCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIG5pZ2h0LnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgbmlnaHQuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgIG5pZ2h0LmhhbmRsZXIgPSBcImxvYWROaWdodFwiO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL25pZ2h0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmlnaHQpO1xuXG4gICAgICAgIGxldCBkYXkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBkYXkudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBkYXkuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgIGRheS5oYW5kbGVyID0gXCJsb2FkRGF5XCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZGF5KTtcblxuICAgICAgICBsZXQgbXVsdGkgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBtdWx0aS50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIG11bHRpLmNvbXBvbmVudCA9IFwibWVudVwiO1xuICAgICAgICBtdWx0aS5oYW5kbGVyID0gXCJsb2FkTXVsdGlcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9tdWx0aVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG11bHRpKTtcblxuICAgICAgICBsZXQgYmlyZCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGJpcmQudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBiaXJkLmNvbXBvbmVudCA9IFwibWVudVwiO1xuICAgICAgICBiaXJkLmhhbmRsZXIgPSBcImxvYWRCaXJkXCI7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvYmlyZFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGJpcmQpO1xuXG4gICAgICAgIGxldCBzaG9wID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgc2hvcC50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHNob3AuY29tcG9uZW50ID0gXCJtZW51XCI7XG4gICAgICAgIHNob3AuaGFuZGxlciA9IFwibG9hZFNob3BcIjtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zaG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2hvcCk7XG4gICAgfVxuXG4gICAgbG9hZE5pZ2h0KCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInRlc3RcIik7XG4gICAgfVxuICAgIGxvYWREYXkoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZGF5XCIpO1xuICAgIH1cbiAgICBsb2FkTXVsdGkoKXtcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibXVsdGlcIik7XG4gICAgfVxuICAgIGxvYWRCaXJkKCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJpcmRcIik7XG4gICAgfVxuICAgIGxvYWRTaWdub3V0KCl7XG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnByZXNzLCBmYWxzZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YXJ0XCIpO1xuICAgIH1cbiAgICBsb2FkTGVhZGVyKCkge1xuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wcmVzcywgZmFsc2UpO1xuICAgIH1cblxuICAgIGxvYWRTaG9wICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgXG59XG4iXX0=