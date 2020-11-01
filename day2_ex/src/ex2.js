import React, {useState, useEffect} from 'react';
import './App.css';


export default function GetJokes() {

    const [joke, setJoke] = useState(""); 

    const options = makeOptions("GET");

    let interval = 20000;

    useEffect(() => {
        
      setTimeout( () =>
        (fetch('https://api.chucknorris.io/jokes/random', options).then(res => res.json())
        .then(data => { setJoke(data.value);
      })), interval);
    })
    return (
      <div>
      <button onClick={() =>
      fetch('https://api.chucknorris.io/jokes/random', options).then(res => res.json()).then(data => {
        setJoke(data.value);
      })      }>
    Get a joke</button>
      <br/>
      {joke}
      </div>
    )
  }

  function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}
;