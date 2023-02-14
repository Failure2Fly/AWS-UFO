// import React, { useState } from "react"
import Search from './Search';

function Navbar() {
  
  return (
  <>
    <div className="navbar">
      <h1 className="nav-title">UFO REPORTING</h1>
      <Search/>
    </div>
    <div className="login">
      <p className="login-title">Login</p>
    </div>
  </>
  );
}
 
export default Navbar;









