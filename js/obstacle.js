class Obstacle {
    constructor(gameScreen){
this.gameScreen = gameScreen;
this.top = Math.floor(Math.random() * 300);
        this.rigth = 0;
        this.width = 150;
        this.height = 150;
        this.element = document.createElement('img');
        this.element.src = '../images/Jasmine.png'
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);}

        updatePosition(){
            this.element.style.left = `${this.left}px`;
            this.element.style.top = `${this.top}px`;
            console.log('obstacle position', this.element.getBoundingClientRect())
          }
    
        move(){
            this.top += 3;
            this.updatePosition();
          }
}