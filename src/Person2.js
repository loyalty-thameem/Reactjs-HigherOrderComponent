import React from 'react';
import UpdatedComponent from './Hoc.js';
import './style.css';

function Person2({ buy, handleClick }) {
  return (
    <div>
      <p>Buy amount is ${buy}</p>
      <button type="button" onClick={handleClick}>
        Buy+
      </button>
    </div>
  );
}
export default UpdatedComponent(Person2);
