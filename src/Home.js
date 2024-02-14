import { Link } from "react-router-dom";
import "./ticket.css";
import { useState } from "react";
import { useGameStore } from "./store";

export default function Home() {
  const addPlayers = useGameStore((state) => state.addPlayers);
  const [players, setPlayers] = useState(0);
  const [text, setText] = useState({});
  const [playersNames, setPlayersNames] = useState([]);

  
  return (
    <>
      <div className="home-main">
        <header className="header">
          <h1>Housee</h1>
        </header>
      </div>
      <div className="home">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="number"
            placeholder="no of players"
            value={players}
            onChange={(e) => {
              setPlayers(e.target.value);
            }}
          />
          {[...new Array(Number(players))].map(() => {
            return (
              <div>
                <input
                  type="text"
                  placeholder="Enter Player Name"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    setPlayersNames([...playersNames, text]);
                  }}
                >
                  submit
                </button>
              </div>
            );
          })}
        </div>

        <Link to="/game">
          <button onClick={addPlayers(players, playersNames)}>
            Enter Game
          </button>
        </Link>
      </div>
    </>
  );
}
