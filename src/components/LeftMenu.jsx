import React from "react";
import { gridItems } from "./GridItems";

export const LeftMenu = () => {
  return (
    <>
      <h3>Components</h3>
      <ul>
        {gridItems.map((item) => (
          <li>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
