import Plateau  from '../src/Plateau';

describe('Plateau', () => {
    it('should contain a point within its bounds', () => {
        const plateau = new Plateau(5, 5);
        expect(plateau.contains(0, 0)).toBe(true);
        expect(plateau.contains(5, 5)).toBe(true);
        expect(plateau.contains(2, 2)).toBe(true);
    });
    it('should not contain a point outside its bounds', () => {
        const plateau = new Plateau(5, 5);
        expect(plateau.contains(-1, 0)).toBe(false);
        expect(plateau.contains(0, -1)).toBe(false);
        expect(plateau.contains(6, 5)).toBe(false);
        expect(plateau.contains(5, 6)).toBe(false);
    });
    it('should return a string representation of the plateau', () => {
        const plateau = new Plateau(5, 5);
        expect(plateau.toString()).toBe('5 5');
    });
});

