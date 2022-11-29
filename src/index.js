console.log("Webpack is Working");
import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid.js";

window.Asteroid = Asteroid;

window.MovingObject = MovingObject;

// let canvas = document.getElementById("game-canvas");
// let ctx = canvas.getContext("2d");

window.canvas = document.getElementById("game-canvas");
window.ctx = canvas.getContext("2d");
