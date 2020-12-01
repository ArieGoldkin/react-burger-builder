import React from "react";

import classes from "./Logo.module.css";
import logoImg from "../../assets/images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={logoImg} alt="burgerLogo" />
    </div>
  );
};

export default Logo;
