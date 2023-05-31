import React from "react";
import { NavLink } from "react-router-dom";

function navbar(e) {
  return (
    <div className="navbar">
      <h1>
        <NavLink end to="/myPortfolio/">
          THEMASZ
        </NavLink>
      </h1>
      <nav className="nav-list">
        <li>
          <NavLink
            end
            to="/myPortfolio/"
            style={({ isActive }) =>
              isActive ? { color: "#EFB428" } : { color: "white" }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myPortfolio/portfolio"
            style={({ isActive }) =>
              isActive ? { color: "#EFB428" } : { color: "white" }
            }
          >
            Portfolio
          </NavLink>
        </li>
      </nav>
    </div>
  );
}

export default navbar;
