import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
    
    
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" >
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/" style={{textAlign: "left"}}>
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
          <div className="collapse navbar-collapse" id="navMenu" style={{direction: "rtl"}}>
            <ul className="navbar-nav ms-auto">
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
              <li className="nav-item login-btn">
                <NavLink className="nav-link" to="/Login">
                  تسجيل الدخول
                </NavLink>
              </li>
              <li className="nav-item register-btn">
                <NavLink className="nav-link" to="/Register">
                  تسجيل
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
