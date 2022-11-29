// https://stackoverflow.com/questions/28456898/javascript-setinterval-function-not-working-in-drawing-to-canvas
import Game from './game.js';

export default class GameView {

  constructor(ctx){
    this.game = new Game()
    this.ctx = ctx
  }

  start(){
    setInterval(() => {this.game.draw(this.ctx)}, 10)
    setInterval(() => {this.game.moveObjects(this.ctx)}, 10)
  }
}
