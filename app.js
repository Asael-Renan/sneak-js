let keyPressed = '';
const screen = canvas()
const player = sneak()

const fruit = {x: 3, y: 3}

document.addEventListener("keydown", event => keyPressed = event.key);

function gameLoop() {
    update();
    setTimeout(gameLoop, 200);
}

function update() {
    screen.clear()
    // player.growUp()

    player.movePlayer(keyPressed)
    const playerBody = player.getData()
    //console.log(playerBody);

    playerBody.forEach(pixel => {
        screen.drawPixel(pixel.x, pixel.y)
    });

    let head = playerBody[0]
    drawFruit()
    
    if (head.x === fruit.x && head.y === fruit.y) {
        player.growUp();
        fruit.x = Math.floor(Math.random() * 11)
        fruit.y = Math.floor(Math.random() * 11);
    }
    // function gameRules() {
        if (head.x < 0) movePlayer(11, 0);
        if (head.y < 0) movePlayer(0, 11);
        if (head.x >= 11) movePlayer(0, head.y, true);
        if (head.y >= 11) movePlayer(head.x, 0, true);
    // }

}

function drawFruit() {
    screen.drawPixel(fruit.x, fruit.y, "#C3DA5D");
}

gameLoop();