Project node heiarchy for game scenes:
    Currently an example is under "test".
    All nodes that have to do with gameplay should be placed under root: power-ups, enemies, playeres, etc.
    Nodes that follow the player's screen and move according to the player's position should be under Main Camera. The camera should move along with the player, which may be managed in the player's control file (by keeping said nodes under camera, we do not have to manually calculate their respective movements).

    Map sections will be randomly selected and dynamically added as a (prefab) child under root/mapworld.
    Enemy prefabs should be initialized and placed under root/Enemy_collection.

TODOS:
    1. main menu
    2. color selector (skin selection menu? color/skin store --> may require cloud integration)
    3. power-ups
    4. searchlight eyes track player along parabola on body
    5. searchlight prefab
    6. semi-random searchlight movement range --> random decision within range determined by difficulty stage
    7. semi-random searchlight spawn --> random decision within range determined by difficulty stage
    8. pause screen (pause/resume function can already be enabled by keypress), game over screen
    9. searchlight attack
    10. player eye blinking? --> purely aesthetic purposes
    11. searchlight eye squint? --> purely aesthetic purposes
    12. leaderboard
