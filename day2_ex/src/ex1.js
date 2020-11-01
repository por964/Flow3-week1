import React, {useState, useEffect} from 'react';
import './App.css';


export default function Counter(props) {
  const [value, setValue] = useState(props.base); 
  function Plus() {
     setValue(value + props.plusValue);
  }
  function Minus() {
    setValue(value - props.minusValue);
 }
 useEffect(() => {
  localStorage.setItem("value", value)
});
  return (
    <div>
      <button onClick={Minus}>-</button>
      {value}
      <button onClick={Plus}>+</button>
    </div>
  );
};