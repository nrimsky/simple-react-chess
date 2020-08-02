import Piece from './piece.js';
import bq from './images/bq.svg';
import wq from './images/wq.svg';

class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1 ? (wq) : (bq) ));
    }
}

export default Queen;