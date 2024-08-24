import React from "react";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import "./NavBar.css";
export const NavBar = () => {
  const menuItems = [
    { label: "Home", class: "menu" },
    { label: "About", class: "menu" },
    {
      label: "Services",
      class: "dropDownMenu",
      dropDownMenu: [
        {
          label: "Q & A",
          class: "sideMenu",
          sideMenu: [
            { label: "Most Asked", class: "menu" },
            { label: "1:1 Contact", class: "menu" },
          ],
        },
        { label: "Web Development", class: "menu" },
        {
          label: "Design",
          class: "sideMenu",
          sideMenu: [
            { label: "UI/UX Design", class: "menu" },
            {
              label: "Design",
              class: "sideMenu",
              sideMenu: [
                { label: "UI/UX Design", class: "menu" },
                { label: "Graphic Design", class: "menu" },
              ],
            },
          ],
        },
      ],
    },
    { label: "Contact", class: "menu" },
  ];

  return (
    <div class="background">
      <nav>
        <ul>
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
