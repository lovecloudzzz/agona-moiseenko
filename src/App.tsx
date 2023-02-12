import React from 'react';
import '../src/styles/App.css'
import DarkLightSwitch from "./components/DarkLightSwitch";
import InputText from "./components/InputText";

function App() {
  return (
    <div className="App">
      <DarkLightSwitch/>
      <InputText/>
    </div>
  );
}

export default App;
