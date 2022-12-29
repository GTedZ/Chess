module.exports = new lib();

const { Pawn } = require('./Pieces');

const BOARD_POSITIONS = [
    'a',    // index 0 => 'a'
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h'
]

function lib() {

    this.newBoard = () => new Board();

}

class Board {

    constructor() {

        this.turn = 'white';

        this.grid = new Grid();

        this.clock = {
            white: '',
            black: ''
        }

        // set up \\\\

        this.setUp_Pawns();

        // set up ////


    }

    setUp_Pawns() {
        for (let x = 0; x < 8; x++) {
            this.grid[x][1].piece = new Pawn(x, 1, 'white');
            this.grid[x][6].piece = new Pawn(x, 6, 'black');
        }
    }

    drawBoard() {

        let str = '';
        for (let x = 0; x < 8; x++) {

            for (let y = 0; y < 8; y++) {

                const currentCell = this.grid[x][y];    // verbose => extra explanations, even when not needed (in code)
                str += currentCell.piece.empty == true ? ' . ' : ' ' + currentCell.piece.symbol + ' ';

            }

            str += '\n';
        }

        console.log(str);
    }
}

function Grid() {
    const grid = [];

    for (let x = 0; x < 8; x++) {
        grid[x] = [];
        for (let y = 0; y < 8; y++) {
            grid[x][y] = new Cell(x, y);
        }

    }

    return grid;
}

function Cell(i, j) {

    this.position = {
        x: i,
        y: j
    }

    this.apparentPosition = {
        x: BOARD_POSITIONS[i],
        y: j + 1
    }

    this.piece = { empty: true }
}