import Piece from './piece.js';
import bkn from './images/bkn.svg';
import wkn from './images/wkn.svg';

class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1 ? (wkn) : (bkn) ));
    }
}

export default Knight;