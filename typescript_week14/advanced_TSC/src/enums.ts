
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

function goSomewhere(keyPressed: Direction){
    console.log(keyPressed)
}

goSomewhere(Direction.RIGHT)