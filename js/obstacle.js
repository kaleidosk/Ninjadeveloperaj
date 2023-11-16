class Obstacle {
    constructor(gameScreen){
this.gameScreen = gameScreen;
this.right= Math.floor(Math.random()*400 + 40);
this.top=150;
this.width = 80;
this.height = 80;
this.element = document.createElement('img');
this.element.src = '../images/Jasmine.png'
this.element.style.position = 'absolute';
this.element.style.width = `${this.width}px`;
this.element.style.height = `${this.height}px`;
this.element.style.top = `${this.top}px`;
this.element.style.right = `${this.right}px`;
this.gameScreen.appendChild(this.element);}

        updatePosition(){
            this.element.style.right = `${this.right}px`;
            this.element.style.top = `${this.top}px`;
          }
    
        move(){
            this.right +=5;
            this.updatePosition();
          }
}