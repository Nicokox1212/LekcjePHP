import React from "react";
import { NavLink } from "react-router-dom";
import routes from "./Routes";

const Header = () => (
  <header className="nav">
    <nav>
      <ul>
        {routes
          .filter(route => !route.hidden) 
          .map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path} activeClassName="active">
                {name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  </header>
);

export default Header;
