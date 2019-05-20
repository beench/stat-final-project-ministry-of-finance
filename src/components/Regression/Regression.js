import React from "react";
import LinearRegression from "./LinearRegression";

export default class Regression extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="description">
          <h1>Regression</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;นำข้อมูลที่ทำ Feature Selection แล้ว
            มาทำ Linear Regression จะได้ค่า Mean Square Error =
            3301.318, ค่า R-square 0.9856 ได้ค่า coeficient, Intercept และสมการ
            ดังนี้
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The coefficient for PDMO is
            0.9954556746824181
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The coefficient for CGD is
            8.49338506035733
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The coefficient for Excise is
            1.1838443047683533
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The coefficient for PMQA is
            0.32892523418799435
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Intercept = 8115.242296558863
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;สมการคือ y
            = 0.9954*XPMQA + 8.4934*XCGD + 1.1838*XExcise + 0.3289*XPDMO + 8115.2423
          </p>
        </div>
        <LinearRegression />
        <p className="description"> จากกราฟจะพบว่าโมเดลสามารถทำนายได้ใกล้เคียงกับค่าจริงมาก</p>
      </React.Fragment>
    );
  }
}
