import Game from './game.js';

export default class GameView {

    constructor(ctx){
        this.game = new Game()
        this.ctx = ctx
    }

    start(){
        //setInterval(this.game.moveObjects(this.ctx), 10)
        setInterval(this.game.draw(this.ctx), 10)
        //setInterval(()=> {console.log("test")}, 1000)
    }



}
