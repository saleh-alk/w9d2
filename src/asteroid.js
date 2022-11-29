import MovingObject from "./moving_object"
import * as Util from "./utils"

Asteroid.COLOR = "red"
Asteroid.RADIUS = 20

export default class Asteroid extends MovingObject {
    constructor(pos){
        let options = {
            "pos": pos,
            "color": Asteroid.COLOR,
            "radius": Asteroid.RADIUS,
            "vel": Util.randomVec(2)
        }
        super(options)

    }

}

let a = new Asteroid({pos: [30,30]});
console.log(JSON.stringify(a))