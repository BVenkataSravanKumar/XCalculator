import React, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");      
  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        if (!/^[0-9+\-*/.]+$/.test(expression)) {
          setResult("Error");
          return;
        }
            // eslint-disable-next-line
        const res = Function("return " + expression)(); 
        setResult(res.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      <h2>{result}</h2>

      <div className="calculator">
        {["7", "8", "9", "+",
          "4", "5", "6", "-",
          "1", "2", "3", "*",
          "C", "0", "=", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
