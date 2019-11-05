import React, {useState} from 'react';
import './App.css';
import InputNumber from './InputNumber/InputNumber.js'
import Reminder from './Reminder.js'
function App() {
  const [value,setValue] = useState('aaa');
  return (
    <div className="App">
      <div className="firsInput">
          <InputNumber  value={value} onChange={e=>{setValue(e.target.value)}}/>
      </div>
       <div className="lastInput">
           <InputNumber defaultValue={value} onChange={e=>{}}/>
       </div>
        <Reminder></Reminder>
    </div>
  );
}

export default App;
