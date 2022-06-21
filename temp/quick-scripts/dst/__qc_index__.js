
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/arm');
require('./assets/scripts/bird_map_init');
require('./assets/scripts/bird_player');
require('./assets/scripts/bubble_item');
require('./assets/scripts/bubble_item_in_dayscene');
require('./assets/scripts/bubble_item_in_multi');
require('./assets/scripts/enemy moving sharp');
require('./assets/scripts/enemy_wrapper');
require('./assets/scripts/leader');
require('./assets/scripts/light');
require('./assets/scripts/loadgame');
require('./assets/scripts/lose');
require('./assets/scripts/lose_canvas');
require('./assets/scripts/menu');
require('./assets/scripts/missile');
require('./assets/scripts/multi_res_lose');
require('./assets/scripts/multi_res_win');
require('./assets/scripts/pair_game');
require('./assets/scripts/parent');
require('./assets/scripts/player');
require('./assets/scripts/player_day');
require('./assets/scripts/player_multi');
require('./assets/scripts/root');
require('./assets/scripts/rule');
require('./assets/scripts/searchlight');
require('./assets/scripts/section_init');
require('./assets/scripts/sharp');
require('./assets/scripts/sharp_down');
require('./assets/scripts/spider');
require('./assets/scripts/start_scene');
require('./assets/scripts/store');

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