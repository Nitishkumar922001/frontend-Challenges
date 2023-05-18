import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-box">
        <div className="left-div">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right-div">
          <div className="btn-wrapper">
            <button
              onClick={() => navigate("/destination")}
              className="explore-btn"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
