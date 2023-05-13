import companyLogo from "../../assets/shared/logo.svg";
import iconHumburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
function NavBar() {
  const [Toggle, setToggle] = useState(1);

  function toggle() {
    setToggle(!Toggle);
  }

  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <div className="logo">
          <img src={companyLogo} alt="companyLogo" />
        </div>

        {Toggle ? (
          <div className="nav-links">
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  <span className="bold-txt">00</span>Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/destination">
                  <span className="bold-txt">01</span>Destination
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/crew">
                  <span className="bold-txt">02</span>Crew{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/technology">
                  <span className="bold-txt">03</span>Technology
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
        {Toggle ? (
          <button className="nav-btn" onClick={toggle}>
            <img src={iconHumburger} alt="iconHumburger" />
          </button>
        ) : (
          <button className="nav-btn" onClick={toggle}>
            <img src={iconClose} alt="iconHumburger" />
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
        <Route path="/destination" element={<h1>Destination</h1>}></Route>
        <Route path="/crew" element={<h1>Crew</h1>}></Route>
        <Route path="/technology" element={<h1>technology</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default NavBar;
