// act as a prelude for all the systems in main.
// order all of them into a neat pipeline.

import { collisionPlugin } from "./collision";
import { DOMPlugin } from "./dom";
import { interactPlugin } from "./interact";
import { movementPlugin } from "./movement";
import { npcPlugin } from "./npc/npc";
import { spritePlugin } from "./sprite";
import { buttonPlugin } from "./ui/button";

export function init(world)
{
    movementPlugin(world);
    collisionPlugin(world);
    npcPlugin(world);
    spritePlugin(world);
    buttonPlugin(world);
    DOMPlugin(world);
    interactPlugin(world);
}
