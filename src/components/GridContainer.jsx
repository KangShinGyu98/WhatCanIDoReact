import React from "react";
import { GridCard } from "./GridCard";
export const GridContainer = () => {
  const containerStyle = {
    display: "grid",
    gap: "10px",
    padding: "10px",
    backgroundColor: "pink",
    "grid-template-columns": "auto auto auto",
  };
  return (
    <div style={containerStyle}>
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
    </div>
  );
};
