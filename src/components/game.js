import React from 'react';
import '../index.css';
import Board from './board.js';
import FallenSoldierBlock from './fallen-soldiers.js';
import initialiseChessBoard from '../helpers/board-initialiser.js';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: initialiseChessBoard(),
            whiteFallenSoldiers: [],
            blackFallenSoldiers: [],
            sourceSelection: -1,
        }
    }

    canTakePiece(i, squares) {
        if (this.state.sourceSelection === -1) {
            return false;
        } else {
            const source_has_a_piece = (squares[this.state.sourceSelection] !== null);
            const selected_has_a_piece = (squares[i] !== null);
            if (selected_has_a_piece && source_has_a_piece) {
                return (squares[this.state.sourceSelection].player != squares[i].player);
            } else {
                return false;
            }
        }
    }

    canMovePiece(i, squares) {
        if (this.state.sourceSelection === -1) {
            return false;
        } else {
            const source_has_a_piece = (squares[this.state.sourceSelection] !== null);
            const selected_has_no_piece = (squares[i] === null);
            return (source_has_a_piece && selected_has_no_piece);
        }
    }

    canSelectSquare(i, squares) {
        const nothing_selected_so_far = (this.state.sourceSelection === -1);
        const selecting_same_square_again = (this.state.sourceSelection === i);
        const selected_has_a_piece = (squares[i] !== null);
        return (selected_has_a_piece && (nothing_selected_so_far || selecting_same_square_again));
    }
 
    handleClick(i) {
        const squares = this.state.squares.slice();
        const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
        const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
        let selected = this.state.sourceSelection;

        if (this.canTakePiece(i,squares)) {
            if (squares[i].player === 1) {
                whiteFallenSoldiers.push(squares[i]);
            }
            else {
                blackFallenSoldiers.push(squares[i]);
            }
            squares[i] = squares[this.state.sourceSelection];
            squares[this.state.sourceSelection] = null;
            selected = -1;
        }
        else if (this.canMovePiece(i,squares)) {
            squares[i] = squares[this.state.sourceSelection];
            squares[this.state.sourceSelection] = null;
            selected = -1;
        }
        else if (this.canSelectSquare(i,squares)) {
            selected = i;
        } 
        else {
            selected = -1;
        }      
        this.setState({
            sourceSelection: selected,
            squares: squares,
            whiteFallenSoldiers: whiteFallenSoldiers,
            blackFallenSoldiers: blackFallenSoldiers,
        });
    }


    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={this.state.squares}
                            onClick={(i) => this.handleClick(i)}
                            selected={this.state.sourceSelection}
                        />
                    </div>
                    <div className="game-info">
                        <div className="fallen-soldier-block">
                            {<FallenSoldierBlock
                                whiteFallenSoldiers={this.state.whiteFallenSoldiers}
                                blackFallenSoldiers={this.state.blackFallenSoldiers}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}