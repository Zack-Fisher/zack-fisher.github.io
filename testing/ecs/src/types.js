// typing with classes is totally optional here, since the ecs framework just goes by name and lazy-inits the component array.
// this basically just provides nice constructors for the components.
import {v4 as uuidv4} from 'uuid';

// have to manually export all the types ughhhhh
export { Sprite, Rect, Collider, rect_collisions, NPC, Controller, Button, Interactable, GLBModel };

class Controller {
    constructor (dx, dy, friction) {
        this.dx = dx
        this.dy = dy
        this.friction = friction
    }
}

class Sprite {
    constructor (path) {
        this.path = path
        this.divid = uuidv4();
    }
}

class Rect {
    constructor (x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
}

const rect_collisions = (a, b) => {
    return a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.y + a.h > b.y
}

class Collider {
    constructor () {
        // list of eids of currently colliding entities.
        this.collisions = []
    }
}

class NPC {
    constructor (text) {
        this.text = text
    }
}

class Button {
    constructor (text, callback) {
        this.text = text
        // when pressed, call the callback fn
        this.callback = callback 
        this.divid = uuidv4();
    }
}

class Interactable {
    constructor () {
        // get the parent entity to interact, then clear the interact_pending flag
        this.interact_pending = false;
        this.entity_interacted = null;
    }
}

class GLBModel {
    constructor (path, meshName) {
        this.path = path;
        this.meshName = meshName;
        this.divid = uuidv4();
    }
}
