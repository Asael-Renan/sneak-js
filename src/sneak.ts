import { IGameObject } from "./interfaces/IGameObject";
import { Pixel } from "./pixel";

export class SneakObject implements IGameObject {
    private body: Pixel[];
    private head: Pixel;
    private direction: keyof typeof this.keys = "stop";

    private keys: Record<string, () => void> = {
        s: () => this.head.y++,
        w: () => this.head.y--,
        d: () => this.head.x++,
        a: () => this.head.x--,
        stop: () => {}
    };

    constructor() {
        this.body = [];
        this.head = new Pixel(5, 5, "#4023E0");
        this.body.push({ ...this.head }); 
    }

    move(keyPressed: string): void {
        if (this.keys[keyPressed]) {
            this.direction = keyPressed as keyof typeof this.keys;
        }

        this.keys[this.direction]();
        this.head.color = "#4023E0";
        this.body.pop();
        this.body.unshift({ ...this.head });

        if (this.body.length > 1) {
            this.body[1].color = "#FF0000";
        }
    }

    growUp(): void {
        if (this.body.length > 0) {
            this.body.push({ ...this.body[this.body.length - 1] });
        }
    }

    teleport(x: number, y: number): void {
        this.head = new Pixel(x, y, "#4023E0");
        this.body.pop();
        this.body.unshift({ ...this.head });
    }

    getData(): Pixel[] {
        return this.body;
    }
}
