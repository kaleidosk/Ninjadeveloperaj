class Game {
    
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Player(
            this.gameScreen, 
            40,
            650,
            100,
            100,
            "/images/Ninja.png"
        );
        this.width = 680;
        this.height = 430;
        this.obstacles = []
        this.techElements = []
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
        console.log(obstacle)
  
        if (this.player.didCollide(obstacle)) {
          obstacle.element.remove();
          this.obstacles.splice(i, 1);
          this.lives--;
          i--;
        } 
        else if (obstacle.rigth > this.width) {
          this.score++;
          obstacle.element.remove();
          this.obstacles.splice(i, 1);
          i--;
        }
      }
     //Loop for earning points
      for (let i = 0; i < this.techElements.length; i++) {
        const obstacle = this.techElements[i];
        obstacle.move();
        console.log(obstacle)

  
        if (this.player.didCollide2(obstacle)) {
          obstacle.element.remove();
          this.techElements.splice(i, 1);
          this.score ++
          i--;
        } 
      }
  
      if (this.lives === 0) {
        this.endGame();
      }

      if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }

      let imgSrc
      // Do a random Math that gets 0, 1, or 2. Depending on the result, imgSrc will be one of the 3 tech images.
      if (Math.random() > 0.98 && this.techElements.length < 1) {
        this.techElements.push(new Earningpoints(this.gameScreen, imgSrc));
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

