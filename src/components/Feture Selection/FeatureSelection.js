import React from "react";
import FeatureAreaChart from "./FeatureAreaChart";
import FeatureBarGroup from "./FeatureBarGroup";
import FeatureBarChart from "./FeatureBarChart";

export default class FeatureSelection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="description">
          <h1>Feature Selection</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;จากการทำ High Coefficient Filtering
            และ Random Forest ทำให้เหลือ feature ที่มีความสำคัญอยู่ 4 ตัว คือ{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.PMQA หรือ สำนักงานปลัดกระทรวงการคลัง
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.CGD หรือ กรมบัญชีกลาง
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Excise หรือ กรมสรรพสามิต
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.PDMO หรือ สำนักงานบริหารหนี้สาธารณะ
            <br />
            ได้กราฟดังต่อไปนี้
          </p>
        </div>
        <FeatureBarGroup />
        <p className="description">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เนื่องจากสำนักงานบริหารหนี้สาธารณะมีงบประมาณที่สูงกว่าหน่วยงานอื่นมาก
          ทำให้พลอตกราฟแยก ดังนี้ <br />
        </p>
        <FeatureBarChart />
        <p className="description">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;จากข้อมูลงบประมาณการคลังที่ให้แก่แต่ละหน่วยงานภายในรายปี ตั้งแต่ปี 2550 - 2562 สามารถ plot กราฟแสดงงบประมาณรายปีของทุกหน่วยงานในกระทรวงการคลังได้ ดังนี้<br />
        </p>
        <FeatureAreaChart />
      </React.Fragment>
    );
  }
}
