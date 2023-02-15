import "./App.css";
import AppBarExample from "./header/appBar";
import BottomBar from "./footer/bottomBar";
import { Route, Routes } from "react-router-dom";
import { HomeExample } from "./body/Home";
import { GalleryExample } from "./body/Gallery";
import { ContactExample } from "./body/Contact";
import { MenuExample } from "./body/Menu";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  return (
    <div className="wrapper">
      <AppBarExample />
      <main>
        <Routes>
          <Route path="/body/Home/" element={<HomeExample />} />
          <Route path="/body/Gallery" element={<GalleryExample />} />
          <Route path="/body/Contact" element={<ContactExample />} />
          <Route path="/body/Menu" element={<MenuExample />} />
        </Routes>
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
