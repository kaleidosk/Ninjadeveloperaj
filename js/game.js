class Game {
    
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Player(
            this.gameScreen, 
            10,
            550,
            100,
            100,
            "/images/Ninja.png"
        );
        this.width = 600;
        this.height = 600;
        this.obstacles = [new Obstacle(
            this.gameScreen,
            0,
            0,
            100,
            100
        )]
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
        this.gameLoop()
    }
    gameLoop(){
        if(this.gameIsOver === true){
            return;
        }
        this.update();
        window.requestAnimationFrame(()=>  this.gameLoop()); 
    }
  
    update() {
      this.player.move();
  
      for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        if (this.player.didCollide(obstacle)) {
          obstacle.element.remove();
          this.obstacles.splice(i, 1);
          this.lives--;
          i--;
        } 
        else if (obstacle.top > this.height) {
          this.score++;
          obstacle.element.remove();
          this.obstacles.splice(i, 1);
          i--;
        }
      }
  
      if (this.lives === 0) {
        this.endGame();
      }

      if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }

    endGame() {
      this.player.element.remove();
      this.obstacles.forEach(obstacle => obstacle.element.remove());
  
      this.gameIsOver = true;
  
   
      this.gameScreen.style.display = "none";
     
      this.gameEndScreen.style.display = "block";
    }
  }

