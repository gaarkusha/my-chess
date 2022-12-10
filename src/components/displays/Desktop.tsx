import { FC } from "react";
import { Board } from "../../models/Board";
import { Player } from "../../models/Player";
import BoardComponent from "../BoardComponent";
import LostFigures from "../LostFigures";
import Timer from "../Timer";

interface DesktopProps {
  restart: () => void;
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}
const Desktop: FC<DesktopProps> = ({
  restart,
  currentPlayer,
  board,
  setBoard,
  swapPlayer,
}) => {
  return (
    <div className="screen">
      <div className="board-wrapper">
      <div>
        <Timer restart={restart} currentPlayer={currentPlayer} />
      </div>
      <div>
      <BoardComponent
        restart={restart}
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}/>
      </div>
      <div className="lost-figures-wrapper">
        <LostFigures figures={board.lostBlackFigures} title="Black figures" />
        <LostFigures figures={board.lostWhiteFigures} title="White figures" />
      </div> 
      </div>
    </div>
  );
};

export default Desktop;
