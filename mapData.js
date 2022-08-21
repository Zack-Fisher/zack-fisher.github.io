'use strict'

const testMap = {enemies : [Slime], chests: ["Health Potion", "Magic Potion"], mapData: [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 9, 1, 2, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 1],
    [1, 0, 2, 1, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1]
]};

var map = testMap;  //changes which map from mapData.js is in use