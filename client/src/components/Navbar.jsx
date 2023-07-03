import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"

const Navbar = () => {

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authtoken")
    navigate("/login")
  }
  console.log(localStorage.getItem('authtoken'));
  console.log("after auth token");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
        style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
              </li>
              {(localStorage.getItem("authtoken")) ?
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/" >My Orders</Link>  {/* index.css - nav-link color white */}
                </li> : ""}
            </ul>
            {(!localStorage.getItem("authtoken")) ?
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
              </div> :
              <div>
                <div className="btn bg-white text-success mx-2" >
                  My Cart
                </div>
                <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
                  Logout
                </div>
              </div>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
