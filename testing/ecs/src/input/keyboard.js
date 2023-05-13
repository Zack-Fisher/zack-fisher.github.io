export class Keyboard {
  constructor() {
    // Object to keep track of key states
    this.keys = {};

    // Object to keep track of key events
    this.keyEvents = {};

    // Event listeners for keydown and keyup events
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyDown(event) {
    const key = event.key;

    // Update key state
    this.keys[key] = true;

    // Update key event
    this.keyEvents[key] = {
      down: true,
      pressed: true,
      released: false
    };
  }

  handleKeyUp(event) {
    const key = event.key;

    // Update key state
    this.keys[key] = false;

    // Update key event
    this.keyEvents[key] = {
      down: false,
      pressed: false,
      released: true
    };
  }

  isKeyDown(key) {
    return !!this.keys[key];
  }

  isKeyPressed(key) {
    return !!this.keyEvents[key] && this.keyEvents[key].pressed;
  }

  isKeyReleased(key) {
    return !!this.keyEvents[key] && this.keyEvents[key].released;
  }

  // call the update function to copy the keyevents into the keys.
  // the callbacks are async, but the update function is with our game loop.
  update() {
    // Clear key events
    this.keyEvents = {};
  }
}
