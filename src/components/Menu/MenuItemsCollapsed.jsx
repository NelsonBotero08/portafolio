import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuItemsCollapsed.css";

const MenuItemsCollapsed = ({ theme, items, language }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container__menu--dispositivo">
      <i onClick={handleMenu} className="bx bx-menu"></i>
      <section className={`${menu ? "menu" : "menuNone"}`}>
        <ul className="itemsCollapsed__menu">
          {items.map((item) => (
            <li
              onClick={handleMenu}
              key={item.id}
              className={`itemsCollapsed__menu--li`}
            >
              <Link
                to={item.path}
                className={`${
                  theme ? "itemMenu-theme-collapsed" : "items__menu-collapsed"
                }`}
              >
                <i className={`${item.icon}`}></i>
                <p
                  className={`${
                    theme ? "p__menu-theme-collapsed" : "p__menu-collapsed"
                  }`}
                >
                  {language ? item.title_ingles : item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MenuItemsCollapsed;
