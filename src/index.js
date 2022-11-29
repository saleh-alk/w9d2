console.log("Webpack is Working");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

// let canvas = document.getElementById("game-canvas");
// let ctx = canvas.getContext("2d");

window.canvas = document.getElementById("game-canvas");
window.ctx = canvas.getContext("2d");
