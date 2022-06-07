import React from 'react';
import UpdatedComponent from './Hoc.js';
import './style.css';

function Person1({ buy, handleClick }) {
  console.log('hello' + buy);
  return (
    <div>
      <p>Buy amount is ${buy}</p>
      <button type="button" onClick={handleClick}>
        Buy+
      </button>
    </div>
  );
}
export default UpdatedComponent(Person1);
