import bgImg from './images/bg-intro-desktop.png';
import error1 from './images/icon-error.svg';
import './App.css';
import { useRef, useState } from 'react'
function App() {

  const [errors, setErrors] = useState({});
  // const [data,setData]=useState({});
  let Data = useRef({});
  function validate() {
    let error = {};
    if (!Data.FirstName)
      error.FirstName = ' First Name can not be empty'
    if (!Data.LastName)
      error.LastName = ' LastName Name can not be empty'
    if (!Data.Email)
      error.Email = ' Email can not be empty'
    else if (!/\S+@\S+\.\S+/.test(Data.Email)) {
      error.Email = 'please enter valid email'
    } if (!Data.Password) {
      error.Password = ' Email can not be empty'
    }
    setErrors({...error})
    return Object.keys(error).length===0;
  }

  function handelonChange(event) {
    Data[event.target.name] = event.target.value;
  }

  function handleOnClick(event) {
    event.preventDefault()
    console.log(Data)
    console.log(validate());
  }






  return (
    <div className="wrapper flex align-center justify-center" >

      <div className="contianer flex m-inline-30 justify-evenly ">
        <div className='left-part flex  flex-d-col justify-center r-gap-40' >
          <h1 className="title">
            Learn to code by watching others
          </h1>
          <p className='info'>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.
          </p>

        </div>
        <div className='right-part flex flex-d-col r-gap-20 
        align-center
        '>
          <button className="btn-secondary">
            Try it free 7 days then $20/mo. thereafter
          </button>
          <form className=" form flex flex-d-col width: 80%; align-center justify-center r-gap-20">

            <div className="input-group">

              <input type="text" placeholder="First Name" onChange={handelonChange} name="FirstName" />
              <p className="error-msg">{errors.FirstName}</p></div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" onChange={handelonChange} name="LastName" />
              <p className="error-msg">{errors.LastName}</p>
            </div>
            <div className="input-group">
              <input type="email" placeholder=" Email Addrees" onChange={handelonChange} name="Email" />
              <p className="error-msg">{errors.Email}</p>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" onChange={handelonChange} name="Password" />
              <p className="error-msg">{errors.Password}</p>
            </div>
            <button className="submit-btn" onClick={handleOnClick} >Claim your free trial </button>
            <p className='terms-condition'>By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a></p>
          </form>

        </div>

      </div>
    </div>
  );
}

export default App;
