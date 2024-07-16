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
}

export default App;
