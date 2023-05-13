import ECS from 'ecs';

import {Collider, rect_collisions} from '../types.js'

export function collisionPlugin(world)
{
    ECS.addSystem(world, colliderSystem);
}

// each collider will constantly manage a list of entities with which it is colliding, through the collider component.
function colliderSystem(world)
{
    const onUpdate = function (dt) {
        for (const entity of ECS.getEntities(world, [ 'collider', 'rect' ])) {
            if (!entity) {continue;}

            for (const other of ECS.getEntities(world, [ 'collider', 'rect' ])) {
                if (!other) {continue;}

                if (entity === other) {continue;}

                const collides = rect_collisions(entity.rect, other.rect);

                if (collides) {
                    if (!entity.collider.collisions.includes(other)) {
                        entity.collider.collisions.push(other);
                    }
                } else {
                    entity.collider.collisions = entity.collider.collisions.filter(eid => eid !== other);
                }
            }
        }
    }

    return { onUpdate }
}
