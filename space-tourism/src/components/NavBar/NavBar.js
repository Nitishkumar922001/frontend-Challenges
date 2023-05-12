import companyLogo from "../../assets/shared/logo.svg";
import iconHumburger from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './NavBar.css';
function NavBar() {
  return (
    <BrowserRouter>
      <nav>
        <div ClassName="logo">
          <img src={companyLogo} alt="companyLogo" />
        </div>
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
        <div className="nav-btn">
          <img src={iconHumburger} alt="iconHumburger" />
        </div>
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
