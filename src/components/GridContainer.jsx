import React, { useRef, useState } from "react";
import "../styles/gridContainer.css";
import { GridCard } from "./GridCard";
import { NeubrutalButton } from "./InnerComponents/NeubrutalButton";
const gridItems = [
  { id: 0, content: <NeubrutalButton /> },
  { id: 1, content: <div>item2</div> },
  { id: 2, content: <div>item3</div> },
  { id: 3, content: <div>item4</div> },
  { id: 4, content: <div>item5</div> },
  { id: 5, content: <div>item6</div> },
  { id: 6, content: <div>item7</div> },
  { id: 7, content: <div>item8</div> },
];

export const GridContainer = () => {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="gridContainer">
      {gridItems.map((item, index) => (
        <GridCard containerRef={containerRef} key={item.id} content={item.content} />
      ))}
    </div>
  );
};
