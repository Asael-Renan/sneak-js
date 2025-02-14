import { SneakObject } from './sneak';
import { FruitObject } from './fruit';
import { Canvas } from './canvas';

let keyPressed: string = '';
const player = new SneakObject();
const fruit = new FruitObject(1);
Canvas.init()

document.addEventListener("keydown", (event: KeyboardEvent) => (keyPressed = event.key));

function gameLoop(): void {
    update();
    setTimeout(gameLoop, 200);
}

function update(): void {
    Canvas.clear();
    player.move(keyPressed);
    const playerBody = player.getData();
    const head = playerBody[0];
    gameRules(head);
    draw(pixels);
    document.getElementById('score')!.innerText = (playerBody.length - 1).toString();
}

function draw(pixels: Array<{ x: number; y: number; color: string }>): void {
    pixels.forEach(pixel => {
        screen.drawPixel(pixel.x, pixel.y, pixel.color);
    });
}

function gameRules(head: { x: number; y: number }): void {
    if (head.x < 0) player.teleport(11, head.y);
    if (head.y < 0) player.teleport(head.x, 11);
    if (head.x >= 11) player.teleport(0, head.y);
    if (head.y >= 11) player.teleport(head.x, 0);

    if (head.x === fruit.x && head.y === fruit.y) {
        player.growUp();
        fruit.x = Math.floor(Math.random() * 11);
        fruit.y = Math.floor(Math.random() * 11);
    }
}

gameLoop();
