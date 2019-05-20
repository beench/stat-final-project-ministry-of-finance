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
    name: "2558",
    wage: 340.9569,
    tmpwage: 3.7364,
    public: 8.4477,
    civil: 393.512,
    bursary: 250.0685
  },
  {
    name: "2559",
    wage: 366.184,
    tmpwage: 3.9804,
    public: 8.2122,
    civil: 152.2655,
    bursary: 4.212
  },
  {
    name: "2560",
    wage: 388.3995,
    tmpwage: 3.963,
    public: 8.7048,
    civil: 216.4993,
    bursary: 250.0685
  },
  {
    name: "2561",
    wage: 387.5824,
    tmpwage: 3.606,
    public: 8.5167,
    civil: 7.5675,
    bursary: 250.0685
  },
  {
    name: "2562",
    wage: 380.6559,
    tmpwage: 4.212,
    public: 8.0116,
    civil: 1.585,
    bursary: 250.0685
  }
];

export default class Stack extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <BarChart
        className="container-chart"
        width={850}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 40,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="wage" stackId="a" fill="#ee5f64" />
        <Bar dataKey="tmpwage" stackId="a" fill="#ff9389" />
        <Bar dataKey="public" stackId="a" fill="#f1d7bb" />
        <Bar dataKey="civil" stackId="a" fill="#e5c4a3" />
        <Bar dataKey="bursary" stackId="a" fill="#7ea5a4" />
      </BarChart>
    );
  }
}
