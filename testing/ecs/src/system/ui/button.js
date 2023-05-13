import ECS from 'ecs';

export function buttonPlugin(world) {
    ECS.addSystem(world, buttonRenderSystem);
    ECS.addSystem(world, button_interact_system);
}

function buttonRenderSystem (world) {
    const RENDERABLE_FILTER = [ 'button', 'rect' ];

    // data structure to store all entities that were added or removed last frame
    const resultEntries = {
        count: 0,
        entries: new Array(100)
    }

    const onUpdate = function (dt) {
        if (ECS.getEntities(world, RENDERABLE_FILTER, 'added', resultEntries)) {
            let count = 0;
            for (const e of resultEntries.entries) {
                if (!e) {continue;}

                if (resultEntries.count <= count) {break;}

                let div = document.createElement('button');
                div.style.position = 'absolute';
                div.id = `entity-button-${e.button.divid}`;

                // call the callback when the button is clicked, maybe add more callbacks?
                div.addEventListener('click', function() {
                    e.button.callback();
                });

                document.body.appendChild(div);

                count++;
            }
        }

        if (ECS.getEntities(world, RENDERABLE_FILTER, 'removed', resultEntries)) {
            let count = 0;
            for (const e of resultEntries.entries)
            {
                if (!e) {continue;}

                if (resultEntries.count <= count) {break;}

                // remove the div
                let div = document.getElementById(`entity-button-${e.id}`);
                if (div) {
                    div.remove();
                }

                count++;
            }
        }
    }

    return { onUpdate }
}

function button_interact_system(world)
{
    const onUpdate = function (dt) {
        for (const entity of ECS.getEntities(world, [ 'interactable', 'button' ])) {
            if (!entity) {continue;}

            // just pop the interact from the interactable component.
            if (entity.interactable.interact_pending) {
                entity.interactable.interact_pending = false;
                entity.button.callback();
            }
        }
    }

    return { onUpdate }
}
