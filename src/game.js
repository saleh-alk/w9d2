import Asteroid from "./asteroid.js";

export default class Game {
  constructor() {
    this.asteroids = [];
    this.addAsteroids();
  }

  addAsteroids(){
    // debugger
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroid(this.randomPosition()));
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
    console.log("draw")
  }

  moveObjects(ctx){
    for (const a of this.asteroids) {
      a.move(ctx);
    }
  }
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;
