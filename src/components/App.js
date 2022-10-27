import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const API = 'http://localhost:3000/poems'

function App() {
  const [poems, setPoems] = useState([]);
  const [poemForm, setPoemForm] = useState(true)

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(poemArray => {
      setPoems(poemArray);
    })
  }, []);

  function handleClick() {
    setPoemForm(!poemForm);
  };

  function submitForm(body) {
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'Application/json'
      },
      body: JSON.stringify(body)
    };

    fetch(API, configObj)
  };
  
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick} >Show/hide new poem form</button>
        {poemForm ? <NewPoemForm submitForm={submitForm}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
