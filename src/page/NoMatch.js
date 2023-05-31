import React from "react";
import img from "../assets/images/404.png";
import { NavLink } from "react-router-dom";

function NoMatch() {
  return (
    <div className="main-wrap">
      <div className="center">
        <img src={img} alt="404" className="notfound_img"/>
        <h3 className="txt">
          Your page is currently under maintenance and will guide you back to
          the homepage.
        </h3> 
        <NavLink end to="/myPortfolio/" className="btn-goback">
          GO BACK HOME
        </NavLink>
      </div>
    </div>
  );
}

export default NoMatch;
