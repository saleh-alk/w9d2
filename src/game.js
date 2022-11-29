import Asteroid from "./asteroid.js";

export default class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
  }

  addAsteroids(){
    // debugger
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroid(this.randomPosition(), this));
    }
  }

  randomPosition(){
    const x_min = Math.ceil(0);
    const x_max = Math.floor(Game.DIM_X);
    const x = Math.floor(Math.random() * (x_max - x_min) + x_min);

    const y_min = Math.ceil(0);
    const y_max = Math.floor(Game.DIM_X);
    const y = Math.floor(Math.random() * (y_max - y_min) + y_min);

    return [x,y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (const a of this.asteroids) {
      a.draw(ctx);
    }
  }

  moveObjects(ctx){
    for (const a of this.asteroids) {
      a.move(ctx);
    }
  }

  wrap(pos) {
    pos[0] = pos[0]%Game.DIM_X;
    pos[1] = pos[1]%Game.DIM_Y;
    return [pos[0], pos[1]];
  }
}

Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;
