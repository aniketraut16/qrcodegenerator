import React, { useState, useEffect } from "react";
import "./calculator.css";

export default function Calculator(props) {
  const [sign, setSign] = useState("+");
  const [totalOp, setTotalOp] = useState(0);
  const [result, setResult] = useState("");

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  useEffect(() => {
    updateResultDiv();
  }, [input1, input2, sign]);

  const updateResultDiv = () => {
    const expression = `${input1}${sign}${input2}`;
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
      setTotalOp(totalOp + 1);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleOperationClick = (newSign) => {
    setSign(newSign);
  };

  const resetCalculator = () => {
    setInput1(0);
    setInput2(0);
    setSign("+");
    setResult("");
  };

  return (
    <div>
      <h1 className="totOp">Total Operations: {totalOp}</h1>
      <div className="inputDisplay">
        <input
          type="number"
          name=""
          id=""
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <h1>{sign}</h1>
        <input
          type="number"
          name=""
          id=""
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className="signDisplay">
        <button className="signbtn" onClick={() => handleOperationClick("+")}>
          +
        </button>
        <button className="signbtn" onClick={() => handleOperationClick("-")}>
          -
        </button>
        <button className="signbtn" onClick={() => handleOperationClick("*")}>
          *
        </button>
        <button className="signbtn" onClick={() => handleOperationClick("/")}>
          /
        </button>
      </div>
      <div className="resultCont">
        <button onClick={resetCalculator}>Reset</button>
        <h1>Result: {result}</h1>
      </div>
    </div>
  );
}
