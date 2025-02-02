// import { FC } from "react";

// interface BillProps {
//   bill: number;
//   setBill: (value: number) => void;
// }

// const Bill: FC<BillProps> = ({ bill, setBill }) => {
//   return (
//     <>
//       <div>bill: {bill}</div>
//       <input
//         type="number"
//         value={bill}
//         onChange={(e) => {
//           setBill(e.target.valueAsNumber);
//         }}
//       />
//     </>
//   );
// };

// export default Bill;




// / const [bill, setBill] = useState<number | undefined>(undefined)
  // const [people, setPeople] = useState<number | undefined>(undefined)
  // const [tip, setTip] =useState<number | undefined>(undefined)

  // const Allright = bill !== undefined && tip !== undefined && people !== undefined
  // const totalPerson= Allright &&((bill *(1 + tip)) / people).toFixed(2)
  // const tipAmount = Allright && (bill  * tip / people).toFixed(2)
  // const showTip =!(tipAmount ==="NaN" || tipAmount === "Infinity");
  // const showTotal = !(totalPerson === "NaN" || totalPerson === "Infinity")
{/* <div>bill {bill }</div>
<div>people {people }</div>
<div>tip: {tip}</div>



<input style={{width:"300px"}} type="number"
placeholder='enter money' 
value={bill }
onChange={(e)=> {
  setBill(e.target.valueAsNumber)
}}
/>

<button onClick={() => {  
  setTip(0.1)
}}>10%</button>
<input placeholder='number of tip' type='number'
value={tip && tip * 100 }
onChange={(e) => {
  setTip(e.target.valueAsNumber / 100)
}}

/>



<input placeholder='number of people' type='number'
value={people }
onChange={(e) => {
  setPeople(e.target.valueAsNumber)
}}

/>
<div>tip amount / person:  {showTip ? tipAmount : "0.00" }</div>
<div> total / person: {showTotal ? totalPerson : "0.00"}</div> */}