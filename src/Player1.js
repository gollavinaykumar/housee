import { Ticket1 } from "./tickets";
import "./ticket.css";
import { useGameStore, useWinnerList } from "./store";
import { useState } from "react";

export default function Player1({ number }) {
  const noofplayers = useGameStore((s) => s.noOfPlayers);
  const playerNames = useGameStore((s) => s.playersNames);
  const jaldi51 = useWinnerList((s) => s.jaldi5);
  const firstrow1 = useWinnerList((s) => s.firstrow);
  const secondrow1 = useWinnerList((s) => s.secondrow);
  const thirdrow1 = useWinnerList((s) => s.thirdrow);
  const Fullhousee1 = useWinnerList((s) => s.Fullhousee);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            placeItems: "center",
            gap: 20,
          }}
          className="ticket"
        >
          {playerNames.map((name) => {
            return <Ticket1 number={number} name={name} />;
          })}
        </div>
        <div
          style={{
            border: "1px solid black",
            width: "400px",
            height: "fit-content",
            marginTop:"400px"
          }}
        >
          <h3 style={{textAlign:"center"}}>
            <u>Winner's List</u>
          </h3>
          <ul>
            <li>Jaldi-5 : {jaldi51[1]}</li>
            <li>First-Row :{firstrow1}</li>
            <li>Second-Row :{secondrow1}</li>
            <li>Third-Row :{thirdrow1}</li>
            <li>Full-Housee :{Fullhousee1} </li>
          </ul>
        </div>
      </div>
    </>
  );
}
