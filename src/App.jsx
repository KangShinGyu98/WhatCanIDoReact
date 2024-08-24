import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/mainPage";
import { NotFound } from "./components/NotFound";
import { GridCard } from "./components/GridCard";
import { NavBar } from "./components/InnerComponents/NavBar";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/GridCard" element={<GridCard />} />
          <Route path="/DropDownMenu" element={<NavBar />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
