import React from "react-dom";

import PropTypes from "prop-types";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return (
    <div onClick={props.toggleDrawerClick} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

DrawerToggle.prototype = {
  onClick: PropTypes.func.isRequired,
};

export default DrawerToggle;
