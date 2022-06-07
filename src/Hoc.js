import React, { useState } from 'react';
import './style.css';
function UpdatedComponent(OrignalComponent) {
  function NewComponent() {
    const [buy, setBuy] = useState(10);
    console.log('ehll' + buy);
    const handleClick = () => {
      setBuy(buy * 5);
    };
    return <OrignalComponent buy={buy} handleClick={handleClick} />;
  }
  return NewComponent;
}
export default UpdatedComponent;
