import React, { useRef, useState } from "react";
import "../styles/gridContainer.css";
import { GridCard } from "./GridCard";
import { gridItems } from "./GridItems";
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
