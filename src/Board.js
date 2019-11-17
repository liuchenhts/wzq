import React from 'react';
import './index.css';
import Square from './Square.js';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  renderSquare(i, j) {
    return (
      <Square id={i.toString() + j.toString()}
        value={this.props.squares[i][j]}
        winning={this.props.winningSquares[i][j]}
        onClick={() => this.props.onClick(i, j)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.props.squares.map((row, i) => (
          <div className="board-row">
            {row.map((col, j) => (
              this.renderSquare(i, j)
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board