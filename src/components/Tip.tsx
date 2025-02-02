import { FC } from "react";

interface TipProps {
  tip: number | undefined;
  setTip: (value: number | undefined) => void
}

const TipComponent: FC <TipProps> = ({tip, setTip}) => {
  return (
    <>
    <label>Tip Amount</label>
    <input type="number"
    placeholder="Enter tip percentage"
    value={tip && tip * 100}
    max={100}
    min={0}
    onChange={(e) => {
      setTip(e.target.valueAsNumber / 100)
    }}
    
    />
    </>
  )
}
export default TipComponent;