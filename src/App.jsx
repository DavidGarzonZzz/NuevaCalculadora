import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) =>
        prev === "0" || prev === "Error" ? value : prev + value
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
        Calculadora Creativa
      </h1>
      <div className="bg-gray-900 p-6 rounded-xl shadow-2xl w-80">
        <div className="text-right text-3xl bg-gray-800 p-4 rounded-md mb-4 font-mono tracking-wider overflow-hidden">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            "C",
            "=",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              className="bg-gray-700 hover:bg-gray-500 active:bg-gray-400 text-white p-4 rounded-md text-2xl font-semibold transition-all duration-150 ease-in-out shadow-md hover:shadow-lg"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
