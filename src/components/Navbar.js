import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ mode }) {
  const [isChecked, setIsChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const onChangeBtn = (e) => {
    setIsChecked(e.currentTarget.checked);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    mode(!darkMode);
  };

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <h2 className="d-inline-block align-text-top">Text Transform</h2>
          {/* <Link
            to="/about"
            style={darkMode ? { color: "white" } : { color: "black" }}
          >
            About
          </Link> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              id="flexSwitchCheckDefault"
              type="checkbox"
              onChange={onChangeBtn}
              checked={isChecked}
              onClick={toggleDarkMode}
            />
            <label>{darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}</label>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
