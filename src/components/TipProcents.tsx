import React from 'react';

const block = [
  { id: 0, Vallue: 0 },
  { id: 1, Vallue: 10 },
  { id: 2, Vallue: 15 },
  { id: 3, Vallue: 20 },
  { id: 4, Vallue: 25 },
  { id: 5, Vallue: 50 }
];

// TipProcents კომპონენტის ტიპიზაცია
interface TipProcentsProps {
  setTip: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function TipProcents({ setTip }: TipProcentsProps) {
  return (
    <div>
      {block.map((procents) => (
        <button key={procents.id} onClick={() => setTip(procents.Vallue / 100)}>
          {procents.Vallue}%
        </button>
      ))}
    </div>
  );
}

export default TipProcents;