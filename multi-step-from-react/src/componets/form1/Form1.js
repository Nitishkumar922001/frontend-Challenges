import './Form1.css';

function Form1()
{
    return(<>
    <div className="form1-div">
        <h1 className="form-title">personal info</h1>
        <p className="form-info">please provide your name, email address, and phone number.</p>
        <form className='form1'>
            <label for="name">Name</label>
            <input className="input input-name" id="name" type="text" placeholder="e.g.Stephen King"></input>
            <label for="email">Email Address</label>
            <input placeholder="e.g.stephenking@lorem.com" className="input input-email" id="email" type="email"></input>
            <label for="phone-no">Phone Number</label>
            <input placeholder=" e.g. +1 234 567 890"className="input-name" id="phone-no" type="text"></input>
            <button className="btn-primary">Next Step</button>
        </form>
    </div>
    </>)
}
export default Form1;