import React, { useEffect, useState } from "react";
import logo from "../../Assets/Logos/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="row">
      <nav className="navbar-dark bg-dark d-flex flex-row flex-wrap ">
        <img
          style={{
            height: "40px",
            width: "80px",
            margin: "10px 30px 10px 70px",
          }}
          src={logo}
          alt="hello"
        />
        {token && (
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h5 className="text-muted p-3">Tutorial</h5>
          </Link>
        )}
        {userType == "admin" && (
          <Link to="/add" style={{ textDecoration: "none" }}>
            <h5 className="text-muted  p-3">Add</h5>
          </Link>
        )}
        {token && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <h5 className="text-muted  p-3" onClick={logout}>
              logout
            </h5>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
