import { FC } from "react";

interface PersonsProps {
  persons: number | undefined;
  setPersons: (value: number | undefined) => void;
}

const Persons: FC<PersonsProps> = ({ persons, setPersons }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    
    if (value === '' || /^[1-9]\d*$/.test(value)) {
      setPersons(value ? parseInt(value, 10) : undefined);
    }
  };

  return (
    <div>
      <label htmlFor="">Numbers of person </label>
      <input
        type="number"
        value={persons || ''}
        onChange={handleChange}
        min="1"
        placeholder="Enter number of persons"
      />
    </div>
  );
};

export default Persons;