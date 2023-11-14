import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
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
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Certificaciones" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contactame" element={<Contactame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
