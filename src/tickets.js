import { useState } from "react";
import "./ticket.css";
import { useGameStore, useWinnerList } from "./store";

export function Ticket1({ number, name }) {
  const [countJaldi, setCountJaldi] = useState(0);
  const addJaldi5 = useWinnerList((s) => s.addJaldi5);
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [n1, setN1] = useState(randomIntFromInterval(0, 10));
  const [n2, setN2] = useState(randomIntFromInterval(21, 30));
  const [n3, setN3] = useState(randomIntFromInterval(41, 50));
  const [n4, setN4] = useState(randomIntFromInterval(61, 70));
  const [n5, setN5] = useState(randomIntFromInterval(81, 100));

  const [n6, setN6] = useState(randomIntFromInterval(11, 20));
  const [n7, setN7] = useState(randomIntFromInterval(31, 40));
  const [n8, setN8] = useState(randomIntFromInterval(41, 50));
  const [n9, setN9] = useState(randomIntFromInterval(71, 80));
  const [n10, setN10] = useState(randomIntFromInterval(81, 100));

  const [n11, setN11] = useState(randomIntFromInterval(0, 10));
  const [n12, setN12] = useState(randomIntFromInterval(21, 30));
  const [n13, setN13] = useState(randomIntFromInterval(31, 40));
  const [n14, setN14] = useState(randomIntFromInterval(51, 60));
  const [n15, setN15] = useState(randomIntFromInterval(71, 80));
  const N5 = () => {
    setN5(<s>{n5}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N1 = () => {
    setN1(<s>{n1}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N2 = () => {
    setN2(<s>{n2}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N3 = () => {
    setN3(<s>{n3}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N4 = () => {
    setN4(<s>{n4}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N6 = () => {
    setN6(<s>{n6}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N7 = () => {
    setN7(<s>{n7}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N8 = () => {
    setN8(<s>{n8}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N9 = () => {
    setN9(<s>{n9}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N10 = () => {
    setN10(<s>{n10}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N11 = () => {
    setN11(<s>{n11}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N12 = () => {
    setN12(<s>{n12}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N13 = () => {
    setN13(<s>{n13}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N14 = () => {
    setN14(<s>{n14}</s>);
    setCountJaldi(countJaldi + 1);
  };
  const N15 = () => {
    setN15(<s>{n15}</s>);
    setCountJaldi(countJaldi + 1);
  };


  return (
    <>
      <div className="grid">
        <h2>Player name : {name}</h2>
        <div class="grid-container">
          <button class="grid-item">{n1}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n2}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n3}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n4}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n5}</button>
          {n5 == number && N5()}
          {n1 == number && N1()}
          {n2 == number && N2()}
          {n3 == number && N3()}
          {n4 == number && N4()}
          {n6 == number && N6()}
          {n7 == number && N7()}
          {n8 == number && N8()}
          {n9 == number && N9()}
          {n10 == number && N10()}
          {n11 == number && N11()}
          {n12 == number && N12()}
          {n13 == number && N13()}
          {n14 == number && N14()}
          {n15 == number && N15()}
          {countJaldi == 5 && addJaldi5(name)}
        </div>
        <div class="grid-container">
          <button class="grid-item" ></button>
          <button class="grid-item">{n6}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n7}</button>
          <button class="grid-item">{n8}</button>
          <button class="grid-item"></button>
          <button class="grid-item"></button>
          <button class="grid-item">{n9}</button>
          <button class="grid-item">{n10}</button>
        </div>
        <div class="grid-container">
          <button class="grid-item">{n11}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n12}</button>
          <button class="grid-item">{n13}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n14}</button>
          <button class="grid-item"></button>
          <button class="grid-item">{n15}</button>
          <button class="grid-item"></button>
        </div>
      </div>
    </>
  );
}
