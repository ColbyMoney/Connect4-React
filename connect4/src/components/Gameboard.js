import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
  
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(x, y) {
    if (calculateWinner(squares) || squares[x][y]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[x][y] = 'X';
    } else {
      nextSquares[x][y] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  //build the html for the squares in the gameboard so the bottom left corner is (0,0) for (x,y)
  //x corresponds to the column while y corresponds to the row
  //on game board, x value increases to the right and y value increases up
  var boardHTML = '';
  for (let y = 5; y >= 0; y--) {
    boardHTML += ('<div className="board-row">');
    for (let x = 0; x < 7; x++) {
      boardHTML += ('<Square value={squares[' + x + '][' + y + ']} onSquareClick={() => handleClick(' + x + ',' + y + ')} />');
    }
    boardHTML += ('</div>');
  }
  console.log(boardHTML);
  //let parser = new DOMParser();
  //const doc = parser.parseFromString(boardHTML, 'text/html');

  return (
    <>
      <div className="status">{status}</div>

      {boardHTML}

    </>
  );
}

export default function Gameboard() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}