export class Pixel {
    constructor(x: number, y: number, color: string);
    constructor(x: number, y: number);

    constructor(public x: number, public y: number, public color?: string) {
        this.color = color ?? "#4023E0";
    }
}
