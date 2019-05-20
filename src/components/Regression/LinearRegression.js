import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";

const data = [
  {
    year: "2550",
    real: 174189,
    pred: 179205.625763
  },
  {
    year: "2551",
    real: 179672,
    pred: 179543.742926
  },
  {
    year: "2552",
    real: 201565.0,
    pred: 200263.085797
  },
  {
    year: "2553",
    real: 215258.0,
    pred: 216905.836199
  },
  {
    year: "2554",
    real: 208384.0,
    pred: 210151.034266
  },
  {
    year: "2555",
    real: 191415.1,
    pred: 191225.054668
  },
  {
    year: "2556",
    real: 180707.9,
    pred: 180456.677434
  },
  {
    year: "2557",
    real: 228796.6,
    pred: 232720.446337
  },
  {
    year: "2558",
    real: 185852.2,
    pred: 187997.045296
  },
  {
    year: "2559",
    real: 199174.1,
    pred: 197583.261887
  },
  {
    year: "2560",
    real: 217713.6,
    pred: 215616.161528
  },
  {
    year: "2561",
    real: 238246.9,
    pred: 236508.101152
  },
  {
    year: "2562",
    real: 242948.0,
    pred: 242857.018431
  }
];

export default class LineBudget extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <React.Fragment>
        <div className="container-card">
          <h4>กราฟแสดงค่าจริงและค่า predict ของงบประมาณกระทรวงการคลังทั้งหมดในแต่ละปี</h4>
          <LineChart
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
            <YAxis domain={[160000]} label={{ value: 'Budget (Million Baht)', angle: -90,  position: 'insideleft', dx: -60 }}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="real"
              stroke="#ee5f64"
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="pred"
              stroke="#7ea5a4"
              activeDot={{ r: 7 }}
            />
            <Brush />
          </LineChart>
        </div>
      </React.Fragment>
    );
  }
}
