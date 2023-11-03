import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dice.css";
import dice1 from "../../images/inverted-dice-1.png";
import dice2 from "../../images/inverted-dice-2.png";
import dice3 from "../../images/inverted-dice-3.png";
import dice4 from "../../images/inverted-dice-4.png";
import dice5 from "../../images/inverted-dice-5.png";
import dice6 from "../../images/inverted-dice-6.png";

export const DiceComponent = () => {
 

  let dices = {
    item0: dice1,
    item1: dice2,
    item2: dice3,
    item3: dice4,
    item4: dice5,
    item5: dice6,
  };
  const [roll, setRoll] = useState(false);
  const [firstDice, setFirstDice] = useState("");
  const [secondDice, setSecondDice] = useState("");

  function rollDices() {
    setRoll(true);
    setTimeout(() => {
      let firstDiceNum = Math.floor(Math.random() * 6);
      let secondDiceNum = Math.floor(Math.random() * 6);
      setFirstDice(firstDiceNum);
      setSecondDice(secondDiceNum);
      setRoll(false);
    }, 500);
  }

  return (
    <div className="d-flex flex-column gap-4 align-items-center p-5">
      <div>
        <img
          className="dice-width"
          src={firstDice ? dices["item" + firstDice] : dices["item0"]}
          alt=""
        />
      </div>
      <div>
        <img
          className="dice-width"
          src={secondDice ? dices["item" + secondDice] : dices["item0"]}
          alt=""
        />
      </div>

      <button className="btn btn-success btn-lg" onClick={rollDices}>
        {roll ? "Rolling..." : "Roll"}
      </button>
    </div>
  );
};
