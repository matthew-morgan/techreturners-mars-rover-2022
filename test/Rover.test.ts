import Rover from '../src/Rover';
import Position from '../src/Position';
import { Direction } from '../src/Direction';
import Plateau from '../src/Plateau';

describe('Rover', () => {
    it('should move forward', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        expect(rover.move()).toBe(true);
        expect(rover.toString()).toBe('0 1 N');
    });
    it('should not move forward if it would go off the plateau', () => {
        const rover = new Rover(new Position(5, 5, Direction.N), new Plateau(5, 5), '');
        expect(rover.move()).toBe(false);
        expect(rover.toString()).toBe('5 5 N');
    });
    it('should turn left', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        rover.left();
        expect(rover.toString()).toBe('0 0 W');
    });
    it('should turn right', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        rover.right();
        expect(rover.toString()).toBe('0 0 E');
    });
    it('should move forward and turn left', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        rover.move();
        rover.left();
        expect(rover.toString()).toBe('0 1 W');
    });
    it('should move forward and turn right', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        rover.move();
        rover.right();
        expect(rover.toString()).toBe('0 1 E');
    });
    it('should process instructions', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        rover.processInstructions('MMR');
        expect(rover.toString()).toBe('0 2 E');
    });
    it('should not process instructions if it would go off the plateau', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '');
        rover.processInstructions('MMMMMMMMMMM');
        expect(rover.toString()).toBe('0 5 N');
    });

});
