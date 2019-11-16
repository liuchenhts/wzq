import React from 'react';
import './index.css';
import Board from './Board.js';

class Game extends React.Component {
  WN = 5;
  n = 20;
  winner = null;
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: this.createSquares(this.n)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (this.winner) {
      status = "Winner: " + this.winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i, j) => this.handleClick(i, j)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  createSquares(n) {
    let x = new Array(n);
    for (let i = 0; i < n; i++) {
      x[i] = new Array(n).fill(null);
    }
    return x;
  }

  handleClick(i, j) {
    if (this.winner) {
      return;
    }
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.map((row, index) => {
      return row.slice();
    });

    if (squares[i][j]) return;

    squares[i][j] = this.state.xIsNext ? "X" : "O";
    this.calculateWinner(squares, i, j)

    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    if (this.winner) {
      return;
    }
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  calculateWinner(squares, i, j) {
    const found = this.calculateRow(squares, i, j) || this.calculateCol(squares, i, j) || this.calculateTLDiagnal(squares, i, j) || this.calculateBLDiagnal(squares, i, j);
    if (found) {
      this.winner = squares[i][j];
    }
  }

  calculateRow(squares, i, j) {
    const letter = squares[i][j];
    let leftNo = 0;
    let rightNo = 0;

    // search to the left
    let col = j - 1;
    while (col >= 0 && col <= this.n) {
      if (letter === squares[i][col]) {
        leftNo++;
        if (leftNo + 1 === this.WN) {
          return true;
        }
        col--;
      } else {
        break;
      }
    }


    // search to the right
    col = j + 1;
    while (col >= 0 && col <= this.n) {
      if (letter === squares[i][col]) {
        rightNo++;
        if (leftNo + rightNo + 1 === this.WN) {
          return true;
        }
        col++;
      } else {
        break;
      }
    }

    return false;
  }

  calculateCol(squares, i, j) {
    const letter = squares[i][j];
    let topNo = 0;
    let bottomNo = 0;

    // search to the top
    let row = i - 1;
    while (row >= 0 && row <= this.n) {
      if (letter === squares[row][j]) {
        topNo++;
        if (topNo + 1 === this.WN) {
          return true;
        }
        row--;
      } else {
        break;
      }
    }


    // search to the bottom
    row = i + 1;
    while (row >= 0 && row <= this.n) {
      if (letter === squares[row][j]) {
        bottomNo++;
        if (topNo + bottomNo + 1 === this.WN) {
          return true;
        }
        row++;
      } else {
        break;
      }
    }

    return false;
  }

  calculateTLDiagnal(squares, i, j) {
    const letter = squares[i][j];
    let leftNo = 0;
    let rightNo = 0;

    // search to the left
    let row = i - 1;
    let col = j - 1;
    while (row >= 0 && row <= this.n && col >= 0 && col <= this.n) {
      if (letter === squares[row][col]) {
        leftNo++;
        if (leftNo + 1 === this.WN) {
          return true;
        }
        row--;
        col--;
      } else {
        break;
      }
    }


    // search to the right
    row = i + 1;
    col = j + 1;
    while (row >= 0 && row <= this.n && col >= 0 && col <= this.n) {
      if (letter === squares[row][col]) {
        rightNo++;
        if (leftNo + rightNo + 1 === this.WN) {
          return true;
        }
        row++;
        col++;
      } else {
        break;
      }
    }

    return false;
  }


  calculateBLDiagnal(squares, i, j) {
    const letter = squares[i][j];
    let leftNo = 0;
    let rightNo = 0;

    // search to the left
    let row = i + 1;
    let col = j - 1;
    while (row >= 0 && row <= this.n && col >= 0 && col <= this.n) {
      if (letter === squares[row][col]) {
        leftNo++;
        if (leftNo + 1 === this.WN) {
          return true;
        }
        row++;
        col--;
      } else {
        break;
      }
    }


    // search to the right
    row = i - 1;
    col = j + 1;
    while (row >= 0 && row <= this.n && col >= 0 && col <= this.n) {
      if (letter === squares[row][col]) {
        rightNo++;
        if (leftNo + rightNo + 1 === this.WN) {
          return true;
        }
        row--;
        col++;
      } else {
        break;
      }
    }

    return false;
  }

}

export default Game