import './App.css';
import Chart from 'chart.js/auto';
import Dashboard from './Dashboard';
import ChangeChart from './ChangeChart';
import MultipleCharts from './MultipleCharts';
import {Bar,Doughnut,Line} from "react-chartjs-2";

function App() {
  return (
    <div className="App">
      <MultipleCharts/>
      <ChangeChart/>
      {/* <h2>Charts</h2>
<div className='dataCard revenueCard'>Chart1</div>
<div className='dataCard customerCard'>Chart2
<Bar 
data = {{
  labels:["A", "B", "C"],
  datasets:[
    {
      label:"Revenue",
      data:[200,300,400,500],
    },
    {
      label:"Loss",
      data:[90,80,70],
    },
  ]
}}
/></div>
<div className='dataCard categoryCard'>Chart2</div> */}
    </div>
  );
}

export default App;
