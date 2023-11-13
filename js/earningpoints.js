class Earningpoints {
    constructor(gameScreen){
this.gameScreen = gameScreen;
this.top= Math.floor(Math.random() * 150 + 40);
this.rigth =0;
this.width = 150;
this.height = 150;
// let languages = ['CSS','HTML','JAVASCRIPT'];
// let randomposition = (Math.random()* languages.length)
// let language = languages [randomposition]
//this.element = document.createElement(<p></p>);
//this.element.innerHtml = <p>${language}</p>;
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