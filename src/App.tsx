import React, { useState } from "react";
import "./App.css";

const apiKey = process.env.REACT_APP_API_KEY;
const originUrl = `https://v6.exchangerate-api.com/v6`;

async function getValues() {
  try {
    const response = await fetch(`${originUrl}/${apiKey}/latest/USD`, {});

    let json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  // const [currency, setCurrency] = useState<string>("");

  return (
    <div className="App">
      <button onClick={() => getValues()}>USD</button>
      {/* <button onClick={() => getValues()}>EUR</button> */}
    </div>
  );
}

export default App;
