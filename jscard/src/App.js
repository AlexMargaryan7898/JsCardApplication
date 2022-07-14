import React, { useState } from "react";
import "./App.css";
import AddInfo from "./Components/Instructions/instructions";
import CardAndHeader from "./Components/CardAndHeader/CardAndHeader";
function App() {
  return (
    <div className="App">
      <div className="soft">
        <CardAndHeader/>
        <div className="secondCol"></div>
        <AddInfo />
      </div>
    </div>
  );
}

export default App;
