import React from "react";
import "./App.css";
import Regression from "./components/Regression/Regression"
import FeatureSelection from "./components/Feature Selection/FeatureSelection";
import DataSource from "./components/Data Source/DataSource"

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="App-header">Ministry of Finance</div>
        <div className="App-subheader">กระทรวงการคลัง</div>
      </div>
      <div className="Body">
        <FeatureSelection />
        <Regression />
        <DataSource />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
