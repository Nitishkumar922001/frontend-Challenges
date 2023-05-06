import bgImg from './images/bg-intro-desktop.png';
import './App.css';

function App() {
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
          <form className=" form flex flex-d-col width: 80%; align-center justify-center r-gap-40">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder=" Email Addrees" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Claim your free trial </button>
            <p className='terms-condition'>By clicking the button, you are agreeing to our <a href='#'>Terms and Services</a></p>
          </form>
         
        </div>

      </div>
    </div>
  );
}

export default App;
