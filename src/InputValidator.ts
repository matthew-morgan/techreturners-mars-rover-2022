export function validatePlateauSize(plateauSize: string): boolean {
    const plateauSizeArray = plateauSize.split(' ');
    if (plateauSizeArray.length !== 2 
        || isNaN(parseInt(plateauSizeArray[0])) 
        || isNaN(parseInt(plateauSizeArray[1]))) {
        return false;
    }
    return true;
}

export function validateRoverPosition(roverPosition: string): boolean {
    const roverPositionArray = roverPosition.split(' ');
    if (roverPositionArray.length !== 3 
        || !['n','e','s','w'].includes(roverPositionArray[2].toLowerCase())
        || isNaN(parseInt(roverPositionArray[0]))
        || isNaN(parseInt(roverPositionArray[1]))) {
        return false;
    }
    return true;
}

export function validateInstructions(instructions: string): boolean {
    if (!instructions.split('').every((instruction) => 'lrm'.includes(instruction.toLowerCase()))) {
        return false;
    }
    return true;
}

export function validateRoverCount(roverCount: string): boolean {
    if (isNaN(parseInt(roverCount))
        || parseInt(roverCount) < 1
        || parseInt(roverCount) > 10
        || !Number.isInteger(parseInt(roverCount))) {
        return false;
    }
    return true;
}