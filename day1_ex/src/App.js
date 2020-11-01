import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import MultiWelcome from './file3';

function App() {
  return (
    <div className="App">
      <h2>Ex 3</h2>
      <MultiWelcome />
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
    </div>
  );
}

export default App;
