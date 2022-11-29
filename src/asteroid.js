import MovingObject from "./moving_object.js";
import Util from "./utils.js"

export default class Asteroid extends MovingObject {
    constructor(pos){
        let options = {
            "pos": pos,
            "color": Asteroid.COLOR,
            "radius": Asteroid.RADIUS,
            "vel": Util.randomVec(2)
        };
        super(options);

    }

}

Asteroid.COLOR = "red";
Asteroid.RADIUS = 20;

let a = new Asteroid({pos: [30,30]});
console.log(JSON.stringify(a))
