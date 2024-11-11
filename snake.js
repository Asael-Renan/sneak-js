//canvas
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

//game
const keys = { w: false, a: false, s: false, d: false };
document.addEventListener("keydown", toggleKey);

player = { x: 5, y: 5 }

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 100);
}

function update() {
    if (keys.w) player.y--
    if (keys.a) player.x--
    if (keys.s) player.y++
    if (keys.d) player.x++

    // Boundary checking to keep the circle within canvas bounds
    if (player.x < 0) player.x = c.width - 1;
    if (player.y < 0) player.y = c.height - 1;
    if (player.x >= c.width) player.x = 0;
    if (player.y >= c.height) player.y = 0;
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(player.x, player.y, 1, 1);
}

function toggleKey(event) {
    for (let key in keys) {
        keys[key] = false;
    }
    keys[event.key] = true;
}

gameLoop();

