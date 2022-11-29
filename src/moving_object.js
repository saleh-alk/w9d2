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
    this.vel = Util.scale()
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }


}

// module.exports = MovingObject;
