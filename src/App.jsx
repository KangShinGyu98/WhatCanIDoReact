import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { GridContainer } from "./components/GridContainer";
import { RightSideBar } from "./components/RightSideBar";

function App() {
  return (
    <>
      <header>
        <h1>My Coding Space</h1>
        <h2>Code what I want</h2>
      </header>
      <div className="flex-box">
        <aside className="side-bar">
          <LeftMenu />
        </aside>
        <main className="main" style={{ backgroundColor: "violet", width: "100%" }}>
          <h1> title</h1>
          <GridContainer />
          <h1> title2</h1>
          <GridContainer />
        </main>
        <aside className="">
          <RightSideBar />
        </aside>
      </div>
    </>
  );
}

export default App;
