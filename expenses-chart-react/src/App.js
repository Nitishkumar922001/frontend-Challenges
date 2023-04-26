
import './App.css';
import Chart from './componets/chart/Chart';
import TopBar from './componets/Top_bar/Top_bar.js';
import arr from './data.json';
import { useState } from 'react'
import Bottom_bar from './componets/bottom-bar/Bottom_bar';
function App() {
  const [expensedata, setData] = useState([...arr]);
  let max_index = 0;
  expensedata.forEach((ele, index) => {
    if (ele.amount > arr[max_index].amount) {
      max_index = index;
    }
  })
  return (
    <div className="container">
      <TopBar></TopBar>
      <div className='chart-wrap'>
        <div className='large-text'>Spending - Last 7 days</div>
        <div className="chart-box">

          {arr.map((ele, index) => {
            return index === max_index ? <Chart key={index} amount={ele.amount} height={(ele.amount * 100) / arr[max_index].amount} day={ele.day} max={'max'}></Chart>

              : <Chart key={index} amount={ele.amount} height={(ele.amount * 100) / arr[max_index].amount} day={ele.day} ></Chart>
          })
          }
        </div>
        <hr></hr>
        <Bottom_bar></Bottom_bar>
      </div>

    </div>
  );
}

export default App;
