console.log("Webpack is Working");
import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid.js";
import Game from './game.js';
import GameView from './game_view.js'

window.Asteroid = Asteroid;
window.MovingObject = MovingObject;

// let canvas = document.getElementById("game-canvas");
// let ctx = canvas.getContext("2d");

window.canvas = document.getElementById("game-canvas");
window.ctx = canvas.getContext("2d");


// window.ast = new Asteroid([30, 30] );
// window.mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });
// window.game = new Game();

window.gameView = new GameView(window.ctx)
window.gameView.start()
