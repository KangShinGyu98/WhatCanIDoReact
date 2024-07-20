import React from "react";
import { LeftMenu } from "./LeftMenu";
import { GridContainer } from "./GridContainer";
import { RightSideBar } from "./RightSideBar";

export const MainPage = () => {
  return (
    <>
      <header>
        <h1>My Coding Space</h1>
        <h2>Code what I want</h2>
      </header>
      <div className="flexBox">
        <aside className="leftMenu">
          <LeftMenu />
        </aside>
        <main className="main">
          <h1> title</h1>
          <GridContainer />
          <h1> title2</h1>
          <GridContainer />
        </main>
        <aside className="rightSideBar">
          <RightSideBar />
        </aside>
      </div>
    </>
  );
};
