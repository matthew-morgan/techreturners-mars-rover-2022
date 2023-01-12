// A rectangular grid with 0,0 in the bottom left corner
export default class Plateau {
    constructor(public width: number, public height: number) {}
    // Returns true if the given coordinates are within the bounds of the plateau
    contains(x: number, y: number): boolean {
        return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
    }
}
