const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every((squareValue) => squareValue !== null);
  const nextPlayer = isXNext ? "x" : "o";

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          winner is {""}
          <span className={winner == "x" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-orange">o</span> and{" "}
          <span className="text-green">x</span> tied
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          next player is{" "}
          <span className={isXNext ? "text-green" : "text-orange"}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    return null;
  };
  return <div>{renderStatusMessage()}</div>;
};

export default StatusMessage;
