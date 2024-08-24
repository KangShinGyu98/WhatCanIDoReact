import React, { useState } from "react";

export const MenuItem = ({ item }) => {
  return (
    <li class={`menu-item ${item.class}`}>
      <span>{item.label}</span>
      {item.class == "sideMenu" && (
        <ul>
          {item.sideMenu.map((subItem, idx) => (
            <MenuItem item={subItem} key={idx} />
          ))}
        </ul>
      )}
      {item.class == "dropDownMenu" && (
        <ul>
          {item.dropDownMenu.map((subItem, idx) => (
            <MenuItem item={subItem} key={idx} />
          ))}
        </ul>
      )}
    </li>
  );
};
