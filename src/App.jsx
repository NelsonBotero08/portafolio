import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import items from "./utils/items.json";
import MenuItemsCollapsed from "./components/Menu/MenuItemsCollapsed";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Config from "./pages/Config";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme ? "light" : "dark");
  }, [theme]);

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
        <MenuItemsCollapsed theme={theme} items={items} language={language} />
        <Menu
          handlerIsShow={handlerIsShow}
          collapsed={collapsed}
          language={language}
        />
        <Routes>
          <Route
            path="/"
            element={<Home collapsed={collapsed} language={language} />}
          />
          <Route
            path="/about"
            element={<About collapsed={collapsed} language={language} />}
          />
          <Route path="/skills" element={<Skills collapsed={collapsed} />} />
          <Route
            path="/proyects"
            element={<Projects collapsed={collapsed} language={language} />}
          />
          <Route
            path="/contact"
            element={<Contact collapsed={collapsed} language={language} />}
          />
          <Route
            path="/config"
            element={
              <Config
                collapsed={collapsed}
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
