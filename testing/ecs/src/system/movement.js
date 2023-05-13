import ECS from 'ecs';
import clamp    from 'clamp';
import {state} from '../state.js';

export function movementPlugin(world)
{
    ECS.addSystem(world, keyboardControlSystem);
    ECS.addSystem(world, applyMovementSystem);
}

// update entity velocity based on key pressed
function keyboardControlSystem (world) {
    // called each game loop
    const onUpdate = function (dt) {
        // get all of the entities in the world that pass the filter
        for (const entity of ECS.getEntities(world, [ 'controller', 'moveable' ])) {
            if (!entity) {continue;}

            // update the entity position according to what is pressed
            if (state.keyboard.isKeyDown('ArrowUp')) {
                entity.moveable.dy -= 1;
            }
            if (state.keyboard.isKeyDown('ArrowDown')) {
                entity.moveable.dy += 1;
            }
            if (state.keyboard.isKeyDown('ArrowLeft')) {
                entity.moveable.dx -= 1;
            }
            if (state.keyboard.isKeyDown('ArrowRight')) {
                entity.moveable.dx += 1;
            }

           entity.moveable.dx = clamp(entity.moveable.dx, -10, 10)
           entity.moveable.dy = clamp(entity.moveable.dy, -10, 10)
    
            // then ease toward zero
            entity.moveable.dx *= entity.controller.friction
            entity.moveable.dy *= entity.controller.friction
        }
    }

    return { onUpdate }
}

function applyMovementSystem (world) {
    const onUpdate = function (dt) {
        for (const entity of ECS.getEntities(world, [ 'moveable', 'rect' ])) {
            if (!entity) {continue;}

            entity.rect.x += entity.moveable.dx
            entity.rect.y += entity.moveable.dy }
    }

    return { onUpdate }
}
