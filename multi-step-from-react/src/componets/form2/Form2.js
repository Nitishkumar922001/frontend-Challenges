import PlanCard from "../plan-card/PlanCard";
import './Form2.css';
import { useState } from 'react';
function Form2() {
    const [toggle,setToggle]=useState(true)
    console.log(toggle)
    return (<>
        <div className="form2-div">
            <h1 class="form2-title">Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
            <PlanCard period={toggle}></PlanCard>
            <div className="toggle-btn" >
                <span className="month">monthly</span>
                <label htmlFor='toggle-btn'>
                    <input id="toggle-btn" type="checkbox" onChange={()=>setToggle(!toggle
                    )}></input>
                    <div><span></span></div>
                </label>
                <span className="year"> yearly </span>

            </div>


            <div className="btn-div">
                <button className="btn-secondary">Go back</button>
                <button className="btn-primary">Next Step</button>
            </div>

        </div>
    </>)


}
export default Form2