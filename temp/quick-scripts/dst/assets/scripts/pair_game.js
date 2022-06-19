
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pair_game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        var _this = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.uid = firebase.auth().currentUser.uid;
            }
            else {
                alert("Multiplayer is not accessible when you are not signed in.");
                cc.director.loadScene('menu');
            }
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        cc.find("Canvas/signin_data/Create").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.makeGame();
        }, this);
        cc.find("Canvas/signin_data/Join").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.joinGame();
        }, this);
        cc.find("Canvas/signin_data/back").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.invite_code.string = '';
            cc.director.loadScene('menu');
        }, this);
    };
    NewClass.prototype.makeGame = function () {
        var key = this.uid.substring(0, 5);
        this.invite_code.string = key;
        firebase.database().ref('waiting_room/' + key).set(0);
        var ref = firebase.database().ref('waiting_room/' + key);
        ref.on('child_changed', function (snapshot) {
            var joiner = snapshot.val();
            ref.remove();
            firebase.database().ref('in_game/' + joiner + '/creator').set(0);
            console.log("entering game as creator");
            // remeber self as creator, then change scene
            cc.sys.localStorage.setItem("id", 1);
            cc.director.loadScene('multi');
        });
    };
    // update (dt) {}
    NewClass.prototype.joinGame = function () {
        //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFpcl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0RDO1FBbkRHLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBVyxJQUFJLENBQUM7O0lBaUQvQixDQUFDO0lBL0NHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2YseUJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFVBQUMsSUFBSTtZQUNwQyxJQUFHLElBQUksRUFBQztnQkFDSixLQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQzlDO2lCQUFJO2dCQUNELEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO2dCQUNuRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkFXQztRQVZHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQ2xFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUNoRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDaEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM5QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxRQUFRO1lBQzdCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDYixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4Qyw2Q0FBNkM7WUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsMkJBQVEsR0FBUjtRQUNJLEVBQUU7SUFDTixDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ1U7SUFIZCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0Q1QjtJQUFELGVBQUM7Q0F0REQsQUFzREMsQ0F0RHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0RqRDtrQkF0RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGludml0ZV9jb2RlOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlkID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnVpZDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk11bHRpcGxheWVyIGlzIG5vdCBhY2Nlc3NpYmxlIHdoZW4geW91IGFyZSBub3Qgc2lnbmVkIGluLlwiKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lnbmluX2RhdGEvQ3JlYXRlXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYWtlR2FtZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lnbmluX2RhdGEvSm9pblwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuam9pbkdhbWUoKVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lnbmluX2RhdGEvYmFja1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlX2NvZGUuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWVudScpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VHYW1lKCl7XHJcbiAgICAgICAgdmFyIGtleTogc3RyaW5nID0gdGhpcy51aWQuc3Vic3RyaW5nKDAsIDUpO1xyXG4gICAgICAgIHRoaXMuaW52aXRlX2NvZGUuc3RyaW5nID0ga2V5O1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd3YWl0aW5nX3Jvb20vJyArIGtleSkuc2V0KDApO1xyXG4gICAgICAgIHZhciByZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignd2FpdGluZ19yb29tLycgKyBrZXkpO1xyXG4gICAgICAgIHJlZi5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgam9pbmVyID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIHJlZi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2luX2dhbWUvJyArIGpvaW5lciArICcvY3JlYXRvcicpLnNldCgwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmluZyBnYW1lIGFzIGNyZWF0b3JcIik7XHJcbiAgICAgICAgICAgIC8vIHJlbWViZXIgc2VsZiBhcyBjcmVhdG9yLCB0aGVuIGNoYW5nZSBzY2VuZVxyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCAxKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtdWx0aScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuICAgIGpvaW5HYW1lKCl7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufVxyXG4iXX0=