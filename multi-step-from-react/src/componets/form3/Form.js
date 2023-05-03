import './Form3.css';
import { addOns } from '../data'
function Form3(props) {
    const { Data, setData } = props.addon;
        let  {step,setStep}=props.steps;

    function onChangeHandler(index) {
        if (Data.addOns.includes(index)) {
            setData({ ...Data, addOns: Data.addOns.filter(ele => ele !== index) })
        }
        else {
            setData({ ...Data, addOns: [...Data.addOns, index] })
        }
    }
    function onClickHandler(event) {
        setStep(++step);
    }
    return (<>
        <div className="form3-div">
            <div><h1>Pick add-ons</h1>
                <p>Add-ons help to enhance your gaming experience</p>
            </div>
            <div className='add-ons'>
                {
                    addOns.map((addon, index) => <div className={Data.addOns.includes(index) ? "add-on active" : 'add-on'} key={index}>
                        <input
                            type="checkbox"
                            id={index}
                            value={index}
                            checked={Data.addOns.includes(index)}
                            onChange={() => onChangeHandler(index)} />

                        <label
                            className="add-on-content"
                            htmlFor={index}>
                            <div>

                                <h3>{addon.title}</h3>
                                <p>{addon.info}</p>

                            </div>
                            <p className="add-on-rate">
                                {Data.billingType === 'monthly'
                                    ? addon.monthly
                                    : addon.yearly}
                            </p>
                        </label>

                    </div>)
                }

            </div>
            <div className="btn-div">
                <button className="btn-secondary" onClick={() => props.steps.setStep(--props.steps.step)}>Go back</button>
                <button className="btn-primary" onClick={() => onClickHandler()}>Next Step</button>
            </div>
        </div>
    </>)
}
export default Form3;