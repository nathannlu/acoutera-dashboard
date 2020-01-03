import React from "react";
import Avatar from './Avatar'

const Navbar = () => {
  return (
    <div className="nav shadow-md">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <img src="/logo.png" style={{height: '30px'}} />
        </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className="nav-links">
        <a className="inline-block" href="/">Dashboard</a>
        <a className="inline-block relative" href="/">
          Messages
          <span className="button-badge">&nbsp;</span>
        </a>
        <a className="inline-block" href="/">About</a>
        <a className="inline-block" href="/">Contact</a>
        <a className="block md:hidden" href="/">Settings</a>
        <a className="block md:hidden" href="/">Contractors</a>
        <div className="block md:hidden text-center">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
