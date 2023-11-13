import React, { useContext } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
        <Link className="link" to="/">
        <img src={Logo} alt="" />
        </Link>         
        </div>
        <div className="links">
          <Link className="link" to="/?cat=coding">
            <h6>CODING</h6>
          </Link>
          <Link className="link" to="/?cat=interviews">
            <h6>INTERVIEWS</h6>
          </Link>
          <Link className="link" to="/?cat=cloud">
            <h6>CLOUD</h6>
          </Link>
          <Link className="link" to="/?cat=religion">
            <h6>RELIGION</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
