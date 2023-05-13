import ECS from 'ecs';

// general functionality for DOM elements used as components, like resizing, moving, etc.
export function DOMPlugin(world) {
    ECS.addSystem(world, DOMSystem);
}

function resize(dom, rect)
{
    if (!dom) { return; }

    dom.style.left = rect.x + "px";
    dom.style.top = rect.y + "px";
    dom.style.width = rect.w + "px";
    dom.style.height = rect.h + "px";
}

// squish all of the DOM components to fit the rect size.
function DOMSystem(world)
{
    const onUpdate = function (dt) {
        for (const entity of ECS.getEntities(world, ['sprite', 'rect'])) {
            if (!entity) { continue; }

            let div = document.getElementById(`entity-sprite-${entity.sprite.divid}`);
            resize(div, entity.rect);
        }
        for (const entity of ECS.getEntities(world, ['button', 'rect'])) {
            if (!entity) { continue; }

            let div = document.getElementById(`entity-button-${entity.button.divid}`);
            resize(div, entity.rect);
        }
    }

    return { onUpdate }
}