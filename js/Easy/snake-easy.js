import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0  // Stores how long it has been since last render time
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)  // Loops the game
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000    // Divided by 1000 because it is in ms and we want to convert to s
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    
    lastRenderTime = currentTime

    update()    // This function will update all the logic for the game
    draw()  // This function will draw everything on the screen based on update()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = " "   // to clear the previous snake body
    drawSnake(gameBoard)
    drawFood(gameBoard)
}