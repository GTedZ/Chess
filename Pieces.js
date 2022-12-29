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

class Piece {
    constructor(x, y, color) {

        this.position = {
            x,
            y
        }

        this.color = color;

    }

    getApparentPosition = () => {
        return {
            x: BOARD_POSITIONS[this.position.x],
            y: this.position.y + 1
        }
    }
}

class Pawn extends Piece {
    constructor(x, y, color) {
        super(x, y, color);

        this.type = 'pawn';
        this.name = 'p';
        this.symbol = this.color == 'white' ? this.name.toUpperCase() : this.name.toLowerCase();

        this.hasMoved = false;

        this.movements = [
            {
                move: () => {
                    const x = this.position.x;
                    const y = this.position.y + (this.color == 'white' ? +1 : -1)

                    return {
                        x,
                        y
                    }
                },
                isPossible: () => true,
                capture: false
            },
            {
                move: () => {
                    const x = this.position.x;
                    const y = this.position.y + (this.color == 'white' ? +2 : -2)

                    return {
                        x,
                        y
                    }
                },
                isPossible: () => !this.hasMoved,
                capture: false
            },
            {
                move: () => {
                    const x = this.position.x + 1;
                    const y = this.position.y + (this.color == 'white' ? +1 : -1)

                    return {
                        x,
                        y
                    }
                },
                isPossible: () => true,
                capture: true
            },
            {
                move: () => {
                    const x = this.position.x - 1;
                    const y = this.position.y + (this.color == 'white' ? +1 : -1)

                    return {
                        x,
                        y
                    }
                },
                isPossible: () => true,
                capture: true
            },
            {
                move: () => {

                },
                isPossible: () => true,
            }
        ]
    }
}

class King {

}

class Queen {

}

module.exports = {
    Pawn
}