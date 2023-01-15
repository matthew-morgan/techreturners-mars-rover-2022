import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import {
    validateInstructions,
    validatePlateauSize,
    validateRoverPosition,
    validateRoverCount,
    validateWrapping
} from './InputValidator';
import { Direction } from './Direction';
import Plateau from './Plateau';
import Rover from './Rover';
import Position from './Position';
import Mission from './Mission';

const rl = readline.createInterface({ input, output });

const ask = (question: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    console.clear();
    const plateauQuestion = 'Enter the size of the plateau: ';
    const roverCountQuestion = 'How many rovers are there? ';
    const roverPositionQuestion = 'Enter the position of the rover : ';
    const instructionsQuestion = 'Enter the instructions for the rover: ';
    const wrappingQuestion = 'Should the rovers wrap around the plateau? (y/n) ';

    let plateauSize = await ask(plateauQuestion);
    while (!validatePlateauSize(plateauSize)) {
        console.log('Plateau size must be two integers separated by a space');
        plateauSize = await ask(plateauQuestion);
    }

    const plateauSizeArray = plateauSize.split(' ');
    const plateau = new Plateau(parseInt(plateauSizeArray[0]), parseInt(plateauSizeArray[1]));

    let roverCount = await ask(roverCountQuestion);
    while (!validateRoverCount(roverCount)) {
        console.log('Rover count must be an integer between 1 and 10');
        roverCount = await ask(roverCountQuestion);
    }

    const rovers: Rover[] = [];

    for (let i = 0; i < parseInt(roverCount); i++) {
        let roverPosition = await ask(roverPositionQuestion);
        while (!validateRoverPosition(roverPosition)) {
            console.log('Rover position must be in the format "x y direction (N, E, S, W)"');
            roverPosition = await ask(roverPositionQuestion);
        }

        const roverPositionArray = roverPosition.split(' ');
        const startX: number = parseInt(roverPositionArray[0]);
        const startY: number = parseInt(roverPositionArray[1]);
        const direction: Direction = roverPositionArray[2] as Direction;

        let instructions = await ask(instructionsQuestion);
        while (!validateInstructions(instructions)) {
            console.log('Instructions must be in the format "L, R, M"');
            instructions = await ask(instructionsQuestion);
        }

        let wrapping = await ask(wrappingQuestion);
        while (!validateWrapping(wrapping)) {
            console.log('Wrapping must be "y" or "n"');
            wrapping = await ask(wrappingQuestion);
        }

        const rover = new Rover(new Position(startX, startY, direction), plateau, instructions, wrapping === 'y');
        rovers.push(rover);
    }
    rl.close();
    const mission = new Mission(rovers);
    mission.start();
};

main();





