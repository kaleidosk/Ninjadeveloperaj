class Obstacle {
    constructor(gameScreen){
this.gameScreen = gameScreen;
this.top= Math.floor(Math.random()*150 + 40);
this.rigth =0;
this.width = 150;
this.height = 150;
this.element = document.createElement('img');
this.element.src = '../images/Jasmine.png'
this.element.style.position = 'absolute';
this.element.style.width = `${this.width}px`;
this.element.style.height = `${this.height}px`;
this.element.style.top = `${this.top}px`;
this.element.style.rigth = `${this.rigth}px`;
this.gameScreen.appendChild(this.element);}

        updatePosition(){
            this.element.style.top = `${this.top}px`;
            this.element.style.rigth = `${this.rigth}px`;
          }
    
        move(){
            this.rigth += 3;
            this.updatePosition();
          }
}