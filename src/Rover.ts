import Position from './Position';
import Plateau from './Plateau';

//A unit that moves around on a Plateau and has a Position
export default class Rover {
    constructor(public position: Position,
        public plateau: Plateau,
        public instructions: string,
        public wrap: boolean) { }
    // Returns true if the given coordinates are within the bounds of the plateau
    move(): boolean {
        if (!this.wrap) {
            const newPosition = this.position.move();
            if (this.plateau.contains(newPosition.x, newPosition.y)) {
                this.position = newPosition;
                return true;
            }
            return false;
        }
        else {
            const newPosition = this.position.move();
            if (!this.plateau.contains(newPosition.x, newPosition.y)) {
                this.position = this.wrapCoordinates(newPosition);
            }
            else {
                this.position = newPosition;
            }
            return true;
        }
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

    wrapCoordinates(currentPosition: Position): Position {
        let newX = currentPosition.x;
        let newY = currentPosition.y;
        if (newX < 0) {
            newX = this.plateau.width;
        } else if (newX > this.plateau.width) {
            newX = 0;
        }
        if (newY < 0) {
            newY = this.plateau.height;
        } else if (newY > this.plateau.height) {
            newY = 0;
        }
        return new Position(newX, newY, currentPosition.direction);
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
                    if (!this.move()) {
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