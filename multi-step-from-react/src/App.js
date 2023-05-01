
import './App.css';
import From1 from './componets/form1/Form1';
import Form2 from './componets/form2/Form2';
import Form3 from './componets/form3/Form';
import PlanCard from './componets/plan-card/PlanCard';
import StepBar from './componets/step-bar/StepBar';

function App() {
  return (
  <div className='wrapper'>
 <div className="container">
    <StepBar></StepBar>
    <Form3></Form3>
    {/* <Form2></Form2> */}
     </div>
  </div>
  
    );
}

export default App;
