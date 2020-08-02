import Piece from './piece.js';
import bp from './images/bp.svg';
import wp from './images/wp.svg';

class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1 ? (wp) : (bp) ));
    }
}

export default Pawn;