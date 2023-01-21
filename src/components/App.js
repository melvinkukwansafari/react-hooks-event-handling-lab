import React from 'react';
import ReactDOM from 'react-dom';
import EyesOnMe from './EyesOnMe';
import Keypad from './Keypad';
import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('')
  const handleClick = (e) => {
   inputValue(e.target.value)
  }

  return (
    <div>
      <EyesOnMe  />
      <Keypad handleClick={handleClick}/>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
