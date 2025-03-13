import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.display}>{input || "0"}</div>
      <div style={styles.buttons}>
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button style={styles.clear} onClick={clearInput}>
          C
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  display: {
    fontSize: "2em",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 60px)",
    gap: "5px",
  },
  clear: { gridColumn: "span 4", backgroundColor: "red", color: "white" },
};
