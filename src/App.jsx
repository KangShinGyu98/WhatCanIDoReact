import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/mainPage";
import { NotFound } from "./components/NotFound";
import { GridCard } from "./components/GridCard";
import { DropDownMenu } from "./components/InnerComponents/DropDownMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/GridCard" element={<GridCard />} />
          <Route path="/DropDownMenu" element={<DropDownMenu />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
