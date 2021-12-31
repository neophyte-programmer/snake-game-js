const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(position) {
    // check if the position is greater than the grid size or less than 1 which is the minimum grid size
    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
    )
}