// import Util from "./utils"


// console.log(`${Util.randomVec(2)}`);

import MovingObject from "./moving_object"

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

console.log(`${JSON.stringify(mo)}`);
