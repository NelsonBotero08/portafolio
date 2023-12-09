import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MenuItemsCollapsed.css";

const MenuItemsCollapsed = ({ items }) => {
  return (
    <div>
      <ul className="itemsCollapsed__menu">
        <li>
          <Link to={items[0].path} className="items__menu-collapsed">
            Home
          </Link>
        </li>
        <li>
          <Link to={items[1].path} className="items__menu-collapsed">
            About
          </Link>
        </li>
        <li>
          <Link to={items[2].path} className="items__menu-collapsed">
            Skills
          </Link>
        </li>
        <li>
          <Link to={items[3].path} className="items__menu-collapsed">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to={items[4].path} className="items__menu-collapsed">
            Contactame
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItemsCollapsed;
