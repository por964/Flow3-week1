import React from 'react';
import pers from './file2';
import {males,females} from './file2';

const person = pers;
const { firstName, email } = person;

const mix = males.concat(females);

console.log(mix);

mix.splice(2,0, 'Kurt');
mix.splice(3,0,'Helle');
mix.splice(6,0,'Tina');



console.log(mix);



export default function App2() {
  return (
    <div>
      <h2>Exercise 2</h2>
      <p>{firstName}, {email}</p>
    </div>
  );
};

