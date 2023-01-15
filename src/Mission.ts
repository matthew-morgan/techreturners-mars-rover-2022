import Rover from './Rover';

export default class Mission {
    constructor(public rovers: Rover[]) {}
    start (): void {
        this.rovers.forEach(rover => rover.start());
    }
}


