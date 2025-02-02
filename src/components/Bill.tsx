
import { FC } from "react"

interface BillProps {
  bill: number | undefined;
  setBill: (value: number | undefined) => void
}

const Bill: FC<BillProps> = ({bill, setBill}) => {
  return (
    <>
    <label htmlFor="">Bill amount</label>
      <input
        type="number"
        placeholder="Enter bill amount"
        value={bill}
        onChange={(e) => {
          setBill(e.target.valueAsNumber);
        }}
      />
    </>
  )
  
}

export default Bill;
