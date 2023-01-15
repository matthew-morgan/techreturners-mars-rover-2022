import Position from './Position';
import Plateau from './Plateau';

//A unit that moves around on a Plateau and has a Position
export default class Rover {
    constructor(public position: Position, public plateau: Plateau, public instructions: string) {}
    // Returns true if the given coordinates are within the bounds of the plateau
    move(): boolean {
        const newPosition = this.position.move();
        if (this.plateau.contains(newPosition.x, newPosition.y)) {
            this.position = newPosition;
            return true;
        }
        return false;
    }
    left(): void {
        this.position = this.position.turnLeft();
    }
    right(): void {
        this.position = this.position.turnRight();
    }
    toString(): string {
        return this.position.toString();
    }

    start(): void {
        console.log(`Rover starting at ${this.position.toString()}`);
        console.log(`Processing instructions ${this.instructions}`);
        this.processInstructions(this.instructions);
        console.log(`Rover finished at ${this.position.toString()}`);
    }

    //Processes a string of letters representing the instructions to move the Rover around the Plateau
    processInstructions(instructions: string): void {
        for (let i = 0; i < instructions.length; i++) {
            const instruction = instructions[i];
            switch (instruction.toLowerCase()) {
                case 'l':
                    this.left();
                    break;
                case 'r':
                    this.right();
                    break;
                case 'm':
                    if(!this.move()) {
                        console.log(`Rover cannot move to new position from ${this.position.toString()} and is stopping`);
                        i = instructions.length;
                    }
                    break;
                default:
                    throw new Error(`Invalid instruction: ${instruction}`);
            }
        }
    }
}
