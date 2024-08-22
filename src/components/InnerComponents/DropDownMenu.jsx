import React from "react";
import "./DropDownMenu.css";
// A, a.dropdown, a.sidedown

export const DropDownMenu = () => {
  return (
    <>
      <ul class="menu">
        <li>
          <a href="/">첫번째 메뉴</a>
        </li>
        <li>
          <a href="/DropDownMenu">두 번째 메뉴</a>
        </li>
        <li>
          <a href="#">메뉴3&gt;</a>
        </li>
        <li>
          <a href="#">메뉴4▼</a>
        </li>
        <li>
          <a href="#">메뉴5</a>
        </li>
        <li>
          <a href="#">메뉴6</a>
        </li>
      </ul>
    </>
  );
};
