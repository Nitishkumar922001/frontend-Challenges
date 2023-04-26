import './chart.css'
function Chart(prop) {
    return <>
        {prop.max ?
            <div className="expense-div">
                <div className="expense-amount">
                    <p>{prop.amount}</p>
                </div>
                <div className="expense-col" style={{ height: prop.height, backgroundColor: '#76b5bc' }}>

                </div>
                <div className="expense-day">
                    <p>{prop.day}</p>
                </div>
            </div>
            :
            <div className="expense-div">
                <div className="expense-amount">
                    <p>{prop.amount}</p>
                </div>
                <div className="expense-col" style={{ height: prop.height, }}>

                </div>
                <div className="expense-day">
                    <p>{prop.day}</p>
                </div>
            </div>
        }
    </>

}
export default Chart; 