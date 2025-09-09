import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth"; 
import "./css/Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ textAlign: "left" }}>
          Coding Developer - للبرمجيات
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu" style={{ direction: "rtl" }}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                الصفحة الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                الدورات
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#about-us" className="nav-link">
                من نحن
              </a>
            </li>

            {user ? (
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle d-flex align-items-center"
                  id="userMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="user-avatar me-2">{getInitial(user.name)}</span>
                  {user.name.split(" ")[0]}
                </button>
                <ul className="dropdown-menu" aria-labelledby="userMenu">
                  <li className="dropdown-item-text">
                    <strong>{user.name}</strong> <br />
                    <small className="text-muted">{user.email}</small>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={logout}>
                      تسجيل الخروج
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item login-btn">
                  <NavLink className="nav-link" to="/login">
                    تسجيل الدخول
                  </NavLink>
                </li>
                <li className="nav-item register-btn">
                  <NavLink className="nav-link" to="/register">
                    تسجيل
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
