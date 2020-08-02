import Piece from './piece.js';
import bb from './images/bb.svg';
import wb from './images/wb.svg';

class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ? (wb) : (bb) ));
    }
}

export default Bishop;