import { Keyboard } from './input/keyboard.js';
import ECS from 'ecs';

class GameState {
  constructor() {
    this.keyboard = new Keyboard();
    this.world = ECS.createWorld();
  }
}

export let state = new GameState();
