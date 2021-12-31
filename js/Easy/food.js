import {onSnake, expandSnake} from './snake.js'

let food = { x: 10, y: 1 }
const EXPANSION_RATE = 1    // how much the snake grows when it eats the food
const score = document.getElementById('score')
let scoreCount = 0
score.innerHTML = scoreCount



export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        scoreCount = scoreCount + 2
        food = { x: 20, y: 10 }
        
        
    }
}

score.innerHTML = scoreCount

export function draw(gameBoard) {

    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    
}