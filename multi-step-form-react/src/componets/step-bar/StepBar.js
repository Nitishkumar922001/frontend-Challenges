import './StepBar.css'
import add from '../../assets/images/icon-checkmark.svg'
function StepBar(props) {
    return (
        <>
            <div className="step-bar">
                <ul>
                    <li>
                        <button 
                        className={props.steps.step===1?'step-btn bg-color':'step-btn'} 
                        onClick={()=>props.steps.setStep(1)}
                        
                        >1</button>
                        <div>
                            <p className='step-no' >Step 1</p>
                            <p className='step-title'> your info</p>
                        </div>
                    </li>
                    <li>
                        <button 
                        className={props.steps.step===2?'step-btn bg-color':'step-btn'} 
                        onClick={()=>props.steps.setStep(2)}>2</button>
                        <div>
                            <p className='step-no'>Step 2</p>
                            <p className='step-title'> select plan</p>
                        </div>
                    </li>
                    <li>
                        <button 
                        className={props.steps.step===3?'step-btn bg-color':'step-btn'} onClick={()=>props.steps.setStep(3)}>3</button>
                        <div>
                            <p className='step-no'>Step 3</p>
                            <p className='step-title'> add-ons</p>
                        </div>
                    </li>
                    <li>
                        <button 
                        className={props.steps.step===4?'step-btn bg-color':'step-btn'}
                        onClick={()=>props.steps.setStep(4)}
                        >4</button>
                        <div>
                            <p className='step-no'>Step 4</p>
                            <p className='step-title'> summary</p>
                        </div>
                    </li>
                    
                </ul>
            </div>



        </>
    )
}
export default StepBar;