import PlanCard from "../plan-card/PlanCard";
import './Form2.css';
import { useState } from 'react';
function Form2(props) {
   
    function toggleHandler()
    { if(props.plan.Data.billingType==="monthly")
        {
            props.plan.setData({...props.plan.Data,'billingType':'yearly'})
        }
        else
       {
         props.plan.setData({...props.plan.Data,'billingType':'monthly'})
       }
    }


    return (<>
        <div className="form2-div">
            <h1 className="form2-title">Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
            <PlanCard plan={{...props.plan}} ></PlanCard>
            <div className="toggle-btn" >
                <span className="month">monthly</span>
                <label htmlFor='toggle-btn'>
                    <input id="toggle-btn" type="checkbox" onChange={toggleHandler}></input>
                    <div><span></span></div>
                </label>
                <span className="year"> yearly </span>

            </div>


            <div className="btn-div">
                <button className="btn-secondary" onClick={() => props.steps.setStep(--props.steps.step)}>Go back</button>
                <button className="btn-primary" onClick={() => props.steps.setStep(++props.steps.step)}>Next Step</button>
            </div>

        </div>
    </>)


}
export default Form2