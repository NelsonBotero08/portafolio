import React from "react";
import "../Styles/MenuItems.css";

const MenuItems = ({ itemImg, text, collapsed }) => {
  return (
    <div
      className={` ${collapsed ? "icon__menu-collapsed" : "container__items"}`}
    >
      <i className={`${itemImg} img__item`}></i>
      <p className="items__p">{text}</p>
    </div>
  );
};

export default MenuItems;
