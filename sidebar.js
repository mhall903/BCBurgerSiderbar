import React from "react";
import {slide as Menu } from "react-burger-menu";

export default props => {
    return(
        <Menu {...props}>
            <a className="menu-item" href="/">
              Home
            </a>  
            <a className="menu-item" href="/programs">
            Programs
             </a>  
            <a className="menu-item" href="/classes">
                Classes
            </a>  
            <a className="menu-item" href="/tsloader">
                Transcript Loader
            </a>  
            <a className="menu-item" href="/Account">
             Account
             </a>
      </Menu>
    );
  };