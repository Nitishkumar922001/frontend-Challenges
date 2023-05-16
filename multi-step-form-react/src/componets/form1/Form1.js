import "./Form1.css";
import { useState } from "react";
function Form1(props) {
  let { Data, setData } = props.data;
  const [err, setErr] = useState({});

  function validate() {
    let error = {};
    if (!Data.Name) {
      error.Name = "Name felid is required";
    }
    if (!Data.Email) {
      error.Email = "Email felid is required";
    } else if (!Data.Email.match(/\S+@\S+\.\S+/)) {
      error.Email = "please enter valid email id";
    }
    if (!Data.Phone) {
      error.Phone = "phone felid is required";
    }
    else if(!Data.Phone.match(/\d/))
    {
        error.Phone="phone only number are allowed"
    }
    setErr({ ...error });

    return Object.keys(error).length === 0;
  }

  function onChangeHandler(event) {
    setData({ ...Data, [event.target.name]: event.target.value });
  }

  function onClickHandler(event) {
    event.preventDefault();

    if (validate()) props.steps.setStep(++props.steps.step);
  }

  return (
    <>
      <div className="form1-div">
        <h1 className="form-title">personal info</h1>
        <p className="form-info">
          please provide your name, email address, and phone number.
        </p>
        <form className="form1">
          <label htmlFor="name">
            Name
            {err.Name ? <p className="error-msg">{err.Name}</p> : ""}
          </label>
          <input
            className={err.Name ? "error" : "input"}
            id="name"
            name="Name"
            type="text"
            placeholder="e.g.Stephen King"
            onChange={onChangeHandler}
            value={Data.Name}
          />

          <label htmlFor="email">
            Email Address
            {err.Email ? <p className="error-msg">{err.Email}</p> : ""}
          </label>
          <input
            name="Email"
            className={err.Email ? "error" : "input"}
            placeholder="e.g.stephenking@lorem.com"
            id="email"
            type="email"
            onChange={onChangeHandler}
            value={Data.Email}
          />

          <label htmlFor="phone-no">
            Phone Number
            {err.Phone ? <p className="error-msg">{err.Phone}</p> : ""}
          </label>
          <input
            placeholder=" e.g. +1 234 567 890"
            id="phone-no"
            type="text"
            name="Phone"
            onChange={onChangeHandler}
            className={err.Phone ? "error" : "input"}
            value={Data.Phone}
          />
          {
            <button className="btn-primary" onClick={onClickHandler}>
              Next Step
            </button>
          }
        </form>
      </div>
    </>
  );
}
export default Form1;
