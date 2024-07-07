import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <header>
        <h1>My Coding Space</h1>
        <h2>Code what I want</h2>
      </header>
      <aside className="sideBar">
        <Sidebar />
      </aside>
      <main className="main"></main>
    </>
  );
}

export default App;
c;
