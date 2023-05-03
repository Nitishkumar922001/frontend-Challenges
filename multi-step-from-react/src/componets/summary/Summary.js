import './Summary.css'
import { plans, addOns } from '../data'
import { useState } from 'react';
function Summary(props) {
    let { Data, setData } = props.data;
    let { step, setStep } = props.steps;
    let [sum, setSum] = useState(0);
    function total() {

        if (Data.billingType=== 'monthly') {
           
            plans.forEach((item, index) => {
                if (item.title === Data.plan) {
                    sum += Number(plans[index].monthly.match(/[\d]+/))
                }

            })
            Data.addOns.map((index) => { sum += Number(addOns[index].monthly.match(/[\d]+/)) })
            sum+='/mo'
        } else {
            
            plans.forEach((item, index) => {
                if (item.title === Data.plan) {
                    sum += Number(plans[index].yearly.match(/[\d]+/))
                }

            })
            Data.addOns.map((index) => { sum += Number(addOns[index].yearly.match(/[\d]+/)) })
            sum+='/yr'
        }
        console.log(sum)

    }
    total()
    // 

    return (
        <div className="summary">
            <div className='heading'>
                <h1>Finishing Up</h1>
                <p>Double-check everything looks OK before confirming</p>
            </div>
            <div className="plan-info">
                <h3>{Data.plan} ({Data.billingType})</h3>
                <button onClick={() =>setStep(2) }>change</button>
            </div>
            <div className='addons'>
                {Data.addOns.map((addon, index) => {
                    return <div className="addon" key={index}>
                        <p>{addOns[addon].title}</p>
                        <p>{Data.billingType === 'monthly' ? addOns[addon].monthly : addOns[addon].yearly}</p>
                    </div>

                })}

            </div>
            <div className='total'>
                <p>Total (per {Data.billingType === 'monthly' ? 'Month' : 'Year'})</p>
                <p className='amount'>$ {sum}</p>
            </div>
            <div className="btn-div">
                <button className="btn-secondary" onClick={() => props.steps.setStep(--props.steps.step)}>Go back</button>
                <button className="btn-primary" onClick={()=>setStep(5)}>Confirm</button>
            </div>
        </div>)




}
export default Summary;