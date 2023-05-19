import NavBar from "../../components/NavBar/NavBar";
import "./Crew.css";
import data from '../../data.json'
import crew1 from '../../assets/crew/image-douglas-hurley.png'
import crew2 from '../../assets/crew/image-mark-shuttleworth.png'
import crew3 from '../../assets/crew/image-victor-glover.png'
import crew4 from '../../assets/crew/image-anousheh-ansari.png'
import { useState } from "react";
const crewImg=[crew1,crew2,crew3,crew4];
function Crew() {
const [crews,setCrews]=useState(0);
let {crew}=data;
  return (
    <div className="crew-container">
    <NavBar/>
    <h3>03 Meet your crew</h3>
      <div className="crew-box">
        <div className="crew-left-part">
        
          <h4 className="crew-role">{crew[crews].role}</h4>
          <h2 className="crew-name">{crew[crews].name}</h2>
          <p className="crew-bio">{crew[crews].bio}</p>
          <div className="navigation-btns">
            <button className={crews===0?"crew-btn crew-active":"crew-btn"} onClick={()=>setCrews(0)}></button>
            <button className={crews===1?"crew-btn crew-active":"crew-btn"}onClick={()=>setCrews(1)}></button>
            <button className={crews===2?" crew-btn crew-active":"crew-btn"} onClick={()=>setCrews(2)}></button>
            <button className={crews===3?"crew-btn crew-active":"crew-btn"} onClick={()=>setCrews(3)}></button>
  
          </div>
        </div>
        <div className="crew-right-part">
          <img src={crewImg[crews]} alt="" className="crew-img" />
          <hr/>
        </div>
      </div>
    </div>
  );
}
export default Crew;
