import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2558', wage: 340956900, tmpwage: 3736400, public:8447700, civil: 393512000, bursary: 250068500,
  },
  {
    name: '2559', wage: 366184000, tmpwage: 3980400, public:8212200, civil: 152265500, bursary: 4212000,
  },
  {
    name: '2560', wage: 388399500, tmpwage: 3963000, public:8704800, civil: 216499300, bursary: 250068500,
  },
  {
    name: '2561', wage: 387582400, tmpwage: 3606000, public:8516700, civil: 7567500, bursary: 250068500,
  },
  {
    name: '2562', wage: 380655900, tmpwage: 4212000, public:8011600, civil: 1585000, bursary: 250068500,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={850}
        height={500}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
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
