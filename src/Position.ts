import { Direction } from './Direction';

//Holds x, y coordinates and a direction in N, E, S, W
export default class Position {
    constructor(public x: number, public y: number, public direction: Direction) {}
    // Updates the position as a result of moving one unit in the current direction
    move(): Position {
        switch (this.direction) {
            case Direction.N:
                return new Position(this.x, this.y + 1, this.direction);
            case Direction.E:
                return new Position(this.x + 1, this.y, this.direction);
            case Direction.S:
                return new Position(this.x, this.y - 1, this.direction);
            case Direction.W:
                return new Position(this.x - 1, this.y, this.direction);
        }
    }
    // Updates the position as a result of turning left
    turnLeft(): Position {
        switch (this.direction) {
            case Direction.N:
                return new Position(this.x, this.y, Direction.W);
            case Direction.E:
                return new Position(this.x, this.y, Direction.N);
            case Direction.S:
                return new Position(this.x, this.y, Direction.E);
            case Direction.W:
                return new Position(this.x, this.y, Direction.S);
        }
    }
    // Updates the position as a result of turning right
    turnRight(): Position {
        switch (this.direction) {
            case Direction.N:
                return new Position(this.x, this.y, Direction.E);
            case Direction.E:
                return new Position(this.x, this.y, Direction.S);
            case Direction.S:
                return new Position(this.x, this.y, Direction.W);
            case Direction.W:
                return new Position(this.x, this.y, Direction.N);
        }
    }
    // Returns a string representation of the position
    toString(): string {
        return `${this.x} ${this.y} ${Direction[this.direction]}`;
    }
}