import ECS from 'ecs';
import {state} from '../state.js';

export function interactPlugin(world)
{
    ECS.addSystem(world, interact_system);
}

function interact_system (world)
{
    const onUpdate = function (dt) {
        for (const entity of ECS.getEntities(world, [ 'collider', 'interactable' ])) {
            if (!entity) {continue;}

            for (const other of ECS.getEntities(world, [ 'collider', 'controller' ])) {
                if (!other) {continue;}

                if (entity === other) {continue;}

                if (state.keyboard.isKeyPressed(' ')) {
                    if (entity.collider.collisions.includes(other)) {
                        entity.interactable.interact_pending = true;
                        entity.interactable.entity_interacted = other;
                    }
                }
            }
        }
    }

    return { onUpdate }
}
