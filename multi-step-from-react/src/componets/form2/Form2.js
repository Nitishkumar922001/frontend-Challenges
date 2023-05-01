import PlanCard from "../plan-card/PlanCard";
import './Form2.css';
function Form2()
{
return(<>
<div className="form2-div">
<h1 class="form2-title">Select your plan</h1>
<p>You have the option of monthly or yearly billing</p>
<PlanCard period={0}></PlanCard>
<div className="btn-div">
<button className="btn-secondary">Go back</button>
<button className="btn-primary">Next Step</button>
</div>
</div>
</>)


}
export default Form2