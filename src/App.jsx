import './App.css'
import { useState } from 'react';

export default function App() {
  const [calc, setCalc] = useState("");

  const handleNumber = (e) => {
    e.preventDefault();
    setCalc(calc + e.target.textContent);
  }

  const handleOperators = (e) => {
    e.preventDefault();
    setCalc(calc + e.target.textContent);
  }

  const handleEquals = (e) => {
    e.preventDefault();
    setCalc(eval(calc))
  }

  const del = (e) => {
    e.preventDefault();
    const val = calc.slice(0, -1)
    setCalc(val);
  }

  const clear = (e) => {
    e.preventDefault();
    setCalc("")
  }

  return (
    <main>
      <div className='output'>
        {calc}
      </div>

      <div className='button-container'>
        <button onClick={clear}>AC</button>
        <button onClick={del}>DEL</button>
        <button onClick={handleOperators}>%</button>
        <button onClick={handleOperators}>*</button>
        <button onClick={handleNumber}>1</button>
        <button onClick={handleNumber}>2</button>
        <button onClick={handleNumber}>3</button>
        <button onClick={handleOperators}>/</button>
        <button onClick={handleNumber}>4</button>
        <button onClick={handleNumber}>5</button>
        <button onClick={handleNumber}>6</button>
        <button onClick={handleOperators}>+</button>
        <button onClick={handleNumber}>7</button>
        <button onClick={handleNumber}>8</button>
        <button onClick={handleNumber}>9</button>
        <button onClick={handleOperators}>-</button>
        <button onClick={handleNumber}>0</button>
        <button onClick={handleOperators}>.</button>
        <button className='equals' onClick={handleEquals}>=</button>

      </div>
    </main>
  )
}
