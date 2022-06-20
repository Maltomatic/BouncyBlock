
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/leader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85c5c8PX5tGq4IWRK8+60WD', 'leader');
// scripts/leader.ts

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
var leader = /** @class */ (function (_super) {
    __extends(leader, _super);
    function leader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    leader.prototype.onload = function () {
        cc.debug.setDisplayStats(false);
    };
    leader.prototype.start = function () {
        cc.debug.setDisplayStats(false);
        var rank = { 1: { 'name': "", 'score': 0 }, 2: { 'name': "", 'score': 0 }, 3: { 'name': "", 'score': 0 }, 4: { 'name': "", 'score': 0 }, 5: { 'name': "", 'score': 0 } };
        firebase.database().ref('users').orderByKey().once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var user = childSnapshot.val();
                if (user['highscore'] > 0) {
                    for (var i = 5; i >= 1; i--) {
                        if (i == 5 && (rank[5]['name'] == "" || user['highscore'] > rank[5]['score'])) {
                            rank[5]['name'] = user['name'];
                            rank[5]['score'] = user['highscore'];
                        }
                        else if (rank[i]['name'] == "" || user['highscore'] > rank[i]['score']) {
                            var tmp = rank[i];
                            rank[i] = rank[i + 1];
                            rank[i + 1] = tmp;
                        }
                    }
                }
            });
            for (var i = 1; i <= 5; i++) {
                if (rank[i]['name'] == "")
                    cc.find('Canvas/rank' + i.toString()).active = false;
                else {
                    cc.find('Canvas/rank' + i.toString()).active = true;
                    cc.find('Canvas/rank' + i.toString() + '/name').getComponent(cc.Label).string = rank[i]['name'];
                    cc.find('Canvas/rank' + i.toString() + '/score').getComponent(cc.Label).string = rank[i]['score'];
                }
            }
        });
        var signout = new cc.Component.EventHandler();
        signout.target = this.node;
        signout.component = "leader";
        signout.handler = "loadSignout";
        cc.find("Canvas/SignOut").getComponent(cc.Button).clickEvents.push(signout);
    };
    leader.prototype.loadSignout = function () {
        //cc.audioEngine.playEffect(this.press, false);
        cc.director.loadScene("menu");
    };
    leader = __decorate([
        ccclass
    ], leader);
    return leader;
}(cc.Component));
exports.default = leader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQTZDQSxDQUFDO0lBNUNHLHVCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsc0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQztRQUM3SixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQyxRQUFRO1lBQ3ZFLFFBQVEsQ0FBQyxPQUFPLENBQUUsVUFBQyxhQUFhO2dCQUM1QixJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElB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QUM7SUE1Q2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E2QzFCO0lBQUQsYUFBQztDQTdDRCxBQTZDQyxDQTdDbUMsRUFBRSxDQUFDLFNBQVMsR0E2Qy9DO2tCQTdDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsZWFkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25sb2FkKCkge1xyXG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICB2YXIgcmFuayA9IHsxOiB7J25hbWUnOiBcIlwiLCAnc2NvcmUnOiAwfSwgMjogeyduYW1lJzogXCJcIiwgJ3Njb3JlJzogMH0sIDM6IHsnbmFtZSc6IFwiXCIsICdzY29yZSc6IDB9LCA0OiB7J25hbWUnOiBcIlwiLCAnc2NvcmUnOiAwfSwgNTogeyduYW1lJzogXCJcIiwgJ3Njb3JlJzogMH19O1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VycycpLm9yZGVyQnlLZXkoKS5vbmNlKFwidmFsdWVcIikudGhlbiggKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgIHNuYXBzaG90LmZvckVhY2goIChjaGlsZFNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9IGNoaWxkU25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyWydoaWdoc2NvcmUnXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDU7IGkgPj0gMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09IDUgJiYgKHJhbmtbNV1bJ25hbWUnXSA9PSBcIlwiIHx8IHVzZXJbJ2hpZ2hzY29yZSddID4gcmFua1s1XVsnc2NvcmUnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtbNV1bJ25hbWUnXSA9IHVzZXJbJ25hbWUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtbNV1bJ3Njb3JlJ10gPSB1c2VyWydoaWdoc2NvcmUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyYW5rW2ldWyduYW1lJ10gPT0gXCJcIiB8fCB1c2VyWydoaWdoc2NvcmUnXSA+IHJhbmtbaV1bJ3Njb3JlJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSByYW5rW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFua1tpXSA9IHJhbmtbaSsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtbaSsxXSA9IHRtcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyYW5rW2ldWyduYW1lJ10gPT0gXCJcIikgY2MuZmluZCgnQ2FudmFzL3JhbmsnICsgaS50b1N0cmluZygpKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9yYW5rJyArIGkudG9TdHJpbmcoKSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcmFuaycgKyBpLnRvU3RyaW5nKCkgKyAnL25hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHJhbmtbaV1bJ25hbWUnXTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvcmFuaycgKyBpLnRvU3RyaW5nKCkgKyAnL3Njb3JlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByYW5rW2ldWydzY29yZSddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc2lnbm91dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2lnbm91dC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2lnbm91dC5jb21wb25lbnQgPSBcImxlYWRlclwiO1xyXG4gICAgICAgIHNpZ25vdXQuaGFuZGxlciA9IFwibG9hZFNpZ25vdXRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1NpZ25PdXRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzaWdub3V0KTtcclxuICAgIH1cclxuICAgIGxvYWRTaWdub3V0KCl7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucHJlc3MsIGZhbHNlKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG59Il19