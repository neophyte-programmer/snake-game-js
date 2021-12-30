import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 1   // How many times the snake will move per second
const snakeBody = [
    { x: 11, y: 11 }
    
]

export function update() {
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}    // Create a duplicate of snake at position i and set it to snake at position i + 1 (goes up by one)
    }

    // 0 is the first segment of snake in array
    snakeBody[0].x += inputDirection.x 
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}