import ECS from 'ecs';

export function spritePlugin(world)
{
    ECS.addSystem(world, rendererSystem);
    ECS.addSystem(world, z_index_system);
}

// actually create the DIVS on screen that correspond with the sprites.
function rendererSystem (world) {

    const RENDERABLE_FILTER = [ 'sprite', 'rect' ];

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

                console.log("making div of image path " + e.sprite.path);
                // make the div
                let div = document.createElement('div');
                div.style.position = 'absolute';
                div.style.backgroundImage = `url(${e.sprite.path})`;
                div.style.backgroundSize = 'cover';
                div.id = `entity-sprite-${e.sprite.divid}`;
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
                let div = document.querySelector(`#entity-sprite-${e.id}`);
                if (div) {
                    div.remove();
                }

                count++;
            }
        }
    }

    return { onUpdate }
}

function z_index_system(world)
{
    const onUpdate = function (dt) {
        for (const e of ECS.getEntities(world, [ 'rect', 'sprite' ])) {
            if (!e) {continue;}

            let div = document.getElementById(`entity-sprite-${e.sprite.divid}`);
            if (!div) {continue;}

            // make the div sprites order themselves.
            // can only set the zindex to an int. need to floor it, or nothing will happen.
            div.style.zIndex = Math.floor(e.rect.y).toString();
        }
    }

    return { onUpdate }
}
