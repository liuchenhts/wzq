import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button className="square">
        {this.props.value}
      </button>
     );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() { 
    let status = 'Next player: X';
    return ( 
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div> );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (      
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
     );
  }
}

 // ========================================
ReactDOM.render(
  <Game></Game>, document.getElementById("root")
)

  
