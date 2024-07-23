import React from "react";
import "../styles/gridContainer.css";
import { GridCard } from "./GridCard";
import gridItems from "../assets/gridItems";

const handleMouseOver = () => {
  console.log("remove same row = add css hidden");
};
export const GridContainer = () => {
  return (
    <div className="gridContainer">
      {gridItems.map((item, index) => (
        <GridCard key={item.id} content={item.content} onMouseOver={() => handleMouseOver()} />
      ))}
    </div>
  );
};
