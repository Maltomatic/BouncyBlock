Project node heiarchy for game scenes:
    Currently an example is under "test".
    All nodes that have to do with gameplay should be placed under root: power-ups, enemies, playeres, etc.
    Nodes that follow the player's screen and move according to the player's position should be under Main Camera. The camera should move along with the player, which may be managed in the player's control file (by keeping said nodes under camera, we do not have to manually calculate their respective movements).

    Map sections will be randomly selected and dynamically added as a (prefab) child under root/mapworld.
    Enemy prefabs should be initialized and placed under root/Enemy_collection.

TODOS:
    1. main menu
        >> store (unlock colors & buy powerups with coins)
        >> color selector (skin selection menu? color/skin store --> may require cloud integration)
        >> mode selector (nighttime (default), bird, multiplayer (?), daylight (?))
        >> login (or offline; multiplayer mode unavailable if logged out)
    2. power-ups
        >> coins, color change
            >> daylight: coins, knock (draw parent away), flashlight (stun)
    3. searchlight
        >> eyes track player along parabola on body
        >> swinging beam to detect player
            >> edge movement: leniency via timer
            >> place in front of all objects with lower opacity
        >> attack speed & consistency
            >> stop attack once player out of range, but track light beam based on player movement direction
        >> spawn rules & range
        >> prefab-ify & auto-generation
    4. spikes
        >> prefab-ify & map-based spawn
    5. spider
        >> spawn rules & range
        >> prefab-ify & auto-generation
    6. pause screen (pause/resume function can already be enabled by keypress), game over screen
    7. player eye blinking? --> purely aesthetic purposes
    8. searchlight eye squint? --> purely aesthetic purposes
    9. leaderboard
    10. tutorial
        >> animation or demo pictures
