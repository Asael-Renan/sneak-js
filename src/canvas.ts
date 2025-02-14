export class Canvas {
    private static canvas: HTMLCanvasElement | null = null;
    private static ctx: CanvasRenderingContext2D | null = null;

    static init() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
        if (this.canvas) {
            this.ctx = this.canvas.getContext("2d");
            if (!this.ctx) {
                console.error("Falha ao obter o contexto 2D do canvas.");
            }
        } else {
            console.error("Elemento 'canvas' não encontrado.");
        }
    }

    static draw(x: number, y: number) {
        if (this.ctx) {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(x, y, 1, 1);
        } else {
            console.error("Contexto não inicializado. Chame Canvas.init() primeiro.");
        }
    }

    static clear() {
        if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        } else {
            console.error("Contexto não inicializado. Chame Canvas.init() primeiro.");
        }
    }
}