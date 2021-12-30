let lastRenderTime = 0  // Stores how long it has been since last render time
const SNAKE_SPEED = 1   // How many times the snake will move per second

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000    // Divided by 1000 because it is in ms and we want to convert to s
    window.requestAnimationFrame(main)  // Loops the game
    lastRenderTime = currentTime
}