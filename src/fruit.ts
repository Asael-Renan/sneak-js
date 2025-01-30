import { IGameObject } from "./interfaces/IGameObject";
import { Pixel } from "./pixel";

export class FruitObject implements IGameObject {
    private fruits: Pixel[];
    private gridSize = 11;
    private fruitColor = "#C3DA5D";

    constructor(
        private head: Pixel, 
        private player: { growUp: () => void },
        private fruitCount: number = 1
    ) {
        this.fruits = [];
        this.initializeFruits();
    }

    // Gera uma posição aleatória para a fruta
    private randomPosition(): Pixel {
        let newX: number;
        let newY: number;
        do {
            newX = Math.floor(Math.random() * this.gridSize);
            newY = Math.floor(Math.random() * this.gridSize);
        } while (this.fruits.some(f => f.x === newX && f.y === newY) || (newX === this.head.x && newY === this.head.y));
        
        return new Pixel(newX, newY, this.fruitColor);
    }

    // Inicializa as frutas no jogo
    private initializeFruits(): void {
        for (let i = 0; i < this.fruitCount; i++) {
            this.fruits.push(this.randomPosition());
        }
    }

    // Verifica se a cabeça da cobra colidiu com a fruta e faz o jogador crescer
    spawn(): void {
        this.fruits.forEach((fruit, index) => {
            if (this.head.x === fruit.x && this.head.y === fruit.y) {
                this.player.growUp();
                this.fruits[index] = this.randomPosition(); // Gera uma nova fruta
            }
        });
    }

    // Retorna os dados das frutas
    getData(): Pixel[] {
        return this.fruits;
    }
}
