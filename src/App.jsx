import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Contactame from "./pages/Contactame";
import items from "./utils/items.json";
import MenuItemsCollapsed from "./components/Menu/MenuItemsCollapsed";
import About from "./pages/About";
import Skills from "./pages/Skills";

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
          <Route path="/about" element={<About collapsed={collapsed} />} />
          <Route path="/skills" element={<Skills collapsed={collapsed} />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contactame" element={<Contactame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
