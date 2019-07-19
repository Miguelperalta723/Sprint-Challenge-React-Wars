import React, { useState, useEffect } from 'react';
import './App.css';
import CharCard from './charCard'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [chars, setchar] = useState('');

  useEffect(() => {
    fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(res => {
      console.log(res.results)
      setchar(res.results)
    })
    .catch(res => {
      console.log('error:', res)
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Cards">
        {
        Array.from(chars).map(function(char){
          return <CharCard key={char.created} nameProp={char.name} eyeProp={char.eye_color}  skinProp={char.skin_color}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
