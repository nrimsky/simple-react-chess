import Piece from './piece.js';

class Bishop extends Piece {
    constructor(player,bishopNumber) {
        super(player, (player === 1 ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"),
        (player === 1 ? "Bishop1_"+bishopNumber: "Bishop2_"+bishopNumber));
    }
}

export default Bishop;