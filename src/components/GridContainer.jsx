import React from "react";
import { GridCard } from "./GridCard";
export const GridContainer = () => {
  const containerStyle = {
    display: "grid",
    gap: "10px",
    padding: "10px",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    backgroundColor: "pink",
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
