import React from 'react';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

    renderSquare(i, squareShade) {
        return <Square
            key={i}
            style={this.props.squares[i]? this.props.squares[i].style : null}
            shade={squareShade}
            selected={(this.props.selected === i) ? " selected" : ""}
            onClick={() => this.props.onClick(i)}
        />
    }

    render() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            const squareRows = [];
            for (let j = 0; j < 8; j++) {
                const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-square" : "dark-square";
                const squareNum = (i * 8) + j;
                squareRows.push(this.renderSquare(squareNum, squareShade));
            }
            board.push(<div className="board-row" key={i}>{squareRows}</div>)
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}

function isEven(num) {
    return num % 2 === 0
}