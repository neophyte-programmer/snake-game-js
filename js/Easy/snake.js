import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 3   // How many times the snake will move per second
const snakeBody = [
    { x: 11, y: 11 }
]
let newSegments = 0

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }    // Create a duplicate of snake at position i and set it to snake at position i + 1 (goes up by one)
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

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position){
    return snakeBody.some((segment => {
        return equalPositions(segment, position)
    }))
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos1.y  
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0     //to get rid of continuous addition of new segment 
}