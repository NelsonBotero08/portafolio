import "../stylesPages/Menu.css";
import name from "../utils/profile.json";
import items from "../utils/items.json";
import MenuItems from "../components/Menu/MenuItems";
import { Link } from "react-router-dom";

const Menu = ({ handlerIsShow, collapsed }) => {
  return (
    <div className={`container__menu ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="icon">
        {collapsed ? (
          <i
            onClick={handlerIsShow}
            className="bx bx-chevrons-right icon__menu"
          ></i>
        ) : (
          <i
            onClick={handlerIsShow}
            className="bx bx-chevrons-left icon__menu"
          ></i>
        )}
      </div>
      <div>
        {collapsed ? (
          <div className="div__collapsed">
            <p className="menu__collapsed--p">N</p>
          </div>
        ) : (
          <>
            <div className="div__expanded--p">
              <p className="menu__expanded--p">N</p>
            </div>
            <p className="menu__name">{name.name}</p>
            <p className="menu__p">{name.activity}</p>
          </>
        )}
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={`${item.path}`}>
                <MenuItems
                  collapsed={collapsed}
                  itemImg={item.icon}
                  text={collapsed ? "" : item.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
