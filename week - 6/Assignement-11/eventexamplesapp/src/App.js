import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {

  const [count, setCount] = useState(0);

  // Increment counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Static message
  const sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  // Multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Welcome message
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>React Event Examples</h1>

      <h2>Counter: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        OnPress
      </button>

      <hr />

      <CurrencyConvertor />

    </div>
  );
}

export default App;