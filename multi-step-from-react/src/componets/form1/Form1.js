import './Form1.css';
import { useState } from 'react'
function Form1(props) {
    const [err, setErr] = useState({ 'Name': null, 'Email': null, 'Phone': null });


    function onChangeHandler(event) {
       
      props.data.setData({...props.data.Data,[event.target.name]:event.target.value})
       
        
    }

    function onClickHandler(event) {
        event.preventDefault();

        let error = { 'Name': '', 'Email': '', 'Phone': '' };
        setErr({ ...error })
        if (props.data.Data.Name === "") {
            error.Name = 'this felid is required';
            setErr({ ...error })

        }

        if (props.data.Data.Email === "") {
            error.Email = "this felid is required";
            setErr({ ...error })
        }

        if (props.data.Data.Phone === "") {
            error.Phone = 'this felid is required';
            setErr({ ...error })
        }
        if (error.Name === '' && error.Email === "" && error.Phone === "") 
        {    
            props.steps.setStep(++props.steps.step);
        }

    }


    return (<>
        <div className="form1-div">
            <h1 className="form-title">personal info</h1>
            <p className="form-info">please provide your name, email address, and phone number.</p>
            <form className='form1'>
                <label htmlFor="name">Name
                    {err.Name ? <p className='error-msg'>{err.Name}</p> : ''}</label>
                <input className={err.Name ? 'error' : 'input'} id="name" name="Name" type="text" placeholder="e.g.Stephen King" onChange={onChangeHandler} value={props.data.Data.Name}></input>

                <label htmlFor="email">Email Address
                    {err.Email ? <p className='error-msg'>{err.Email}</p> : ''}</label>
                <input name='Email' className={err.Email ? 'error' : 'input'} placeholder="e.g.stephenking@lorem.com" id="email" type="email" onChange={onChangeHandler} value={props.data.Data.Email}/>

                <label htmlFor="phone-no">Phone Number
                    {err.Phone ? <p className='error-msg'>{err.Phone}</p> : ''}</label>
                <input placeholder=" e.g. +1 234 567 890" id="phone-no" type="text" name='Phone' onChange={onChangeHandler} className={err.Phone ? 'error' : 'input'} value={props.data.Data.Phone}/>
                <button className="btn-primary" onClick={onClickHandler}>Next Step</button>
            </form>
        </div>
    </>)
}
export default Form1;