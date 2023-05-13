import ECS from 'ecs';
import {state} from '../../state.js';

export function npcPlugin(world)
{
    ECS.addSystem(world, npc_talk_system);
}

function npc_talk_system (world)
{
    const onUpdate = function (dt) {
        for (const entity of ECS.getEntities(world, [ 'interactable', 'npc' ])) {
            if (!entity) {continue;}

            // just pop the interact from the interactable component.
            if (entity.interactable.interact_pending) {
                entity.interactable.interact_pending = false;
                console.log('npc interacted with player');
            }
        }
    }

    return { onUpdate }
}
