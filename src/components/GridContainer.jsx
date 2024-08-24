import React, { useRef, useState } from "react";
import "../styles/gridContainer.css";
import { GridCard } from "./GridCard";
import { NeubrutalButton } from "./InnerComponents/NeubrutalButton";
import { NavBar } from "./InnerComponents/NavBar";
const gridItems = [
  { id: 0, content: <NeubrutalButton />, imagePath: "./assets/neubrutalButton.png" },
  { id: 1, content: <NavBar />, imagePath: "./assets/navBar.png" },
];

export const GridContainer = () => {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="gridContainer">
      {gridItems.map((item, index) => (
        <GridCard containerRef={containerRef} key={item.id} content={item.content} imagePath={item.imagePath} />
      ))}
    </div>
  );
};
