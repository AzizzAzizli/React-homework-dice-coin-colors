import React from "react";
import { ColorsCard } from "../components/colorsCard/ColorsCard";
import "bootstrap";
export const ColorCardTask = () => {
  function renderFunc(num) {
    const cards = [];
    for (let i = 0; i < num; i++) {
      cards.push(<ColorsCard key={"card" + i} />);
    }
    return cards;
  }

  return <div className="d-flex flex-wrap">{renderFunc(32)}</div>;
};
