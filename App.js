

import { useState } from 'react';
import './App.css';

function App() {
  const [text, settext] = useState(0);

  const incval = () => {
    settext(text + 1)
  }

  const decval = () => {
    settext(text - 1)
  }

  return (
    <div className="App">
      <h1>Increment and Decrement</h1>
      <button onClick={incval}>Increment</button>
      <h2>{text}</h2>
      <button onClick={decval}>Decrement</button>
    </div>
  );
}

export default App;
