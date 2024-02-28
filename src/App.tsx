import React from "react";
import "./App.css";

const originUrl = `http://api.nbp.pl/api/`;

function getValues() {
  try {
    const response = fetch(`http://api.nbp.pl/api/exchangerates/rates/a/chf/`, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  return (
    <div className="App">
      <button onClick={() => getValues}>Hi HU HU</button>
    </div>
  );
}

export default App;
