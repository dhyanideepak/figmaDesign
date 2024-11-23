import React, { useState } from "react";
import "../styles/Navbar.css";
import { style } from "framer-motion/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div style={{ display: "flex", alignItems: "center", width: "843px" }}>
          <div
            className="navbar-logo"
            style={{
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "39.68px",
              letter: "-3%",
              marginRight:'30px'
            }}
          >
            E-tutor
          </div>
          <div>
            <select
              name=""
              id=""
              style={{
                width: "200px",
                padding: "10px",
                marginRight:'10px'
              }}
            >
              <option value="">Browser</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>

            <input
              type="text"
              placeholder="What do you want learn ...."
              style={{
                width: "424px",
                padding: "10px",
               
              }}
            />
          </div>
        </div>

       
        <div
          className={`hamburger-menu ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

       
        <div style={{ width: "424px" }}>
          <ul className={`navbar-links ${isOpen ? "active" : ""}` }>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <button
              style={{
                width: "168px",
                padding: "10px",
                backgroundColor: "#FFEEE8",
                color: "#FF6636",
                border: "none",

                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "48px",
                letterSpacing: "-0.008em",
                marginRight:'10px'
              }}
            >
              Create Account
            </button>
            <button
              style={{
                width: "100px",
                padding: "10px",
                backgroundColor: "#FF6636",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "48px",
                letter: "8%",
                color: "white",
                border: "none",
              }}
            >
              Sign In
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
