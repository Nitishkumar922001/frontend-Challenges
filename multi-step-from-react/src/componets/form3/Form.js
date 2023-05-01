import './Form3.css';
function Form3() {
    const addOns = [{ 'title': 'online service', 'info': 'Acess to multiplayer games', 'rate': '+1/mon' },
    { 'title': 'Larger storage', 'info': 'Extra 1TB of cloud save', 'rate': ' +$2/mo' }
        , { 'title': ' Customizable Profile', 'info': 'Custom theme on your profile', 'rate': '+$2/mo' }
    ]
    return (<>
        <div className="form3-div">
            <div><h1>Pick add-ons</h1>
                <p>Add-ons help to enhance your gaming experience</p>
            </div>
            <div className="add-ons">
                {
                    addOns.map((addon, index) => <div className="add-on">
                        <input type="checkbox" id={addon.title}></input>
                        <label className="add-on-content" htmlFor={addon.title}>
                            <div><h3>{addon.title}</h3>
                                <p>{addon.info}</p>
                            </div>
                            <p className="add-on-rate">{addon.rate}</p>
                        </label>

                    </div>)
                }

            </div>
            <div className="btn-div">
                <button className="btn-secondary">Go back</button>
                <button className="btn-primary">Next Step</button>
            </div>
        </div>
    </>)
}
export default Form3;