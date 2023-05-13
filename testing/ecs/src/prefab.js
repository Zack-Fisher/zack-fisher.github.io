import ECS from 'ecs';

import * as T from './types.js'
import * as PATH from './path.js'

export function add_player(world)
{
    // set up the player
    const PLAYER = ECS.createEntity(world)
    ECS.addComponentToEntity(world, PLAYER, 'controller', new T.Controller(0, 0, 0.9))
    ECS.addComponentToEntity(world, PLAYER, 'moveable', { dx: 0, dy: 0 })
    ECS.addComponentToEntity(world, PLAYER, 'sprite', new T.Sprite(PATH.image_path("player.png")))
    ECS.addComponentToEntity(world, PLAYER, 'rect', new T.Rect(50, 80, 32, 32))

    ECS.addComponentToEntity(world, PLAYER, 'collider', new T.Collider())
}

export function add_npc(world, x, y, text, path)
{
    const NPC = ECS.createEntity(world)
    ECS.addComponentToEntity(world, NPC, 'npc', new T.NPC(text))
    ECS.addComponentToEntity(world, NPC, 'collider', new T.Collider())
    ECS.addComponentToEntity(world, NPC, 'sprite', new T.Sprite(PATH.image_path(path)))
    ECS.addComponentToEntity(world, NPC, 'interactable', new T.Interactable());
    ECS.addComponentToEntity(world, NPC, 'rect', new T.Rect(x, y, 32, 32))
}

export function add_button(world, x, y, text, callback)
{
    const BUTTON = ECS.createEntity(world)
    ECS.addComponentToEntity(world, BUTTON, 'button', new T.Button(text, callback))
    ECS.addComponentToEntity(world, BUTTON, 'collider', new T.Collider())
    ECS.addComponentToEntity(world, BUTTON, 'interactable', new T.Interactable());
    ECS.addComponentToEntity(world, BUTTON, 'rect', new T.Rect(x, y, 32, 32))
}

export function add_alert_button(world, x, y, text)
{
    const BUTTON = ECS.createEntity(world)
    ECS.addComponentToEntity(world, BUTTON, 'button', new T.Button(text, () => {alert(text)}))
    ECS.addComponentToEntity(world, BUTTON, 'collider', new T.Collider())
    ECS.addComponentToEntity(world, BUTTON, 'interactable', new T.Interactable());
    ECS.addComponentToEntity(world, BUTTON, 'rect', new T.Rect(x, y, 32, 32))
}
