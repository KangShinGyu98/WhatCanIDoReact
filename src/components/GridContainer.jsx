import React, { useRef, useState } from "react";
import "../styles/gridContainer.css";
import { GridCard } from "./GridCard";
import { NeubrutalButton } from "./InnerComponents/NeubrutalButton";
const gridItems = [
  { id: 0, content: <NeubrutalButton />, imagePath: "/assets/neubrutalButton.png" },
  { id: 1, content: <div>item2</div>, imagePath: "/assets/griditem.png" },
  { id: 2, content: <div>item3</div>, imagePath: "/assets/griditem.png" },
  { id: 3, content: <div>item4</div>, imagePath: "/assets/griditem.png" },
  { id: 4, content: <div>item5</div>, imagePath: "/assets/griditem.png" },
  { id: 5, content: <div>item6</div>, imagePath: "/assets/griditem.png" },
  { id: 6, content: <div>item7</div>, imagePath: "/assets/griditem.png" },
  { id: 7, content: <div>item8</div>, imagePath: "/assets/griditem.png" },
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
