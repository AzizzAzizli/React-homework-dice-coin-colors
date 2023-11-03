import React from "react";
import { ColorsCard } from "../components/colorsCard/ColorsCard";
export const ColorCardTask = () => {
  function renderFunc(num) {
    const cards = [];
    for (let i = 0; i < num; i++) {
      cards.push(<ColorsCard key={"card" + i} />);
    }
    return cards;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{renderFunc(32)}</div>
  );
};
