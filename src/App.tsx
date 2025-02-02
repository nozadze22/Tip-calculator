import {useState } from 'react';
import './style/app.scss';
import Bill from './components/Bill';
import TipComponent from './components/Tip';
import Persons from './components/Persons';
import TipProcents from './components/TipProcents';

function App() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [persons, setPersons] = useState<number | undefined>(undefined);


  const Allright = bill !== undefined && persons !== undefined && persons > 0;

  const totalPerson = Allright && tip !== undefined ? ((bill * (1 + tip)) / persons).toFixed(2) : "0.00";
  const tipAmountPerson = Allright && tip !== undefined ? (bill * tip / persons).toFixed(2) : "0.00";
  const amountPerPerson = Allright ? (bill / persons).toFixed(2) : "0.00"; // თითო ადამიანზე თანხა

  const showtip = !(tipAmountPerson === "NaN" || amountPerPerson === "Infinity");
  const showTotal = !(totalPerson === 'NaN' || totalPerson === "Infinity");

  return (
    <>
      <div className='app-container'>
        <div className='calculatot'>
          <Bill bill={bill} setBill={setBill} />
           <Persons persons={persons} setPersons={setPersons} />
          <TipComponent tip={tip} setTip={setTip} />
         
          <div>
              <TipProcents setTip={setTip} />
            <h4>Price per person: {amountPerPerson}</h4> 
            <h4>tip: {showtip ? tipAmountPerson : "0.00"}</h4>
            <h4>full price per person  : {showTotal ? totalPerson : "0.00"}</h4>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;