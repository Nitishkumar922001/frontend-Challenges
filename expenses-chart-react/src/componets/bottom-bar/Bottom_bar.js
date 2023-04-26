import './Bottom_bar.css'
function Bottom_bar()
{
return(<>
      <div className="bottom-bar">
      <div className="bottom-left">
        <p>
        Total this month</p>
            <p className="large-text">$478.33</p>
        
      </div>
      <div className="bottom-right">
        <p><b>+2.4%</b></p>
        <p className="large-text">from last month</p>
        
      </div>
      </div>
</>)
}
export default Bottom_bar;