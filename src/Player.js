import Player1 from "./Player1";

export default function Players({ number }) {
  return <div className="players">{<Player1 number={number} />}</div>;
}
