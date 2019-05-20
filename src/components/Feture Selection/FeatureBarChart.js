import React from "react";
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

export default class FeatureBar extends React.Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <React.Fragment>
        <div className="container-card">
          <h4>กราฟแสดงงบประมาณของสำนักงานบริหารหนี้สาธารณะย้อนหลังสามปี</h4>
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
            <YAxis domain={[180000, 220000]} label={{ value: 'Budget (Million Baht)', angle: -90,  position: 'insideleft', dx: -60 }}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="PDMO" fill="#425e6a" />
          </BarChart>
        </div>
      </React.Fragment>
    );
  }
}
