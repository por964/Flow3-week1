import './App.css';
import React from 'react';
import Counter from './ex1';
import GetJokes from './ex2';
import Member, {MemberTable} from './ListDemo'

function App() {
  return (
    <div>
    <h1>Exercise 1:</h1>
    <Counter base={localStorage.getItem("count")} plusValue={5} minusValue={2}/>
    <br/>
    <h1>Exercise 2</h1>
    <GetJokes/>
    <br/>
    <h1>Exercise 3</h1>
    <Member />
    </div>
  );
}

export default App;
