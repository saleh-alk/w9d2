const { util } = require("webpack");

let Util = {
    inherits: function (childClass, parentClass) {
        function Surrogate() {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
};

export default Util;

// export default class Util {
//     inherits(childClass, parentClass){
//         function Surrogate() { };
//         Surrogate.prototype = parentClass.prototype;
//         childClass.prototype = new Surrogate();
//         childClass.prototype.constructor = childClass;
//     }

//     randomVec(length){
//         const deg = 2 * Math.PI * Math.random();
//         return Util.scale([Math.sin(deg), Math.cos(deg)], length);
//     }

//     scale(vec, m){
//         return [vec[0] * m, vec[1] * m];
//     }
// }


