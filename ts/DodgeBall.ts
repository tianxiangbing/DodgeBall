/// <reference path="game.ts" />
class G extends  Game{
    count = 1;
    newGame(){
        super.newGame();
    }
    running(){
        this.count++;
        if(this.count>10){
            this.over();
            return;
        }
        console.log(this.count)
        super.running();
    }
    gameOver(){
        super.gameOver();
    }
    loading(){
        console.log('loading...')
        super.loading();
    }
}
 var game = new G(document.getElementById('gameboard'));
 game.run(); 