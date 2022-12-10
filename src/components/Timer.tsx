import { FC, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState(300);
  const [blackTime, setBlackTime] = useState(300);

  // For modal block
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);
  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => (prev > 0 ? prev - 1 : prev));
  }
  function decrementWhiteTimer() {
    setWhiteTime((prev) => (prev > 0 ? prev - 1 : prev));
  }
  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      {whiteTime && blackTime ? (
        <div className="timerBlock">
          <div className="text-timer">
            <p> White`s time - {whiteTime}</p>
            <p> Black`s time - {blackTime}</p>
          </div>
          <div className="button-restart-wrapper">
            <button onClick={handleRestart} className="button-restart" >Restart game</button>
          </div>
        </div>
      ) : (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Time's up! {whiteTime ? "White" : "Black"} wins! Congratulations!
            One more game?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleRestart}>
              New game
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Timer;
