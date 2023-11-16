# Project's name
Ninja Developer

## Description
Saving the Ninja developer from Jasmine,collecting as many scores as possible. The scores are catched by moving the Ninja with control arrows buttons to catch the tech elements. The game end when the Ninja is hitten 3 times by Jasmine and a score is calculated based on the amount of tech elements cacthed.


## Main functionalities
Ninja move by clicking the arrows buttons up, down, left and right.
The obstacle Jasmine appears randomly and move horizontally
The Tech elements appears randomly and move horizontally.
The Ninja has 3 lives that are updated each time he's hitten by Jasmine.
The score is updated each time the Ninja cath a Tech element
The game end when the Ninja loose 3 lives.

## Backlog
Adding the obstacle
Adding the different tech elements
Adding the player
Making the game


## Data structure
Game.js
Game ()
start ()
gameLoop()
update()
endGame()

Earningpoint.js
EarningPoints ()
updatePosition ()
move()

Obstacle.js
Obstacle()
updatePosition()
move()

Player.js
Player()
move()
updatePosition()
didCollide()

Script.js
window.onload()
startGame()
restartGsme()
handleKeyDown()


## States y States Transitions
Game Intro
Game Start
Game End



## Links

- [Trello Link] https://trello.com/c/I9m03qdD/1-the-idea-is-ready
- [Github repository Link] https://kaleidosk.github.io/Ninjadeveloperaj/
