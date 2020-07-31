import React from 'react';
import '../index.css';
import Square from './square.js';

export default class FallenSoldierBlock extends React.Component {

    renderSquare(square) {
        return <Square
            style={square.style}
        />
    }

    render() {
        return (
            <div>
                <div className="board-row">{this.props.whiteFallenSoldiers.map((ws) =>
                    this.renderSquare(ws)
                )}</div>
                <div className="board-row">{this.props.blackFallenSoldiers.map((bs) =>
                    this.renderSquare(bs)
                )}</div>
            </div>
        );
    }
}