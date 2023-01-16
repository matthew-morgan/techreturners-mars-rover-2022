import Rover from '../src/Rover';
import Position from '../src/Position';
import { Direction } from '../src/Direction';
import Plateau from '../src/Plateau';

describe('Rover', () => {
    it('should move forward', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        expect(rover.move()).toBe(true);
        expect(rover.toString()).toBe('0 1 N');
    });
    it('should not move forward if it would go off the plateau', () => {
        const rover = new Rover(new Position(5, 5, Direction.N), new Plateau(5, 5), '', false);
        expect(rover.move()).toBe(false);
        expect(rover.toString()).toBe('5 5 N');
    });
    it('should turn left', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        rover.left();
        expect(rover.toString()).toBe('0 0 W');
    });
    it('should turn right', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        rover.right();
        expect(rover.toString()).toBe('0 0 E');
    });
    it('should move forward and turn left', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        rover.move();
        rover.left();
        expect(rover.toString()).toBe('0 1 W');
    });
    it('should move forward and turn right', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        rover.move();
        rover.right();
        expect(rover.toString()).toBe('0 1 E');
    });
    it('should process instructions', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        rover.processInstructions('MMR');
        expect(rover.toString()).toBe('0 2 E');
    });
    it('should not process instructions if it would go off the plateau', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', false);
        rover.processInstructions('MMMMMMMMMMM');
        expect(rover.toString()).toBe('0 5 N');
    });
    it('should wrap around the plateau', () => {
        const rover = new Rover(new Position(0, 0, Direction.N), new Plateau(5, 5), '', true);
        rover.processInstructions('MMMMMM');
        expect(rover.toString()).toBe('0 0 N');
    });
    it('should wrap around the plateau on the x-axis', () => {
        const rover = new Rover(new Position(0, 0, Direction.W), new Plateau(5, 5), '', true);
        rover.processInstructions('M');
        expect(rover.toString()).toBe('5 0 W');
    });
    it('should wrap around the plateau on the x-axis', () => {
        const rover = new Rover(new Position(5, 0, Direction.E), new Plateau(5, 5), '', true);
        rover.processInstructions('M');
        expect(rover.toString()).toBe('0 0 E');
    });
    it('should wrap around the plateau on the y-axis', () => {
        const rover = new Rover(new Position(0, 0, Direction.S), new Plateau(5, 5), '', true);
        rover.processInstructions('M');
        expect(rover.toString()).toBe('0 5 S');
    });
    it('should wrap around the plateau on the y-axis', () => {
        const rover = new Rover(new Position(0, 5, Direction.N), new Plateau(5, 5), '', true);
        rover.processInstructions('M');
        expect(rover.toString()).toBe('0 0 N');
    });
    it('should wrap around the plateau on the x- and y-axis', () => {
        const rover = new Rover(new Position(5, 5, Direction.N), new Plateau(5, 5), '', true);
        rover.processInstructions('MRM');
        expect(rover.toString()).toBe('0 0 E');
    });
    it('should wrap around the plateau on the x- and y-axis', () => {
        const rover = new Rover(new Position(5, 5, Direction.N), new Plateau(5, 5), '', true);
        rover.processInstructions('MRMM');
        expect(rover.toString()).toBe('1 0 E');
    });

});
