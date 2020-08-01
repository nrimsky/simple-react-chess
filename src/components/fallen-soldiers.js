import React from 'react';
import '../index.css';
import Square from './square.js';

export default class FallenSoldierBlock extends React.Component {

    renderSquare(square, index) {
        return <Square
            style={square.style}
            key={index}
        />
    }

    render() {
        return (
            <div>
                <div className="board-row" key={0}>{this.props.whiteFallenSoldiers.map((ws, index) =>
                    this.renderSquare(ws, index)
                )}</div>
                <div className="board-row" key={1}>{this.props.blackFallenSoldiers.map((bs, index) =>
                    this.renderSquare(bs, index)
                )}</div>
            </div>
        );
    }
}