
import { plans } from '../data'
import './PlanCard.css'
function PlanCard(props) {
     let{Data,setData}=props.plan;

    function onChangeHandler(event) {
        
        setData({ ...Data, 'plan': event.target.name, })
    }

    return (<div className='plan-container'>{plans.map((ele, index) => {
        return <div className="plan-card" key={index}>


            <input
                type="radio" name={ele.title}
                id={ele.title} onChange={onChangeHandler}
                checked={Data.plan === ele.title} />

            <label htmlFor={ele.title} >

                <img src={ele.img} alt={ele.title} />

                <p className="plan-title">{ele.title}</p>
                {Data.billingType === "monthly"

                    ? <p className="plan-rate">{ele.monthly}</p>

                    : <div><p className="plan-rate"> {ele.yearly}</p>
                        <p className='plan-offer'>2 months free</p>
                    </div>
                }
            </label>
        </div>
    })
    }
    </div>
    )
}
export default PlanCard;