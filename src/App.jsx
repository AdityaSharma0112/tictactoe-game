import "./styles.scss";
import { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./winner";
import StatusMessage from "./Components/StatusMessage";
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = (clickedposition) => {
    if (squares[clickedposition] || winner) {
      return;
    }

    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedposition === position) {
          return isXNext ? "x" : "o";
        }
        return squareValue;
      });
    });

    setIsXNext((currentIsXNext) => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
