
import './NavBar.css'
function NavBar() {
    return <nav className="nav-bar">
        
        <div className="nav-links">
        <div className="nav-log">
            <p>snap</p>
        </div>
            <div className="features-div">
                <a>Features<img  className="arrow" src="./././images/icon-arrow-down.svg" alt="down-arrow"></img></a>
            </div>
            <div className="company-div">
                <a>Company<img  className="arrow" src="./././images/icon-arrow-down.svg" alt="down-arrow"></img></a>
            </div>
            <div className="careers">
                <a >Carrers</a>
            </div>
            <div className="about">
                <a >About</a>
            </div>
        </div>
        <div className="nav-btns">
            <div className="login-btn">
                <p>Login</p>
            </div>
            <div >
                <button className="btn">Register</button>
            </div>
        </div>


    </nav>


}
export default NavBar;