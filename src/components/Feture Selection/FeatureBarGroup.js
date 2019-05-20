import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    year: "2560",
    PMQA: 707.3,
    CGD: 1389.8,
    Excise: 2703.7,
    PDMO: 193141.1
  },
  {
    year: "2561",
    PMQA: 1010.8,
    CGD: 1462.3,
    Excise: 2491.8,
    PDMO: 213662.5
  },
  {
    year: "2562",
    PMQA: 1377.7,
    CGD: 1834.3,
    Excise: 4291.7,
    PDMO: 216661.6
  }
];

export default class BarGroup extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <React.Fragment>
        <div className="container-card">
          <h4>กราฟแสดงงบประมาณของสำนักงานปลัดกระทรวงการคลัง กรมบัญชีกลาง <br/>และกรมสรรพสามิต ย้อนหลัง 3 ปี</h4>
          <BarChart
            className="container-chart"
            width={850}
            height={450}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 40,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[200, 4800]} label={{ value: 'Budget (Million Baht)', angle: -90,  position: 'insideleft', dx: -60 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="PMQA" fill="#244c3c " />
            <Bar dataKey="CGD" fill="#dcdcbb" />
            <Bar dataKey="Excise" fill="#97b5a3" />
            {/* <Bar dataKey="PDMO" fill="#82ca9d" /> */}
          </BarChart>
        </div>
      </React.Fragment>
    );
  }
}
