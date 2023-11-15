class Earningpoints {
    constructor(gameScreen, imgSrc){
this.gameScreen = gameScreen;
this.top= Math.floor(Math.random() * 150 + 40);
this.right=0;
this.width = 80;
this.height = 50;
// let languages = ['CSS','HTML','JAVASCRIPT'];
// let randomposition = Math.floor(Math.random()* languages.length)
// let language = languages [randomposition]
// console.log (language)
// this.techElement = document.createElement("p");
// this.techElement.innerHTML = `<p>${language}</p>`;
// this.techElement.style.position = 'absolute';
// this.techElement.style.width = `${this.width}px`;
// this.techElement.style.height = `${this.height}px`;
// this.techElement.style.top = `${this.top}px`;
// this.techElement.style.right= `${this.right}px`;
// this.techElement.style.border = "2px solid red"
// this.gameScreen.appendChild(this.techElement);
this.element = document.createElement('img');
this.element.src = imgSrc
this.element.style.position = 'absolute';
this.element.style.width = `${this.width}px`;
this.element.style.height = `${this.height}px`;
this.element.style.top = `${this.top}px`;
this.element.style.right = `${this.right}px`;
this.gameScreen.appendChild(this.element);
}

        updatePosition(){
            // this.techElement.style.top = `${this.top}px`;
            // this.techElement.style.right= `${this.right}px`;
            this.element.style.right = `${this.right}px`;
            this.element.style.top = `${this.top}px`;
          }
    
        move(){
            this.right+= 3;
            this.updatePosition();
          }
}