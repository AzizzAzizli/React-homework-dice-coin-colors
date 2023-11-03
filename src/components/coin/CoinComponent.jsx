import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Coin.css";
export const CoinComponent = () => {
  let arr = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.G9VwSmTRztsHVX2loKFxnAHaHm%26pid%3DApi&f=1&ipt=f45350783828b69adf1957a0aa606f7020576aa5884eb41462d213cbae486912&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.x8G4S_97dgzSCbvjGa5LcwHaHa%26pid%3DApi&f=1&ipt=2641093479ec3447172be227bc177909ee18f22708a42871f9498f4648da0a4c&ipo=images",
  ];
  const [tailNums, setTailNums] = useState(0);
  const [headNums, setHeadNums] = useState(0);

  const [coin, setCoin] = useState();
  function flipCoin() {
    let coinFace = Math.floor(Math.random() * 2);
    console.log(coinFace);
    if (coinFace === 0) {
      setHeadNums((prev) => prev + 1);
    } else {
      setTailNums((prev) => prev + 1);
    }
    setCoin(coinFace);
  }
  return (
    <div className="d-flex flex-column gap-4 align-items-center p-5">
      <div>
        <img className="coin" src={arr[coin]} alt="" />
      </div>
      <span>
        Tails: {tailNums > 0 ? tailNums : "0"} Heads:{" "}
        {headNums ? headNums : "0"}
      </span>
      <button onClick={flipCoin} className="btn btn-primary btn-lg ">
        Flip
      </button>
    </div>
  );
};
