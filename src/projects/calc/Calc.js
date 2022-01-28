/* eslint no-eval: 0 */
import React, { useState } from "react";

import "./calc.css";

const Calc = (props) => {
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (v) => {
    if (
      (ops.includes(v) && calc === "") ||
      (ops.includes(v) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + v);
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
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return props.trigger ? (
    <div className="popup">
      <button className="close-btn" onClick={() => props.setTrigger(false)}>
        Back
      </button>
      <div className="Calc">
        <div className="calculator">
          <div className="calcdisplay">{calc || "0"}</div>
          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Calc;
