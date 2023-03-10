import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return; 
    }
    const values = calc.slice(0, -1);

    setCalc(values);
  };
  const deleteLast1 = () => {
    if (calc === "") {
      return; 
    }
    // const values = calc.slice(0, -1);

    setCalc(0);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span></span> : ""}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={deleteLast1}>CLR</button>
          <button onClick={calculate}>=</button>
          <button onClick={calculate}>Azeez</button>
        </div>
      </div>
    </div>
  );
}

export default App;
