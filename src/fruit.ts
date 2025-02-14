import { IGameObject } from "./interfaces/IGameObject";
import { Pixel } from "./pixel";

export abstract class FruitObject implements IGameObject {
    private fruitPixel: Pixel;
    private gridSize = 11;
    private fruitColor = "#C3DA5D";

    constructor () {
        this.fruitPixel = new Pixel(-1, -1)
    }

    private randomPosition(): void {
        this.fruitPixel.x = Math.floor(Math.random() * this.gridSize);
        this.fruitPixel.y = Math.floor(Math.random() * this.gridSize);
    }

    private checkSpawnLocation(board: Pixel[]) {
        if (board.x === this.fruitPixel.x && board.y === this.fruitPixel.y) {
            return
        }
    }

    private spawn(): void {
        this.randomPosition()
    }

    getData(): Pixel[] {
        return [this.fruitPixel];
    }
}
