import { validatePlateauSize, validateRoverPosition, validateInstructions } from '../src/InputValidator';

describe('InputValidator', () => {
    describe('validatePlateauSize', () => {
        it('should return true if the plateau size is valid', () => {
            expect(validatePlateauSize('5 5')).toBe(true);
        });
        it('should return false if the plateau size is invalid', () => {
            expect(validatePlateauSize('5')).toBe(false);
            expect(validatePlateauSize('5 5 5')).toBe(false);
            expect(validatePlateauSize('5 a')).toBe(false);
            expect(validatePlateauSize('a 5')).toBe(false);
        });
    });
    describe('validateRoverPosition', () => {
        it('should return true if the rover position is valid', () => {
            expect(validateRoverPosition('1 2 N')).toBe(true);
            expect(validateRoverPosition('1 2 S')).toBe(true);
            expect(validateRoverPosition('1 2 E')).toBe(true);
            expect(validateRoverPosition('1 2 W')).toBe(true);
        });
        it('should return false if the rover position is invalid', () => {
            expect(validateRoverPosition('1 2')).toBe(false);
            expect(validateRoverPosition('1 2 nsew')).toBe(false);
            expect(validateRoverPosition('1 2 5')).toBe(false);
            expect(validateRoverPosition('1 2 NSEW')).toBe(false);
            expect(validateRoverPosition('1 2 NESW')).toBe(false);
            expect(validateRoverPosition('1 2 N S')).toBe(false);
            expect(validateRoverPosition('1 2 n')).toBe(false);
        });
    });
    describe('validateInstructions', () => {
        it('should return true if the instructions are valid', () => {
            expect(validateInstructions('LMLMLMLMM')).toBe(true);
            expect(validateInstructions('MMRMMRMRRM')).toBe(true);
            expect(validateInstructions('LMLMLMLMMl')).toBe(true);
            expect(validateInstructions('LMLMLMLMMm')).toBe(true);
            expect(validateInstructions('LMLMLMLMMr')).toBe(true);
            expect(validateInstructions('')).toBe(true);
        });
        it('should return false if the instructions are invalid', () => {
            expect(validateInstructions('LMLMLMLMM ')).toBe(false);
            expect(validateInstructions('LMLMLMLMM1')).toBe(false);
        });
    });
});