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
      <button className="login-title">Login</button>
    </div>
  </>
  );
}
 
export default Navbar;









