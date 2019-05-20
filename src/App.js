import React from "react";
import "./App.css";
import BKKStackChart from "./components/BKKStackChart";
// import LineBudget from "./components/Regression/LinearRegression";
import Regression from "./components/Regression/Regression"
import FeatureSelection from "./components/Feture Selection/FeatureSelection";

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
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
