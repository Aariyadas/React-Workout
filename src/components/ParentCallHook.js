import React, { useState } from 'react';
import TitleCallHook from './TitleCallHook';
import ButtonCall from './Button';
import CountCall from './CountCall';
import Button from './Button';

function ParentCallHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <>
      <TitleCallHook />
      <CountCall text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <CountCall text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
     
    </>
  );
}

export default ParentCallHook;
