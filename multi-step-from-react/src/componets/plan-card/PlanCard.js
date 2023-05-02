import Acrade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'
import './PlanCard.css'
function PlanCard(props) {
    const img = [Acrade, Advanced, Pro];
    const plans = ['Acrade', 'Advanced', 'Pro'];
    const planRates = [' $9/mo', '$12/mo', ' $15/mo']//
    const planRates1 = [' $90/yr', '$120/yr', ' $150/yr']//yearly


    function onChangeHandler(event) {
        // let data={...``}
        props.plan.setData({ ...props.plan.Data, 'plan': event.target.name, })
    }

    return (<div className='plan-container'>{plans.map((ele, index) => {
        return <div className="plan-card" key={index}>


            <input
                type="radio" name={ele}
                id={ele} onChange={onChangeHandler}
                checked={props.plan.Data.plan === ele} />

            <label htmlFor={ele} >

                <img src={img[index]} alt={ele} />

                <p className="plan-title">{ele}</p>
                {props.plan.Data.billingType === "monthly"

                    ? <p className="plan-rate"> {planRates[index]}</p>

                    : <div><p className="plan-rate"> {planRates1[index]}</p>
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