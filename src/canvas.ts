interface CanvasObject {
    clear: () => void;
    drawPixel: (x?: number, y?: number, color?: string) => void;
}

export function canvasObject(): CanvasObject {
    const c = document.getElementById("canvas") as HTMLCanvasElement | null;
    if (!c) {
        throw new Error("Canvas element not found");
    }

    const ctx = c.getContext("2d");
    if (!ctx) {
        throw new Error("Unable to get 2D context");
    }

    function clear(): void {
        if (c && ctx) {
            ctx.clearRect(0, 0, c.width, c.height);
        }
    }

    function drawPixel(x: number = 0, y: number = 0, color: string = '#FF0000'): void {
        if (ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }

    return {
        clear,
        drawPixel,
    };
}
