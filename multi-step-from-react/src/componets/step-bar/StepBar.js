import './StepBar.css'
import add from '../../assets/images/icon-checkmark.svg'
function StepBar() {
    return (
        <>
            <div className="step-bar">
                <ul>
                    <li>
                        <button className='step-btn'>1</button>
                        <div>
                            <p className='step-no'>Step 1</p>
                            <p className='step-title'> your info</p>
                        </div>
                    </li>
                    <li>
                        <button className='step-btn'>2</button>
                        <div>
                            <p className='step-no'>Step 2</p>
                            <p className='step-title'> select plan</p>
                        </div>
                    </li>
                    <li>
                        <button className='step-btn'>3</button>
                        <div>
                            <p className='step-no'>Step 3</p>
                            <p className='step-title'> add-ons</p>
                        </div>
                    </li>
                    <li>
                        <button className='step-btn'>4</button>
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