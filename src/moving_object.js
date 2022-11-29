import Util from "./utils.js"


// function MovingObject(options) {
//     this.pos = options['pos'];
//     this.vel = options['vel'];
//     this.radius = options['radius'];
//     this.color = options['color'];
// }

// MovingObject.prototype.draw = function(ctx) {
//   ctx.beginPath();
//   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);
//   ctx.lineWidth = 3;
//   ctx.strokestyel = '#FF0000';
//   ctx.stroke();
// };

// MovingObject.prototype.move = function(){
//   this.pos += this.vel;
// }

export default class MovingObject{
  constructor(options){
    this.pos = options['pos'];
    this.vel = options['vel'];
    this.radius = options['radius'];
    this.color = options['color'];
    this.game = options['game'];
  }

  draw(){
    // debugger
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }

  move(){
    // debugger
    const newVel = Util.scale(this.vel, 2);
    this.pos[0] += newVel[0];
    this.pos[1] += newVel[1];
    this.pos = this.game.wrap(this.pos);
  }


}

// module.exports = MovingObject;
