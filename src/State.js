import "./App.css";
import { useState } from "react";

function State() {
  const [number, setNumber] = useState(0);
  const setToZero = () => {
    setNumber(0);
  };

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  const [textColor, setTextColor] = useState("blue");

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [showText, setShowText] = useState(false);

  return (
    <div style={{ marginBottom: "50px" }} className="App">
      <br />
      <button onClick={increase}>Increase </button>
      <button onClick={decrease}>Decrease </button>
      <button onClick={setToZero}>Set to Zero </button>
      <h1 style={{ color: textColor }}>{number}</h1>
      <button
        onClick={() => {
          setTextColor(textColor === "blue" ? "red" : "blue");
        }}
      >
        change colour
      </button>
      <br />
      <br />
      <input type="text" onChange={handleInputChange} />
      {inputValue}

      <br />
      <br />
      <br />
      {showText && <h1>My name is remmy</h1>}
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        show/hide
      </button>
    </div>
  );
}

export default State;
