import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Result from './Result';
import './App.css'; 

const App = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonText) => {
    if (buttonText === 'Borrar') {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + buttonText);
    }
  }

  return (
    <div className='app-container'>
          <div className='result-container'>        
        <Result value={result}/>
        Resultado
      <div className='square-container'>
        {}
        <Keyboard onButtonClick={handleButtonClick} />
        </div>
        </div>
    </div>
  );
}

export default App;