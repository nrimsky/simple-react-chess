import Piece from './piece.js';
import bk from './images/bk.svg';
import wk from './images/wk.svg';

class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ? (wk) : (bk) ));
    }
}

export default King;