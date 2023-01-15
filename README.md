![Mars Rover](rover_128.png)
# Techreturners - Mars Rover Challenge 

The challenge is to create a program that will take a string of commands and move a rover around a grid. The rover can move forward, turn left, and turn right. The rover can also detect when it is at the edge of the grid and stop moving if it detects that it is at the edge of the grid. Optionally, the rover can wrap around the plateau.

The solution is a Typescript program.

To build the project, run the following command in the terminal:

`npm run build`

To run the code, run the following command in the terminal:

`npm start`

To run the tests, run the following command in the terminal:

`npm test`

The code has the following basic structure:
- The main.ts file is the entry point for the program. It contains the code that
    - reads the input from the command line
    - parses the input
    - creates the grid
    - creates the rover
    - runs the commands

The code is organized into modules.

The code assumes a fixed plateau, which means the rover cannot move outside the plateau.
The code was written to take input from a command line in a reasonably ergonomic fashion. The code could be modified to take input from a file or from a web page.

The code is written in Typescript. The code is compiled to Javascript using the Typescript compiler. The code is tested using Jest.

Example execution:

```console
Enter the size of the plateau: 5 5
How many rovers are there? 1
Enter the position of the rover : 0 0 N
Enter the instructions for the rover: MMMMMM
Should the rovers wrap around the plateau? (y/n) y
Rover starting at 0 0 N
Processing instructions MMMMMM
Rover finished at 0 0 N
```

<a href="https://www.flaticon.com/free-icons/mars-rover" title="mars rover icons">Mars rover icons created by Eucalyp - Flaticon</a>