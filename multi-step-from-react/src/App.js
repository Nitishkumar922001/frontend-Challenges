
import { useState } from 'react';
import './App.css';
import From1 from './componets/form1/Form1';
import Form2 from './componets/form2/Form2';
import Form3 from './componets/form3/Form';
import StepBar from './componets/step-bar/StepBar';

function App() {
  const [step, setStep] = useState(1);
  const [Data,setData]=useState({'billingType':'monthly','plan':'Acrade'});
 
    return (
    <div className='wrapper'>
      <div className="container">
        <StepBar steps={{ step, setStep }}></StepBar>

        {step === 1 ? <From1 steps={{ step, setStep }} data={{Data,setData}} /> 
        : step === 2 ? <Form2 steps={{ step, setStep }} plan={{Data,setData}}/>
        : <Form3 steps={{ step, setStep }}></Form3>

        }
        {console.log(Data)}
      </div>
    </div>

  );
}

export default App;
