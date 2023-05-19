import NavBar from "../../components/NavBar/NavBar";
import "./Destination.css";
import data from "../../data.json";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import { useState } from "react";
const { destinations } = data;
const image=[moon,mars,europa,titan];

function Destination() {
  const [planet, setPlanet] = useState(0);

  return (
    <div className="destination-container">
      <NavBar />

      <div className="destination-box">
        <div className="destination-left-part">
          <h5>01 pick your destination</h5>
          <img src={image[planet]} alt={destinations[planet].name} />
        </div>
        <div className="destination-right-part">
          <ul className="des-nav">
            <li
              onClick={() => setPlanet(0)}
              className={planet === 0 ? "planet-active" :'undefined'}
            >
              Moon
            </li>
            <li
              onClick={() => setPlanet(1)}
              className={planet === 1 ? "planet-active" :'undefined'}
            >
              mars
            </li>
            <li
              onClick={() => setPlanet(2)}
              className={planet === 2? "planet-active" :'undefined'}
            >
              europa
            </li>
            <li
              onClick={() => setPlanet(3)}
              className={planet === 3 ? "planet-active" :'undefined'}
            >
              titan
            </li>
          </ul>
          <h1 className="planet-name">{destinations[planet].name}</h1>
          <p>{destinations[planet].description}</p>
          <hr />
          <div className="planet-footer">
            <div className="distance">
              <p>AVG. DISTANCE</p>
              <h5>{destinations[planet].distance}</h5>
            </div>
            <div className="travel">
              <p>EST.TRAVEL TIME</p>
              <h5>{destinations[planet].travel}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination;
