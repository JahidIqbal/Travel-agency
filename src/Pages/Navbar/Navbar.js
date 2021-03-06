import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
        <div
          className="container-fluid"
          style={{ backgroundColor: " #19547b" }}
        >
          <NavLink to="/" className="navbar-brand h5 text-white">
            ExpoTrip <i className="fas fa-umbrella-beach"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link text-white">
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item">
                <span className="nav-link text-white">
                  {user.email && (
                    <li className="nav-item">
                      <p>{user.displayName}</p>
                    </li>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  {user.email && (
                    <li className="nav-item">
                      <img className="user" src={user.photoURL} alt="" />
                    </li>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <li className="nav-link text-white">
                  {user.email ? (
                    <li>
                      <li className="nav-item">
                        <button
                          onClick={logOut}
                          type="button"
                          className="btn btn-sm btn-light"
                        >
                          Logout
                        </button>
                      </li>
                    </li>
                  ) : (
                    <NavLink to="/login" className="nav-item">
                      <button type="button" className="btn btn-sm btn-light">
                        Login
                      </button>
                    </NavLink>
                  )}
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
