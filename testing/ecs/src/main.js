import ECS      from 'ecs'
import * as PIPE from './system/mainpipeline.js'
import * as P from './prefab.js'
import { state } from './state.js'

import * as THREE from 'three'

let currentTime = performance.now()

function gameLoop () {
    const newTime = performance.now()
    const frameTime = newTime - currentTime  // in milliseconds, e.g. 16.64356
    currentTime = newTime

    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // run onUpdate for all added systems
    ECS.update(state.world, frameTime)

    // necessary cleanup step at the end of each frame loop
    ECS.cleanup(state.world)

    state.keyboard.update();

    requestAnimationFrame(gameLoop)
}


//// INIT EVERYTHING NOW ////
// init systems.
PIPE.init(state.world);

// init entities.
P.add_player(state.world);
P.add_npc(state.world, 100, 100, "hello", "npc.png");

P.add_alert_button(state.world, 200, 200, "you are alerted!!");

// finally start the game loop
gameLoop()
