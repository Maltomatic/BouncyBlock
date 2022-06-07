Project node heiarchy for game scenes:
    Currently an example is under "test".
    All nodes that have to do with gameplay should be placed under root: power-ups, enemies, playeres, etc.
    Nodes that follow the player's screen and move according to the player's position should be under Main Camera. The camera should move along with the player, which may be managed in the player's control file (by keeping said nodes under camera, we do not have to manually calculate their respective movements).

    Map sections will be randomly selected and dynamically added as a (prefab) child under root/mapworld.
    Enemy prefabs should be initialized and placed under root/Enemy_collection.
