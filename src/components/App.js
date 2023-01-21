import React from 'react';
import ReactDOM from 'react-dom';
import EyesOnMe from './EyesOnMe';
import Keypad from './Keypad';
import React, { useState } from 'react';

function App() {
    

  return (
    <div>
      <EyesOnMe  />
      <Keypad handleClick={handleClick}/>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
