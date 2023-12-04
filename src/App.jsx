import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Certificaciones from "./components/Certificaciones";
import Proyectos from "./components/Proyectos";
import Contactame from "./components/Contactame";
import items from "./utils/items.json";
import MenuItemsCollapsed from "./components/MenuItemsCollapsed";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handlerIsShow = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Router>
        <MenuItemsCollapsed items={items} />
        <Menu handlerIsShow={handlerIsShow} collapsed={collapsed} />
        <Routes>
          <Route path="/" element={<Home collapsed={collapsed} />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contactame" element={<Contactame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
