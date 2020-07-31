class Piece {
    constructor(player, iconUrl) {
        this.player = player;
        this.style = { backgroundImage: "url('" + iconUrl + "')" };
    }
}

export default Piece;