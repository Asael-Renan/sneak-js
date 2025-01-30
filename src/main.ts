import { SneakObject } from './sneak';
import { FruitObject } from './fruit';
import { canvasObject } from './canvas';

let keyPressed: string = '';
let pixels: Array<{ x: number; y: number; color: string }> = [];
const screen = canvasObject();
const player = new SneakObject();
const fruit = new FruitObject();

document.addEventListener("keydown", (event: KeyboardEvent) => (keyPressed = event.key));

function gameLoop(): void {
    update();
    setTimeout(gameLoop, 200);
}

function update(): void {
    screen.clear();
    player.move(keyPressed);
    const playerBody = player.getData();
    const head = playerBody[0];
    gameRules(head);
    pixels = [fruit, ...playerBody];
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
