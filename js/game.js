class Game {
    
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.player = null; // new Player
        this.width = 600;
        this.height = 600;
        this.obstacles = []; // new Obstacle()
        this.scoreelements = []
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
    }
    gameLoop(){
        if(this.gameIsOver === true){
            return;
        }
        this.update();
        window.requestAnimationFrame(()=>  this.gameLoop()); 
    }
    update(){}
}