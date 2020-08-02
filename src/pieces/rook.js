import Piece from './piece.js';
import br from './images/br.svg';
import wr from './images/wr.svg';

class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1 ? (wr) : (br) ));
    }
}

export default Rook;