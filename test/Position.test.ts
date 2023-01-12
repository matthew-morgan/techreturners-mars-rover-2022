import Position from "../src/Position";
import { Direction } from "../src/Direction";

describe("Position", () => {
    it("should move forward", () => {
        const position = new Position(0, 0, Direction.N);
        expect(position.move().toString()).toBe("0 1 N");
    });
    it("should turn left", () => {
        const position = new Position(0, 0, Direction.N);
        expect(position.turnLeft().toString()).toBe("0 0 W");
    });
    it("should turn right", () => {
        const position = new Position(0, 0, Direction.N);
        expect(position.turnRight().toString()).toBe("0 0 E");
    });
    it("should move forward and turn left", () => {
        const position = new Position(0, 0, Direction.N);
        expect(position.move().turnLeft().toString()).toBe("0 1 W");
    });
    it("should move forward and turn right", () => {
        const position = new Position(0, 0, Direction.N);
        expect(position.move().turnRight().toString()).toBe("0 1 E");
    });
});