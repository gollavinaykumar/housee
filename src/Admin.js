import { useEffect, useState } from "react";
import Players from "./Player";
import "./ticket.css";

export default function Admin({ array }) {
  const [number, setNumber] = useState(0);

  function getRandom(arrays) {
    let num = arrays[Math.floor(Math.random() * 100)];
    return num;
  }
  function Timeout() {
    setTimeout(() => {
      setNumber(getRandom(array));
    }, 1000);
  }

  useEffect(() => {
    Timeout();
  }, [number]);

  return (
    <>
      <div className="home-main">
        <div className="header">
          <h1>Housee</h1>
        </div>
        <div className="admin">
          {number}
          <button>Roll</button>
        </div>

        <Players number={number} key={"player"} />
      </div>
    </>
  );
}
