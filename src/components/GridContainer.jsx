import React from "react";
import { GridCard } from "./GridCard";
export const GridContainer = () => {
  const containerStyle = {
    display: "grid",
    gap: "10px",
    padding: "10px",
    backgroundColor: "pink",
    "grid-template-columns": "repeat(auto-fit, minmax(400px, 1fr))",
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
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
    </div>
  );
};
