class Obstacle {
    constructor(gameScreen){
this.gameScreen = gameScreen;
this.right= Math.floor(Math.random()*150 + 40);
this.top =0;
this.width = 150;
this.height = 150;
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
            this.right +=3;
            this.top +=3;
            this.updatePosition();
          }
}