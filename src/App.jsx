import "./App.css";
import Sidebar from "./components/sidebar";
import { GridContainer } from "./components/GridContainer";

function App() {
  return (
    <>
      <header>
        <h1>My Coding Space</h1>
        <h2>Code what I want</h2>
      </header>
      <div className="flex-box">
        <aside className="sideBar">
          <Sidebar />
        </aside>
        <main className="main">
          <h1> title</h1>
          <GridContainer />
        </main>
      </div>
    </>
  );
}

export default App;
