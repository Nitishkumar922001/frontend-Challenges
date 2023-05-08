import dice from './images/icon-dice.svg';
import breaker from './images/pattern-divider-desktop.svg'
import './App.css';
import {useEffect,useState} from 'react'
function App() {
  const [advice,setAdvice]=useState({});
 const fetchAdvice=()=>{
    fetch('	https://api.adviceslip.com/advice')
    .then((response)=>response.json())
    .then((data)=>{setAdvice(data.slip)
  console.log(advice)
  })
  }
  useEffect(()=>{
    fetchAdvice();
  },[]);
  function onClickHandel()
  {
    fetchAdvice();
  }
  

  return (
       <div className="container">
      <div className='advice-card'>
        <div className='advice-id'><p>advice # 
        {advice.id}
        </p></div>
        <div className="advice"><h1>"
        {advice.advice}
        "</h1></div>
        <img className="breaker" src={breaker} alt={breaker} />

        <button className='dice-div' onClick={onClickHandel}><img className="dice-img" src={dice} alt={dice} />
        </button>
      </div>
    </div>
  );
}

export default App;
